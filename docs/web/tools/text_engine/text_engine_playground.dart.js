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
a[c]=function(){a[c]=function(){H.J3(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.vL"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.vL"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.vL(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={uI:function uI(a){this.a=a},
t6:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
vp:function(a,b,c,d){var t=new H.pl(a,b,c,[d])
t.fj(a,b,c,d)
return t},
ds:function(a,b,c,d){if(!!J.an(a).$ist)return new H.fb(a,b,[c,d])
return new H.hJ(a,b,[c,d])},
hA:function(){return new P.df("No element")},
G5:function(){return new P.df("Too many elements")},
xp:function(){return new P.df("Too few elements")},
k2:function(a,b,c,d){if(c-b<=32)H.Hp(a,b,c,d)
else H.Ho(a,b,c,d)},
Hp:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bk(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.cA(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
Ho:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.ap(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.ap(a3+a4,2)
p=q-t
o=q+t
n=J.bk(a2)
m=n.n(a2,s)
l=n.n(a2,p)
k=n.n(a2,q)
j=n.n(a2,o)
i=n.n(a2,r)
if(J.cA(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.cA(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.cA(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.cA(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cA(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.cA(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.cA(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.cA(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cA(a5.$2(j,i),0)){h=i
i=j
j=h}n.i(a2,s,m)
n.i(a2,q,k)
n.i(a2,r,i)
n.i(a2,p,n.n(a2,a3))
n.i(a2,o,n.n(a2,a4))
g=a3+1
f=a4-1
if(J.aZ(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.n(a2,e)
c=a5.$2(d,l)
b=J.an(c)
if(b.T(c,0))continue
if(b.a0(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dw(c)
if(b.aB(c,0)){--f
continue}else{a=f-1
if(b.a0(c,0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.f_(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.cA(a5.$2(d,j),0))for(;!0;)if(J.cA(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.f_(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
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
H.k2(a2,a3,g-2,a5)
H.k2(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.aZ(a5.$2(n.n(a2,g),l),0);)++g
for(;J.aZ(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.aZ(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.aZ(a5.$2(d,j),0))for(;!0;)if(J.aZ(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.f_(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.k2(a2,g,f,a5)}else H.k2(a2,g,f,a5)},
le:function le(a){this.a=a},
t:function t(){},
eB:function eB(){},
pl:function pl(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
dS:function dS(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hJ:function hJ(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fb:function fb(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jK:function jK(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
eD:function eD(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
ej:function ej(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
ke:function ke(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iN:function iN(){},
pO:function pO(){},
i3:function i3(){},
kA:function(a,b){var t=a.bB(b)
if(!u.globalState.d.cy)u.globalState.f.bM()
return t},
yZ:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.an(s).$isp)throw H.k(P.dI("Arguments to main must be a List: "+H.x(s)))
u.globalState=new H.r5(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$wL()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.qD(P.uN(null,H.eX),0)
r=P.C
s.z=new H.w(0,null,null,null,null,null,0,[r,H.fI])
s.ch=new H.w(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.r4()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.B3,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.HN)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a_(null,null,null,r)
p=new H.fz(0,null,!1)
o=new H.fI(s,new H.w(0,null,null,null,null,null,0,[r,H.fz]),q,u.createNewIsolate(),p,new H.dK(H.tm()),new H.dK(H.tm()),!1,!1,[],P.a_(null,null,null,null),null,null,!1,!0,P.a_(null,null,null,null))
q.h(0,0)
o.du(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fO(a,{func:1,args:[,]}))o.bB(new H.tp(t,a))
else if(H.fO(a,{func:1,args:[,,]}))o.bB(new H.tq(t,a))
else o.bB(a)
u.globalState.f.bM()},
HN:function(a){var t=P.hF(["command","print","msg",a])
return new H.dF(!0,P.ib(null,P.C)).aC(t)},
B5:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.B6()
return},
B6:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.k(new P.V("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.k(new P.V('Cannot extract URI from "'+t+'"'))},
B3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eW(!0,[]).b4(b.data)
s=J.bk(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eW(!0,[]).b4(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eW(!0,[]).b4(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.C
j=P.a_(null,null,null,k)
i=new H.fz(0,null,!1)
h=new H.fI(s,new H.w(0,null,null,null,null,null,0,[k,H.fz]),j,u.createNewIsolate(),i,new H.dK(H.tm()),new H.dK(H.tm()),!1,!1,[],P.a_(null,null,null,null),null,null,!1,!0,P.a_(null,null,null,null))
j.h(0,0)
h.du(0,i)
u.globalState.f.a.aR(0,new H.eX(h,new H.mL(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bM()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fS(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bM()
break
case"close":u.globalState.ch.am(0,$.$get$wM().n(0,a))
a.terminate()
u.globalState.f.bM()
break
case"log":H.B2(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hF(["command","print","msg",t])
k=new H.dF(!0,P.ib(null,P.C)).aC(k)
s.toString
self.postMessage(k)}else P.fP(s.n(t,"msg"))
break
case"error":throw H.k(s.n(t,"msg"))}},
B2:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hF(["command","log","msg",a])
r=new H.dF(!0,P.ib(null,P.C)).aC(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.bI(q)
t=H.cq(q)
s=P.lN(t)
throw H.k(s)}},
B4:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.xE=$.xE+("_"+s)
$.xF=$.xF+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fS(f,["spawned",new H.fJ(s,r),q,t.r])
r=new H.mM(a,b,c,d,t)
if(e===!0){t.ea(q,q)
u.globalState.f.a.aR(0,new H.eX(t,r,"start isolate"))}else r.$0()},
Hw:function(a,b){var t=new H.pG(!0,!1,null)
t.fk(a,b)
return t},
I5:function(a){return new H.eW(!0,[]).b4(new H.dF(!1,P.ib(null,P.C)).aC(a))},
tp:function tp(a,b){this.a=a
this.b=b},
tq:function tq(a,b){this.a=a
this.b=b},
r5:function r5(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
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
fI:function fI(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
_.c=c
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
r0:function r0(a,b){this.a=a
this.b=b},
qD:function qD(a,b){this.a=a
this.b=b},
qE:function qE(a){this.a=a},
eX:function eX(a,b,c){this.a=a
this.b=b
this.c=c},
r4:function r4(){},
mL:function mL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mM:function mM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qp:function qp(){},
fJ:function fJ(b,a){this.b=b
this.a=a},
r7:function r7(a,b){this.a=a
this.b=b},
ig:function ig(b,c,a){this.b=b
this.c=c
this.a=a},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
pG:function pG(a,b,c){this.a=a
this.b=b
this.c=c},
pH:function pH(a,b){this.a=a
this.b=b},
pI:function pI(a,b){this.a=a
this.b=b},
dK:function dK(a){this.a=a},
dF:function dF(a,b){this.a=a
this.b=b},
eW:function eW(a,b){this.a=a
this.b=b},
A5:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=a.gaf(a)
s=P.d0(t,!0,H.ak(t,"n",0))
t=s.length
q=0
while(!0){p=s.length
if(!(q<p)){r=!0
break}o=s[q]
if(typeof o!=="string"){r=!1
break}p===t||(0,H.bu)(s);++q}if(r){n={}
for(m=!1,l=null,k=0,q=0;q<s.length;s.length===p||(0,H.bu)(s),++q){o=s[q]
j=a.n(0,o)
if(!J.aZ(o,"__proto__")){if(!n.hasOwnProperty(o))++k
n[o]=j}else{l=j
m=!0}}if(m)return new H.lj(l,k+1,n,s,[b,c])
return new H.h5(k,n,s,[b,c])}return new H.li(P.G7(a,null,null),[b,c])},
A6:function(){throw H.k(new P.V("Cannot modify unmodifiable Map"))},
IE:function(a){return u.types[a]},
yS:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.an(a).$isaG},
x:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cB(a)
if(typeof t!=="string")throw H.k(H.bB(a))
return t},
GZ:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.or(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
eF:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
v9:function(a,b){if(b==null)throw H.k(new P.bQ(a,null,null))
return b.$1(a)},
fx:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.v9(a,c)
if(3>=t.length)return H.u(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.v9(a,c)}if(b<2||b>36)throw H.k(P.bz(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a4(q,o)|32)>r)return H.v9(a,c)}return parseInt(a,b)},
xC:function(a,b){return b.$1(a)},
xG:function(a,b){var t,s
H.yK(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.xC(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.tz(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.xC(a,b)}return t},
oi:function(a){var t,s,r,q,p,o,n,m
t=J.an(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.S||!!J.an(a).$iseP){p=C.z(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a4(q,0)===36)q=C.c.ag(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.tg(H.kF(a),0,null),u.mangledGlobalNames)},
oh:function(a){return"Instance of '"+H.oi(a)+"'"},
Gv:function(){if(!!self.location)return self.location.href
return},
xB:function(a){var t,s,r,q,p
t=J.c4(a)
if(typeof t!=="number")return t.eV()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
GA:function(a){var t,s,r,q
t=H.a([],[P.C])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.bu)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.k(H.bB(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.b1(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.k(H.bB(q))}return H.xB(t)},
xI:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.bu)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.k(H.bB(q))
if(q<0)throw H.k(H.bB(q))
if(q>65535)return H.GA(a)}return H.xB(a)},
GB:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.eV()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hU:function(a){var t
if(typeof a!=="number")return H.a6(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.b1(t,10))>>>0,56320|t&1023)}}throw H.k(P.bz(a,0,1114111,null,null))},
d2:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
xD:function(a){return a.b?H.d2(a).getUTCFullYear()+0:H.d2(a).getFullYear()+0},
vb:function(a){return a.b?H.d2(a).getUTCMonth()+1:H.d2(a).getMonth()+1},
va:function(a){return a.b?H.d2(a).getUTCDate()+0:H.d2(a).getDate()+0},
Gw:function(a){return a.b?H.d2(a).getUTCHours()+0:H.d2(a).getHours()+0},
Gy:function(a){return a.b?H.d2(a).getUTCMinutes()+0:H.d2(a).getMinutes()+0},
Gz:function(a){return a.b?H.d2(a).getUTCSeconds()+0:H.d2(a).getSeconds()+0},
Gx:function(a){return a.b?H.d2(a).getUTCMilliseconds()+0:H.d2(a).getMilliseconds()+0},
vc:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.k(H.bB(a))
return a[b]},
xH:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.k(H.bB(a))
a[b]=c},
a6:function(a){throw H.k(H.bB(a))},
u:function(a,b){if(a==null)J.c4(a)
throw H.k(H.cc(a,b))},
cc:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cY(!0,b,"index",null)
t=J.c4(a)
if(!(b<0)){if(typeof t!=="number")return H.a6(t)
s=b>=t}else s=!0
if(s)return P.bD(b,a,"index",null,t)
return P.jZ(b,"index",null)},
Iu:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.cY(!0,a,"start",null)
if(a<0||a>c)return new P.eH(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.cY(!0,b,"end",null)
if(b<a||b>c)return new P.eH(a,c,!0,b,"end","Invalid value")}return new P.cY(!0,b,"end",null)},
bB:function(a){return new P.cY(!0,a,null,null)},
kC:function(a){if(typeof a!=="number")throw H.k(H.bB(a))
return a},
vK:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(H.bB(a))
return a},
yK:function(a){if(typeof a!=="string")throw H.k(H.bB(a))
return a},
k:function(a){var t
if(a==null)a=new P.fu()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.z2})
t.name=""}else t.toString=H.z2
return t},
z2:function(){return J.cB(this.dartException)},
aY:function(a){throw H.k(a)},
bu:function(a){throw H.k(new P.bC(a))},
dY:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.pL(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
pM:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
y_:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
uK:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.n4(a,s,t?null:b.receiver)},
bI:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.tr(a)
if(a==null)return
if(a instanceof H.hi)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.b1(r,16)&8191)===10)switch(q){case 438:return t.$1(H.uK(H.x(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.x(s)+" (Error "+q+")"
return t.$1(new H.jS(p,null))}}if(a instanceof TypeError){o=$.$get$xU()
n=$.$get$xV()
m=$.$get$xW()
l=$.$get$xX()
k=$.$get$y0()
j=$.$get$y1()
i=$.$get$xZ()
$.$get$xY()
h=$.$get$y3()
g=$.$get$y2()
f=o.aM(s)
if(f!=null)return t.$1(H.uK(s,f))
else{f=n.aM(s)
if(f!=null){f.method="call"
return t.$1(H.uK(s,f))}else{f=m.aM(s)
if(f==null){f=l.aM(s)
if(f==null){f=k.aM(s)
if(f==null){f=j.aM(s)
if(f==null){f=i.aM(s)
if(f==null){f=l.aM(s)
if(f==null){f=h.aM(s)
if(f==null){f=g.aM(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jS(s,f==null?null:f.method))}}return t.$1(new H.pN(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.k6()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cY(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.k6()
return a},
cq:function(a){var t
if(a instanceof H.hi)return a.b
if(a==null)return new H.kv(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.kv(a,null)},
IQ:function(a){if(a==null||typeof a!='object')return J.dH(a)
else return H.eF(a)},
yP:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
IL:function(a,b,c,d,e,f,g){switch(c){case 0:return H.kA(b,new H.tb(a))
case 1:return H.kA(b,new H.tc(a,d))
case 2:return H.kA(b,new H.td(a,d,e))
case 3:return H.kA(b,new H.te(a,d,e,f))
case 4:return H.kA(b,new H.tf(a,d,e,f,g))}throw H.k(P.lN("Unsupported number of arguments for wrapped closure"))},
dv:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.IL)
a.$identity=t
return t},
A1:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.an(c).$isp){t.$reflectionInfo=c
r=H.GZ(t).r}else r=c
q=d?Object.create(new H.oS().constructor.prototype):Object.create(new H.fZ(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dL
$.dL=J.ek(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.wg(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.IE,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.wd:H.tD
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.k("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.wg(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
zZ:function(a,b,c,d){var t=H.tD
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
wg:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.A0(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.zZ(s,!q,t,b)
if(s===0){q=$.dL
$.dL=J.ek(q,1)
o="self"+H.x(q)
q="return function(){var "+o+" = this."
p=$.h_
if(p==null){p=H.l6("self")
$.h_=p}return new Function(q+H.x(p)+";return "+o+"."+H.x(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dL
$.dL=J.ek(q,1)
n+=H.x(q)
q="return function("+n+"){return this."
p=$.h_
if(p==null){p=H.l6("self")
$.h_=p}return new Function(q+H.x(p)+"."+H.x(t)+"("+n+");}")()},
A_:function(a,b,c,d){var t,s
t=H.tD
s=H.wd
switch(b?-1:a){case 0:throw H.k(new H.ow("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
A0:function(a,b){var t,s,r,q,p,o,n,m
t=H.zY()
s=$.wc
if(s==null){s=H.l6("receiver")
$.wc=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.A_(q,!o,r,b)
if(q===1){s="return function(){return this."+H.x(t)+"."+H.x(r)+"(this."+H.x(s)+");"
o=$.dL
$.dL=J.ek(o,1)
return new Function(s+H.x(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.x(t)+"."+H.x(r)+"(this."+H.x(s)+", "+m+");"
o=$.dL
$.dL=J.ek(o,1)
return new Function(s+H.x(o)+"}")()},
vL:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.an(c).$isp){c.fixed$length=Array
t=c}else t=c
return H.A1(a,b,t,!!d,e,f)},
tD:function(a){return a.a},
wd:function(a){return a.c},
zY:function(){var t=$.h_
if(t==null){t=H.l6("self")
$.h_=t}return t},
l6:function(a){var t,s,r,q,p
t=new H.fZ("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
IT:function(a,b){var t=J.bk(b)
throw H.k(H.wf(H.oi(a),t.L(b,3,t.gm(b))))},
kH:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.an(a)[b]
else t=!0
if(t)return a
H.IT(a,b)},
yO:function(a){var t=J.an(a)
return"$S" in t?t.$S():null},
fO:function(a,b){var t
if(a==null)return!1
t=H.yO(a)
return t==null?!1:H.vO(t,b)},
wf:function(a,b){return new H.lb("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
J3:function(a){throw H.k(new P.lw(a))},
tm:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
yQ:function(a){return u.getIsolateTag(a)},
c3:function(a){return new H.dZ(a,null)},
a:function(a,b){a.$ti=b
return a},
kF:function(a){if(a==null)return
return a.$ti},
yR:function(a,b){return H.vR(a["$as"+H.x(b)],H.kF(a))},
ak:function(a,b,c){var t=H.yR(a,b)
return t==null?null:t[c]},
N:function(a,b){var t=H.kF(a)
return t==null?null:t[b]},
dG:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.tg(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.x(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dG(t,b)
return H.I9(a,b)}return"unknown-reified-type"},
I9:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dG(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dG(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dG(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.IC(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dG(l[j],b)+(" "+H.x(j))}q+="}"}return"("+q+") => "+t},
tg:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.ch("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.O=p+", "
o=a[s]
if(o!=null)q=!1
p=t.O+=H.dG(o,c)}return q?"":"<"+t.A(0)+">"},
kG:function(a){var t,s
if(a instanceof H.f7){t=H.yO(a)
if(t!=null)return H.dG(t,null)}s=J.an(a).constructor.builtin$cls
if(a==null)return s
return s+H.tg(a.$ti,0,null)},
vR:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
e2:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kF(a)
s=J.an(a)
if(s[b]==null)return!1
return H.yI(H.vR(s[d],t),c)},
J_:function(a,b,c,d){if(a==null)return a
if(H.e2(a,b,c,d))return a
throw H.k(H.wf(H.oi(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.tg(c,0,null),u.mangledGlobalNames)))},
yI:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.d9(a[s],b[s]))return!1
return!0},
eZ:function(a,b,c){return a.apply(b,H.yR(b,c))},
Ip:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ad"||b.builtin$cls==="cG"
if(b==null)return!0
t=H.kF(a)
a=J.an(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.vO(r.apply(a,null),b)}return H.d9(s,b)},
d9:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="cG")return!0
if('func' in b)return H.vO(a,b)
if('func' in a)return b.builtin$cls==="J9"||b.builtin$cls==="ad"
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
return H.yI(H.vR(o,t),r)},
yH:function(a,b,c){var t,s,r,q,p
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
Ig:function(a,b){var t,s,r,q,p,o
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
vO:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(n===m){if(!H.yH(r,q,!1))return!1
if(!H.yH(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.d9(i,h)||H.d9(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.d9(i,h)||H.d9(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.d9(i,h)||H.d9(h,i)))return!1}}return H.Ig(a.named,b.named)},
Jj:function(a){var t=$.vM
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
Ji:function(a){return H.eF(a)},
Jh:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
IN:function(a){var t,s,r,q,p,o
t=$.vM.$1(a)
s=$.t3[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ta[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.yG.$2(a,t)
if(t!=null){s=$.t3[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ta[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.vQ(r)
$.t3[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.ta[t]=r
return r}if(p==="-"){o=H.vQ(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.yU(a,r)
if(p==="*")throw H.k(new P.eO(t))
if(u.leafTags[t]===true){o=H.vQ(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.yU(a,r)},
yU:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.ti(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
vQ:function(a){return J.ti(a,!1,null,!!a.$isaG)},
IO:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.ti(t,!1,null,!!t.$isaG)
else return J.ti(t,c,null,null)},
IJ:function(){if(!0===$.vN)return
$.vN=!0
H.IK()},
IK:function(){var t,s,r,q,p,o,n,m
$.t3=Object.create(null)
$.ta=Object.create(null)
H.II()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.yV.$1(p)
if(o!=null){n=H.IO(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
II:function(){var t,s,r,q,p,o,n
t=C.T()
t=H.fN(C.U,H.fN(C.V,H.fN(C.y,H.fN(C.y,H.fN(C.X,H.fN(C.W,H.fN(C.Y(C.z),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.vM=new H.t7(p)
$.yG=new H.t8(o)
$.yV=new H.t9(n)},
fN:function(a,b){return a(b)||b},
uF:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.k(new P.bQ("Illegal RegExp pattern ("+String(q)+")",a,null))},
IY:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
z_:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hB){q=b.gdT()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.aY(H.bB(b))
throw H.k("String.replaceAll(Pattern) UNIMPLEMENTED")}},
Ie:function(a){return a},
IZ:function(a,b,c,d){var t,s,r,q,p,o
t=J.an(b)
if(!t.$isv5)throw H.k(P.dJ(b,"pattern","is not a Pattern"))
for(t=t.aU(b,a),t=new H.ki(t.a,t.b,t.c,null),s=0,r="";t.D();){q=t.d
p=q.b
o=p.index
r=r+H.x(H.yx().$1(C.c.L(a,s,o)))+H.x(c.$1(q))
s=o+p[0].length}t=r+H.x(H.yx().$1(C.c.ag(a,s)))
return t.charCodeAt(0)==0?t:t},
li:function li(a,$ti){this.a=a
this.$ti=$ti},
lh:function lh(){},
h5:function h5(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
lj:function lj(d,a,b,c,$ti){var _=this
_.d=d
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
or:function or(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
pL:function pL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jS:function jS(a,b){this.a=a
this.b=b},
n4:function n4(a,b,c){this.a=a
this.b=b
this.c=c},
pN:function pN(a){this.a=a},
hi:function hi(a,b){this.a=a
this.b=b},
tr:function tr(a){this.a=a},
kv:function kv(a,b){this.a=a
this.b=b},
tb:function tb(a){this.a=a},
tc:function tc(a,b){this.a=a
this.b=b},
td:function td(a,b,c){this.a=a
this.b=b
this.c=c},
te:function te(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tf:function tf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f7:function f7(){},
pr:function pr(){},
oS:function oS(){},
fZ:function fZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lb:function lb(a){this.a=a},
ow:function ow(a){this.a=a},
dZ:function dZ(a,b){this.a=a
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
n3:function n3(a){this.a=a},
n2:function n2(a){this.a=a},
nf:function nf(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ng:function ng(a,$ti){this.a=a
this.$ti=$ti},
nh:function nh(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
t7:function t7(a){this.a=a},
t8:function t8(a){this.a=a},
t9:function t9(a){this.a=a},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kt:function kt(a,b){this.a=a
this.b=b},
qj:function qj(a,b,c){this.a=a
this.b=b
this.c=c},
ki:function ki(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k7:function k7(a,b,c){this.a=a
this.b=b
this.c=c},
rq:function rq(a,b,c){this.a=a
this.b=b
this.c=c},
rr:function rr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cI:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(P.dI("Invalid length "+H.x(a)))
return a},
yt:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dI("Invalid view offsetInBytes "+H.x(b)))},
yw:function(a){return a},
Gt:function(a){return new Int8Array(H.yw(a))},
cK:function(a,b,c){H.yt(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
I4:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aB()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.k(H.Iu(a,b,c))
return b},
fs:function fs(){},
eE:function eE(){},
nG:function nG(){},
jN:function jN(){},
hN:function hN(){},
hP:function hP(){},
hR:function hR(){},
hO:function hO(){},
hQ:function hQ(){},
hS:function hS(){},
nH:function nH(){},
nI:function nI(){},
nJ:function nJ(){},
nK:function nK(){},
nL:function nL(){},
nM:function nM(){},
nN:function nN(){},
jO:function jO(){},
ft:function ft(){},
IC:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
IS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
an:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jF.prototype
return J.jE.prototype}if(typeof a=="string")return J.ez.prototype
if(a==null)return J.n0.prototype
if(typeof a=="boolean")return J.n_.prototype
if(a.constructor==Array)return J.ey.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eA.prototype
return a}if(a instanceof P.ad)return a
return J.t4(a)},
ti:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
t4:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.vN==null){H.IJ()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.k(new P.eO("Return interceptor for "+H.x(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$uJ()]
if(p!=null)return p
p=H.IN(a)
if(p!=null)return p
if(typeof a=="function")return C.Z
s=Object.getPrototypeOf(a)
if(s==null)return C.K
if(s===Object.prototype)return C.K
if(typeof q=="function"){Object.defineProperty(q,$.$get$uJ(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
xq:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
G6:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a4(a,b)
if(s!==32&&s!==13&&!J.xq(s))break;++b}return b},
uE:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.Z(a,t)
if(s!==32&&s!==13&&!J.xq(s))break}return b},
bk:function(a){if(typeof a=="string")return J.ez.prototype
if(a==null)return a
if(a.constructor==Array)return J.ey.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eA.prototype
return a}if(a instanceof P.ad)return a
return J.t4(a)},
dk:function(a){if(a==null)return a
if(a.constructor==Array)return J.ey.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eA.prototype
return a}if(a instanceof P.ad)return a
return J.t4(a)},
dw:function(a){if(typeof a=="number")return J.fr.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eP.prototype
return a},
kE:function(a){if(typeof a=="number")return J.fr.prototype
if(typeof a=="string")return J.ez.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eP.prototype
return a},
d8:function(a){if(typeof a=="string")return J.ez.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eP.prototype
return a},
aq:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.eA.prototype
return a}if(a instanceof P.ad)return a
return J.t4(a)},
ek:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kE(a).V(a,b)},
aZ:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.an(a).T(a,b)},
vT:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dw(a).aw(a,b)},
cA:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dw(a).aB(a,b)},
f_:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dw(a).a0(a,b)},
tt:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kE(a).av(a,b)},
fQ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.yS(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bk(a).n(a,b)},
kJ:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.yS(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.dk(a).i(a,b,c)},
z5:function(a,b){return J.dk(a).h(a,b)},
z6:function(a,b,c,d){return J.aq(a).hj(a,b,c,d)},
z7:function(a,b){return J.d8(a).aU(a,b)},
e3:function(a,b){return J.aq(a).hm(a,b)},
vU:function(a){return J.aq(a).ho(a)},
tu:function(a,b,c){return J.dw(a).ad(a,b,c)},
z8:function(a){return J.aq(a).eg(a)},
z9:function(a,b){return J.kE(a).aD(a,b)},
za:function(a,b){return J.aq(a).aE(a,b)},
zb:function(a,b){return J.bk(a).Y(a,b)},
kK:function(a,b,c){return J.bk(a).ei(a,b,c)},
zc:function(a,b){return J.aq(a).hy(a,b)},
vV:function(a,b){return J.dk(a).S(a,b)},
zd:function(a,b,c,d){return J.dk(a).bE(a,b,c,d)},
kL:function(a){return J.dw(a).al(a)},
vW:function(a,b){return J.dk(a).a5(a,b)},
vX:function(a){return J.aq(a).gec(a)},
vY:function(a){return J.aq(a).gee(a)},
vZ:function(a){return J.aq(a).gef(a)},
ze:function(a){return J.aq(a).gbA(a)},
fR:function(a){return J.aq(a).gat(a)},
w_:function(a){return J.aq(a).gcW(a)},
dH:function(a){return J.an(a).ga6(a)},
kM:function(a){return J.bk(a).gW(a)},
w0:function(a){return J.aq(a).gX(a)},
cX:function(a){return J.dk(a).gR(a)},
zf:function(a){return J.aq(a).gaf(a)},
c4:function(a){return J.bk(a).gm(a)},
w1:function(a){return J.aq(a).gG(a)},
zg:function(a){return J.aq(a).gi9(a)},
w2:function(a){return J.aq(a).gd0(a)},
w3:function(a){return J.aq(a).geA(a)},
zh:function(a){return J.aq(a).gd5(a)},
zi:function(a){return J.aq(a).giy(a)},
zj:function(a){return J.aq(a).giz(a)},
w4:function(a){return J.an(a).gac(a)},
tv:function(a){return J.aq(a).gaQ(a)},
zk:function(a){return J.aq(a).giC(a)},
zl:function(a){return J.aq(a).gaH(a)},
tw:function(a){return J.aq(a).giG(a)},
zm:function(a){return J.aq(a).gbc(a)},
zn:function(a){return J.aq(a).bq(a)},
zo:function(a,b){return J.aq(a).au(a,b)},
zp:function(a,b){return J.aq(a).bQ(a,b)},
zq:function(a,b){return J.bk(a).bm(a,b)},
w5:function(a,b,c,d,e){return J.aq(a).eu(a,b,c,d,e)},
w6:function(a,b){return J.dk(a).aA(a,b)},
zr:function(a,b,c){return J.d8(a).ey(a,b,c)},
w7:function(a,b){return J.aq(a).ig(a,b)},
zs:function(a){return J.dk(a).it(a)},
zt:function(a,b,c,d){return J.aq(a).iv(a,b,c,d)},
kN:function(a,b,c){return J.d8(a).da(a,b,c)},
tx:function(a,b,c){return J.d8(a).ix(a,b,c)},
fS:function(a,b){return J.aq(a).be(a,b)},
w8:function(a,b){return J.aq(a).sbA(a,b)},
zu:function(a,b){return J.aq(a).sa7(a,b)},
zv:function(a,b){return J.aq(a).sai(a,b)},
w9:function(a,b){return J.aq(a).di(a,b)},
zw:function(a,b){return J.dk(a).dk(a,b)},
e4:function(a,b){return J.d8(a).f6(a,b)},
zx:function(a,b){return J.d8(a).ag(a,b)},
ty:function(a){return J.dw(a).l(a)},
zy:function(a){return J.dk(a).aq(a)},
zz:function(a){return J.d8(a).iE(a)},
zA:function(a,b){return J.dw(a).bN(a,b)},
cB:function(a){return J.an(a).A(a)},
zB:function(a){return J.d8(a).iF(a)},
tz:function(a){return J.d8(a).bp(a)},
zC:function(a){return J.d8(a).eO(a)},
f:function f(){},
n_:function n_(){},
n0:function n0(){},
hC:function hC(){},
oc:function oc(){},
eP:function eP(){},
eA:function eA(){},
ey:function ey($ti){this.$ti=$ti},
uH:function uH($ti){this.$ti=$ti},
im:function im(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fr:function fr(){},
jF:function jF(){},
jE:function jE(){},
ez:function ez(){}},P={
HC:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.Ih()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dv(new P.ql(t),1)).observe(s,{childList:true})
return new P.qk(t,s,r)}else if(self.setImmediate!=null)return P.Ii()
return P.Ij()},
HD:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dv(new P.qm(a),0))},
HE:function(a){++u.globalState.f.b
self.setImmediate(H.dv(new P.qn(a),0))},
HF:function(a){P.vu(C.p,a)},
bi:function(a,b){P.yr(null,a)
return b.ghN()},
bS:function(a,b){P.yr(a,b)},
bh:function(a,b){J.za(b,a)},
bg:function(a,b){b.cS(H.bI(a),H.cq(a))},
yr:function(a,b){var t,s,r,q
t=new P.rJ(b)
s=new P.rK(b)
r=J.an(a)
if(!!r.$isbq)a.cL(t,s)
else if(!!r.$isc9)a.cd(t,s)
else{q=new P.bq(0,$.ap,null,[null])
q.a=4
q.c=a
q.cL(t,null)}},
bj:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.ap.toString
return new P.rU(t)},
yy:function(a,b){if(H.fO(a,{func:1,args:[P.cG,P.cG]})){b.toString
return a}else{b.toString
return a}},
AK:function(a,b){var t=new P.bq(0,$.ap,null,[b])
P.xT(C.p,new P.rW(a,t))
return t},
u5:function(a,b,c){var t
if(a==null)a=new P.fu()
t=$.ap
if(t!==C.e)t.toString
t=new P.bq(0,t,null,[c])
t.dw(a,b)
return t},
AL:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bq(0,$.ap,null,[P.p])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.mr(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.bu)(a),++l){q=a[l]
p=t.b
q.cd(new P.mq(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bq(0,$.ap,null,[null])
m.dv(C.D)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.bI(j)
n=H.cq(j)
if(t.b===0||!1)return P.u5(o,n,null)
else{t.c=o
t.d=n}}return s},
be:function(a){return new P.kx(new P.bq(0,$.ap,null,[a]),[a])},
yv:function(a,b,c){$.ap.toString
a.ao(b,c)},
HI:function(a,b){var t=new P.bq(0,$.ap,null,[b])
t.a=4
t.c=a
return t},
yg:function(a,b){var t,s,r
b.a=1
try{a.cd(new P.qM(b),new P.qN(b))}catch(r){t=H.bI(r)
s=H.cq(r)
P.yX(new P.qO(b,t,s))}},
qL:function(a,b){var t,s,r
for(;a.gfY();)a=a.c
t=a.gcD()
s=b.c
if(t){b.c=null
r=b.bZ(s)
b.a=a.a
b.c=a.c
P.fH(b,r)}else{b.a=2
b.c=a
a.dX(s)}},
fH:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fR(p)
n=p.gaP()
s.toString
P.kB(null,null,s,o,n)}return}for(;b.gcG()!=null;b=m){m=b.a
b.a=null
P.fH(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gen()||b.gem()){k=b.ghg()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fR(p)
n=p.gaP()
s.toString
P.kB(null,null,s,o,n)
return}j=$.ap
if(j==null?k!=null:j!==k)$.ap=k
else j=null
if(b.gem())new P.qT(t,r,q,b).$0()
else if(s){if(b.gen())new P.qS(r,b,l).$0()}else if(b.ghU())new P.qR(t,r,b).$0()
if(j!=null)$.ap=j
s=r.b
if(!!J.an(s).$isc9){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bZ(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.qL(s,i)
return}}i=b.b
b=i.bY()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
Ib:function(){var t,s
for(;t=$.fL,t!=null;){$.ii=null
s=t.b
$.fL=s
if(s==null)$.ih=null
t.a.$0()}},
Id:function(){$.vI=!0
try{P.Ib()}finally{$.ii=null
$.vI=!1
if($.fL!=null)$.$get$vD().$1(P.yJ())}},
yF:function(a){var t=new P.kj(a,null)
if($.fL==null){$.ih=t
$.fL=t
if(!$.vI)$.$get$vD().$1(P.yJ())}else{$.ih.b=t
$.ih=t}},
Ic:function(a){var t,s,r
t=$.fL
if(t==null){P.yF(a)
$.ii=$.ih
return}s=new P.kj(a,null)
r=$.ii
if(r==null){s.b=t
$.ii=s
$.fL=s}else{s.b=r.b
r.b=s
$.ii=s
if(s.b==null)$.ih=s}},
yX:function(a){var t=$.ap
if(C.e===t){P.fM(null,null,C.e,a)
return}t.toString
P.fM(null,null,t,t.cQ(a,!0))},
Jd:function(a,b){return new P.rp(null,a,!1,[b])},
yC:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.bI(o)
s=H.cq(o)
$.ap.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fR(r)
q=n
p=r.gaP()
c.$2(q,p)}}},
I3:function(a,b,c,d){var t=a.c4(0)
if(!!J.an(t).$isc9&&t!==$.$get$hs())t.cg(new P.rM(b,c,d))
else b.ao(c,d)},
ys:function(a,b){return new P.rL(a,b)},
vH:function(a,b,c){var t=a.c4(0)
if(!!J.an(t).$isc9&&t!==$.$get$hs())t.cg(new P.rN(b,c))
else b.aJ(c)},
HH:function(a,b,c,d,e,f,g){var t,s
t=$.ap
s=e?1:0
s=new P.i8(a,null,null,null,null,t,s,null,null,[f,g])
s.fn(b,c,d,e,g)
s.fq(a,b,c,d,e,f,g)
return s},
I2:function(a,b,c){$.ap.toString
a.bS(b,c)},
xT:function(a,b){var t=$.ap
if(t===C.e){t.toString
return P.vu(a,b)}return P.vu(a,t.cQ(b,!0))},
vu:function(a,b){var t=C.a.ap(a.a,1000)
return H.Hw(t<0?0:t,b)},
kB:function(a,b,c,d,e){var t={}
t.a=d
P.Ic(new P.rT(t,e))},
yz:function(a,b,c,d){var t,s
s=$.ap
if(s===c)return d.$0()
$.ap=c
t=s
try{s=d.$0()
return s}finally{$.ap=t}},
yB:function(a,b,c,d,e){var t,s
s=$.ap
if(s===c)return d.$1(e)
$.ap=c
t=s
try{s=d.$1(e)
return s}finally{$.ap=t}},
yA:function(a,b,c,d,e,f){var t,s
s=$.ap
if(s===c)return d.$2(e,f)
$.ap=c
t=s
try{s=d.$2(e,f)
return s}finally{$.ap=t}},
fM:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cQ(d,!(!t||!1))
P.yF(d)},
ql:function ql(a){this.a=a},
qk:function qk(a,b,c){this.a=a
this.b=b
this.c=c},
qm:function qm(a){this.a=a},
qn:function qn(a){this.a=a},
rJ:function rJ(a){this.a=a},
rK:function rK(a){this.a=a},
rU:function rU(a){this.a=a},
c9:function c9(){},
rW:function rW(a,b){this.a=a
this.b=b},
mr:function mr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mq:function mq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f8:function f8(){},
kk:function kk(){},
e0:function e0(a,$ti){this.a=a
this.$ti=$ti},
kx:function kx(a,$ti){this.a=a
this.$ti=$ti},
kp:function kp(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
bq:function bq(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qI:function qI(a,b){this.a=a
this.b=b},
qQ:function qQ(a,b){this.a=a
this.b=b},
qM:function qM(a){this.a=a},
qN:function qN(a){this.a=a},
qO:function qO(a,b,c){this.a=a
this.b=b
this.c=c},
qK:function qK(a,b){this.a=a
this.b=b},
qP:function qP(a,b){this.a=a
this.b=b},
qJ:function qJ(a,b,c){this.a=a
this.b=b
this.c=c},
qT:function qT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qU:function qU(a){this.a=a},
qS:function qS(a,b,c){this.a=a
this.b=b
this.c=c},
qR:function qR(a,b,c){this.a=a
this.b=b
this.c=c},
kj:function kj(a,b){this.a=a
this.b=b},
dt:function dt(){},
p_:function p_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oY:function oY(a,b){this.a=a
this.b=b},
oZ:function oZ(a,b){this.a=a
this.b=b},
p0:function p0(a){this.a=a},
p5:function p5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p3:function p3(a,b){this.a=a
this.b=b},
p4:function p4(){},
p6:function p6(a){this.a=a},
p9:function p9(a){this.a=a},
pa:function pa(a,b){this.a=a
this.b=b},
p7:function p7(a,b){this.a=a
this.b=b},
p8:function p8(a){this.a=a},
pb:function pb(a,b){this.a=a
this.b=b},
pc:function pc(a,b){this.a=a
this.b=b},
p1:function p1(a,b,c){this.a=a
this.b=b
this.c=c},
p2:function p2(a){this.a=a},
oX:function oX(){},
du:function du(){},
qr:function qr(a,b,c){this.a=a
this.b=b
this.c=c},
qq:function qq(a){this.a=a},
km:function km(){},
qw:function qw(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
qy:function qy(b,c,a){this.b=b
this.c=c
this.a=a},
qx:function qx(){},
r8:function r8(){},
r9:function r9(a,b){this.a=a
this.b=b},
ro:function ro(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
rp:function rp(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
rM:function rM(a,b,c){this.a=a
this.b=b
this.c=c},
rL:function rL(a,b){this.a=a
this.b=b},
rN:function rN(a,b){this.a=a
this.b=b},
i7:function i7(){},
i8:function i8(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
r6:function r6(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
f1:function f1(a,b){this.a=a
this.b=b},
rI:function rI(){},
rT:function rT(a,b){this.a=a
this.b=b},
rc:function rc(){},
rd:function rd(a,b){this.a=a
this.b=b},
re:function re(a,b){this.a=a
this.b=b},
rf:function rf(a,b){this.a=a
this.b=b},
HJ:function(a,b){var t=a[b]
return t===a?null:t},
vF:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
vE:function(){var t=Object.create(null)
P.vF(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
xs:function(a,b,c){return H.yP(a,new H.w(0,null,null,null,null,null,0,[b,c]))},
c0:function(a,b){return new H.w(0,null,null,null,null,null,0,[a,b])},
jG:function(){return new H.w(0,null,null,null,null,null,0,[null,null])},
hF:function(a){return H.yP(a,new H.w(0,null,null,null,null,null,0,[null,null]))},
ib:function(a,b){return new P.ks(0,null,null,null,null,null,0,[a,b])},
HM:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
E:function(a,b,c,d,e){return new P.qW(0,null,null,null,null,[d,e])},
uB:function(a,b,c){var t,s
if(P.vJ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$ij()
s.push(a)
try{P.Ia(a,t)}finally{if(0>=s.length)return H.u(s,-1)
s.pop()}s=P.xP(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jC:function(a,b,c){var t,s,r
if(P.vJ(a))return b+"..."+c
t=new P.ch(b)
s=$.$get$ij()
s.push(a)
try{r=t
r.O=P.xP(r.gO(),a,", ")}finally{if(0>=s.length)return H.u(s,-1)
s.pop()}s=t
s.O=s.gO()+c
s=t.gO()
return s.charCodeAt(0)==0?s:s},
vJ:function(a){var t,s
for(t=0;s=$.$get$ij(),t<s.length;++t)if(a===s[t])return!0
return!1},
Ia:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.cX(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.D())return
q=H.x(t.gI())
b.push(q)
s+=q.length+2;++r}if(!t.D()){if(r<=5)return
if(0>=b.length)return H.u(b,-1)
p=b.pop()
if(0>=b.length)return H.u(b,-1)
o=b.pop()}else{n=t.gI();++r
if(!t.D()){if(r<=4){b.push(H.x(n))
return}p=H.x(n)
if(0>=b.length)return H.u(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gI();++r
for(;t.D();n=m,m=l){l=t.gI();++r
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
xr:function(a,b,c,d,e){return new H.w(0,null,null,null,null,null,0,[d,e])},
G7:function(a,b,c){var t=P.xr(null,null,null,b,c)
a.a5(0,new P.rZ(t))
return t},
G8:function(a,b,c,d,e){var t=P.xr(null,null,null,d,e)
P.Gd(t,a,b,c)
return t},
a_:function(a,b,c,d){return new P.kr(0,null,null,null,null,null,0,[d])},
jH:function(a,b){var t,s
t=P.a_(null,null,null,b)
for(s=J.cX(a);s.D();)t.h(0,s.gI())
return t},
xx:function(a){var t,s,r
t={}
if(P.vJ(a))return"{...}"
s=new P.ch("")
try{$.$get$ij().push(a)
r=s
r.O=r.gO()+"{"
t.a=!0
a.a5(0,new P.nu(t,s))
t=s
t.O=t.gO()+"}"}finally{t=$.$get$ij()
if(0>=t.length)return H.u(t,-1)
t.pop()}t=s.gO()
return t.charCodeAt(0)==0?t:t},
Gd:function(a,b,c,d){var t,s,r
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.bu)(b),++s){r=b[s]
a.i(0,c.$1(r),d.$1(r))}},
uN:function(a,b){var t=new P.ni(null,0,0,0,[b])
t.fi(a,b)
return t},
qW:function qW(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qZ:function qZ(a){this.a=a},
qX:function qX(a,$ti){this.a=a
this.$ti=$ti},
qY:function qY(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
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
kr:function kr(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
r2:function r2(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
r_:function r_(){},
fq:function fq(){},
hz:function hz(){},
rZ:function rZ(a){this.a=a},
hG:function hG(){},
fw:function fw(){},
aN:function aN(){},
rz:function rz(){},
jJ:function jJ(){},
eQ:function eQ(a,$ti){this.a=a
this.$ti=$ti},
nu:function nu(a,b){this.a=a
this.b=b},
ni:function ni(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
r3:function r3(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
oG:function oG(){},
oF:function oF(){},
wb:function(a,b,c,d,e,f){if(C.d.bR(f,4)!==0)throw H.k(new P.bQ("Invalid base64 padding, padded length must be multiple of four, is "+H.x(f),a,c))
if(d+e!==f)throw H.k(new P.bQ("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.k(new P.bQ("Invalid base64 padding, more than two '=' characters",a,b))},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
h3:function h3(){},
h6:function h6(){},
lH:function lH(){},
pX:function pX(a){this.a=a},
pY:function pY(a){this.a=a},
rB:function rB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rD:function rD(a){this.a=a},
rC:function rC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Hu:function(a,b,c){var t,s,r,q
if(b<0)throw H.k(P.bz(b,0,J.c4(a),null,null))
t=c==null
if(!t&&c<b)throw H.k(P.bz(c,b,J.c4(a),null,null))
s=J.cX(a)
for(r=0;r<b;++r)if(!s.D())throw H.k(P.bz(b,0,r,null,null))
q=[]
if(t)for(;s.D();)q.push(s.gI())
else for(r=b;r<c;++r){if(!s.D())throw H.k(P.bz(c,b,r,null,null))
q.push(s.gI())}return H.xI(q)},
xP:function(a,b,c){var t=J.cX(b)
if(!t.D())return a
if(c.length===0){do a+=H.x(t.gI())
while(t.D())}else{a+=H.x(t.gI())
for(;t.D();)a=a+c+H.x(t.gI())}return a},
A4:function(a,b){return J.z9(a,b)},
A8:function(a,b){var t=new P.e5(a,b)
t.ds(a,b)
return t},
A9:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.x(t)
if(t>=10)return s+"00"+H.x(t)
return s+"000"+H.x(t)},
Aa:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
iu:function(a){if(a>=10)return""+a
return"0"+a},
wt:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cB(a)
if(typeof a==="string")return JSON.stringify(a)
return P.At(a)},
At:function(a){var t=J.an(a)
if(!!t.$isf7)return t.A(a)
return H.oh(a)},
dI:function(a){return new P.cY(!1,null,null,a)},
dJ:function(a,b,c){return new P.cY(!0,a,b,c)},
zD:function(a){return new P.cY(!1,null,a,"Must not be null")},
xK:function(a){return new P.eH(null,null,!1,null,null,a)},
jZ:function(a,b,c){return new P.eH(null,null,!0,a,b,"Value not in range")},
bz:function(a,b,c,d,e){return new P.eH(b,c,!0,a,d,"Invalid value")},
de:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.a6(a)
if(!(0>a)){if(typeof c!=="number")return H.a6(c)
t=a>c}else t=!0
if(t)throw H.k(P.bz(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.a6(b)
if(!(a>b)){if(typeof c!=="number")return H.a6(c)
t=b>c}else t=!0
if(t)throw H.k(P.bz(b,a,c,"end",f))
return b}return c},
bD:function(a,b,c,d,e){var t=e!=null?e:J.c4(b)
return new P.mH(b,t,!0,a,c,"Index out of range")},
lN:function(a){return new P.qH(a)},
d0:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.cX(a);s.D();)t.push(s.gI())
if(b)return t
t.fixed$length=Array
return t},
G9:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
l:function(a,b){var t=P.d0(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fP:function(a){H.IS(H.x(a))},
d3:function(a,b,c){return new H.hB(a,H.uF(a,!1,!0,!1),null,null)},
ph:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.de(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a0()
s=c<t}else s=!0
return H.xI(s?C.b.cm(a,b,c):a)}if(!!J.an(a).$isft)return H.GB(a,b,P.de(b,c,a.length,null,null,null))
return P.Hu(a,b,c)},
y5:function(){var t=H.Gv()
if(t!=null)return P.y6(t,0,null)
throw H.k(new P.V("'Uri.base' is not supported"))},
y6:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a4(a,b+4)^58)*3|C.c.a4(a,b)^100|C.c.a4(a,b+1)^97|C.c.a4(a,b+2)^116|C.c.a4(a,b+3)^97)>>>0
if(s===0)return P.y4(b>0||c<c?C.c.L(a,b,c):a,5,null).geQ()
else if(s===32)return P.y4(C.c.L(a,t,c),0,null).geQ()}r=H.a(new Array(8),[P.C])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.yD(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.aw()
if(p>=b)if(P.yD(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.V()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a0()
if(typeof l!=="number")return H.a6(l)
if(k<l)l=k
if(typeof m!=="number")return m.a0()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.a0()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.a0()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.c.aI(a,"..",m)))h=l>m+2&&C.c.aI(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aI(a,"file",b)){if(o<=b){if(!C.c.aI(a,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a=g+C.c.L(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.c.aG(a,m,l,"/");++l;++k;++c}else{a=C.c.L(a,b,m)+"/"+C.c.L(a,l,c)
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
c-=3}else{a=C.c.L(a,b,n)+C.c.L(a,m,c)
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
c-=3}else{a=C.c.L(a,b,n)+C.c.L(a,m,c)
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
if(j){if(b>0||c<a.length){a=C.c.L(a,b,c)
p-=b
o-=b
n-=b
m-=b
l-=b
k-=b}return new P.rn(a,p,o,n,m,l,k,i,null)}return P.HP(a,b,c,p,o,n,m,l,k,i)},
y8:function(a,b){return C.b.hK(a.split("&"),P.jG(),new P.pT(b))},
Hx:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.pQ(a)
s=H.cI(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.Z(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.fx(C.c.L(a,p,q),null,null)
if(J.cA(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.u(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.fx(C.c.L(a,p,c),null,null)
if(J.cA(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.u(r,o)
r[o]=m
return r},
y7:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.pR(a)
s=new P.pS(a,t)
if(a.length<2)t.$1("address is too short")
r=[]
for(q=b,p=q,o=!1,n=!1;q<a0;++q){m=C.c.Z(a,q)
if(m===58){if(q===b){++q
if(C.c.Z(a,q)!==58)t.$2("invalid start colon.",q)
p=q}if(q===p){if(o)t.$2("only one wildcard `::` is allowed",q)
r.push(-1)
o=!0}else r.push(s.$2(p,q))
p=q+1}else if(m===46)n=!0}if(r.length===0)t.$1("too few parts")
l=p===a0
k=J.aZ(C.b.gbg(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.Hx(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.ay()
h=j[1]
if(typeof h!=="number")return H.a6(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.ay()
i=j[3]
if(typeof i!=="number")return H.a6(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.an(e).T(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.u(g,f)
g[f]=0
i=f+1
if(i>=16)return H.u(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.dj()
i=C.d.b1(e,8)
if(f<0||f>=16)return H.u(g,f)
g[f]=i
i=f+1
if(i>=16)return H.u(g,i)
g[i]=e&255
f+=2}}return g},
HP:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.HX(a,b,d)
else{if(d===b)P.ie(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.HY(a,t,e-1):""
r=P.HT(a,e,f,!1)
if(typeof f!=="number")return f.V()
q=f+1
if(typeof g!=="number")return H.a6(g)
p=q<g?P.HV(H.fx(C.c.L(a,q,g),null,new P.rX(a,f)),j):null}else{s=""
r=null
p=null}o=P.HU(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a0()
n=h<i?P.HW(a,h+1,i,null):null
return new P.ky(j,s,r,p,o,n,i<c?P.HS(a,i+1,c):null,null,null,null,null,null)},
yl:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ie:function(a,b,c){throw H.k(new P.bQ(c,a,b))},
HV:function(a,b){if(a!=null&&J.aZ(a,P.yl(b)))return
return a},
HT:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.Z(a,b)===91){if(typeof c!=="number")return c.aj()
t=c-1
if(C.c.Z(a,t)!==93)P.ie(a,b,"Missing end `]` to match `[` in host")
P.y7(a,b+1,t)
return C.c.L(a,b,c).toLowerCase()}if(typeof c!=="number")return H.a6(c)
s=b
for(;s<c;++s)if(C.c.Z(a,s)===58){P.y7(a,b,c)
return"["+a+"]"}return P.I_(a,b,c)},
I_:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.a6(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.Z(a,t)
if(p===37){o=P.yq(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.ch("")
m=C.c.L(a,s,t)
l=r.O+=!q?m.toLowerCase():m
if(n){o=C.c.L(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.O=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.u(C.G,n)
n=(C.G[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.ch("")
if(s<t){r.O+=C.c.L(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.u(C.k,n)
n=(C.k[n]&1<<(p&15))!==0}else n=!1
if(n)P.ie(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.Z(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.ch("")
m=C.c.L(a,s,t)
r.O+=!q?m.toLowerCase():m
r.O+=P.ym(p)
t+=k
s=t}}}}if(r==null)return C.c.L(a,b,c)
if(s<c){m=C.c.L(a,s,c)
r.O+=!q?m.toLowerCase():m}n=r.O
return n.charCodeAt(0)==0?n:n},
HX:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.yo(C.c.a4(a,b)))P.ie(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a4(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.u(C.m,q)
q=(C.m[q]&1<<(r&15))!==0}else q=!1
if(!q)P.ie(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.L(a,b,c)
return P.HQ(s?a.toLowerCase():a)},
HQ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
HY:function(a,b,c){var t=P.fK(a,b,c,C.a4,!1)
return t==null?C.c.L(a,b,c):t},
HU:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fK(a,b,c,C.I,!1)
if(r==null)r=C.c.L(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.ae(r,"/"))r="/"+r
return P.HZ(r,e,f)},
HZ:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.ae(a,"/"))return P.I0(a,!t||c)
return P.I1(a)},
HW:function(a,b,c,d){var t=P.fK(a,b,c,C.l,!1)
return t==null?C.c.L(a,b,c):t},
HS:function(a,b,c){var t=P.fK(a,b,c,C.l,!1)
return t==null?C.c.L(a,b,c):t},
yq:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.Z(a,b+1)
r=C.c.Z(a,t)
q=H.t6(s)
p=H.t6(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.b1(o,4)
if(t>=8)return H.u(C.F,t)
t=(C.F[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hU(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.L(a,b,b+3).toUpperCase()
return},
ym:function(a){var t,s,r,q,p,o,n,m
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
for(p=0;--r,r>=0;s=128){o=C.a.hc(a,6*r)&63|s
if(p>=q)return H.u(t,p)
t[p]=37
n=p+1
m=C.c.a4("0123456789ABCDEF",o>>>4)
if(n>=q)return H.u(t,n)
t[n]=m
m=p+2
n=C.c.a4("0123456789ABCDEF",o&15)
if(m>=q)return H.u(t,m)
t[m]=n
p+=3}}return P.ph(t,0,null)},
fK:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.d8(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a0()
if(typeof c!=="number")return H.a6(c)
if(!(r<c))break
c$0:{o=s.Z(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.u(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.yq(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.u(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.ie(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.Z(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.ym(o)}}if(p==null)p=new P.ch("")
p.O+=C.c.L(a,q,r)
p.O+=H.x(m)
if(typeof l!=="number")return H.a6(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a0()
if(q<c)p.O+=s.L(a,q,c)
t=p.O
return t.charCodeAt(0)==0?t:t},
yp:function(a){if(C.c.ae(a,"."))return!0
return C.c.bm(a,"/.")!==-1},
I1:function(a){var t,s,r,q,p,o,n
if(!P.yp(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bu)(s),++p){o=s[p]
if(J.aZ(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.u(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.aK(t,"/")},
I0:function(a,b){var t,s,r,q,p,o
if(!P.yp(a))return!b?P.yn(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bu)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.aZ(C.b.gbg(t),"..")){if(0>=t.length)return H.u(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.u(t,0)
s=J.kM(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.aZ(C.b.gbg(t),".."))t.push("")
if(!b){if(0>=t.length)return H.u(t,0)
s=P.yn(t[0])
if(0>=t.length)return H.u(t,0)
t[0]=s}return C.b.aK(t,"/")},
yn:function(a){var t,s,r,q
t=J.bk(a)
s=t.gm(a)
if(typeof s!=="number")return s.aw()
if(s>=2&&P.yo(t.Z(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.a6(s)
if(!(r<s))break
q=t.Z(a,r)
if(q===58)return C.c.L(a,0,r)+"%3A"+C.c.ag(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.u(C.m,s)
s=(C.m[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
HR:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.Z(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.k(P.dI("Invalid URL encoding"))}}return t},
rA:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.a6(c)
t=J.d8(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.Z(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.o!==d)p=!1
else p=!0
if(p)return t.L(a,b,c)
else o=new H.le(t.L(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.Z(a,s)
if(q>127)throw H.k(P.dI("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.k(P.dI("Truncated URI"))
o.push(P.HR(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.pY(!1).hv(o)},
yo:function(a){var t=a|32
return 97<=t&&t<=122},
y4:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.bk(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a6(o)
if(!(r<o))break
c$0:{p=s.Z(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.k(new P.bQ("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.k(new P.bQ("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a6(o)
if(!(r<o))break
p=s.Z(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gbg(t)
if(p!==44||r!==m+7||!s.aI(a,"base64",m+1))throw H.k(new P.bQ("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.M.ia(0,a,o,s.gm(a))
else{l=P.fK(a,o,s.gm(a),C.l,!0)
if(l!=null)a=s.aG(a,o,s.gm(a),l)}return new P.pP(a,t,c)},
I7:function(){var t,s,r,q,p
t=P.G9(22,new P.rQ(),!0,P.di)
s=new P.rP(t)
r=new P.rR()
q=new P.rS()
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
yD:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$yE()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.u(t,d)
r=t[d]
q=C.c.a4(a,s)^96
p=J.fQ(r,q>95?31:q)
if(typeof p!=="number")return p.aO()
d=p&31
o=C.d.b1(p,5)
if(o>=8)return H.u(e,o)
e[o]=s}return d},
cW:function cW(){},
bK:function bK(){},
e5:function e5(a,b){this.a=a
this.b=b},
W:function W(){},
dN:function dN(a){this.a=a},
lE:function lE(){},
lF:function lF(){},
eo:function eo(){},
fu:function fu(){},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eH:function eH(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
mH:function mH(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a){this.a=a},
eO:function eO(a){this.a=a},
df:function df(a){this.a=a},
bC:function bC(a){this.a=a},
o_:function o_(){},
k6:function k6(){},
lw:function lw(a){this.a=a},
qH:function qH(a){this.a=a},
bQ:function bQ(a,b,c){this.a=a
this.b=b
this.c=c},
lO:function lO(a,bV,$ti){this.a=a
this.bV=bV
this.$ti=$ti},
C:function C(){},
n:function n(){},
jD:function jD(){},
p:function p(){},
b1:function b1(){},
cG:function cG(){},
dx:function dx(){},
ad:function ad(){},
db:function db(){},
eI:function eI(){},
dX:function dX(){},
z:function z(){},
ch:function ch(O){this.O=O},
eR:function eR(){},
pT:function pT(a){this.a=a},
pQ:function pQ(a){this.a=a},
pR:function pR(a){this.a=a},
pS:function pS(a,b){this.a=a
this.b=b},
ky:function ky(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
rX:function rX(a,b){this.a=a
this.b=b},
pP:function pP(a,b,c){this.a=a
this.b=b
this.c=c},
rQ:function rQ(){},
rP:function rP(a){this.a=a},
rR:function rR(){},
rS:function rS(){},
rn:function rn(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
qv:function qv(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
yL:function(a){var t,s,r,q,p
if(a==null)return
t=P.jG()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.bu)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
Iq:function(a,b){var t
if(a==null)return
t={}
J.vW(a,new P.t_(t))
return t},
Ir:function(a){var t,s
t=new P.bq(0,$.ap,null,[null])
s=new P.e0(t,[null])
a.then(H.dv(new P.t0(s),1))["catch"](H.dv(new P.t1(s),1))
return t},
tK:function(){var t=$.wo
if(t==null){t=J.kK(window.navigator.userAgent,"Opera",0)
$.wo=t}return t},
wq:function(){var t=$.wp
if(t==null){t=P.tK()!==!0&&J.kK(window.navigator.userAgent,"WebKit",0)
$.wp=t}return t},
Ab:function(){var t,s
t=$.wl
if(t!=null)return t
s=$.wm
if(s==null){s=J.kK(window.navigator.userAgent,"Firefox",0)
$.wm=s}if(s)t="-moz-"
else{s=$.wn
if(s==null){s=P.tK()!==!0&&J.kK(window.navigator.userAgent,"Trident/",0)
$.wn=s}if(s)t="-ms-"
else t=P.tK()===!0?"-o-":"-webkit-"}$.wl=t
return t},
rs:function rs(){},
ru:function ru(a,b){this.a=a
this.b=b},
qh:function qh(){},
qi:function qi(a,b){this.a=a
this.b=b},
t_:function t_(a){this.a=a},
rt:function rt(a,b){this.a=a
this.b=b},
kh:function kh(a,b,c){this.a=a
this.b=b
this.c=c},
t0:function t0(a){this.a=a},
t1:function t1(a){this.a=a},
lm:function lm(){},
ln:function ln(a){this.a=a},
yu:function(a){var t,s,r
t=new P.bq(0,$.ap,null,[null])
s=new P.kx(t,[null])
a.toString
r=W.P
W.dj(a,"success",new P.rO(a,s),!1,r)
W.dj(a,"error",s.geh(),!1,r)
return t},
ly:function ly(){},
rO:function rO(a,b){this.a=a
this.b=b},
mG:function mG(){},
nW:function nW(){},
hV:function hV(){},
pJ:function pJ(){},
HO:function(a){var t=new P.ra(0,0)
t.ft(a)
return t},
r1:function r1(){},
ra:function ra(a,b){this.a=a
this.b=b},
rb:function rb(){},
bW:function bW(){},
kO:function kO(){},
el:function el(){},
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
m2:function m2(){},
m3:function m3(){},
mk:function mk(){},
cu:function cu(){},
mE:function mE(){},
da:function da(){},
nb:function nb(){},
j1:function j1(){},
jl:function jl(){},
nv:function nv(){},
nw:function nw(){},
dc:function dc(){},
nS:function nS(){},
j2:function j2(){},
jm:function jm(){},
o9:function o9(){},
oe:function oe(){},
hX:function hX(){},
pg:function pg(){},
j3:function j3(){},
jn:function jn(){},
pj:function pj(){},
kV:function kV(a){this.a=a},
cb:function cb(){},
pm:function pm(){},
po:function po(){},
eN:function eN(){},
pz:function pz(){},
dh:function dh(){},
pK:function pK(){},
j4:function j4(){},
jo:function jo(){},
pW:function pW(){},
q_:function q_(){},
q0:function q0(){},
i9:function i9(){},
rg:function rg(){},
rh:function rh(){},
ri:function ri(){},
bl:function bl(){},
di:function di(){},
fX:function fX(){},
f2:function f2(){},
fY:function fY(){},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
bJ:function bJ(){},
f4:function f4(){},
l4:function l4(){},
lk:function lk(){},
jV:function jV(){},
kQ:function kQ(){},
ot:function ot(){},
rF:function rF(){},
k5:function k5(){},
j5:function j5(){},
jp:function jp(){}},W={
zW:function(a){if(a!=null)return new Audio(a)
return new Audio()},
zX:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
A7:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
HG:function(a){var t=new W.qt(a,null)
t.fo(a)
return t},
Ac:function(a,b,c){var t,s
t=document.body
s=(t&&C.v).aF(t,a,b,c)
s.toString
t=new H.ej(new W.d6(s),new W.rV(),[W.af])
return t.gbh(t)},
ha:function(a){var t,s,r
t="element tag unavailable"
try{s=J.zk(a)
if(typeof s==="string")t=a.tagName}catch(r){H.bI(r)}return t},
wI:function(a,b,c){return W.wJ(a,null,null,b,null,null,null,c).b9(new W.mA())},
wJ:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.eb
s=new P.bq(0,$.ap,null,[t])
r=new P.e0(s,[t])
q=new XMLHttpRequest()
C.R.ic(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.GC
W.dj(q,"load",new W.mB(r,q),!1,t)
W.dj(q,"error",r.geh(),!1,t)
q.send()
return s},
wK:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
AM:function(a){var t,s,r
s=document.createElement("input")
t=s
try{J.zv(t,a)}catch(r){H.bI(r)}return t},
eY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
yj:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
dj:function(a,b,c,d,e){var t=W.If(new W.qG(c))
t=new W.qF(0,a,b,t,!1,[e])
t.fp(a,b,c,!1,e)
return t},
yh:function(a){var t,s
t=document.createElement("a")
s=new W.rj(t,window.location)
s=new W.ia(s)
s.fs(a)
return s},
HK:function(a,b,c,d){return!0},
HL:function(a,b,c,d){var t,s,r,q,p
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
yk:function(){var t=P.z
t=new W.rw(P.jH(C.q,t),P.a_(null,null,null,t),P.a_(null,null,null,t),P.a_(null,null,null,t),null)
t.fu(null,new H.eD(C.q,new W.rx(),[H.N(C.q,0),null]),["TEMPLATE"],null)
return t},
I6:function(a){var t
if(!!J.an(a).$isen)return a
t=new P.kh([],[],!1)
t.c=!0
return t.bb(a)},
If:function(a){var t=$.ap
if(t===C.e)return a
return t.hq(a,!0)},
aL:function aL(){},
f0:function f0(){},
kR:function kR(){},
f3:function f3(){},
cP:function cP(){},
kZ:function kZ(){},
hc:function hc(){},
hf:function hf(){},
l2:function l2(){},
f5:function f5(){},
f6:function f6(){},
h2:function h2(){},
em:function em(){},
lc:function lc(){},
lg:function lg(){},
iq:function iq(){},
h7:function h7(){},
ll:function ll(){},
lo:function lo(){},
lp:function lp(){},
h8:function h8(){},
h9:function h9(){},
lq:function lq(){},
bP:function bP(){},
f9:function f9(){},
iU:function iU(){},
qt:function qt(a,b){this.a=a
this.b=b},
jT:function jT(){},
qu:function qu(){},
is:function is(){},
lr:function lr(){},
ls:function ls(){},
lx:function lx(){},
fa:function fa(){},
it:function it(){},
en:function en(){},
iv:function iv(){},
iw:function iw(){},
lA:function lA(){},
ix:function ix(){},
iy:function iy(){},
iV:function iV(){},
je:function je(){},
iz:function iz(){},
iA:function iA(){},
ko:function ko(a,$ti){this.a=a
this.$ti=$ti},
cC:function cC(){},
rV:function rV(){},
lG:function lG(){},
hb:function hb(){},
lM:function lM(){},
P:function P(){},
aH:function aH(){},
me:function me(){},
cj:function cj(){},
fj:function fj(){},
iW:function iW(){},
jf:function jf(){},
iM:function iM(){},
mi:function mi(){},
mj:function mj(){},
ml:function ml(){},
mm:function mm(){},
mo:function mo(){},
iQ:function iQ(){},
ct:function ct(){},
mx:function mx(){},
fk:function fk(){},
iX:function iX(){},
jg:function jg(){},
iS:function iS(){},
eb:function eb(){},
mA:function mA(){},
mB:function mB(a,b){this.a=a
this.b=b},
ht:function ht(){},
mD:function mD(){},
hu:function hu(){},
fm:function fm(){},
mJ:function mJ(){},
n6:function n6(){},
n8:function n8(){},
hD:function hD(){},
hE:function hE(){},
no:function no(){},
nt:function nt(){},
hL:function hL(){},
jL:function jL(){},
nx:function nx(){},
ny:function ny(){},
nz:function nz(){},
nA:function nA(){},
nB:function nB(){},
hM:function hM(){},
cv:function cv(){},
jM:function jM(){},
j6:function j6(){},
jq:function jq(){},
nO:function nO(){},
nP:function nP(){},
d6:function d6(a){this.a=a},
af:function af(){},
jP:function jP(){},
jQ:function jQ(){},
j7:function j7(){},
jr:function jr(){},
nU:function nU(){},
nV:function nV(){},
nZ:function nZ(){},
o0:function o0(){},
o4:function o4(){},
o6:function o6(){},
ee:function ee(){},
ob:function ob(){},
cl:function cl(){},
jY:function jY(){},
j8:function j8(){},
js:function js(){},
og:function og(){},
ok:function ok(){},
k_:function k_(){},
k0:function k0(){},
fA:function fA(){},
k1:function k1(){},
oE:function oE(){},
oH:function oH(){},
oI:function oI(){},
oJ:function oJ(){},
cw:function cw(){},
k3:function k3(){},
hd:function hd(){},
hg:function hg(){},
oM:function oM(){},
hY:function hY(){},
cx:function cx(){},
k4:function k4(){},
j9:function j9(){},
jt:function jt(){},
fB:function fB(){},
oO:function oO(){},
cn:function cn(){},
oP:function oP(){},
oQ:function oQ(){},
oW:function oW(){},
pi:function pi(){},
pk:function pk(){},
cp:function cp(){},
eh:function eh(){},
k8:function k8(){},
pp:function pp(){},
pq:function pq(){},
i1:function i1(){},
pu:function pu(){},
cV:function cV(){},
cN:function cN(){},
pA:function pA(){},
ja:function ja(){},
ju:function ju(){},
pB:function pB(){},
he:function he(){},
hh:function hh(){},
pF:function pF(){},
cz:function cz(){},
k9:function k9(){},
jb:function jb(){},
jv:function jv(){},
fE:function fE(){},
ka:function ka(){},
ei:function ei(){},
kb:function kb(){},
pU:function pU(){},
pV:function pV(){},
pZ:function pZ(){},
fF:function fF(){},
kc:function kc(){},
q3:function q3(){},
kf:function kf(){},
qa:function qa(){},
eU:function eU(){},
fG:function fG(){},
qs:function qs(){},
i6:function i6(){},
jc:function jc(){},
jw:function jw(){},
kl:function kl(){},
jd:function jd(){},
jx:function jx(){},
qz:function qz(){},
qA:function qA(){},
kq:function kq(){},
iY:function iY(){},
jh:function jh(){},
qV:function qV(){},
ic:function ic(){},
iZ:function iZ(){},
ji:function ji(){},
rk:function rk(){},
ku:function ku(){},
j_:function j_(){},
jj:function jj(){},
kw:function kw(){},
j0:function j0(){},
jk:function jk(){},
rG:function rG(){},
rH:function rH(){},
qo:function qo(){},
qB:function qB(a){this.a=a},
qC:function qC(a){this.a=a},
kn:function kn(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
e1:function e1(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qF:function qF(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qG:function qG(a){this.a=a},
ia:function ia(a){this.a=a},
bv:function bv(){},
jR:function jR(a){this.a=a},
nR:function nR(a){this.a=a},
nQ:function nQ(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(){},
rl:function rl(){},
rm:function rm(){},
rw:function rw(e,a,b,c,d){var _=this
_.e=e
_.a=a
_.b=b
_.c=c
_.d=d},
rx:function rx(){},
rv:function rv(){},
iO:function iO(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ed:function ed(){},
ry:function ry(){},
rj:function rj(a,b){this.a=a
this.b=b},
kz:function kz(a){this.a=a},
rE:function rE(a){this.a=a}},T={
u9:function(a,b,c,d){var t
H.J_(a,"$isp",[P.C],"$asp")
t=new T.hv(a,null,d,b,null)
t.fh(a,b,c,d)
return t},
xA:function(a,b){return new T.o1(0,a,new Uint8Array(H.cI(b==null?32768:b)))},
HA:function(a){var t=new T.qd(-1,0,0,0,0,null,null,"",[])
t.fl(a)
return t},
HB:function(a,b){var t=new T.qe(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.fm(a,b)
return t},
fl:function(a){var t=new T.mC(null,0,2147483647)
t.fg(a)
return t},
fT:function fT(a,b){this.a=a
this.b=b},
fU:function fU(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
_.a=a
_.b=b
_.c=c
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
dl:function dl(a){this.a=a},
hv:function hv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
o1:function o1(a,b,c){this.a=a
this.b=b
this.c=c},
qd:function qd(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
qe:function qe(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
_.c=c
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
qf:function qf(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
_.a=a
_.b=b
_.c=c
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
qc:function qc(a){this.a=a},
mC:function mC(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
l5:function l5(x2,y1,y2,p,q,t,u,v,w,B,C,J,M,N,a8,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.J=J
_.M=M
_.N=N
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
l7:function l7(x2,y1,y2,p,q,t,u,v,w,B,C,J,M,N,a8,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.J=J
_.M=M
_.N=N
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
lz:function lz(){},
mv:function mv(x2,y1,y2,p,q,t,u,v,w,B,C,J,M,N,a8,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.J=J
_.M=M
_.N=N
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
H0:function(a,b,c,d){var t,s
t=[P.z]
s=H.a([],t)
t=new T.hW("Glitch",0.01,0.01,0.01,s,0.5,a,new H.w(0,null,null,null,null,null,0,[X.F,P.W]),null,null,b,c,d,!1,!1,!1,!1,!1,!1,Q.J(null,null,A.a5),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.O]),H.a([],[A.h0]),1)
t.ab(a,b,c,d)
return t},
hW:function hW(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.a=a
_.b=b
_.c=c
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
c2:function c2(a,b){this.a=a
this.b=b},
Ag:function(a,b,c,d){var t,s,r,q
t=new B.dz(new P.ch(""),0,0)
t.ah(a,8)
c.toString
s=H.cK(c,0,null)
for(r=s.length,q=0;q<r;++q)t.ah(s[q],8)
return t.ba(b)},
Af:function(a,b,c,d){var t,s,r,q,p
t=H.cI(c)
s=new Uint8Array(t)
r=new B.dn(null,0)
r.a=J.e3(a,b)
for(q=0;q<c;++q){p=r.aa(8)
if(q>=t)return H.u(s,q)
s[q]=p}return s},
Ae:function(a,b,c,d){var t,s,r,q,p
t=new B.dz(new P.ch(""),0,0)
t.ah(a,8)
s=d.gd1()
r=C.f.al(Math.log(H.kC(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cK(c,0,null)
for(s=q.length,p=0;p<s;++p)t.ah(q[p],r)
return t.ba(b)},
Ad:function(a,b,c,d){var t,s,r,q,p,o
t=H.cI(c)
s=new Uint8Array(t)
r=d.y
q=C.f.al(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dn(null,0)
p.a=J.e3(a,b)
for(o=0;o<c;++o){r=p.aa(q)
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
_.ch=ch},bE:function bE(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},ip:function ip(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mz:function mz(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},n7:function n7(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},nr:function nr(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},oD:function oD(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},fv:function fv(){},vv:function vv(){},vw:function vw(){},vx:function vx(){},tR:function tR(){},tU:function tU(){},tG:function tG(){},ve:function ve(){},vz:function vz(){},vA:function vA(){},la:function la(){},v6:function v6(){},v0:function v0(){},ne:function ne(){},tL:function tL(){},tB:function tB(){},lu:function lu(){},uM:function uM(){},lv:function lv(){},o5:function o5(){},vl:function vl(){},vi:function vi(){},vm:function vm(){},tA:function tA(){},ms:function ms(){},l8:function l8(){},tF:function tF(){},tE:function tE(){},v7:function v7(){},vn:function vn(){},v8:function v8(){},tT:function tT(){},tS:function tS(){},vk:function vk(){},vj:function vj(){},pC:function pC(){},vq:function vq(){},tI:function tI(){},tJ:function tJ(){},vy:function vy(){},hK:function hK(){},uS:function uS(){},uT:function uT(){},uU:function uU(){},uV:function uV(){},vf:function vf(){},vg:function vg(){},vh:function vh(){},uR:function uR(){},uY:function uY(){},uZ:function uZ(){},u6:function u6(){},u7:function u7(){},u8:function u8(){},v_:function v_(){},uW:function uW(){},tC:function tC(){},vs:function vs(){},vt:function vt(){},vr:function vr(){},
th:function(){var t=0,s=P.be(),r,q
var $async$th=P.bj(function(a,b){if(a===1)return P.bg(b,s)
while(true)switch(t){case 0:A.t5()
W.wI(C.c.av("../",N.v4())+"navbar.txt",null,null).b9(O.IP())
A.uP()
t=2
return P.bS(A.jI(),$async$th)
case 2:r=document
r.querySelector("#loader").appendChild(O.Az(H.a([$.wG],[O.c8]),S.J1(),"Load Word List",!1))
q=J.w3(r.querySelector("#generate"))
W.dj(q.a,q.b,S.J0(),!1,H.N(q,0))
q=J.w3(r.querySelector("#reset"))
W.dj(q.a,q.b,S.J2(),!1,H.N(q,0))
$.tn=r.querySelector("#seed")
$.ts=r.querySelector("#useseed")
$.yM=r.querySelector("#count")
$.yT=r.querySelector("#list")
$.vP=r.querySelector("#loadedlists")
$.vS=r.querySelector("#text")
r=J.w2($.tn)
W.dj(r.a,r.b,S.z1(),!1,H.N(r,0))
r=J.w2($.ts)
W.dj(r.a,r.b,S.z1(),!1,H.N(r,0))
return P.bh(null,s)}})
return P.bi($async$th,s)},
IM:function(a,b){var t,s,r
t=b.split(".")
s=t.length
r=s-1
P.de(0,r,s,null,null,null)
b=H.vp(t,0,r,H.N(t,0)).aK(0,".")
$.$get$ik().h(0,b)
A.xt("wordlists/"+b+".words").b=a
$.t2=!0
S.z3()},
z3:function(){var t,s,r,q
J.w9($.vP,"")
for(t=$.$get$ik(),s=new P.d7(t,t.r,null,null,[null]),s.c=t.e;s.D();){r=s.d
t=$.vP
q=document.createElement("div")
q.textContent=H.x(r)+".words"
t.appendChild(q)}},
z4:function(a){var t,s,r
t=$.kI
s=J.vY($.ts)===!0?J.tw($.tn):null
t.toString
r=new A.eG(null,null)
r.br(s)
t.e=r},
yW:function(a){var t,s
for(t=$.$get$ik(),s=new P.d7(t,t.r,null,null,[null]),s.c=t.e;s.D();)A.Gb("wordlists/"+H.x(s.d)+".words")
$.$get$ik().b3(0)
$.t2=!0
S.z3()},
to:function(){var t=0,s=P.be(),r,q=2,p,o=[],n,m,l,k,j
var $async$to=P.bj(function(a,b){if(a===1){p=b
t=q}while(true)switch(t){case 0:if(!$.t2){t=1
break}$.t2=!1
m=P.z
l=B.eS
l=new B.pv(P.a_(null,null,null,m),P.c0(m,l),P.c0(m,l),!1,null)
m=new A.eG(null,null)
m.br(null)
l.e=m
$.kI=l
m=$.$get$ik(),l=new P.d7(m,m.r,null,null,[null]),l.c=m.e
case 3:if(!l.D()){t=4
break}n=l.d
q=6
t=9
return P.bS($.kI.bn(n),$async$to)
case 9:q=2
t=8
break
case 6:q=5
j=p
H.bI(j)
$.$get$n9().aL(C.h,"Unable to load wordlist '"+H.x(n)+"'")
t=8
break
case 5:t=2
break
case 8:t=3
break
case 4:$.$get$n9().by("Setup completed")
case 1:return P.bh(r,s)
case 2:return P.bg(p,s)}})
return P.bi($async$to,s)},
kD:function(a){var t=0,s=P.be(),r,q,p,o,n,m,l
var $async$kD=P.bj(function(b,c){if(b===1)return P.bg(c,s)
while(true)$async$outer:switch(t){case 0:t=3
return P.bS(S.to(),$async$kD)
case 3:J.w9($.vS,"")
q=$.kI
p=J.vY($.ts)===!0?J.tw($.tn):null
q.toString
o=new A.eG(null,null)
o.br(p)
q.e=o
n=J.zl($.yT)
if(J.kM(n)){$.$get$n9().aL(C.h,"Initial list name cannot be length 0")
t=1
break}m=0
while(!0){q=J.tw($.yM)
if(typeof q!=="number"){r=H.a6(q)
t=1
break $async$outer}if(!(m<q))break
l=$.kI.ih(n)
q=$.vS
p=document.createElement("div")
p.textContent=l
q.appendChild(p);++m}case 1:return P.bh(r,s)}})
return P.bi($async$kD,s)}},K={bT:function bT(a,b){this.a=a
this.b=b},nc:function nc(x2,y1,y2,p,q,t,u,v,w,B,C,J,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},oz:function oz(x2,y1,y2,p,q,t,u,v,w,B,C,J,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},cL:function cL(a,b,c){this.a=a
this.b=b
this.c=c}},L={
zE:function(a,b,c,d){var t,s,r
t=P.z
s=A.dM
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
t=new L.fV(0.01,0.01,0.01,0.5,a,new H.w(0,null,null,null,null,null,0,[X.F,P.W]),null,"","",!1,b,null,c,d,!1,!1,!0,1,r,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.O]),H.a([],[A.h0]),Q.J(null,null,A.a5))
t.ak(a,b,c,d)
return t},
e:function(a){if(C.c.ae(a,"#"))return A.wh(C.c.ag(a,1))
else return A.wh(a)},
fV:function fV(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.a=a
_.b=b
_.c=c
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
oB:function oB(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.ch=ch},h1:function h1(a,b){this.a=a
this.b=b},lt:function lt(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},hj:function hj(){},bA:function bA(a,b){this.a=a
this.b=b},oR:function oR(a){this.a=a},q6:function q6(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1}},U={kY:function kY(){},nq:function nq(a){this.a=a},nY:function nY(a){this.a=a},pd:function pd(){},pe:function pe(a){this.a=a},pf:function pf(a){this.a=a},lC:function lC(x2,y1,y2,p,q,t,u,v,w,B,C,J,M,N,a8,bC,bD,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.J=J
_.M=M
_.N=N
_.a8=a8
_.bC=bC
_.bD=bD
_.a=a
_.b=b
_.c=c
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
_.x1=x1},m4:function m4(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ns:function ns(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},b:function b(a){this.a=a},S:function S(b,c,a){this.b=b
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
_.y=y},pD:function pD(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
Hy:function(a){if(J.d8(a).ae(a," "))return C.c.ag(a,1)
return a},
q7:function q7(a){this.a=a},
q8:function q8(a,b){this.a=a
this.b=b},
q9:function q9(a,b){this.a=a
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
_.r1=r1},
Az:function(a,b,c,d){var t,s,r,q,p,o
t=document
s=t.createElement("div")
r=W.AM("file")
q=r.style
q.display="none"
q=J.aq(r)
q.sez(r,!1)
p=P.a_(null,null,null,P.z)
for(o=0;o<1;++o)p.as(0,Z.AB(a[o]))
if(p.a!==0)q.shh(r,new H.fb(p,new O.mf(),[H.N(p,0),null]).aK(0,","))
q=q.gd0(r)
W.dj(q.a,q.b,new O.mg(a,b,r),!1,H.N(q,0))
s.appendChild(r)
t=t.createElement("button")
t.textContent=c
W.dj(t,"click",new O.mh(r),!1,W.uX)
s.appendChild(t)
return s},
c8:function c8(){},
mf:function mf(){},
mg:function mg(a,b,c){this.a=a
this.b=b
this.c=c},
mh:function mh(a){this.a=a},
dy:function dy(){},
l3:function l3(a){this.a=a},
eM:function eM(){},
iB:function iB(){},
IR:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.v4()
a=J.tx(a,P.d3("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.tk(t))
s=document
J.w5(s.querySelector("#navbar"),"beforeend",a,C.w,null)
if(J.aZ(O.ID("seerOfVoid",null),"true"))P.AK(new O.tl(),P.cG)
r=new P.e5(Date.now(),!1)
if(H.vb(r)===4&&H.va(r)===1)J.vZ(s.querySelector("body")).h(0,"voidbody")
q=H.vb(r)
p=H.va(r)
o=C.a.A(H.xD(r))
n=C.a.A(q)
m=C.a.A(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.eG(null,null)
k.br(H.fx(l,null,null))
k.i8()
if($.Hn||k.a.c8()>0.99)H.kH(s.querySelector("#today"),"$isf0").href=C.c.av("../",t)+"dead_index.html?seed="+l
else H.kH(s.querySelector("#today"),"$isf0").href=C.c.av("../",t)+"index2.html?seed="+l},
ID:function(a,b){var t,s,r,q
t=P.y5().gd8().n(0,a)
if(t!=null)t=P.rA(t,0,J.c4(t),C.o,!1)
if(t!=null)return t
s=$.yY
if(s.length!==0){r=J.zx(window.location.href,J.zq(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.y6(H.z_(s,q,"")+"?"+$.yY,0,null).gd8().n(0,a)}return},
J4:function(){var t,s,r,q
t=document
J.vZ(t.querySelector("body")).h(0,"voidbody")
s=new W.ko(t.querySelectorAll(".void"),[null])
for(t=new H.dS(s,s.gm(s),0,null,[null]);t.D();){r=t.d
q=J.ze(J.tv(r))
if(q==="none"||q.length===0)O.IW(r)
else O.IF(r)}},
IW:function(a){var t,s
if(a==null)return
t=J.aq(a)
s=t.gaQ(a)
J.w8(s,!!t.$ishY?"inline":"block")},
IF:function(a){if(a==null)return
J.w8(J.tv(a),"none")},
IX:function(a){var t,s,r,q
if($.Iv)return
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fP("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.e4(s,",")
if(!J.zb(r,a))window.localStorage.setItem(t,H.x(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.bI(q)
P.fP("Saving isn't possible....you don't have local storage")}},
tk:function tk(a){this.a=a},
tl:function tl(){},
tj:function tj(){},
d1:function d1(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={py:function py(a){this.a=a},oq:function oq(a){this.a=a},l9:function l9(a){this.a=a},mt:function mt(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},mu:function mu(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},nT:function nT(b,a){this.b=b
this.a=a},dW:function dW(a,b){this.a=a
this.b=b},a7:function a7(a,b){this.a=a
this.b=b},dm:function dm(r,c,d,e,f,a,b){var _=this
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
_.b=b},R:function R(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ir:function ir(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bG:function bG(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},d4:function d4(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ld:function ld(c,a,b){this.c=c
this.a=a
this.b=b},bF:function bF(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},hT:function hT(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iP:function iP(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jX:function jX(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},oA:function oA(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},oK:function oK(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},dV:function dV(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nF:function(){var t=0,s=P.be(),r,q
var $async$nF=P.bj(function(a,b){if(a===1)return P.bg(b,s)
while(true)switch(t){case 0:P.fP("loading big bads")
r=$
q=J
t=2
return P.bS(A.ec("BigBadLists/bigBads.txt",!1,!1,null),$async$nF)
case 2:r.xz=q.e4(b,P.d3("\n|\r",!0,!1))
return P.bh(null,s)}})
return P.bi($async$nF,s)},
Io:function(a){var t,s,r,q,p,o
t=J.e4(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.bu)(t),++q){p=t[q]
o=J.bk(p)
r+=" "+(J.zB(o.n(p,0))+o.ag(p,1))}return r}},A={lf:function lf(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
i:function(a,b,c,d,e){var t=new A.a5(c,e,null,null,a,!1,P.a_(null,null,null,G.a1),0,3)
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
mZ:function mZ(){},
mY:function mY(){},
h0:function h0(){},
h4:function(a,b,c,d){var t=new A.dM(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.ff(a,b,c,d)
return t},
tH:function(a,b,c,d){var t=A.h4(0,0,0,255)
t.b=C.a.ad(C.d.al(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.ad(C.d.al(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.ad(C.d.al(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.ad(C.d.al(d*255),0,255)
return t},
A2:function(a,b){if(b){if(typeof a!=="number")return a.aO()
return A.h4((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aO()
return A.h4((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
wh:function(a){return A.A2(H.fx(a,16,new A.rY()),a.length>=8)},
dM:function dM(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
rY:function rY(){},
uP:function(){if($.xv)return
$.xv=!0
Z.AC()},
ec:function(a,b,c,d){var t=0,s=P.be(),r,q,p,o,n
var $async$ec=P.bj(function(e,f){if(e===1)return P.bg(f,s)
while(true)switch(t){case 0:A.uP()
t=$.$get$cF().U(0,a)?3:5
break
case 3:q=$.$get$cF().n(0,a)
p=J.an(q)
if(!!p.$isdV){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cN(q)
t=1
break}}else throw H.k("Requested resource ("+a+") is an unexpected type: "+H.x(J.w4(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.uQ==null?8:9
break
case 8:t=10
return P.bS(A.jI(),$async$ec)
case 10:case 9:n=$.uQ.eU(a)
t=n!=null?11:12
break
case 11:t=13
return P.bS(A.nj(n),$async$ec)
case 13:if(!$.$get$cF().U(0,a))$.$get$cF().i(0,a,new Y.dV(a,null,H.a([],[[P.f8,,]]),[null]))
r=$.$get$cF().n(0,a).b
t=1
break
case 12:case 7:r=A.Ga(a,!1,d)
t=1
break
case 4:case 1:return P.bh(r,s)}})
return P.bi($async$ec,s)},
jI:function(){var t=0,s=P.be(),r
var $async$jI=P.bj(function(a,b){if(a===1)return P.bg(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.bS(A.ec("manifest/manifest.txt",!1,!0,$.wE),$async$jI)
case 2:r.uQ=b
return P.bh(null,s)}})
return P.bi($async$jI,s)},
xt:function(a){if(!$.$get$cF().U(0,a))$.$get$cF().i(0,a,new Y.dV(a,null,H.a([],[[P.f8,,]]),[null]))
return $.$get$cF().n(0,a)},
Ga:function(a,b,c){var t
if($.$get$cF().U(0,a))throw H.k("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.wD(C.b.gbg(a.split("."))).a
t=A.xt(a)
c.b8(A.xu(a,!1)).b9(new A.nm(t))
return t.cN(0)},
Gb:function(a){var t,s,r,q
if($.$get$cF().U(0,a))for(t=$.$get$cF().n(0,a).c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bu)(t),++r){q=t[r]
if(!q.gi_())q.bk("Resource purged")}$.$get$cF().am(0,a)},
nj:function(a){var t=0,s=P.be(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$nj=P.bj(function(b,a0){if(b===1)return P.bg(a0,s)
while(true)switch(t){case 0:t=3
return P.bS(A.ec(a+".bundle",!1,!0,null),$async$nj)
case 3:q=a0
p=C.c.L(a,0,C.c.ev(a,$.$get$xw()))
o=P.cG
n=new P.e0(new P.bq(0,$.ap,null,[o]),[o])
m=H.a([],[P.c9])
for(o=J.w_(q),l=o.length,k=[[P.f8,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.bu)(o),++i){h=o[i]
g=J.aq(h)
f=Z.wD(C.b.gbg(J.e4(g.gG(h),"."))).a
e=p+"/"+H.x(g.gG(h))
if($.$get$cF().U(0,e)){m.push(A.ec(e,!1,!1,null))
continue}d=H.kH(g.gbl(h),"$isdi")
if(!$.$get$cF().U(0,e))$.$get$cF().i(0,e,new Y.dV(e,null,H.a([],k),j))
c=$.$get$cF().n(0,e)
m.push(c.cN(0))
f.bf(d.buffer).b9(new A.nk(f,c))}P.AL(m,null,!1).b9(new A.nl(n))
r=n.a
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$nj,s)},
hH:function(a,b){var t=0,s=P.be(),r,q,p,o,n
var $async$hH=P.bj(function(c,d){if(c===1)return P.bg(d,s)
while(true)switch(t){case 0:if($.$get$uO().U(0,a)){r=$.$get$uO().n(0,a)
t=1
break}q=W.fA
p=new P.bq(0,$.ap,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.dj(n,"load",new A.nn(new P.e0(p,[q]),n),!1,W.P)
n.src=A.xu(a,!1)
r=p
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$hH,s)},
xu:function(a,b){if(C.c.ae(a,"/")){a=C.c.ag(a,1)
b=!0}else b=!1
if(b)return H.x(window.location.protocol)+"//"+H.x(window.location.host)+"/"+a
return C.c.av("../",N.v4())+a},
nm:function nm(a){this.a=a},
nk:function nk(a,b){this.a=a
this.b=b},
nl:function nl(a){this.a=a},
nn:function nn(a,b){this.a=a
this.b=b},
o3:function o3(){},
jU:function jU(){},
eG:function eG(a,b){this.a=a
this.b=b},
t5:function(){var t=0,s=P.be(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$t5=P.bj(function(a0,a1){if(a0===1)return P.bg(a1,s)
while(true)switch(t){case 0:if($.yN){t=1
break}$.yN=!0
D.Ht()
q=P.z
p=[q]
o=H.a(["metal"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,0.3)
$.$get$c().h(0,o)
$.D=o
o=H.a(["dutton"],p)
n=$.aa
H.a([],p)
o=new G.bL(null,n,o,0.6)
$.$get$c().h(0,o)
$.wW=o
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
$.b_=o
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
$.aE=o
o=H.a(["rubber"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,-0.3)
$.$get$c().h(0,o)
$.cg=o
o=H.a(["paper"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,-0.3)
$.$get$c().h(0,o)
$.K=o
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
$.aQ=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,-0.3)
$.$get$c().h(0,o)
$.bY=o
o=H.a(["flesh","meat","muscle"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,-0.1)
$.$get$c().h(0,o)
$.bo=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.G
H.a([],p)
o=new G.bL(null,n,o,3.1)
$.$get$c().h(0,o)
$.bs=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,-0.1)
$.$get$c().h(0,o)
$.ck=o
o=H.a(["plant","leaf","vine"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,-0.1)
$.$get$c().h(0,o)
$.aS=o
o=H.a(["feathery"],p)
n=$.v
H.a([],p)
o=new G.bL(null,n,o,-0.1)
$.$get$c().h(0,o)
$.bx=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.I
H.a([],p)
o=new G.bL(null,n,o,0.1)
$.$get$c().h(0,o)
$.c_=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.I
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
n=$.mX
H.a([],p)
o=new G.bL(null,n,o,13)
$.$get$c().h(0,o)
$.a0=o
o=H.a(["Unbeatable"],p)
n=$.mX
H.a([],p)
o=new G.bL(null,n,o,40.37)
$.$get$c().h(0,o)
$.FP=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$c().h(0,o)
$.au=o
o=$.uA
H.a([],p)
o=new G.aJ(null,o,["glowing","bright","illuminated"],0.1)
$.$get$c().h(0,o)
$.aR=o
o=$.uA
H.a([],p)
o=new G.aJ(null,o,["obscuring","dark","shadowy"],0.1)
$.$get$c().h(0,o)
$.am=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["calming","pale","placating","shooshing"],0.1)
$.$get$c().h(0,o)
$.bn=o
o=$.G
H.a([],p)
o=new G.aJ(null,o,["nuclear","radioactive","irradiated"],1)
$.$get$c().h(0,o)
$.ca=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$c().h(0,o)
$.aX=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$c().h(0,o)
$.bZ=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["doomed","cursed","unlucky"],-0.3)
$.$get$c().h(0,o)
$.aD=o
o=$.G
H.a([],p)
o=new G.aJ(null,o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$c().h(0,o)
$.aM=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$c().h(0,o)
$.bt=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["electrical","zap","lightning","shock"],0.6)
$.$get$c().h(0,o)
$.a8=o
o=$.q
H.a([],p)
o=new G.aJ(null,o,["restraining","imprisoning","restricting"],0.3)
$.$get$c().h(0,o)
$.aW=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["expensive","valuable","bling","money"],0.1)
$.$get$c().h(0,o)
$.bm=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["edible","tasty","delicious","savory"],0.1)
$.$get$c().h(0,o)
$.ar=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$c().h(0,o)
$.ai=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$c().h(0,o)
$.ao=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$c().h(0,o)
$.Y=o
o=$.G
H.a([],p)
o=new G.aJ(null,o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$c().h(0,o)
$.av=o
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
$.bw=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$c().h(0,o)
$.a2=o
o=$.mX
H.a([],p)
o=new G.aJ(null,o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$c().h(0,o)
$.T=o
o=$.mX
H.a([],p)
o=new G.aJ(null,o,["class-related","appropriate","themed"],1.3)
$.$get$c().h(0,o)
$.U=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["pretty","aesthetic","beautiful"],0.1)
$.$get$c().h(0,o)
$.ay=o
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
$.b0=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["poisonous","venomous","draining","poison"],0.6)
$.$get$c().h(0,o)
$.bR=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$c().h(0,o)
$.br=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$c().h(0,o)
$.cf=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$c().h(0,o)
$.as=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["blunt","bludgeoning","dull"],0.3)
$.$get$c().h(0,o)
$.ah=o
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
$.aP=o
o=$.I
H.a([],p)
o=new G.aJ(null,o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$c().h(0,o)
$.bp=o
o=H.a(["perfectly generic"],p)
n=$.I
H.a([],p)
o=new G.ae(null,n,o,0.1)
$.$get$c().h(0,o)
$.wZ=o
o=H.a(["a sword"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ex=o
o=H.a(["a hammer"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mQ=o
o=H.a(["a rifle"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uv=o
o=H.a(["a pistol"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.up=o
o=H.a(["a blade"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wP=o
o=H.a(["a dagger"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uf=o
o=H.a(["a santa"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.hy=o
o=H.a(["a fist"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wX=o
o=H.a(["claws"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mO=o
o=H.a(["a grenade"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mP=o
o=H.a(["a freaking safe"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xe=o
o=H.a(["a ball"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.fn=o
o=H.a(["a trident"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xl=o
o=H.a(["a card"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mN=o
o=H.a(["a frying pan"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ui=o
o=H.a(["a pillow"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.hx=o
o=H.a(["a machinegun"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ul=o
o=H.a(["a shuriken"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xi=o
o=H.a(["a sling"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xk=o
o=H.a(["a yoyo"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xn=o
o=H.a(["a cane"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wR=o
o=H.a(["a shield"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.fp=o
o=H.a(["a lance"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.x7=o
o=H.a(["a ax"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ub=o
o=H.a(["a sign"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xc=o
o=H.a(["a book"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.aC=o
o=H.a(["a broom"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.jy=o
o=H.a(["a club"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.jA=o
o=H.a(["a bow"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uc=o
o=H.a(["a whip"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xm=o
o=H.a(["a staff"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ux=o
o=H.a(["a needle"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.un=o
o=H.a(["dice"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ug=o
o=H.a(["a fork"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wY=o
o=H.a(["a pigeon???"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,1.3)
$.$get$c().h(0,o)
$.uo=o
o=H.a(["a chainsaw"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.wS=o
o=H.a(["a sickle"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xj=o
o=H.a(["a shotgun"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xg=o
o=H.a(["a stick"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.dR=o
o=H.a(["a chain"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ew=o
o=H.a(["a wrench"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uy=o
o=H.a(["a shovel"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xh=o
o=H.a(["a rolling pin"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uw=o
o=H.a(["a puppet"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.ut=o
o=H.a(["a razor"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uu=o
o=H.a(["a pen"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.mT=o
o=H.a(["a bust"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.jz=o
o=H.a(["a bowling ball"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.Br=o
o=H.a(["a golf club"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.x0=o
o=H.a(["a knife"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.x6=o
o=H.a(["scissors"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.xf=o
o=H.a(["a pizza cutter"],p)
n=$.a3
H.a([],p)
o=new G.ae(null,n,o,0.4)
$.$get$c().h(0,o)
$.uq=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.G
m=G.a1
l=[m]
k=H.a([$.D,$.au,$.aM],l)
H.a([],p)
o=new G.d("Forged",k,null,n,o,0)
$.$get$c().h(0,o)
$.CL=o
o=H.a([],p)
n=$.v
k=H.a([$.ah,$.au],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cg=o
o=H.a(["fossilized"],p)
n=$.G
k=H.a([$.b_,$.aw],l)
H.a([],p)
o=new G.d("Fossilized",k,null,n,o,0)
$.$get$c().h(0,o)
$.CM=o
o=H.a(["adamantium"],p)
n=$.G
k=H.a([$.b_,$.D],l)
H.a([],p)
o=new G.d("Adamantium",k,null,n,o,0)
$.$get$c().h(0,o)
$.wN=o
o=H.a([],p)
n=$.v
k=H.a([$.b0,$.aF],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fo=o
o=H.a(["tatami"],p)
n=$.v
k=H.a([$.Q,$.X],l)
H.a([],p)
o=new G.d("Tatami",k,null,n,o,0)
$.$get$c().h(0,o)
$.FD=o
o=H.a(["mesh","chain link"],p)
n=$.v
k=H.a([$.Q,$.D],l)
H.a([],p)
o=new G.d("Mesh",k,null,n,o,0)
$.$get$c().h(0,o)
$.DM=o
o=H.a(["foil"],p)
n=$.v
k=H.a([$.K,$.D],l)
H.a([],p)
o=new G.d("Foil",k,null,n,o,0)
$.$get$c().h(0,o)
$.CH=o
o=H.a(["beanbag"],p)
n=$.v
k=H.a([$.Q,$.aw],l)
H.a([],p)
o=new G.d("Beanbag",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bl=o
o=H.a(["pleather","faux fur"],p)
n=$.v
k=H.a([$.ck,$.aE],l)
H.a([],p)
o=new G.d("Faux Fur",k,null,n,o,0)
$.$get$c().h(0,o)
$.Em=o
o=H.a(["plywood"],p)
n=$.v
k=H.a([$.X,$.K],l)
H.a([],p)
o=new G.d("Plywood",k,null,n,o,0)
$.$get$c().h(0,o)
$.ur=o
o=H.a(["colossus"],p)
n=$.v
k=H.a([$.D,$.bo],l)
H.a([],p)
o=new G.d("Colossus",k,null,n,o,0)
$.$get$c().h(0,o)
$.wT=o
o=H.a(["rotting","zombie"],p)
n=$.G
k=H.a([$.c_,$.bo],l)
H.a([],p)
o=new G.d("Rotting",k,null,n,o,0)
$.$get$c().h(0,o)
$.EM=o
o=H.a(["draugr","white walker"],p)
n=$.G
k=H.a([$.c_,$.bo,$.br],l)
H.a([],p)
o=new G.d("Draugr",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cd=o
o=H.a(["Ultraviolet"],p)
n=$.uz
k=H.a([$.aR,$.am],l)
H.a([],p)
o=new G.d("Ultraviolet",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dv=o
o=H.a(["Ultraviolence"],p)
n=$.q
k=H.a([$.aR,$.am,$.au],l)
H.a([],p)
o=new G.d("Ultraviolence",k,null,n,o,0)
$.$get$c().h(0,o)
$.FO=o
o=H.a([],p)
n=$.q
k=H.a([$.aD,$.bZ],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cb=o
o=H.a(["candy"],p)
n=$.v
k=H.a([$.ar,$.aQ],l)
H.a([],p)
o=new G.d("Candy",k,null,n,o,0)
$.$get$c().h(0,o)
$.ud=o
o=H.a(["cotton candy"],p)
n=$.v
k=H.a([$.ar,$.Q],l)
H.a([],p)
o=new G.d("Cotton Candy",k,null,n,o,0)
$.$get$c().h(0,o)
$.BX=o
o=H.a(["gummy"],p)
n=$.v
k=H.a([$.ar,$.cg],l)
H.a([],p)
o=new G.d("Gum",k,null,n,o,0)
$.$get$c().h(0,o)
$.CY=o
o=H.a(["marrow"],p)
n=$.v
k=H.a([$.ar,$.b_],l)
H.a([],p)
o=new G.d("Marrow",k,null,n,o,0)
$.$get$c().h(0,o)
$.DF=o
o=H.a(["toothy"],p)
n=$.a3
k=H.a([$.b_,$.bU],l)
H.a([],p)
o=new G.d("Toothy",k,null,n,o,0)
$.$get$c().h(0,o)
$.FL=o
o=H.a(["Frost"],p)
n=$.v
k=H.a([$.aw,$.aQ,$.bo],l)
H.a([],p)
o=new G.d("Frost",k,null,n,o,0)
$.$get$c().h(0,o)
$.CN=o
o=H.a(["arsenic","antifreeze"],p)
n=$.q
k=H.a([$.ar,$.bR],l)
H.a([],p)
o=new G.d("Arsenic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cl=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.v
k=H.a([$.aw,$.aQ],l)
H.a([],p)
o=new G.d("Crystal",k,null,n,o,0)
$.$get$c().h(0,o)
$.ue=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.I
k=H.a([$.ay,$.aA,$.aU,$.Y,$.ai,$.bZ,$.a2],l)
H.a([],p)
o=new G.d("Mary Sue",k,null,n,o,0)
$.$get$c().h(0,o)
$.DG=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.I
k=H.a([$.aX,$.am,$.au,$.a0,$.aD,$.Y,$.ai,$.ao],l)
H.a([],p)
o=new G.d("Edge Lord",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cj=o
o=H.a(["deadpool"],p)
n=$.a3
k=H.a([$.c_,$.aI,$.ao,$.aU],l)
H.a([],p)
o=new G.d("Deadpool",k,null,n,o,0)
$.$get$c().h(0,o)
$.C2=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.I
k=H.a([$.aX,$.ao],l)
H.a([],p)
o=new G.d("Spoopy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fr=o
o=H.a(["wolverine"],p)
n=$.a3
k=H.a([$.b_,$.au,$.aM],l)
H.a([],p)
o=new G.d("Wolverine",k,null,n,o,0)
$.$get$c().h(0,o)
$.G_=o
o=H.a(["rabbit's foot"],p)
n=$.a3
k=H.a([$.bZ,$.ck],l)
H.a([],p)
o=new G.d("Rabbit's Foot",k,null,n,o,0)
$.$get$c().h(0,o)
$.xb=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.G
k=H.a([$.aM,$.X],l)
H.a([],p)
o=new G.d("Tipped",k,null,n,o,0)
$.$get$c().h(0,o)
$.Be=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a3
k=H.a([$.aM,$.aK,$.X],l)
H.a([],p)
o=new G.d("Arrow",k,null,n,o,0)
$.$get$c().h(0,o)
$.wO=o
o=H.a(["training sword","bokken"],p)
n=$.a3
k=H.a([$.X,$.au],l)
H.a([],p)
o=new G.d("Bokken",k,null,n,o,0)
$.$get$c().h(0,o)
$.Do=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.aP,$.ao],l)
H.a([],p)
o=new G.d("Irony Type1",k,null,n,o,0)
$.$get$c().h(0,o)
$.mR=o
o=H.a(["netted","webbed"],p)
n=$.a3
k=H.a([$.aW,$.Q],l)
H.a([],p)
o=new G.d("Netted",k,null,n,o,0)
$.$get$c().h(0,o)
$.E0=o
o=H.a(["barbed wire"],p)
n=$.a3
k=H.a([$.aM,$.aW,$.D,$.Q],l)
H.a([],p)
o=new G.d("Barbed Wire",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bi=o
o=H.a(["morning star"],p)
n=$.a3
k=H.a([$.aM,$.ah],l)
H.a([],p)
o=new G.d("Morning Star",k,null,n,o,0)
$.$get$c().h(0,o)
$.DV=o
o=H.a(["decadent"],p)
n=$.I
k=H.a([$.b0,$.bm],l)
H.a([],p)
o=new G.d("Decadent",k,null,n,o,0)
$.$get$c().h(0,o)
$.C5=o
o=H.a(["SBAHJ"],p)
n=$.q
k=H.a([$.bV,$.ao],l)
H.a([],p)
o=new G.d("SBAHJ",k,null,n,o,0)
$.$get$c().h(0,o)
$.EV=o
o=H.a(["bayonet"],p)
n=$.a3
k=H.a([$.aM,$.aK],l)
H.a([],p)
o=new G.d("Bayonet",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bk=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.v
k=H.a([$.br,$.ao,$.au],l)
H.a([],p)
o=new G.d("Snoop",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fn=o
o=H.a(["light saber"],p)
n=$.q
k=H.a([$.aR,$.as,$.au],l)
H.a([],p)
o=new G.d("Light Saber",k,null,n,o,0)
$.$get$c().h(0,o)
$.Du=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.I
k=H.a([$.a2,$.aP],l)
H.a([],p)
o=new G.d("Fakey Fake",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cs=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.I
k=H.a([$.a2,$.bp],l)
H.a([],p)
o=new G.d("Real As Shit",k,null,n,o,0)
$.$get$c().h(0,o)
$.EG=o
o=H.a(["skeletal"],p)
n=$.a3
k=H.a([$.aX,$.aD,$.b_],l)
H.a([],p)
o=new G.d("Skeletal",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fh=o
o=H.a(["green sun"],p)
n=$.uA
k=H.a([$.as,$.ca,$.aR],l)
H.a([],p)
o=new G.d("Green Sun",k,null,n,o,0)
$.$get$c().h(0,o)
$.uk=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.uz
k=H.a([$.am,$.ai],l)
H.a([],p)
o=new G.d("Midnight",k,null,n,o,0)
$.$get$c().h(0,o)
$.DQ=o
o=H.a(["radiant","dazzling"],p)
n=$.I
k=H.a([$.a2,$.aR],l)
H.a([],p)
o=new G.d("Radiant",k,null,n,o,0)
$.$get$c().h(0,o)
$.ED=o
o=H.a(["edgy"],p)
n=$.I
k=H.a([$.au,$.am,$.ao],l)
H.a([],p)
o=new G.d("Edgy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ck=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.q
k=H.a([$.ca,$.bt],l)
H.a([],p)
o=new G.d("Warhead",k,null,n,o,0)
$.$get$c().h(0,o)
$.B7=o
o=H.a(["living"],p)
n=$.G
k=H.a([$.b_,$.bo,$.av],l)
H.a([],p)
o=new G.d("Living",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dy=o
o=H.a(["dead","corpse","deceased"],p)
n=$.G
k=H.a([$.b_,$.bo],l)
H.a([],p)
o=new G.d("Dead",k,null,n,o,0)
$.$get$c().h(0,o)
$.C1=o
o=H.a(["taser"],p)
n=$.q
k=H.a([$.a8,$.aW,$.aK],l)
H.a([],p)
o=new G.d("Taser",k,null,n,o,0)
$.$get$c().h(0,o)
$.FC=o
o=H.a(["nocturn"],p)
n=$.q
k=H.a([$.am,$.a9],l)
H.a([],p)
o=new G.d("Nocturn",k,null,n,o,0)
$.$get$c().h(0,o)
$.E3=o
o=H.a(["dirge"],p)
n=$.q
k=H.a([$.aD,$.a9],l)
H.a([],p)
o=new G.d("Dirge",k,null,n,o,0)
$.$get$c().h(0,o)
$.C8=o
o=H.a(["Snobbish","Noble"],p)
n=$.I
k=H.a([$.ai,$.bm],l)
H.a([],p)
o=new G.d("Snobbish",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fm=o
o=H.a(["flat"],p)
n=$.I
k=H.a([$.ah,$.a9],l)
H.a([],p)
o=new G.d("Flat(Music)",k,null,n,o,0)
$.$get$c().h(0,o)
$.CC=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.au,$.a9],l)
H.a([],p)
o=new G.d("Sharp(Music)",k,null,n,o,0)
$.$get$c().h(0,o)
$.F3=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.ai,$.a9],l)
H.a([],p)
o=new G.d("Sharp(Clothes)",k,null,n,o,0)
$.$get$c().h(0,o)
$.F2=o
o=H.a(["Bach's"],p)
n=$.aa
k=H.a([$.Y,$.a9],l)
H.a([],p)
o=new G.d("Bach's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bg=o
o=H.a(["Mozart's"],p)
n=$.aa
k=H.a([$.a2,$.a9],l)
H.a([],p)
o=new G.d("Mozart's",k,null,n,o,0)
$.$get$c().h(0,o)
$.DX=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.aa
k=H.a([$.Y,$.ca],l)
H.a([],p)
o=new G.d("Einstein's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cm=o
o=H.a(["Feynman's"],p)
n=$.aa
k=H.a([$.Y,$.aU],l)
H.a([],p)
o=new G.d("Feynman's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cw=o
o=H.a(["Ziptie"],p)
n=$.aa
k=H.a([$.aE,$.aW],l)
H.a([],p)
o=new G.d("Ziptie",k,null,n,o,0)
$.$get$c().h(0,o)
$.G3=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.q
k=H.a([$.D,$.Y],l)
H.a([],p)
o=new G.d("Mobile",k,null,n,o,0)
$.$get$c().h(0,o)
$.mV=o
o=H.a(["Sassacre"],p)
n=$.aa
k=H.a([$.cf,$.aU],l)
H.a([],p)
o=new G.d("Sassacre",k,null,n,o,0)
$.$get$c().h(0,o)
$.EU=o
o=H.a(["Sledge"],p)
n=$.q
k=H.a([$.ah,$.cf],l)
H.a([],p)
o=new G.d("Sledge",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fk=o
o=H.a(["Legal"],p)
n=$.q
k=H.a([$.aW,$.K],l)
H.a([],p)
o=new G.d("Legal",k,null,n,o,0)
$.$get$c().h(0,o)
$.mS=o
o=H.a(["Clown"],p)
n=$.q
k=H.a([$.aU,$.aV],l)
H.a([],p)
o=new G.d("Clown",k,null,n,o,0)
$.$get$c().h(0,o)
$.BR=o
o=H.a(["passionate"],p)
n=$.I
k=H.a([$.as,$.aA],l)
H.a([],p)
o=new G.d("Passionate",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ed=o
o=H.a(["pinata"],p)
n=$.a3
k=H.a([$.K,$.ar],l)
H.a([],p)
o=new G.d("Pinata",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eh=o
o=H.a(["anvil"],p)
n=$.q
k=H.a([$.ah,$.cf,$.D],l)
H.a([],p)
o=new G.d("Anvil",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bd=o
o=H.a(["flashbang"],p)
n=$.q
k=H.a([$.aR,$.bt],l)
H.a([],p)
o=new G.d("Flashbang",k,null,n,o,0)
$.$get$c().h(0,o)
$.CB=o
o=H.a(["smokebomb"],p)
n=$.q
k=H.a([$.am,$.bt],l)
H.a([],p)
o=new G.d("Smokebomb",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fl=o
o=H.a(["ninja"],p)
n=$.q
k=H.a([$.am,$.au],l)
H.a([],p)
o=new G.d("Ninja",k,null,n,o,0)
$.$get$c().h(0,o)
$.E2=o
o=H.a(["techno"],p)
n=$.q
k=H.a([$.a8,$.a9],l)
H.a([],p)
o=new G.d("Techno",k,null,n,o,0)
$.$get$c().h(0,o)
$.FF=o
o=H.a(["rock and roll"],p)
n=$.q
k=H.a([$.aw,$.a9],l)
H.a([],p)
o=new G.d("Rock And/Or Roll",k,null,n,o,0)
$.$get$c().h(0,o)
$.EI=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a3
k=H.a([$.av,$.bo,$.aK],l)
H.a([],p)
o=new G.d("Pistol Shrimp",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ei=o
o=H.a(["juggalo"],p)
n=$.q
k=H.a([$.aU,$.a9,$.aV,$.aX],l)
H.a([],p)
o=new G.d("Juggalo",k,null,n,o,0)
$.$get$c().h(0,o)
$.x5=o
o=H.a(["shocksauce"],p)
n=$.I
k=H.a([$.ao,$.a8],l)
H.a([],p)
o=new G.d("Shock Sauce",k,null,n,o,0)
$.$get$c().h(0,o)
$.F6=o
o=H.a(["weaksauce"],p)
n=$.I
k=H.a([$.ah,$.ao,$.bV],l)
H.a([],p)
o=new G.d("Weak Sauce",k,null,n,o,0)
$.$get$c().h(0,o)
$.FU=o
o=H.a(["spicy","picante"],p)
n=$.I
k=H.a([$.as,$.ar],l)
H.a([],p)
o=new G.d("Spicy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fq=o
o=H.a(["ice cream","popsicle"],p)
n=$.v
k=H.a([$.br,$.ar],l)
H.a([],p)
o=new G.d("Popsicle",k,null,n,o,0)
$.$get$c().h(0,o)
$.Db=o
o=H.a(["popsickle"],p)
n=$.v
k=H.a([$.br,$.ar,$.au],l)
H.a([],p)
o=new G.d("Popsickle",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eu=o
o=H.a(["icepick"],p)
n=$.v
k=H.a([$.br,$.aM],l)
H.a([],p)
o=new G.d("Icepick",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dc=o
o=H.a(["schezwan"],p)
n=$.I
k=H.a([$.ao,$.ar],l)
H.a([],p)
o=new G.d("Schezwan",k,null,n,o,0)
$.$get$c().h(0,o)
$.EW=o
o=H.a(["vaporwave"],p)
n=$.q
k=H.a([$.am,$.a9,$.ao,$.a8],l)
H.a([],p)
o=new G.d("Vaporwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.FS=o
o=H.a(["mallet"],p)
n=$.a3
k=H.a([$.X,$.ah],l)
H.a([],p)
o=new G.d("Mallet",k,null,n,o,0)
$.$get$c().h(0,o)
$.DE=o
o=H.a(["fidget"],p)
n=$.q
k=H.a([$.aE,$.ao],l)
H.a([],p)
o=new G.d("Fidget",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cy=o
o=H.a(["gold foil"],p)
n=$.v
k=H.a([$.D,$.K,$.bm],l)
H.a([],p)
o=new G.d("Gold Foil",k,null,n,o,0)
$.$get$c().h(0,o)
$.CV=o
o=H.a(["caviar"],p)
n=$.v
k=H.a([$.ar,$.bm],l)
H.a([],p)
o=new G.d("Caviar",k,null,n,o,0)
$.$get$c().h(0,o)
$.BH=o
o=H.a(["RADioactive"],p)
n=$.I
k=H.a([$.ca,$.ao],l)
H.a([],p)
o=new G.d("RADioactive",k,null,n,o,0)
$.$get$c().h(0,o)
$.EE=o
o=H.a(["glam"],p)
n=$.I
k=H.a([$.aw,$.a9,$.ay],l)
H.a([],p)
o=new G.d("Glam",k,null,n,o,0)
$.$get$c().h(0,o)
$.CT=o
o=H.a(["hair metal"],p)
n=$.I
k=H.a([$.D,$.a9,$.ay],l)
H.a([],p)
o=new G.d("Hair Metal",k,null,n,o,0)
$.$get$c().h(0,o)
$.D_=o
o=H.a(["elven","fae","sylvan"],p)
n=$.I
k=H.a([$.a2,$.ay],l)
H.a([],p)
o=new G.d("Elven",k,null,n,o,0)
$.$get$c().h(0,o)
$.Co=o
o=H.a(["shiny"],p)
n=$.I
k=H.a([$.D,$.ay],l)
H.a([],p)
o=new G.d("Shiny",k,null,n,o,0)
$.$get$c().h(0,o)
$.F5=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.I
k=H.a([$.bm,$.ay,$.ai],l)
H.a([],p)
o=new G.d("Bespoke",k,null,n,o,0)
$.$get$c().h(0,o)
$.fo=o
o=H.a(["operatic"],p)
n=$.I
k=H.a([$.bm,$.a9,$.ai],l)
H.a([],p)
o=new G.d("Operatic",k,null,n,o,0)
$.$get$c().h(0,o)
$.E7=o
o=H.a(["ice","diamond"],p)
n=$.v
k=H.a([$.bm,$.br],l)
H.a([],p)
o=new G.d("Diamond",k,null,n,o,0)
$.$get$c().h(0,o)
$.x3=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.I
k=H.a([$.as,$.br],l)
H.a([],p)
o=new G.d("Icy Hot",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dd=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.I
k=H.a([$.ao,$.br],l)
H.a([],p)
o=new G.d("Cold As Fuck",k,null,n,o,0)
$.$get$c().h(0,o)
$.Da=o
o=H.a(["winter's","season's"],p)
n=$.aa
k=H.a([$.bn,$.br],l)
H.a([],p)
o=new G.d("Winter's",k,null,n,o,0)
$.$get$c().h(0,o)
$.FX=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.aa
k=H.a([$.a2,$.br],l)
H.a([],p)
o=new G.d("Christmas",k,null,n,o,0)
$.$get$c().h(0,o)
$.BN=o
o=H.a(["Santa Saws"],p)
n=$.aa
k=H.a([$.a2,$.br,$.au],l)
H.a([],p)
o=new G.d("Santa Saws",k,null,n,o,0)
$.$get$c().h(0,o)
$.ES=o
o=H.a(["Santa Sleighs"],p)
n=$.aa
k=H.a([$.hy,$.au],l)
H.a([],p)
o=new G.d("Santa Sleighs",k,null,n,o,0)
$.$get$c().h(0,o)
$.ET=o
o=H.a(["Santa Claws"],p)
n=$.aa
k=H.a([$.hy,$.mO],l)
H.a([],p)
o=new G.d("Santa Claws",k,null,n,o,0)
$.$get$c().h(0,o)
$.ER=o
o=H.a(["Sandy Claws"],p)
n=$.aa
k=H.a([$.hy,$.mO,$.aw],l)
H.a([],p)
o=new G.d("Sandy Claws",k,null,n,o,0)
$.$get$c().h(0,o)
$.EQ=o
o=H.a(["Silent Night"],p)
n=$.aa
k=H.a([$.hy,$.am],l)
H.a([],p)
o=new G.d("Silent Night",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fd=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.aa
k=H.a([$.aX,$.bY],l)
H.a([],p)
o=new G.d("Ghost's",k,null,n,o,0)
$.$get$c().h(0,o)
$.D0=o
o=H.a(["ghoul","mutant"],p)
n=$.v
k=H.a([$.bo,$.ca,$.c_],l)
H.a([],p)
o=new G.d("Mutant",k,null,n,o,0)
$.$get$c().h(0,o)
$.DY=o
o=H.a(["skate","skateboard"],p)
n=$.q
k=H.a([$.ao,$.D],l)
H.a([],p)
o=new G.d("Skateboard",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fg=o
o=H.a(["microwave"],p)
n=$.q
k=H.a([$.ca,$.a8,$.ar],l)
H.a([],p)
o=new G.d("Microwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.DP=o
o=H.a(["orbital"],p)
n=$.q
k=H.a([$.ca,$.a8,$.ar,$.aK],l)
H.a([],p)
o=new G.d("Orbital",k,null,n,o,0)
$.$get$c().h(0,o)
$.E8=o
o=H.a([],p)
n=$.q
k=H.a([$.ah,$.Y],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ch=o
o=H.a(["uranium"],p)
n=$.v
k=H.a([$.ca,$.aw],l)
H.a([],p)
o=new G.d("Uranium",k,null,n,o,0)
$.$get$c().h(0,o)
$.FR=o
o=H.a(["mousepad","jar opener"],p)
n=$.q
k=H.a([$.K,$.cg],l)
H.a([],p)
o=new G.d("Mousepad",k,null,n,o,0)
$.$get$c().h(0,o)
$.DW=o
o=H.a(["flint"],p)
n=$.v
k=H.a([$.au,$.aw],l)
H.a([],p)
o=new G.d("Sharpened Flint",k,null,n,o,0)
$.$get$c().h(0,o)
$.CE=o
o=H.a(["flint"],p)
n=$.v
k=H.a([$.aM,$.aw],l)
H.a([],p)
o=new G.d("Pointed Flint",k,null,n,o,0)
$.$get$c().h(0,o)
$.CF=o
o=H.a(["picnic"],p)
n=$.q
k=H.a([$.aE,$.aM],l)
H.a([],p)
o=new G.d("Picnic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eg=o
o=H.a(["xtreme xplosion"],p)
n=$.I
k=H.a([$.ao,$.bt],l)
H.a([],p)
o=new G.d("Xtreme Xplosion",k,null,n,o,0)
$.$get$c().h(0,o)
$.G2=o
o=H.a(["lawn"],p)
n=$.q
k=H.a([$.aE,$.b0],l)
H.a([],p)
o=new G.d("Lawn",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ds=o
o=H.a(["upholstered"],p)
n=$.v
k=H.a([$.Q,$.b0],l)
H.a([],p)
o=new G.d("Upholstered",k,null,n,o,0)
$.$get$c().h(0,o)
$.FQ=o
o=H.a(["leather"],p)
n=$.v
k=H.a([$.bo,$.b0],l)
H.a([],p)
o=new G.d("Leather",k,null,n,o,0)
$.$get$c().h(0,o)
$.x9=o
o=H.a(["shag"],p)
n=$.v
k=H.a([$.ck,$.b0],l)
H.a([],p)
o=new G.d("Shag",k,null,n,o,0)
$.$get$c().h(0,o)
$.F1=o
o=H.a(["loyal"],p)
n=$.I
k=H.a([$.ah,$.aA],l)
H.a([],p)
o=new G.d("Loyal",k,null,n,o,0)
$.$get$c().h(0,o)
$.DC=o
o=H.a(["porcelain"],p)
n=$.v
k=H.a([$.ay,$.bU],l)
H.a([],p)
o=new G.d("Porcelain",k,null,n,o,0)
$.$get$c().h(0,o)
$.us=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a3
k=H.a([$.bm,$.bU],l)
H.a([],p)
o=new G.d("Pork Hollow",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ew=o
o=H.a(["n1nj4","katana"],p)
n=$.q
k=H.a([$.ao,$.au],l)
H.a([],p)
o=new G.d("Katana",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dm=o
o=H.a(["chocolate"],p)
n=$.v
k=H.a([$.aA,$.ar],l)
H.a([],p)
o=new G.d("Chocolate",k,null,n,o,0)
$.$get$c().h(0,o)
$.BM=o
o=H.a(["wrapped chocolate"],p)
n=$.v
k=H.a([$.aA,$.ar,$.K,$.D],l)
H.a([],p)
o=new G.d("Wrapped Chocolate",k,null,n,o,0)
$.$get$c().h(0,o)
$.CI=o
o=H.a(["scratch-n-sniff"],p)
n=$.v
k=H.a([$.ao,$.K],l)
H.a([],p)
o=new G.d("Scratch-n-sniff",k,null,n,o,0)
$.$get$c().h(0,o)
$.EY=o
o=H.a(["mythril","orichalcum"],p)
n=$.v
k=H.a([$.a2,$.D],l)
H.a([],p)
o=new G.d("Mythril",k,null,n,o,0)
$.$get$c().h(0,o)
$.DZ=o
o=H.a(["titanium","steel"],p)
n=$.v
k=H.a([$.ah,$.D],l)
H.a([],p)
o=new G.d("Titanium",k,null,n,o,0)
$.$get$c().h(0,o)
$.FK=o
o=H.a(["lead"],p)
n=$.v
k=H.a([$.cf,$.D],l)
H.a([],p)
o=new G.d("Lead",k,null,n,o,0)
$.$get$c().h(0,o)
$.x8=o
o=H.a(["satire","parody","onion"],p)
n=$.q
k=H.a([$.aP,$.aU],l)
H.a([],p)
o=new G.d("Satire",k,null,n,o,0)
$.$get$c().h(0,o)
$.E6=o
o=H.a(["comedy gold"],p)
n=$.I
k=H.a([$.bm,$.aU],l)
H.a([],p)
o=new G.d("Comedy Gold",k,null,n,o,0)
$.$get$c().h(0,o)
$.BT=o
o=H.a(["dry","sensible chuckle"],p)
n=$.I
k=H.a([$.ai,$.aU],l)
H.a([],p)
o=new G.d("Dry",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ce=o
o=H.a(["polite"],p)
n=$.I
k=H.a([$.b0,$.aP],l)
H.a([],p)
o=new G.d("Polite",k,null,n,o,0)
$.$get$c().h(0,o)
$.Es=o
o=H.a(["stradivarius"],p)
n=$.aa
k=H.a([$.ai,$.bm,$.X,$.a9],l)
H.a([],p)
o=new G.d("Stradivarius",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fx=o
o=H.a(["scientistic"],p)
n=$.I
k=H.a([$.Y,$.aP],l)
H.a([],p)
o=new G.d("Scientistic",k,null,n,o,0)
$.$get$c().h(0,o)
$.EX=o
o=H.a(["AI"],p)
n=$.q
k=H.a([$.a8,$.av],l)
H.a([],p)
o=new G.d("AI",k,null,n,o,0)
$.$get$c().h(0,o)
$.ua=o
o=H.a(["robotic"],p)
n=$.G
k=H.a([$.D,$.a8,$.av],l)
H.a([],p)
o=new G.d("Robotic",k,null,n,o,0)
$.$get$c().h(0,o)
$.xd=o
o=H.a(["shrapnel"],p)
n=$.q
k=H.a([$.X,$.bt],l)
H.a([],p)
o=new G.d("Shrapnel",k,null,n,o,0)
$.$get$c().h(0,o)
$.F8=o
o=H.a(["vocaloid"],p)
n=$.q
k=H.a([$.av,$.a8,$.a9],l)
H.a([],p)
o=new G.d("Vocaloid",k,null,n,o,0)
$.$get$c().h(0,o)
$.FT=o
o=H.a(["*Hyun-ae"],p)
n=$.aa
k=H.a([$.av,$.a8,$.aA],l)
H.a([],p)
o=new G.d("*Hyun-ae",k,null,n,o,0)
$.$get$c().h(0,o)
$.D9=o
o=H.a(["buckshot"],p)
n=$.q
k=H.a([$.X,$.aK],l)
H.a([],p)
o=new G.d("Buckshot",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bv=o
o=H.a(["cannon"],p)
n=$.q
k=H.a([$.cf,$.aK],l)
H.a([],p)
o=new G.d("Cannon",k,null,n,o,0)
$.$get$c().h(0,o)
$.BE=o
o=H.a(["stationary"],p)
n=$.q
k=H.a([$.ai,$.K],l)
H.a([],p)
o=new G.d("Stationary",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fv=o
o=H.a([],p)
n=$.q
k=H.a([$.aC,$.K],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ea=o
o=H.a([],p)
n=$.q
k=H.a([$.D,$.aK],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.DN=o
o=H.a(["papercut"],p)
n=$.q
k=H.a([$.au,$.K],l)
H.a([],p)
o=new G.d("Papercut",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eb=o
o=H.a(["squeaky"],p)
n=$.G
k=H.a([$.ah,$.cg],l)
H.a([],p)
o=new G.d("Squeaky",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fs=o
o=H.a(["kazoo"],p)
n=$.q
k=H.a([$.aP,$.a9],l)
H.a([],p)
o=new G.d("Kazoo",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dn=o
o=H.a(["bandaid"],p)
n=$.q
k=H.a([$.aI,$.K],l)
H.a([],p)
o=new G.d("Bandaid",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bh=o
o=H.a(["gushers"],p)
n=$.q
k=H.a([$.aI,$.ar],l)
H.a([],p)
o=new G.d("Gushers",k,null,n,o,0)
$.$get$c().h(0,o)
$.CZ=o
o=H.a(["medic"],p)
n=$.q
k=H.a([$.aI,$.aK],l)
H.a([],p)
o=new G.d("Medic",k,null,n,o,0)
$.$get$c().h(0,o)
$.DL=o
o=H.a(["sick nasty","ill"],p)
n=$.G
k=H.a([$.ao,$.bR],l)
H.a([],p)
o=new G.d("Sick Nasty",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fa=o
o=H.a(["gilded","gold leaf"],p)
n=$.v
k=H.a([$.D,$.X],l)
H.a([],p)
o=new G.d("Gilded",k,null,n,o,0)
$.$get$c().h(0,o)
$.CS=o
o=H.a(["charging","power cord"],p)
n=$.q
k=H.a([$.aE,$.a8],l)
H.a([],p)
o=new G.d("Charging",k,null,n,o,0)
$.$get$c().h(0,o)
$.BL=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.cg,$.au],l)
H.a([],p)
o=new G.d("Rubber Safety",k,null,n,o,0)
$.$get$c().h(0,o)
$.EO=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.aE,$.au],l)
H.a([],p)
o=new G.d("Plastic Safety",k,null,n,o,0)
$.$get$c().h(0,o)
$.EP=o
o=H.a(["thunderous","thor's"],p)
n=$.I
k=H.a([$.aV,$.a8],l)
H.a([],p)
o=new G.d("Thunderous",k,null,n,o,0)
$.$get$c().h(0,o)
$.FI=o
o=H.a(["screeching","dial up"],p)
n=$.I
k=H.a([$.aV,$.a8,$.Y],l)
H.a([],p)
o=new G.d("Screeching",k,null,n,o,0)
$.$get$c().h(0,o)
$.F_=o
o=H.a(["mirrored","reflective"],p)
n=$.q
k=H.a([$.aQ,$.D],l)
H.a([],p)
o=new G.d("Mirrored",k,null,n,o,0)
$.$get$c().h(0,o)
$.um=o
o=H.a(["far seeing","sighted"],p)
n=$.q
k=H.a([$.aQ,$.aw,$.a2],l)
H.a([],p)
o=new G.d("Far Seeing",k,null,n,o,0)
$.$get$c().h(0,o)
$.wU=o
o=H.a(["disabling","non lethal"],p)
n=$.q
k=H.a([$.cg,$.aK],l)
H.a([],p)
o=new G.d("Nonlethal",k,null,n,o,0)
$.$get$c().h(0,o)
$.C9=o
o=H.a(["fashionable"],p)
n=$.q
k=H.a([$.ay,$.ai],l)
H.a([],p)
o=new G.d("Fashionable",k,null,n,o,0)
$.$get$c().h(0,o)
$.uh=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.aU,$.ao],l)
H.a([],p)
o=new G.d("Ironic Type 2",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dh=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.bV,$.aU],l)
H.a([],p)
o=new G.d("Ironic Type 3",k,null,n,o,0)
$.$get$c().h(0,o)
$.x4=o
o=H.a(["post-ironic"],p)
n=$.I
k=H.a([$.aP,$.ao,$.ai],l)
H.a([],p)
o=new G.d("Post Ironic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ey=o
o=H.a(["monstrous"],p)
n=$.I
k=H.a([$.c_,$.aV,$.aX],l)
H.a([],p)
o=new G.d("Monstrous",k,null,n,o,0)
$.$get$c().h(0,o)
$.DU=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.q
k=H.a([$.aK,$.ao,$.ai],l)
H.a([],p)
o=new G.d("Rooty Tooty Point and Shooty",k,null,n,o,0)
$.$get$c().h(0,o)
$.EK=o
o=H.a(["golden"],p)
n=$.v
k=H.a([$.D,$.bm],l)
H.a([],p)
o=new G.d("Golden",k,null,n,o,0)
$.$get$c().h(0,o)
$.uj=o
o=H.a(["platinum"],p)
n=$.v
k=H.a([$.aR,$.D],l)
H.a([],p)
o=new G.d("Platinum",k,null,n,o,0)
$.$get$c().h(0,o)
$.mU=o
o=H.a(["horseshoe"],p)
n=$.q
k=H.a([$.bZ,$.D],l)
H.a([],p)
o=new G.d("Horseshoe",k,null,n,o,0)
$.$get$c().h(0,o)
$.x2=o
o=H.a(["felt"],p)
n=$.q
k=H.a([$.Q,$.ck],l)
H.a([],p)
o=new G.d("Felt",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cu=o
o=H.a(["marble"],p)
n=$.v
k=H.a([$.aw,$.ai],l)
H.a([],p)
o=new G.d("Marble",k,null,n,o,0)
$.$get$c().h(0,o)
$.xa=o
o=H.a(["marble"],p)
n=$.v
k=H.a([$.aw,$.cf],l)
H.a([],p)
o=new G.d("Marble",k,null,n,o,0)
$.$get$c().h(0,o)
$.CX=o
o=H.a(["glitched"],p)
n=$.G
k=H.a([$.bs,$.a8],l)
H.a([],p)
o=new G.d("Glitched",k,null,n,o,0)
$.$get$c().h(0,o)
$.x_=o
o=H.a(["debugging"],p)
n=$.q
k=H.a([$.aI,$.a8],l)
H.a([],p)
o=new G.d("Debugging",k,null,n,o,0)
$.$get$c().h(0,o)
$.C4=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.q
k=H.a([$.D,$.aV,$.a9],l)
H.a([],p)
o=new G.d("Metalic",k,null,n,o,0)
$.$get$c().h(0,o)
$.DO=o
o=H.a(["Simulacrum"],p)
n=$.I
k=H.a([$.av,$.aP],l)
H.a([],p)
o=new G.d("Simulacrum",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ff=o
o=H.a(["Imitation"],p)
n=$.q
k=H.a([$.ar,$.aP],l)
H.a([],p)
o=new G.d("Imitation",k,null,n,o,0)
$.$get$c().h(0,o)
$.De=o
o=H.a(["Placebo"],p)
n=$.q
k=H.a([$.aI,$.aP],l)
H.a([],p)
o=new G.d("Placebo",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ek=o
o=H.a(["counterfeit"],p)
n=$.q
k=H.a([$.bm,$.aP],l)
H.a([],p)
o=new G.d("Counterfeit",k,null,n,o,0)
$.$get$c().h(0,o)
$.BY=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.ao,$.aF,$.aU],l)
H.a([],p)
o=new G.d("Surreal1",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fz=o
o=H.a(["Brainy"],p)
n=$.I
k=H.a([$.Y,$.bo],l)
H.a([],p)
o=new G.d("Brainy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bs=o
o=H.a(["Incendiary"],p)
n=$.q
k=H.a([$.as,$.bt],l)
H.a([],p)
o=new G.d("Incendiary",k,null,n,o,0)
$.$get$c().h(0,o)
$.Df=o
o=H.a(["C-4"],p)
n=$.v
k=H.a([$.bt,$.aE],l)
H.a([],p)
o=new G.d("C-4",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bz=o
o=H.a(["fae"],p)
n=$.q
k=H.a([$.a2,$.aR,$.bs],l)
H.a([],p)
o=new G.d("Fae",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cr=o
o=H.a(["Plutonium"],p)
n=$.v
k=H.a([$.D,$.ca],l)
H.a([],p)
o=new G.d("Plutonium",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eo=o
o=H.a(["Lithium"],p)
n=$.v
k=H.a([$.D,$.a8],l)
H.a([],p)
o=new G.d("Lithium",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dx=o
o=H.a(["Molten"],p)
n=$.v
k=H.a([$.D,$.as],l)
H.a([],p)
o=new G.d("Molten",k,null,n,o,0)
$.$get$c().h(0,o)
$.DT=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.v
k=H.a([$.aw,$.as],l)
H.a([],p)
o=new G.d("Magma",k,null,n,o,0)
$.$get$c().h(0,o)
$.DD=o
o=H.a(["Rusty"],p)
n=$.G
k=H.a([$.D,$.bV],l)
H.a([],p)
o=new G.d("Rusty",k,null,n,o,0)
$.$get$c().h(0,o)
$.EN=o
o=H.a(["Fonzie"],p)
n=$.q
k=H.a([$.au,$.ao,$.ai],l)
H.a([],p)
o=new G.d("Fonzie",k,null,n,o,0)
$.$get$c().h(0,o)
$.CJ=o
o=H.a(["Romcom"],p)
n=$.q
k=H.a([$.aA,$.aU],l)
H.a([],p)
o=new G.d("Romcom",k,null,n,o,0)
$.$get$c().h(0,o)
$.EJ=o
o=H.a(["Alluring"],p)
n=$.q
k=H.a([$.ay,$.aR],l)
H.a([],p)
o=new G.d("Alluring",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ba=o
o=H.a(["Masquerade"],p)
n=$.q
k=H.a([$.ay,$.am],l)
H.a([],p)
o=new G.d("Masquerade",k,null,n,o,0)
$.$get$c().h(0,o)
$.DH=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.q
k=H.a([$.aw,$.bo],l)
H.a([],p)
o=new G.d("Stoneskin",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fw=o
o=H.a(["Psionic"],p)
n=$.q
k=H.a([$.a2,$.Y],l)
H.a([],p)
o=new G.d("Psionic",k,null,n,o,0)
$.$get$c().h(0,o)
$.EB=o
o=H.a(["Dwarven"],p)
n=$.q
k=H.a([$.a2,$.aw],l)
H.a([],p)
o=new G.d("Dwarven",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ci=o
o=H.a(["Elemental","Animated"],p)
n=$.v
k=H.a([$.a2,$.av],l)
H.a([],p)
o=new G.d("Elemental",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cn=o
o=H.a(["Gourmet"],p)
n=$.I
k=H.a([$.ar,$.ai],l)
H.a([],p)
o=new G.d("Gourmet",k,null,n,o,0)
$.$get$c().h(0,o)
$.CW=o
o=H.a(["Stained Glass"],p)
n=$.v
k=H.a([$.aQ,$.ay,$.bm],l)
H.a([],p)
o=new G.d("Stained Glass",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ft=o
o=H.a(["Gauze"],p)
n=$.q
k=H.a([$.aI,$.Q],l)
H.a([],p)
o=new G.d("Gauze",k,null,n,o,0)
$.$get$c().h(0,o)
$.CP=o
o=H.a(["Locked"],p)
n=$.G
k=H.a([$.aW,$.bw],l)
H.a([],p)
o=new G.d("Locked",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dz=o
o=H.a(["Etched"],p)
n=$.q
k=H.a([$.aw,$.K],l)
H.a([],p)
o=new G.d("Etched",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cq=o
o=H.a(["Papyrus"],p)
n=$.v
k=H.a([$.K,$.aS],l)
H.a([],p)
o=new G.d("Papyrus",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ec=o
o=H.a(["film"],p)
n=$.q
k=H.a([$.K,$.aE],l)
H.a([],p)
o=new G.d("Film",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cz=o
o=H.a(["Saucey"],p)
n=$.v
k=H.a([$.bs,$.bw,$.ar],l)
H.a([],p)
o=new G.d("Saucey",k,null,n,o,0)
$.$get$c().h(0,o)
$.jB=o
o=H.a(["Lottery"],p)
n=$.q
k=H.a([$.K,$.bZ],l)
H.a([],p)
o=new G.d("Lottery",k,null,n,o,0)
$.$get$c().h(0,o)
$.DB=o
o=H.a(["Blindfolded"],p)
n=$.q
k=H.a([$.am,$.Q],l)
H.a([],p)
o=new G.d("Blindfolded",k,null,n,o,0)
$.$get$c().h(0,o)
$.wQ=o
o=H.a(["Possessed"],p)
n=$.G
k=H.a([$.bY,$.bo],l)
H.a([],p)
o=new G.d("Possessed",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ex=o
o=H.a(["Infernal"],p)
n=$.I
k=H.a([$.bY,$.as],l)
H.a([],p)
o=new G.d("Infernal",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dg=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.q
k=H.a([$.X,$.bp,$.ut,$.av],l)
H.a([],p)
o=new G.d("Geppetto",k,null,n,o,0)
$.$get$c().h(0,o)
$.CQ=o
o=H.a(["Abominable"],p)
n=$.I
k=H.a([$.bo,$.bs],l)
H.a([],p)
o=new G.d("Abominable",k,null,n,o,0)
$.$get$c().h(0,o)
$.B8=o
o=H.a(["Ashen"],p)
n=$.q
k=H.a([$.aA,$.aD],l)
H.a([],p)
o=new G.d("Ashen",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bf=o
o=H.a(["Pale"],p)
n=$.q
k=H.a([$.aA,$.bn],l)
H.a([],p)
o=new G.d("Pale",k,null,n,o,0)
$.$get$c().h(0,o)
$.E9=o
o=H.a(["Pitch"],p)
n=$.q
k=H.a([$.aA,$.bw],l)
H.a([],p)
o=new G.d("Pitch",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ej=o
o=H.a(["Lit"],p)
n=$.I
k=H.a([$.ao,$.as],l)
H.a([],p)
o=new G.d("Lit",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dw=o
o=H.a(["Hypnotizing"],p)
n=$.q
k=H.a([$.a2,$.bn],l)
H.a([],p)
o=new G.d("Hypnotizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.D7=o
o=H.a(["Tranquilizing"],p)
n=$.q
k=H.a([$.bn,$.aW],l)
H.a([],p)
o=new G.d("Tranquilizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.FN=o
o=H.a([],p)
n=$.q
k=H.a([$.bn,$.bw],l)
H.a([],p)
o=new G.d("",k,null,n,o,0)
$.$get$c().h(0,o)
$.BC=o
o=H.a(["Ghost Rider's"],p)
n=$.aa
k=H.a([$.ew,$.as,$.bY],l)
H.a([],p)
o=new G.d("Ghost Rider",k,null,n,o,0)
$.$get$c().h(0,o)
$.CR=o
o=H.a(["Logical"],p)
n=$.I
k=H.a([$.Y,$.br],l)
H.a([],p)
o=new G.d("Logical",k,null,n,o,0)
$.$get$c().h(0,o)
$.DA=o
o=H.a(["Duelist's"],p)
n=$.aa
k=H.a([$.aK,$.ai],l)
H.a([],p)
o=new G.d("Duelist's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cf=o
o=H.a(["Silenced"],p)
n=$.G
k=H.a([$.aK,$.am],l)
H.a([],p)
o=new G.d("Silenced",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fc=o
o=H.a(["Deudly"],p)
n=$.G
k=H.a([$.aK,$.bV],l)
H.a([],p)
o=new G.d("Deudly",k,null,n,o,0)
$.$get$c().h(0,o)
$.C3=o
o=H.a(["Screaming"],p)
n=$.G
k=H.a([$.aV,$.aX],l)
H.a([],p)
o=new G.d("Screaming",k,null,n,o,0)
$.$get$c().h(0,o)
$.EZ=o
o=H.a(["Cacophonous"],p)
n=$.I
k=H.a([$.c_,$.a9],l)
H.a([],p)
o=new G.d("Cacophonous",k,null,n,o,0)
$.$get$c().h(0,o)
$.BA=o
o=H.a(["Sublime"],p)
n=$.I
k=H.a([$.c_,$.ay],l)
H.a([],p)
o=new G.d("Sublime",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fy=o
o=H.a(["Masterwork"],p)
n=$.v
k=H.a([$.bp,$.bm],l)
H.a([],p)
o=new G.d("Masterwork",k,null,n,o,0)
$.$get$c().h(0,o)
$.DJ=o
o=H.a(["BroodFester"],p)
n=$.q
k=H.a([$.av,$.aX,$.bs,$.a2],l)
H.a([],p)
o=new G.d("BroodFester",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bu=o
o=H.a(["[REDACTED]"],p)
n=$.q
k=H.a([$.bs,$.am],l)
H.a([],p)
o=new G.d("[REDACTED]",k,null,n,o,0)
$.$get$c().h(0,o)
$.EH=o
o=H.a(["Pop Rocks"],p)
n=$.q
k=H.a([$.ar,$.bt],l)
H.a([],p)
o=new G.d("Pop Rocks",k,null,n,o,0)
$.$get$c().h(0,o)
$.Et=o
o=H.a(["Disguised"],p)
n=$.G
k=H.a([$.am,$.aP],l)
H.a([],p)
o=new G.d("Disguised",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ca=o
o=H.a(["Haunted"],p)
n=$.G
k=H.a([$.aF,$.bY],l)
H.a([],p)
o=new G.d("Haunted",k,null,n,o,0)
$.$get$c().h(0,o)
$.D1=o
o=H.a(["Cognitohazardous"],p)
n=$.G
k=H.a([$.bs,$.Y],l)
H.a([],p)
o=new G.d("Cognitohazardous",k,null,n,o,0)
$.$get$c().h(0,o)
$.BS=o
o=H.a(["Staticy"],p)
n=$.G
k=H.a([$.aF,$.a8],l)
H.a([],p)
o=new G.d("Staticy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fu=o
o=H.a(["Jadite"],p)
n=$.q
k=H.a([$.aQ,$.ca],l)
H.a([],p)
o=new G.d("Jadite",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dk=o
o=H.a(["Tickling"],p)
n=$.q
k=H.a([$.aU,$.aF],l)
H.a([],p)
o=new G.d("Tickling",k,null,n,o,0)
$.$get$c().h(0,o)
$.FJ=o
o=H.a(["Composite"],p)
n=$.q
k=H.a([$.D,$.bU],l)
H.a([],p)
o=new G.d("Composite",k,null,n,o,0)
$.$get$c().h(0,o)
$.BU=o
o=H.a(["High-Powered"],p)
n=$.G
k=H.a([$.bt,$.aK],l)
H.a([],p)
o=new G.d("High-Powered",k,null,n,o,0)
$.$get$c().h(0,o)
$.D2=o
o=H.a(["Concussive"],p)
n=$.q
k=H.a([$.bt,$.ah],l)
H.a([],p)
o=new G.d("Concussive",k,null,n,o,0)
$.$get$c().h(0,o)
$.BV=o
o=H.a(["Down"],p)
n=$.v
k=H.a([$.b0,$.bx],l)
H.a([],p)
o=new G.d("Down",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cc=o
o=H.a(["Prickly"],p)
n=$.v
k=H.a([$.aF,$.aM],l)
H.a([],p)
o=new G.d("Prickly",k,null,n,o,0)
$.$get$c().h(0,o)
$.EA=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.q
k=H.a([$.aF,$.am,$.a8],l)
H.a([],p)
o=new G.d("Deep-Web",k,null,n,o,0)
$.$get$c().h(0,o)
$.C6=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.v
k=H.a([$.aM,$.au],l)
H.a([],p)
o=new G.d("Jagged",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dl=o
o=H.a(["Nanofiber"],p)
n=$.v
k=H.a([$.Q,$.Y],l)
H.a([],p)
o=new G.d("Nanofiber",k,null,n,o,0)
$.$get$c().h(0,o)
$.E_=o
o=H.a(["Clanging"],p)
n=$.q
k=H.a([$.D,$.aV],l)
H.a([],p)
o=new G.d("Clanging",k,null,n,o,0)
$.$get$c().h(0,o)
$.BO=o
o=H.a(["Silver"],p)
n=$.v
k=H.a([$.D,$.ai],l)
H.a([],p)
o=new G.d("Silver",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fe=o
o=H.a(["Withered"],p)
n=$.G
k=H.a([$.aD,$.aS],l)
H.a([],p)
o=new G.d("Withered",k,null,n,o,0)
$.$get$c().h(0,o)
$.FZ=o
o=H.a(["Shattered"],p)
n=$.G
k=H.a([$.aQ,$.bV],l)
H.a([],p)
o=new G.d("Shattered",k,null,n,o,0)
$.$get$c().h(0,o)
$.F4=o
o=H.a(["Miner's"],p)
n=$.aa
k=H.a([$.aw,$.D],l)
H.a([],p)
o=new G.d("Miner's",k,null,n,o,0)
$.$get$c().h(0,o)
$.DR=o
o=H.a(["Singing"],p)
n=$.q
k=H.a([$.a9,$.av],l)
H.a([],p)
o=new G.d("Singing",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fb=o
o=H.a(["Mitochondrial"],p)
n=$.q
k=H.a([$.bo,$.a8],l)
H.a([],p)
o=new G.d("Mitochondrial",k,null,n,o,0)
$.$get$c().h(0,o)
$.DS=o
o=H.a(["Blackout","EMP"],p)
n=$.q
k=H.a([$.am,$.a8],l)
H.a([],p)
o=new G.d("Blackout",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bn=o
o=H.a(["Asbestos"],p)
n=$.v
k=H.a([$.aw,$.bR],l)
H.a([],p)
o=new G.d("Asbestos",k,null,n,o,0)
$.$get$c().h(0,o)
$.B9=o
o=H.a(["Mercurial"],p)
n=$.v
k=H.a([$.bR,$.D],l)
H.a([],p)
o=new G.d("Mercurial",k,null,n,o,0)
$.$get$c().h(0,o)
$.DK=o
o=H.a(["Bulletproof"],p)
n=$.v
k=H.a([$.Q,$.ah],l)
H.a([],p)
o=new G.d("Bulletproof",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bx=o
o=H.a(["Cotton"],p)
n=$.v
k=H.a([$.aS,$.Q],l)
H.a([],p)
o=new G.d("Cotton",k,null,n,o,0)
$.$get$c().h(0,o)
$.BW=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.q
k=H.a([$.bw,$.aR],l)
H.a([],p)
o=new G.d("Blinding",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bo=o
o=H.a(["Brilliant"],p)
n=$.I
k=H.a([$.aR,$.Y],l)
H.a([],p)
o=new G.d("Brilliant",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bt=o
o=H.a(["Offensive"],p)
n=$.I
k=H.a([$.bw,$.Y],l)
H.a([],p)
o=new G.d("Offensive",k,null,n,o,0)
$.$get$c().h(0,o)
$.E5=o
o=H.a(["Poached"],p)
n=$.G
k=H.a([$.bo,$.bm],l)
H.a([],p)
o=new G.d("Poached",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ep=o
o=H.a(["Tapestry"],p)
n=$.v
k=H.a([$.Q,$.ay],l)
H.a([],p)
o=new G.d("Tapestry",k,null,n,o,0)
$.$get$c().h(0,o)
$.FB=o
o=H.a(["Itchy"],p)
n=$.I
k=H.a([$.Q,$.aF],l)
H.a([],p)
o=new G.d("Itchy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Di=o
o=H.a(["Wishbone"],p)
n=$.v
k=H.a([$.bZ,$.b_],l)
H.a([],p)
o=new G.d("Wishbone",k,null,n,o,0)
$.$get$c().h(0,o)
$.FY=o
o=H.a(["Rattling"],p)
n=$.G
k=H.a([$.aV,$.b_],l)
H.a([],p)
o=new G.d("Rattling",k,null,n,o,0)
$.$get$c().h(0,o)
$.EF=o
o=H.a(["Cranial"],p)
n=$.v
k=H.a([$.Y,$.b_],l)
H.a([],p)
o=new G.d("Cranial",k,null,n,o,0)
$.$get$c().h(0,o)
$.C_=o
o=H.a(["Humerus"],p)
n=$.v
k=H.a([$.aU,$.b_],l)
H.a([],p)
o=new G.d("Humerus",k,null,n,o,0)
$.$get$c().h(0,o)
$.D5=o
o=H.a(["Massage"],p)
n=$.q
k=H.a([$.aI,$.b0],l)
H.a([],p)
o=new G.d("Massage",k,null,n,o,0)
$.$get$c().h(0,o)
$.DI=o
o=H.a(["Pestersome","Irksome"],p)
n=$.I
k=H.a([$.aV,$.bw],l)
H.a([],p)
o=new G.d("Pestersome",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ee=o
o=H.a(["Shockwave"],p)
n=$.q
k=H.a([$.aV,$.bt],l)
H.a([],p)
o=new G.d("Shockwave",k,null,n,o,0)
$.$get$c().h(0,o)
$.F7=o
o=H.a(["Antivenom"],p)
n=$.q
k=H.a([$.bR,$.aI],l)
H.a([],p)
o=new G.d("Antivenom",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bc=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.v
k=H.a([$.as,$.a2],l)
H.a([],p)
o=new G.d("Will O Wisp",k,null,n,o,0)
$.$get$c().h(0,o)
$.FV=o
o=H.a(["Fiberglass"],p)
n=$.v
k=H.a([$.Q,$.aQ],l)
H.a([],p)
o=new G.d("Fiberglass",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cx=o
o=H.a(["Skull"],p)
n=$.v
k=H.a([$.b_,$.aX],l)
H.a([],p)
o=new G.d("Skull",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fi=o
o=H.a(["Enchanted"],p)
n=$.G
k=H.a([$.a2,$.bZ],l)
H.a([],p)
o=new G.d("Enchanted",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cp=o
o=H.a(["Berserker's"],p)
n=$.aa
k=H.a([$.a2,$.bw],l)
H.a([],p)
o=new G.d("Berserker's",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bm=o
o=H.a(["Clerical"],p)
n=$.aa
k=H.a([$.a2,$.aI],l)
H.a([],p)
o=new G.d("Clerical",k,null,n,o,0)
$.$get$c().h(0,o)
$.BP=o
o=H.a(["Cauterizing"],p)
n=$.q
k=H.a([$.aI,$.as],l)
H.a([],p)
o=new G.d("Cauterizing",k,null,n,o,0)
$.$get$c().h(0,o)
$.BG=o
o=H.a(["X-Ray"],p)
n=$.q
k=H.a([$.ca,$.aR],l)
H.a([],p)
o=new G.d("X-Ray",k,null,n,o,0)
$.$get$c().h(0,o)
$.G1=o
o=H.a(["Clever"],p)
n=$.I
k=H.a([$.Y,$.bZ],l)
H.a([],p)
o=new G.d("Clever",k,null,n,o,0)
$.$get$c().h(0,o)
$.BQ=o
o=H.a(["Fireplace"],p)
n=$.q
k=H.a([$.b0,$.as],l)
H.a([],p)
o=new G.d("Fireplace",k,null,n,o,0)
$.$get$c().h(0,o)
$.CA=o
o=H.a(["Crackling"],p)
n=$.G
k=H.a([$.aV,$.as],l)
H.a([],p)
o=new G.d("Crackling",k,null,n,o,0)
$.$get$c().h(0,o)
$.BZ=o
o=H.a(["Thumping"],p)
n=$.G
k=H.a([$.aV,$.cf],l)
H.a([],p)
o=new G.d("Thumping",k,null,n,o,0)
$.$get$c().h(0,o)
$.FH=o
o=H.a(["Shrieking","Banshee"],p)
n=$.G
k=H.a([$.bY,$.aV],l)
H.a([],p)
o=new G.d("Banshee",k,null,n,o,0)
$.$get$c().h(0,o)
$.F9=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.aU,$.bs],l)
H.a([],p)
o=new G.d("Surreal2",k,null,n,o,0)
$.$get$c().h(0,o)
$.FA=o
o=H.a(["Aloe","Willowbark"],p)
n=$.q
k=H.a([$.aI,$.aS],l)
H.a([],p)
o=new G.d("Aloe",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bb=o
o=H.a(["Rose"],p)
n=$.q
k=H.a([$.aA,$.aS],l)
H.a([],p)
o=new G.d("Rose",k,null,n,o,0)
$.$get$c().h(0,o)
$.EL=o
o=H.a(["Knock Knock"],p)
n=$.q
k=H.a([$.aU,$.ah],l)
H.a([],p)
o=new G.d("Knock Knock",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dq=o
o=H.a(["Lifesteal"],p)
n=$.q
k=H.a([$.a2,$.bR],l)
H.a([],p)
o=new G.d("Lifesteal",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dt=o
o=H.a(["Tragic"],p)
n=$.q
k=H.a([$.ay,$.aD],l)
H.a([],p)
o=new G.d("Tragic",k,null,n,o,0)
$.$get$c().h(0,o)
$.FM=o
o=H.a(["Slapstick"],p)
n=$.q
k=H.a([$.au,$.aU],l)
H.a([],p)
o=new G.d("Slapstick",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fj=o
o=H.a(["Gross Out"],p)
n=$.q
k=H.a([$.c_,$.aU],l)
H.a([],p)
o=new G.d("Gross Out",k,null,n,o,0)
$.$get$c().h(0,o)
$.x1=o
o=H.a(["Flowery"],p)
n=$.v
k=H.a([$.ay,$.aS],l)
H.a([],p)
o=new G.d("Flowery",k,null,n,o,0)
$.$get$c().h(0,o)
$.CG=o
o=H.a(["Poison Ivy"],p)
n=$.v
k=H.a([$.bR,$.aS],l)
H.a([],p)
o=new G.d("Poison Ivy",k,null,n,o,0)
$.$get$c().h(0,o)
$.Er=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.G
k=H.a([$.a2,$.bx],l)
H.a([],p)
o=new G.d("Winged",k,null,n,o,0)
$.$get$c().h(0,o)
$.FW=o
o=H.a(["Forbidden Fruit"],p)
n=$.q
k=H.a([$.aS,$.ar,$.aD],l)
H.a([],p)
o=new G.d("Forbidden Fruit",k,null,n,o,0)
$.$get$c().h(0,o)
$.CK=o
o=H.a(["Lawful"],p)
n=$.I
k=H.a([$.aW,$.av],l)
H.a([],p)
o=new G.d("Lawful",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dr=o
o=H.a(["Chaotic"],p)
n=$.I
k=H.a([$.bw,$.av],l)
H.a([],p)
o=new G.d("Chaotic",k,null,n,o,0)
$.$get$c().h(0,o)
$.BK=o
o=H.a(["Hypothermic"],p)
n=$.G
k=H.a([$.aD,$.br],l)
H.a([],p)
o=new G.d("Hypothermic",k,null,n,o,0)
$.$get$c().h(0,o)
$.D8=o
o=H.a(["Hyperthermic"],p)
n=$.G
k=H.a([$.aD,$.as],l)
H.a([],p)
o=new G.d("Hyperthermic",k,null,n,o,0)
$.$get$c().h(0,o)
$.D6=o
o=H.a(["Shackled"],p)
n=$.G
k=H.a([$.aW,$.cf],l)
H.a([],p)
o=new G.d("Shackled",k,null,n,o,0)
$.$get$c().h(0,o)
$.F0=o
o=H.a(["Poetic"],p)
n=$.I
k=H.a([$.Y,$.aA],l)
H.a([],p)
o=new G.d("Poetic",k,null,n,o,0)
$.$get$c().h(0,o)
$.Eq=o
o=H.a(["Holographic"],p)
n=$.v
k=H.a([$.aR,$.Y,$.aQ,$.a8],l)
H.a([],p)
o=new G.d("Holographic",k,null,n,o,0)
$.$get$c().h(0,o)
$.D3=o
o=H.a(["Casket","Coffin"],p)
n=$.v
k=H.a([$.X,$.aD],l)
H.a([],p)
o=new G.d("Casket",k,null,n,o,0)
$.$get$c().h(0,o)
$.BF=o
o=H.a(["Spectral"],p)
n=$.v
k=H.a([$.bY,$.a2],l)
H.a([],p)
o=new G.d("Spectral",k,null,n,o,0)
$.$get$c().h(0,o)
$.Fp=o
o=H.a(["Phoenix"],p)
n=$.v
k=H.a([$.as,$.bx],l)
H.a([],p)
o=new G.d("Phoenix",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ef=o
o=H.a(["Tattered"],p)
n=$.G
k=H.a([$.Q,$.aD],l)
H.a([],p)
o=new G.d("Tattered",k,null,n,o,0)
$.$get$c().h(0,o)
$.FE=o
o=H.a(["Woodwind","Reed"],p)
n=$.q
k=H.a([$.a9,$.X],l)
H.a([],p)
o=new G.d("Woodwind",k,null,n,o,0)
$.$get$c().h(0,o)
$.G0=o
o=H.a(["Bone Hurting"],p)
n=$.q
k=H.a([$.aF,$.b_],l)
H.a([],p)
o=new G.d("Bone Hurting",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bq=o
o=H.a(["Bone Healing:"],p)
n=$.q
k=H.a([$.aI,$.b_],l)
H.a([],p)
o=new G.d("Bone Healing:",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bp=o
o=H.a(["Calcium"],p)
n=$.v
k=H.a([$.b_,$.aI,$.ar],l)
H.a([],p)
o=new G.d("Calcium",k,null,n,o,0)
$.$get$c().h(0,o)
$.BB=o
o=H.a(["Fleece"],p)
n=$.v
k=H.a([$.Q,$.as],l)
H.a([],p)
o=new G.d("Fleece",k,null,n,o,0)
$.$get$c().h(0,o)
$.CD=o
o=H.a(["Potted"],p)
n=$.v
k=H.a([$.bU,$.aS],l)
H.a([],p)
o=new G.d("Potted",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ez=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.v
k=H.a([$.D,$.ar],l)
H.a([],p)
o=new G.d("Canned",k,null,n,o,0)
$.$get$c().h(0,o)
$.BD=o
o=H.a(["Diseased"],p)
n=$.G
k=H.a([$.aD,$.bo],l)
H.a([],p)
o=new G.d("Diseased",k,null,n,o,0)
$.$get$c().h(0,o)
$.C7=o
o=H.a(["Porcupine"],p)
n=$.v
k=H.a([$.aM,$.ck],l)
H.a([],p)
o=new G.d("Porcupine",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ev=o
o=H.a(["Fanged"],p)
n=$.G
k=H.a([$.b_,$.aM],l)
H.a([],p)
o=new G.d("Fanged",k,null,n,o,0)
$.$get$c().h(0,o)
$.Ct=o
o=H.a(["Basalt"],p)
n=$.v
k=H.a([$.aw,$.am],l)
H.a([],p)
o=new G.d("Basalt",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bj=o
o=H.a(["Obsidian"],p)
n=$.v
k=H.a([$.aQ,$.am],l)
H.a([],p)
o=new G.d("Obsidian",k,null,n,o,0)
$.$get$c().h(0,o)
$.E4=o
o=H.a(["Fenestrated"],p)
n=$.v
k=H.a([$.aQ,$.X],l)
H.a([],p)
o=new G.d("Fenestrated",k,null,n,o,0)
$.$get$c().h(0,o)
$.Cv=o
o=H.a(["Plexiglass"],p)
n=$.v
k=H.a([$.aQ,$.aE],l)
H.a([],p)
o=new G.d("Plexiglass",k,null,n,o,0)
$.$get$c().h(0,o)
$.En=o
o=H.a(["Ceramic Wrap"],p)
n=$.q
k=H.a([$.bU,$.K],l)
H.a([],p)
o=new G.d("Ceramic Wrap",k,null,n,o,0)
$.$get$c().h(0,o)
$.BJ=o
o=H.a(["Fungal"],p)
n=$.v
k=H.a([$.aS,$.c_],l)
H.a([],p)
o=new G.d("Fungal",k,null,n,o,0)
$.$get$c().h(0,o)
$.CO=o
o=H.a(["Thorny"],p)
n=$.G
k=H.a([$.aS,$.aM],l)
H.a([],p)
o=new G.d("Thorny",k,null,n,o,0)
$.$get$c().h(0,o)
$.FG=o
o=H.a(["Bulbed"],p)
n=$.G
k=H.a([$.aS,$.ah],l)
H.a([],p)
o=new G.d("Bulbed",k,null,n,o,0)
$.$get$c().h(0,o)
$.Bw=o
o=H.a(["Glass Cannon"],p)
n=$.q
k=H.a([$.aQ,$.aK],l)
H.a([],p)
o=new G.d("Glass Cannon",k,null,n,o,0)
$.$get$c().h(0,o)
$.CU=o
o=H.a(["Caoutchouc"],p)
n=$.q
k=H.a([$.aS,$.cg],l)
H.a([],p)
o=new G.d("Caoutchouc",k,null,n,o,0)
$.$get$c().h(0,o)
$.El=o
o=H.a(["Cellulose"],p)
n=$.v
k=H.a([$.aS,$.aE],l)
H.a([],p)
o=new G.d("Cellulose",k,null,n,o,0)
$.$get$c().h(0,o)
$.BI=o
o=H.a(["Horrorcore"],p)
n=$.q
k=H.a([$.a9,$.aX],l)
H.a([],p)
o=new G.d("Horrorcore",k,null,n,o,0)
$.$get$c().h(0,o)
$.D4=o
o=H.a(["Nightcore"],p)
n=$.q
k=H.a([$.bs,$.a9],l)
H.a([],p)
o=new G.d("Nightcore",k,null,n,o,0)
$.$get$c().h(0,o)
$.E1=o
o=H.a(["Crazy Bus"],p)
n=$.q
k=H.a([$.bs,$.a8,$.a9],l)
H.a([],p)
o=new G.d("Crazy Bus",k,null,n,o,0)
$.$get$c().h(0,o)
$.C0=o
o=H.a(["Burdock"],p)
n=$.v
k=H.a([$.aS,$.ck],l)
H.a([],p)
o=new G.d("Burdock",k,null,n,o,0)
$.$get$c().h(0,o)
$.By=o
o=H.a(["Necrotic"],p)
n=$.G
k=H.a([$.b_,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Necrotic",k,null,n,o,0))
o=H.a(["Stem"],p)
n=$.v
k=H.a([$.b_,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stem",k,null,n,o,0))
o=H.a(["DryBone"],p)
n=$.G
k=H.a([$.b_,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("DryBone",k,null,n,o,0))
o=H.a(["XyloBone"],p)
n=$.q
k=H.a([$.b_,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("XyloBone",k,null,n,o,0))
o=H.a(["Ribcage"],p)
n=$.v
k=H.a([$.b_,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ribcage",k,null,n,o,0))
o=H.a(["BoneZone"],p)
n=$.q
k=H.a([$.b_,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("BoneZone",k,null,n,o,0))
o=H.a(["Creaky"],p)
n=$.I
k=H.a([$.X,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Creaky",k,null,n,o,0))
o=H.a(["Maple"],p)
n=$.v
k=H.a([$.X,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Maple",k,null,n,o,0))
o=H.a(["Mahagony"],p)
n=$.v
k=H.a([$.X,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mahagony",k,null,n,o,0))
o=H.a(["Fenced"],p)
n=$.G
k=H.a([$.X,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fenced",k,null,n,o,0))
o=H.a(["Bocote"],p)
n=$.v
k=H.a([$.X,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bocote",k,null,n,o,0))
o=H.a(["Incense"],p)
n=$.v
k=H.a([$.X,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incense",k,null,n,o,0))
o=H.a(["Ebony"],p)
n=$.q
k=H.a([$.X,$.am],l)
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
k=H.a([$.X,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Firewood",k,null,n,o,0))
o=H.a(["BlackForest"],p)
n=$.aa
k=H.a([$.X,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackForest",k,null,n,o,0))
o=H.a(["Tree"],p)
n=$.v
k=H.a([$.X,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tree",k,null,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.v
k=H.a([$.X,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ebonwood",k,null,n,o,0))
o=H.a(["Bark"],p)
n=$.v
k=H.a([$.X,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bark",k,null,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.q
k=H.a([$.X,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Caveman's",k,null,n,o,0))
o=H.a(["3D Printed"],p)
n=$.v
k=H.a([$.aE,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("3D Printed",k,null,n,o,0))
o=H.a(["Thesis"],p)
n=$.q
k=H.a([$.K,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thesis",k,null,n,o,0))
o=H.a(["Graphene"],p)
n=$.v
k=H.a([$.K,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Graphene",k,null,n,o,0))
o=H.a(["Prophecy"],p)
n=$.q
k=H.a([$.K,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prophecy",k,null,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.q
k=H.a([$.Q,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bedsheet",k,null,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.v
k=H.a([$.aw,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gemstone",k,null,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.q
k=H.a([$.aw,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pet Rock",k,null,n,o,0))
o=H.a(["Sand"],p)
n=$.v
k=H.a([$.aw,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sand",k,null,n,o,0))
o=H.a(["Geode"],p)
n=$.v
k=H.a([$.aw,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.d("Geode",k,null,n,o,0))
o=H.a(["Silicon"],p)
n=$.v
k=H.a([$.aw,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silicon",k,null,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.v
k=H.a([$.aw,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryolite",k,null,n,o,0))
o=H.a(["Meteor"],p)
n=$.v
k=H.a([$.aw,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.d("Meteor",k,null,n,o,0))
o=H.a(["Carbon"],p)
n=$.v
k=H.a([$.aw,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carbon",k,null,n,o,0))
o=H.a(["Mossy"],p)
n=$.G
k=H.a([$.aw,$.ck],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mossy",k,null,n,o,0))
o=H.a(["Lensed"],p)
n=$.G
k=H.a([$.Y,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lensed",k,null,n,o,0))
o=H.a(["Hide"],p)
n=$.G
k=H.a([$.Q,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hide",k,null,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.q
k=H.a([$.Q,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.d("FeatherBoa",k,null,n,o,0))
o=H.a(["Tacky"],p)
n=$.I
k=H.a([$.Q,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tacky",k,null,n,o,0))
o=H.a(["Whip"],p)
n=$.q
k=H.a([$.Q,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Whip",k,null,n,o,0))
o=H.a(["Costumed"],p)
n=$.q
k=H.a([$.Q,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Costumed",k,null,n,o,0))
o=H.a(["Punk"],p)
n=$.I
k=H.a([$.Q,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Punk",k,null,n,o,0))
o=H.a(["Weighted"],p)
n=$.G
k=H.a([$.Q,$.cf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Weighted",k,null,n,o,0))
o=H.a(["Favorite"],p)
n=$.I
k=H.a([$.Q,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Favorite",k,null,n,o,0))
o=H.a(["Novelty"],p)
n=$.I
k=H.a([$.Q,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Novelty",k,null,n,o,0))
o=H.a(["Security"],p)
n=$.v
k=H.a([$.Q,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Security",k,null,n,o,0))
o=H.a(["IcePack"],p)
n=$.v
k=H.a([$.Q,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("IcePack",k,null,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.q
k=H.a([$.Q,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("MotionCapture",k,null,n,o,0))
o=H.a(["Silica"],p)
n=$.v
k=H.a([$.Q,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silica",k,null,n,o,0))
o=H.a(["Harp"],p)
n=$.v
k=H.a([$.Q,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Harp",k,null,n,o,0))
o=H.a(["Silk"],p)
n=$.v
k=H.a([$.Q,$.bm],l)
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
k=H.a([$.Q,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Satin",k,null,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.v
k=H.a([$.Q,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("MagicCarpet2",k,null,n,o,0))
o=H.a(["Tweed"],p)
n=$.v
k=H.a([$.Q,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tweed",k,null,n,o,0))
o=H.a(["Jean"],p)
n=$.v
k=H.a([$.Q,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Jean",k,null,n,o,0))
o=H.a(["Tesla"],p)
n=$.aa
k=H.a([$.Y,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tesla",k,null,n,o,0))
o=H.a(["Ashwood"],p)
n=$.v
k=H.a([$.a2,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ashwood",k,null,n,o,0))
o=H.a(["Peashooter"],p)
n=$.v
k=H.a([$.aS,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peashooter",k,null,n,o,0))
o=H.a(["Lacquer"],p)
n=$.v
k=H.a([$.aE,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lacquer",k,null,n,o,0))
o=H.a(["Classpecty"],p)
n=$.v
k=H.a([$.U,$.T],l)
H.a([],p)
$.$get$c().h(0,new G.d("Classpecty",k,null,n,o,0))
o=H.a(["Smartass"],p)
n=$.I
k=H.a([$.Y,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smartass",k,null,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.I
k=H.a([$.bp,$.aP,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Miraculous",k,null,n,o,0))
o=H.a(["Pigeon"],p)
n=$.v
k=H.a([$.bs,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pigeon",k,null,n,o,0))
o=H.a(["Grimoire"],p)
n=$.q
k=H.a([$.bs,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Grimoire",k,null,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.aa
k=H.a([$.bs,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Oglogoth's",k,null,n,o,0))
o=H.a(["Echidna's"],p)
n=$.aa
k=H.a([$.a0,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Echidna's",k,null,n,o,0))
o=H.a(["Superior"],p)
n=$.aa
k=H.a([$.Y,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Superior",k,null,n,o,0))
o=H.a(["Lego"],p)
n=$.v
k=H.a([$.a0,$.aE,$.bn,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lego",k,null,n,o,0))
o=H.a(["Yardstick"],p)
n=$.q
k=H.a([$.a0,$.dR,$.X,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Yardstick",k,null,n,o,0))
o=H.a(["Queenly"],p)
n=$.aa
k=H.a([$.am,$.a2,$.bp,$.aF,$.aX],l)
H.a([],p)
o=new G.d("Queenly",k,null,n,o,0)
$.$get$c().h(0,o)
$.EC=o
o=H.a(["Kingly"],p)
n=$.aa
k=H.a([$.aX,$.ah,$.cf,$.a2,$.bp],l)
H.a([],p)
o=new G.d("Kingly",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dp=o
o=H.a(["Jack"],p)
n=$.aa
k=H.a([$.aM,$.au,$.D,$.am],l)
H.a([],p)
o=new G.d("Jack",k,null,n,o,0)
$.$get$c().h(0,o)
$.Dj=o
o=H.a(["Codpiece","Codtier"],p)
n=$.q
k=H.a([$.a0,$.aP,$.X,$.U,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.d("Codpiece",k,null,n,o,0))
o=H.a(["Graceful"],p)
n=$.q
k=H.a([$.a0,$.aC,$.K,$.D,$.Y,$.U],l)
H.a([],p)
$.$get$c().h(0,new G.d("Graceful",k,null,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.q
k=H.a([$.a0,$.aC,$.K,$.Y,$.U,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guide",k,null,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.q
k=H.a([$.a0,$.aD,$.K,$.Y,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Testament",k,null,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.aa
k=H.a([$.a0,$.aR,$.D,$.aM,$.au,$.ex],l)
H.a([],p)
$.$get$c().h(0,new G.d("Excalibur",k,null,n,o,0))
o=H.a(["Influential"],p)
n=$.aa
k=H.a([$.a0,$.K,$.bw,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.d("Influential",k,null,n,o,0))
o=H.a(["Alternative"],p)
n=$.aa
k=H.a([$.a0,$.a2,$.Q,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Alternative",k,null,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.aa
k=H.a([$.a0,$.aF,$.b_,$.D,$.fp,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.d("Valkyrie",k,null,n,o,0))
o=H.a(["Ongoing"],p)
n=$.aa
k=H.a([$.a0,$.aw,$.ai,$.jz,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ongoing",k,null,n,o,0))
o=H.a(["Short"],p)
n=$.G
k=H.a([$.a0,$.Q,$.bm,$.ay,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short",k,null,n,o,0))
o=H.a(["Crown"],p)
n=$.q
k=H.a([$.a0,$.D,$.bm,$.ay,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crown",k,null,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.q
k=H.a([$.a0,$.aE,$.a8,$.am,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gristtorrent",k,null,n,o,0))
o=H.a(["Robe"],p)
n=$.q
k=H.a([$.a0,$.Q,$.Y,$.a2,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.d("Robe",k,null,n,o,0))
o=H.a(["Beret"],p)
n=$.q
k=H.a([$.a0,$.Q,$.Y,$.ay,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beret",k,null,n,o,0))
o=H.a(["Blank"],p)
n=$.G
k=$.a0
j=$.K
i=$.Y
i=H.a([k,j,i,$.aC,i,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Blank",i,null,n,o,0))
o=H.a(["Cueball"],p)
n=$.v
i=H.a([$.a0,$.ay,$.bU,$.ah,$.fn,$.av],l)
H.a([],p)
o=new G.d("Cueball",i,null,n,o,0)
$.$get$c().h(0,o)
$.wV=o
o=H.a(["Meddler's"],p)
n=$.aa
i=H.a([$.a0,$.aC,$.K,$.bw,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Meddler's",i,null,n,o,0))
o=H.a(["Scroll"],p)
n=$.aa
i=H.a([$.a2,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scroll",i,null,n,o,0))
o=H.a(["Tome"],p)
n=$.q
i=H.a([$.K,$.Y,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tome",i,null,n,o,0))
o=H.a(["Lockpick"],p)
n=$.q
i=H.a([$.a0,$.D,$.am,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lockpick",i,null,n,o,0))
o=H.a(["Warped"],p)
n=$.G
i=H.a([$.a0,$.D,$.aQ,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Warped",i,null,n,o,0))
o=H.a(["Stairs"],p)
n=$.q
i=H.a([$.a0,$.aP,$.X,$.ao,$.bn,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stairs",i,null,n,o,0))
o=H.a(["Rocket"],p)
n=$.q
i=H.a([$.a0,$.as,$.D,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rocket",i,null,n,o,0))
o=H.a(["~ATH"],p)
n=$.q
i=H.a([$.a0,$.a8,$.K,$.aC,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("~ATH",i,null,n,o,0))
o=H.a(["Puppeted"],p)
n=$.q
i=H.a([$.a0,$.X,$.av,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Puppeted",i,null,n,o,0))
o=H.a(["Angelic"],p)
n=$.aa
i=H.a([$.a0,$.bp,$.bx,$.aR,$.a9,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Angelic",i,null,n,o,0))
o=H.a(["Vitae"],p)
n=$.v
i=H.a([$.a0,$.aI,$.aQ,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vitae",i,null,n,o,0))
o=H.a(["Fluorite"],p)
n=$.v
i=H.a([$.a0,$.aR,$.bZ,$.aw,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluorite",i,null,n,o,0))
o=H.a(["Janus"],p)
n=$.aa
i=H.a([$.a0,$.aF,$.aw,$.ai,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Janus",i,null,n,o,0))
o=H.a(["Bacchus"],p)
n=$.aa
i=H.a([$.a0,$.ar,$.bw,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bacchus",i,null,n,o,0))
o=H.a(["TurnTable"],p)
n=$.aa
i=H.a([$.a0,$.D,$.a9,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("TurnTable",i,null,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.I
i=H.a([$.a0,$.aQ,$.ca,$.aR,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("???",i,null,n,o,0))
o=H.a(["Demonite"],p)
n=$.v
i=H.a([$.D,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("Demonite",i,null,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.aa
i=H.a([$.D,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stymphalian",i,null,n,o,0))
o=H.a(["Junky"],p)
n=$.v
i=H.a([$.D,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Junky",i,null,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.v
i=H.a([$.D,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cold Iron",i,null,n,o,0))
o=H.a(["Bolted"],p)
n=$.G
i=H.a([$.D,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bolted",i,null,n,o,0))
o=H.a(["Armored"],p)
n=$.G
i=H.a([$.D,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Armored",i,null,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.v
i=H.a([$.D,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heartsteel",i,null,n,o,0))
o=H.a(["Brick"],p)
n=$.v
i=H.a([$.bU,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Brick",i,null,n,o,0))
o=H.a(["Clay"],p)
n=$.v
i=H.a([$.bU,$.cg],l)
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
i=H.a([$.bU,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Terracotta",i,null,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.v
i=H.a([$.bU,$.a8],l)
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
i=H.a([$.bU,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hand-Sculpted",i,null,n,o,0))
o=H.a(["Handicraft"],p)
n=$.I
i=H.a([$.bV,$.K],l)
H.a([],p)
$.$get$c().h(0,new G.d("Handicraft",i,null,n,o,0))
o=H.a(["Torn"],p)
n=$.G
i=H.a([$.bV,$.Q],l)
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
i=H.a([$.bV,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thinly Veiled",i,null,n,o,0))
o=H.a(["Fragile"],p)
n=$.G
i=H.a([$.bV,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fragile",i,null,n,o,0))
o=H.a(["Troll's"],p)
n=$.aa
i=H.a([$.bV,$.bw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Troll's",i,null,n,o,0))
o=H.a(["Sappy"],p)
n=$.v
i=H.a([$.bV,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sappy",i,null,n,o,0))
o=H.a(["Bootleg"],p)
n=$.v
i=H.a([$.bV,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bootleg",i,null,n,o,0))
o=H.a(["Distorted"],p)
n=$.v
i=H.a([$.bV,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Distorted",i,null,n,o,0))
o=H.a(["Ent's"],p)
n=$.aa
i=H.a([$.X,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ent's",i,null,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.v
i=H.a([$.X,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("WeepingWillow",i,null,n,o,0))
o=H.a(["Latex"],p)
n=$.v
i=H.a([$.X,$.cg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Latex",i,null,n,o,0))
o=H.a(["Turf"],p)
n=$.v
i=H.a([$.aE,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turf",i,null,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.q
i=H.a([$.cg,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stress Relieving",i,null,n,o,0))
o=H.a(["R-Rated"],p)
n=$.G
i=H.a([$.cg,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("R-Rated",i,null,n,o,0))
o=H.a(["Racing"],p)
n=$.q
i=H.a([$.cg,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Racing",i,null,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.q
i=H.a([$.K,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cross Stitch",i,null,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.q
i=H.a([$.K,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("LoveLetter",i,null,n,o,0))
o=H.a(["EbonStone"],p)
n=$.v
i=H.a([$.aw,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("EbonStone",i,null,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.v
i=H.a([$.aw,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rock Candy",i,null,n,o,0))
o=H.a(["Smashing"],p)
n=$.I
i=H.a([$.aw,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smashing",i,null,n,o,0))
o=H.a(["Anomalous"],p)
n=$.I
i=H.a([$.bY,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anomalous",i,null,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.v
i=H.a([$.bY,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.d("Onmoraki",i,null,n,o,0))
o=H.a(["Ghastly"],p)
n=$.I
i=H.a([$.bY,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ghastly",i,null,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.v
i=H.a([$.bY,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shade",i,null,n,o,0))
o=H.a(["Choral"],p)
n=$.v
i=H.a([$.bY,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Choral",i,null,n,o,0))
o=H.a(["Eerie"],p)
n=$.v
i=H.a([$.bY,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eerie",i,null,n,o,0))
o=H.a(["Spiritual"],p)
n=$.I
i=H.a([$.bY,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spiritual",i,null,n,o,0))
o=H.a(["Heart"],p)
n=$.v
i=H.a([$.bo,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heart",i,null,n,o,0))
o=H.a(["Primordial"],p)
n=$.v
i=H.a([$.bo,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Primordial",i,null,n,o,0))
o=H.a(["Eyeball"],p)
n=$.v
i=H.a([$.bo,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eyeball",i,null,n,o,0))
o=H.a(["Vulture"],p)
n=$.G
i=H.a([$.bo,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vulture",i,null,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.q
i=H.a([$.bs,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackMagic",i,null,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.v
i=H.a([$.bs,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doppelganger",i,null,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.G
i=H.a([$.bs,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incomprehensible",i,null,n,o,0))
o=H.a(["Destructive"],p)
n=$.q
i=H.a([$.bs,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Destructive",i,null,n,o,0))
o=H.a(["Growling"],p)
n=$.G
i=H.a([$.ck,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Growling",i,null,n,o,0))
o=H.a(["Coconut"],p)
n=$.v
i=H.a([$.ck,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Coconut",i,null,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.aa
i=H.a([$.ck,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beastmaster's",i,null,n,o,0))
o=H.a(["Fluffy"],p)
n=$.v
i=H.a([$.ck,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluffy",i,null,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.v
i=H.a([$.aS,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fern",i,null,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.G
i=H.a([$.aS,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Four Leafed",i,null,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.v
i=H.a([$.aS,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shrubbery",i,null,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.v
i=H.a([$.aS,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ecballium",i,null,n,o,0))
o=H.a(["Truffle"],p)
n=$.v
i=H.a([$.aS,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Truffle",i,null,n,o,0))
o=H.a(["Vine"],p)
n=$.v
i=H.a([$.aS,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vine",i,null,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.v
i=H.a([$.aS,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("CorpseBlossom",i,null,n,o,0))
o=H.a(["Fruity"],p)
n=$.G
i=H.a([$.aS,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fruity",i,null,n,o,0))
o=H.a(["Squawking"],p)
n=$.G
i=H.a([$.bx,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Squawking",i,null,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.v
i=H.a([$.bx,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Poultry",i,null,n,o,0))
o=H.a(["Dove"],p)
n=$.v
i=H.a([$.bx,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dove",i,null,n,o,0))
o=H.a(["Peacock"],p)
n=$.v
i=H.a([$.bx,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peacock",i,null,n,o,0))
o=H.a(["Stork"],p)
n=$.v
i=H.a([$.bx,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stork",i,null,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.v
i=H.a([$.bx,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Zhenniao",i,null,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.v
i=H.a([$.bx,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dodo",i,null,n,o,0))
o=H.a(["Raven"],p)
n=$.uz
i=H.a([$.bx,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Raven",i,null,n,o,0))
o=H.a(["Frilled"],p)
n=$.G
i=H.a([$.bx,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Frilled",i,null,n,o,0))
o=H.a(["Horrifying"],p)
n=$.I
i=H.a([$.c_,$.aX],l)
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
n=$.I
i=H.a([$.aX,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Menacing",i,null,n,o,0))
o=H.a(["Syringe"],p)
n=$.q
i=H.a([$.aI,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Syringe",i,null,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.I
i=H.a([$.ar,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bitter",i,null,n,o,0))
o=H.a(["Pineapple"],p)
n=$.v
i=H.a([$.ar,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pineapple",i,null,n,o,0))
o=H.a(["Crunchy"],p)
n=$.I
i=H.a([$.ar,$.ah],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crunchy",i,null,n,o,0))
o=H.a(["Bass"],p)
n=$.q
i=H.a([$.cf,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bass",i,null,n,o,0))
o=H.a(["Rigid"],p)
n=$.q
i=H.a([$.cf,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rigid",i,null,n,o,0))
o=H.a(["Prop"],p)
n=$.q
i=H.a([$.aK,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prop",i,null,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.q
i=H.a([$.aK,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Magic Missle",i,null,n,o,0))
o=H.a(["Gangster's"],p)
n=$.aa
i=H.a([$.aK,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gangster's",i,null,n,o,0))
o=H.a(["Cupid's"],p)
n=$.aa
i=H.a([$.aK,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cupid's",i,null,n,o,0))
o=H.a(["Turreted"],p)
n=$.G
i=H.a([$.aK,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turreted",i,null,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.G
i=H.a([$.aK,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("AutoTarget",i,null,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.aa
i=H.a([$.aK,$.bw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guerilla's",i,null,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.q
i=H.a([$.aK,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rail",i,null,n,o,0))
o=H.a(["Tau"],p)
n=$.q
i=H.a([$.aK,$.ca],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tau",i,null,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.q
i=H.a([$.aK,$.aR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pew",i,null,n,o,0))
o=H.a(["Thermal"],p)
n=$.G
i=H.a([$.aK,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thermal",i,null,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.v
i=H.a([$.aR,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Plasma",i,null,n,o,0))
o=H.a(["Shredding"],p)
n=$.v
i=H.a([$.a9,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shredding",i,null,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.v
i=H.a([$.bZ,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,null,n,o,0))
o=H.a(["Charmed"],p)
n=$.v
i=H.a([$.bZ,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charmed",i,null,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.aa
i=H.a([$.bZ,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,null,n,o,0))
o=H.a(["Prospitian"],p)
n=$.aa
i=H.a([$.aR,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prospitian",i,null,n,o,0))
o=H.a(["Vigilant"],p)
n=$.G
i=H.a([$.aR,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vigilant",i,null,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.I
i=H.a([$.aR,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stand-Up",i,null,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.G
i=H.a([$.aR,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bedazzled",i,null,n,o,0))
o=H.a(["Thief's"],p)
n=$.aa
i=H.a([$.am,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thief's",i,null,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.q
i=H.a([$.am,$.a2,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.d("InvisibilityCloak",i,null,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.G
i=H.a([$.am,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Comedy Night",i,null,n,o,0))
o=H.a(["Stealthy"],p)
n=$.I
i=H.a([$.am,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stealthy",i,null,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.q
i=H.a([$.am,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Subterfuge",i,null,n,o,0))
o=H.a(["Dersite"],p)
n=$.aa
i=H.a([$.am,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dersite",i,null,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.aa
i=H.a([$.bn,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ambient",i,null,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.q
i=H.a([$.bn,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anesthesia",i,null,n,o,0))
o=H.a(["Supportive"],p)
n=$.q
i=H.a([$.bn,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Supportive",i,null,n,o,0))
o=H.a(["Nuka"],p)
n=$.q
i=H.a([$.aI,$.ca],l)
H.a([],p)
$.$get$c().h(0,new G.d("Nuka",i,null,n,o,0))
o=H.a(["Contaminated"],p)
n=$.G
i=H.a([$.bR,$.ca],l)
H.a([],p)
$.$get$c().h(0,new G.d("Contaminated",i,null,n,o,0))
o=H.a(["Unstable"],p)
n=$.G
i=H.a([$.aD,$.ca],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unstable",i,null,n,o,0))
o=H.a(["Timebomb"],p)
n=$.q
i=H.a([$.aD,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.d("Timebomb",i,null,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.G
i=H.a([$.a8,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short Circuiting",i,null,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.q
i=H.a([$.aD,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relic",i,null,n,o,0))
o=H.a(["Existentialist"],p)
n=$.G
i=H.a([$.aD,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Existentialist",i,null,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.I
i=H.a([$.aD,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("Apocalyptic",i,null,n,o,0))
o=H.a(["Dud"],p)
n=$.q
i=H.a([$.bt,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dud",i,null,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.q
i=H.a([$.bt,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guided",i,null,n,o,0))
o=H.a(["Bobomb"],p)
n=$.q
i=H.a([$.bt,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bobomb",i,null,n,o,0))
o=H.a(["Dread"],p)
n=$.q
i=H.a([$.aD,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dread",i,null,n,o,0))
o=H.a(["Knockback"],p)
n=$.q
i=H.a([$.bt,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Knockback",i,null,n,o,0))
o=H.a(["Paralysis"],p)
n=$.q
i=H.a([$.a8,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Paralysis",i,null,n,o,0))
o=H.a(["Carnage"],p)
n=$.q
i=H.a([$.bt,$.bw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carnage",i,null,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.q
i=H.a([$.bt,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Blast Beat",i,null,n,o,0))
o=H.a(["Corrosive"],p)
n=$.G
i=H.a([$.bt,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Corrosive",i,null,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.q
i=H.a([$.bt,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ice Bomb",i,null,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.q
i=H.a([$.br,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryogenic",i,null,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.q
i=H.a([$.a2,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spellcasting",i,null,n,o,0))
o=H.a(["Tingling"],p)
n=$.G
i=H.a([$.a8,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tingling",i,null,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.q
i=H.a([$.bw,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rage Plague",i,null,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.q
i=H.a([$.bR,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Nerve Gas",i,null,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.q
i=H.a([$.bR,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carbon Monoxide",i,null,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.q
i=H.a([$.bR,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Neurotoxin",i,null,n,o,0))
o=H.a(["Virulent"],p)
n=$.G
i=H.a([$.bR,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Virulent",i,null,n,o,0))
o=H.a(["Toxic"],p)
n=$.G
i=H.a([$.bR,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Toxic",i,null,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.q
i=H.a([$.bR,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Laughing Gas",i,null,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.G
i=H.a([$.a9,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Amplified",i,null,n,o,0))
o=H.a(["Rap"],p)
n=$.q
i=H.a([$.a9,$.ao],l)
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
i=H.a([$.a9,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.d("Melodic",i,null,n,o,0))
o=H.a(["Smooth"],p)
n=$.q
i=H.a([$.a9,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smooth",i,null,n,o,0))
o=H.a(["Thrash"],p)
n=$.q
i=H.a([$.a9,$.bw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thrash",i,null,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.q
i=H.a([$.a9,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chant",i,null,n,o,0))
o=H.a(["Chewy"],p)
n=$.q
i=H.a([$.bw,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chewy",i,null,n,o,0))
o=H.a(["Phony"],p)
n=$.q
i=H.a([$.bw,$.aP],l)
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
i=H.a([$.aW,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sealed",i,null,n,o,0))
o=H.a(["Attractive"],p)
n=$.I
i=H.a([$.ay,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Attractive",i,null,n,o,0))
o=H.a(["Relaxed"],p)
n=$.G
i=H.a([$.b0,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relaxed",i,null,n,o,0))
o=H.a(["Loveseat"],p)
n=$.q
i=H.a([$.b0,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Loveseat",i,null,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.I
i=H.a([$.ar,$.b0],l)
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
i=H.a([$.av,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Disturbed",i,null,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
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
n=$.aa
i=H.a([$.aA,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gentlemanly",i,null,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Y,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sapient",i,null,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.G
i=H.a([$.aA,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sentimental",i,null,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.G
i=H.a([$.aA,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki",i,null,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.G
i=H.a([$.aA,$.aV,$.aC,$.jA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki Literature Club",i,null,n,o,0))
o=H.a(["Banana"],p)
n=$.G
i=H.a([$.ar,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.d("Banana",i,null,n,o,0))
o=H.a(["Mana"],p)
n=$.G
i=H.a([$.ar,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mana",i,null,n,o,0))
o=H.a(["Homemade"],p)
n=$.G
i=H.a([$.ar,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("Homemade",i,null,n,o,0))
o=H.a(["Steampunk"],p)
n=$.G
i=H.a([$.a2,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Steampunk",i,null,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.G
i=H.a([$.ar,$.aU,$.a8,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.d("I Can't Stop Laughing",i,null,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.v
i=H.a([$.D,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Soulsteel",i,null,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.q
i=H.a([$.b_,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ritual",i,null,n,o,0))
o=H.a(["Inflamable"],p)
n=$.G
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
i=H.a([$.aE,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Polluting",i,null,n,o,0))
o=H.a(["Insulated"],p)
n=$.G
i=H.a([$.cg,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Insulated",i,null,n,o,0))
o=H.a(["Ash"],p)
n=$.v
i=H.a([$.K,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ash",i,null,n,o,0))
o=H.a(["Delicate"],p)
n=$.G
i=H.a([$.K,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Delicate",i,null,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.aa
i=H.a([$.aQ,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Glass Blower's",i,null,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.G
i=H.a([$.bo,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sunburnt",i,null,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.G
i=H.a([$.as,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pyrebitten",i,null,n,o,0))
o=H.a(["Mink"],p)
n=$.v
i=H.a([$.aA,$.ck],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mink",i,null,n,o,0))
o=H.a(["Wildfire"],p)
n=$.aa
i=H.a([$.aS,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Wildfire",i,null,n,o,0))
o=H.a(["Scarred"],p)
n=$.G
i=H.a([$.aI,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scarred",i,null,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.I
i=H.a([$.bp,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hyper Realistic",i,null,n,o,0))
o=H.a(["Hestia's"],p)
n=$.aa
i=H.a([$.bZ,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hestia's",i,null,n,o,0))
o=H.a(["Smoking"],p)
n=$.G
i=H.a([$.am,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smoking",i,null,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.G
i=H.a([$.as,$.a8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Radiator",i,null,n,o,0))
o=H.a(["Fuming"],p)
n=$.G
i=H.a([$.as,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fuming",i,null,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.G
i=H.a([$.as,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.d("Firework",i,null,n,o,0))
o=H.a(["Panicky"],p)
n=$.G
i=H.a([$.aD,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Panicky",i,null,n,o,0))
o=H.a(["Ornamental"],p)
n=$.G
i=H.a([$.bm,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ornamental",i,null,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.G
i=H.a([$.bm,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dear",i,null,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.G
i=H.a([$.bm,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Swaggy",i,null,n,o,0))
o=H.a(["Uncanny"],p)
n=$.G
i=H.a([$.aF,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("Uncanny",i,null,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.G
i=H.a([$.aV,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Talkative",i,null,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.G
i=H.a([$.aA,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Waifu",i,null,n,o,0))
o=H.a(["Charming"],p)
n=$.G
i=H.a([$.a2,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charming",i,null,n,o,0))
o=H.a(["God Tier"],p)
n=$.G
i=H.a([$.U,$.T,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("God Tier",i,null,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.G
i=H.a([$.U,$.T,$.bp,$.aP,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cod Tier",i,null,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.G
i=H.a([$.U,$.T,$.bp,$.ck],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dog Tier",i,null,n,o,0))
o=H.a(["JRPG"],p)
n=$.G
i=H.a([$.ex,$.uq,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("JRPG",i,null,n,o,0))
o=H.a(["Cracked"],p)
n=$.G
i=H.a([$.aw,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cracked",i,null,n,o,0))
o=H.a(["Ruffled"],p)
n=$.G
i=H.a([$.bx,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ruffled",i,null,n,o,0))
o=H.a(["Mandrake"],p)
n=$.G
i=H.a([$.aS,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mandrake",i,null,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.G
i=H.a([$.a2,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beanstalk",i,null,n,o,0))
o=H.a(["Unnerving"],p)
n=$.G
i=H.a([$.aX,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unnerving",i,null,n,o,0))
o=H.a(["Chipped"],p)
n=$.G
l=H.a([$.bU,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chipped",l,null,n,o,0))
if($.xL==null){o=$.mO
n=$.aM
l=$.au
k=$.b_
j=new U.ag(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,null,"Claws",!1,P.a_(null,null,null,m),0,3)
j.H("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.r.h(0,o)
$.xL=j}o=$.$get$aj();(o&&C.b).sm(o,0)
o=$.$get$aj()
n=$.Q
l=$.x1
k=new U.ag(n,null,null,null,null,"Speedo",!1,P.a_(null,null,null,m),0,3)
k.H("Speedo",[l],null,!1,null)
k.r.h(0,n)
o.push(k)
k=$.$get$aj()
o=$.ex
n=$.au
l=$.D
j=$.aM
i=new U.ag(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,null,"Sword",!1,P.a_(null,null,null,m),0,3)
i.H("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.r.h(0,o)
k.push(i)
i=$.$get$aj()
k=$.mQ
o=$.ah
j=$.D
l=new U.ag(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,null,"Hammer",!1,P.a_(null,null,null,m),0,3)
l.H("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.r.h(0,k)
i.push(l)
l=$.$get$aj()
i=$.uv
k=$.aK
j=$.D
o=new U.ag(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,null,"Rifle",!1,P.a_(null,null,null,m),0,3)
o.H("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.r.h(0,i)
l.push(o)
o=$.$get$aj()
l=$.up
i=$.aK
j=$.D
k=new U.ag(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,null,"Pistol",!1,P.a_(null,null,null,m),0,3)
k.H("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.r.h(0,l)
o.push(k)
k=$.$get$aj()
o=$.xg
l=$.aK
j=$.D
i=new U.ag(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,null,"Shotgun",!1,P.a_(null,null,null,m),0,3)
i.H("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.r.h(0,o)
k.push(i)
i=$.$get$aj()
k=$.wP
o=$.aM
j=$.au
l=$.D
n=new U.ag(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,null,"Blade",!1,P.a_(null,null,null,m),0,3)
n.H("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.r.h(0,k)
i.push(n)
n=$.$get$aj()
i=$.uf
k=$.aM
l=$.au
j=$.D
o=new U.ag(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,null,"Dagger",!1,P.a_(null,null,null,m),0,3)
o.H("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.r.h(0,i)
n.push(o)
o=$.$get$aj()
n=$.hy
i=$.ah
j=$.bU
l=new U.ag(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,null,"Fancysanta",!1,P.a_(null,null,null,m),0,3)
l.H("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.r.h(0,n)
o.push(l)
l=$.$get$aj()
o=$.xj
n=$.au
j=$.D
i=new U.ag(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,null,"Sickle",!1,P.a_(null,null,null,m),0,3)
i.H("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.r.h(0,o)
l.push(i)
i=$.$get$aj()
l=$.wS
o=$.au
j=$.D
n=new U.ag(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,null,"Chainsaw",!1,P.a_(null,null,null,m),0,3)
n.H("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.r.h(0,l)
i.push(n)
n=$.$get$aj()
i=$.wY
l=$.aM
j=$.D
o=new U.ag(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,null,"Fork",!1,P.a_(null,null,null,m),0,3)
o.H("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.r.h(0,i)
n.push(o)
o=$.$get$aj()
n=$.uo
i=$.bx
j=$.bs
l=new U.ag(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,null,"Pigeon",!1,P.a_(null,null,null,m),0,3)
l.H("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.r.h(0,n)
o.push(l)
l=$.$get$aj()
o=$.fn
n=$.cf
j=$.aw
i=$.ah
k=new U.ag(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,null,"Bowling Ball",!1,P.a_(null,null,null,m),0,3)
k.H("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.r.h(0,o)
l.push(k)
k=$.$get$aj()
l=$.ug
o=$.aE
i=$.bZ
j=new U.ag(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,null,"Dice",!1,P.a_(null,null,null,m),0,3)
j.H("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.r.h(0,l)
k.push(j)
j=$.$get$aj()
k=$.un
l=$.D
i=$.aM
o=new U.ag(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,null,"Needle",!1,P.a_(null,null,null,m),0,3)
o.H("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.r.h(0,k)
j.push(o)
o=$.$get$aj()
j=$.ux
k=$.X
i=$.ah
l=new U.ag(j,"Very magey. 7/10.","ShittyWizardKind",null,null,"Staff",!1,P.a_(null,null,null,m),0,3)
l.H("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.r.h(0,j)
o.push(l)
l=$.$get$aj()
o=$.xm
j=$.aW
i=$.Q
k=new U.ag(o,"Probably p hard to use.","ImKinkshamingKind",null,null,"Whip",!1,P.a_(null,null,null,m),0,3)
k.H("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.r.h(0,o)
l.push(k)
k=$.$get$aj()
l=$.uc
o=$.aK
i=$.aw
j=$.Q
n=$.aM
h=new U.ag(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,null,"Bow",!1,P.a_(null,null,null,m),0,3)
h.H("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.r.h(0,l)
k.push(h)
h=$.$get$aj()
k=$.jA
l=$.X
n=$.ah
j=new U.ag(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,null,"Club",!1,P.a_(null,null,null,m),0,3)
j.H("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.r.h(0,k)
h.push(j)
j=$.$get$aj()
h=$.jy
k=$.X
n=new U.ag(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,null,"Battle Broom",!1,P.a_(null,null,null,m),0,3)
n.H("Battle Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.r.h(0,h)
j.push(n)
n=$.$get$aj()
j=$.aC
h=$.K
k=$.ah
l=new U.ag(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,null,"Book",!1,P.a_(null,null,null,m),0,3)
l.H("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.r.h(0,j)
n.push(l)
l=$.$get$aj()
n=$.xc
j=$.D
k=$.ah
h=new U.ag(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,null,"Road Sign",!1,P.a_(null,null,null,m),0,3)
h.H("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.r.h(0,n)
l.push(h)
h=$.$get$aj()
l=$.ub
n=$.au
k=$.D
j=$.ah
i=new U.ag(l,"Legit.","TreeMassacreKind",null,null,"Axe",!1,P.a_(null,null,null,m),0,3)
i.H("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.r.h(0,l)
h.push(i)
i=$.$get$aj()
h=$.x7
l=$.X
j=$.aM
k=new U.ag(h,"Good for chest stabs.","UseOnHorsebackKind",null,null,"Lance",!1,P.a_(null,null,null,m),0,3)
k.H("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.r.h(0,h)
i.push(k)
k=$.$get$aj()
i=$.fp
h=$.D
j=$.ah
l=new U.ag(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,null,"Shield",!1,P.a_(null,null,null,m),0,3)
l.H("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.r.h(0,i)
k.push(l)
l=$.$get$aj()
k=$.wR
i=$.X
j=$.ah
h=new U.ag(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,null,"Cane",!1,P.a_(null,null,null,m),0,3)
h.H("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.r.h(0,k)
l.push(h)
h=$.$get$aj()
l=$.xn
k=$.aE
j=$.ah
i=new U.ag(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,null,"Yo-Yo",!1,P.a_(null,null,null,m),0,3)
i.H("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.r.h(0,l)
h.push(i)
i=$.$get$aj()
h=$.xk
l=$.X
j=$.aK
k=new U.ag(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,null,"Sling",!1,P.a_(null,null,null,m),0,3)
k.H("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.r.h(0,h)
i.push(k)
k=$.$get$aj()
i=$.xi
h=$.D
j=$.au
l=new U.ag(i,"So edgey.","NarutoKind",null,null,"Shuriken",!1,P.a_(null,null,null,m),0,3)
l.H("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.r.h(0,i)
k.push(l)
l=$.$get$aj()
k=$.ul
i=$.D
j=$.aK
h=new U.ag(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,null,"Machine Gun",!1,P.a_(null,null,null,m),0,3)
h.H("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.r.h(0,k)
l.push(h)
h=$.$get$aj()
l=$.mP
k=$.D
j=$.bt
i=new U.ag(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,null,"Grenade",!1,P.a_(null,null,null,m),0,3)
i.H("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.r.h(0,l)
h.push(i)
i=$.$get$aj()
h=$.fn
l=$.cg
j=$.ah
k=new U.ag(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,null,"Ball",!1,P.a_(null,null,null,m),0,3)
k.H("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.r.h(0,h)
i.push(k)
k=$.$get$aj()
i=$.xl
h=$.D
j=$.aM
l=new U.ag(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,null,"3dent",!1,P.a_(null,null,null,m),0,3)
l.H("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.r.h(0,i)
k.push(l)
l=$.$get$aj()
k=$.mN
i=$.K
j=$.au
h=new U.ag(k,"An X-Men fan, I see.","YuGiOhKind",null,null,"Card",!1,P.a_(null,null,null,m),0,3)
h.H("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.r.h(0,k)
l.push(h)
h=$.$get$aj()
l=$.ui
k=$.D
j=$.ah
i=new U.ag(l,"Go with what you know, I guess.","UnstoppableKind",null,null,"Frying Pan",!1,P.a_(null,null,null,m),0,3)
i.H("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.r.h(0,l)
h.push(i)
i=$.$get$aj()
h=$.hx
l=$.b0
j=$.Q
k=new U.ag(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,null,"Pillow",!1,P.a_(null,null,null,m),0,3)
k.H("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.r.h(0,h)
i.push(k)
k=$.$get$aj()
i=$.ew
h=$.D
j=$.aW
l=new U.ag(i,"This could be metal as fuck.","BikerGangKind",null,null,"Chain",!1,P.a_(null,null,null,m),0,3)
l.H("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.r.h(0,i)
k.push(l)
l=$.$get$aj()
k=$.uy
i=$.D
j=$.ah
h=new U.ag(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,null,"Wrench",!1,P.a_(null,null,null,m),0,3)
h.H("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.r.h(0,k)
l.push(h)
h=$.$get$aj()
l=$.xh
k=$.D
j=$.ah
i=new U.ag(l,"Dual purpose.","HideTheBodiesKind",null,null,"Shovel",!1,P.a_(null,null,null,m),0,3)
i.H("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.r.h(0,l)
h.push(i)
i=$.$get$aj()
h=$.uw
l=$.X
j=$.ah
k=new U.ag(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,null,"Rolling Pin",!1,P.a_(null,null,null,m),0,3)
k.H("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.r.h(0,h)
i.push(k)
k=$.$get$aj()
i=$.ut
h=$.X
j=$.aD
l=new U.ag(i,"Fuck you for picking this.","KermitsGoneBadKind",null,null,"Puppet",!1,P.a_(null,null,null,m),0,3)
l.H("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.r.h(0,i)
k.push(l)
l=$.$get$aj()
k=$.uu
i=$.D
j=$.au
h=new U.ag(k,"So fucking edgey.","KermitsGoneBadKind",null,null,"Razor",!1,P.a_(null,null,null,m),0,3)
h.H("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.r.h(0,k)
l.push(h)
h=$.$get$aj()
l=$.mT
k=$.D
j=$.Y
i=new U.ag(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,null,"Pen",!1,P.a_(null,null,null,m),0,3)
i.H("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.r.h(0,l)
h.push(i)
i=$.$get$aj()
h=$.jz
l=$.aw
j=$.cf
k=new U.ag(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,null,"Bust",!1,P.a_(null,null,null,m),0,3)
k.H("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.r.h(0,h)
i.push(k)
k=$.$get$aj()
i=$.x0
h=$.X
j=$.ah
l=new U.ag(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,null,"Golf Club",!1,P.a_(null,null,null,m),0,3)
l.H("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.r.h(0,i)
k.push(l)
l=$.$get$aj()
k=$.x6
i=$.D
j=$.au
h=new U.ag(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,null,"Knife",!1,P.a_(null,null,null,m),0,3)
h.H("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.r.h(0,k)
l.push(h)
h=$.$get$aj()
l=$.xf
k=$.D
j=$.au
i=new U.ag(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,null,"Scissors",!1,P.a_(null,null,null,m),0,3)
i.H("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.r.h(0,l)
h.push(i)
i=$.$get$aj()
h=$.xe
l=$.D
j=$.cf
k=new U.ag(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,null,"Safe",!1,P.a_(null,null,null,m),0,3)
k.H("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.r.h(0,h)
i.push(k)
k=$.$get$aj()
i=$.dR
h=$.X
j=$.ah
l=new U.ag(i,"Bitches love sticks","WeaponiseTheTreesKind",null,null,"Stick",!1,P.a_(null,null,null,m),0,3)
l.H("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
l.r.h(0,i)
k.push(l)
l=$.$get$aj()
k=$.uq
i=$.D
j=$.au
m=new U.ag(k,"I lack the taste buds necessary to weigh in on the pineapple debate","HomeSliceKind",null,null,"Pizza Cutter",!1,P.a_(null,null,null,m),0,3)
m.H("Pizza Cutter",[i,j],"I lack the taste buds necessary to weigh in on the pineapple debate",!1,"HomeSliceKind")
m.r.h(0,k)
l.push(m)
m=new S.bE("Duttle","Dut",null,null)
m.b="Duttle"
$.$get$bO().push(m)
$.ww=m
m=new S.bE("Salamander","GLUB",null,null)
m.b="Salamander"
$.$get$bO().push(m)
$.u0=m
m=new S.bE("Crocodile","NAK",null,null)
m.b="Crocodile"
$.$get$bO().push(m)
$.e7=m
m=new S.bE("Iguana","thip",null,null)
m.b="Iguana"
$.$get$bO().push(m)
$.er=m
m=new S.bE("Turtle","click",null,null)
m.b="Turtle"
$.$get$bO().push(m)
$.fh=m
m=new S.bE("Skeleton","rattle",null,null)
m.b="Skeleton"
$.$get$bO().push(m)
$.dQ=m
m=new S.bE("Robot","BEEP",null,null)
m.b="Robot"
$.$get$bO().push(m)
$.eu=m
m=new S.bE("Chameleon","BLEP",null,null)
m.b="Chameleon"
$.$get$bO().push(m)
$.hk=m
m=new S.bE("Axolotl","BARP",null,null)
m.b="Axolotl"
$.$get$bO().push(m)
$.tV=m
m=new S.bE("Lizard","bleb",null,null)
m.b="Lizard"
$.$get$bO().push(m)
$.m8=m
m=new S.bE("Snake","hiss",null,null)
m.b="Snake"
$.$get$bO().push(m)
$.u2=m
m=new S.bE("Alligator","nak",null,null)
m.b="Alligator"
$.$get$bO().push(m)
$.iE=m
m=new S.bE("Mole","snuff",null,null)
m.b="Mole"
$.$get$bO().push(m)
$.wy=m
m=new S.bE("Bird","tweet",null,null)
m.b="Bird"
$.$get$bO().push(m)
$.m6=m
m=new S.bE("Wolf","howl",null,null)
m.b="Wolf"
$.$get$bO().push(m)
$.md=m
m=new S.bE("Newt","skitter",null,null)
m.b="Newt"
$.$get$bO().push(m)
$.wz=m
m=new S.bE("Spider","skitter",null,null)
m.b="Spider"
$.$get$bO().push(m)
$.iL=m
m=new S.bE("Cupid","flappa",null,null)
m.b="Cupid"
$.$get$bO().push(m)
$.iF=m
m=new S.bE("Dragon","roar",null,null)
m.b="Dragon"
$.$get$bO().push(m)
$.fe=m
m=new S.ip("Prospitian","murmur",null,null)
m.b="Prospitian"
$.$get$bO().push(m)
$.Ax=m
m=new S.ip("Dersite","mutter",null,null)
m.b="Dersite"
$.$get$bO().push(m)
$.Au=m
m=new S.mz("Horror Terror","a;lkjdf",null,null)
m.b="Horror Terror"
$.$get$bO().push(m)
$.Aw=m
m=new S.bE("Jellyfish","buzz",null,null)
m.b="Jellyfish"
$.$get$bO().push(m)
$.wx=m
$.Ay=H.a([$.u2,$.iE,$.wz,$.u0,$.er,$.e7,$.fh,$.hk,$.tV,$.m8],[S.bE])
m=new T.c2(0,"spices")
$.$get$cm().push(m)
$.hp=m
m=new T.c2($.e9,"fresh baked bread")
$.$get$cm().push(m)
$.fc=m
m=new T.c2($.e9,"sweetness")
$.$get$cm().push(m)
$.cs=m
m=new T.c2($.e9,"nature")
$.$get$cm().push(m)
$.ce=m
m=new T.c2(0,"salt")
$.$get$cm().push(m)
$.mc=m
m=new T.c2($.cS,"rot")
$.$get$cm().push(m)
$.d_=m
m=new T.c2($.cS,"feet")
$.$get$cm().push(m)
$.Av=m
m=new T.c2(0,"oil")
$.$get$cm().push(m)
$.et=m
m=new T.c2(0,"chlorine")
$.$get$cm().push(m)
$.tX=m
m=new T.c2(0,"nothing in particular")
$.$get$cm().push(m)
$.iK=m
m=new T.c2(0,"gunpowder")
$.$get$cm().push(m)
$.eq=m
m=new T.c2(0,"must")
$.$get$cm().push(m)
$.ff=m
m=new T.c2($.e9,"zoo animals")
$.$get$cm().push(m)
$.cR=m
m=new T.c2($.cS,"sweat")
$.$get$cm().push(m)
$.e8=m
m=new T.c2(0,"ozone")
$.$get$cm().push(m)
$.hn=m
m=new T.c2(0,"deceit")
$.$get$cm().push(m)
$.c6=m
m=new T.c2($.cS,"blood")
$.$get$cm().push(m)
$.dp=m
m=new T.c2($.cS,"smoke")
$.$get$cm().push(m)
$.fg=m
m=new K.bT($.cS,"creepy")
$.$get$cd().push(m)
$.c5=m
m=new K.bT($.e9,"calm")
$.$get$cd().push(m)
$.aO=m
m=new K.bT($.cS,"frantic")
$.$get$cd().push(m)
$.ci=m
m=new K.bT(0,"like nothing")
$.$get$cd().push(m)
$.iJ=m
m=new K.bT($.e9,"energizing")
$.$get$cd().push(m)
$.c7=m
m=new K.bT(0,"studious")
$.$get$cd().push(m)
$.cE=m
m=new K.bT(0,"dangerous")
$.$get$cd().push(m)
$.dq=m
m=new K.bT(0,"glamorous")
$.$get$cd().push(m)
$.dO=m
m=new K.bT(0,"romantic")
$.$get$cd().push(m)
$.ho=m
m=new K.bT($.e9,"creative")
$.$get$cd().push(m)
$.fd=m
m=new K.bT(0,"lucky")
$.$get$cd().push(m)
$.m9=m
m=new K.bT(0,"happy")
$.$get$cd().push(m)
$.dA=m
m=new K.bT(0,"heroic")
$.$get$cd().push(m)
$.dr=m
m=new K.bT($.cS,"stupid")
$.$get$cd().push(m)
$.dC=m
m=new K.bT(0,"lucky")
$.$get$cd().push(m)
$.m9=m
m=new K.bT(0,"claustrophobic")
$.$get$cd().push(m)
$.wv=m
m=new K.bT(0,"overheated")
$.$get$cd().push(m)
$.ma=m
m=new K.bT($.cS,"confusing")
$.$get$cd().push(m)
$.m7=m
m=new K.bT(0,"contemplatative")
$.$get$cd().push(m)
$.cZ=m
m=new M.bA(0,"clanking")
$.$get$bM().push(m)
$.cQ=m
m=new M.bA(0,"laughing")
$.$get$bM().push(m)
$.cD=m
m=new M.bA($.e9,"rustling")
$.$get$bM().push(m)
$.bf=m
m=new M.bA($.cS,"screaming")
$.$get$bM().push(m)
$.ev=m
m=new M.bA($.cS,"foot steps")
$.$get$bM().push(m)
$.iH=m
m=new M.bA($.cS,"beeping")
$.$get$bM().push(m)
$.ep=m
m=new M.bA($.cS,"whispering")
$.$get$bM().push(m)
$.wB=m
m=new M.bA(0,"clacking")
$.$get$bM().push(m)
$.hl=m
m=new M.bA(0,"applause")
$.$get$bM().push(m)
$.cJ=m
m=new M.bA(0,"jazz")
$.$get$bM().push(m)
$.es=m
m=new M.bA(0,"disco")
$.$get$bM().push(m)
$.tZ=m
m=new M.bA(0,"drums")
$.$get$bM().push(m)
$.hm=m
m=new M.bA(0,"echoing")
$.$get$bM().push(m)
$.iG=m
m=new M.bA($.cS,"roaring")
$.$get$bM().push(m)
$.mb=m
m=new M.bA($.cS,"gunfire")
$.$get$bM().push(m)
$.iI=m
m=new M.bA(0,"music")
$.$get$bM().push(m)
$.cr=m
m=new M.bA(0,"singing")
$.$get$bM().push(m)
$.u1=m
m=new M.bA(0,"chanting")
$.$get$bM().push(m)
$.tW=m
m=new M.bA(0,"whistling")
$.$get$bM().push(m)
$.fi=m
m=new M.bA($.e9,"nature")
$.$get$bM().push(m)
$.dB=m
m=new M.bA(0,"croaking")
$.$get$bM().push(m)
$.tY=m
m=new M.bA(0,"silence")
$.$get$bM().push(m)
$.dP=m
m=new M.bA(0,"pulsing")
$.$get$bM().push(m)
$.u_=m
m=new M.bA(0,"ticking")
$.$get$bM().push(m)
$.wA=m
m=H.a([],p)
o=[X.F,P.W]
n=A.a5
l=E.O
k=[l]
j=[A.h0]
m=new S.n7(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.w(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Knight",3,!0,!1)
$.H5=m
m=P.l(H.a([new E.O($.cy,0.4,!1)],k),l)
i=H.a([],p)
m=new S.oD(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.w(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Seer",6,!0,!1)
$.Hh=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.l_("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.w(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Bard",9,!0,!1)
$.H1=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.mw("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.w(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Heir",8,!0,!1)
$.H4=m
m=H.a([],p)
m=new U.ns(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.w(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Maid",0,!0,!1)
$.H8=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.ou(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.w(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Rogue",4,!0,!1)
$.Hd=m
m=H.a([],p)
m=new V.o2(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.w(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Page",1,!0,!1)
$.Hb=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.pD(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.w(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Thief",7,!0,!1)
$.Hk=m
m=P.l(H.a([new E.O($.cy,0.1,!1)],k),l)
i=H.a([],p)
m=new R.pn(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.w(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Sylph",5,!0,!1)
$.Hj=m
m=H.a([],p)
m=new N.oj("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.w(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Prince",10,!0,!1)
$.Hc=m
m=P.l(H.a([new E.O($.cy,0.1,!1)],k),l)
i=H.a([],p)
m=new M.q6("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.w(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Witch",11,!0,!1)
$.Hm=m
m=P.l(H.a([new E.O($.cy,0.4,!1)],k),l)
i=H.a([],p)
m=new S.nr("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.w(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Mage",2,!0,!1)
$.H7=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.l(H.a([new E.O($.cy,3,!1),new E.O($.xN,-2,!1)],k),l)
e=H.a([],p)
m=new E.q2("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.w(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Waste",12,!1,!1)
$.Hl=m
m=H.a([],p)
m=new Y.oA("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.w(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Scout",13,!1,!1)
$.Hf=m
m=P.l(H.a([new E.O($.cy,0.5,!1)],k),l)
i=H.a([],p)
m=new L.oB("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.w(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Scribe",15,!1,!1)
$.Hg=m
m=P.l(H.a([new E.O($.cy,0.5,!1)],k),l)
i=H.a([],p)
m=new E.oy(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.w(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Sage",14,!1,!1)
$.He=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.mu("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.w(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Guide",16,!1,!1)
$.H3=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.l(H.a([new E.O($.cy,3,!1)],k),l)
g=H.a([],p)
m=new Y.mt(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.w(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Grace",17,!1,!1)
$.H2=m
m=P.l(H.a([new E.O($.cy,0.1,!1)],k),l)
i=H.a([],p)
m=new E.nD("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.w(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Muse",18,!1,!1)
$.H9=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.J(null,null,n)
h=P.l(H.a([new E.O($.cy,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.np("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.w(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Lord",19,!1,!1)
$.H6=m
m=P.l(H.a([new E.O($.cy,-0.1,!1),new E.O($.dE,1,!1)],k),l)
i=H.a([],p)
m=new Y.oK("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.w(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,Q.J(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Smith",20,!1,!1)
$.Hi=m
$.Ha=T.H0("Null",255,!1,!0)
m=A.dM
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
b=P.l(H.a([new E.O($.dE,2,!0),new E.O($.eK,1,!0),new E.O($.eL,-2,!0)],k),l)
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
a=new N.oN(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ak(0,"Space",!0,!1)
$.zT=a
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
g=P.l(H.a([new E.O($.i_,2,!0),new E.O($.eL,1,!0),new E.O($.eJ,-2,!0)],k),l)
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
h=new N.pE(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ak(1,"Time",!0,!1)
$.zU=h
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
b=P.l(H.a([new E.O($.eL,2,!0),new E.O($.dg,1,!0),new E.O($.eK,-1,!0),new E.O($.eg,-1,!0),new E.O($.cy,0.05,!1)],k),l)
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
a=new T.l7(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ak(2,"Breath",!0,!1)
$.zG=a
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
g=P.l(H.a([new E.O($.dE,2,!0),new E.O($.eJ,1,!0),new E.O($.i_,-1,!0),new E.O($.eK,-1,!0),new E.O($.cy,0.01,!1)],k),l)
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
h=new U.lC(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ak(3,"Doom",!0,!1)
$.zH=h
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
b=P.l(H.a([new E.O($.eg,2,!0),new E.O($.dg,1,!0),new E.O($.dE,-2,!0)],k),l)
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
a=new T.l5(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ak(4,"Blood",!0,!1)
$.zF=a
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
g=P.l(H.a([new E.O($.eg,1,!0),new E.kT(null,1,!0)],k),l)
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
h=new T.mv(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ak(5,"Heart",!0,!1)
$.zJ=h
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
b=P.l(H.a([new E.O($.eJ,2,!0),new E.O($.i_,1,!0),new E.O($.dE,-2,!0)],k),l)
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
a=new V.nC(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ak(6,"Mind",!0,!1)
$.zP=a
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
g=P.l(H.a([new E.O($.hZ,2,!0),new E.O($.eJ,1,!0),new E.O($.dg,-1,!0),new E.O($.eK,-1,!0),new E.O($.cy,0.2,!1)],k),l)
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
h=new G.nd(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ak(7,"Light",!0,!1)
$.zO=h
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
b=P.l(H.a([new E.fW(D.vo(),null,3,!0),new E.fW(D.vo(),null,-1,!0),new E.O($.i_,-1,!0),new E.O($.cy,0.2,!1)],k),l)
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
a=new Q.q1(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ak(8,"Void",!0,!1)
$.zV=a
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
g=P.l(H.a([new E.O($.i0,2,!0),new E.O($.eL,1,!0),new E.O($.dg,-1,!0),new E.O($.eg,-1,!0),new E.O($.cy,0.01,!1)],k),l)
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
h=new E.op(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ak(9,"Rage",!0,!1)
$.zR=h
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
b=P.l(H.a([new E.O($.dg,2,!0),new E.O($.hZ,1,!0),new E.fW(D.vo(),null,-2,!0)],k),l)
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
a=new X.my(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ak(10,"Hope",!0,!1)
$.zK=a
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
g=P.l(H.a([new E.O($.eK,2,!0),new E.O($.i0,1,!0),new E.O($.dE,-2,!0)],k),l)
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
h=new K.nc(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ak(11,"Life",!0,!1)
$.zN=h
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
b=P.l(H.a([new E.O($.dE,3,!0),new E.O($.dg,-2,!0)],k),l)
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
a=new Z.lD(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
a.ak(12,"Dream",!1,!1)
$.zI=a
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
g=P.l(H.a([new E.O($.eJ,2,!0),new E.O($.dg,1,!0),new E.O($.eL,-2,!0),new E.O($.cy,-0.1,!1)],k),l)
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
h=new Q.na(0.01,0.9,0.1,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death's Lawyer plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["orders","rules","edicts","sentences"],["chains","gavel","caution tape","rule book","dictionary","wig","handbook","lock"],!0,!0,f,g,0.01,0.01,0.01,0.5,14,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
h.ak(14,"Law",!1,!1)
$.zM=h
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
c=P.l(H.a([new E.O($.i0,13,!0)],k),l)
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
b=new K.oz(13,13,13,h,g,f,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",d,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],c,0.01,0.01,0.01,0.5,13,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!0,1,b,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
b.ak(13,"Sauce",!1,!0)
$.zS=b
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
h=P.l(H.a([new E.O($.eg,2,!0),new E.O($.eL,1,!0),new E.O($.dE,-2,!0)],k),l)
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
j=new V.mI(0.5,0.5,1,0,b,c,d,e,f,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["ink","friendship","ties","pulse","chain","ocean","festival"],["ink","photo album","friendship bracelet"],g,h,0.01,0.01,0.01,0.5,15,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Ink",null,!1,!1,!1,!1,!0,1,m,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.J(null,null,n))
j.ak(15,"Ink",!1,!1)
$.zL=j
$.zQ=L.zE(255,"Null",!1,!0)
j=P.l(H.a([new E.O($.dg,1,!0),new E.O($.hZ,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Lyricist","Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass","Instrumentalist"],p)
h=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
g=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
f=H.a(["nobody"],p)
e=P.l(H.a([],k),l)
d=H.a(["Nobody"],p)
c=H.a(["Nobody"],p)
q=new F.nE(j,q,m,h,g,!1,f,e,d,c,1,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"loud","musical","Music")
q.E()
q.F()
B.cU(q)
$.AU=q
q=P.l(H.a([new E.O($.eJ,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist","Ichthyologist","Instructor"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kP(q,m,j,i,h,!1,g,f,e,d,13,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"nerdy","smart","Academic")
q.E()
q.F()
B.cU(q)
$.AN=q
q=P.l(H.a([new E.O($.i0,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler","Iceskater"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kU(q,m,j,i,h,!1,g,f,e,d,4,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"dumb","athletic","Athletic")
q.E()
q.F()
B.cU(q)
$.AO=q
q=P.l(H.a([new E.O($.i_,-1,!0),new E.O($.hZ,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["LaughMaster","Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor","Imp"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.lf(q,m,j,i,h,!1,g,f,e,d,0,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"dorky","funny","Comedy")
q.E()
q.F()
B.cU(q)
$.AP=q
q=P.l(H.a([new E.O($.dg,-1,!0),new E.O($.eK,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business","Idealist"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.lt(q,m,j,i,h,!1,g,f,e,d,2,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"pretentious","cultured","Culture")
q.E()
q.F()
B.cU(q)
$.AQ=q
q=P.l(H.a([new E.O($.dg,1,!0),new E.O($.eg,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer","Innkeeper"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.lB(q,m,j,i,h,!1,g,f,e,d,8,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"boring","domestic","Domestic")
q.E()
q.F()
B.cU(q)
$.AR=q
q=P.l(H.a([new E.O($.hZ,1,!0),new E.O($.dE,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Lich","Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart","Illusionist"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.m4(q,m,j,i,h,!1,g,f,e,d,7,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"whimpy","imaginative","Fantasy")
q.E()
q.F()
B.cU(q)
$.AS=q
q=P.l(H.a([new E.O($.i0,1,!0),new E.O($.eK,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Legislator","Legalist","Legislacerator","Lawman","Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel","Investigator"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.n5(q,m,j,i,h,!1,g,f,e,d,6,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"harsh","fair-minded","Justice")
q.E()
q.F()
B.cU(q)
$.AT=q
q=P.l(H.a([new E.O($.eL,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent","Imposter"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.of(q,m,j,i,h,!1,g,f,e,d,9,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"frivolous","geeky","PopCulture")
q.E()
q.F()
B.cU(q)
$.AW=q
q=P.l(H.a([new E.O($.eg,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team","Idealist"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.ov(q,m,j,i,h,!1,g,f,e,d,12,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"obsessive","romantic","Romantic")
q.E()
q.F()
B.cU(q)
$.AX=q
q=P.l(H.a([new E.O($.dg,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally","Icebreaker"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.oL(q,m,j,i,h,!1,g,f,e,d,11,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"shallow","extroverted","Social")
q.E()
q.F()
B.cU(q)
$.AY=q
q=P.l(H.a([new E.O($.eg,-1,!0),new E.O($.dg,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod","Iconoclast","Infidel"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.pt(q,m,j,i,h,!1,g,f,e,d,5,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"terrible","honest","Terrible")
q.E()
q.F()
B.cU(q)
$.B_=q
q=P.l(H.a([new E.O($.eJ,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis","Illustrator"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.qb(q,m,j,i,h,!1,g,f,e,d,3,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"wordy","lettered","Writing")
q.E()
q.F()
B.cU(q)
$.B0=q
q=P.l(H.a([new E.O($.dE,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data","Incinerator"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.ps(q,m,j,i,h,!1,g,f,e,d,10,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"awkward","techy","Technology")
q.E()
q.F()
B.cU(q)
$.AZ=q
q=H.a(["nobody"],p)
l=P.l(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.hw(!0,q,l,k,p,-13,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.J(null,null,n),"","","Null")
q.E()
q.F()
B.cU(q)
$.AV=q
A.uP()
t=3
return P.bS(Y.nF(),$async$t5)
case 3:case 1:return P.bh(r,s)}})
return P.bi($async$t5,s)}},V={lB:function lB(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},mn:function mn(a){this.a=a},mI:function mI(x2,y1,y2,p,q,t,u,v,w,B,C,J,M,N,a8,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.J=J
_.M=M
_.N=N
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
_.x1=x1},nC:function nC(x2,y1,y2,p,q,t,u,v,w,B,C,J,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},o2:function o2(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},pt:function pt(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
As:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.dz(new P.ch(""),0,0)
t.ah(a,8)
s=Math.pow(256,e)
c.toString
r=H.cK(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.u(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.u(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.ah(n-1,p)
t.ah(a,8)}return t.ba(b)},
Ar:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cI(c)
s=new Uint8Array(t)
r=new B.dn(null,0)
r.a=J.e3(a,b)
for(q=e*8,p=0;p<c;){o=r.aa(q)+1
n=r.aa(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.u(s,l)
s[l]=n}p+=o}return s},
tQ:function(a){return new V.lL(a)},
tP:function(a){return new V.lK(a)},
Ao:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.dz(new P.ch(""),0,0)
t.ah(a,8)
s=d.gd1()
r=C.f.al(Math.log(H.kC(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cK(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.u(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.u(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.ah(m-1,o)
t.ah(a,r)}return t.ba(b)},
An:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cI(c)
s=new Uint8Array(t)
r=d.y
q=C.f.al(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dn(null,0)
p.a=J.e3(a,b)
for(r=e*8,o=0;o<c;){n=p.aa(r)+1
m=p.aa(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.u(s,k)
s[k]=m}o+=n}return s},
tO:function(a){return new V.lJ(a)},
tN:function(a){return new V.lI(a)},
Aq:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.dz(new P.ch(""),0,0)
t.ah(a,8)
s=d.gd1()
r=C.f.al(Math.log(H.kC(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cK(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.u(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.u(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.al(Math.log(n)/0.6931471805599453)+1
t.ah(k-1,5)
t.ah(n-1,k)
t.ah(a,r)}return t.ba(b)},
Ap:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cI(c)
s=new Uint8Array(t)
r=d.y
q=C.f.al(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dn(null,0)
p.a=J.e3(a,b)
for(o=0;o<c;){n=p.aa(p.aa(5)+1)+1
m=p.aa(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.u(s,r)
s[r]=m}o+=n}return s},
lL:function lL(a){this.a=a},
lK:function lK(a){this.a=a},
lJ:function lJ(a){this.a=a},
lI:function lI(a){this.a=a}},Z={lD:function lD(x2,y1,y2,p,q,t,u,v,w,B,C,J,M,N,a8,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.J=J
_.M=M
_.N=N
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
AC:function(){var t,s
if(!$.wC)$.wC=!0
else return
t=[P.z]
s=new Y.py(H.a([],t))
$.u4=s
Z.cT(s,"txt",null)
Z.cT($.u4,"vert","x-shader/x-vertex")
Z.cT($.u4,"frag","x-shader/x-fragment")
$.AA=new Y.oq(H.a([],t))
$.wE=new Y.l9(H.a([],t))
s=new B.qg(H.a([],t))
$.wH=s
Z.cT(s,"zip",null)
Z.cT($.wH,"bundle",null)
s=new U.q7(H.a([],t))
$.wG=s
Z.cT(s,"words",null)
s=new Q.od(H.a([],t))
$.wF=s
Z.cT(s,"png",null)
Z.cT($.wF,"jpg","image/jpeg")
$.AI=new Q.oa(H.a([],t))
s=new M.oR(H.a([],t))
$.AJ=s
Z.cT(s,"psprite",null)
s=new V.mn(H.a([],t))
$.u3=s
Z.cT(s,"ttf",null)
Z.cT($.u3,"otf",null)
Z.cT($.u3,"woff",null)
s=new Y.nT(null,H.a([],t))
$.AF=s
Z.cT(s,"obj",null)
s=new U.nq(H.a([],t))
$.AD=s
Z.cT(s,"mp3",null)
$.AE=new U.pe(H.a([],t))
s=new U.nY(H.a([],t))
$.AG=s
Z.cT(s,"ogg",null)
$.AH=new U.pf(H.a([],t))},
cT:function(a,b,c){$.$get$hr().i(0,b,new Z.iC(a,c,[null,null]))
a.a.push(b)},
wD:function(a){var t
if($.$get$hr().U(0,a)){t=$.$get$hr().n(0,a)
if(t.a instanceof O.c8)return t
throw H.k("File format for extension ."+H.x(a)+" does not match expected types.")}throw H.k("No file format found for extension ."+H.x(a))},
AB:function(a){var t=$.$get$hr()
t=t.gaf(t)
return new H.ej(t,new Z.mp(a),[H.ak(t,"n",0)])},
mp:function mp(a){this.a=a},
iC:function iC(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
np:function np(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,J,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
uG:function uG(){},
uC:function uC(){},
uD:function uD(){}},X={iD:function iD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},io:function io(){},my:function my(x2,y1,y2,p,q,t,u,v,w,B,C,J,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},F:function F(a,b,c){this.a=a
this.b=b
this.c=c}},N={ac:function ac(){},n5:function n5(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},oj:function oj(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},ou:function ou(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},oL:function oL(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},oN:function oN(x2,y1,y2,p,q,t,u,v,w,B,C,J,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},pE:function pE(x2,y1,y2,p,q,t,u,v,w,B,C,J,M,N,a8,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.J=J
_.M=M
_.N=N
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
Gu:function(a){var t,s,r,q,p,o,n,m,l
t=J.cB(a)
s=new W.ko(document.querySelectorAll("link"),[null])
for(r=new H.dS(s,s.gm(s),0,null,[null]);r.D();){q=r.d
p=J.an(q)
if(!!p.$ishE&&q.rel==="stylesheet"){o=$.$get$o8()
H.x(p.ga7(q))
o.toString
o=t.length
n=Math.min(o,J.c4(p.ga7(q)))
for(m=0;m<n;++m){if(m>=o)return H.u(t,m)
if(t[m]!==J.fQ(p.ga7(q),m)){l=C.c.ag(t,m)
$.$get$o8().toString
return l.split("/").length-1}continue}}}$.$get$o8().aL(C.h,"Didn't find a css link to derive relative path")
return 0},
v4:function(){var t=P.y5()
if(!$.$get$o7().U(0,t))$.$get$o7().i(0,t,N.Gu(t))
return $.$get$o7().n(0,t)}},E={iR:function iR(){},nX:function nX(){},O:function O(a,b,c){this.a=a
this.b=b
this.c=c},fW:function fW(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},kT:function kT(a,b,c){this.a=a
this.b=b
this.c=c},nD:function nD(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},op:function op(x2,y1,y2,p,q,t,u,v,w,B,C,J,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},oy:function oy(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},q2:function q2(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1}},B={mw:function mw(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
cU:function(a){var t=a.f
if($.$get$mK().U(0,t))throw H.k("Duplicate aspect id for "+a.A(0)+": "+t+" is already registered for "+J.cB($.$get$mK().n(0,t))+".")
$.$get$mK().i(0,t,a)},
hw:function hw(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
qg:function qg(a){this.a=a},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a,b){this.a=a
this.b=b},
I8:function(a){return a.aZ(0)},
Hz:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=P.z
s=P.c0(t,P.W)
r=B.d5
q=new B.eS(s,P.c0(t,t),J.w1(a),!1,null,null)
q.co(null,null,r)
for(p=J.zf(a.gcY()),p=p.gR(p);p.D();){o=p.gI()
s.i(0,o,J.fQ(a.gcY(),o))}for(s=a.ghA(),s=s.gaf(s),s=s.gR(s),p=q.d,n=a.d;s.D();){o=s.gI()
p.i(0,o,n.n(0,o))}for(s=a.b,p=s.length,r=[r],m=0;m<s.length;s.length===p||(0,H.bu)(s),++m){l=s[m]
n=J.aq(l)
k=n.gX(l)
j=J.zn(k)
k=k.gc0()
i=new B.d5(k)
if(k==null){k=P.c0(t,t)
i.a=k}k.i(0,"MAIN",j)
n=n.gbc(l)
C.b.h(q.b,new Q.h(i,n,r))}return q},
pv:function pv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
px:function px(a){this.a=a},
pw:function pw(a,b){this.a=a
this.b=b},
d5:function d5(a){this.a=a},
eS:function eS(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
eT:function eT(a,b){this.a=a
this.b=b}},Q={mF:function mF(){},od:function od(a){this.a=a},oa:function oa(a){this.a=a},na:function na(x2,y1,y2,p,q,t,u,v,w,B,C,J,M,N,a8,bC,bD,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.J=J
_.M=M
_.N=N
_.a8=a8
_.bC=bC
_.bD=bD
_.a=a
_.b=b
_.c=c
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
_.x1=x1},ov:function ov(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},q1:function q1(x2,y1,y2,p,q,t,u,v,w,B,C,J,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},jW:function jW(){},
J:function(a,b,c){var t=new Q.e_(null,null,[c])
t.co(a,b,c)
return t},
vB:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.J(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.e2(a,"$isn",[e],"$asn"))if(H.e2(a,"$iscH",[e],"$ascH"))for(s=J.cX(a.gbo()),r=0;s.D();){q=s.gI()
p=t.b
o=p.length
if(r>=o)return H.u(p,r)
p[r]=q;++r}else for(s=a.gR(a),p=[H.N(t,0)],r=0;s.D();){n=s.gI()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.u(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gR(a),p=[e],o=[H.N(t,0)];s.D();){l=s.gI()
if(H.Ip(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.u(m,0)
m[0]=new Q.h(l,k,o)}else if(H.e2(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.u(m,0)
m[0]=l}else throw H.k("Invalid entry type "+H.x(J.w4(l))+" for WeightedList<"+H.x(H.c3(H.dG(e)))+">. Should be "+H.x(H.c3(H.dG(e)))+" or WeightPair<"+H.x(H.c3(H.dG(e)))+">.")}return t},
vC:function(a,b,c,d){return new Q.kd(J.w6(a.gbo(),new Q.q5(c,d,b)),null,[c,d])},
cH:function cH(){},
e_:function e_(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
i5:function i5(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eV:function eV(){},
i4:function i4(){},
q4:function q4(a,$ti){this.a=a
this.$ti=$ti},
kd:function kd(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
q5:function q5(a,b,c){this.a=a
this.b=b
this.c=c},
oC:function(){var t=0,s=P.be(),r
var $async$oC=P.bj(function(a,b){if(a===1)return P.bg(b,s)
while(true)switch(t){case 0:t=3
return P.bS(A.hH("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$oC)
case 3:r=A.hH("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$oC,s)}},G={nd:function nd(x2,y1,y2,p,q,t,u,v,w,B,C,J,M,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},of:function of(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
A3:function(a){var t,s,r,q,p,o,n,m,l
t=G.a1
s=P.jH(a,t)
r=P.a_(null,null,null,t)
q=H.a([],[G.d])
for(t=G.G4(),p=J.cX(t.a),t=new H.ke(p,t.b,[H.N(t,0)]);t.D();){o=p.gI()
if(o.eN(s))q.push(o)}C.b.f5(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bu)(q),++n){o=q[n]
if(o.eN(s)){r.h(0,o)
for(p=o.f,m=p.length,l=0;l<p.length;p.length===m||(0,H.bu)(p),++l)s.am(0,p[l])}}if(s.a!==0)r.as(0,s)
return r},
G4:function(){var t=$.$get$c()
t.toString
return new H.ej(t,new G.mW(),[H.N(t,0)])},
a1:function a1(){},
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
mW:function mW(){}},F={nE:function nE(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},qb:function qb(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Gc:function(a){if(a===C.i){window
return C.j.gat(C.j)}if(a===C.h){window
return C.j.giH()}if(a===C.a5){window
return C.j.ghV()}return P.It()},
hI:function hI(a,b){this.a=a
this.b=b},
eC:function eC(a,b,c){this.a=a
this.b=b
this.c=c},
uL:function uL(){},
Am:function(a,b,c,d){var t,s,r,q
t=new B.dz(new P.ch(""),0,0)
t.ah(a,8)
c.toString
s=H.cK(c,0,null)
for(r=s.length,q=0;q<r;++q)t.c2(s[q])
return t.ba(b)},
Al:function(a,b,c,d){var t,s,r,q,p
t=H.cI(c)
s=new Uint8Array(t)
r=new B.dn(null,0)
r.a=J.e3(a,b)
for(q=0;q<c;++q){p=r.ca()
if(q>=t)return H.u(s,q)
s[q]=p}return s},
Ak:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.dz(new P.ch(""),0,0)
t.ah(a,8)
s=d.gd1()
r=C.f.al(Math.log(H.kC(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cK(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.u(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.u(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.c2(o-1)
t.ah(a,r)}return t.ba(b)},
Aj:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cI(c)
s=new Uint8Array(t)
r=d.y
q=C.f.al(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dn(null,0)
p.a=J.e3(a,b)
for(o=0;o<c;){n=p.ca()+1
m=p.aa(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.u(s,r)
s[r]=m}o+=n}return s},
Ai:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.dz(new P.ch(""),0,0)
t.ah(a,8)
c.toString
s=H.cK(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.u(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.u(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.c2(p-1)
t.c2(a)}return t.ba(b)},
Ah:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cI(c)
s=new Uint8Array(t)
r=new B.dn(null,0)
r.a=J.e3(a,b)
for(q=0;q<c;){p=r.ca()+1
o=r.ca()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.u(s,m)
s[m]=o}q+=p}return s}},R={
xJ:function(a){var t,s
if(a.gm(a).aB(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.giO(s).giZ().es("checking for two players, ps is "+H.x(a)+", ret is "+t)
return t},
GX:function(a){return R.xJ(a)&&R.GL(a)},
GI:function(a){a.ga9(a).gbw()
return!1},
GW:function(a){a.ga9(a).gbw()
return!1},
GL:function(a){a.ga9(a).gbw()
return!1},
GV:function(a){a.ga9(a).gbw()
return!1},
GU:function(a){return a.ga9(a).gbx().giY()},
GS:function(a){return a.ga9(a).gbx().giW()},
GQ:function(a){return a.ga9(a).gbx().giV()},
GM:function(a){return a.ga9(a).gbx().giT()},
GO:function(a){return a.ga9(a).gbx().giU()},
GT:function(a){return a.ga9(a).gbx().giX()},
GN:function(a){var t=a.ga9(a)
t.gbw()
t.gbw()
return!1},
GP:function(a){return a.ga9(a).gi0()},
GR:function(a){a.ga9(a).gi0()
return!1},
GJ:function(a){return!0},
GK:function(a){a.ga9(a).giQ()
return!1},
ol:function ol(){},
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
bH:function bH(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
pn:function pn(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
hq:function hq(){},
v3:function v3(){},
v2:function v2(){}},D={ps:function ps(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Ht:function(){var t,s
if($.xO)return
$.xO=!0
t=new D.co("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cM().push(t)
t.y=0
$.xN=t
t=new D.co("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cM().push(t)
$.Hr=t
t=new D.kg(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cM().push(t)
t.y=2.5
t.Q=1
$.i0=t
t=new D.kg(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cM().push(t)
t.y=2.5
$.eK=t
t=new D.co("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cM().push(t)
$.Hq=t
t=new D.co("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cM().push(t)
$.eL=t
t=new D.os("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cM().push(t)
$.eg=t
t=new D.co("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cM().push(t)
$.dg=t
t=new D.co("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cM().push(t)
$.eJ=t
t=new D.co("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cM().push(t)
$.hZ=t
t=new D.co("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cM().push(t)
$.i_=t
t=new D.co("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cM().push(t)
$.dE=t
t=new D.co("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cM().push(t)
$.cy=t
t=P.z
s=D.co
$.Hs=H.A5(P.G8($.$get$cM(),new D.oT(),new D.oU(),t,s),t,s)},
vo:function(){var t=$.$get$cM()
return new H.ej(t,new D.oV(),[H.N(t,0)])},
oT:function oT(){},
oU:function oU(){},
oV:function oV(){},
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
kg:function kg(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
os:function os(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
H.uI.prototype={}
J.f.prototype={
T:function(a,b){return a===b},
ga6:function(a){return H.eF(a)},
A:function(a){return H.oh(a)},
gac:function(a){return new H.dZ(H.kG(a),null)},
$ishq:1,
$isad:1,
$isfv:1,
$isad:1,
$isn1:1,
$isf:1,
$isn1:1,
$isf:1,
$ishK:1,
$isad:1}
J.n_.prototype={
A:function(a){return String(a)},
ga6:function(a){return a?519018:218159},
gac:function(a){return C.al},
$iscW:1}
J.n0.prototype={
T:function(a,b){return null==b},
A:function(a){return"null"},
ga6:function(a){return 0},
gac:function(a){return C.af},
$iscG:1}
J.hC.prototype={
ga6:function(a){return 0},
gac:function(a){return C.ae},
A:function(a){return String(a)},
$isn1:1,
h:function(a,b){return a.add(b)},
am:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gc7:function(a){return a.left},
gce:function(a){return a.top},
gec:function(a){return a.attributes},
sai:function(a,b){return a.type=b},
gbd:function(a){return a.width},
gb6:function(a){return a.height},
gaH:function(a){return a.value},
ig:function(a,b){return a.parse(b)},
f3:function(a,b){return a.setLogging(b)},
f4:function(a,b){return a.setMaterials(b)}}
J.oc.prototype={}
J.eP.prototype={}
J.eA.prototype={
A:function(a){var t=a[$.$get$wj()]
return t==null?this.fa(a):J.cB(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.ey.prototype={
c5:function(a,b){if(!!a.immutable$list)throw H.k(new P.V(b))},
cR:function(a,b){if(!!a.fixed$length)throw H.k(new P.V(b))},
h:function(a,b){this.cR(a,"add")
a.push(b)},
a5:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.k(new P.bC(a))}},
aA:function(a,b){return new H.eD(a,b,[H.N(a,0),null])},
aK:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.x(a[r])
if(r>=t)return H.u(s,r)
s[r]=q}return s.join(b)},
dk:function(a,b){return H.vp(a,b,null,H.N(a,0))},
hK:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.k(new P.bC(a))}return s},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
cm:function(a,b,c){if(b<0||b>a.length)throw H.k(P.bz(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.k(H.bB(c))
if(c<b||c>a.length)throw H.k(P.bz(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.N(a,0)])
return H.a(a.slice(b,c),[H.N(a,0)])},
ga9:function(a){if(a.length>0)return a[0]
throw H.k(H.hA())},
gbg:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.k(H.hA())},
a3:function(a,b,c,d,e){var t,s,r
this.c5(a,"setRange")
P.de(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.aY(P.bz(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.k(H.xp())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.u(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.u(d,r)
a[b+s]=d[r]}},
ax:function(a,b,c,d){return this.a3(a,b,c,d,0)},
bE:function(a,b,c,d){var t
this.c5(a,"fill range")
P.de(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aG:function(a,b,c,d){var t,s,r,q,p,o
this.cR(a,"replaceRange")
P.de(b,c,a.length,null,null,null)
d=C.c.aq(d)
if(typeof c!=="number")return c.aj()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.ax(a,b,r,d)
if(p!==0){this.a3(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a3(a,r,o,a,c)
this.ax(a,b,r,d)}},
eb:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])===!0)return!0
if(a.length!==t)throw H.k(new P.bC(a))}return!1},
hI:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.k(new P.bC(a))}return!0},
dl:function(a,b){var t
this.c5(a,"sort")
t=b==null?P.Is():b
H.k2(a,0,a.length-1,t)},
f5:function(a){return this.dl(a,null)},
b7:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.aZ(a[t],b))return t
return-1},
bm:function(a,b){return this.b7(a,b,0)},
Y:function(a,b){var t
for(t=0;t<a.length;++t)if(J.aZ(a[t],b))return!0
return!1},
gW:function(a){return a.length===0},
A:function(a){return P.jC(a,"[","]")},
a2:function(a,b){var t=H.a(a.slice(0),[H.N(a,0)])
return t},
aq:function(a){return this.a2(a,!0)},
gR:function(a){return new J.im(a,a.length,0,null,[H.N(a,0)])},
ga6:function(a){return H.eF(a)},
gm:function(a){return a.length},
sm:function(a,b){this.cR(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dJ(b,"newLength",null))
if(b<0)throw H.k(P.bz(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.cc(a,b))
if(b>=a.length||b<0)throw H.k(H.cc(a,b))
return a[b]},
i:function(a,b,c){this.c5(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.cc(a,b))
if(b>=a.length||b<0)throw H.k(H.cc(a,b))
a[b]=c},
$isaz:1,
$asaz:function(){},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
J.uH.prototype={}
J.im.prototype={
gI:function(){return this.d},
D:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.k(H.bu(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fr.prototype={
aD:function(a,b){var t
if(typeof b!=="number")throw H.k(H.bB(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcZ(b)
if(this.gcZ(a)===t)return 0
if(this.gcZ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcZ:function(a){return a===0?1/a<0:a<0},
al:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.k(new P.V(""+a+".floor()"))},
bL:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.k(new P.V(""+a+".round()"))},
ad:function(a,b,c){if(C.a.aD(b,c)>0)throw H.k(H.bB(b))
if(this.aD(a,b)<0)return b
if(this.aD(a,c)>0)return c
return a},
l:function(a){return a},
bN:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.k(P.bz(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.Z(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.aY(new P.V("Unexpected toString result: "+t))
r=J.bk(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.av("0",q)},
A:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga6:function(a){return a&0x1FFFFFFF},
dg:function(a){return-a},
V:function(a,b){if(typeof b!=="number")throw H.k(H.bB(b))
return a+b},
av:function(a,b){if(typeof b!=="number")throw H.k(H.bB(b))
return a*b},
bR:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
dr:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e5(a,b)},
ap:function(a,b){return(a|0)===a?a/b|0:this.e5(a,b)},
e5:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.k(new P.V("Result of truncating division is "+H.x(t)+": "+H.x(a)+" ~/ "+H.x(b)))},
ay:function(a,b){if(typeof b!=="number")throw H.k(H.bB(b))
if(b<0)throw H.k(H.bB(b))
return b>31?0:a<<b>>>0},
ar:function(a,b){return b>31?0:a<<b>>>0},
b1:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
hc:function(a,b){if(b<0)throw H.k(H.bB(b))
return b>31?0:a>>>b},
e4:function(a,b){return b>31?0:a>>>b},
a0:function(a,b){if(typeof b!=="number")throw H.k(H.bB(b))
return a<b},
aB:function(a,b){if(typeof b!=="number")throw H.k(H.bB(b))
return a>b},
aw:function(a,b){if(typeof b!=="number")throw H.k(H.bB(b))
return a>=b},
gac:function(a){return C.ao},
$isdx:1}
J.jF.prototype={
gac:function(a){return C.an},
$isW:1,
$isdx:1,
$isC:1}
J.jE.prototype={
gac:function(a){return C.am},
$isW:1,
$isdx:1}
J.ez.prototype={
Z:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.cc(a,b))
if(b<0)throw H.k(H.cc(a,b))
if(b>=a.length)H.aY(H.cc(a,b))
return a.charCodeAt(b)},
a4:function(a,b){if(b>=a.length)throw H.k(H.cc(a,b))
return a.charCodeAt(b)},
cO:function(a,b,c){if(c>b.length)throw H.k(P.bz(c,0,b.length,null,null))
return new H.rq(b,a,c)},
aU:function(a,b){return this.cO(a,b,0)},
ey:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.k(P.bz(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.Z(b,c+s)!==this.a4(a,s))return
return new H.k7(c,b,a)},
V:function(a,b){if(typeof b!=="string")throw H.k(P.dJ(b,null,null))
return a+b},
hH:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.ag(a,s-t)},
da:function(a,b,c){return H.z_(a,b,c)},
ix:function(a,b,c){return H.IZ(a,b,c,null)},
f6:function(a,b){if(b==null)H.aY(H.bB(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.hB&&b.gdS().exec("").length-2===0)return a.split(b.gh_())
else return this.fI(a,b)},
aG:function(a,b,c,d){var t,s
H.vK(b)
c=P.de(b,c,a.length,null,null,null)
H.vK(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fI:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.z])
for(s=J.z7(b,a),s=s.gR(s),r=0,q=1;s.D();){p=s.gI()
o=p.gdm(p)
n=p.gek(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.L(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.ag(a,r))
return t},
aI:function(a,b,c){var t
H.vK(c)
if(typeof c!=="number")return c.a0()
if(c<0||c>a.length)throw H.k(P.bz(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.zr(b,a,c)!=null},
ae:function(a,b){return this.aI(a,b,0)},
L:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.aY(H.bB(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.aY(H.bB(c))
if(typeof b!=="number")return b.a0()
if(b<0)throw H.k(P.jZ(b,null,null))
if(typeof c!=="number")return H.a6(c)
if(b>c)throw H.k(P.jZ(b,null,null))
if(c>a.length)throw H.k(P.jZ(c,null,null))
return a.substring(b,c)},
ag:function(a,b){return this.L(a,b,null)},
iE:function(a){return a.toLowerCase()},
iF:function(a){return a.toUpperCase()},
bp:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a4(t,0)===133){r=J.G6(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.Z(t,q)===133?J.uE(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
eO:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.Z(t,r)===133)s=J.uE(t,r)}else{s=J.uE(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
av:function(a,b){var t,s
if(typeof b!=="number")return H.a6(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.k(C.O)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
b7:function(a,b,c){var t
if(c<0||c>a.length)throw H.k(P.bz(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
bm:function(a,b){return this.b7(a,b,0)},
i3:function(a,b,c){var t
if(b==null)H.aY(H.bB(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.aY(P.bz(t,0,c,null,null))
if(b.cz(a,t)!=null)return t}return-1},
ev:function(a,b){return this.i3(a,b,null)},
ei:function(a,b,c){if(c>a.length)throw H.k(P.bz(c,0,a.length,null,null))
return H.IY(a,b,c)},
Y:function(a,b){return this.ei(a,b,0)},
gW:function(a){return a.length===0},
aD:function(a,b){var t
if(typeof b!=="string")throw H.k(H.bB(b))
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
gac:function(a){return C.ag},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.cc(a,b))
if(b>=a.length||b<0)throw H.k(H.cc(a,b))
return a[b]},
$isaz:1,
$asaz:function(){},
$isz:1,
$isv5:1}
H.le.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.Z(this.a,b)},
$asi3:function(){return[P.C]},
$ashG:function(){return[P.C]},
$asfw:function(){return[P.C]},
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$asn:function(){return[P.C]}}
H.t.prototype={$ast:null}
H.eB.prototype={
gR:function(a){return new H.dS(this,this.gm(this),0,null,[H.ak(this,"eB",0)])},
a5:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.S(0,s))
if(t!==this.gm(this))throw H.k(new P.bC(this))}},
gW:function(a){return this.gm(this)===0},
ga9:function(a){if(this.gm(this)===0)throw H.k(H.hA())
return this.S(0,0)},
Y:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.aZ(this.S(0,s),b))return!0
if(t!==this.gm(this))throw H.k(new P.bC(this))}return!1},
aK:function(a,b){var t,s,r,q
t=this.gm(this)
if(b.length!==0){if(t===0)return""
s=H.x(this.S(0,0))
if(t!==this.gm(this))throw H.k(new P.bC(this))
for(r=s,q=1;q<t;++q){r=r+b+H.x(this.S(0,q))
if(t!==this.gm(this))throw H.k(new P.bC(this))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<t;++q){r+=H.x(this.S(0,q))
if(t!==this.gm(this))throw H.k(new P.bC(this))}return r.charCodeAt(0)==0?r:r}},
ci:function(a,b){return this.f9(0,b)},
aA:function(a,b){return new H.eD(this,b,[H.ak(this,"eB",0),null])},
a2:function(a,b){var t,s,r
t=H.a([],[H.ak(this,"eB",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.S(0,s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
aq:function(a){return this.a2(a,!0)}}
H.pl.prototype={
gfJ:function(){var t,s
t=J.c4(this.a)
s=this.c
if(s==null||s>t)return t
return s},
ghd:function(){var t,s
t=J.c4(this.a)
s=this.b
if(J.cA(s,t))return t
return s},
gm:function(a){var t,s,r
t=J.c4(this.a)
s=this.b
if(J.vT(s,t))return 0
r=this.c
if(r==null||r>=t){if(typeof s!=="number")return H.a6(s)
return t-s}if(typeof r!=="number")return r.aj()
if(typeof s!=="number")return H.a6(s)
return r-s},
S:function(a,b){var t=J.ek(this.ghd(),b)
if(J.f_(b,0)||J.vT(t,this.gfJ()))throw H.k(P.bD(b,this,"index",null,null))
return J.vV(this.a,t)},
a2:function(a,b){var t,s,r,q,p,o,n,m,l
t=this.b
s=this.a
r=J.bk(s)
q=r.gm(s)
p=this.c
if(p!=null&&p<q)q=p
if(typeof q!=="number")return q.aj()
if(typeof t!=="number")return H.a6(t)
o=q-t
if(o<0)o=0
n=this.$ti
if(b){m=H.a([],n)
C.b.sm(m,o)}else m=H.a(new Array(o),n)
for(l=0;l<o;++l){n=r.S(s,t+l)
if(l>=m.length)return H.u(m,l)
m[l]=n
if(r.gm(s)<q)throw H.k(new P.bC(this))}return m},
aq:function(a){return this.a2(a,!0)},
fj:function(a,b,c,d){var t,s,r
t=this.b
s=J.dw(t)
if(s.a0(t,0))H.aY(P.bz(t,0,null,"start",null))
r=this.c
if(r!=null){if(r<0)H.aY(P.bz(r,0,null,"end",null))
if(s.aB(t,r))throw H.k(P.bz(t,0,r,"start",null))}}}
H.dS.prototype={
gI:function(){return this.d},
D:function(){var t,s,r,q
t=this.a
s=J.bk(t)
r=s.gm(t)
if(this.b!==r)throw H.k(new P.bC(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.S(t,q);++this.c
return!0}}
H.hJ.prototype={
gR:function(a){return new H.jK(null,J.cX(this.a),this.b,this.$ti)},
gm:function(a){return J.c4(this.a)},
gW:function(a){return J.kM(this.a)},
$asn:function(a,b){return[b]}}
H.fb.prototype={$ist:1,
$ast:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.jK.prototype={
D:function(){var t=this.b
if(t.D()){this.a=this.c.$1(t.gI())
return!0}this.a=null
return!1},
gI:function(){return this.a},
$asjD:function(a,b){return[b]}}
H.eD.prototype={
gm:function(a){return J.c4(this.a)},
S:function(a,b){return this.b.$1(J.vV(this.a,b))},
$aseB:function(a,b){return[b]},
$ast:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.ej.prototype={
gR:function(a){return new H.ke(J.cX(this.a),this.b,this.$ti)},
aA:function(a,b){return new H.hJ(this,b,[H.N(this,0),null])}}
H.ke.prototype={
D:function(){var t,s
for(t=this.a,s=this.b;t.D();)if(s.$1(t.gI())===!0)return!0
return!1},
gI:function(){return this.a.gI()}}
H.iN.prototype={
sm:function(a,b){throw H.k(new P.V("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.k(new P.V("Cannot add to a fixed-length list"))},
aG:function(a,b,c,d){throw H.k(new P.V("Cannot remove from a fixed-length list"))}}
H.pO.prototype={
i:function(a,b,c){throw H.k(new P.V("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.k(new P.V("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.k(new P.V("Cannot add to an unmodifiable list"))},
a3:function(a,b,c,d,e){throw H.k(new P.V("Cannot modify an unmodifiable list"))},
ax:function(a,b,c,d){return this.a3(a,b,c,d,0)},
aG:function(a,b,c,d){throw H.k(new P.V("Cannot remove from an unmodifiable list"))},
bE:function(a,b,c,d){throw H.k(new P.V("Cannot modify an unmodifiable list"))},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
H.i3.prototype={$asp:null,$ast:null,$asn:null,$isp:1,$ist:1,$isn:1}
H.tp.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.tq.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.r5.prototype={}
H.fI.prototype={
ea:function(a,b){if(!this.f.T(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cM()},
iw:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.am(0,a)
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
if(q===s.c)s.dK();++s.d}this.y=!1}this.cM()},
hi:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.an(a),s=0;r=this.ch,s<r.length;s+=2)if(t.T(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.u(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
iu:function(a){var t,s,r
if(this.ch==null)return
for(t=J.an(a),s=0;r=this.ch,s<r.length;s+=2)if(t.T(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.aY(new P.V("removeRange"))
P.de(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
f2:function(a,b){if(!this.r.T(0,a))return
this.db=b},
hQ:function(a,b,c){var t=J.an(b)
if(!t.T(b,0))t=t.T(b,1)&&!this.cy
else t=!0
if(t){J.fS(a,c)
return}t=this.cx
if(t==null){t=P.uN(null,null)
this.cx=t}t.aR(0,new H.r0(a,c))},
hP:function(a,b){var t
if(!this.r.T(0,a))return
t=J.an(b)
if(!t.T(b,0))t=t.T(b,1)&&!this.cy
else t=!0
if(t){this.c6()
return}t=this.cx
if(t==null){t=P.uN(null,null)
this.cx=t}t.aR(0,this.gi2())},
hR:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fP(a)
if(b!=null)P.fP(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cB(a)
s[1]=b==null?null:J.cB(b)
for(r=new P.d7(t,t.r,null,null,[null]),r.c=t.e;r.D();)J.fS(r.d,s)},
bB:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.bI(o)
p=H.cq(o)
this.hR(q,p)
if(this.db===!0){this.c6()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.gi1()
if(this.cx!=null)for(;n=this.cx,!n.gW(n);)this.cx.eH().$0()}return s},
d_:function(a){return this.b.n(0,a)},
du:function(a,b){var t=this.b
if(t.U(0,a))throw H.k(P.lN("Registry: ports must be registered only once."))
t.i(0,a,b)},
cM:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.c6()},
c6:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.b3(0)
for(t=this.b,s=t.gcf(t),s=s.gR(s);s.D();)s.gI().fB()
t.b3(0)
this.c.b3(0)
u.globalState.z.am(0,this.a)
this.dx.b3(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.u(t,p)
J.fS(q,t[p])}this.ch=null}},
gi1:function(){return this.d},
ghu:function(){return this.e}}
H.r0.prototype={
$0:function(){J.fS(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.qD.prototype={
hB:function(){var t=this.a
if(t.b===t.c)return
return t.eH()},
eM:function(){var t,s,r
t=this.hB()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.U(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gW(s)}else s=!1
else s=!1
else s=!1
if(s)H.aY(P.lN("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gW(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hF(["command","close"])
r=new H.dF(!0,new P.ks(0,null,null,null,null,null,0,[null,P.C])).aC(r)
s.toString
self.postMessage(r)}return!1}t.io()
return!0},
e_:function(){if(self.window!=null)new H.qE(this).$0()
else for(;this.eM(););},
bM:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.e_()
else try{this.e_()}catch(r){t=H.bI(r)
s=H.cq(r)
q=u.globalState.Q
p=P.hF(["command","error","msg",H.x(t)+"\n"+H.x(s)])
p=new H.dF(!0,P.ib(null,P.C)).aC(p)
q.toString
self.postMessage(p)}}}
H.qE.prototype={
$0:function(){if(!this.a.eM())return
P.xT(C.p,this)},
$S:function(){return{func:1,v:true}}}
H.eX.prototype={
io:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bB(this.b)}}
H.r4.prototype={}
H.mL.prototype={
$0:function(){H.B4(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mM.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fO(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fO(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cM()},
$S:function(){return{func:1,v:true}}}
H.qp.prototype={}
H.fJ.prototype={
be:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdQ())return
r=H.I5(b)
if(t.ghu()===s){s=J.bk(r)
switch(s.n(r,0)){case"pause":t.ea(s.n(r,1),s.n(r,2))
break
case"resume":t.iw(s.n(r,1))
break
case"add-ondone":t.hi(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.iu(s.n(r,1))
break
case"set-errors-fatal":t.f2(s.n(r,1),s.n(r,2))
break
case"ping":t.hQ(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.hP(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.am(0,s)
break}return}u.globalState.f.a.aR(0,new H.eX(t,new H.r7(this,r),"receive"))},
T:function(a,b){if(b==null)return!1
return b instanceof H.fJ&&J.aZ(this.b,b.b)},
ga6:function(a){return this.b.gcC()}}
H.r7.prototype={
$0:function(){var t=this.a.b
if(!t.gdQ())t.fv(0,this.b)},
$S:function(){return{func:1}}}
H.ig.prototype={
be:function(a,b){var t,s,r
t=P.hF(["command","message","port",this,"msg",b])
s=new H.dF(!0,P.ib(null,P.C)).aC(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
T:function(a,b){if(b==null)return!1
return b instanceof H.ig&&J.aZ(this.b,b.b)&&J.aZ(this.a,b.a)&&J.aZ(this.c,b.c)},
ga6:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.ay()
s=this.a
if(typeof s!=="number")return s.ay()
r=this.c
if(typeof r!=="number")return H.a6(r)
return(t<<16^s<<8^r)>>>0}}
H.fz.prototype={
fB:function(){this.c=!0
this.b=null},
fv:function(a,b){if(this.c)return
this.b.$1(b)},
$isGY:1,
gcC:function(){return this.a},
gdQ:function(){return this.c}}
H.pG.prototype={
fk:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aR(0,new H.eX(s,new H.pH(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dv(new H.pI(this,b),0),a)}else throw H.k(new P.V("Timer greater than 0."))}}
H.pH.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.pI.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dK.prototype={
ga6:function(a){var t=this.a
if(typeof t!=="number")return t.dj()
t=C.d.b1(t,0)^C.d.ap(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
T:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dK){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcC:function(){return this.a}}
H.dF.prototype={
aC:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.an(a)
if(!!t.$isfs)return["buffer",a]
if(!!t.$iseE)return["typed",a]
if(!!t.$isaz)return this.eZ(a)
if(!!t.$isB1){r=this.geW()
q=t.gaf(a)
q=H.ds(q,r,H.ak(q,"n",0),null)
q=P.d0(q,!0,H.ak(q,"n",0))
t=t.gcf(a)
t=H.ds(t,r,H.ak(t,"n",0),null)
return["map",q,P.d0(t,!0,H.ak(t,"n",0))]}if(!!t.$isn1)return this.f_(a)
if(!!t.$isf)this.eP(a)
if(!!t.$isGY)this.bP(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfJ)return this.f0(a)
if(!!t.$isig)return this.f1(a)
if(!!t.$isf7){p=a.$static_name
if(p==null)this.bP(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdK)return["capability",a.a]
if(!(a instanceof P.ad))this.eP(a)
return["dart",u.classIdExtractor(a),this.eY(u.classFieldsExtractor(a))]},
bP:function(a,b){throw H.k(new P.V((b==null?"Can't transmit:":b)+" "+H.x(a)))},
eP:function(a){return this.bP(a,null)},
eZ:function(a){var t=this.eX(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bP(a,"Can't serialize indexable: ")},
eX:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.aC(a[s])
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
eY:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.aC(a[t]))
return a},
f_:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bP(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.aC(a[t[r]])
if(r>=s.length)return H.u(s,r)
s[r]=q}return["js-object",t,s]},
f1:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
f0:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcC()]
return["raw sendport",a]}}
H.eW.prototype={
b4:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.k(P.dI("Bad serialized message: "+H.x(a)))
switch(C.b.ga9(a)){case"ref":if(1>=a.length)return H.u(a,1)
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
s=H.a(this.bz(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bz(r),[null])
case"mutable":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return this.bz(r)
case"const":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bz(r),[null])
s.fixed$length=Array
return s
case"map":return this.hF(a)
case"sendport":return this.hG(a)
case"raw sendport":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.hE(a)
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
this.bz(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.k("couldn't deserialize: "+H.x(a))}},
bz:function(a){var t,s,r
t=J.bk(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.a6(r)
if(!(s<r))break
t.i(a,s,this.b4(t.n(a,s)));++s}return a},
hF:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
q=P.jG()
this.b.push(q)
s=J.zy(J.w6(s,this.ghD()))
for(t=J.bk(s),p=J.bk(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.b4(p.n(r,o)))
return q},
hG:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
if(3>=t)return H.u(a,3)
q=a[3]
if(J.aZ(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.d_(q)
if(o==null)return
n=new H.fJ(o,r)}else n=new H.ig(s,q,r)
this.b.push(n)
return n},
hE:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bk(s)
p=J.bk(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.a6(n)
if(!(o<n))break
q[t.n(s,o)]=this.b4(p.n(r,o));++o}return q}}
H.li.prototype={
$aseQ:function(){},
$asjJ:function(){},
$asb1:function(){},
$isb1:1}
H.lh.prototype={
gW:function(a){return this.gm(this)===0},
A:function(a){return P.xx(this)},
i:function(a,b,c){return H.A6()},
$isb1:1,
$asb1:null}
H.h5.prototype={
gm:function(a){return this.a},
U:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.U(0,b))return
return this.cB(b)},
cB:function(a){return this.b[a]},
a5:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.cB(q))}}}
H.lj.prototype={
U:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!0
return this.b.hasOwnProperty(b)},
cB:function(a){return"__proto__"===a?this.d:this.b[a]}}
H.or.prototype={}
H.pL.prototype={
aM:function(a){var t,s,r
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
H.jS.prototype={
A:function(a){var t=this.b
if(t==null)return"NullError: "+H.x(this.a)
return"NullError: method not found: '"+H.x(t)+"' on null"}}
H.n4.prototype={
A:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.x(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.x(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.x(this.a)+")"}}
H.pN.prototype={
A:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.hi.prototype={
gaP:function(){return this.b}}
H.tr.prototype={
$1:function(a){if(!!J.an(a).$iseo)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.kv.prototype={
A:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.tb.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.tc.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.td.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.te.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.tf.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.f7.prototype={
A:function(a){return"Closure '"+H.oi(this).trim()+"'"},
giM:function(){return this},
$D:null}
H.pr.prototype={}
H.oS.prototype={
A:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fZ.prototype={
T:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fZ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga6:function(a){var t,s
t=this.c
if(t==null)s=H.eF(this.a)
else s=typeof t!=="object"?J.dH(t):H.eF(t)
t=H.eF(this.b)
if(typeof s!=="number")return s.iP()
return(s^t)>>>0},
A:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.x(this.d)+"' of "+H.oh(t)}}
H.lb.prototype={
A:function(a){return this.a}}
H.ow.prototype={
A:function(a){return"RuntimeError: "+H.x(this.a)}}
H.dZ.prototype={
A:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga6:function(a){return J.dH(this.a)},
T:function(a,b){if(b==null)return!1
return b instanceof H.dZ&&J.aZ(this.a,b.a)}}
H.w.prototype={
gm:function(a){return this.a},
gW:function(a){return this.a===0},
gaf:function(a){return new H.ng(this,[H.N(this,0)])},
gcf:function(a){return H.ds(this.gaf(this),new H.n3(this),H.N(this,0),H.N(this,1))},
U:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dE(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dE(s,b)}else return this.hW(b)},
hW:function(a){var t=this.d
if(t==null)return!1
return this.bH(this.bU(t,this.bG(a)),a)>=0},
as:function(a,b){b.a5(0,new H.n2(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bu(t,b)
return s==null?null:s.gb5()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bu(r,b)
return s==null?null:s.gb5()}else return this.hX(b)},
hX:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bU(t,this.bG(a))
r=this.bH(s,a)
if(r<0)return
return s[r].gb5()},
i:function(a,b,c){var t,s
if(typeof b==="string"){t=this.b
if(t==null){t=this.cE()
this.b=t}this.dt(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.cE()
this.c=s}this.dt(s,b,c)}else this.hZ(b,c)},
hZ:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=this.cE()
this.d=t}s=this.bG(a)
r=this.bU(t,s)
if(r==null)this.cK(t,s,[this.cF(a,b)])
else{q=this.bH(r,a)
if(q>=0)r[q].sb5(b)
else r.push(this.cF(a,b))}},
am:function(a,b){if(typeof b==="string")return this.dZ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dZ(this.c,b)
else return this.hY(b)},
hY:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bU(t,this.bG(a))
r=this.bH(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.e7(q)
return q.gb5()},
b3:function(a){if(this.a>0){this.f=null
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
if(s!==this.r)throw H.k(new P.bC(this))
t=t.c}},
dt:function(a,b,c){var t=this.bu(a,b)
if(t==null)this.cK(a,b,this.cF(b,c))
else t.sb5(c)},
dZ:function(a,b){var t
if(a==null)return
t=this.bu(a,b)
if(t==null)return
this.e7(t)
this.dH(a,b)
return t.gb5()},
cF:function(a,b){var t,s
t=new H.nf(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
e7:function(a){var t,s
t=a.gh4()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bG:function(a){return J.dH(a)&0x3ffffff},
bH:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aZ(a[s].ger(),b))return s
return-1},
A:function(a){return P.xx(this)},
bu:function(a,b){return a[b]},
bU:function(a,b){return a[b]},
cK:function(a,b,c){a[b]=c},
dH:function(a,b){delete a[b]},
dE:function(a,b){return this.bu(a,b)!=null},
cE:function(){var t=Object.create(null)
this.cK(t,"<non-identifier-key>",t)
this.dH(t,"<non-identifier-key>")
return t},
$isB1:1,
$isb1:1,
$asb1:null}
H.n3.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.n2.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eZ(function(a,b){return{func:1,args:[a,b]}},this.a,"w")}}
H.nf.prototype={
ger:function(){return this.a},
gb5:function(){return this.b},
gh4:function(){return this.d},
sb5:function(a){return this.b=a}}
H.ng.prototype={
gm:function(a){return this.a.a},
gW:function(a){return this.a.a===0},
gR:function(a){var t,s
t=this.a
s=new H.nh(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
Y:function(a,b){return this.a.U(0,b)},
a5:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.k(new P.bC(t))
s=s.c}}}
H.nh.prototype={
gI:function(){return this.d},
D:function(){var t=this.a
if(this.b!==t.r)throw H.k(new P.bC(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.t7.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.t8.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.z]}}}
H.t9.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.z]}}}
H.hB.prototype={
A:function(a){return"RegExp/"+this.a+"/"},
gdT:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.uF(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdS:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.uF(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
cO:function(a,b,c){var t
H.yK(b)
t=J.c4(b)
if(typeof t!=="number")return H.a6(t)
t=c>t
if(t)throw H.k(P.bz(c,0,J.c4(b),null,null))
return new H.qj(this,b,c)},
aU:function(a,b){return this.cO(a,b,0)},
fK:function(a,b){var t,s
t=this.gdT()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.kt(this,s)},
cz:function(a,b){var t,s
t=this.gdS()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.u(s,-1)
if(s.pop()!=null)return
return new H.kt(this,s)},
ey:function(a,b,c){if(c<0||c>b.length)throw H.k(P.bz(c,0,b.length,null,null))
return this.cz(b,c)},
$isH_:1,
$isv5:1,
gh_:function(){return this.b}}
H.kt.prototype={
gdm:function(a){return this.b.index},
gek:function(a){var t=this.b
return t.index+t[0].length},
aZ:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.u(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
$isdb:1}
H.qj.prototype={
gR:function(a){return new H.ki(this.a,this.b,this.c,null)},
$ashz:function(){return[P.db]},
$asn:function(){return[P.db]}}
H.ki.prototype={
gI:function(){return this.d},
D:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
t=J.c4(t)
if(typeof t!=="number")return H.a6(t)
if(s<=t){r=this.a.fK(this.b,this.c)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.k7.prototype={
gek:function(a){return this.a+this.c.length},
n:function(a,b){return this.aZ(b)},
aZ:function(a){if(a!==0)throw H.k(P.jZ(a,null,null))
return this.c},
$isdb:1,
gdm:function(a){return this.a}}
H.rq.prototype={
gR:function(a){return new H.rr(this.a,this.b,this.c,null)},
$asn:function(){return[P.db]}}
H.rr.prototype={
D:function(){var t,s,r,q,p,o,n
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
this.d=new H.k7(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gI:function(){return this.d}}
H.fs.prototype={
gac:function(a){return C.a7},
hp:function(a,b,c){return H.cK(a,b,c)},
ho:function(a){return this.hp(a,0,null)},
hn:function(a,b,c){var t
H.yt(a,b,c)
t=new DataView(a,b)
return t},
hm:function(a,b){return this.hn(a,b,null)},
$isfs:1,
$isbl:1,
gew:function(a){return a.byteLength}}
H.eE.prototype={
fX:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dJ(b,d,"Invalid list position"))
else throw H.k(P.bz(b,0,c,d,null))},
dz:function(a,b,c,d){if(b>>>0!==b||b>c)this.fX(a,b,c,d)},
$iseE:1,
gc3:function(a){return a.buffer},
gew:function(a){return a.byteLength}}
H.nG.prototype={
gac:function(a){return C.a8}}
H.jN.prototype={
gm:function(a){return a.length},
e3:function(a,b,c,d,e){var t,s,r
t=a.length
this.dz(a,b,t,"start")
this.dz(a,c,t,"end")
if(typeof b!=="number")return b.aB()
if(typeof c!=="number")return H.a6(c)
if(b>c)throw H.k(P.bz(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a0()
if(e<0)throw H.k(P.dI(e))
r=d.length
if(r-e<s)throw H.k(new P.df("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaG:1,
$asaG:function(){},
$isaz:1,
$asaz:function(){}}
H.hN.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aY(H.cc(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aY(H.cc(a,b))
a[b]=c},
a3:function(a,b,c,d,e){if(!!J.an(d).$ishN){this.e3(a,b,c,d,e)
return}this.dq(a,b,c,d,e)},
ax:function(a,b,c,d){return this.a3(a,b,c,d,0)}}
H.hP.prototype={
$asaG:function(){},
$asaz:function(){},
$asp:function(){return[P.W]},
$ast:function(){return[P.W]},
$asn:function(){return[P.W]},
$isp:1,
$ist:1,
$isn:1}
H.hR.prototype={
$asaG:function(){},
$asaz:function(){},
$asp:function(){return[P.W]},
$ast:function(){return[P.W]},
$asn:function(){return[P.W]}}
H.hO.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aY(H.cc(a,b))
a[b]=c},
a3:function(a,b,c,d,e){if(!!J.an(d).$ishO){this.e3(a,b,c,d,e)
return}this.dq(a,b,c,d,e)},
ax:function(a,b,c,d){return this.a3(a,b,c,d,0)},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.hQ.prototype={
$asaG:function(){},
$asaz:function(){},
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$asn:function(){return[P.C]},
$isp:1,
$ist:1,
$isn:1}
H.hS.prototype={
$asaG:function(){},
$asaz:function(){},
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$asn:function(){return[P.C]}}
H.nH.prototype={
gac:function(a){return C.a9},
$isp:1,
$asp:function(){return[P.W]},
$ist:1,
$ast:function(){return[P.W]},
$isn:1,
$asn:function(){return[P.W]}}
H.nI.prototype={
gac:function(a){return C.aa},
$isp:1,
$asp:function(){return[P.W]},
$ist:1,
$ast:function(){return[P.W]},
$isn:1,
$asn:function(){return[P.W]}}
H.nJ.prototype={
gac:function(a){return C.ab},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aY(H.cc(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nK.prototype={
gac:function(a){return C.ac},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aY(H.cc(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nL.prototype={
gac:function(a){return C.ad},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aY(H.cc(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nM.prototype={
gac:function(a){return C.ah},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aY(H.cc(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nN.prototype={
gac:function(a){return C.ai},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aY(H.cc(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.jO.prototype={
gac:function(a){return C.aj},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aY(H.cc(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.ft.prototype={
gac:function(a){return C.ak},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aY(H.cc(a,b))
return a[b]},
cm:function(a,b,c){return new Uint8Array(a.subarray(b,H.I4(b,c,a.length)))},
$isft:1,
$isdi:1,
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
P.ql.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.qk.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.qm.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.qn.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.rJ.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rK.prototype={
$2:function(a,b){this.a.$2(1,new H.hi(a,b))},
$S:function(){return{func:1,args:[,P.dX]}}}
P.rU.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.C,,]}}}
P.c9.prototype={}
P.rW.prototype={
$0:function(){var t,s,r
try{this.b.aJ(this.a.$0())}catch(r){t=H.bI(r)
s=H.cq(r)
P.yv(this.b,t,s)}},
$S:function(){return{func:1}}}
P.mr.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.ao(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.ao(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.mq.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.u(r,t)
r[t]=a
if(s===0)this.d.dD(r)}else if(t.b===0&&!this.b)this.d.ao(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.f8.prototype={}
P.kk.prototype={
cS:function(a,b){if(a==null)a=new P.fu()
if(this.a.a!==0)throw H.k(new P.df("Future already completed"))
$.ap.toString
this.ao(a,b)},
bk:function(a){return this.cS(a,null)},
gi_:function(){return this.a.a!==0},
$isf8:1,
ghN:function(){return this.a}}
P.e0.prototype={
aE:function(a,b){var t=this.a
if(t.a!==0)throw H.k(new P.df("Future already completed"))
t.dv(b)},
hs:function(a){return this.aE(a,null)},
ao:function(a,b){this.a.dw(a,b)}}
P.kx.prototype={
aE:function(a,b){var t=this.a
if(t.a!==0)throw H.k(new P.df("Future already completed"))
t.aJ(b)},
ao:function(a,b){this.a.ao(a,b)}}
P.kp.prototype={
ghg:function(){return this.b.b},
gen:function(){return(this.c&1)!==0},
ghU:function(){return(this.c&2)!==0},
gem:function(){return this.c===8},
hS:function(a){return this.b.b.dc(this.d,a)},
i5:function(a){if(this.c!==6)return!0
return this.b.b.dc(this.d,J.fR(a))},
hO:function(a){var t,s,r
t=this.e
s=J.aq(a)
r=this.b.b
if(H.fO(t,{func:1,args:[,,]}))return r.iA(t,s.gat(a),a.gaP())
else return r.dc(t,s.gat(a))},
hT:function(){return this.b.b.eK(this.d)},
gcG:function(){return this.a}}
P.bq.prototype={
gfY:function(){return this.a===2},
gcD:function(){return this.a>=4},
cd:function(a,b){var t=$.ap
if(t!==C.e){t.toString
if(b!=null)b=P.yy(b,t)}return this.cL(a,b)},
b9:function(a){return this.cd(a,null)},
cL:function(a,b){var t,s
t=new P.bq(0,$.ap,null,[null])
s=b==null?1:3
this.cp(new P.kp(null,t,s,a,b,[H.N(this,0),null]))
return t},
cg:function(a){var t,s
t=$.ap
s=new P.bq(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.N(this,0)
this.cp(new P.kp(null,s,8,a,null,[t,t]))
return s},
cp:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcD()){s.cp(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fM(null,null,t,new P.qI(this,a))}},
dX:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gcG()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcD()){p.dX(a)
return}this.a=p.a
this.c=p.c}t.a=this.bZ(a)
s=this.b
s.toString
P.fM(null,null,s,new P.qQ(t,this))}},
bY:function(){var t=this.c
this.c=null
return this.bZ(t)},
bZ:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gcG()
t.a=s}return s},
aJ:function(a){var t,s
t=this.$ti
if(H.e2(a,"$isc9",t,"$asc9"))if(H.e2(a,"$isbq",t,null))P.qL(a,this)
else P.yg(a,this)
else{s=this.bY()
this.a=4
this.c=a
P.fH(this,s)}},
dD:function(a){var t=this.bY()
this.a=4
this.c=a
P.fH(this,t)},
ao:function(a,b){var t=this.bY()
this.a=8
this.c=new P.f1(a,b)
P.fH(this,t)},
fD:function(a){return this.ao(a,null)},
dv:function(a){var t
if(H.e2(a,"$isc9",this.$ti,"$asc9")){this.fA(a)
return}this.a=1
t=this.b
t.toString
P.fM(null,null,t,new P.qK(this,a))},
fA:function(a){var t
if(H.e2(a,"$isbq",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fM(null,null,t,new P.qP(this,a))}else P.qL(a,this)
return}P.yg(a,this)},
dw:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fM(null,null,t,new P.qJ(this,a,b))},
$isc9:1,
gc_:function(){return this.a},
gh7:function(){return this.c}}
P.qI.prototype={
$0:function(){P.fH(this.a,this.b)},
$S:function(){return{func:1}}}
P.qQ.prototype={
$0:function(){P.fH(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.qM.prototype={
$1:function(a){var t=this.a
t.a=0
t.aJ(a)},
$S:function(){return{func:1,args:[,]}}}
P.qN.prototype={
$2:function(a,b){this.a.ao(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.qO.prototype={
$0:function(){this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.qK.prototype={
$0:function(){this.a.dD(this.b)},
$S:function(){return{func:1}}}
P.qP.prototype={
$0:function(){P.qL(this.b,this.a)},
$S:function(){return{func:1}}}
P.qJ.prototype={
$0:function(){this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.qT.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.hT()}catch(q){s=H.bI(q)
r=H.cq(q)
if(this.c){p=J.fR(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.f1(s,r)
o.a=!0
return}if(!!J.an(t).$isc9){if(t instanceof P.bq&&t.gc_()>=4){if(t.gc_()===8){p=this.b
p.b=t.gh7()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.b9(new P.qU(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.qU.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.qS.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.hS(this.c)}catch(r){t=H.bI(r)
s=H.cq(r)
q=this.a
q.b=new P.f1(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.qR.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.i5(t)===!0&&q.e!=null){p=this.b
p.b=q.hO(t)
p.a=!1}}catch(o){s=H.bI(o)
r=H.cq(o)
q=this.a
p=J.fR(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.f1(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.kj.prototype={}
P.dt.prototype={
aA:function(a,b){return new P.r6(b,this,[H.ak(this,"dt",0),null])},
Y:function(a,b){var t,s
t={}
s=new P.bq(0,$.ap,null,[P.cW])
t.a=null
t.a=this.aV(new P.p_(t,this,b,s),!0,new P.p0(s),s.gbi())
return s},
a5:function(a,b){var t,s
t={}
s=new P.bq(0,$.ap,null,[null])
t.a=null
t.a=this.aV(new P.p5(t,this,b,s),!0,new P.p6(s),s.gbi())
return s},
gm:function(a){var t,s
t={}
s=new P.bq(0,$.ap,null,[P.C])
t.a=0
this.aV(new P.p9(t),!0,new P.pa(t,s),s.gbi())
return s},
gW:function(a){var t,s
t={}
s=new P.bq(0,$.ap,null,[P.cW])
t.a=null
t.a=this.aV(new P.p7(t,s),!0,new P.p8(s),s.gbi())
return s},
aq:function(a){var t,s,r
t=H.ak(this,"dt",0)
s=H.a([],[t])
r=new P.bq(0,$.ap,null,[[P.p,t]])
this.aV(new P.pb(this,s),!0,new P.pc(s,r),r.gbi())
return r},
ga9:function(a){var t,s
t={}
s=new P.bq(0,$.ap,null,[H.ak(this,"dt",0)])
t.a=null
t.a=this.aV(new P.p1(t,this,s),!0,new P.p2(s),s.gbi())
return s}}
P.p_.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.yC(new P.oY(this.c,a),new P.oZ(t,s),P.ys(t.a,s))},
$S:function(){return H.eZ(function(a){return{func:1,args:[a]}},this.b,"dt")}}
P.oY.prototype={
$0:function(){return J.aZ(this.b,this.a)},
$S:function(){return{func:1}}}
P.oZ.prototype={
$1:function(a){if(a===!0)P.vH(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.cW]}}}
P.p0.prototype={
$0:function(){this.a.aJ(!1)},
$S:function(){return{func:1}}}
P.p5.prototype={
$1:function(a){P.yC(new P.p3(this.c,a),new P.p4(),P.ys(this.a.a,this.d))},
$S:function(){return H.eZ(function(a){return{func:1,args:[a]}},this.b,"dt")}}
P.p3.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.p4.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.p6.prototype={
$0:function(){this.a.aJ(null)},
$S:function(){return{func:1}}}
P.p9.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.pa.prototype={
$0:function(){this.b.aJ(this.a.a)},
$S:function(){return{func:1}}}
P.p7.prototype={
$1:function(a){P.vH(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.p8.prototype={
$0:function(){this.a.aJ(!0)},
$S:function(){return{func:1}}}
P.pb.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eZ(function(a){return{func:1,args:[a]}},this.a,"dt")}}
P.pc.prototype={
$0:function(){this.b.aJ(this.a)},
$S:function(){return{func:1}}}
P.p1.prototype={
$1:function(a){P.vH(this.a.a,this.c,a)},
$S:function(){return H.eZ(function(a){return{func:1,args:[a]}},this.b,"dt")}}
P.p2.prototype={
$0:function(){var t,s,r,q
try{r=H.hA()
throw H.k(r)}catch(q){t=H.bI(q)
s=H.cq(q)
P.yv(this.a,t,s)}},
$S:function(){return{func:1}}}
P.oX.prototype={}
P.du.prototype={
d2:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.ed()
if((t&4)===0&&(this.e&32)===0)this.dL(this.gdV())},
eD:function(a){return this.d2(a,null)},
eJ:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gW(t)}else t=!1
if(t)this.r.ck(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dL(this.gdW())}}}},
c4:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.cr()
t=this.f
return t==null?$.$get$hs():t},
cr:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.ed()
if((this.e&32)===0)this.r=null
this.f=this.dU()},
bT:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.e0(b)
else this.cq(new P.qw(b,null,[H.ak(this,"du",0)]))},
bS:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.e2(a,b)
else this.cq(new P.qy(a,b,null))},
fz:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.e1()
else this.cq(C.P)},
bW:function(){},
bX:function(){},
dU:function(){return},
cq:function(a){var t,s
t=this.r
if(t==null){t=new P.ro(null,null,0,[H.ak(this,"du",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.ck(this)}},
e0:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.dd(this.a,a)
this.e=(this.e&4294967263)>>>0
this.cs((t&4)!==0)},
e2:function(a,b){var t,s
t=this.e
s=new P.qr(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.cr()
t=this.f
if(!!J.an(t).$isc9&&t!==$.$get$hs())t.cg(s)
else s.$0()}else{s.$0()
this.cs((t&4)!==0)}},
e1:function(){var t,s
t=new P.qq(this)
this.cr()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.an(s).$isc9&&s!==$.$get$hs())s.cg(t)
else t.$0()},
dL:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.cs((t&4)!==0)},
cs:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gW(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gW(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.bW()
else this.bX()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.ck(this)},
fn:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.yy(b,t)
this.c=c},
gc_:function(){return this.e}}
P.qr.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fO(s,{func:1,args:[P.ad,P.dX]})
q=t.d
p=this.b
o=t.b
if(r)q.iB(o,p,this.c)
else q.dd(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.qq.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.eL(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.km.prototype={
gbI:function(a){return this.a},
sbI:function(a,b){return this.a=b}}
P.qw.prototype={
d3:function(a){a.e0(this.b)}}
P.qy.prototype={
d3:function(a){a.e2(this.b,this.c)},
$askm:function(){},
gat:function(a){return this.b},
gaP:function(){return this.c}}
P.qx.prototype={
d3:function(a){a.e1()},
gbI:function(a){return},
sbI:function(a,b){throw H.k(new P.df("No events after a done."))}}
P.r8.prototype={
ck:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.yX(new P.r9(this,a))
this.a=1},
ed:function(){if(this.a===1)this.a=3},
gc_:function(){return this.a}}
P.r9.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbI(r)
t.b=q
if(q==null)t.c=null
r.d3(this.b)},
$S:function(){return{func:1}}}
P.ro.prototype={
gW:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbI(0,b)
this.c=b}}}
P.rp.prototype={}
P.rM.prototype={
$0:function(){return this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.rL.prototype={
$2:function(a,b){P.I3(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dX]}}}
P.rN.prototype={
$0:function(){return this.a.aJ(this.b)},
$S:function(){return{func:1}}}
P.i7.prototype={
aV:function(a,b,c,d){return this.fG(a,d,c,!0===b)},
ex:function(a,b,c){return this.aV(a,null,b,c)},
fG:function(a,b,c,d){return P.HH(this,a,b,c,d,H.ak(this,"i7",0),H.ak(this,"i7",1))},
dM:function(a,b){b.bT(0,a)},
fV:function(a,b,c){c.bS(a,b)},
$asdt:function(a,b){return[b]}}
P.i8.prototype={
bT:function(a,b){if((this.e&2)!==0)return
this.fc(0,b)},
bS:function(a,b){if((this.e&2)!==0)return
this.fd(a,b)},
bW:function(){var t=this.y
if(t==null)return
t.eD(0)},
bX:function(){var t=this.y
if(t==null)return
t.eJ(0)},
dU:function(){var t=this.y
if(t!=null){this.y=null
return t.c4(0)}return},
fQ:function(a){this.x.dM(a,this)},
fU:function(a,b){this.x.fV(a,b,this)},
fS:function(){this.fz()},
fq:function(a,b,c,d,e,f,g){this.y=this.x.a.ex(this.gfP(),this.gfR(),this.gfT())},
$asdu:function(a,b){return[b]}}
P.r6.prototype={
dM:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.bI(q)
r=H.cq(q)
P.I2(b,s,r)
return}b.bT(0,t)}}
P.f1.prototype={
A:function(a){return H.x(this.a)},
$iseo:1,
gat:function(a){return this.a},
gaP:function(){return this.b}}
P.rI.prototype={}
P.rT.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fu()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.k(t)
r=H.k(t)
r.stack=J.cB(s)
throw r},
$S:function(){return{func:1}}}
P.rc.prototype={
eL:function(a){var t,s,r,q
try{if(C.e===$.ap){r=a.$0()
return r}r=P.yz(null,null,this,a)
return r}catch(q){t=H.bI(q)
s=H.cq(q)
r=P.kB(null,null,this,t,s)
return r}},
dd:function(a,b){var t,s,r,q
try{if(C.e===$.ap){r=a.$1(b)
return r}r=P.yB(null,null,this,a,b)
return r}catch(q){t=H.bI(q)
s=H.cq(q)
r=P.kB(null,null,this,t,s)
return r}},
iB:function(a,b,c){var t,s,r,q
try{if(C.e===$.ap){r=a.$2(b,c)
return r}r=P.yA(null,null,this,a,b,c)
return r}catch(q){t=H.bI(q)
s=H.cq(q)
r=P.kB(null,null,this,t,s)
return r}},
cQ:function(a,b){if(b)return new P.rd(this,a)
else return new P.re(this,a)},
hq:function(a,b){return new P.rf(this,a)},
n:function(a,b){return},
eK:function(a){if($.ap===C.e)return a.$0()
return P.yz(null,null,this,a)},
dc:function(a,b){if($.ap===C.e)return a.$1(b)
return P.yB(null,null,this,a,b)},
iA:function(a,b,c){if($.ap===C.e)return a.$2(b,c)
return P.yA(null,null,this,a,b,c)}}
P.rd.prototype={
$0:function(){return this.a.eL(this.b)},
$S:function(){return{func:1}}}
P.re.prototype={
$0:function(){return this.a.eK(this.b)},
$S:function(){return{func:1}}}
P.rf.prototype={
$1:function(a){return this.a.dd(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qW.prototype={
gm:function(a){return this.a},
gW:function(a){return this.a===0},
gcf:function(a){var t=H.N(this,0)
return H.ds(new P.qX(this,[t]),new P.qZ(this),t,H.N(this,1))},
U:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.fF(b)},
fF:function(a){var t=this.d
if(t==null)return!1
return this.aT(t[this.aS(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.fN(0,b)},
fN:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aS(b)]
r=this.aT(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.vE()
this.b=t}this.dB(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.vE()
this.c=s}this.dB(s,b,c)}else this.ha(b,c)},
ha:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.vE()
this.d=t}s=this.aS(a)
r=t[s]
if(r==null){P.vF(t,s,[a,b]);++this.a
this.e=null}else{q=this.aT(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
am:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bs(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bs(this.c,b)
else return this.cJ(0,b)},
cJ:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aS(b)]
r=this.aT(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
a5:function(a,b){var t,s,r,q
t=this.cu()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.k(new P.bC(this))}},
cu:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
dB:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.vF(a,b,c)},
bs:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.HJ(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aS:function(a){return J.dH(a)&0x3ffffff},
aT:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.aZ(a[s],b))return s
return-1},
$isb1:1,
$asb1:null}
P.qZ.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qX.prototype={
gm:function(a){return this.a.a},
gW:function(a){return this.a.a===0},
gR:function(a){var t=this.a
return new P.qY(t,t.cu(),0,null,this.$ti)},
Y:function(a,b){return this.a.U(0,b)},
a5:function(a,b){var t,s,r,q
t=this.a
s=t.cu()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.k(new P.bC(t))}}}
P.qY.prototype={
gI:function(){return this.d},
D:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.k(new P.bC(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.ks.prototype={
bG:function(a){return H.IQ(a)&0x3ffffff},
bH:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].ger()
if(r==null?b==null:r===b)return s}return-1}}
P.kr.prototype={
gR:function(a){var t=new P.d7(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gW:function(a){return this.a===0},
Y:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.fE(b)},
fE:function(a){var t=this.d
if(t==null)return!1
return this.aT(t[this.aS(a)],a)>=0},
d_:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.Y(0,a)?a:null
else return this.fZ(a)},
fZ:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aS(a)]
r=this.aT(s,a)
if(r<0)return
return J.fQ(s,r).gdI()},
a5:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.k(new P.bC(this))
t=t.b}},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.dA(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.dA(r,b)}else return this.aR(0,b)},
aR:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.HM()
this.d=t}s=this.aS(b)
r=t[s]
if(r==null)t[s]=[this.ct(b)]
else{if(this.aT(r,b)>=0)return!1
r.push(this.ct(b))}return!0},
am:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bs(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bs(this.c,b)
else return this.cJ(0,b)},
cJ:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aS(b)]
r=this.aT(s,b)
if(r<0)return!1
this.dC(s.splice(r,1)[0])
return!0},
b3:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
dA:function(a,b){if(a[b]!=null)return!1
a[b]=this.ct(b)
return!0},
bs:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.dC(t)
delete a[b]
return!0},
ct:function(a){var t,s
t=new P.r2(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dC:function(a){var t,s
t=a.gfC()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aS:function(a){return J.dH(a)&0x3ffffff},
aT:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aZ(a[s].gdI(),b))return s
return-1},
$iseI:1,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
P.r2.prototype={
gdI:function(){return this.a},
gfC:function(){return this.c}}
P.d7.prototype={
gI:function(){return this.d},
D:function(){var t=this.a
if(this.b!==t.r)throw H.k(new P.bC(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.r_.prototype={}
P.fq.prototype={
aA:function(a,b){return H.ds(this,b,H.ak(this,"fq",0),null)},
Y:function(a,b){var t
for(t=this.gR(this);t.D();)if(J.aZ(t.gI(),b))return!0
return!1},
a5:function(a,b){var t
for(t=this.gR(this);t.D();)b.$1(t.gI())},
a2:function(a,b){return P.d0(this,!0,H.ak(this,"fq",0))},
aq:function(a){return this.a2(a,!0)},
gm:function(a){var t,s
t=this.gR(this)
for(s=0;t.D();)++s
return s},
gW:function(a){return!this.gR(this).D()},
A:function(a){return P.uB(this,"(",")")},
$isn:1,
$asn:null}
P.hz.prototype={}
P.rZ.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return{func:1,args:[,,]}}}
P.hG.prototype={}
P.fw.prototype={$asp:null,$ast:null,$asn:null,$isp:1,$ist:1,$isn:1}
P.aN.prototype={
gR:function(a){return new H.dS(a,this.gm(a),0,null,[H.ak(a,"aN",0)])},
S:function(a,b){return this.n(a,b)},
a5:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.k(new P.bC(a))}},
gW:function(a){return this.gm(a)===0},
Y:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.aZ(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.k(new P.bC(a))}return!1},
aA:function(a,b){return new H.eD(a,b,[H.ak(a,"aN",0),null])},
dk:function(a,b){return H.vp(a,b,null,H.ak(a,"aN",0))},
a2:function(a,b){var t,s,r
t=H.a([],[H.ak(a,"aN",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
aq:function(a){return this.a2(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bE:function(a,b,c,d){var t
P.de(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a3:function(a,b,c,d,e){var t,s,r,q,p,o
P.de(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.aj()
if(typeof b!=="number")return H.a6(b)
t=c-b
if(t===0)return
if(J.f_(e,0))H.aY(P.bz(e,0,null,"skipCount",null))
if(H.e2(d,"$isp",[H.ak(a,"aN",0)],"$asp")){s=e
r=d}else{r=J.zw(d,e).a2(0,!1)
s=0}q=J.kE(s)
p=J.bk(r)
if(J.cA(q.V(s,t),p.gm(r)))throw H.k(H.xp())
if(q.a0(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.V(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.V(s,o)))},
ax:function(a,b,c,d){return this.a3(a,b,c,d,0)},
aG:function(a,b,c,d){var t,s,r,q,p
P.de(b,c,this.gm(a),null,null,null)
d=C.c.aq(d)
if(typeof c!=="number")return c.aj()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.ax(a,b,r,d)
if(q!==0){this.a3(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a3(a,r,p,a,c)
this.ax(a,b,r,d)}},
b7:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.aZ(this.n(a,t),b))return t
return-1},
bm:function(a,b){return this.b7(a,b,0)},
A:function(a){return P.jC(a,"[","]")},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
P.rz.prototype={
i:function(a,b,c){throw H.k(new P.V("Cannot modify unmodifiable map"))},
$isb1:1,
$asb1:null}
P.jJ.prototype={
n:function(a,b){return J.fQ(this.a,b)},
i:function(a,b,c){J.kJ(this.a,b,c)},
a5:function(a,b){J.vW(this.a,b)},
gW:function(a){return J.kM(this.a)},
gm:function(a){return J.c4(this.a)},
A:function(a){return J.cB(this.a)},
$isb1:1,
$asb1:null}
P.eQ.prototype={$asb1:null,$isb1:1}
P.nu.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.O+=", "
t.a=!1
t=this.b
s=t.O+=H.x(a)
t.O=s+": "
t.O+=H.x(b)},
$S:function(){return{func:1,args:[,,]}}}
P.ni.prototype={
gR:function(a){return new P.r3(this,this.c,this.d,this.b,null,this.$ti)},
a5:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.u(r,s)
b.$1(r[s])
if(t!==this.d)H.aY(new P.bC(this))}},
gW:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
S:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.a6(b)
if(0>b||b>=t)H.aY(P.bD(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.u(s,q)
return s[q]},
a2:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.hf(t)
return t},
aq:function(a){return this.a2(a,!0)},
h:function(a,b){this.aR(0,b)},
b3:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.u(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
A:function(a){return P.jC(this,"{","}")},
eH:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.k(H.hA());++this.d
s=this.a
r=s.length
if(t>=r)return H.u(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aR:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.u(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dK();++this.d},
dK:function(){var t,s,r,q
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
hf:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a3(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a3(a,0,p,r,t)
C.b.a3(a,p,p+this.c,this.a,0)
return this.c+p}},
fi:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$ast:null,
$asn:null}
P.r3.prototype={
gI:function(){return this.e},
D:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.aY(new P.bC(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.u(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.oG.prototype={
gW:function(a){return this.a===0},
as:function(a,b){var t
for(t=J.cX(b);t.D();)this.h(0,t.gI())},
a2:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.d7(this,this.r,null,null,[null]),s.c=this.e,r=0;s.D();r=p){q=s.d
p=r+1
if(r>=t.length)return H.u(t,r)
t[r]=q}return t},
aq:function(a){return this.a2(a,!0)},
aA:function(a,b){return new H.fb(this,b,[H.N(this,0),null])},
A:function(a){return P.jC(this,"{","}")},
a5:function(a,b){var t
for(t=new P.d7(this,this.r,null,null,[null]),t.c=this.e;t.D();)b.$1(t.d)},
aK:function(a,b){var t,s
t=new P.d7(this,this.r,null,null,[null])
t.c=this.e
if(!t.D())return""
if(b===""){s=""
do s+=H.x(t.d)
while(t.D())}else{s=H.x(t.d)
for(;t.D();)s=s+b+H.x(t.d)}return s.charCodeAt(0)==0?s:s},
$iseI:1,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
P.oF.prototype={}
P.l0.prototype={
ia:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.bk(b)
a1=P.de(a0,a1,t.gm(b),null,null,null)
s=$.$get$yf()
if(typeof a1!=="number")return H.a6(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.Z(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.t6(C.c.a4(b,l))
h=H.t6(C.c.a4(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.u(s,g)
f=s[g]
if(f>=0){g=C.c.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.O.length
if(e==null)e=0
if(typeof e!=="number")return e.V()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.ch("")
p.O+=C.c.L(b,q,r)
p.O+=H.hU(k)
q=l
continue}}throw H.k(new P.bQ("Invalid base64 data",b,r))}if(p!=null){t=p.O+=t.L(b,q,a1)
e=t.length
if(o>=0)P.wb(b,n,a1,o,m,e)
else{d=C.a.bR(e-1,4)+1
if(d===1)throw H.k(new P.bQ("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.O=t;++d}}t=p.O
return C.c.aG(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.wb(b,n,a1,o,m,c)
else{d=C.d.bR(c,4)
if(d===1)throw H.k(new P.bQ("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aG(b,a1,a1,d===2?"==":"=")}return b},
$ash3:function(){return[[P.p,P.C],P.z]}}
P.l1.prototype={
$ash6:function(){return[[P.p,P.C],P.z]}}
P.h3.prototype={}
P.h6.prototype={}
P.lH.prototype={
$ash3:function(){return[P.z,[P.p,P.C]]}}
P.pX.prototype={
gG:function(a){return"utf-8"}}
P.pY.prototype={
cT:function(a,b,c){var t,s,r,q
t=J.c4(a)
P.de(b,c,t,null,null,null)
s=new P.ch("")
r=new P.rB(!1,s,!0,0,0,0)
r.cT(a,b,t)
r.hJ(0,a,t)
q=s.O
return q.charCodeAt(0)==0?q:q},
hv:function(a){return this.cT(a,0,null)},
$ash6:function(){return[[P.p,P.C],P.z]}}
P.rB.prototype={
hJ:function(a,b,c){if(this.e>0)throw H.k(new P.bQ("Unfinished UTF-8 octet sequence",b,c))},
cT:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.rD(c)
p=new P.rC(this,a,b,c)
$loop$0:for(o=J.bk(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aO()
if((l&192)!==128){k=new P.bQ("Bad UTF-8 encoding 0x"+C.d.bN(l,16),a,m)
throw H.k(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.u(C.A,k)
if(t<=C.A[k]){k=new P.bQ("Overlong encoding of 0x"+C.a.bN(t,16),a,m-r-1)
throw H.k(k)}if(t>1114111){k=new P.bQ("Character outside valid Unicode range: 0x"+C.a.bN(t,16),a,m-r-1)
throw H.k(k)}if(!this.c||t!==65279)n.O+=H.hU(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cA(j,0)){this.c=!1
if(typeof j!=="number")return H.a6(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dw(l)
if(g.a0(l,0)){g=new P.bQ("Negative UTF-8 code unit: -0x"+J.zA(g.dg(l),16),a,h-1)
throw H.k(g)}else{if(typeof l!=="number")return l.aO()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bQ("Bad UTF-8 encoding 0x"+C.d.bN(l,16),a,h-1)
throw H.k(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.rD.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.bk(a),r=b;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aO()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.C,args:[,P.C]}}}
P.rC.prototype={
$2:function(a,b){this.a.b.O+=P.ph(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.C,P.C]}}}
P.cW.prototype={}
P.bK.prototype={}
P.e5.prototype={
T:function(a,b){if(b==null)return!1
if(!(b instanceof P.e5))return!1
return this.a===b.a&&this.b===b.b},
aD:function(a,b){return C.a.aD(this.a,b.ghe())},
ga6:function(a){var t=this.a
return(t^C.a.b1(t,30))&1073741823},
A:function(a){var t,s,r,q,p,o,n
t=P.A9(H.xD(this))
s=P.iu(H.vb(this))
r=P.iu(H.va(this))
q=P.iu(H.Gw(this))
p=P.iu(H.Gy(this))
o=P.iu(H.Gz(this))
n=P.Aa(H.Gx(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.A8(C.a.V(this.a,b.giS()),this.b)},
gi6:function(){return this.a},
ds:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.k(P.dI(this.gi6()))},
$isbK:1,
$asbK:function(){return[P.e5]},
ghe:function(){return this.a}}
P.W.prototype={$isbK:1,
$asbK:function(){return[P.dx]}}
P.dN.prototype={
V:function(a,b){return new P.dN(this.a+b.gbt())},
av:function(a,b){if(typeof b!=="number")return H.a6(b)
return new P.dN(C.d.bL(this.a*b))},
a0:function(a,b){return C.a.a0(this.a,b.gbt())},
aB:function(a,b){return C.a.aB(this.a,b.gbt())},
aw:function(a,b){return C.a.aw(this.a,b.gbt())},
T:function(a,b){if(b==null)return!1
if(!(b instanceof P.dN))return!1
return this.a===b.a},
ga6:function(a){return this.a&0x1FFFFFFF},
aD:function(a,b){return C.a.aD(this.a,b.gbt())},
A:function(a){var t,s,r,q,p
t=new P.lF()
s=this.a
if(s<0)return"-"+new P.dN(0-s).A(0)
r=t.$1(C.a.ap(s,6e7)%60)
q=t.$1(C.a.ap(s,1e6)%60)
p=new P.lE().$1(s%1e6)
return""+C.a.ap(s,36e8)+":"+H.x(r)+":"+H.x(q)+"."+H.x(p)},
dg:function(a){return new P.dN(0-this.a)},
$isbK:1,
$asbK:function(){return[P.dN]},
gbt:function(){return this.a}}
P.lE.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.z,args:[P.C]}}}
P.lF.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.z,args:[P.C]}}}
P.eo.prototype={
gaP:function(){return H.cq(this.$thrownJsError)}}
P.fu.prototype={
A:function(a){return"Throw of null."}}
P.cY.prototype={
gcw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcv:function(){return""},
A:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.x(t)
q=this.gcw()+s+r
if(!this.a)return q
p=this.gcv()
o=P.wt(this.b)
return q+p+": "+H.x(o)},
gG:function(a){return this.c}}
P.eH.prototype={
gcw:function(){return"RangeError"},
gcv:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.x(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.x(t)
else{if(typeof r!=="number")return r.aB()
if(r>t)s=": Not in range "+H.x(t)+".."+H.x(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.x(t)}}return s}}
P.mH.prototype={
gcw:function(){return"RangeError"},
gcv:function(){if(J.f_(this.b,0))return": index must not be negative"
var t=this.f
if(J.aZ(t,0))return": no indices are valid"
return": index should be less than "+H.x(t)},
gm:function(a){return this.f}}
P.V.prototype={
A:function(a){return"Unsupported operation: "+this.a}}
P.eO.prototype={
A:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.x(t):"UnimplementedError"}}
P.df.prototype={
A:function(a){return"Bad state: "+this.a}}
P.bC.prototype={
A:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.x(P.wt(t))+"."}}
P.o_.prototype={
A:function(a){return"Out of Memory"},
gaP:function(){return},
$iseo:1}
P.k6.prototype={
A:function(a){return"Stack Overflow"},
gaP:function(){return},
$iseo:1}
P.lw.prototype={
A:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.x(t)+"' during its initialization"}}
P.qH.prototype={
A:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.x(t)}}
P.bQ.prototype={
A:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.x(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a0()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.L(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.a6(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a4(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.x(r-o+1)+")\n"):s+(" (at character "+H.x(r+1)+")\n")
k=q.length
for(m=r;m<q.length;++m){l=C.c.Z(q,m)
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
g=""}f=C.c.L(q,i,j)
return s+h+f+g+"\n"+C.c.av(" ",r-i+h.length)+"^\n"}}
P.lO.prototype={
A:function(a){return"Expando:"+H.x(this.a)},
n:function(a,b){var t,s
t=this.bV
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.aY(P.dJ(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.vc(b,"expando$values")
return s==null?null:H.vc(s,t)},
i:function(a,b,c){var t,s
t=this.bV
if(typeof t!=="string")t.set(b,c)
else{s=H.vc(b,"expando$values")
if(s==null){s=new P.ad()
H.xH(b,"expando$values",s)}H.xH(s,t,c)}},
gG:function(a){return this.a}}
P.C.prototype={$isbK:1,
$asbK:function(){return[P.dx]}}
P.n.prototype={
aA:function(a,b){return H.ds(this,b,H.ak(this,"n",0),null)},
ci:function(a,b){return new H.ej(this,b,[H.ak(this,"n",0)])},
Y:function(a,b){var t
for(t=this.gR(this);t.D();)if(J.aZ(t.gI(),b))return!0
return!1},
a5:function(a,b){var t
for(t=this.gR(this);t.D();)b.$1(t.gI())},
aK:function(a,b){var t,s
t=this.gR(this)
if(!t.D())return""
if(b===""){s=""
do s+=H.x(t.gI())
while(t.D())}else{s=H.x(t.gI())
for(;t.D();)s=s+b+H.x(t.gI())}return s.charCodeAt(0)==0?s:s},
a2:function(a,b){return P.d0(this,!0,H.ak(this,"n",0))},
aq:function(a){return this.a2(a,!0)},
gm:function(a){var t,s
t=this.gR(this)
for(s=0;t.D();)++s
return s},
gW:function(a){return!this.gR(this).D()},
gbh:function(a){var t,s
t=this.gR(this)
if(!t.D())throw H.k(H.hA())
s=t.gI()
if(t.D())throw H.k(H.G5())
return s},
S:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.zD("index"))
if(b<0)H.aY(P.bz(b,0,null,"index",null))
for(t=this.gR(this),s=0;t.D();){r=t.gI()
if(b===s)return r;++s}throw H.k(P.bD(b,this,"index",null,s))},
A:function(a){return P.uB(this,"(",")")},
$asn:null}
P.jD.prototype={}
P.p.prototype={$asp:null,$ist:1,$ast:null,$isn:1,$asn:null}
P.b1.prototype={$asb1:null}
P.cG.prototype={
ga6:function(a){return P.ad.prototype.ga6.call(this,this)},
A:function(a){return"null"}}
P.dx.prototype={$isbK:1,
$asbK:function(){return[P.dx]}}
P.ad.prototype={constructor:P.ad,$isad:1,
T:function(a,b){return this===b},
ga6:function(a){return H.eF(this)},
A:function(a){return H.oh(this)},
gac:function(a){return new H.dZ(H.kG(this),null)},
toString:function(){return this.A(this)}}
P.db.prototype={}
P.eI.prototype={}
P.dX.prototype={}
P.z.prototype={$isbK:1,
$asbK:function(){return[P.z]},
$isv5:1}
P.ch.prototype={
gm:function(a){return this.O.length},
gW:function(a){return this.O.length===0},
A:function(a){var t=this.O
return t.charCodeAt(0)==0?t:t},
gO:function(){return this.O}}
P.eR.prototype={}
P.pT.prototype={
$2:function(a,b){var t,s,r,q
t=J.bk(b)
s=t.bm(b,"=")
if(s===-1){if(!t.T(b,""))J.kJ(a,P.rA(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.L(b,0,s)
q=C.c.ag(b,s+1)
t=this.a
J.kJ(a,P.rA(r,0,r.length,t,!0),P.rA(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.pQ.prototype={
$2:function(a,b){throw H.k(new P.bQ("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.z,P.C]}}}
P.pR.prototype={
$2:function(a,b){throw H.k(new P.bQ("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.z],opt:[,]}}}
P.pS.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.fx(C.c.L(this.a,a,b),16,null)
s=J.dw(t)
if(s.a0(t,0)||s.aB(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.C,args:[P.C,P.C]}}}
P.ky.prototype={
geS:function(){return this.b},
gcX:function(a){var t=this.c
if(t==null)return""
if(C.c.ae(t,"["))return C.c.L(t,1,t.length-1)
return t},
gd4:function(a){var t=this.d
if(t==null)return P.yl(this.a)
return t},
gd7:function(a){var t=this.f
return t==null?"":t},
gel:function(){var t=this.r
return t==null?"":t},
gd8:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.z
s=new P.eQ(P.y8(t==null?"":t,C.o),[s,s])
this.Q=s
t=s}return t},
geo:function(){return this.c!=null},
geq:function(){return this.f!=null},
gep:function(){return this.r!=null},
A:function(a){var t=this.y
if(t==null){t=this.dP()
this.y=t}return t},
dP:function(){var t,s,r,q
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
T:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.an(b)
if(!!t.$iseR){if(this.a===b.gdh())if(this.c!=null===b.geo()){s=this.b
r=b.geS()
if(s==null?r==null:s===r){s=this.gcX(this)
r=t.gcX(b)
if(s==null?r==null:s===r)if(J.aZ(this.gd4(this),t.gd4(b)))if(J.aZ(this.e,t.geC(b))){s=this.f
r=s==null
if(!r===b.geq()){if(r)s=""
if(s===t.gd7(b)){t=this.r
s=t==null
if(!s===b.gep()){if(s)t=""
t=t===b.gel()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga6:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dP()
this.y=t}t=C.c.ga6(t)
this.z=t}return t},
$iseR:1,
gdh:function(){return this.a},
geC:function(a){return this.e}}
P.rX.prototype={
$1:function(a){throw H.k(new P.bQ("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.pP.prototype={
geQ:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.u(t,0)
s=this.a
t=t[0]+1
r=J.bk(s)
q=r.b7(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fK(s,o,p,C.l,!1)
if(n==null)n=r.L(s,o,p)
p=q}else n=null
m=P.fK(s,t,p,C.I,!1)
t=new P.qv(this,"data",null,null,null,m==null?r.L(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
A:function(a){var t,s
t=this.b
if(0>=t.length)return H.u(t,0)
s=this.a
return t[0]===-1?"data:"+H.x(s):s}}
P.rQ.prototype={
$1:function(a){return new Uint8Array(H.cI(96))},
$S:function(){return{func:1,args:[,]}}}
P.rP.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.u(t,a)
t=t[a]
J.zd(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.di,args:[,,]}}}
P.rR.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.dk(a),r=0;r<t;++r)s.i(a,C.c.a4(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.di,P.z,P.C]}}}
P.rS.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a4(b,0),s=C.c.a4(b,1),r=J.dk(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.di,P.z,P.C]}}}
P.rn.prototype={
geo:function(){return this.c>0},
geq:function(){var t=this.f
if(typeof t!=="number")return t.a0()
return t<this.r},
gep:function(){return this.r<this.a.length},
gdh:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.ae(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.ae(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.ae(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.ae(this.a,"package")){this.x="package"
t="package"}else{t=C.c.L(this.a,0,t)
this.x=t}return t},
geS:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.L(this.a,s,t-1):""},
gcX:function(a){var t=this.c
return t>0?C.c.L(this.a,t,this.d):""},
gd4:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.V()
s=this.e
if(typeof s!=="number")return H.a6(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.V()
return H.fx(C.c.L(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.ae(this.a,"http"))return 80
if(t===5&&C.c.ae(this.a,"https"))return 443
return 0},
geC:function(a){return C.c.L(this.a,this.e,this.f)},
gd7:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a0()
return t<s?C.c.L(this.a,t+1,s):""},
gel:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.ag(s,t+1):""},
gd8:function(){var t=this.f
if(typeof t!=="number")return t.a0()
if(t>=this.r)return C.a6
t=P.z
return new P.eQ(P.y8(this.gd7(this),C.o),[t,t])},
ga6:function(a){var t=this.y
if(t==null){t=C.c.ga6(this.a)
this.y=t}return t},
T:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.an(b)
if(!!t.$iseR)return this.a===t.A(b)
return!1},
A:function(a){return this.a},
$iseR:1}
P.qv.prototype={}
W.aL.prototype={}
W.f0.prototype={
A:function(a){return String(a)},
$isf0:1,
$isf:1,
ga7:function(a){return a.href},
sai:function(a,b){return a.type=b},
sa7:function(a,b){return a.href=b}}
W.kR.prototype={
A:function(a){return String(a)},
$isf:1,
ga7:function(a){return a.href},
sa7:function(a,b){return a.href=b}}
W.f3.prototype={$isf3:1,$iscC:1,$isaf:1,$isad:1}
W.cP.prototype={$isad:1}
W.kZ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.cP]},
$ist:1,
$ast:function(){return[W.cP]},
$isn:1,
$asn:function(){return[W.cP]},
$isaG:1,
$asaG:function(){return[W.cP]},
$isaz:1,
$asaz:function(){return[W.cP]}}
W.hc.prototype={
$asp:function(){return[W.cP]},
$ast:function(){return[W.cP]},
$asn:function(){return[W.cP]},
$isp:1,
$ist:1,
$isn:1}
W.hf.prototype={
$asp:function(){return[W.cP]},
$ast:function(){return[W.cP]},
$asn:function(){return[W.cP]},
$isp:1,
$ist:1,
$isn:1}
W.l2.prototype={
ga7:function(a){return a.href},
sa7:function(a,b){return a.href=b}}
W.f5.prototype={$isf5:1}
W.f6.prototype={$isf6:1,$isf:1}
W.h2.prototype={$ish2:1,
gG:function(a){return a.name},
gaH:function(a){return a.value},
sai:function(a,b){return a.type=b}}
W.em.prototype={$isf:1,
gm:function(a){return a.length}}
W.lc.prototype={
au:function(a,b){return a.get(b)}}
W.lg.prototype={$isf:1}
W.iq.prototype={
cV:function(a,b){return typeof console!="undefined"?console.error(b):null},
aZ:function(a){return typeof console!="undefined"?console.group(a):null},
es:function(a){return typeof console!="undefined"?console.info(a):null},
iI:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.h7.prototype={
gG:function(a){return a.name}}
W.ll.prototype={
au:function(a,b){if(b!=null)return a.get(P.Iq(b,null))
return a.get()},
bq:function(a){return this.au(a,null)}}
W.lo.prototype={
gaQ:function(a){return a.style}}
W.lp.prototype={
ga7:function(a){return a.href}}
W.h8.prototype={
gaQ:function(a){return a.style}}
W.h9.prototype={
gG:function(a){return a.name}}
W.lq.prototype={
gaQ:function(a){return a.style}}
W.bP.prototype={$isbP:1,$isad:1}
W.f9.prototype={
bQ:function(a,b){var t=this.fO(a,b)
return t!=null?t:""},
fO:function(a,b){if(W.A7(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.Ab()+b)},
K:function(a,b){return a.item(b)},
gbl:function(a){return a.content},
gbA:function(a){return a.display},
sbA:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iU.prototype={}
W.qt.prototype={
bQ:function(a,b){var t=this.b
return J.zp(t.ga9(t),b)},
hb:function(a,b){var t
for(t=this.a,t=new H.dS(t,t.gm(t),0,null,[H.N(t,0)]);t.D();)t.d.style[a]=b},
sbA:function(a,b){this.hb("display",b)},
fo:function(a){var t=P.d0(this.a,!0,null)
this.b=new H.eD(t,new W.qu(),[H.N(t,0),null])}}
W.jT.prototype={}
W.qu.prototype={
$1:function(a){return J.tv(a)},
$S:function(){return{func:1,args:[,]}}}
W.is.prototype={
gbl:function(a){return this.bQ(a,"content")},
gbA:function(a){return this.bQ(a,"display")}}
W.lr.prototype={
gaQ:function(a){return a.style}}
W.ls.prototype={
gaQ:function(a){return a.style}}
W.lx.prototype={
gcW:function(a){return a.files}}
W.fa.prototype={$isfa:1,$isad:1}
W.it.prototype={
c1:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
K:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.en.prototype={$isen:1}
W.iv.prototype={$isf:1}
W.iw.prototype={
gG:function(a){return a.name}}
W.lA.prototype={
gG:function(a){var t=a.name
if(P.wq()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.wq()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
A:function(a){return String(a)}}
W.ix.prototype={
A:function(a){return"Rectangle ("+H.x(a.left)+", "+H.x(a.top)+") "+H.x(this.gbd(a))+" x "+H.x(this.gb6(a))},
T:function(a,b){var t
if(b==null)return!1
t=J.an(b)
if(!t.$isbW)return!1
return a.left===t.gc7(b)&&a.top===t.gce(b)&&this.gbd(a)===t.gbd(b)&&this.gb6(a)===t.gb6(b)},
ga6:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gbd(a)
q=this.gb6(a)
return W.yj(W.eY(W.eY(W.eY(W.eY(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gb6:function(a){return a.height},
gc7:function(a){return a.left},
gce:function(a){return a.top},
gbd:function(a){return a.width},
$isbW:1,
$asbW:function(){}}
W.iy.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[P.z]},
$ist:1,
$ast:function(){return[P.z]},
$isn:1,
$asn:function(){return[P.z]},
$isaG:1,
$asaG:function(){return[P.z]},
$isaz:1,
$asaz:function(){return[P.z]}}
W.iV.prototype={
$asp:function(){return[P.z]},
$ast:function(){return[P.z]},
$asn:function(){return[P.z]},
$isp:1,
$ist:1,
$isn:1}
W.je.prototype={
$asp:function(){return[P.z]},
$ast:function(){return[P.z]},
$asn:function(){return[P.z]},
$isp:1,
$ist:1,
$isn:1}
W.iz.prototype={
K:function(a,b){return a.item(b)}}
W.iA.prototype={
h:function(a,b){return a.add(b)},
Y:function(a,b){return a.contains(b)},
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.ko.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot modify list"))},
sm:function(a,b){throw H.k(new P.V("Cannot modify list"))},
gaQ:function(a){return W.HG(this)},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
W.cC.prototype={
gec:function(a){return new W.qB(a)},
gef:function(a){return new W.qC(a)},
A:function(a){return a.localName},
eu:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
aF:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.ws
if(t==null){t=H.a([],[W.ed])
s=new W.jR(t)
t.push(W.yh(null))
t.push(W.yk())
$.ws=s
d=s}else d=t
t=$.wr
if(t==null){t=new W.kz(d)
$.wr=t
c=t}else{t.a=d
c=t}}if($.e6==null){t=document
s=t.implementation.createHTMLDocument("")
$.e6=s
$.tM=s.createRange()
s=$.e6
s.toString
r=s.createElement("base")
J.zu(r,t.baseURI)
$.e6.head.appendChild(r)}t=$.e6
if(t.body==null){t.toString
s=t.createElement("body")
t.body=s}t=$.e6
if(!!this.$isf6)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
$.e6.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.Y(C.a2,a.tagName)){$.tM.selectNodeContents(q)
p=$.tM.createContextualFragment(b)}else{q.innerHTML=b
p=$.e6.createDocumentFragment()
for(;t=q.firstChild,t!=null;)p.appendChild(t)}t=$.e6.body
if(q==null?t!=null:q!==t)J.zs(q)
c.cj(p)
document.adoptNode(p)
return p},
hx:function(a,b,c){return this.aF(a,b,c,null)},
cl:function(a,b,c,d){a.textContent=null
a.appendChild(this.aF(a,b,c,d))},
di:function(a,b){return this.cl(a,b,null,null)},
eg:function(a){return a.click()},
gd0:function(a){return new W.e1(a,"change",!1,[W.P])},
geA:function(a){return new W.e1(a,"click",!1,[W.uX])},
$iscC:1,
$isaf:1,
$isad:1,
$isf:1,
gaQ:function(a){return a.style},
gdR:function(a){return a.namespaceURI},
giC:function(a){return a.tagName}}
W.rV.prototype={
$1:function(a){return!!J.an(a).$iscC},
$S:function(){return{func:1,args:[,]}}}
W.lG.prototype={
gG:function(a){return a.name},
sai:function(a,b){return a.type=b}}
W.hb.prototype={
gG:function(a){return a.name}}
W.lM.prototype={
gat:function(a){return a.error}}
W.P.prototype={$isP:1,$isad:1}
W.aH.prototype={
hj:function(a,b,c,d){if(c!=null)this.fw(a,b,c,!1)},
iv:function(a,b,c,d){if(c!=null)this.h6(a,b,c,!1)},
fw:function(a,b,c,d){return a.addEventListener(b,H.dv(c,1),!1)},
h6:function(a,b,c,d){return a.removeEventListener(b,H.dv(c,1),!1)}}
W.me.prototype={
gG:function(a){return a.name}}
W.cj.prototype={$iscj:1,$isad:1,
gG:function(a){return a.name}}
W.fj.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isfj:1,
$isaG:1,
$asaG:function(){return[W.cj]},
$isaz:1,
$asaz:function(){return[W.cj]},
$isp:1,
$asp:function(){return[W.cj]},
$ist:1,
$ast:function(){return[W.cj]},
$isn:1,
$asn:function(){return[W.cj]}}
W.iW.prototype={
$asp:function(){return[W.cj]},
$ast:function(){return[W.cj]},
$asn:function(){return[W.cj]},
$isp:1,
$ist:1,
$isn:1}
W.jf.prototype={
$asp:function(){return[W.cj]},
$ast:function(){return[W.cj]},
$asn:function(){return[W.cj]},
$isp:1,
$ist:1,
$isn:1}
W.iM.prototype={
geI:function(a){var t=a.result
if(!!J.an(t).$isbl)return H.cK(t,0,null)
return t},
gat:function(a){return a.error}}
W.mi.prototype={
gG:function(a){return a.name}}
W.mj.prototype={
gat:function(a){return a.error},
gm:function(a){return a.length}}
W.ml.prototype={
gaQ:function(a){return a.style},
gbc:function(a){return a.weight}}
W.mm.prototype={
h:function(a,b){return a.add(b)},
iR:function(a,b,c){return a.forEach(H.dv(b,3),c)},
a5:function(a,b){b=H.dv(b,3)
return a.forEach(b)}}
W.mo.prototype={
au:function(a,b){return a.get(b)}}
W.iQ.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.ct.prototype={$isct:1,$isad:1}
W.mx.prototype={
gm:function(a){return a.length}}
W.fk.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.af]},
$ist:1,
$ast:function(){return[W.af]},
$isn:1,
$asn:function(){return[W.af]},
$isaG:1,
$asaG:function(){return[W.af]},
$isaz:1,
$asaz:function(){return[W.af]}}
W.iX.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$ist:1,
$isn:1}
W.jg.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$ist:1,
$isn:1}
W.iS.prototype={
K:function(a,b){return a.item(b)}}
W.eb.prototype={
j_:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
ic:function(a,b,c,d){return a.open(b,c,d)},
giy:function(a){return W.I6(a.response)},
be:function(a,b){return a.send(b)},
$iseb:1,
$isad:1,
giz:function(a){return a.responseText}}
W.mA.prototype={
$1:function(a){return J.zj(a)},
$S:function(){return{func:1,args:[W.eb]}}}
W.mB.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.aw()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.aE(0,t)
else p.bk(a)},
$S:function(){return{func:1,args:[,]}}}
W.ht.prototype={}
W.mD.prototype={
gG:function(a){return a.name}}
W.hu.prototype={$ishu:1}
W.fm.prototype={$isfm:1,$iscC:1,$isaf:1,$isad:1,
aE:function(a,b){return a.complete.$1(b)}}
W.mJ.prototype={$iscC:1,$isf:1,$isaf:1,
gee:function(a){return a.checked},
gcW:function(a){return a.files},
gG:function(a){return a.name},
gaH:function(a){return a.value},
giG:function(a){return a.valueAsNumber},
shh:function(a,b){return a.accept=b},
sez:function(a,b){return a.multiple=b},
sai:function(a,b){return a.type=b}}
W.n6.prototype={
gG:function(a){return a.name}}
W.n8.prototype={
gaH:function(a){return a.value}}
W.hD.prototype={
h:function(a,b){return a.add(b)}}
W.hE.prototype={$ishE:1,
ga7:function(a){return a.href},
sa7:function(a,b){return a.href=b},
sai:function(a,b){return a.type=b}}
W.no.prototype={
A:function(a){return String(a)},
ga7:function(a){return a.href}}
W.nt.prototype={
gG:function(a){return a.name}}
W.hL.prototype={
gat:function(a){return a.error}}
W.jL.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.nx.prototype={
sai:function(a,b){return a.type=b}}
W.ny.prototype={
gee:function(a){return a.checked},
sai:function(a,b){return a.type=b}}
W.nz.prototype={
gbl:function(a){return a.content},
gG:function(a){return a.name}}
W.nA.prototype={
gaH:function(a){return a.value}}
W.nB.prototype={
iN:function(a,b,c){return a.send(b,c)},
be:function(a,b){return a.send(b)}}
W.hM.prototype={
gG:function(a){return a.name}}
W.cv.prototype={$iscv:1,$isad:1}
W.jM.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaG:1,
$asaG:function(){return[W.cv]},
$isaz:1,
$asaz:function(){return[W.cv]},
$isp:1,
$asp:function(){return[W.cv]},
$ist:1,
$ast:function(){return[W.cv]},
$isn:1,
$asn:function(){return[W.cv]}}
W.j6.prototype={
$asp:function(){return[W.cv]},
$ast:function(){return[W.cv]},
$asn:function(){return[W.cv]},
$isp:1,
$ist:1,
$isn:1}
W.jq.prototype={
$asp:function(){return[W.cv]},
$ast:function(){return[W.cv]},
$asn:function(){return[W.cv]},
$isp:1,
$ist:1,
$isn:1}
W.nO.prototype={$isf:1}
W.nP.prototype={
gG:function(a){return a.name}}
W.d6.prototype={
gbh:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.k(new P.df("No elements"))
if(s>1)throw H.k(new P.df("More than one element"))
return t.firstChild},
h:function(a,b){this.a.appendChild(b)},
as:function(a,b){var t,s,r,q
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
i:function(a,b,c){var t,s
t=this.a
s=t.childNodes
if(b>>>0!==b||b>=s.length)return H.u(s,b)
t.replaceChild(c,s[b])},
gR:function(a){var t=this.a.childNodes
return new W.iO(t,t.length,-1,null,[H.ak(t,"bv",0)])},
a3:function(a,b,c,d,e){throw H.k(new P.V("Cannot setRange on Node list"))},
ax:function(a,b,c,d){return this.a3(a,b,c,d,0)},
bE:function(a,b,c,d){throw H.k(new P.V("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
sm:function(a,b){throw H.k(new P.V("Cannot set length on immutable List."))},
n:function(a,b){var t=this.a.childNodes
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
$ashG:function(){return[W.af]},
$asfw:function(){return[W.af]},
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$asn:function(){return[W.af]}}
W.af.prototype={
gi9:function(a){return new W.d6(a)},
it:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
A:function(a){var t=a.nodeValue
return t==null?this.f8(a):t},
Y:function(a,b){return a.contains(b)},
$isaf:1,
$isad:1,
gc9:function(a){return a.parentNode},
gd5:function(a){return a.previousSibling}}
W.jP.prototype={
d6:function(a){return a.previousNode()}}
W.jQ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.af]},
$ist:1,
$ast:function(){return[W.af]},
$isn:1,
$asn:function(){return[W.af]},
$isaG:1,
$asaG:function(){return[W.af]},
$isaz:1,
$asaz:function(){return[W.af]}}
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
W.nU.prototype={
sai:function(a,b){return a.type=b}}
W.nV.prototype={
gG:function(a){return a.name},
sai:function(a,b){return a.type=b}}
W.nZ.prototype={
gaH:function(a){return a.value}}
W.o0.prototype={
gG:function(a){return a.name},
gaH:function(a){return a.value}}
W.o4.prototype={
gG:function(a){return a.name},
gaH:function(a){return a.value}}
W.o6.prototype={$isf:1}
W.ee.prototype={
gG:function(a){return a.name}}
W.ob.prototype={
gm:function(a){return a.length}}
W.cl.prototype={
K:function(a,b){return a.item(b)},
$iscl:1,
$isad:1,
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.jY.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cl]},
$ist:1,
$ast:function(){return[W.cl]},
$isn:1,
$asn:function(){return[W.cl]},
$isaG:1,
$asaG:function(){return[W.cl]},
$isaz:1,
$asaz:function(){return[W.cl]}}
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
W.og.prototype={
be:function(a,b){return a.send(b)}}
W.ok.prototype={
gaH:function(a){return a.value}}
W.k_.prototype={
be:function(a,b){return a.send(b)}}
W.k0.prototype={
sai:function(a,b){return a.type=b}}
W.fA.prototype={$isfA:1,$iscC:1,$isaf:1,$isad:1,
sai:function(a,b){return a.type=b}}
W.k1.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gG:function(a){return a.name},
gaH:function(a){return a.value},
sez:function(a,b){return a.multiple=b}}
W.oE.prototype={
gG:function(a){return a.name}}
W.oH.prototype={$isf:1}
W.oI.prototype={
gG:function(a){return a.name}}
W.oJ.prototype={
gG:function(a){return a.name}}
W.cw.prototype={$iscw:1,$isad:1}
W.k3.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cw]},
$ist:1,
$ast:function(){return[W.cw]},
$isn:1,
$asn:function(){return[W.cw]},
$isaG:1,
$asaG:function(){return[W.cw]},
$isaz:1,
$asaz:function(){return[W.cw]}}
W.hd.prototype={
$asp:function(){return[W.cw]},
$ast:function(){return[W.cw]},
$asn:function(){return[W.cw]},
$isp:1,
$ist:1,
$isn:1}
W.hg.prototype={
$asp:function(){return[W.cw]},
$ast:function(){return[W.cw]},
$asn:function(){return[W.cw]},
$isp:1,
$ist:1,
$isn:1}
W.oM.prototype={
sai:function(a,b){return a.type=b}}
W.hY.prototype={$ishY:1}
W.cx.prototype={$iscx:1,$isad:1,
gbc:function(a){return a.weight}}
W.k4.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cx]},
$ist:1,
$ast:function(){return[W.cx]},
$isn:1,
$asn:function(){return[W.cx]},
$isaG:1,
$asaG:function(){return[W.cx]},
$isaz:1,
$asaz:function(){return[W.cx]}}
W.j9.prototype={
$asp:function(){return[W.cx]},
$ast:function(){return[W.cx]},
$asn:function(){return[W.cx]},
$isp:1,
$ist:1,
$isn:1}
W.jt.prototype={
$asp:function(){return[W.cx]},
$ast:function(){return[W.cx]},
$asn:function(){return[W.cx]},
$isp:1,
$ist:1,
$isn:1}
W.fB.prototype={$isfB:1,$isad:1}
W.oO.prototype={
gat:function(a){return a.error}}
W.cn.prototype={
K:function(a,b){return a.item(b)},
$iscn:1,
$isad:1,
gm:function(a){return a.length}}
W.oP.prototype={
gG:function(a){return a.name}}
W.oQ.prototype={
gG:function(a){return a.name}}
W.oW.prototype={
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
a5:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gm:function(a){return a.length},
gW:function(a){return a.key(0)==null},
$isb1:1,
$asb1:function(){return[P.z,P.z]}}
W.pi.prototype={
sai:function(a,b){return a.type=b}}
W.pk.prototype={
au:function(a,b){return a.get(b)}}
W.cp.prototype={$iscp:1,$isad:1,
ga7:function(a){return a.href}}
W.eh.prototype={}
W.k8.prototype={
aF:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.cn(a,b,c,d)
t=W.Ac("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
new W.d6(s).as(0,J.zg(t))
return s}}
W.pp.prototype={
aF:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.cn(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.L.aF(t.createElement("table"),b,c,d)
t.toString
t=new W.d6(t)
r=t.gbh(t)
r.toString
t=new W.d6(r)
q=t.gbh(t)
s.toString
q.toString
new W.d6(s).as(0,new W.d6(q))
return s}}
W.pq.prototype={
aF:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.cn(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.L.aF(t.createElement("table"),b,c,d)
t.toString
t=new W.d6(t)
r=t.gbh(t)
s.toString
r.toString
new W.d6(s).as(0,new W.d6(r))
return s}}
W.i1.prototype={
cl:function(a,b,c,d){var t
a.textContent=null
t=this.aF(a,b,c,d)
a.content.appendChild(t)},
di:function(a,b){return this.cl(a,b,null,null)},
$isi1:1,
gbl:function(a){return a.content}}
W.pu.prototype={
gG:function(a){return a.name},
gaH:function(a){return a.value}}
W.cV.prototype={$isad:1}
W.cN.prototype={$isad:1}
W.pA.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isaG:1,
$asaG:function(){return[W.cN]},
$isaz:1,
$asaz:function(){return[W.cN]},
$isp:1,
$asp:function(){return[W.cN]},
$ist:1,
$ast:function(){return[W.cN]},
$isn:1,
$asn:function(){return[W.cN]}}
W.ja.prototype={
$asp:function(){return[W.cN]},
$ast:function(){return[W.cN]},
$asn:function(){return[W.cN]},
$isp:1,
$ist:1,
$isn:1}
W.ju.prototype={
$asp:function(){return[W.cN]},
$ast:function(){return[W.cN]},
$asn:function(){return[W.cN]},
$isp:1,
$ist:1,
$isn:1}
W.pB.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isaG:1,
$asaG:function(){return[W.cV]},
$isaz:1,
$asaz:function(){return[W.cV]},
$isp:1,
$asp:function(){return[W.cV]},
$ist:1,
$ast:function(){return[W.cV]},
$isn:1,
$asn:function(){return[W.cV]}}
W.he.prototype={
$asp:function(){return[W.cV]},
$ast:function(){return[W.cV]},
$asn:function(){return[W.cV]},
$isp:1,
$ist:1,
$isn:1}
W.hh.prototype={
$asp:function(){return[W.cV]},
$ast:function(){return[W.cV]},
$asn:function(){return[W.cV]},
$isp:1,
$ist:1,
$isn:1}
W.pF.prototype={
gm:function(a){return a.length}}
W.cz.prototype={$iscz:1,$isad:1}
W.k9.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cz]},
$ist:1,
$ast:function(){return[W.cz]},
$isn:1,
$asn:function(){return[W.cz]},
$isaG:1,
$asaG:function(){return[W.cz]},
$isaz:1,
$asaz:function(){return[W.cz]}}
W.jb.prototype={
$asp:function(){return[W.cz]},
$ast:function(){return[W.cz]},
$asn:function(){return[W.cz]},
$isp:1,
$ist:1,
$isn:1}
W.jv.prototype={
$asp:function(){return[W.cz]},
$ast:function(){return[W.cz]},
$asn:function(){return[W.cz]},
$isp:1,
$ist:1,
$isn:1}
W.fE.prototype={$isfE:1,$isad:1}
W.ka.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.ei.prototype={}
W.kb.prototype={
ie:function(a){return a.parentNode()},
d6:function(a){return a.previousNode()}}
W.pU.prototype={
A:function(a){return String(a)},
$isf:1,
ga7:function(a){return a.href}}
W.pV.prototype={
au:function(a,b){return a.get(b)}}
W.pZ.prototype={
gm:function(a){return a.length}}
W.fF.prototype={$isfF:1,$isad:1}
W.kc.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.q3.prototype={
be:function(a,b){return a.send(b)}}
W.kf.prototype={$isf:1,
gG:function(a){return a.name}}
W.qa.prototype={$isf:1}
W.eU.prototype={$isf:1}
W.fG.prototype={$isfG:1,$isaf:1,$isad:1,
gG:function(a){return a.name},
gdR:function(a){return a.namespaceURI}}
W.qs.prototype={
A:function(a){return"Rectangle ("+H.x(a.left)+", "+H.x(a.top)+") "+H.x(a.width)+" x "+H.x(a.height)},
T:function(a,b){var t,s,r
if(b==null)return!1
t=J.an(b)
if(!t.$isbW)return!1
s=a.left
r=t.gc7(b)
if(s==null?r==null:s===r){s=a.top
r=t.gce(b)
if(s==null?r==null:s===r){s=a.width
r=t.gbd(b)
if(s==null?r==null:s===r){s=a.height
t=t.gb6(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga6:function(a){var t,s,r,q
t=J.dH(a.left)
s=J.dH(a.top)
r=J.dH(a.width)
q=J.dH(a.height)
return W.yj(W.eY(W.eY(W.eY(W.eY(0,t),s),r),q))},
$isbW:1,
$asbW:function(){},
gb6:function(a){return a.height},
gc7:function(a){return a.left},
gce:function(a){return a.top},
gbd:function(a){return a.width}}
W.i6.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaG:1,
$asaG:function(){return[P.bW]},
$isaz:1,
$asaz:function(){return[P.bW]},
$isp:1,
$asp:function(){return[P.bW]},
$ist:1,
$ast:function(){return[P.bW]},
$isn:1,
$asn:function(){return[P.bW]}}
W.jc.prototype={
$asp:function(){return[P.bW]},
$ast:function(){return[P.bW]},
$asn:function(){return[P.bW]},
$isp:1,
$ist:1,
$isn:1}
W.jw.prototype={
$asp:function(){return[P.bW]},
$ast:function(){return[P.bW]},
$asn:function(){return[P.bW]},
$isp:1,
$ist:1,
$isn:1}
W.kl.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.bP]},
$ist:1,
$ast:function(){return[W.bP]},
$isn:1,
$asn:function(){return[W.bP]},
$isaG:1,
$asaG:function(){return[W.bP]},
$isaz:1,
$asaz:function(){return[W.bP]}}
W.jd.prototype={
$asp:function(){return[W.bP]},
$ast:function(){return[W.bP]},
$asn:function(){return[W.bP]},
$isp:1,
$ist:1,
$isn:1}
W.jx.prototype={
$asp:function(){return[W.bP]},
$ast:function(){return[W.bP]},
$asn:function(){return[W.bP]},
$isp:1,
$ist:1,
$isn:1}
W.qz.prototype={$isf:1}
W.qA.prototype={
gb6:function(a){return a.height},
gbd:function(a){return a.width}}
W.kq.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaG:1,
$asaG:function(){return[W.ct]},
$isaz:1,
$asaz:function(){return[W.ct]},
$isp:1,
$asp:function(){return[W.ct]},
$ist:1,
$ast:function(){return[W.ct]},
$isn:1,
$asn:function(){return[W.ct]}}
W.iY.prototype={
$asp:function(){return[W.ct]},
$ast:function(){return[W.ct]},
$asn:function(){return[W.ct]},
$isp:1,
$ist:1,
$isn:1}
W.jh.prototype={
$asp:function(){return[W.ct]},
$ast:function(){return[W.ct]},
$asn:function(){return[W.ct]},
$isp:1,
$ist:1,
$isn:1}
W.qV.prototype={$isf:1}
W.ic.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.af]},
$ist:1,
$ast:function(){return[W.af]},
$isn:1,
$asn:function(){return[W.af]},
$isaG:1,
$asaG:function(){return[W.af]},
$isaz:1,
$asaz:function(){return[W.af]}}
W.iZ.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$ist:1,
$isn:1}
W.ji.prototype={
$asp:function(){return[W.af]},
$ast:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$ist:1,
$isn:1}
W.rk.prototype={$isf:1}
W.ku.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cn]},
$ist:1,
$ast:function(){return[W.cn]},
$isn:1,
$asn:function(){return[W.cn]},
$isaG:1,
$asaG:function(){return[W.cn]},
$isaz:1,
$asaz:function(){return[W.cn]}}
W.j_.prototype={
$asp:function(){return[W.cn]},
$ast:function(){return[W.cn]},
$asn:function(){return[W.cn]},
$isp:1,
$ist:1,
$isn:1}
W.jj.prototype={
$asp:function(){return[W.cn]},
$ast:function(){return[W.cn]},
$asn:function(){return[W.cn]},
$isp:1,
$ist:1,
$isn:1}
W.kw.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaG:1,
$asaG:function(){return[W.cp]},
$isaz:1,
$asaz:function(){return[W.cp]},
$isp:1,
$asp:function(){return[W.cp]},
$ist:1,
$ast:function(){return[W.cp]},
$isn:1,
$asn:function(){return[W.cp]}}
W.j0.prototype={
$asp:function(){return[W.cp]},
$ast:function(){return[W.cp]},
$asn:function(){return[W.cp]},
$isp:1,
$ist:1,
$isn:1}
W.jk.prototype={
$asp:function(){return[W.cp]},
$ast:function(){return[W.cp]},
$asn:function(){return[W.cp]},
$isp:1,
$ist:1,
$isn:1}
W.rG.prototype={$isf:1}
W.rH.prototype={$isf:1}
W.qo.prototype={
a5:function(a,b){var t,s,r,q,p
for(t=this.gaf(this),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.bu)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gaf:function(a){var t,s,r,q,p,o
t=this.a.attributes
s=H.a([],[P.z])
for(r=t.length,q=0;q<r;++q){if(q>=t.length)return H.u(t,q)
p=t[q]
o=J.aq(p)
if(o.gdR(p)==null)s.push(o.gG(p))}return s},
gW:function(a){return this.gaf(this).length===0},
$isb1:1,
$asb1:function(){return[P.z,P.z]},
gdN:function(){return this.a}}
W.qB.prototype={
n:function(a,b){return this.a.getAttribute(b)},
i:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.gaf(this).length}}
W.qC.prototype={
aN:function(){var t,s,r,q,p
t=P.a_(null,null,null,P.z)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.bu)(s),++q){p=J.tz(s[q])
if(p.length!==0)t.h(0,p)}return t},
eT:function(a){this.a.className=a.aK(0," ")},
gm:function(a){return this.a.classList.length},
gW:function(a){return this.a.classList.length===0},
Y:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s},
gdN:function(){return this.a}}
W.kn.prototype={
aV:function(a,b,c,d){return W.dj(this.a,this.b,a,!1,H.N(this,0))},
ex:function(a,b,c){return this.aV(a,null,b,c)}}
W.e1.prototype={}
W.qF.prototype={
c4:function(a){if(this.b==null)return
this.e8()
this.b=null
this.d=null
return},
d2:function(a,b){if(this.b==null)return;++this.a
this.e8()},
eD:function(a){return this.d2(a,null)},
eJ:function(a){if(this.b==null||this.a<=0)return;--this.a
this.e6()},
e6:function(){var t=this.d
if(t!=null&&this.a<=0)J.z6(this.b,this.c,t,!1)},
e8:function(){var t=this.d
if(t!=null)J.zt(this.b,this.c,t,!1)},
fp:function(a,b,c,d,e){this.e6()}}
W.qG.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.ia.prototype={
bj:function(a){return $.$get$yi().Y(0,W.ha(a))},
b2:function(a,b,c){var t,s,r
t=W.ha(a)
s=$.$get$vG()
r=s.n(0,H.x(t)+"::"+b)
if(r==null)r=s.n(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
fs:function(a){var t,s
t=$.$get$vG()
if(t.gW(t)){for(s=0;s<262;++s)t.i(0,C.a_[s],W.IG())
for(s=0;s<12;++s)t.i(0,C.r[s],W.IH())}},
$ised:1,
geR:function(){return this.a}}
W.bv.prototype={
gR:function(a){return new W.iO(a,this.gm(a),-1,null,[H.ak(a,"bv",0)])},
h:function(a,b){throw H.k(new P.V("Cannot add to immutable List."))},
a3:function(a,b,c,d,e){throw H.k(new P.V("Cannot setRange on immutable List."))},
ax:function(a,b,c,d){return this.a3(a,b,c,d,0)},
aG:function(a,b,c,d){throw H.k(new P.V("Cannot modify an immutable List."))},
bE:function(a,b,c,d){throw H.k(new P.V("Cannot modify an immutable List."))},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$isn:1,
$asn:null}
W.jR.prototype={
h:function(a,b){this.a.push(b)},
bj:function(a){return C.b.eb(this.a,new W.nR(a))},
b2:function(a,b,c){return C.b.eb(this.a,new W.nQ(a,b,c))},
$ised:1}
W.nR.prototype={
$1:function(a){return a.bj(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.nQ.prototype={
$1:function(a){return a.b2(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.id.prototype={
bj:function(a){return this.a.Y(0,W.ha(a))},
b2:function(a,b,c){var t,s
t=W.ha(a)
s=this.c
if(s.Y(0,H.x(t)+"::"+b))return this.d.hk(c)
else if(s.Y(0,"*::"+b))return this.d.hk(c)
else{s=this.b
if(s.Y(0,H.x(t)+"::"+b))return!0
else if(s.Y(0,"*::"+b))return!0
else if(s.Y(0,H.x(t)+"::*"))return!0
else if(s.Y(0,"*::*"))return!0}return!1},
fu:function(a,b,c,d){var t,s,r
this.a.as(0,c)
t=b.ci(0,new W.rl())
s=b.ci(0,new W.rm())
this.b.as(0,t)
r=this.c
r.as(0,C.D)
r.as(0,s)},
$ised:1,
geR:function(){return this.d}}
W.rl.prototype={
$1:function(a){return!C.b.Y(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.rm.prototype={
$1:function(a){return C.b.Y(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.rw.prototype={
b2:function(a,b,c){if(this.fe(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.vX(a).a.getAttribute("template")==="")return this.e.Y(0,b)
return!1}}
W.rx.prototype={
$1:function(a){return"TEMPLATE::"+H.x(a)},
$S:function(){return{func:1,args:[,]}}}
W.rv.prototype={
bj:function(a){var t=J.an(a)
if(!!t.$ishX)return!1
t=!!t.$iscb
if(t&&W.ha(a)==="foreignObject")return!1
if(t)return!0
return!1},
b2:function(a,b,c){if(b==="is"||C.c.ae(b,"on"))return!1
return this.bj(a)},
$ised:1}
W.iO.prototype={
D:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.fQ(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gI:function(){return this.d}}
W.ed.prototype={}
W.ry.prototype={
cj:function(a){}}
W.rj.prototype={}
W.kz.prototype={
cj:function(a){new W.rE(this).$2(a,null)},
bv:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)t.removeChild(a)}else b.removeChild(a)},
h9:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.vX(a)
r=s.gdN().getAttribute("is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.bI(n)}p="element unprintable"
try{p=J.cB(a)}catch(n){H.bI(n)}try{o=W.ha(a)
this.h8(a,b,t,p,o,s,r)}catch(n){if(H.bI(n) instanceof P.cY)throw n
else{this.bv(a,b)
window
m="Removing corrupted element "+H.x(p)
if(typeof console!="undefined")console.warn(m)}}},
h8:function(a,b,c,d,e,f,g){var t,s,r,q,p
if(c){this.bv(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.bj(a)){this.bv(a,b)
window
t="Removing disallowed element <"+H.x(e)+"> from "+J.cB(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.b2(a,"is",g)){this.bv(a,b)
window
t="Removing disallowed type extension <"+H.x(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gaf(f)
s=H.a(t.slice(0),[H.N(t,0)])
for(r=f.gaf(f).length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.u(s,r)
q=s[r]
if(!this.a.b2(a,J.zz(q),t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.x(e)+" "+q+'="'+H.x(t.getAttribute(q))+'">'
if(typeof console!="undefined")console.warn(p)
t.getAttribute(q)
t.removeAttribute(q)}}if(!!J.an(a).$isi1)this.cj(a.content)}}
W.rE.prototype={
$2:function(a,b){var t,s,r,q,p,o
r=this.a
switch(a.nodeType){case 1:r.h9(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.bv(a,b)}t=a.lastChild
for(r=a==null;null!=t;){s=null
try{s=J.zh(t)}catch(q){H.bI(q)
p=t
if(r){o=J.aq(p)
if(o.gc9(p)!=null){o.gc9(p)
o.gc9(p).removeChild(p)}}else a.removeChild(p)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.af,W.af]}}}
P.rs.prototype={
bF:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
bb:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.an(a)
if(!!s.$ise5)return new Date(a.a)
if(!!s.$isH_)throw H.k(new P.eO("structured clone of RegExp"))
if(!!s.$iscj)return a
if(!!s.$isf5)return a
if(!!s.$isfj)return a
if(!!s.$ishu)return a
if(!!s.$isfs||!!s.$iseE)return a
if(!!s.$isb1){r=this.bF(a)
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
s.a5(a,new P.ru(t,this))
return t.a}if(!!s.$isp){r=this.bF(a)
t=this.b
if(r>=t.length)return H.u(t,r)
o=t[r]
if(o!=null)return o
return this.hw(a,r)}throw H.k(new P.eO("structured clone of other type"))},
hw:function(a,b){var t,s,r,q,p
t=J.bk(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.u(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.bb(t.n(a,p))
if(p>=r.length)return H.u(r,p)
r[p]=q}return r}}
P.ru.prototype={
$2:function(a,b){this.a.a[a]=this.b.bb(b)},
$S:function(){return{func:1,args:[,,]}}}
P.qh.prototype={
bF:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
bb:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.e5(s,!0)
r.ds(s,!0)
return r}if(a instanceof RegExp)throw H.k(new P.eO("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.Ir(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bF(a)
r=this.b
o=r.length
if(p>=o)return H.u(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.jG()
t.a=n
if(p>=o)return H.u(r,p)
r[p]=n
this.hL(a,new P.qi(t,this))
return t.a}if(a instanceof Array){p=this.bF(a)
r=this.b
if(p>=r.length)return H.u(r,p)
n=r[p]
if(n!=null)return n
o=J.bk(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.u(r,p)
r[p]=n
if(typeof m!=="number")return H.a6(m)
r=J.dk(n)
l=0
for(;l<m;++l)r.i(n,l,this.bb(o.n(a,l)))
return n}return a}}
P.qi.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.bb(b)
J.kJ(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.t_.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.z,,]}}}
P.rt.prototype={}
P.kh.prototype={
hL:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.bu)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.t0.prototype={
$1:function(a){return this.a.aE(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.t1.prototype={
$1:function(a){return this.a.bk(a)},
$S:function(){return{func:1,args:[,]}}}
P.lm.prototype={
e9:function(a){if($.$get$wi().b.test(a))return a
throw H.k(P.dJ(a,"value","Not a valid class token"))},
A:function(a){return this.aN().aK(0," ")},
gR:function(a){var t,s
t=this.aN()
s=new P.d7(t,t.r,null,null,[null])
s.c=t.e
return s},
a5:function(a,b){this.aN().a5(0,b)},
aA:function(a,b){var t=this.aN()
return new H.fb(t,b,[H.N(t,0),null])},
gW:function(a){return this.aN().a===0},
gm:function(a){return this.aN().a},
Y:function(a,b){if(typeof b!=="string")return!1
this.e9(b)
return this.aN().Y(0,b)},
d_:function(a){return this.Y(0,a)?a:null},
h:function(a,b){this.e9(b)
return this.i7(0,new P.ln(b))},
a2:function(a,b){return this.aN().a2(0,!0)},
aq:function(a){return this.a2(a,!0)},
i7:function(a,b){var t,s
t=this.aN()
s=b.$1(t)
this.eT(t)
return s},
$iseI:1,
$aseI:function(){return[P.z]},
$ist:1,
$ast:function(){return[P.z]},
$isn:1,
$asn:function(){return[P.z]}}
P.ln.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.ly.prototype={
gG:function(a){return a.name}}
P.rO.prototype={
$1:function(a){this.b.aE(0,new P.kh([],[],!1).bb(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mG.prototype={
au:function(a,b){var t,s,r,q,p
try{t=a.get(b)
q=P.yu(t)
return q}catch(p){s=H.bI(p)
r=H.cq(p)
q=P.u5(s,r,null)
return q}},
gG:function(a){return a.name}}
P.nW.prototype={
c1:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fW(a,b,c)
q=P.yu(t)
return q}catch(p){s=H.bI(p)
r=H.cq(p)
q=P.u5(s,r,null)
return q}},
h:function(a,b){return this.c1(a,b,null)},
fW:function(a,b,c){return a.add(new P.rt([],[]).bb(b))},
gG:function(a){return a.name}}
P.hV.prototype={
gat:function(a){return a.error}}
P.pJ.prototype={
gat:function(a){return a.error}}
P.r1.prototype={
bJ:function(a){if(a<=0||a>4294967296)throw H.k(P.xK("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
c8:function(){return Math.random()}}
P.ra.prototype={
b0:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.ap(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bJ:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.k(P.xK("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.b0()
return(this.a&t)>>>0}do{this.b0()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
c8:function(){this.b0()
var t=this.a
this.b0()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
ft:function(a){var t,s,r,q,p,o,n,m
t=J.f_(a,0)?-1:0
do{if(typeof a!=="number")return a.aO()
s=(a&4294967295)>>>0
a=C.d.ap(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.ap(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.ap(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.ap(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.ap(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.ap(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.ap(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.b0()
this.b0()
this.b0()
this.b0()}}
P.rb.prototype={}
P.bW.prototype={$asbW:null}
P.kO.prototype={$isf:1,
ga7:function(a){return a.href}}
P.el.prototype={$isf:1}
P.lP.prototype={$isf:1}
P.lQ.prototype={$isf:1}
P.lR.prototype={$isf:1}
P.lS.prototype={$isf:1}
P.lT.prototype={$isf:1}
P.lU.prototype={$isf:1}
P.lV.prototype={$isf:1}
P.lW.prototype={$isf:1}
P.lX.prototype={$isf:1}
P.lY.prototype={$isf:1,
ga7:function(a){return a.href}}
P.lZ.prototype={$isf:1}
P.m_.prototype={$isf:1}
P.m0.prototype={$isf:1}
P.m1.prototype={$isf:1}
P.m2.prototype={$isf:1}
P.m3.prototype={$isf:1}
P.mk.prototype={$isf:1,
ga7:function(a){return a.href}}
P.cu.prototype={$isf:1}
P.mE.prototype={$isf:1,
ga7:function(a){return a.href}}
P.da.prototype={$isad:1}
P.nb.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.da]},
$ist:1,
$ast:function(){return[P.da]},
$isn:1,
$asn:function(){return[P.da]}}
P.j1.prototype={
$asp:function(){return[P.da]},
$ast:function(){return[P.da]},
$asn:function(){return[P.da]},
$isp:1,
$ist:1,
$isn:1}
P.jl.prototype={
$asp:function(){return[P.da]},
$ast:function(){return[P.da]},
$asn:function(){return[P.da]},
$isp:1,
$ist:1,
$isn:1}
P.nv.prototype={$isf:1}
P.nw.prototype={$isf:1}
P.dc.prototype={$isad:1}
P.nS.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.dc]},
$ist:1,
$ast:function(){return[P.dc]},
$isn:1,
$asn:function(){return[P.dc]}}
P.j2.prototype={
$asp:function(){return[P.dc]},
$ast:function(){return[P.dc]},
$asn:function(){return[P.dc]},
$isp:1,
$ist:1,
$isn:1}
P.jm.prototype={
$asp:function(){return[P.dc]},
$ast:function(){return[P.dc]},
$asn:function(){return[P.dc]},
$isp:1,
$ist:1,
$isn:1}
P.o9.prototype={$isf:1,
ga7:function(a){return a.href}}
P.oe.prototype={
gm:function(a){return a.length}}
P.hX.prototype={$ishX:1,$isf:1,
ga7:function(a){return a.href},
sai:function(a,b){return a.type=b}}
P.pg.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.z]},
$ist:1,
$ast:function(){return[P.z]},
$isn:1,
$asn:function(){return[P.z]}}
P.j3.prototype={
$asp:function(){return[P.z]},
$ast:function(){return[P.z]},
$asn:function(){return[P.z]},
$isp:1,
$ist:1,
$isn:1}
P.jn.prototype={
$asp:function(){return[P.z]},
$ast:function(){return[P.z]},
$asn:function(){return[P.z]},
$isp:1,
$ist:1,
$isn:1}
P.pj.prototype={
sai:function(a,b){return a.type=b}}
P.kV.prototype={
aN:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a_(null,null,null,P.z)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.bu)(r),++p){o=J.tz(r[p])
if(o.length!==0)s.h(0,o)}return s},
eT:function(a){this.a.setAttribute("class",a.aK(0," "))}}
P.cb.prototype={
gef:function(a){return new P.kV(a)},
aF:function(a,b,c,d){var t,s,r,q,p,o
if(c==null){t=H.a([],[W.ed])
t.push(W.yh(null))
t.push(W.yk())
t.push(new W.rv())
c=new W.kz(new W.jR(t))}s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.v).hx(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.d6(q)
o=t.gbh(t)
for(;t=o.firstChild,t!=null;)p.appendChild(t)
return p},
eu:function(a,b,c,d,e){throw H.k(new P.V("Cannot invoke insertAdjacentHtml on SVG."))},
eg:function(a){throw H.k(new P.V("Cannot invoke click SVG."))},
gd0:function(a){return new W.e1(a,"change",!1,[W.P])},
geA:function(a){return new W.e1(a,"click",!1,[W.uX])},
$iscb:1,
$isf:1}
P.pm.prototype={$isf:1}
P.po.prototype={$isf:1}
P.eN.prototype={}
P.pz.prototype={$isf:1,
ga7:function(a){return a.href}}
P.dh.prototype={$isad:1}
P.pK.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.dh]},
$ist:1,
$ast:function(){return[P.dh]},
$isn:1,
$asn:function(){return[P.dh]}}
P.j4.prototype={
$asp:function(){return[P.dh]},
$ast:function(){return[P.dh]},
$asn:function(){return[P.dh]},
$isp:1,
$ist:1,
$isn:1}
P.jo.prototype={
$asp:function(){return[P.dh]},
$ast:function(){return[P.dh]},
$asn:function(){return[P.dh]},
$isp:1,
$ist:1,
$isn:1}
P.pW.prototype={$isf:1,
ga7:function(a){return a.href}}
P.q_.prototype={$isf:1}
P.q0.prototype={$isf:1}
P.i9.prototype={$isf:1,
ga7:function(a){return a.href}}
P.rg.prototype={$isf:1}
P.rh.prototype={$isf:1}
P.ri.prototype={$isf:1}
P.bl.prototype={}
P.di.prototype={$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
P.fX.prototype={$isfX:1,$isad:1,
gm:function(a){return a.length}}
P.f2.prototype={$isf2:1,$isad:1,
gc3:function(a){return a.buffer}}
P.fY.prototype={
fH:function(a,b,c,d){return a.decodeAudioData(b,H.dv(c,1),H.dv(d,1))},
hy:function(a,b){var t,s,r
t=P.fX
s=new P.bq(0,$.ap,null,[t])
r=new P.e0(s,[t])
this.fH(a,b,new P.kW(r),new P.kX(r))
return s}}
P.kW.prototype={
$1:function(a){this.a.aE(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kX.prototype={
$1:function(a){var t=this.a
if(a==null)t.bk("")
else t.bk(a)},
$S:function(){return{func:1,args:[,]}}}
P.bJ.prototype={}
P.f4.prototype={}
P.l4.prototype={
sai:function(a,b){return a.type=b}}
P.lk.prototype={
gc3:function(a){return a.buffer}}
P.jV.prototype={
sai:function(a,b){return a.type=b}}
P.kQ.prototype={
gG:function(a){return a.name}}
P.ot.prototype={$isf:1}
P.rF.prototype={$isf:1}
P.k5.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bD(b,a,null,null,null))
return P.yL(a.item(b))},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
S:function(a,b){return this.n(a,b)},
K:function(a,b){return P.yL(a.item(b))},
$isp:1,
$asp:function(){return[P.b1]},
$ist:1,
$ast:function(){return[P.b1]},
$isn:1,
$asn:function(){return[P.b1]}}
P.j5.prototype={
$asp:function(){return[P.b1]},
$ast:function(){return[P.b1]},
$asn:function(){return[P.b1]},
$isp:1,
$ist:1,
$isn:1}
P.jp.prototype={
$asp:function(){return[P.b1]},
$ast:function(){return[P.b1]},
$asn:function(){return[P.b1]},
$isp:1,
$ist:1,
$isn:1}
T.fT.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
gW:function(a){return this.a.length===0},
gR:function(a){var t=this.a
return new J.im(t,t.length,0,null,[H.N(t,0)])},
$ashz:function(){return[T.fU]},
$asn:function(){return[T.fU]},
gcW:function(a){return this.a}}
T.fU.prototype={
gbl:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.fl(C.B)
r=T.fl(C.C)
q=T.xA(0,this.b)
new T.iT(s,q,0,0,0,t,r).dO()
r=q.c.buffer
q=q.a
r.toString
q=H.cK(r,0,q)
this.cy=q
t=q}else{t=s.bO()
this.cy=t}this.ch=0}}return t},
A:function(a){return this.a},
gG:function(a){return this.a}}
T.dl.prototype={
A:function(a){return"ArchiveException: "+this.a}}
T.hv.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.aj()
if(typeof r!=="number")return H.a6(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.V()
if(typeof b!=="number")return H.a6(b)
s+=b
if(s<0||s>=t.length)return H.u(t,s)
return t[s]},
b_:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.a6(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.aj()
if(typeof s!=="number")return H.a6(s)
b=t-(a-s)}return T.u9(this.a,this.d,b,a)},
b7:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.V()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.a6(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.u(q,s)
q[s]}return-1},
bm:function(a,b){return this.b7(a,b,0)},
d9:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.aj()
if(typeof s!=="number")return H.a6(s)
r=this.b_(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.aj()
if(typeof p!=="number")return H.a6(p)
if(typeof s!=="number")return s.V()
this.b=s+(t-(q-p))
return r},
cc:function(a){return P.ph(this.d9(a).bO(),0,null)},
a_:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.V()
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
a1:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.V()
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
aX:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.V()
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
if(this.d===1)return(C.a.ar(p,56)|C.a.ar(o,48)|C.a.ar(n,40)|C.a.ar(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.ar(i,56)|C.a.ar(j,48)|C.a.ar(k,40)|C.a.ar(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bO:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.aj()
if(typeof r!=="number")return H.a6(r)
q=t-(s-r)
t=this.a
r=J.an(t)
if(!!r.$isdi){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cK(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.yw(r.cm(t,s,p>o?o:p)))},
fh:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gc3:function(a){return this.a},
gib:function(a){return this.b}}
T.o1.prototype={
iJ:function(a,b){var t,s,r,q
if(b==null)b=J.c4(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.cA(s-q)
C.t.ax(r,t,s,a)
this.a+=b},
de:function(a){return this.iJ(a,null)},
iL:function(a){var t,s,r,q
t=J.bk(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a6(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a6(r)
this.cA(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a6(r)
C.t.a3(q,s,s+r,t.gc3(a),t.gib(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.aj()
if(typeof q!=="number")return H.a6(q)
this.a=t+(r-(s-q))},
b_:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cK(t,a,b-a)},
dn:function(a){return this.b_(a,null)},
cA:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.aY(P.dI("Invalid length "+H.x(s)))
r=new Uint8Array(s)
q=this.c
C.t.ax(r,0,q.length,q)
this.c=r},
fL:function(){return this.cA(null)},
gm:function(a){return this.a}}
T.qd.prototype={
h5:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.b_(this.a-20,20)
if(s.a1()!==117853008){a.b=t
return}s.a1()
r=s.aX()
s.a1()
a.b=r
if(a.a1()!==101075792){a.b=t
return}a.aX()
a.a_()
a.a_()
q=a.a1()
p=a.a1()
o=a.aX()
n=a.aX()
m=a.aX()
l=a.aX()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
fM:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.aj()
if(typeof r!=="number")return H.a6(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a1()===101010256){a.b=t
return q}}throw H.k(new T.dl("Could not find End of Central Directory Record"))},
fl:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.fM(a)
this.a=t
a.b=t
a.a1()
this.b=a.a_()
this.c=a.a_()
this.d=a.a_()
this.e=a.a_()
this.f=a.a1()
this.r=a.a1()
s=a.a_()
if(s>0)this.x=a.cc(s)
this.h5(a)
r=a.b_(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.V()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.aw()
if(!(p<t+o))break
if(r.a1()!==33639248)break
p=new T.qf(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
p.a=r.a_()
p.b=r.a_()
p.c=r.a_()
p.d=r.a_()
p.e=r.a_()
p.f=r.a_()
p.r=r.a1()
p.x=r.a1()
p.y=r.a1()
n=r.a_()
m=r.a_()
l=r.a_()
p.z=r.a_()
p.Q=r.a_()
p.ch=r.a1()
o=r.a1()
p.cx=o
if(n>0)p.cy=r.cc(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.aj()
j=r.b_(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.aj()
if(typeof g!=="number")return H.a6(g)
if(typeof k!=="number")return k.V()
r.b=k+(i-(h-g))
p.db=j.bO()
f=j.a_()
e=j.a_()
if(f===1){if(e>=8)p.y=j.aX()
if(e>=16)p.x=j.aX()
if(e>=24){o=j.aX()
p.cx=o}if(e>=28)p.z=j.a1()}}if(l>0)p.dx=r.cc(l)
a.b=o
p.dy=T.HB(a,p)
q.push(p)}}}
T.qe.prototype={
gbl:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.fl(C.B)
q=T.fl(C.C)
t=T.xA(0,t)
new T.iT(s,t,0,0,0,r,q).dO()
q=t.c.buffer
t=t.a
q.toString
t=H.cK(q,0,t)
this.cy=t
this.d=0}else{t=s.bO()
this.cy=t}}return t},
A:function(a){return this.z},
fm:function(a,b){var t,s,r,q
t=a.a1()
this.a=t
if(t!==67324752)throw H.k(new T.dl("Invalid Zip Signature"))
this.b=a.a_()
this.c=a.a_()
this.d=a.a_()
this.e=a.a_()
this.f=a.a_()
this.r=a.a1()
this.x=a.a1()
this.y=a.a1()
s=a.a_()
r=a.a_()
this.z=a.cc(s)
this.Q=a.d9(r).bO()
this.cx=a.d9(this.ch.x)
if((this.c&8)!==0){q=a.a1()
if(q===134695760)this.r=a.a1()
else this.r=q
this.x=a.a1()
this.y=a.a1()}}}
T.qf.prototype={
A:function(a){return this.cy}}
T.qc.prototype={
hz:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.HA(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.C],p=0;p<t.length;t.length===r||(0,H.bu)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.dj()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fU(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.e2(k,"$isp",q,"$asp")){j.cy=k
j.cx=T.u9(k,0,null,0)}else if(k instanceof T.hv){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.hv(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.hH(m,"/")
j.y=n.r
s.push(j)}return new T.fT(s,null)}}
T.mC.prototype={
fg:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.ar(1,this.b)
r=H.cI(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.u(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.u(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iT.prototype={
dO:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.V()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.aw()
if(!(r<s+q))break
if(!this.h2())break}},
h2:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.V()
if(typeof s!=="number")return s.aw()
if(s>=r+q)return!1
p=this.az(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.az(16)
s=this.az(16)
if(n!==0&&n!==(s^65535)>>>0)H.aY(new T.dl("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.aj()
r=q-r
if(n>s-r)H.aY(new T.dl("Input buffer is broken"))
m=t.b_(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.aj()
if(typeof l!=="number")return H.a6(l)
if(typeof s!=="number")return s.V()
t.b=s+(r-(q-l))
this.b.iL(m)
break
case 1:this.dG(this.f,this.r)
break
case 2:this.h3()
break
default:throw H.k(new T.dl("unknown BTYPE: "+o))}return(p&1)===0},
az:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.V()
if(typeof r!=="number")return r.aw()
if(r>=q+p)throw H.k(new T.dl("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.u(q,r)
o=q[r]
this.c=(this.c|C.a.ay(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.ar(1,a)
this.c=C.a.e4(t,a)
this.d=s-a
return(t&r-1)>>>0},
cI:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.V()
if(typeof p!=="number")return p.aw()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p<0||p>=o.length)return H.u(o,p)
m=o[p]
this.c=(this.c|C.a.ay(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.ar(1,s)-1)>>>0
if(p>=t.length)return H.u(t,p)
l=t[p]
k=l>>>16
this.c=C.a.e4(r,k)
this.d=q-k
return l&65535},
h3:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.az(5)+257
s=this.az(5)+1
r=this.az(4)+4
q=H.cI(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.u(C.J,o)
n=C.J[o]
m=this.az(3)
if(n>=q)return H.u(p,n)
p[n]=m}l=T.fl(p)
k=new Uint8Array(H.cI(t))
j=new Uint8Array(H.cI(s))
i=this.dF(t,l,k)
h=this.dF(s,l,j)
this.dG(T.fl(i),T.fl(h))},
dG:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cI(a)
if(s>285)throw H.k(new T.dl("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.fL()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.u(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.u(C.H,p)
o=C.H[p]+this.az(C.a1[p])
n=this.cI(b)
if(n<=29){if(n>=30)return H.u(C.E,n)
m=C.E[n]+this.az(C.a0[n])
for(r=-m;o>m;){t.de(t.dn(r))
o-=m}if(o===m)t.de(t.dn(r))
else t.de(t.b_(r,o-m))}else throw H.k(new T.dl("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.aj();--r
t.b=r
if(r<0)t.b=0}},
dF:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cI(b)
switch(q){case 16:p=3+this.az(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=s}break
case 17:p=3+this.az(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=0}s=0
break
case 18:p=11+this.az(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.k(new T.dl("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kP.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Math Book",H.a([$.K,$.Y,$.aC],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Giant Map",H.a([$.K,$.Y],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microscope",H.a([$.D,$.Y,$.aQ],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Star Chart",H.a([$.K,$.Y],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("History Book",H.a([$.K,$.Y],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.ca,$.aw],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.D,$.Y],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.z]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ff,$.o)
q.i(0,$.bf,$.o)
q.i(0,$.fh,$.j)
q.i(0,$.aO,$.H)
q.i(0,$.cE,$.j)
p=$.m
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.r
o=o+n+" to stop "
m=$.L
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.Gm
n=[U.b]
q.i(0,new R.Z("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.B(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.m
q.i(0,new R.Z("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.r+" to stop "+$.L+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.om(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
p="The "+m+" finds a massive library, filled with books. The "
l=$.r
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.y
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.Z("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.dT(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ep,$.H)
s.i(0,$.cE,$.o)
p=$.m
o="The "+p+"  is approached by a "
l=$.r
s.i(0,new R.Z("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.L+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.m
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.r
s.i(0,new R.Z("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.L+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.dd(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
s.i(0,new R.Z("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.r+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.dT(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
m.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.ep,$.H)
t.i(0,$.cE,$.o)
t.i(0,$.c5,$.H)
t.i(0,$.tX,$.H)
r=$.m
q="The "+r+"  is approached by a "
p=$.r
q=q+p+" who offers them a grant to study "
o=$.ab
t.i(0,new R.Z("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.L+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.dT(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
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
p=$.Gs
t.i(0,new R.Z("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.ef(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
t.i(0,new R.Z("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.L+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.r+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(s,t,null),$.aB)}}
K.bT.prototype={}
L.fV.prototype={
E:function(){var t,s
t=Q.J(null,null,A.a5)
s=A.i("Perfectly Generic Object",H.a([],[G.a1]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.x1=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.z]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d_,$.j)
q.i(0,$.bf,$.H)
q.i(0,$.dQ,$.j)
q.i(0,$.c5,$.o)
q.i(0,$.e7,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.y
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.by+". The "+p+" has won! "
i=[U.b]
q.i(0,new R.M("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.S(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=this.f
j.i(0,new X.F(s,q,null),$.at)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eu,$.j)
s.i(0,$.er,$.H)
s.i(0,$.et,$.o)
s.i(0,$.cQ,$.j)
s.i(0,$.ci,$.H)
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
g="The "+h+" lies slain by the "+p+"'s "+$.by+". The "+p+" has won! "
s.i(0,new R.M("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.S(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.F(q,s,null),$.at)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.j)
t.i(0,$.bf,$.H)
t.i(0,$.ce,$.o)
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
l="The "+m+" lies slain by the "+r+"'s "+$.by+". The "+r+" has won! "
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.S(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.vd(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.H)
l=$.m
r="The "+l+" learns that all of the local "
m=$.r
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.y
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.by+". The "+l+" has won! "
t.i(0,new R.M("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.S(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.F(s,t,null),$.at)},
A:function(a){return this.Q},
ak:function(a,b,c,d){var t=this.Q
this.r=new X.iD("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.io]),H.a([],[M.hj]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.E()
this.F()
t=this.e
if($.$get$kS().U(0,t))H.aY("Duplicate aspect id for "+this.A(0)+": "+t+" is already registered for "+J.cB($.$get$kS().n(0,t))+".")
$.$get$kS().i(0,t,this)},
gG:function(a){return this.Q}}
L.aT.prototype={}
M.kU.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Barbells",H.a([$.ah,$.cf,$.D],s),null,!1,"Strength Building Metal")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Basketball",H.a([$.fn,$.cg],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Baseball Bat",H.a([$.jA,$.X],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rubber Ball",H.a([$.fn,$.cg],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.aV,$.a8],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hockey Stick",H.a([$.jA,$.X,$.dR],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trophy",H.a([$.D,$.bm],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Boxing Glove",H.a([$.wX,$.cg],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Yoga Mat",H.a([$.cg,$.b0],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.z]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.e8,$.H)
q.i(0,$.c7,$.o)
q.i(0,$.cQ,$.H)
p=$.m
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.r
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.L+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.i(0,new R.Z("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.B(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.m
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.r
q.i(0,new R.Z("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.L+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.ef(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
n="The "+m+"  wanders into a bunch of "
p=$.r
q.i(0,new R.Z("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.fy(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.e8,$.o)
t.i(0,$.fi,$.o)
t.i(0,$.c7,$.o)
s=$.m
r="The "+s+" finds a team of underdog "
p=$.r
t.i(0,new R.Z("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.om(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.r
s="A group of "+p+"s approach the "
r=$.m
s=s+r+". Apparently their sports team lost their coach to the "+$.y+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.L
t.i(0,new R.Z("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.ef(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
k=$.r
p="A group of "+k+"s approach the "
r=$.m
t.i(0,new R.Z("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.y+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.ab+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(q,t,null),$.aB)}}
U.kY.prototype={
P:function(a,b){var t=0,s=P.be(),r,q,p,o
var $async$P=P.bj(function(c,d){if(c===1)return P.bg(d,s)
while(true)switch(t){case 0:q=$.$get$wa()
p=q.createBufferSource()
o=p
t=3
return P.bS(J.zc(q,b),$async$P)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$P,s)},
$asdy:function(){return[P.f2]},
$asc8:function(){return[P.f2,P.bl]}}
U.nq.prototype={
aW:function(a){return"audio/mpeg"}}
U.nY.prototype={
aW:function(a){return"audio/ogg"}}
U.pd.prototype={
P:function(a,b){var t=0,s=P.be(),r,q,p
var $async$P=P.bj(function(c,d){if(c===1)return P.bg(d,s)
while(true)switch(t){case 0:q=W.zW(b)
p=new W.e1(q,"canplaythrough",!1,[W.P])
t=3
return P.bS(p.ga9(p),$async$P)
case 3:r=q
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$P,s)},
$asiB:function(){return[W.f3]},
$asc8:function(){return[W.f3,P.z]}}
U.pe.prototype={}
U.pf.prototype={}
O.l_.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Cod Piece",H.a([$.Q,$.a0,$.aP,$.U,$.X],s),"God damn it, MI. ",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.ud,$.U,$.bR],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aD,$.X,$.bn,$.U,$.a9],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Snare Trap",H.a([$.Q,$.aD,$.U,$.aW],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.z]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.cJ,$.j)
t.i(0,$.hp,$.j)
t.i(0,$.cs,$.j)
t.i(0,$.dA,$.j)
t.i(0,$.cr,$.j)
t.i(0,$.fc,$.j)
r="After all the bullshit the "+$.y+" has put the native "
q=$.r
r=r+q+"s through, the "
p=$.m
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.ax+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.L
m=[U.b]
t.i(0,new R.a4("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.B(),!1,!1,new Y.dW("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.r
n="A group of jubilant "+p+"s are following the "
q=$.m
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.L
t.i(0,new R.a4("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.y+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
q=$.m
t.i(0,new R.a4("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.y+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.B(),!1,!1,new Y.ld("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.y+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.m
q=q+r+" organizes a huge festival for all the "
p=$.r
t.i(0,new R.bH("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
this.x.i(0,new X.F(s,t,null),$.bN)}}
Y.py.prototype={
P:function(a,b){var t=0,s=P.be(),r
var $async$P=P.bj(function(c,d){if(c===1)return P.bg(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$P,s)},
$aseM:function(){return[P.z]},
$asc8:function(){return[P.z,P.z]}}
Y.oq.prototype={
aW:function(a){return"application/octet-stream"},
P:function(a,b){var t=0,s=P.be(),r
var $async$P=P.bj(function(c,d){if(c===1)return P.bg(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$P,s)},
$asdy:function(){return[P.bl]},
$asc8:function(){return[P.bl,P.bl]}}
T.l5.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Mystical Vial of Blood",H.a([$.aQ,$.bn,$.T,$.aI],s),null,!1,"Vial of Not-ABs Oil")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bananaphone",H.a([$.ar,$.bn,$.T,$.aU],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.Q,$.bn,$.T,$.aI,$.ew],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.D,$.aW,$.T,$.aI,$.ew,$.aF],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.X,$.mR,$.bn,$.aI,$.T,$.a0],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.z]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dp,$.j)
q.i(0,$.u_,$.j)
q.i(0,$.c5,$.o)
p=$.m
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.r
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.ab+" and some boondollars in compensation."
n=this.x1
k=[U.b]
q.i(0,new R.Z("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.ef(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=$.r
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.L+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.y
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.m
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.by+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.M("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.S(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=$.m
m="The "+n+" is playing against a "
l=$.r
m=m+l+" in a friendly game of "+$.ab+" Battle. With some smooth moves, they pull out a victory. The "+l+" comes over for a handshake. The "+n+" notices some ink dripping out of the "+l+"\u2019s arm. The "+l+" becomes confused. 'Ink? No this is blood from when I scraped my limb.' What the hell is blood?"
l="The "+n+" tries asking around what blood is, but every "+l+" asked just looks at them strangely and walks away. Finally, they run into a "
i=$.y
q.i(0,new R.Z("The True Meaning of Blood",!1,[new U.b(m),new U.b(l+i+" minion who mocks their lack of knowledge. 'If you don\u2019t even know what blood is maybe you should read a book sometime.'"),new U.b("The "+n+" takes the rude (and also dead) "+i+" minion\u2019s advice and gets their answer at a library. According to a biology textbook, people here have a liquid called blood running through tubes across their entire body. What a completely weird and alien concept.")],H.a([],k),R.GF(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.al)
i=this.f
i.i(0,new X.F(s,q,null),$.at)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cQ,$.j)
s.i(0,$.cr,$.H)
s.i(0,$.aO,$.H)
s.i(0,$.iL,$.j)
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
s.i(0,new R.M("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(m),new U.S(l,"The "+p+" and "+n+" end up getting distracted bickering after one of the "+j+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.dU(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
h=$.m
j="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
n=$.r
j=j+n+"s explains that before  "
p=$.y
j=j+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+n+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
n="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+n+"s discover that "+n+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
l="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
m="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.by+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.xy
s.i(0,new R.M("Chain the Towers",!1,[new U.b(j),new U.b(n),new U.b(l),new U.S(m,h,o)],H.a([],k),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.m
o="The "+p+" learns of the "
h=$.ax
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
m=$.r
o=o+m+" explains that the "
l=$.y
m=o+l+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+m+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+l+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
n="The "+p+" defeats a fearsome "+l+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
j="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+l+". "
p="The "+l+" lies slain by the "+p+"'s "+$.by+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.M("Protect the Beams",!1,[new U.b(m),new U.b(o),new U.b(n),new U.S(j,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.m
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
j=$.r
h=h+j+" on "+$.ax+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
n="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
j="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+j+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+j+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.ea+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a4("One Degree of Separation",!1,[new U.b(h),new U.b(n),new U.b(j)],H.a([],k),R.dT(),!1,!1,new Y.bX("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
j="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.r+" on "
n=$.ax
j=j+n+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
n="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+n+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.ea+" is now more popular with your friends than you are."
s.i(0,new R.a4("Steal The Friends",!1,[new U.b(j),new U.b(h),new U.b(n)],H.a([],k),R.on(),!1,!1,new Y.bX("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
n="The "+p+"  and the "
h=$.dD
n=n+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
j="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.y
j=j+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.M("Pale Shipping Dungeon",!1,[new U.b(n),new U.S(j,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.x(C.n)+".",o)],H.a([],k),R.dU(),!1,!1,new Y.hT(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.al)
i.i(0,new X.F(q,s,null),$.at)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.j)
t.i(0,$.bf,$.H)
t.i(0,$.ce,$.o)
r="In the wake of the defeat of the "+$.y+" it becomes really how isolated the individual "
q=$.r
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.m
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.ea+" to kick your ass, but luckily they have several."
t.i(0,new R.a4("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.ef(),!1,!1,new Y.bX("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.m
q="The "+o+" learns that two prominent "
p=$.r
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
n="In a dramatic reveal, the "+o+" discovers that "
m=$.y
n=n+m+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
l="The "+o+" confronts "+m+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+m+" lies slain by the "+o+"'s "+$.by+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.L+"ing. "
t.i(0,new R.M("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(n),new U.S(l,"The deception of "+m+" continues with the defeat of the "+o+".",p)],H.a([],k),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i.i(0,new X.F(s,t,null),$.at)}}
T.l7.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Pan's Pipe",H.a([$.a9,$.X,$.bn,$.T],s),null,!1,"Smonkin Weeds Pipe")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skeleton Key",H.a([$.b_,$.T],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.a8,$.D,$.bn,$.T],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Jet Pack",H.a([$.as,$.D,$.aV,$.T,$.a0],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.z]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ce,$.o)
q.i(0,$.fi,$.j)
q.i(0,$.aO,$.o)
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
l="The "+m+" lies slain by the "+p+"'s "+$.by+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.Gn
i=[U.b]
q.i(0,new R.M("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.S(j,p,l)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.f
m.i(0,new X.F(s,q,null),$.at)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.bf,$.j)
s.i(0,$.fi,$.o)
s.i(0,$.aO,$.o)
s.i(0,$.c7,$.o)
s.i(0,$.ce,$.o)
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
h="The "+l+" lies slain by the "+p+"'s "+$.by+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.M("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.S(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=$.m
p="\u201cThe "+h+" returns home from exploring their land, but a "
l=$.r
s.i(0,new R.Z("Slay the Windmills",!1,[new U.b(p+l+" is waiting at the door. Shaking heavily, she tells the "+h+" that her village is being terrorized by terrible monsters. The "+h+" agrees to help, and is lead to a plain just outside the village. The "+l+" points in one direction to indicate the monsters, but all the "+h+" can see are a bunch of windmills. Wait\u2026are the windmills the monsters?! The "+l+" nods her head. The "+h+" knows consorts can be pretty dumb, but this really takes the cake.\u201d "),new U.b("The "+h+" whacks the bases of a few windmills with their "+$.by+" until they collapse. The "+l+"s from the village cheer and declare the "+h+" as a true hero and slayer of beasts. The "+h+" is happy to get praised, but is still a little frustrated by all of this nonsense. "),new U.b("Most of the windmills have been knocked over. The "+h+" starts to hit one of the last windmills, when suddenly it rears back and opens a toothy mouth in a roar. Holy Shit! It turns out windmill monsters aren\u2019t a delusion after all! The "+h+" slays the windmill monster in a tough strife and enjoys the "+l+" village\u2019s victory party.  ")],H.a([],i),R.dd(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.o)
m.i(0,new X.F(q,s,null),$.at)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.ci,$.j)
t.i(0,$.mb,$.j)
t.i(0,$.fi,$.H)
t.i(0,$.ce,$.H)
r=$.m
q="The "+r+" is chilling in a "+$.r+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.y
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.ab
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.ax+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.by+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.M("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.S(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(s,t,null),$.at)}}
M.h1.prototype={
eU:function(a){var t=this.a
if(!t.U(0,a))return
return t.n(0,a)}}
Y.l9.prototype={
P:function(a,b){var t=0,s=P.be(),r,q,p,o,n,m,l,k,j,i
var $async$P=P.bj(function(c,d){if(c===1)return P.bg(d,s)
while(true)switch(t){case 0:q=J.e4(b,"\n")
p=P.z
o=P.c0(p,p)
n=P.c0(p,[P.eI,P.z])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.d8(k).bp(k).length===0)m=null
else if(m==null)m=C.c.bp(k)
else{j=C.c.bp(k)
i=C.c.L(m,0,C.c.ev(m,$.$get$we())+1)+j
o.i(0,i,m)
if(!n.U(0,m))n.i(0,m,P.a_(null,null,null,p))
J.z5(n.n(0,m),i)}}r=new M.h1(o,n)
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$P,s)},
$aseM:function(){return[M.h1]},
$asc8:function(){return[M.h1,P.z]}}
A.lf.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.K,$.ah,$.aU,$.cf],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.K,$.aU],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Beagle Puss",H.a([$.aQ,$.aU],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.aV,$.a8,$.aU],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Banana",H.a([$.ar,$.aU],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fake Flower",H.a([$.Q,$.aU],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.D,$.aU],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.z]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cs,$.o)
q.i(0,$.cD,$.j)
q.i(0,$.c7,$.o)
p=$.m
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.r
o=o+n+"s are too scared to even "+$.L+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.y+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.i(0,new R.Z("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.B(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.e8,$.H)
s.i(0,$.c7,$.j)
s.i(0,$.cD,$.j)
s.i(0,$.cJ,$.j)
o=$.m
n="The "+o+" learns of an Open Mic Nite at the "
m=$.ax
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.r
k=k+j+"s let out a braying "+$.L+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.Gq
s.i(0,new R.Z("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.B(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cR,$.H)
t.i(0,$.c6,$.o)
t.i(0,$.cD,$.j)
t.i(0,$.c7,$.o)
t.i(0,$.hk,$.o)
r=$.m
q="The "+r+"  is approached by a Crafty "
o=$.r
q=q+o+" who offers them a magical "
n=$.ab
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.L
t.i(0,new R.Z("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,t,null),$.aB)}}
S.bE.prototype={
A:function(a){return H.x(new H.dZ(H.kG(this),null))+": "+this.c},
gG:function(a){return this.c}}
S.ip.prototype={}
S.mz.prototype={}
M.lt.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Can of Spray Paint",H.a([$.ay,$.D],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.K,$.ai,$.aU,$.aC],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.uu,$.D,$.au],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.K,$.ai,$.aC],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.ay,$.ao,$.K],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.ai,$.K],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.ai,$.aE,$.ao],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Paint Set",H.a([$.ay,$.ai],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shaving Cream",H.a([$.as,$.ai,$.D],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Classy Suit",H.a([$.Q,$.ai],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.K,$.ai,$.aC],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.z]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dP,$.o)
q.i(0,$.cE,$.j)
q.i(0,$.aO,$.o)
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
q.i(0,new R.Z("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.B(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.e8,$.H)
s.i(0,$.c7,$.o)
s.i(0,$.cD,$.H)
s.i(0,$.bf,$.o)
s.i(0,$.cJ,$.j)
o=$.m
n="The "+o+" finds a troupe of dejected looking "
l=$.r
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.ax
l=l+n+" "
k=$.ab
s.i(0,new R.Z("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.L+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hp,$.H)
t.i(0,$.cs,$.H)
t.i(0,$.fc,$.H)
t.i(0,$.c6,$.H)
t.i(0,$.bf,$.o)
t.i(0,$.aO,$.o)
r=$.m
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.L
q=q+o+"ingworth, "
n=$.r
q=q+n+" heiress to the "+$.ab+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.Gg
t.i(0,new R.Z("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.B(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(s,t,null),$.aB)}}
T.lz.prototype={}
V.lB.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Trendy Fabric",H.a([$.ay,$.Q],s),null,!1,"Weird Tasting Candy Paper")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Necklace",H.a([$.ay,$.uj,$.ew],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sewing Needle",H.a([$.D,$.un,$.aM],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.jy
r=A.i("Broom",H.a([r,$.X,$.ah,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rolling Pin",H.a([$.X,$.uw,$.ah],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.Q,$.b0,$.bn,$.ay,$.hx],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yarn Ball",H.a([$.ay,$.Q],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Refrigerator",H.a([$.aF,$.cf,$.D,$.br],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Photo Album",H.a([$.ay,$.K],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Cubes",H.a([$.br],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.D,$.as,$.ah,$.cf,$.ui],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Failed Dish",H.a([$.bR],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dr Pepper BBQ Sauce",H.a([$.bR,$.jB],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Potted Plant",H.a([$.ay,$.bU,$.aS],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chicken Leg",H.a([$.ar,$.bo,$.b_],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juicy Steak",H.a([$.ar,$.bo],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Wedding Cake",H.a([$.ay,$.ar,$.aI],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.z]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cJ,$.o)
q.i(0,$.cr,$.o)
q.i(0,$.cs,$.H)
p=$.m
o="The "+p+" is visited by a Beautiful "
n=$.r
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ab
l=[U.b]
q.i(0,new R.Z("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.L+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.B(),!1,!1,new Y.ir("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cs,$.j)
s.i(0,$.c7,$.o)
s.i(0,$.fc,$.j)
s.i(0,$.dA,$.o)
s.i(0,$.bf,$.j)
p=$.m
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.ab
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.r
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.L+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.Go
s.i(0,new R.Z("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.B(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hl,$.j)
t.i(0,$.bf,$.o)
t.i(0,$.fd,$.j)
t.i(0,$.aO,$.o)
t.i(0,$.iL,$.j)
r=$.m
q="The "+r+" finds a loom, and a Wizened "
p=$.r
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.ab
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.L+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.Z("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.B(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(s,t,null),$.aB)}}
U.lC.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aC,$.a8,$.K,$.aD,$.T,$.a0],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Egg Timer",H.a([$.aE,$.bn,$.T,$.aD],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skull Timer",H.a([$.b_,$.bn,$.T,$.aD],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poison Flask",H.a([$.aQ,$.T,$.bR],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.aQ,$.T,$.br,$.aD,$.aW,$.c_,$.aX],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Obituary",H.a([$.aF,$.aX,$.aD,$.K,$.T],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.z]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dQ,$.j)
q.i(0,$.d_,$.o)
q.i(0,$.fi,$.H)
q.i(0,$.bf,$.H)
q.i(0,$.c5,$.o)
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
n="The "+k+" lies slain by the "+p+"'s "+$.by+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.i(0,new R.M("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.S(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.F(s,q,null),$.at)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dQ,$.j)
s.i(0,$.d_,$.o)
s.i(0,$.ev,$.al)
s.i(0,$.eq,$.o)
s.i(0,$.tX,$.o)
s.i(0,$.dp,$.o)
s.i(0,$.d_,$.o)
s.i(0,$.bf,$.H)
s.i(0,$.c5,$.o)
s.i(0,$.dq,$.o)
p=$.m
o="The "+p+" has found a group of Violent "
m=$.r
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.ax
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.L+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.y
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.by+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.M("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.S(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.dd(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.ab
p=p+l+"s alike. "
l=$.r+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.y
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.by+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.M("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.S(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.at)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.j)
t.i(0,$.c5,$.j)
t.i(0,$.wB,$.al)
t.i(0,$.ff,$.H)
r=$.m
q="The "+r+" finds a small dungeon bearing the image of "
p=$.y
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.r+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.M("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.S(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.dd(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
k=$.m
p="The "+k+" learns from one of their "
r=$.r
p=p+r+"s that there is an ancient prophecy of a "
l=$.ax
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.ab
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.y
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.by+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.Gf
t.i(0,new R.M("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.S(o,k,q)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(s,t,null),$.at)}}
Z.lD.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Dream Diary",H.a([$.K,$.aC,$.T],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aE,$.bn,$.ah,$.T,$.a0],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aE,$.bn,$.T],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.z]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.hl,$.o)
q.i(0,$.fd,$.j)
q.i(0,$.aO,$.o)
q.i(0,$.iL,$.o)
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
l=$.Gl
k=[U.b]
q.i(0,new R.M("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.S(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.A)
l=this.f
l.i(0,new X.F(s,q,null),$.at)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ci,$.o)
s.i(0,$.fd,$.j)
s.i(0,$.dC,$.o)
s.i(0,$.cZ,$.o)
s.i(0,$.m7,$.o)
s.i(0,$.cD,$.j)
p=$.m
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.r
n=n+m+"s are even starting to snigger and "
j=$.L
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.y
s.i(0,new R.M("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.S("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.F(q,s,null),$.at)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dP,$.j)
t.i(0,$.iG,$.o)
t.i(0,$.aO,$.o)
t.i(0,$.cZ,$.j)
t.i(0,$.m7,$.j)
t.i(0,$.fd,$.o)
r=$.m
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.y
t.i(0,new R.M("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.ax+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.r+" is "+$.L+"ing in reverse. Another is in a "+$.ab+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.S("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.F(s,t,null),$.at)}}
X.iD.prototype={}
X.io.prototype={
$S:function(){return{func:1,v:true,args:[[P.p,M.hj]]}}}
M.hj.prototype={}
U.m4.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Fluthulu Poster",H.a([$.Q,$.b0,$.aX,$.bs],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Scalemate",H.a([$.Q,$.b0,$.aX],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aF,$.aE,$.b_,$.fp,$.aP],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.aE,$.x3,$.ex,$.aP],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Zombie Mask",H.a([$.aE,$.c_,$.bo,$.aX],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.aC,$.K,$.aA,$.aX],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.K,$.a2,$.ah],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.K,$.a2,$.ah],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.K,$.a2,$.c_,$.aX,$.bs],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aF,$.aw,$.a2,$.ah,$.aP],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aF,$.ue,$.a2,$.ah,$.aP],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.z]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.fe,$.al)
q.i(0,$.cr,$.o)
q.i(0,$.ce,$.o)
q.i(0,$.cR,$.H)
p=$.m
o="The "+p+" learns of a Beautiful "
n=$.r
o=o+n+" who has been kidnapped by the vial "
m=$.y
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ab
j=[U.b]
q.i(0,new R.Z("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c6,$.j)
s.i(0,$.dp,$.j)
s.i(0,$.iH,$.o)
s.i(0,$.c5,$.j)
s.i(0,$.ev,$.j)
s.i(0,$.ho,$.o)
o=$.m
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.r
s.i(0,new R.Z("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c6,$.j)
t.i(0,$.hn,$.o)
t.i(0,$.c5,$.j)
t.i(0,$.dO,$.o)
t.i(0,$.ep,$.o)
t.i(0,$.u_,$.o)
r=$.m
q="The "+r+" finds a group of three "
o=$.r
q=q+o+"s "
n=$.L
t.i(0,new R.Z("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,t,null),$.aB)}}
N.ac.prototype={
A:function(a){return H.x(new H.dZ(H.kG(this),null))+": "+H.x(this.b)}}
O.c8.prototype={
b8:function(a){var t=0,s=P.be(),r,q=this,p
var $async$b8=P.bj(function(b,c){if(b===1)return P.bg(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.bS(q.aY(a),$async$b8)
case 3:r=p.P(0,c)
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$b8,s)}}
O.mf.prototype={
$1:function(a){return"."+H.x(a)},
$S:function(){return{func:1,args:[P.z]}}}
O.mg.prototype={
$1:function(a){var t=0,s=P.be(),r,q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$$1=P.bj(function(b,c){if(b===1)return P.bg(c,s)
while(true)switch(t){case 0:p=q.c
if(J.w_(p).length===0){t=1
break}o=p.files,n=o.length,m=q.a,l=q.b,k=0
case 3:if(!(k<o.length)){t=5
break}j=o[k]
i=0
case 6:if(!(i<1)){t=8
break}h=m[i]
t=9
return P.bS(h.cb(j),$async$$1)
case 9:g=c
t=g!=null?10:11
break
case 10:f=l
t=12
return P.bS(h.P(0,g),$async$$1)
case 12:f.$2(c,j.name)
t=8
break
case 11:case 7:++i
t=6
break
case 8:case 4:o.length===n||(0,H.bu)(o),++k
t=3
break
case 5:p.value=null
case 1:return P.bh(r,s)}})
return P.bi($async$$1,s)},
$S:function(){return{func:1,ret:P.c9,args:[W.P]}}}
O.mh.prototype={
$1:function(a){return J.z8(this.a)},
$S:function(){return{func:1,args:[W.P]}}}
O.dy.prototype={
bf:function(a){var t=0,s=P.be(),r
var $async$bf=P.bj(function(b,c){if(b===1)return P.bg(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$bf,s)},
cU:function(a){var t=0,s=P.be(),r,q=this
var $async$cU=P.bj(function(b,c){if(b===1)return P.bg(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.zX([J.vU(a)],q.aW(0),null))
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$cU,s)},
aY:function(a){var t=0,s=P.be(),r,q=this,p,o
var $async$aY=P.bj(function(b,c){if(b===1)return P.bg(c,s)
while(true)switch(t){case 0:p=P.bl
o=new P.bq(0,$.ap,null,[p])
W.wJ(a,null,q.aW(0),null,null,"arraybuffer",null,null).b9(new O.l3(new P.e0(o,[p])))
r=o
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$aY,s)},
$asc8:function(a){return[a,P.bl]}}
O.l3.prototype={
$1:function(a){this.a.aE(0,H.kH(J.zi(a),"$isbl"))},
$S:function(){return{func:1,args:[W.eb]}}}
O.eM.prototype={
bf:function(a){var t=0,s=P.be(),r,q,p,o,n
var $async$bf=P.bj(function(b,c){if(b===1)return P.bg(c,s)
while(true)switch(t){case 0:a.toString
q=H.cK(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hU(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$bf,s)},
cb:function(a){var t=0,s=P.be(),r,q,p
var $async$cb=P.bj(function(b,c){if(b===1)return P.bg(c,s)
while(true)switch(t){case 0:q=new FileReader()
q.readAsText(a)
p=new W.kn(q,"load",!1,[W.GC])
t=3
return P.bS(p.ga9(p),$async$cb)
case 3:p=C.x.geI(q)
if(typeof p==="string"){r=C.x.geI(q)
t=1
break}t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$cb,s)},
aY:function(a){var t=0,s=P.be(),r
var $async$aY=P.bj(function(b,c){if(b===1)return P.bg(c,s)
while(true)switch(t){case 0:r=W.wI(a,null,null)
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$aY,s)},
$asc8:function(a){return[a,P.z]}}
O.iB.prototype={
aY:function(a){var t=0,s=P.be(),r
var $async$aY=P.bj(function(b,c){if(b===1)return P.bg(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$aY,s)},
bf:function(a){return H.aY("Element format doesn't read from buffers")},
$asc8:function(a){return[a,P.z]}}
V.mn.prototype={
aW:function(a){return"font/opentype"},
P:function(a,b){var t=0,s=P.be(),r
var $async$P=P.bj(function(c,d){if(c===1)return P.bg(d,s)
while(true)switch(t){case 0:t=3
return P.bS(A.hH("scripts/Rendering/text/opentype.min.js",!1),$async$P)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$P,s)},
$asdy:function(){return[R.hq]},
$asc8:function(){return[R.hq,P.bl]}}
Z.mp.prototype={
$1:function(a){var t,s
t=$.$get$hr().n(0,a).a
s=this.a
return t==null?s==null:t===s},
$S:function(){return{func:1,args:[P.z]}}}
Z.iC.prototype={}
E.iR.prototype={}
E.nX.prototype={}
E.O.prototype={
A:function(a){var t="["+J.cB(this.a)+" x "+H.x(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fW.prototype={
A:function(a){var t="[(Random from "+P.uB(this.d,"(",")")+") x "+H.x(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.kT.prototype={
A:function(a){return"[Stats assigned from player Interests x"+H.x(this.b)+"]"}}
Y.mt.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.aC,$.U,$.K,$.a0,$.mV],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Unstable Domino",H.a([$.aE,$.U,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Exposed Thread",H.a([$.Q,$.U,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Teetering Plate",H.a([$.us,$.U,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.z]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.md,$.o)
t.i(0,$.ce,$.j)
t.i(0,$.dq,$.H)
t.i(0,$.dB,$.j)
r=$.r
q="An excited "+r+" runs up to the "
p=$.m
q=q+p+" and starts to "
o=$.L
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.ax
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
t.i(0,new R.M("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.S(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
o=$.m
t.i(0,new R.a4("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.y+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.r+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.B(),!1,!1,new Y.dW("Rewards/no_reward.png",null),1,null,null),$.A)
o=$.r
j="Now that the "+o+"s are free from the reign of "+$.y+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.m
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.L
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.ax+" Quest Online: The "+$.ab+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.fy
t.i(0,new R.a4("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.B(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p="The "+$.y+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.m
p=p+o+" shows the "
r=$.r
t.i(0,new R.bH("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.L+"s in time to stop them.    ")],H.a([],i),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
this.x.i(0,new X.F(s,t,null),$.bN)}}
Y.mu.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Sherpa Parka",H.a([$.br,$.U,$.ck],s),"Clearly the best class uses this.",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Guide Book",H.a([$.a0,$.br,$.aC,$.K,$.U,$.Y],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Whistle",H.a([$.D,$.U,$.aV],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Announcement System",H.a([$.D,$.U,$.a8,$.Y],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o
t=[P.z]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.md,$.j)
t.i(0,$.ce,$.j)
t.i(0,$.dq,$.o)
t.i(0,$.dB,$.j)
r="Now that the "+$.y+" is out of the way, a group of "
q=$.r
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.m
o=[U.b]
t.i(0,new R.a4("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.L+", but they are happy.")],H.a([],o),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.y+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.m
t.i(0,new R.bH("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.r+" "+$.L+"s in time to stop them.    ")],H.a([],o),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
this.x.i(0,new X.F(s,t,null),$.bN)}}
T.mv.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Doll",H.a([$.us,$.ay,$.av,$.T],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Soul Puppet",H.a([$.X,$.av,$.T,$.a0,$.aX],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.um,$.T],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.K,$.T,$.aA],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shades",H.a([$.ao,$.aQ,$.T],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.z]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.eq,$.H)
q.i(0,$.es,$.j)
q.i(0,$.c7,$.o)
p=$.m
o="The "+p+", guided by a "+$.r+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.y
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.by+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.i(0,new R.M("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.S(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
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
q.i(0,new R.M("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.S(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.on(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
h=this.f
h.i(0,new X.F(s,q,null),$.at)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cD,$.j)
s.i(0,$.iH,$.j)
s.i(0,$.fi,$.o)
s.i(0,$.c5,$.j)
s.i(0,$.cs,$.o)
s.i(0,$.dq,$.H)
p=$.m
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.ab
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.y
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.by+". The "+p+" is victorious. "
s.i(0,new R.M("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.S(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j="Now that the "+$.y+" has been defeated, a Copy "
p=$.m
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.r
j=j+k+"s "
l=$.L
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.ea+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a4("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.ef(),!1,!1,new Y.bX("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.y
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.M("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.S(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.dd(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
h.i(0,new X.F(q,s,null),$.at)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iF,$.j)
t.i(0,$.cs,$.j)
t.i(0,$.mc,$.j)
t.i(0,$.fc,$.o)
t.i(0,$.ho,$.j)
t.i(0,$.cr,$.o)
t.i(0,$.es,$.H)
r=$.m
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.r
t.i(0,new R.M("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.L+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.ax+" laws put in place by "+$.y+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.m
p="The "+r+" finds a weeping Broken Hearted "
q=$.r
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.ax
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.L
t.i(0,new R.a4("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.fy(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
q=$.m
m="The "+q+"  and the "
r=$.dD
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.y
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.M("Flushed Shipping Dungeon",!1,[new U.b(m),new U.S(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.x(C.n)+".",n)],H.a([],i),R.dU(),!1,!1,new Y.iP(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.al)
n=$.m
r="The "+n+"  and the "
q=$.dD
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.y
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.M("Pitched Shipping Dungeon",!1,[new U.b(r),new U.S(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.x(C.n)+".",m)],H.a([],i),R.dU(),!1,!1,new Y.jX(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.al)
h.i(0,new X.F(s,t,null),$.aB)}}
B.mw.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Family Ashes",H.a([$.aF,$.as,$.U,$.aD,$.bY],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.a0,$.K,$.U,$.aD,$.mS],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grooming Guide",H.a([$.aC,$.U,$.ai],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Powered Attorney",H.a([$.wT,$.U,$.ua,$.mS],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Executer's Ax",H.a([$.ub,$.U,$.au,$.mS],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o
t=[P.z]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.ci,$.o)
r=$.y
q="With the death of the "+r+", it now falls to the "
p=$.m
o=[U.b]
t.i(0,new R.a4("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.r+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
r="The "+$.y+" has released the frogs into the "
p=$.m
t.i(0,new R.bH("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.L+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
this.x.i(0,new X.F(s,t,null),$.bN)}}
X.my.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Wand",H.a([$.X,$.T,$.a2,$.bp],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Angel Feather",H.a([$.bp,$.bx,$.T,$.aR,$.a9,$.a0,$.a2],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bV,$.mR,$.T,$.a2,$.aU,$.bp],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candle",H.a([$.bp,$.aR,$.T,$.as],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.aE,$.aR,$.T,$.bp],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.z]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.tW,$.j)
q.i(0,$.cr,$.o)
q.i(0,$.aO,$.j)
q.i(0,$.cZ,$.j)
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
n=$.Gi
i=[U.b]
q.i(0,new R.M("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.S(k,p,j)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=$.m
j="The "+n+" has slain "+$.y+", but there\u2019s still one thing left to do. The land is infested with terrifying creatures called angels and it\u2019s been creeping the "+n+" out the whole time. Clearly their ultimate quest for this land must be to eliminate all the angels and free the land from their terror."
p="Angel killing is a lot harder than the "+n+" expected, and they were already expecting it to be pretty tough. The angels have huge amounts of health, and they\u2019re now completely pissed off over the whole exterminating them thing going on. The land is 100 times more terrifying now with swarming angels, but things are always darkest before the dawn! The "+n+" continues on their righteous quest."
k="All of the horrible angels have finally been slain. The land has been saved from their menace. The "+n+" excitedly waits for their quest reward, but nothing happens. They go to some of the "
l=$.r
q.i(0,new R.a4("Kill the Angels",!1,[new U.b(j),new U.b(p),new U.b(k+l+" villages to ask for a reward, but they are refused. Frankly, the "+l+"s would have preferred the angels remained instead of hiding in their homes while the "+n+" was waging their one person war. Maybe genocide wasn\u2019t the right answer after all?")],H.a([],i),R.dd(),!1,!1,new Y.dW("Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.F(s,q,null),$.at)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c6,$.j)
s.i(0,$.hk,$.o)
s.i(0,$.dC,$.j)
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
s.i(0,new R.M("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.S(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.at)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.j)
t.i(0,$.dA,$.H)
t.i(0,$.cE,$.j)
t.i(0,$.cZ,$.j)
r=$.m
q="The "+r+" finds a grey town of despondant "
p=$.r
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.y
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.ab
t.i(0,new R.M("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.S("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.m
o="The "+r+" discovers a group of "
p=$.r
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.y
t.i(0,new R.M("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.S("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.fy(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n.i(0,new X.F(s,t,null),$.at)}}
Q.mF.prototype={
b8:function(a){var t=0,s=P.be(),r,q,p
var $async$b8=P.bj(function(b,c){if(b===1)return P.bg(c,s)
while(true)switch(t){case 0:q=W.wK(null,a,null)
p=new W.e1(q,"load",!1,[W.P])
t=3
return P.bS(p.ga9(p),$async$b8)
case 3:r=q
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$b8,s)},
$asdy:function(){return[W.fm]},
$asc8:function(){return[W.fm,P.bl]}}
Q.od.prototype={
aW:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.be(),r,q=this,p,o,n
var $async$P=P.bj(function(c,d){if(c===1)return P.bg(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.bS(q.cU(b),$async$P)
case 3:p=n.wK(null,d,null)
o=new W.e1(p,"load",!1,[W.P])
t=4
return P.bS(o.ga9(o),$async$P)
case 4:r=p
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$P,s)}}
Q.oa.prototype={
aW:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.be()
var $async$P=P.bj(function(c,d){if(c===1)return P.bg(d,s)
while(true)switch(t){case 0:throw H.k("Read NYI")
return P.bh(null,s)}})
return P.bi($async$P,s)},
$asdy:function(){return[Q.jW]},
$asc8:function(){return[Q.jW,P.bl]}}
V.mI.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Inkwell",H.a([$.aQ,$.bn,$.T,$.bx],s),null,!1,"Vial of Not-ABs Oil")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Splatfest T-shirt",H.a([$.Q,$.b0,$.T,$.uh],s),null,!1,"Mechandising Party")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.Q,$.bn,$.T,$.aI,$.ew],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.D,$.aW,$.T,$.aI,$.ew,$.aF],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.X,$.mR,$.bn,$.aI,$.T,$.a0],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.z]
s=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cQ,$.j)
q.i(0,$.cr,$.H)
q.i(0,$.aO,$.H)
q.i(0,$.iL,$.j)
q.i(0,$.cs,$.H)
q.i(0,$.wx,$.j)
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
q.i(0,new R.M("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(m),new U.S(l,"The "+p+" and "+n+" end up getting distracted bickering after one of the "+k+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",j)],H.a([],i),R.dU(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
j=$.m
k="The "+j+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
n=$.r
k=k+n+"s explains that before  "
p=$.y
k=k+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+n+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+j+" vows to help. "
n="The "+j+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+n+"s discover that "+n+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
l="The "+j+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
m="The "+j+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+j+"'s "+$.by+". The "+j+" is finally free to restore the chains, bringing peace and understanding to the land. "
j="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+j+"."
p=$.xy
q.i(0,new R.M("Chain the Towers",!1,[new U.b(k),new U.b(n),new U.b(l),new U.S(m,j,o)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.m
o="The "+p+" learns of the "
j=$.ax
o=o+j+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
m=$.r
o=o+m+" explains that the "
l=$.y
m=o+l+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+m+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+j+" Tower. It is said that the "+l+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
n="The "+p+" defeats a fearsome "+l+" minion, whose death unlocks the most direct path to the "+j+" Tower . "
k="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+l+". "
p="The "+l+" lies slain by the "+p+"'s "+$.by+". The "+p+" is finally able to see what lies at the top of the "+j+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
q.i(0,new R.M("Protect the Beams",!1,[new U.b(m),new U.b(o),new U.b(n),new U.S(k,"The "+j+" Tower is more at risk than ever before.",p)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.m
j="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
k=$.r
j=j+k+" on "+$.ax+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
n="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
k="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+k+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+k+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.ea+" has so many friends, they have to assume everyone in this fight is already in their friend list."
q.i(0,new R.a4("One Degree of Separation",!1,[new U.b(j),new U.b(n),new U.b(k)],H.a([],i),R.dT(),!1,!1,new Y.bX("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
k="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.r+" on "
n=$.ax
k=k+n+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
j="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
n="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+n+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.ea+" is now more popular with your friends than you are."
q.i(0,new R.a4("Steal The Friends",!1,[new U.b(k),new U.b(j),new U.b(n)],H.a([],i),R.on(),!1,!1,new Y.bX("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
n="The "+p+"  and the "
j=$.dD
n=n+j+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
k="The "+p+"  and the "+j+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.y
k=k+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+j+" together."
q.i(0,new R.M("Pale Shipping Dungeon",!1,[new U.b(n),new U.S(k,"The "+p+" and "+j+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.x(C.n)+".",o)],H.a([],i),R.dU(),!1,!1,new Y.hT(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.al)
o=this.f
o.i(0,new X.F(s,q,null),$.at)
q=H.a(["Ink","Paper","Color","Quills"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.bf,$.H)
s.i(0,$.hk,$.H)
s.i(0,$.cE,$.H)
s.i(0,$.c7,$.j)
s.i(0,$.ff,$.H)
p=$.m
n="The "+p+" comes across an enormous wall. Strange symbols are spread across its face. An indent in the wall indicates a door will appear if the puzzle of the wall is solved."
m="The "+p+" is getting annoyed trying to solve the wall. They start inking graffiti on the wall out of spite. Suddenly, they realize that some of the symbols light up when the ink touches it."
l="The "+p+" spends a good hour painting the wall. A number of symbols light up but nothing else happens. The "+p+" realizes unhappily that they probably need to paint only the symbols. Shit."
k="The wall is finally clean except for the appropriate symbols and the door is open. The "+p+" is eager to fight "
j=$.y
k=k+j+" and give some payback for the terrible wall puzzle. "
h=j+" is defeated and the "+p+"\u2019s payback is complete. "
s.i(0,new R.M("Paint the Wall",!1,[new U.b(n),new U.b(m),new U.b(l),new U.S(k,"With the "+p+"\u2019s defeat, "+j+" closes the door repaints the outside wall, just to be a jerk.",h)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.H)
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
s.i(0,new R.M("Framed for Vandalisim",!1,[new U.b(j),new U.b(k),new U.b(l),new U.S(m,n+" begins making more doppelgangers to tarnish the "+h+"\u2019s good name.",p)],H.a([],i),R.dd(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
p=$.m
h="The "+p+" is playing against a "
n=$.r
h=h+n+" in a friendly game of "+$.ab+" Battle. With some smooth moves, they pull out a victory. The "+n+" comes over for a handshake. The "+p+" reaches out what would be their hand, if it wasn\u2019t currently a melting stump. The "+p+" screams in horror, but their hand instantly reforms. What the hell was that about?"
m=$.y
l="The entrance to "+m+"\u2019s lair is blocked by huge metal bars, with no apparent mechanisms to open it. The "+p+" walks around the lair looking for another way in, but suddenly everything starts growing! No wait, it\u2019s actually just the "+p+" slowly dissolving into a puddle. Again?! The dissolving process is once again reversed after a bunch of screaming."
n="The "+p+" makes their way to a secluded hut. A wizened "+n+" hermit sits in a meditative pose. The "+p+" says they were told that he could explain what was happening to the "+p+". The "+n+" nods and tells the "+p+" that their aspect was meant for a race of squid-like creatures with the power to turn into ink. Having the aspect means they are partially a squid now and are saddled with the same ability. The "+p+" will have to learn to control their new power if they wish to succeed in the session."
m="After some time practicing the "+p+" has gotten the hang of their strange ability and returns to "+m+"\u2019s lair. They proceed to melt into a squid-like form make of ink and effortlessly slide through the bars. Jeez that feels weird. "+m+" has been very impatient waiting for the "+p+" and immediately starts the strife!"
k="The "+p+" raises a hand in victory, and then has to shake said hand to stop it from turning to ink again. It sure is annoying being a squid now."
s.i(0,new R.M("An Inky Situation",!1,[new U.b(h),new U.b(l),new U.b(n),new U.S(m,"With a great blow, the "+p+" is slammed into a wall hard and turns into a puddle with eyes, before reforming. This would be funny if the "+p+" hasn\u2019t possibly died from the impact.",k)],H.a([],i),R.GG(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
o.i(0,new X.F(q,s,null),$.at)
s=H.a(["Nostalgia","Video Games","Ninety","Cartoons"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.ep,$.j)
t.i(0,$.cr,$.H)
t.i(0,$.aO,$.H)
t.i(0,$.c7,$.j)
t.i(0,$.eu,$.H)
r=$.m
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
p=$.r
q=q+p+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+p+" kept rhyming "
n=$.L
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+p+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+p+" approaches the "+r+". And aura of "+$.ax+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+p+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
p=this.x1
t.i(0,new R.Z("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],i),R.B(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.m
r="The "+p+" has finally tracked down the location of "
q=$.y
t.i(0,new R.M("Beat the Games",!1,[new U.b(r+q+"\u2019s lair. Surprisingly it\u2019s inside a gaudy arcade rather than a dungeon. The door to "+q+"\u2019s lair is locked, with the key inside a prize vendor. The "+p+" will need to win enough tickets to earn that key."),new U.b("The "+p+" is struggling to win any of the arcade games; they all seem impossibly hard. A "+q+" minion mocks them. They tell the "+p+" true gamers can easily beat any of these games."),new U.b("The "+p+" discovers the ultimate secret. Most of these games have cheat codes. Super difficult games are a lot easier when you can give yourself 30 lives."),new U.S("With enough tickets earned, the "+p+" takes the key and enters "+q+"\u2019s lair. "+q+" has been impatiently waiting. It\u2019s time to strife! ","A giant game over sign drops down from the ceiling.","The "+p+" beats "+q+", just like all the hard games they had to play. Who\u2019s a true gamer now?")],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
o.i(0,new X.F(s,t,null),$.bN)}}
B.hw.prototype={
E:function(){var t,s
t=Q.J(null,null,A.a5)
s=A.i("Perfectly Generic Object",H.a([],[G.a1]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.z]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d_,$.j)
q.i(0,$.bf,$.H)
q.i(0,$.dQ,$.j)
q.i(0,$.c5,$.o)
q.i(0,$.e7,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
m=[U.b]
q.i(0,new R.Z("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.B(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eu,$.j)
s.i(0,$.er,$.H)
s.i(0,$.et,$.o)
s.i(0,$.cQ,$.j)
s.i(0,$.ci,$.H)
p=$.m
o="The "+p+" learns that all of the local "
l=$.r
s.i(0,new R.Z("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.B(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.j)
t.i(0,$.bf,$.H)
t.i(0,$.ce,$.o)
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
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.vd(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.H)
n.i(0,new X.F(s,t,null),$.aB)},
A:function(a){return this.ch},
gG:function(a){return this.ch}}
A.a5.prototype={
ghC:function(){var t,s,r,q,p,o
t=H.a([],[P.z])
s=new A.eG(null,null)
s.br(this.r.a)
if(this.x===0)return t
r=P.d0(G.A3(this.r),!0,G.a1)
C.b.dl(r,new A.mZ())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bu)(r),++p){o=r[p]
if(!(o instanceof G.ae||o.gej().length===0))t.push(" "+Y.Io(s.eE(o.gej())))}return t},
gbK:function(){var t,s,r
for(t=this.r,s=new P.d7(t,t.r,null,null,[null]),s.c=t.e,r=0;s.D();)r+=s.d.gbK()
return r},
ghr:function(){var t=this.r
return new H.ej(t,new A.mY(),[H.N(t,0)])},
ghM:function(){var t,s,r,q,p
for(t=this.ghC(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bu)(t),++q)r+=t[q]+" "
return r+this.e},
A:function(a){return this.ghM()},
aD:function(a,b){var t=b.gbK()-this.gbK()
if(t>0)t=1
else if(t<0)t=-1
return C.d.bL(t)},
H:function(a,b,c,d,e){var t,s,r
t=P.jH(b,null)
this.r=t
if(t.a===0)t.h(0,$.wZ)
s=P.jH(this.ghr(),null)
for(t=new P.d7(s,s.r,null,null,[null]),t.c=s.e;t.D();){r=t.d
this.r.as(0,r.gf7())
this.r.am(0,r)}$.$get$xo().push(this)},
$isbK:1,
$asbK:function(){return[A.a5]}}
A.mZ.prototype={
$2:function(a,b){return a.geB()-C.a.bL(b.geB())},
$S:function(){return{func:1,args:[G.a1,G.a1]}}}
A.mY.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a1]}}}
N.n5.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Gavel",H.a([$.X,$.mQ],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Caution Tape",H.a([$.aE,$.aW],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.Q,$.ay],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mystery Novel",H.a([$.K,$.aC],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bU,$.ar,$.br],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.K,$.aC,$.ao],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Handcuffs",H.a([$.aF,$.D,$.aW],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.z]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.fe,$.H)
q.i(0,$.c6,$.o)
q.i(0,$.cE,$.H)
p=$.m
o="The "+p+" finds an elaborate courtroom full of "+$.L+"ing "
n=$.r
m=[U.b]
q.i(0,new R.Z("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ab+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c6,$.j)
s.i(0,$.dq,$.o)
s.i(0,$.cQ,$.o)
p=$.m
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.r
l=o+l+" yells 'Stop that thief' in betwen "+$.L+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.ab+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.Ge
s.i(0,new R.Z("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.B(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c6,$.j)
t.i(0,$.ci,$.o)
t.i(0,$.dp,$.H)
t.i(0,$.ev,$.o)
t.i(0,$.eq,$.o)
t.i(0,$.fg,$.o)
t.i(0,$.iI,$.o)
r=$.m
q="The "+r+" finds a crowd of "
p=$.L
q=q+p+"ing "
o=$.r
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.Gr
t.i(0,new R.Z("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.B(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(s,t,null),$.aB)}}
S.n7.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Shining Armor",H.a([$.aF,$.mU,$.U,$.fp],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Excalibur",H.a([$.a0,$.mU,$.U,$.aM,$.au,$.ex],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Noble Steed",H.a([$.D,$.U,$.bo,$.av],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aF,$.fp,$.U,$.mU],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.z]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.ma,$.j)
t.i(0,$.dr,$.j)
t.i(0,$.e8,$.j)
t.i(0,$.fg,$.j)
t.i(0,$.fe,$.o)
r="The "+$.y+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.m
p=[U.b]
t.i(0,new R.bH("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.L+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
q=$.y
r="Now that the "+q+" is defeated, the "
o=$.r
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.m
t.i(0,new R.a4("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
o=$.ax
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.y
n=n+q+". A Learned "+$.r+" explains that it can only be defeated by the Legendary "
r=$.ab
n=n+r+" Blade. The "
m=$.m
t.i(0,new R.a4("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
r="The volcanos of the land are weirdly active after the defeat of the "+$.y+". One begins to erupt near a "
m=$.r
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.L+"s, but not really doing anything to evacuate or save anyone. The "
o=$.m
t.i(0,new R.a4("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bN)}}
Q.na.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("LAW Gavel",H.a([$.T,$.X,$.mQ],s),"Organics seem to respect this. Use it to your advantage.",!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("LAW Caution Tape",H.a([$.T,$.aE,$.aW],s),"For when you want to tell inferior organics to keep out.",!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("STOP SIGN",H.a([$.T,$.ux,$.D,$.aW],s),"This isn't a weapon, dunkass.",!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.z]
s=H.a(["Scales","Disorder","Chaos","Injustice"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.fe,$.j)
q.i(0,$.dq,$.o)
q.i(0,$.ci,$.o)
q.i(0,$.c6,$.H)
q.i(0,$.cD,$.H)
p=$.m
o="The "+p+" is told by a worried "
n=$.r
o=o+n+" that a group of underling rebels are causing havoc across the land, breaking laws left and right. They must be stopped! Eventually."
m="The "+p+" has located a rebel hideout. The underlings get ready for a battle to the death when the "+p+" suddenly breaks out a "+$.ab+" and starts getting all lawyerly on them. The underlings are all sentenced to 30 years in prison, without parole."
l="The "+p+" finds out through interrogating enough of the underling rebels that they have a big mean leader they call the "
k=$.y
l=l+k+". Sounds like a challenge. The "+p+" cracks their knuckles as they prepare for the biggest case on this side of Skaia."
j="Arriving at the final rebel hideout, "+p+" prepares for battle against the "+k+". For their crimes against the "+n+"s, they're getting the DEATH SENTENCE."
n="The "+k+" lies slain by the "+p+"'s "+$.by+". The "+p+" has won! The "+n+"s are no longer plagued by the lawbreakers."
i=[U.b]
q.i(0,new R.M("Punish the Rebels",!1,[new U.b(o),new U.b(m),new U.b(l),new U.S(j,"The "+k+" continues to run their underling crime ring with the defeat of the "+p+".",n)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.F(s,q,null),$.at)
q=H.a(["Heroics","Villains","Heroes","Powers","Justice","Metropolises","Comics"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dr,$.j)
s.i(0,$.c7,$.o)
s.i(0,$.cr,$.o)
s.i(0,$.dr,$.H)
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
h="The "+k+" lies slain by the "+p+"'s "+$.by+". The last of the Heroes is no more.  Injustice takes over the land at last."
s.i(0,new R.M("Become the Villain",!1,[new U.b(o),new U.b(l),new U.b(m),new U.S(j,"The "+p+" is defeated. The "+k+" holds on to the last remnants of justice in the land.",h)],H.a([],i),R.dd(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=$.m
k="The "+h+" is taking a walk through one of the land's many cities when they witness a fight break out between some "
p=$.r
k=k+p+" Hero and an Underling Villain. Being naturally inclined toward the preservation of order, the "+h+" teams up with the "+p+" Hero and triumphs against the Underling Villain. As a reward, the "+p+" Hero invites the "+h+" to join an elite team of crime fighting good guys! Awesome!"
p="The "+h+" works together with some "+p+" Heroes to take down and arrest some Underling Villains. Slowly but surely, the balance of order and disorder begins to shift in order's favor. The number of villains is getting fewer and fewer."
j="With the last of the Villainous Underlings defeated, the "+h+" rejoices, thinking that justice has been served in this land. But what's this? Lightning strikes the ground far away and causes a dark mountain to shoot up into the sky! The lair of the final villain, the "
m=$.y
j=j+m+", has been revealed."
l="The "+h+" storms the lair of the "+m+", the final villain in all of this land. It's time to bring back KAW, once and for all!"
o="The "+m+" lies slain by the "+h+"'s "+$.by+". The last of the Villains is no more. Justice is finally preserved in the land at last."
s.i(0,new R.M("Become the Hero",!1,[new U.b(k),new U.b(p),new U.b(j),new U.S(l,"The "+h+" is defeated. The "+m+" holds on to the last remnants of injustice in the land.",o)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.at)
s=H.a(["Greed","Poverty","Discrepancy","Famine","Starvation"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hn,$.j)
t.i(0,$.d_,$.o)
t.i(0,$.iJ,$.o)
t.i(0,$.iG,$.H)
t.i(0,$.dP,$.H)
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
p="The "+l+" lies slain by the "+r+"'s "+$.by+". The "+r+" uses the golden "+k+" to cut the "+p+" population in half. Problem solved. "
t.i(0,new R.M("Bring the Balance",!1,[new U.b(q),new U.b(o),new U.b(m),new U.S(j,"The "+r+" is defeated and left without the golden "+k+" they seek.",p)],H.a([],i),R.dd(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
k="The "+p+" looks upon the land and notices how some of the "
r=$.r
k=k+r+"s are low on food and other resources while others live in luxury. Something must be done to fix this!"
j="The "+p+" comes up with a plan to bring balance to the land. They can force the "+r+"s who have an abundance of resources to share them with the "+r+"s who are resource deprived. But when the "+p+" tells them this, they get understandably upset. They worked so hard for their resources, why should they share them with others? The "+p+" is left stumped."
m="The "+p+" wanders through a poverty striken "+r+" village and is told the legend of the "
o=$.y
m=m+o+". The "+o+" lives in a lair on the other side of the land, where they hoard all of the land's resources. The "+p+" is confused as to why nobody mentioned this before. The solution to the resource problem is obvious now."
r="The "+p+" shows up at the "+o+"'s lair and asks them to be kind and share their resources with the "+r+"s. The "+o+" agrees... if the "+p+" can defeat them first!"
q="The "+o+" lies slain by the "+p+"'s "+$.by+". The "+p+" distributes all of the denizen's resources throughout the land, improving living conditions everywhere."
t.i(0,new R.M("Create the Balance",!1,[new U.b(k),new U.b(j),new U.b(m),new U.S(r,"The horrific inequality maintained by the "+o+" continues with the defeat of the "+p+".",q)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(s,t,null),$.at)}}
K.nc.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Creeping Vine",H.a([$.X,$.T,$.aS,$.av],s),null,!1,"Sentient Plant Tentacles")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lollipop",H.a([$.ud,$.T,$.aI],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Golem",H.a([$.aF,$.aw,$.T,$.av],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bY,$.T,$.aI],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.aQ,$.T,$.aI,$.a0,$.a2],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Homunculus",H.a([$.bo,$.T,$.av],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.z]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ce,$.j)
q.i(0,$.bf,$.j)
q.i(0,$.hm,$.H)
q.i(0,$.aO,$.o)
q.i(0,$.md,$.o)
q.i(0,$.cR,$.H)
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
q.i(0,new R.M("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.S(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.F(s,q,null),$.at)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ce,$.j)
s.i(0,$.cs,$.j)
s.i(0,$.cR,$.H)
s.i(0,$.aO,$.o)
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
s.i(0,new R.M("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.S(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
o=$.m
j="The "+o+" finds themself in the middle of a large plain. They see a small pedestal with a seed packet and note.The note says the field has magical properties that grows any plant in only half an hour. If one of the seeds in the packet can be grown, the lair of "
i=$.y
j=j+i+" will be revealed.  Sounds easy enough. The "+o+" makes a small hole and drops a seed in. The plant immediately starts growing, but almost as immediately "+i+" minions zoom in from out of nowhere and stomp the plant dead."
l="The "+o+" attempts to stop the minions by force, but they are surprisingly agile and make it past the "+o+" to the planted seeds every time. The "+o+" reads the note again and decides to try growing some other plants to protect the seeds as they grow. The "+o+" eats a few fruits they had in their sylladex and grows a wall of trees from the leftover seeds. However the minions are still able to climb and slip through at rapid speed. A few trees isn\u2019t going to be enough to protect the seeds."
k="The "+o+" travels across their land gathering a bunch of seeds to strew them about the field and make a giant maze. Then they plant a few seeds deep inside the maze. The "+i+" minions are very quick, but they aren\u2019t that smart. Some of the seeds manage to grow before the minions can figure out how to get to them. On close inspection, leaves of the full-grown plants are actually maps of the "+o+"\u2019s land, with "+i+"\u2019s lair marked. "
m="The "+o+" tracks down "+i+"\u2019s lair using their leaf map. They toss the leaf aside and pull out their "+$.by+", ready to throw down!"
h="With "+i+" gone, the "+$.r+"s take up residence in the plain. They were always too afraid to when "+i+" minions were around. They thank the "+o+" for their work."
s.i(0,new R.M("Protect the Seeds",!1,[new U.b(j),new U.b(l),new U.b(k),new U.S(m,"With their defeat, the "+o+"\u2019s efforts to find "+i+"\u2019s lair have been made pointless.",h)],H.a([],p),R.om(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n.i(0,new X.F(q,s,null),$.at)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.d_,$.j)
t.i(0,$.bf,$.H)
t.i(0,$.dQ,$.j)
t.i(0,$.c5,$.o)
t.i(0,$.e7,$.o)
t.i(0,$.iE,$.o)
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
t.i(0,new R.M("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.S(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(s,t,null),$.at)}}
G.nd.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("FAQ",H.a([$.a8,$.T,$.Y,$.bZ],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aE,$.T,$.aR,$.a8,$.bZ],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.T,$.aR,$.bZ,$.a0,$.ue],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.x2,$.T,$.ah],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.xb,$.T],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.aS,$.T,$.aR,$.bZ],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("8-Ball",H.a([$.aQ,$.T,$.av],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.z]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.m9,$.j)
q.i(0,$.hl,$.o)
q.i(0,$.dO,$.j)
q.i(0,$.es,$.j)
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
q.i(0,new R.M("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.S(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.m
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.L+"ing "+$.r+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.y
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.M("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.S(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.m
l="The "+m+" finds the enormous casino that serves as "
k=$.y
l=l+k+"\u2019s lair. At the center of the casino is a lift to "+k+"\u2019s quarters that can only be activated with a key earned by winning enough "
j=$.ax
l=l+j+" chips at all the casino games. The "+m+" starts with Blackjack, and wins easily by counting the cards being dealt and only betting high when the odds are good. It helps that the "+k+" minions and "
p=$.r
l=l+p+"s aren\u2019t smart enough to pick up on what the "+m+" is doing."
n="The next casino game to beat is the roulette table. The "+m+" watches the "+p+"s play for a couple of games. They quickly realize there\u2019s a defect on the wheel that causes the ball to slightly favor the right side of the wheel. They bet accordingly and eventually earn enough "+j+" chips to move to the next casino game."
o="The "+m+" is stuck at the the final casino game, the slot machines. The only way to win enough "+j+" chips is by winning the Mega Jackpot, but there aren\u2019t any noticeable patterns or defects in the machines to take advantage of. The "+m+" puzzles over this for a while, before paying attention to who wins the Mega Jackpot. The only winners are "+k+" minions; the slots have been rigged so the house never has to pay out! The "+m+" cuts in front of a "+k+" minion at a slot machine and wins the Mega Jackpot that was meant for the minion. The minions aren\u2019t happy about this, but they can\u2019t complain without revealing to the "+p+" customers that the game is rigged."
j="The "+m+" turns in their "+j+" chips at the front desk for the lift key to "+k+"\u2019s quarters. As soon the lift brings them to "+k+"\u2019s quarters, they are immediately attacked! It seems "+k+" is not very pleased that the "+m+" found ways to cheat at all the casino games. "
p=k+" has been slain, and ownership of the casino is up for grabs. The "+m+" puts the casino in the hands of slightly more competent than average "+p+"s so they can continue exploring their land."
q.i(0,new R.M("Beat the Odds",!1,[new U.b(l),new U.b(n),new U.b(o),new U.S(j,k+" is pleased they got "+m+" out of the way, so "+k+"\u2019s casino can become profitable again.",p)],H.a([],i),R.dT(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
p=this.f
p.i(0,new X.F(s,q,null),$.at)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ce,$.o)
s.i(0,$.aO,$.o)
s.i(0,$.dA,$.j)
s.i(0,$.m8,$.j)
s.i(0,$.er,$.j)
s.i(0,$.hk,$.j)
o=$.m
n="The "+o+" walks into a "
m=$.r
n=n+m+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.ab
n=n+l+", but "
k=$.y
n=n+k+" has hoarded all of the planets "
j=$.ax
l=n+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+o+" vows to take back some "+j+" Candles for the poor "+m+"s. "
n="After a long search, the "+o+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+o+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+o+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+o+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+o+" triumphantly returns to the village among the joyful "+$.L+"ing of the "+m+"s."
k="The "+o+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
m="Never again shall the "+m+"s be without "+j+" Candles!"
s.i(0,new R.M("The Candlestick Taker",!1,[new U.b(l),new U.b(n),new U.b(h),new U.S(k,"The "+j+" candles are once again at risk.",m)],H.a([],i),R.on(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
j="The "+m+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.r
j=j+k+" explains that the "
h=$.y
s.i(0,new R.M("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+m+" vows to help.   "),new U.b("The "+m+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.L+"s as they bask in the light. The "+m+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+m+" must prepare themself for a tough fight.  "),new U.S("The "+m+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.at)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ff,$.o)
q.i(0,$.bf,$.o)
q.i(0,$.fh,$.j)
q.i(0,$.aO,$.o)
q.i(0,$.cE,$.j)
o="Now that the "+$.y+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
n=$.m
o=o+n+" sets up a wiki and settles in to help the "
m=$.r
o=o+m+"s deal with it all."
m="Within barely any time at all, the "+m+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+n+" makes sure all of the information is from credible sources."
n="When the "+n+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.ea+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a4("Moderate the Wiki",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],i),R.ef(),!1,!1,new Y.bX("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
l="Now that the "+$.y+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
n=$.m
l=l+n+" shrugs and sets up a wiki and lets the "
m=$.r
l=l+m+"s deal with it all."
m="Within barely any time at all, unmoderated "+m+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+n+" alone, and each claims they are a different SPECIES entirely. The "+n+" finds this to be hilarious."
n="Luckily it turns out all that disinformation running around about the "+n+" thwarts some would be assasins. It turns out the "+n+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
o="The "+$.ea+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a4("Create the Wiki",!1,[new U.b(l),new U.b(m),new U.b(n)],H.a([],i),R.dd(),!1,!1,new Y.bX("Disinformation Network",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.r
n=o+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
m=$.m
n=n+m+" possibly stop it?"
o="The "+m+" pours over maps and charts. What do the sick "+o+"s have in common with each other?  Finally, there is a flash of inspiration. "+o+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+m+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+m+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+m+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+m+" traces the contaminated river back to it's source. The "
j=$.y
q.i(0,new R.M("Shed the Light",!1,[new U.b(n),new U.b(o),new U.b(l),new U.S(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+m+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,q,null),$.at)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dO,$.j)
t.i(0,$.m9,$.j)
t.i(0,$.es,$.o)
t.i(0,$.cr,$.o)
t.i(0,$.tZ,$.o)
t.i(0,$.c5,$.H)
t.i(0,$.e8,$.H)
t.i(0,$.c7,$.o)
t.i(0,$.cD,$.H)
t.i(0,$.bf,$.o)
t.i(0,$.cJ,$.j)
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
t.i(0,new R.M("Be the Star",!1,[new U.b(r),new U.b(m),new U.b(o),new U.S(l,"The acting career of the "+s+" is in shambles.",n)],H.a([],i),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n="After the "+$.y+", the "
s=$.m
n=n+s+" is disappointed to learn that barely any of the "
l=$.r
n=n+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
o="The "+$.ea+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a4("Be the Biggest Star in Paradox Space",!1,[new U.b(n),new U.b(l),new U.b(s)],H.a([],i),R.ef(),!1,!1,new Y.bX("What's my name?",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p.i(0,new X.F(q,t,null),$.at)}}
Z.np.prototype={
E:function(){var t,s,r,q
t=this.M
s=[G.a1]
r=A.i("Dream Bubbles Book",H.a([$.K,$.ai,$.aC,$.wW],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),[H.N(t,0)]))
t=Q.J(null,null,A.a5)
r=A.i("Deck of Uno Cards",H.a([$.mN,$.ur,$.ai],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lord's Cape",H.a([$.Q,$.U,$.ai],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.mV,$.U,$.ai],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.a0,$.K,$.U,$.bw,$.aC],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.z]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dp,$.H)
q.i(0,$.ev,$.H)
q.i(0,$.c5,$.H)
q.i(0,$.cQ,$.o)
p="The "+$.y+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.m
p=p+o+" comands that the "
n=$.r
m=[U.b]
q.i(0,new R.bH("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.L+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
o="As soon as the "+$.y+" is defeated, the "
n=$.r
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.m
q.i(0,new R.a4("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.dD
n="The "+p+" reaches the entrance to a massive dungeon. They heard rumors that important information could be found at the bottom. After some very confusing puzzles and a couple of strifes, they find themself at the dungeon\u2019s center. A lone, elderly "+$.r+" is there to greet the "+p+". He tells the "+p+" that "
o=$.y
n=n+o+" needs to be defeated by a powerful hero, and imparts some clues on how to defeat them. Wait a second, isn\u2019t that the "
l=$.m
n=n+l+"\u2019s Denizen? The "+p+" contacts them and passes on the information they found.  "
k="The "+p+" is exploring another dungeon. Deep inside, they enter a large open room, clearly meant for a boss fight. As expected, "+o+" emerges from a large hole in the ceiling and lets loose a roar. The "+p+" readies themself for a fight, but "+o+" takes one glance and immediately goes back into its hole. It looks like "+o+" is only interested in fighting the "+l+". The "+p+" gives them a call and sits around waiting for them to come. After a few hours, the "+l+" has arrived and the strife can finally start."
p="The "+l+" was victorious in his fight against "+o+". The "+p+" also helped."
q.i(0,new R.M("Be the Protagonist",!1,[new U.b(n),new U.S(k,"The "+l+" fought hard, but was ultimately defeated by "+o+".",p)],H.a([],m),R.GH(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
q.i(0,new R.a4("Skip the Boring Details",!1,[new U.b("The "+p+" finds a giant pillar, inscribed with a long and arduous quest that the "+p+" is destined to complete. However the "+p+" isn\u2019t interested on spending so much time on one quest, so they uses their powers and fast forward right to the end. A parade is held in their honor for completing the grand quest that no one got to see happen. A bit unsatisfying, really.")],H.a([],m),R.oo(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.x
p.i(0,new X.F(s,q,null),$.bN)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.ww,$.j)
t.i(0,$.cZ,$.j)
t.i(0,$.bf,$.j)
t.i(0,$.aO,$.o)
s="The "+$.y+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.m
s=s+r+" comands that the "
o=$.r
t.i(0,new R.bH("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.L+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
r="As soon as the "+$.y+" is defeated, the "
o=$.r
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.m
t.i(0,new R.a4("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.B(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",this.M,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,t,null),$.bN)}}
S.nr.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Alternate Costume",H.a([$.Q,$.U,$.a2,$.a0,$.am],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Cape",H.a([$.Q,$.U,$.a2],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Staff",H.a([$.X,$.U,$.ah,$.a2,$.dR],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Walking Broom",H.a([$.jy,$.X,$.U,$.av,$.a2,$.dR],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o,n
t=[P.z]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.ep,$.j)
t.i(0,$.fg,$.o)
t.i(0,$.ci,$.j)
t.i(0,$.et,$.o)
t.i(0,$.d_,$.H)
r="The "+$.y+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.m
p=[U.b]
t.i(0,new R.bH("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
q=$.m
t.i(0,new R.a4("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.B(),!1,!1,new Y.dm("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
q=$.m
r="The "+q+" is feeling quite pleased with their victory over the "+$.y+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.ax
t.i(0,new R.a4("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.B(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="Now that the "+$.y+" has been defeated, the "
o=$.r
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.m
q=q+r+"'s help in planning the brand new city of "
n=$.ax
t.i(0,new R.a4("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.L+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.B(),!1,!1,new Y.bX(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bN)}}
U.ns.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Maiden's Breath",H.a([$.aS,$.U,$.ay],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Feather Duster",H.a([$.X,$.U,$.dR,$.bx],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.ay,$.aF,$.D,$.U,$.a0,$.fp,$.wN],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.K,$.U,$.a9,$.aC],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o,n
t=[P.z]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.dB,$.j)
t.i(0,$.ce,$.j)
t.i(0,$.aO,$.o)
t.i(0,$.bf,$.o)
t.i(0,$.dA,$.o)
t.i(0,$.cD,$.o)
r="The "+$.y+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.m
r=r+q+" asks local  "
p=$.r
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.b]
t.i(0,new R.bH("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
q=$.m
o="The "+q+" has adopted a local "
p=$.r
t.i(0,new R.a4("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.L+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.y+". ")],H.a([],n),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bN)}}
V.nC.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Puzzle Box",H.a([$.X,$.T,$.a2],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a8,$.T,$.D],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.D,$.T],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.D,$.T,$.a8,$.Y],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Janus Bust",H.a([$.aF,$.jz,$.aw,$.ai,$.T,$.a0,$.a8],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.z]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cZ,$.o)
q.i(0,$.hl,$.H)
q.i(0,$.cE,$.H)
p=$.m
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.r
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.y
k=[U.b]
q.i(0,new R.M("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.S(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.dT(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.m
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.r+" explains that at the end of the Labrinth is the "
l=$.y
q.i(0,new R.M("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.S("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.F(s,q,null),$.at)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.fe,$.H)
s.i(0,$.c6,$.o)
s.i(0,$.cE,$.H)
s.i(0,$.cZ,$.H)
p=$.y
o="The "+p+" has commited a staggering amount of crimes against the local "+$.r+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.m
s.i(0,new R.M("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.S("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.at)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hn,$.j)
t.i(0,$.bf,$.o)
t.i(0,$.fh,$.j)
t.i(0,$.aO,$.o)
t.i(0,$.cE,$.j)
r=$.m
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.y
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.ab+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.M("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.S(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l=$.m
r="The "+l+" has finally found the lair of "
m=$.y
r=r+m+". Appropriately enough for a Mind Denizen, their dungeon is a giant replica of a brain. Doors in the dungeon simulate neurons by opening and closing at seemingly random intervals to mimic brain activity."
o="The "+l+" has spent far too many hours trying to navigate the dungeon. They raise their fist in frustration, and at the same time, a door opens. They drop their fist and attempt to enter, but the door immediately closes again. They raise their fist once more, and the door opens again, and closes again when the "+l+" drops their fist. They raise and lower their fist a bunch of times, and the door opens and closes in perfect synch. Is...is the dungeon based off of the "+l+"\u2019s brain!?  "
p="The "+l+" is starting to get a hang out of controlling their brain dungeon. Most of the doors can be opened by experimentally moving part of their body or using one of their senses. (The door that opened by licking one of the walls wasn\u2019t very fun) There is only one door the "+l+" is still unable to open, which is likely "+m+"\u2019s."
q="Through some convoluted thought processes focused on thinking about "+m+", the "+l+" manages to open the final door to "+m+". They are relieved it didn\u2019t take some cliche like having to unlock their subconscious or some junk like that. They begin the final fight inside their own mind."
j="With "+m+" defeated, the "+l+" decides to rig explosives around the dungeon and bring the whole place down. The thought that others could basically see the inside of the "+l+"\u2019s mind was a little too creepy."
t.i(0,new R.M("Explore the Brain",!1,[new U.b(r),new U.b(o),new U.b(p),new U.S(q,"Various doors open and close across the dungeon to simulate the "+l+"\u2019s despair in the face of "+m+".",j)],H.a([],k),R.fy(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.H)
n.i(0,new X.F(s,t,null),$.at)}}
E.nD.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Feather Pen",H.a([$.D,$.U,$.ai,$.bx],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.xa,$.U,$.jz,$.ah,$.a0],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Book of Poetry",H.a([$.K,$.U,$.ai,$.aC],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.z]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.dB,$.j)
t.i(0,$.ce,$.j)
t.i(0,$.aO,$.o)
t.i(0,$.bf,$.o)
t.i(0,$.dA,$.o)
t.i(0,$.cD,$.o)
r="The "+$.y+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.m
r=r+q+" asks the "
p=$.r
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.b]
t.i(0,new R.bH("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.o)
q="You'd think after the dramatic defeat of the "+$.y+" the "
o=$.r
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.m
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ab
t.i(0,new R.a4("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bN)}}
F.nE.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Piano",H.a([$.ah,$.X,$.a9,$.ai],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flute",H.a([$.D,$.a9],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microphone",H.a([$.aV,$.a8],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Violin",H.a([$.X,$.a9],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sheet Music",H.a([$.K,$.a9],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electric Guitar",H.a([$.aE,$.a9,$.a8,$.aV,$.ao],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.aE,$.a9,$.a8,$.ao],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guitar",H.a([$.X,$.a9],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.z]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cr,$.al)
q.i(0,$.tZ,$.j)
q.i(0,$.es,$.j)
q.i(0,$.dA,$.o)
q.i(0,$.aO,$.o)
q.i(0,$.m6,$.o)
p=$.m
o="The "+p+" meets a wise old "+$.r+" who tells that the "+$.y+" can only be awoken by the Legendary Hero playing the "
n=$.ax
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ab
k=[U.b]
q.i(0,new R.Z("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.m
n="The "+p+" finds an empty, trashed "
l=$.ax
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.ab+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.L+"ing "+$.r+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.Gj
q.i(0,new R.Z("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.B(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.u1,$.al)
s.i(0,$.dq,$.o)
s.i(0,$.cQ,$.o)
s.i(0,$.dA,$.j)
s.i(0,$.m6,$.al)
o=$.m
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.ax
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.y
s.i(0,new R.Z("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.ab+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hm,$.al)
t.i(0,$.c7,$.o)
t.i(0,$.dQ,$.o)
r=$.m
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.r
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.L
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.ax+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.Z("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.B(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,t,null),$.aB)}}
Y.nT.prototype={
P:function(a,b){var t=0,s=P.be(),r,q=this,p,o
var $async$P=P.bj(function(c,d){if(c===1)return P.bg(d,s)
while(true)switch(t){case 0:t=3
return P.bS(A.hH("scripts/Rendering/threed/three.min.js",!1),$async$P)
case 3:t=4
return P.bS(Q.oC(),$async$P)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.aq(p)
o.f4(p,P.xs(["",$.$get$wk()],P.z,S.hK))
o.f3(p,!1)
q.b=p}J.w7(p,b)
r=J.w7(q.b,b)
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$P,s)},
$aseM:function(){return[S.fv]},
$asc8:function(){return[S.fv,P.z]}}
V.o2.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Shorts",H.a([$.Q,$.U,$.fo,$.a0],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.aE,$.U,$.ao],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Steroids",H.a([$.ar,$.U,$.a2],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.z]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.ma,$.j)
t.i(0,$.cR,$.o)
t.i(0,$.hp,$.o)
t.i(0,$.mc,$.o)
t.i(0,$.dB,$.o)
t.i(0,$.bf,$.o)
t.i(0,$.e7,$.o)
t.i(0,$.er,$.o)
t.i(0,$.u2,$.o)
t.i(0,$.iE,$.o)
t.i(0,$.m8,$.o)
r="The "+$.y+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.m
r=r+q+" asks the "
p=$.r
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.b]
t.i(0,new R.bH("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
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
t.i(0,new R.M("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.S(k,"The "+q+" whited out...",m)],H.a([],n),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m="Now that the "+$.y+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.m
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.r
t.i(0,new R.a4("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.ax+" buffs. With a deafening "+$.L+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.B(),!1,!1,new Y.ir("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bN)}}
G.of.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Superhero Action Figure",H.a([$.aE,$.ao,$.aP],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Action DVD",H.a([$.aE,$.ao],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.aE,$.bY],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.aE,$.aU,$.br,$.ck],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.aE,$.ao],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Movie Poster",H.a([$.K,$.ao],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.aS,$.ao,$.Q,$.av],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.aS,$.aK,$.ao,$.Q],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shitty Sword",H.a([$.aP,$.D,$.ao,$.ex,$.au,$.bV],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.K,$.ao],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.K,$.ao],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.z]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cD,$.o)
q.i(0,$.cJ,$.o)
q.i(0,$.c7,$.j)
q.i(0,$.cR,$.al)
q.i(0,$.dC,$.al)
p=$.m
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.r
o=o+n+" manages to catch a video of it, and it goes viral on "+$.ax+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.L+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.Gk
l=[U.b]
q.i(0,new R.Z("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.B(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eq,$.o)
s.i(0,$.dq,$.o)
s.i(0,$.cJ,$.o)
s.i(0,$.c7,$.o)
s.i(0,$.dr,$.j)
o=$.m
n="The "+o+" runs towards an explosion in a local "
m=$.r
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.ax
s.i(0,new R.Z("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cJ,$.o)
t.i(0,$.dO,$.j)
t.i(0,$.cs,$.j)
t.i(0,$.dr,$.o)
r=$.m
q="The "+r+" gets a job at the "+$.ax+" Cinema. A new movie, The Lonely "
o=$.ab
q=q+o+" is coming out soon, and "
n=$.r
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.L+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.Z("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.B(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,t,null),$.aB)}}
N.oj.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Feather'd Cap",H.a([$.Q,$.U,$.fo],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crown",H.a([$.a0,$.uj,$.U,$.fo],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gunpowder",H.a([$.bt,$.U],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o,n
t=[P.z]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.cJ,$.o)
t.i(0,$.cZ,$.o)
t.i(0,$.dQ,$.H)
r="With the closing of the curtain, the "+$.y+" has released the frogs, and yet they are nowhere to be found. The "
q=$.m
p=[U.b]
t.i(0,new R.bH("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
q=$.y
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.m
r=r+o+" to get it back to normal. They organize a team of "
n=$.r
t.i(0,new R.a4("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ab+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bN)}}
U.b.prototype={}
U.S.prototype={}
R.ol.prototype={
A:function(a){return H.x(new H.dZ(H.kG(this),null))+": "+this.c},
gG:function(a){return this.c}}
R.Z.prototype={}
R.M.prototype={}
R.a4.prototype={}
R.bH.prototype={}
E.op.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Curtain",H.a([$.Q,$.T,$.aP],s),null,!1,"Show Ender")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.D,$.ex,$.aM,$.T,$.au,$.aX,$.aP,$.bs,$.aD],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Omegaphone",H.a([$.D,$.aV,$.a8,$.T,$.aP],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trike Horn",H.a([$.aF,$.D,$.aV,$.bw,$.cg,$.T,$.aP],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.ar,$.bw,$.ai,$.T,$.a0,$.aP],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.X,$.T,$.aX,$.as,$.bt,$.aP],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.z]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.m5,$.j)
q.i(0,$.dp,$.j)
q.i(0,$.dq,$.j)
q.i(0,$.d_,$.o)
q.i(0,$.c5,$.o)
q.i(0,$.ci,$.o)
q.i(0,$.c6,$.H)
q.i(0,$.dC,$.o)
q.i(0,$.eq,$.j)
q.i(0,$.iI,$.j)
q.i(0,$.fg,$.j)
q.i(0,$.mb,$.j)
q.i(0,$.hm,$.o)
q.i(0,$.ev,$.j)
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
q.i(0,new R.M("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.S(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.fy(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
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
q.i(0,new R.M("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.S(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=this.f
h.i(0,new X.F(s,q,null),$.at)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dA,$.j)
s.i(0,$.c5,$.o)
s.i(0,$.c6,$.j)
s.i(0,$.cr,$.j)
s.i(0,$.cD,$.j)
s.i(0,$.cJ,$.o)
s.i(0,$.iH,$.H)
s.i(0,$.dp,$.o)
s.i(0,$.cR,$.j)
s.i(0,$.c7,$.j)
s.i(0,$.dC,$.H)
p=$.L
o="The "+p+"ing and capering "
n=$.r
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.m
o=o+m+" to do a stupid "
l=$.ax
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.y
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.M("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.S(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.F(q,s,null),$.at)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.m5,$.j)
t.i(0,$.dC,$.j)
t.i(0,$.c6,$.j)
t.i(0,$.cR,$.o)
t.i(0,$.cD,$.j)
r=$.m
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.r+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.y+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.M("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.S(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.m
t.i(0,new R.a4("Stop the Narration",!1,[new U.b("The "+m+" is walking down a long road, wondering when they\u2019ll find the next town. They suddenly stop and look behind them, asking who said that. They look everywhere but can\u2019t find where the voice is coming from. They fruitlessly demand the narration to stop."),new U.b("The "+m+" is having a hard time doing any of their quests while hearing every action narrated. No one else can hear the voice and some are starting to think the "+m+" is losing their mind. The "+m+" vows to find who is doing the narrating and beat the stuffing out if them. However, the "+m+" is very unlikely to end the narration. The "+m+" raises their fist at a random location in the sky and shouts we\u2019ll see about that."),new U.b("The "+m+" finds themself in front of an ancient looking broadcasting tower. They wonder aloud whether the tower is broadcasting the narration. They demand the narration to be useful for a change and just tell them, but they get no answer. In a huff, they search the tower. A couple of hours later, the "+m+" find an ominous looking machine displaying pictures of the session, and text of this narration. Realizing the machine is broadcasting the narration, and getting confirmation from the narration that it is so, they immediately destroy it. They no longer hear the narration and are pleased to go back to adventuring. The "+m+" doesn\u2019t realize they only stopped the narration being broadcasted to their ears and not the narration itself.")],H.a([],g),R.dT(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.F(s,t,null),$.at)}}
Y.dW.prototype={}
Y.a7.prototype={}
Y.dm.prototype={}
Y.bX.prototype={
gG:function(a){return this.c}}
Y.R.prototype={}
Y.ir.prototype={}
Y.bG.prototype={}
Y.d4.prototype={}
Y.ld.prototype={}
Y.bF.prototype={}
Y.hT.prototype={}
Y.iP.prototype={}
Y.jX.prototype={}
N.ou.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Domino Mask",H.a([$.Q,$.U,$.fo],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Archery Set",H.a([$.uc,$.U,$.fo,$.wO],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.a0,$.aE,$.a8,$.U,$.Y,$.am],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o,n
t=[P.z]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.c6,$.j)
t.i(0,$.ci,$.o)
t.i(0,$.dr,$.o)
r="The "+$.y+" cannot release the frogs since the corrupt Noble "
q=$.r
r=r+q+"s have hoarded them. The "
p=$.m
o=[U.b]
t.i(0,new R.bH("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
p=$.m
q="The "+p+" learns of the extreme injustices of the "
r=$.r
q=q+r+"s who rose to power during the tyranny of "
n=$.y
t.i(0,new R.a4("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bN)}}
Q.ov.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Red Rose",H.a([$.aA,$.ay],s),null,!1,"Seductive Plant")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friend Fic",H.a([$.aA,$.K],s),"Don't ship irl ppl, asshole.",!1,"Grid of Sin")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.aA,$.ar],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candelabra",H.a([$.aA,$.as],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Head Cannon",H.a([$.aA,$.bt,$.D,$.aK],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.aC,$.K,$.aA],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.z]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cs,$.j)
q.i(0,$.hp,$.o)
q.i(0,$.fc,$.o)
q.i(0,$.ho,$.j)
q.i(0,$.cr,$.o)
q.i(0,$.iF,$.H)
p=$.m
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.r
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ab+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.i(0,new R.Z("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.B(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cr,$.o)
s.i(0,$.dO,$.j)
s.i(0,$.ho,$.j)
s.i(0,$.cs,$.o)
s.i(0,$.es,$.H)
s.i(0,$.iF,$.H)
o=$.r
n="A Romantic "+o+" approaches the "
m=$.m
s.i(0,new R.Z("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iF,$.j)
t.i(0,$.cs,$.j)
t.i(0,$.fc,$.o)
t.i(0,$.mc,$.j)
t.i(0,$.ho,$.j)
t.i(0,$.cr,$.o)
t.i(0,$.es,$.H)
r=$.m
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.r
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.L+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.y+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.Gh
t.i(0,new R.Z("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.B(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=$.m
r="The "+n+"  and the "
o=$.dD
t.i(0,new R.Z("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.dU(),!1,!1,new Y.iP(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.al)
o=$.m
n="The "+o+"  and the "
r=$.dD
t.i(0,new R.Z("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.dU(),!1,!1,new Y.hT(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.al)
r=$.m
o="The "+r+"  and the "
n=$.dD
t.i(0,new R.Z("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.dU(),!1,!1,new Y.jX(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.al)
p.i(0,new X.F(s,t,null),$.aB)}}
T.hW.prototype={
E:function(){var t,s
t=Q.J(null,null,A.a5)
s=A.i("Perfectly Generic Object",H.a([],[G.a1]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.fy=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.z]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d_,$.j)
q.i(0,$.bf,$.H)
q.i(0,$.dQ,$.j)
q.i(0,$.c5,$.o)
q.i(0,$.e7,$.H)
p=$.m
o="The "+p+" learns that all of the local "
n=$.r
m=[U.b]
q.i(0,new R.a4("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
n=this.x
n.i(0,new X.F(s,q,null),$.bN)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eu,$.j)
s.i(0,$.er,$.H)
s.i(0,$.et,$.o)
s.i(0,$.cQ,$.j)
s.i(0,$.ci,$.H)
p=$.m
o="The "+p+" learns that all of the local "
l=$.r
s.i(0,new R.a4("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.m
l="The "+p+" learns that all of the local "
o=$.r
s.i(0,new R.a4("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.dD+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.L+"ing in amazement. The factory is saved! ")],H.a([],m),R.dU(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.al)
n.i(0,new X.F(q,s,null),$.bN)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.j)
t.i(0,$.bf,$.H)
t.i(0,$.ce,$.o)
r=$.m
q="The "+r+" learns that all of the local "
p=$.r
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.L
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.vd(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.H)
l=$.m
p="The "+l+" learns that all of the local "
r=$.r
t.i(0,new R.a4("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(s,t,null),$.bN)},
A:function(a){return this.r},
ab:function(a,b,c,d){var t=this.r
this.y=t
this.z=new X.iD("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.io]),H.a([],[M.hj]))
this.E()
this.F()
t=this.Q
if($.$get$ox().U(0,t))H.aY("Duplicate class id for "+this.A(0)+": "+t+" is already registered for "+J.cB($.$get$ox().n(0,t))+".")
$.$get$ox().i(0,t,this)},
gG:function(a){return this.r}}
E.oy.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Sage's Robe",H.a([$.Q,$.U,$.b0,$.Y,$.a2,$.a0],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.K,$.U,$.aC,$.Y],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guru Pillow",H.a([$.Q,$.U,$.hx,$.Y],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o
t=[P.z]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.ff,$.o)
t.i(0,$.bf,$.o)
t.i(0,$.fh,$.j)
t.i(0,$.aO,$.H)
t.i(0,$.cE,$.j)
r="The "+$.y+" has blocked access to the books for the duration. The "
q=$.m
p=[U.b]
t.i(0,new R.bH("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.r+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
q="Now that the "+$.y+" is defeated, it is time to begin recovery efforts. The "
r=$.r
q=q+r+"s ask the "
o=$.m
t.i(0,new R.a4("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.L+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bN)}}
K.oz.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Uno Reverse Card",H.a([$.mN,$.T,$.aP,$.jB],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("JR Body Pillow",H.a([$.hx,$.b0,$.T,$.jB],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.z]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.m5,$.j)
q.i(0,$.dp,$.j)
q.i(0,$.dq,$.j)
q.i(0,$.d_,$.o)
q.i(0,$.c5,$.o)
q.i(0,$.ci,$.o)
q.i(0,$.c6,$.H)
q.i(0,$.dC,$.o)
q.i(0,$.eq,$.j)
q.i(0,$.iI,$.j)
q.i(0,$.fg,$.j)
q.i(0,$.mb,$.j)
q.i(0,$.hm,$.o)
q.i(0,$.ev,$.j)
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
q.i(0,new R.M("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.S(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.fy(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
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
q.i(0,new R.M("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.S(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=this.f
h.i(0,new X.F(s,q,null),$.at)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dA,$.j)
s.i(0,$.c5,$.o)
s.i(0,$.c6,$.j)
s.i(0,$.cr,$.j)
s.i(0,$.cD,$.j)
s.i(0,$.cJ,$.o)
s.i(0,$.iH,$.H)
s.i(0,$.dp,$.o)
s.i(0,$.cR,$.j)
s.i(0,$.c7,$.j)
s.i(0,$.dC,$.H)
p=$.L
o="The "+p+"ing and capering "
n=$.r
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.m
o=o+m+" to do a stupid "
l=$.ax
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.y
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.M("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.S(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.F(q,s,null),$.at)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.m5,$.j)
t.i(0,$.dC,$.j)
t.i(0,$.c6,$.j)
t.i(0,$.cR,$.o)
t.i(0,$.cD,$.j)
r=$.m
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.r+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.y+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.M("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.S(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.F(s,t,null),$.at)}}
Y.oA.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Walking Stick",H.a([$.X,$.U,$.dR],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.Q,$.U,$.uh,$.Y,$.a0],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Map",H.a([$.K,$.U,$.Y],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Magical Compass",H.a([$.D,$.U,$.Y,$.a2],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p
t=[P.z]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.dB,$.j)
t.i(0,$.ce,$.j)
t.i(0,$.bf,$.j)
t.i(0,$.c7,$.H)
t.i(0,$.aO,$.H)
r="Now that the "+$.y+" has been defeated, the planet has really opened up. The "
q=$.m
p=[U.b]
t.i(0,new R.a4("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.r+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.y+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.m
t.i(0,new R.bH("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.r+" "+$.L+"s in time to stop them.   ")],H.a([],p),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
this.x.i(0,new X.F(s,t,null),$.bN)}}
L.oB.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Scroll",H.a([$.K,$.U,$.Y],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ink Pot",H.a([$.aQ,$.U,$.am,$.Y],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blank Book",H.a([$.K,$.U,$.aC,$.Y,$.am,$.a0],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o
t=[P.z]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.m6,$.j)
t.i(0,$.bf,$.j)
t.i(0,$.cE,$.j)
t.i(0,$.aO,$.o)
t.i(0,$.cZ,$.o)
r="The "+$.y+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.m
p=[U.b]
t.i(0,new R.bH("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
q="Now that the "+$.y+" has been taken care of, the "
r=$.m
q=q+r+" discovers a large library of "
o=$.r
t.i(0,new R.a4("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bN)}}
S.oD.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Cueball",H.a([$.wV,$.U],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crystal Ball",H.a([$.fn,$.wU,$.U,$.aR],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Binoculars",H.a([$.aQ,$.U,$.D],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blindfold",H.a([$.wQ,$.U,$.b0],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o
t=[P.z]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.wy,$.j)
t.i(0,$.iG,$.j)
t.i(0,$.wv,$.j)
t.i(0,$.cR,$.o)
r="Now that the "+$.y+" has been defeated, the land is really starting to open up. The "
q=$.m
r=r+q+" finds a tunnel filled with Blind "
p=$.r
o=[U.b]
t.i(0,new R.a4("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.B(),!1,!1,new Y.dm("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.y+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.m
t.i(0,new R.bH("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.r+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
p=$.m
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.r
t.i(0,new R.a4("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.B(),!1,!1,new Y.dm("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
r="A group of underlings are still making trouble, even after the defeat of the "+$.y+". The "
p=$.m
r=r+p+" begins planting rumors of a huge "
q=$.ab
t.i(0,new R.a4("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.B(),!1,!1,new Y.dm("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bN)}}
T.c2.prototype={}
Y.oK.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Meddler's Guide",H.a([$.aC,$.U,$.K,$.bw,$.a0,$.aI],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aQ,$.U,$.aI],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.U
r=A.i("Cloud in a Bottle",H.a([r,r,$.bn],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a2,$.U,$.aR,$.ay,$.K],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o
t=[P.z]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.bf,$.o)
t.i(0,$.dB,$.j)
t.i(0,$.cR,$.o)
t.i(0,$.aO,$.o)
t.i(0,$.ce,$.j)
r="The defeat of the "+$.y+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.m
p=[U.b]
t.i(0,new R.bH("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
q="Now that the "+$.y+" has been taken care of, the "
r=$.m
q=q+r+" finds a long line of "
o=$.r
t.i(0,new R.a4("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bN)}}
N.oL.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Fiduspawn Plush",H.a([$.ck,$.Q,$.b0],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Teddy Bear",H.a([$.ck,$.Q,$.b0],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("D20",H.a([$.ug,$.aE],s),null,!1,"D113")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pet Pigeon",H.a([$.bx,$.av,$.bo,$.b_,$.bs,$.uo],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cat Ears",H.a([$.Q,$.b0,$.ck],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Religious Text",H.a([$.aC,$.K],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Psychology Book",H.a([$.aC,$.K],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Therapy Couch",H.a([$.b0,$.Q],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("FLARP Manual",H.a([$.aC,$.K,$.Y],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.z]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dP,$.H)
q.i(0,$.aO,$.o)
q.i(0,$.cZ,$.j)
q.i(0,$.cE,$.o)
p=$.m
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.r
m=[U.b]
q.i(0,new R.Z("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.ax+" or "+$.ab+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.L+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dP,$.H)
s.i(0,$.aO,$.j)
s.i(0,$.cZ,$.j)
s.i(0,$.tW,$.j)
s.i(0,$.cr,$.j)
s.i(0,$.u1,$.j)
s.i(0,$.cE,$.o)
o=$.m
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.L
n=n+l+"ing "
k=$.r
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.ax
s.i(0,new R.Z("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cQ,$.H)
t.i(0,$.dO,$.j)
t.i(0,$.ce,$.j)
t.i(0,$.dr,$.j)
t.i(0,$.fe,$.j)
r=$.m
q="The "+r+" wanders into an entire crowd of "
o=$.r
t.i(0,new R.Z("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.L+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,t,null),$.aB)}}
M.bA.prototype={}
N.oN.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Frog Statue",H.a([$.aF,$.aw,$.T],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.Q,$.T],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.ca,$.Y,$.a8,$.T],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.D,$.aQ,$.Y,$.T],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.K,$.T,$.uk,$.a0],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
F:function(){var t,s,r,q,p,o,n,m
t=$.m
s=[P.z]
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
t.i(0,$.cR,$.H)
t.i(0,$.tY,$.j)
s=[U.b]
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
t.i(0,new R.M("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
p=$.m
t.i(0,new R.bH("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.L+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.B(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
this.f.i(0,new X.F(o,t,null),$.Hv)}}
U.ag.prototype={
gG:function(a){return this.e+"kind"},
$isbK:1,
$asbK:function(){return[A.a5]}}
K.cL.prototype={
gG:function(a){return this.a}}
M.oR.prototype={
aW:function(a){return"application/octet-stream"},
P:function(a6,a7){var t=0,s=P.be(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$P=P.bj(function(a8,a9){if(a8===1)return P.bg(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.dn(null,0)
q.a=J.e3(a7,0)
for(p=0,o="";p<6;++p)o+=H.hU(q.aa(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.k("Invalid header: "+n)
m=q.aa(8)
l=9+m*6
o=8*m
k=q.aa(o)
j=q.aa(o)
i=q.aa(o)
h=q.aa(o)
g=q.aa(o)
f=q.aa(o)
o=P.C
e=P.z
d=P.c0(o,e)
c=new O.d1(k,j,null,null,null,null,null,null,d,P.c0(e,o))
c.x=new Uint8Array(H.cI(k*j))
b=q.aa(8)
for(o=[o],p=0;p<b;++p){a=q.aa(8)
a0=q.aa(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.aa(8)
if(a2>=e){r=H.u(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.ph(a1,0,null))}a4=q.aa(8)
a5=$.$get$xM().n(0,a4)
if(a5==null)throw H.k("Sprite decoding error: Encoding id "+a4+" not supported.")
c.iK(i,h,g,a5.c.$4(a7,l,g*f,c))
c.is()
r=c
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$P,s)},
$asdy:function(){return[O.d1]},
$asc8:function(){return[O.d1,P.bl]}}
R.pn.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Meddler's Guide",H.a([$.aC,$.U,$.K,$.bw,$.a0,$.aI],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aQ,$.U,$.aI],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.U
r=A.i("Cloud in a Bottle",H.a([r,r,$.bn],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a2,$.U,$.aR,$.ay,$.K],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o
t=[P.z]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.cZ,$.j)
t.i(0,$.aO,$.j)
t.i(0,$.dB,$.o)
t.i(0,$.fh,$.o)
t.i(0,$.tV,$.o)
t.i(0,$.e7,$.o)
t.i(0,$.iE,$.o)
t.i(0,$.u0,$.o)
r=$.m
q="The "+r+" decides to take a break after defeating "+$.y+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.r
o=[U.b]
t.i(0,new R.a4("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.L+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.oo(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
r=$.r
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.m
t.i(0,new R.a4("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
r=$.r
q="The "+r+"s are so stressed after all that shit with the "+$.y+". They are yelling and "+$.L+" at each other over the slightest of insults. The "
p=$.m
t.i(0,new R.a4("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
p="The "+$.y+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.m
p=p+r+" purifies the pools "
q=$.r
t.i(0,new R.bH("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
r="The defeat of the "+$.y+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.r
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.m
t.i(0,new R.a4("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.ax+". Huh. Okay then.")],H.a([],o),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bN)}}
D.ps.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Robot",H.a([$.a8,$.D,$.av,$.Y],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Circuit Board",H.a([$.a8,$.D],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.a8,$.K],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("~ATH For Dummies ",H.a([$.a8,$.K,$.aD,$.aC],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("3-D Printer",H.a([$.aE,$.a8,$.D],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.x_,$.D],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wrench",H.a([$.uy,$.D,$.ah],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Computer",H.a([$.a8,$.D],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.z]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.hn,$.o)
q.i(0,$.ep,$.j)
q.i(0,$.eu,$.j)
q.i(0,$.ci,$.H)
p=$.m
o="The "+p+" learns from their "
n=$.r
o=o+n+"s about the great "
m=$.ax
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.y+" destroyed it. "
o="The "+p+" searches for the "
l=$.ab
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.Gp
p=[U.b]
q.i(0,new R.Z("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.B(),!1,!1,new Y.d4("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.A)
l=$.m
m="The "+l+" is approached by a "
o=$.r
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.L
q.i(0,new R.Z("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.y+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ab+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.dT(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eu,$.j)
s.i(0,$.er,$.H)
s.i(0,$.et,$.o)
s.i(0,$.cQ,$.j)
s.i(0,$.ci,$.H)
o=$.m
n="The "+o+" learns that all of the local "
l=$.r
s.i(0,new R.Z("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
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
s.i(0,new R.Z("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.ef(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(q,s,null),$.at)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hn,$.H)
t.i(0,$.ep,$.j)
t.i(0,$.eu,$.j)
t.i(0,$.ci,$.H)
r=$.m
q="The "+r+" learns from a mysterious "+$.r+" in a black trenchcoat about a great "
o=$.ax
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.y
t.i(0,new R.Z("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(s,t,null),$.aB)}}
V.pt.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Lighter",H.a([$.D,$.as],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Siberia Poster",H.a([$.K,$.br],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.K,$.br,$.ca],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Doomsday Device",H.a([$.D,$.aD,$.ca,$.bp,$.bs],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.K,$.x5],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Watch",H.a([$.D,$.bm,$.bp],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.D,$.bm,$.bp],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.Q,$.fo,$.bp],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bU,$.bm],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.D,$.up,$.aK,$.bp],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.D,$.uv,$.aK,$.bp],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("AK-47",H.a([$.D,$.ul,$.aK,$.bp],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("IED",H.a([$.mP,$.au,$.D,$.bt,$.bp],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.K,$.bw,$.aC],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.cg,$.D,$.aV,$.bw],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Matches",H.a([$.X,$.as],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.z]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cJ,$.o)
q.i(0,$.dO,$.j)
q.i(0,$.e8,$.j)
q.i(0,$.fg,$.j)
q.i(0,$.ma,$.j)
q.i(0,$.dr,$.o)
p=$.m
o=[U.b]
q.i(0,new R.Z("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.B(),!1,!1,new Y.dm("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cJ,$.o)
s.i(0,$.dO,$.j)
s.i(0,$.cs,$.j)
s.i(0,$.dr,$.o)
n=$.m
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.r
s.i(0,new R.Z("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ab+" underling. Tremble at the fearsome "+$.ax+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.B(),!1,!1,new Y.dm("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d_,$.j)
q.i(0,$.bf,$.H)
q.i(0,$.dQ,$.j)
q.i(0,$.c5,$.o)
q.i(0,$.e7,$.H)
q.i(0,$.dp,$.H)
n=$.m
m="The "+n+" learns that all of the local "
l=$.r
q.i(0,new R.Z("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c6,$.j)
t.i(0,$.dp,$.H)
t.i(0,$.eq,$.j)
t.i(0,$.iI,$.j)
t.i(0,$.ci,$.o)
t.i(0,$.ev,$.o)
s=$.m
r="The "+s+" finds a crowd of "
n=$.L
r=r+n+"ing "
m=$.r
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.ax+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.Z("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.B(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,t,null),$.aB)}}
X.F.prototype={
A:function(a){return"Theme: "+H.x(this.a)}}
U.pD.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Lockpick",H.a([$.D,$.U,$.am,$.aM,$.a0],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.Q,$.U,$.am],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Thief's Dagger",H.a([$.D,$.U,$.aM,$.au,$.uf],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.z]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.c6,$.j)
t.i(0,$.dq,$.o)
t.i(0,$.c7,$.o)
t.i(0,$.cQ,$.o)
r="The "+$.y+" cannot release the frogs since the corrupt "
q=$.r
r=r+q+" Cops have confiscated them. The "
p=$.m
o=[U.b]
t.i(0,new R.bH("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
p=$.m
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.y+"'s layer and slated to be returned to the "
r=$.r
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.L+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.fy
t.i(0,new R.a4("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.B(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.r
p="A weeping "+r+" approaches the "
n=$.m
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.y
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.ax+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.L+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.fy
t.i(0,new R.a4("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.B(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
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
l=n+l+"worth, the disaffected Heir to the "+$.ax+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.fy
t.i(0,new R.a4("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.B(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bN)}}
N.pE.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Grandfather Clock",H.a([$.X,$.ai,$.bm,$.T],s),null,!1,"Ticking Tower of Time")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.x9,$.T,$.a9],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aF,$.bo,$.T,$.b_,$.aX,$.aD],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.D,$.T,$.a9,$.ai],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sick Turn Tables",H.a([$.D,$.T,$.a9,$.a0,$.ao],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Metronome",H.a([$.D,$.T,$.a9],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.z]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.wA,$.al)
q.i(0,$.ci,$.o)
q.i(0,$.cQ,$.o)
q.i(0,$.et,$.j)
p=$.y
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.m
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x1
l=[U.b]
q.i(0,new R.a4("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.dd(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.m
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.r+"s, they set out to fix the "
m=$.ab
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.y
q.i(0,new R.M("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.S("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=this.f
j.i(0,new X.F(s,q,null),$.at)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.hm,$.j)
s.i(0,$.e8,$.H)
s.i(0,$.ci,$.j)
p=$.m
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.r+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.y
s.i(0,new R.M("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.S(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.F(q,s,null),$.at)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.ce,$.j)
t.i(0,$.aO,$.o)
t.i(0,$.cZ,$.j)
t.i(0,$.dB,$.j)
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
t.i(0,new R.M("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.S(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.fy(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
k=$.y
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.ab
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.m
t.i(0,new R.M("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.r+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.S("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.dd(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
r="With the defeat of the "+$.y+", "
k=$.m
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.r
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.ax
t.i(0,new R.a4("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.dd(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.m
k="The "+p+" takes a break from adventuring and visits a little "
o=$.r
k=k+o+" town holding a "
r=$.ax
k=k+r+" festival. They walk around town talking to the various villagers and visiting the little shops, before taking a nap in the local inn. The next morning, the villagers welcome the "+p+" to join in the "+r+" festival that\u2019s just starting. Wait, wasn\u2019t the festival yesterday? The "+o+"s assure the "+p+" that the festival is only being held today. "
m="The "+p+" tries to convince the "+o+"s that they were repeating the day before, but the "+o+"s refused to believe. They quickly realize that the villagers aren\u2019t just forgetful when the same thing hsppens the day after. The village appears to be stuck in a time loop They decide to fix things out of the goodness of their heart, but not before exploiting the time loop to mess with the "+o+" town for a little while."
n="After plenty of shenanigans, the "+p+" starts investigating the time loop. They discover that the "+r+" festival ends with an attempted ceremony to summon "
q=$.y
n=n+q+". The "+o+"s bungle the ceremony every time, causing time to reset. The "+p+" studies how the festival is supposed to work, and goes through several loops at once with time time travel to fix the ceremony. "
i="The "+p+" has gone through so many freaking loops that they have memorized the actions of every "+o+". They follow a perfected schedule to make sure every "+o+" prepares for and completes their part of the ceremony. Finally the ceremony is completed and "+q+" arrives. The "+p+" takes out their "+$.by+" and begins the strife!"
p=q+" lies dead. The "+o+"s are happy to be rid of them and thank the player for helping to complete the ceremony. It was their first time performing the ceremony, after all. The "+p+" rolls their eyes."
t.i(0,new R.M("Stop the Time Loop",!1,[new U.b(k),new U.b(m),new U.b(n),new U.S(i,"The "+o+"s wake up and begin eagerly preparing for the "+r+" festival. It only comes once a year, after all.",p)],H.a([],l),R.om(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
p=$.r
r="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.m
t.i(0,new R.M("Move Forwards, Never Stop",!1,[new U.b(r+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.L+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.S("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.y+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.F(s,t,null),$.at)}}
G.a1.prototype={
A:function(a){var t=this.c
if(t.length!==0)return C.b.ga9(t)
return"NULL TRAIT"},
geB:function(){return this.b},
gej:function(){return this.c},
gbK:function(){return this.d}}
G.aJ.prototype={}
G.ae.prototype={}
G.bL.prototype={}
G.d.prototype={
gim:function(){return this.f.length},
gbK:function(){var t,s,r,q,p
for(t=this.f,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.bu)(t),++q)r+=t[q].d
return r},
aD:function(a,b){return C.a.bL(b.gim()-this.f.length)},
eN:function(a){return C.b.hI(this.f,a.ght(a))},
$isbK:1,
$asbK:function(){return[G.d]},
gG:function(a){return this.e},
gf7:function(){return this.f}}
G.mW.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a1]}}}
Q.q1.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Cardboard Box",H.a([$.K,$.T,$.am],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hole Punch",H.a([$.D,$.T,$.am],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bt,$.T,$.am,$.mP],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tribal Mask",H.a([$.b_,$.T,$.am,$.aX,$.c_],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Opera Mask",H.a([$.aE,$.T,$.am,$.ai],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.T,$.a0,$.uk,$.am,$.aQ],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.z]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dP,$.j)
q.i(0,$.iJ,$.j)
q.i(0,$.iK,$.j)
q.i(0,$.iG,$.j)
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
q.i(0,new R.a4("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.B(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.m
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.y
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.M("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.S(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i=this.f
i.i(0,new X.F(s,q,null),$.at)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dP,$.o)
s.i(0,$.iJ,$.o)
s.i(0,$.iK,$.o)
s.i(0,$.c6,$.j)
p=$.m
o="Even with the victory of the "+p+" over the villainous "
n=$.y
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.r+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.ab
s.i(0,new R.a4("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.dT(),!1,!1,new Y.bX("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m=$.m
s.i(0,new R.M("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.L+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.S("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.y+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.r+"s.")],H.a([],l),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i.i(0,new X.F(q,s,null),$.at)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dP,$.j)
t.i(0,$.iJ,$.j)
t.i(0,$.iK,$.j)
r=$.m
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.y+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.M("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.S(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i.i(0,new X.F(s,t,null),$.at)}}
E.q2.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Yardstick",H.a([$.dR,$.U,$.ur,$.a0],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.aC,$.U,$.mV,$.K],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.Q,$.U,$.hx,$.x4,$.b0,$.jB],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nanobots",H.a([$.xd,$.U,$.ua],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.z]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.cR,$.j)
t.i(0,$.dC,$.j)
t.i(0,$.fd,$.j)
t.i(0,$.dB,$.j)
t.i(0,$.hl,$.j)
t.i(0,$.m7,$.j)
t.i(0,$.iK,$.o)
r=$.m
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.r
o=[U.b]
t.i(0,new R.Z("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.oo(),!1,!1,new Y.dW("Rewards/no_reward.png",null),1,null,null),$.A)
r=$.y
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.m
n=q+" tries to manually separate the turtles by catching them with a net and "+$.by+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.L
t.i(0,new R.M("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.S(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.GD(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
q=$.m
t.i(0,new R.Z("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.B(),!1,!1,new Y.dW("Rewards/no_reward.png",null),1,null,null),$.A)
q="A wizened "+$.r+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.m
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.y
t.i(0,new R.M("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
m=$.m
t.i(0,new R.M("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.r+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.y+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.B(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.al)
m="A wizened "+$.r+" tells the "
r=$.m
t.i(0,new R.a4("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.B(),!1,!1,new Y.dm("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.H)
r="A "+$.r+" that is also a SHOGUN minion tells the "
m=$.m
t.i(0,new R.a4("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.GE(),!1,!1,new Y.bX("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
m=$.m
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.fy
t.i(0,new R.a4("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.B(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.H)
n=$.m
m="The "+n+" finds an unusual rock formation. They examine it from every possible angle to find a secret meaning. In the end it turns out to be an interesting rock and nothing more."
q="The "+n+" is stopped by a young "
r=$.r
t.i(0,new R.a4("Wasting Time",!1,[new U.b(m),new U.b(q+r+" that asks them to watch clouds together. The "+n+" spends a few hours with the "+r+" interpreting the shapes in the clouds."),new U.b("The "+n+" uses the alchemiter to create a number of dream video game fusions. They spend many hours playing them all."),new U.b("After waking up from a nap, the "+n+" turns over and goes right back to sleep. They\u2019re just not feeling like doing anything right now."),new U.b("An elderly "+r+" calls out to the "+n+"; apparently there was a dangerous monster that the "+r+"s wanted the "+n+" to defeat, but the problem solved itself when the monster tripped off a cliffside. Was there actually a point to what the "+n+" was doing? Nope, they\u2019re just really bad at using their time wisely.")],H.a([],o),R.oo(),!1,!1,new Y.dW("Rewards/no_reward.png",null),1,null,null),$.A)
n=$.y
r="The "+n+" explains um. What? Where did the "
q=$.m
t.i(0,new R.bH("Waste the Frogs",!1,[new U.b(r+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.r+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
this.x.i(0,new X.F(s,t,null),$.at)}}
M.q6.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Cauldron",H.a([$.x8,$.U,$.a2],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flying Broom",H.a([$.jy,$.dR,$.U,$.X,$.a2],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Warped Mirror",H.a([$.um,$.U,$.a2,$.am,$.a0],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.z]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.ac,P.W])
t.i(0,$.c5,$.o)
t.i(0,$.hp,$.o)
t.i(0,$.d_,$.o)
t.i(0,$.cQ,$.o)
t.i(0,$.cD,$.o)
t.i(0,$.tY,$.o)
r=$.y
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.r
q=q+p+" consorts. It's up to the "
o=$.m
n=[U.b]
t.i(0,new R.bH("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.c1(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.al)
o="Even with the defeat of the "+$.y+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
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
t.i(0,new R.a4("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.B(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.A)
q="A Mysterious "+$.r+" approaches the "
p=$.m
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.ax
q=q+r+" was discovered amongst the "+$.y+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.fy
t.i(0,new R.a4("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.B(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.r
p="A young "+r+" approaches the "
m=$.m
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.ax
t.i(0,new R.a4("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ab+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.L+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.B(),!1,!1,new Y.a7("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bN)}}
U.q7.prototype={
P:function(a5,a6){var t=0,s=P.be(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$P=P.bj(function(a7,a8){if(a7===1)return P.bg(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.e4(a6,$.$get$yb())
if(0>=p.length){r=H.u(p,0)
t=1
break}if(J.zC(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.u(p,0)
t=1
break}throw H.k("Invalid WordList file header: '"+H.x(p[0])+"'")}o=P.z
n=H.a([],[o])
m=P.c0(o,B.eS)
q.a=null
l=P.c0(o,o)
for(k=P.W,j=B.d5,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cO()
""+i
H.x(g)
f.toString
f=J.e4(g,$.$get$y9())
if(0>=f.length){r=H.u(f,0)
t=1
break $async$outer}g=f[0]
f=J.bk(g)
if(f.gW(g)===!0){$.$get$cO().toString
continue}if(f.ae(g,$.$get$ya())){$.$get$cO().toString
continue}if(C.c.ae(g,"@")){e=C.c.ag(g,1)
$.$get$cO().toString
n.push(e)}else if(C.c.ae(g,"?")){f=C.c.ag(g,1)
f=$.$get$i2().aU(0,f)
f=H.ds(f,B.il(),H.ak(f,"n",0),null)
d=P.d0(f,!0,H.ak(f,"n",0))
if(d.length<2)$.$get$cO().aL(C.i,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cO()
H.x(c)
H.x(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$yc()
a=f.cz(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.u(f,1)
t=1
break $async$outer}a0=J.c4(f[1])
a1=C.c.ag(g,a0)
if(a1.length===0)continue
f=J.an(a0)
if(f.T(a0,0)){a1=C.c.eO(a1)
$.$get$cO().toString
f=P.c0(o,o)
a2=new B.eS(P.c0(o,k),f,a1,!1,null,null)
a2.co(null,null,j)
q.a=a2
f.as(0,l)
m.i(0,a1,q.a)}else if(f.T(a0,$.yd))if(C.c.ae(a1,"?")){a1=C.c.ag(a1,1)
f=$.$get$i2().aU(0,a1)
f=H.ds(f,B.il(),H.ak(f,"n",0),null)
d=P.d0(f,!0,H.ak(f,"n",0))
f=$.$get$cO()
f.toString
if(d.length<2)f.aL(C.i,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.kN(d[0],$.$get$fC(),"")
if(1>=d.length){r=H.u(d,1)
t=1
break $async$outer}b=J.kN(d[1],$.$get$fC(),"")
f=$.$get$cO()
H.x(q.a.e)
f.toString
q.a.d.i(0,c,b)}}else if(C.c.ae(a1,"@")){e=C.c.ag(a1,1)
$.$get$cO().toString
f=$.$get$i2().aU(0,a1)
f=H.ds(f,B.il(),H.ak(f,"n",0),null)
d=P.d0(f,!0,H.ak(f,"n",0))
a3=d.length>1?H.xG(d[1],new U.q8(q,d)):1
q.a.c.i(0,C.c.da(e,$.$get$fC(),""),a3)}else{$.$get$cO().toString
f=$.$get$i2().aU(0,g)
f=H.ds(f,B.il(),H.ak(f,"n",0),null)
d=P.d0(f,!0,H.ak(f,"n",0))
a3=d.length>1?H.xG(d[1],new U.q9(q,d)):1
if(0>=d.length){r=H.u(d,0)
t=1
break $async$outer}f=C.c.bp(J.kN(d[0],$.$get$fC(),""))
h=new B.d5(null)
a4=P.c0(o,o)
h.a=a4
a4.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.h(h,f.k(h,J.ty(a3)),[H.ak(f,"cH",0)]))}else if(f.T(a0,$.yd*2)){$.$get$cO().toString
f=$.$get$i2().aU(0,g)
f=H.ds(f,B.il(),H.ak(f,"n",0),null)
d=P.d0(f,!0,H.ak(f,"n",0))
f=d.length
if(f!==2)$.$get$cO().aL(C.i,"Invalid variant for "+H.x(h.bq(0))+" in "+H.x(q.a.e))
else{if(0>=f){r=H.u(d,0)
t=1
break $async$outer}f=C.c.bp(J.kN(d[0],$.$get$fC(),""))
if(1>=d.length){r=H.u(d,1)
t=1
break $async$outer}a4=C.c.da(U.Hy(d[1]),$.$get$fC(),"")
h.a.i(0,f,a4)}}}}}r=new B.eT(n,m)
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$P,s)},
$aseM:function(){return[B.eT]},
$asc8:function(){return[B.eT,P.z]}}
U.q8.prototype={
$1:function(a){var t,s,r
t=$.$get$cO()
s=this.b
if(1>=s.length)return H.u(s,1)
r="Invalid include weight '"+H.x(s[1])+"' for word '"
if(0>=s.length)return H.u(s,0)
t.aL(C.h,r+H.x(s[0])+"' in list '"+H.x(this.a.a.e)+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.z]}}}
U.q9.prototype={
$1:function(a){var t,s,r
t=$.$get$cO()
s=this.b
if(1>=s.length)return H.u(s,1)
r="Invalid weight '"+H.x(s[1])+"' for word '"
if(0>=s.length)return H.u(s,0)
t.aL(C.h,r+H.x(s[0])+"' in list '"+H.x(this.a.a.e)+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.z]}}}
F.qb.prototype={
E:function(){var t,s,r,q
t=Q.J(null,null,A.a5)
s=[G.a1]
r=A.i("Make a World Book",H.a([$.K,$.ai,$.aC],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Quill Pen",H.a([$.b0,$.Q,$.mT],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Book On Writing",H.a([$.aC,$.K,$.Y],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("FLARP Manual",H.a([$.aC,$.K,$.Y],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Script",H.a([$.aC,$.K],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Pen",H.a([$.D,$.Y,$.mT,$.ai],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Spiral Bound Notebook",H.a([$.aC,$.K,$.D],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Half Written Novel",H.a([$.aC,$.K],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.z]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.ac,P.W]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dP,$.j)
q.i(0,$.cE,$.j)
q.i(0,$.bf,$.o)
q.i(0,$.aO,$.o)
q.i(0,$.ff,$.o)
p=$.m
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.r+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.i(0,new R.Z("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.B(),!1,!1,new Y.bG("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.r
m.i(0,new X.F(s,q,null),$.aB)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dr,$.o)
s.i(0,$.cJ,$.o)
s.i(0,$.cs,$.o)
s.i(0,$.bf,$.o)
p=$.r
o="An Excited "+p+" rushes up to the "
n=$.m
s.i(0,new R.Z("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.L+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.B(),!1,!1,new Y.dm("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(q,s,null),$.aB)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cJ,$.o)
t.i(0,$.dO,$.j)
t.i(0,$.cs,$.j)
t.i(0,$.dr,$.o)
t.i(0,$.fd,$.j)
r=$.m
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.r
t.i(0,new R.Z("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.B(),!1,!1,new Y.dm("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(s,t,null),$.aB)}}
B.qg.prototype={
aW:function(a){return"application/x-tar"},
P:function(a,b){var t=0,s=P.be(),r,q,p
var $async$P=P.bj(function(c,d){if(c===1)return P.bg(d,s)
while(true)switch(t){case 0:q=$.$get$ye()
p=J.vU(b)
q.toString
r=q.hz(T.u9(p,0,null,0),!1)
t=1
break
case 1:return P.bh(r,s)}})
return P.bi($async$P,s)},
$asdy:function(){return[T.fT]},
$asc8:function(){return[T.fT,P.bl]}}
A.h0.prototype={}
B.dz.prototype={
cP:function(a){if(a)this.b=(this.b|C.a.ar(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.O+=H.hU(this.b)
this.b=0}},
ah:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.ar(1,t)
if(typeof a!=="number")return a.aO()
this.cP((a&s)>>>0>0)}},
hl:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.ay(1,t-s)
if(typeof a!=="number")return a.aO()
this.cP((a&r)>>>0>0)}},
c2:function(a){var t,s
a=J.ek(a,1)
t=C.d.dr(Math.log(H.kC(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cP(!1)
this.hl(a,t+1)},
ba:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.O
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.a6(r)
q+=r
p=r}else p=0
r=H.cI(q)
o=new Uint8Array(r)
if(t){n=H.cK(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.u(o,m)
o[m]=l}}t=s.O
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a4(k,m)
if(s<0||s>=r)return H.u(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.u(o,t)
o[t]=s}return o.buffer}}
B.dn.prototype={
cH:function(a){var t,s,r,q
t=C.f.al(a/8)
s=C.a.bR(a,8)
r=this.a.getUint8(t)
q=C.a.ay(1,s)
if(typeof r!=="number")return r.aO()
return(r&q)>>>0>0},
aa:function(a){var t,s,r
if(a>32)throw H.k(P.dJ(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cH(this.b);++this.b
if(r)t=(t|C.a.ar(1,s))>>>0}return t},
ir:function(a){var t,s,r,q
if(a>32)throw H.k(P.dJ(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cH(this.b);++this.b
if(q)s=(s|C.a.ay(1,t-r))>>>0}return s},
ca:function(){var t,s,r
for(t=0;!0;){s=this.cH(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.ir(t+1)-1}}
A.dM.prototype={
A:function(a){return"rgb("+H.x(this.b)+", "+H.x(this.c)+", "+H.x(this.d)+", "+H.x(this.a)+")"},
iD:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.ay()
s=this.c
if(typeof s!=="number")return s.ay()
r=this.d
if(typeof r!=="number")return r.ay()
q=this.a
if(typeof q!=="number")return H.a6(q)
return(t<<24|s<<16|r<<8|q)>>>0},
T:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.dM){t=this.b
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
ga6:function(a){return this.iD(!0)},
V:function(a,b){var t,s,r,q,p,o,n,m
t=J.an(b)
if(!!t.$isdM){t=this.b
s=b.b
if(typeof t!=="number")return t.V()
if(typeof s!=="number")return H.a6(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.V()
if(typeof q!=="number")return H.a6(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.V()
if(typeof o!=="number")return H.a6(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.V()
if(typeof m!=="number")return H.a6(m)
return A.h4(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.an()
s=this.c
if(typeof s!=="number")return s.an()
r=this.d
if(typeof r!=="number")return r.an()
q=this.a
if(typeof q!=="number")return q.an()
return A.tH(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.V()
s=this.c
if(typeof s!=="number")return s.V()
r=this.d
if(typeof r!=="number")return r.V()
return A.h4(t+b,s+b,r+b,this.a)}throw H.k("Cannot add ["+H.x(t.gac(b))+" "+H.x(b)+"] to a Colour. Only Colour, double and int are valid.")},
av:function(a,b){var t,s,r,q,p,o,n,m
t=J.an(b)
if(!!t.$isdM){t=this.b
if(typeof t!=="number")return t.an()
s=b.b
if(typeof s!=="number")return s.an()
r=this.c
if(typeof r!=="number")return r.an()
q=b.c
if(typeof q!=="number")return q.an()
p=this.d
if(typeof p!=="number")return p.an()
o=b.d
if(typeof o!=="number")return o.an()
n=this.a
if(typeof n!=="number")return n.an()
m=b.a
if(typeof m!=="number")return m.an()
return A.tH(t/255*(s/255),r/255*(q/255),p/255*(o/255),n/255*(m/255))}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.an()
s=this.c
if(typeof s!=="number")return s.an()
r=this.d
if(typeof r!=="number")return r.an()
q=this.a
if(typeof q!=="number")return q.an()
return A.tH(t/255*b,s/255*b,r/255*b,q/255)}throw H.k("Cannot multiply a Colour by ["+H.x(t.gac(b))+" "+H.x(b)+"]. Only Colour, double and int are valid.")},
n:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.k("Colour index out of range: "+H.x(b))},
i:function(a,b,c){var t,s
t=J.dw(b)
if(t.a0(b,0)||t.aB(b,3))throw H.k("Colour index out of range: "+H.x(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.T(b,0)){this.b=C.a.ad(c,0,255)
this.e=!0
this.y=!0}else if(t.T(b,1)){this.c=C.a.ad(c,0,255)
this.e=!0
this.y=!0}else if(t.T(b,2)){this.d=C.a.ad(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.ad(c,0,255)
else if(t.T(b,0)){this.b=C.a.ad(J.kL(J.tt(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.T(b,1)){this.c=C.a.ad(J.kL(J.tt(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kE(c)
if(t.T(b,2)){this.d=C.a.ad(J.kL(s.av(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.ad(J.kL(s.av(c,255)),0,255)}},
ff:function(a,b,c,d){this.b=C.d.ad(C.d.ad(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.ad(C.d.ad(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.ad(C.d.ad(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.ad(J.tu(d,0,255),0,255)}}
A.rY.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.z]}}}
A.nm.prototype={
$1:function(a){return this.a.eF(a)},
$S:function(){return{func:1,args:[,]}}}
A.nk.prototype={
$1:function(a){this.a.P(0,a).b9(this.b.gil())},
$S:function(){return{func:1,args:[,]}}}
A.nl.prototype={
$1:function(a){this.a.hs(0)},
$S:function(){return{func:1,args:[P.p]}}}
A.nn.prototype={
$1:function(a){return this.a.aE(0,this.b)},
$S:function(){return{func:1,args:[W.P]}}}
F.hI.prototype={
A:function(a){return this.b}}
F.eC.prototype={
aL:function(a,b){F.Gc(a).$1("("+this.c+")["+H.x(C.b.gbg(a.b.split(".")))+"]: "+H.x(b))},
cV:function(a,b){this.aL(C.i,b)},
by:function(a){},
gG:function(a){return this.c}}
F.uL.prototype={}
O.tk.prototype={
$1:function(a){return H.x(a.aZ(1))+" = "+H.x(a.aZ(2))+C.c.av("../",this.a)},
$S:function(){return{func:1,args:[P.db]}}}
O.tl.prototype={
$0:function(){var t=document
J.w5(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.w,null)
t=H.kH(t.querySelector("#voidButton"),"$ish2")
t.toString
W.dj(t,"click",new O.tj(),!1,W.uX)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.IX("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.tj.prototype={
$1:function(a){return O.J4()},
$S:function(){return{func:1,args:[W.P]}}}
R.hq.prototype={}
R.v3.prototype={}
R.v2.prototype={}
A.o3.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.U(0,b)?t.n(0,b):$.$get$v1()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.U(0,b)?t.n(0,b):$.$get$v1()}throw H.k(P.dJ(b,"'name' should be a String name or int id only",null))},
gR:function(a){var t=this.a
t=t.gcf(t)
return new H.jK(null,J.cX(t.a),t.b,[H.N(t,0),H.N(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.U(0,b))this.am(0,b)
s=this.h0()
if(typeof s!=="number")return s.aw()
if(s>=256)throw H.k(P.dJ(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
am:function(a,b){var t,s,r
t=this.a
if(!t.U(0,b))return
s=this.c
r=s.n(0,b)
t.am(0,b)
this.b.am(0,r)
s.am(0,b)
this.d.am(0,r)},
h0:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.U(0,s))return s;++s}}}
A.jU.prototype={
$asn:function(){return[A.dM]},
$isn:1}
Q.jW.prototype={}
A.eG.prototype={
bJ:function(a){if(a===0)return 0
return this.h1(a)},
i8:function(){return this.bJ(4294967295)},
h1:function(a){var t,s
t=this.a
if(a>4294967295){s=t.c8()
this.b=C.d.bL(s*4294967295)
return C.d.al(s*a)}else{s=t.bJ(a)
this.b=s
return s}},
br:function(a){var t=a==null
this.a=t?C.Q:P.HO(a)
if(!t)this.b=J.ek(a,1)},
ij:function(a,b){var t=J.bk(a)
if(t.gW(a))return
if(!!t.$iscH)return t.au(a,this.a.c8())
return t.S(a,this.bJ(t.gm(a)))},
eE:function(a){return this.ij(a,!0)}}
Y.dV.prototype={
cN:function(a){var t,s
if(this.b!=null)throw H.k("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bq(0,$.ap,null,t)
this.c.push(new P.e0(s,t))
return s},
eF:function(a){var t,s,r
if(this.b!=null)throw H.k("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bu)(t),++r)t[r].aE(0,this.b)
C.b.sm(t,0)}}
V.lL.prototype={
$4:function(a,b,c,d){return V.As(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bl,P.bl,O.d1]}}}
V.lK.prototype={
$4:function(a,b,c,d){return V.Ar(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bl,P.C,P.C,O.d1]}}}
V.lJ.prototype={
$4:function(a,b,c,d){return V.Ao(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bl,P.bl,O.d1]}}}
V.lI.prototype={
$4:function(a,b,c,d){return V.An(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bl,P.C,P.C,O.d1]}}}
O.d1.prototype={
is:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
iK:function(a,b,c,d){var t,s,r,q,p
t=J.aq(d)
s=0
while(!0){r=t.gew(d)
if(typeof r!=="number")return H.a6(r)
if(!(s<r))break
q=(C.a.dr(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.u(r,q)
r[q]=p;++s}}}
D.oT.prototype={
$1:function(a){return J.w1(a)},
$S:function(){return{func:1,args:[D.co]}}}
D.oU.prototype={
$1:function(a){return a},
$S:function(){return{func:1,args:[D.co]}}}
D.oV.prototype={
$1:function(a){return a.gik()},
$S:function(){return{func:1,args:[D.co]}}}
D.co.prototype={
A:function(a){return this.a},
gG:function(a){return this.a},
gik:function(){return this.d}}
D.kg.prototype={}
D.os.prototype={}
B.pv.prototype={
ii:function(a,b){var t
if(!this.d)this.iq()
t=this.dJ(a)
if(t==null){$.$get$fD().by("Root list '"+H.x(a)+"' not found")
return"["+H.x(a)+"]"}return this.dY(J.zo(t,b),P.c0(P.z,B.d5))},
ih:function(a){return this.ii(a,null)},
bn:function(a){var t=0,s=P.be(),r,q=this,p,o,n,m
var $async$bn=P.bj(function(b,c){if(b===1)return P.bg(c,s)
while(true)switch(t){case 0:p=q.a
if(p.Y(0,a)){p=$.$get$fD()
H.x(a)
p.toString
t=1
break}p.h(0,a)
t=3
return P.bS(A.ec("wordlists/"+H.x(a)+".words",!1,!1,null),$async$bn)
case 3:o=c
q.b.as(0,o.gi4())
p=o.a,n=p.length,m=0
case 4:if(!(m<p.length)){t=6
break}t=7
return P.bS(q.bn(p[m]),$async$bn)
case 7:case 5:p.length===n||(0,H.bu)(p),++m
t=4
break
case 6:q.d=!1
case 1:return P.bh(r,s)}})
return P.bi($async$bn,s)},
iq:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
$.$get$fD().by("Processing word lists")
this.d=!0
t=this.c
t.b3(0)
for(s=this.b,r=s.gaf(s),r=r.gR(r);r.D();){q=r.gI()
p=B.Hz(s.n(0,q))
t.i(0,q,p)
for(o=p.d,n=o.gaf(o),n=n.gR(n),m=[H.ak(p,"aN",0)];n.D();){l=n.gI()
for(k=new H.dS(p,p.gm(p),0,null,m);k.D();){j=k.d
if(!j.gc0().U(0,l)){i=o.n(0,l)
j.a.i(0,l,i)}}}}for(s=t.gaf(t),s=s.gR(s);s.D();){p=t.n(0,s.gI())
p.ip(t)
for(r=new H.dS(p,p.gm(p),0,null,[H.ak(p,"aN",0)]),o=p.d;r.D();){h=r.d
for(n=o.gaf(o),n=n.gR(n);n.D();){l=n.gI()
if(!h.gc0().U(0,l))h.a.i(0,l,o.n(0,l))}for(n=h.gc0(),n=n.gaf(n),n=n.gR(n);n.D();){g=n.gI()
m=h.a
m.i(0,g,J.tx(m.n(0,g),$.$get$xR(),new B.px(h)))}}}},
dJ:function(a){var t,s
t=this.c
if(!t.U(0,a)){$.$get$fD().by("List '"+H.x(a)+"' not found")
return}s=t.n(0,a)
return this.e.eE(s)},
dY:function(a,b){return J.tx(a,$.$get$xQ(),new B.pw(this,b))}}
B.px.prototype={
$1:function(a){var t,s
t=a.aZ(1)
s=this.a
if(!s.a.U(0,t))return"["+H.x(t)+"]"
return s.a.n(0,t)},
$S:function(){return{func:1,args:[P.db]}}}
B.pw.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=a.aZ(1)
s=$.$get$xS().aU(0,t)
s=H.ds(s,B.il(),H.ak(s,"n",0),null)
r=P.d0(s,!0,H.ak(s,"n",0))
if(0>=r.length)return H.u(r,0)
q=J.e4(r[0],"@")
s=q.length
p=s>1?q[1]:null
o=this.a
if(0>=s)return H.u(q,0)
n=o.dJ(q[0])
s=r.length
if(s>1){for(s=this.b,m=n,l=1;k=r.length,l<k;++l){q=J.e4(r[l],"@")
if(0>=q.length)return H.u(q,0)
if(J.aZ(q[0],"var")){if(q.length<2)continue
j=q[1]
if(s.U(0,j))m=s.n(0,j)
else s.i(0,j,m)}}s=k}else m=n
if(m==null){if(0>=s)return H.u(r,0)
return"["+H.x(r[0])+"]"}s=J.aq(m)
i=s.au(m,p)
if(i==null){$.$get$fD().by("Missing variant '"+H.x(p)+"' for word '"+H.x(m)+"', falling back to base")
i=s.bq(m)}return o.dY(i,this.b)},
$S:function(){return{func:1,args:[P.db]}}}
B.d5.prototype={
au:function(a,b){if(b==null)b="MAIN"
if(this.a.U(0,b))return this.a.n(0,b)
return},
bq:function(a){return this.au(a,null)},
A:function(a){return"[Word: "+H.x(this.bq(0))+"]"},
gc0:function(){return this.a}}
B.eS.prototype={
A:function(a){return"WordList '"+H.x(this.e)+"': "+this.fb(0)},
eG:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
if(this.f)return
this.f=!0
b=P.a_(null,null,null,B.eS)
b.h(0,this)
for(t=this.c,s=t.gaf(t),s=s.gR(s),r=this.e;s.D();){q=s.gI()
if(a.U(0,q)){p=a.n(0,q)
if(b.Y(0,p)){$.$get$fD().aL(C.h,"Include loop detected in list '"+H.x(r)+"', already visited '"+H.x(p.e)+"', ignoring")
continue}p.eG(a,b)}}for(s=t.gaf(t),s=s.gR(s),r=[H.ak(this,"cH",0)];s.D();){q=s.gI()
if(!a.U(0,q))continue
for(o=a.n(0,q).b,n=o.length,m=0;m<o.length;o.length===n||(0,H.bu)(o),++m){l=o[m]
k=J.aq(l)
j=k.gX(l)
k=J.tt(k.gbc(l),t.n(0,q))
C.b.h(this.b,new Q.h(j,this.k(j,J.ty(k)),r))}}},
ip:function(a){return this.eG(a,null)},
$isp:1,
$asp:function(){return[B.d5]},
$ase_:function(){return[B.d5]},
$asi5:function(){return[B.d5]},
$ascH:function(){return[B.d5]},
$asn:function(){return[B.d5]},
$ast:function(){return[B.d5]},
gcY:function(){return this.c},
ghA:function(){return this.d},
gG:function(a){return this.e}}
B.eT.prototype={
A:function(a){return"[WordListFile: "+this.b.A(0)+" ]"},
gcY:function(){return this.a},
gi4:function(){return this.b}}
S.fv.prototype={}
S.vv.prototype={}
S.vw.prototype={}
S.vx.prototype={}
S.tR.prototype={}
S.tU.prototype={}
S.tG.prototype={}
S.ve.prototype={}
S.vz.prototype={}
S.vA.prototype={}
S.la.prototype={}
S.v6.prototype={}
S.v0.prototype={}
S.ne.prototype={}
S.tL.prototype={}
S.tB.prototype={}
S.lu.prototype={}
S.uM.prototype={}
S.lv.prototype={}
S.o5.prototype={}
S.vl.prototype={}
S.vi.prototype={}
S.vm.prototype={}
S.tA.prototype={}
S.ms.prototype={}
S.l8.prototype={}
S.tF.prototype={}
S.tE.prototype={}
S.v7.prototype={}
S.vn.prototype={}
S.v8.prototype={}
S.tT.prototype={}
S.tS.prototype={}
S.vk.prototype={}
S.vj.prototype={}
S.pC.prototype={}
S.vq.prototype={}
S.tI.prototype={}
S.tJ.prototype={}
S.vy.prototype={}
S.hK.prototype={}
S.uS.prototype={}
S.uT.prototype={}
S.uU.prototype={}
S.uV.prototype={}
S.vf.prototype={}
S.vg.prototype={}
S.vh.prototype={}
S.uR.prototype={}
S.uY.prototype={}
S.uZ.prototype={}
S.u6.prototype={}
S.u7.prototype={}
S.u8.prototype={}
S.v_.prototype={}
S.uW.prototype={}
S.tC.prototype={}
S.vs.prototype={}
S.vt.prototype={}
S.vr.prototype={}
Z.uG.prototype={}
Z.uC.prototype={}
Z.uD.prototype={}
Q.cH.prototype={
au:function(a,b){var t,s,r,q,p,o,n
t=this.df()
s=J.tu(b,0,1)*t
for(r=J.cX(this.gbo()),q=0;r.D();){p=r.gI()
o=J.aq(p)
n=o.gbc(p)
if(typeof n!=="number")return H.a6(n)
q+=n
if(s<=q)return o.gX(p)}return},
df:function(){var t,s,r
for(t=J.cX(this.gbo()),s=0;t.D();){r=J.zm(t.gI())
if(typeof r!=="number")return H.a6(r)
s+=r}return s},
k:function(a,b){return b},
A:function(a){return J.cB(this.gbo())},
aA:function(a,b){return Q.vC(this,b,H.ak(this,"cH",0),null)},
a2:function(a,b){return Q.vB(this,!1,!0,null,H.ak(this,"cH",0))},
aq:function(a){return this.a2(a,!0)},
$isn:1,
$asn:null}
Q.e_.prototype={
au:function(a,b){var t,s,r,q,p,o,n,m,l
t=this.df()
s=J.tu(b,0,1)*t
for(r=this.b,q=r.length,p=0,o=0;o<r.length;r.length===q||(0,H.bu)(r),++o){n=r[o]
m=J.aq(n)
l=m.gbc(n)
if(typeof l!=="number")return H.a6(l)
p+=l
if(s<=p)return m.gX(n)}return},
gbo:function(){return this.b},
c1:function(a,b,c){C.b.h(this.b,new Q.h(b,this.k(b,J.ty(c)),[H.ak(this,"cH",0)]))},
h:function(a,b){return this.c1(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return J.w0(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.u(t,b)
t[b]=new Q.h(c,s,[H.ak(this,"cH",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
A:function(a){return P.jC(this.b,"[","]")},
aA:function(a,b){return Q.vC(this,b,H.ak(this,"e_",0),null)},
a2:function(a,b){return Q.vB(this,!1,!0,null,H.ak(this,"e_",0))},
aq:function(a){return this.a2(a,!0)},
co:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.i5.prototype={$ascH:null,$asn:null,$asp:null,$ast:null,$isp:1,$ist:1,$isn:1}
Q.h.prototype={
A:function(a){return"("+H.x(this.a)+" @ "+H.x(this.b)+")"},
gX:function(a){return this.a},
gbc:function(a){return this.b}}
Q.eV.prototype={
gbo:function(){return this.b},
gR:function(a){var t=new Q.q4(null,[H.ak(this,"eV",0)])
t.a=J.cX(this.b)
return t},
gm:function(a){return J.c4(this.b)},
A:function(a){return J.cB(this.b)},
aA:function(a,b){return Q.vC(this,b,H.ak(this,"eV",0),null)},
a2:function(a,b){return Q.vB(this,!1,!0,null,H.ak(this,"eV",0))},
aq:function(a){return this.a2(a,!0)}}
Q.i4.prototype={$ascH:null,$asn:null,$isn:1}
Q.q4.prototype={
gI:function(){return J.w0(this.a.gI())},
D:function(){return this.a.D()}}
Q.kd.prototype={
$aseV:function(a,b){return[b]},
$asi4:function(a,b){return[b]},
$ascH:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
Q.q5.prototype={
$1:function(a){var t=J.aq(a)
return new Q.h(this.c.$1(t.gX(a)),t.gbc(a),[this.b])},
$S:function(){return H.eZ(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"kd")}}
J.f.prototype.f8=J.f.prototype.A
J.hC.prototype.fa=J.hC.prototype.A
P.du.prototype.fc=P.du.prototype.bT
P.du.prototype.fd=P.du.prototype.bS
P.aN.prototype.dq=P.aN.prototype.a3
P.n.prototype.f9=P.n.prototype.ci
W.cC.prototype.cn=W.cC.prototype.aF
W.id.prototype.fe=W.id.prototype.b2
Q.e_.prototype.fb=Q.e_.prototype.A;(function installTearOffs(){installTearOff(H.fI.prototype,"gi2",0,0,0,null,["$0"],["c6"],1)
installTearOff(H.dF.prototype,"geW",0,0,0,null,["$1"],["aC"],14)
installTearOff(H.eW.prototype,"ghD",0,0,0,null,["$1"],["b4"],14)
installTearOff(H,"yx",1,0,0,null,["$1"],["Ie"],9)
installTearOff(P,"Ih",1,0,0,null,["$1"],["HD"],7)
installTearOff(P,"Ii",1,0,0,null,["$1"],["HE"],7)
installTearOff(P,"Ij",1,0,0,null,["$1"],["HF"],7)
installTearOff(P,"yJ",1,0,0,null,["$0"],["Id"],1)
installTearOff(P.kk.prototype,"geh",0,0,0,null,["$2","$1"],["cS","bk"],8)
installTearOff(P.bq.prototype,"gbi",0,0,0,null,["$2","$1"],["ao","fD"],8)
var t
installTearOff(t=P.du.prototype,"gdV",0,0,0,null,["$0"],["bW"],1)
installTearOff(t,"gdW",0,0,0,null,["$0"],["bX"],1)
installTearOff(t=P.i8.prototype,"gdV",0,0,0,null,["$0"],["bW"],1)
installTearOff(t,"gdW",0,0,0,null,["$0"],["bX"],1)
installTearOff(t,"gfP",0,0,0,null,["$1"],["fQ"],function(){return H.eZ(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"i8")})
installTearOff(t,"gfT",0,0,0,null,["$2"],["fU"],18)
installTearOff(t,"gfR",0,0,0,null,["$0"],["fS"],1)
installTearOff(P.kr.prototype,"ght",0,1,0,null,["$1"],["Y"],33)
installTearOff(P,"Is",1,0,0,null,["$2"],["A4"],32)
installTearOff(P,"It",1,0,0,null,["$1"],["fP"],4)
installTearOff(W,"IG",1,0,0,null,["$4"],["HK"],13)
installTearOff(W,"IH",1,0,0,null,["$4"],["HL"],13)
installTearOff(t=W.iq.prototype,"gat",0,1,0,null,["$1"],["cV"],4)
installTearOff(t,"ghV",0,0,0,null,["$1"],["es"],4)
installTearOff(t,"giH",0,0,0,null,["$1"],["iI"],4)
installTearOff(W.f9.prototype,"gX",0,1,0,null,["$1"],["K"],5)
installTearOff(W.it.prototype,"gX",0,1,0,null,["$1"],["K"],16)
installTearOff(W.iy.prototype,"gX",0,1,0,null,["$1"],["K"],5)
installTearOff(W.iz.prototype,"gX",0,1,0,null,["$1"],["K"],9)
installTearOff(W.iA.prototype,"gX",0,1,0,null,["$1"],["K"],5)
installTearOff(W.fj.prototype,"gX",0,1,0,null,["$1"],["K"],17)
installTearOff(W.iQ.prototype,"gX",0,1,0,null,["$1"],["K"],10)
installTearOff(W.fk.prototype,"gX",0,1,0,null,["$1"],["K"],11)
installTearOff(W.iS.prototype,"gX",0,1,0,null,["$1"],["K"],11)
installTearOff(W.jL.prototype,"gX",0,1,0,null,["$1"],["K"],5)
installTearOff(W.jM.prototype,"gX",0,1,0,null,["$1"],["K"],12)
installTearOff(W.jP.prototype,"gd5",0,1,0,null,["$0"],["d6"],6)
installTearOff(W.cl.prototype,"gX",0,1,0,null,["$1"],["K"],12)
installTearOff(W.jY.prototype,"gX",0,1,0,null,["$1"],["K"],19)
installTearOff(W.k1.prototype,"gX",0,1,0,null,["$1"],["K"],10)
installTearOff(W.k3.prototype,"gX",0,1,0,null,["$1"],["K"],20)
installTearOff(W.k4.prototype,"gX",0,1,0,null,["$1"],["K"],21)
installTearOff(W.cn.prototype,"gX",0,1,0,null,["$1"],["K"],22)
installTearOff(W.k9.prototype,"gX",0,1,0,null,["$1"],["K"],23)
installTearOff(W.ka.prototype,"gX",0,1,0,null,["$1"],["K"],39)
installTearOff(t=W.kb.prototype,"gc9",0,1,0,null,["$0"],["ie"],6)
installTearOff(t,"gd5",0,1,0,null,["$0"],["d6"],6)
installTearOff(W.kc.prototype,"gX",0,1,0,null,["$1"],["K"],24)
installTearOff(W.i6.prototype,"gX",0,1,0,null,["$1"],["K"],25)
installTearOff(W.kl.prototype,"gX",0,1,0,null,["$1"],["K"],26)
installTearOff(W.kq.prototype,"gX",0,1,0,null,["$1"],["K"],27)
installTearOff(W.ic.prototype,"gX",0,1,0,null,["$1"],["K"],28)
installTearOff(W.ku.prototype,"gX",0,1,0,null,["$1"],["K"],35)
installTearOff(W.kw.prototype,"gX",0,1,0,null,["$1"],["K"],30)
installTearOff(P.k5.prototype,"gX",0,1,0,null,["$1"],["K"],31)
installTearOff(R,"dU",1,0,0,null,["$1"],["xJ"],0)
installTearOff(R,"GH",1,0,0,null,["$1"],["GX"],0)
installTearOff(R,"GD",1,0,0,null,["$1"],["GI"],0)
installTearOff(R,"oo",1,0,0,null,["$1"],["GW"],0)
installTearOff(R,"c1",1,0,0,null,["$1"],["GV"],0)
installTearOff(R,"on",1,0,0,null,["$1"],["GU"],0)
installTearOff(R,"om",1,0,0,null,["$1"],["GS"],0)
installTearOff(R,"fy",1,0,0,null,["$1"],["GQ"],0)
installTearOff(R,"dd",1,0,0,null,["$1"],["GM"],0)
installTearOff(R,"ef",1,0,0,null,["$1"],["GO"],0)
installTearOff(R,"dT",1,0,0,null,["$1"],["GT"],0)
installTearOff(R,"vd",1,0,0,null,["$1"],["GN"],0)
installTearOff(R,"GF",1,0,0,null,["$1"],["GP"],0)
installTearOff(R,"GG",1,0,0,null,["$1"],["GR"],0)
installTearOff(R,"B",1,0,0,null,["$1"],["GJ"],0)
installTearOff(R,"GE",1,0,0,null,["$1"],["GK"],0)
installTearOff(F.eC.prototype,"gat",0,1,0,null,["$1"],["cV"],4)
installTearOff(O,"IP",1,0,0,null,["$1"],["IR"],34)
installTearOff(Y.dV.prototype,"gil",0,0,0,null,["$1"],["eF"],function(){return H.eZ(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dV")})
installTearOff(V,"IV",1,0,0,null,["$4"],["Aq"],3)
installTearOff(V,"IU",1,0,0,null,["$4"],["Ap"],2)
installTearOff(B,"il",1,0,0,null,["$1"],["I8"],36)
installTearOff(T,"In",1,0,0,null,["$4"],["Ag"],3)
installTearOff(T,"Im",1,0,0,null,["$4"],["Af"],2)
installTearOff(T,"Il",1,0,0,null,["$4"],["Ae"],3)
installTearOff(T,"Ik",1,0,0,null,["$4"],["Ad"],2)
installTearOff(F,"IB",1,0,0,null,["$4"],["Am"],3)
installTearOff(F,"IA",1,0,0,null,["$4"],["Al"],2)
installTearOff(F,"Iz",1,0,0,null,["$4"],["Ak"],3)
installTearOff(F,"Iy",1,0,0,null,["$4"],["Aj"],2)
installTearOff(F,"Ix",1,0,0,null,["$4"],["Ai"],3)
installTearOff(F,"Iw",1,0,0,null,["$4"],["Ah"],2)
installTearOff(S,"z0",1,0,0,null,["$0"],["th"],37)
installTearOff(S,"J1",1,0,0,null,["$2"],["IM"],38)
installTearOff(S,"z1",1,0,0,null,["$1","$0"],["z4",function(){return S.z4(null)}],15)
installTearOff(S,"J2",1,0,0,null,["$1","$0"],["yW",function(){return S.yW(null)}],15)
installTearOff(S,"J0",1,0,0,null,["$1","$0"],["kD",function(){return S.kD(null)}],29)})();(function inheritance(){inherit(P.ad,null)
var t=P.ad
inherit(H.uI,t)
inherit(J.f,t)
inherit(J.im,t)
inherit(P.fw,t)
inherit(P.n,t)
inherit(H.dS,t)
inherit(P.jD,t)
inherit(H.iN,t)
inherit(H.pO,t)
inherit(H.f7,t)
inherit(H.r5,t)
inherit(H.fI,t)
inherit(H.qD,t)
inherit(H.eX,t)
inherit(H.r4,t)
inherit(H.qp,t)
inherit(H.fz,t)
inherit(H.pG,t)
inherit(H.dK,t)
inherit(H.dF,t)
inherit(H.eW,t)
inherit(P.jJ,t)
inherit(H.lh,t)
inherit(H.or,t)
inherit(H.pL,t)
inherit(P.eo,t)
inherit(H.hi,t)
inherit(H.kv,t)
inherit(H.dZ,t)
inherit(H.w,t)
inherit(H.nf,t)
inherit(H.nh,t)
inherit(H.hB,t)
inherit(H.kt,t)
inherit(H.ki,t)
inherit(H.k7,t)
inherit(H.rr,t)
inherit(P.c9,t)
inherit(P.f8,t)
inherit(P.kk,t)
inherit(P.kp,t)
inherit(P.bq,t)
inherit(P.kj,t)
inherit(P.dt,t)
inherit(P.oX,t)
inherit(P.du,t)
inherit(P.km,t)
inherit(P.qx,t)
inherit(P.r8,t)
inherit(P.rp,t)
inherit(P.f1,t)
inherit(P.rI,t)
inherit(P.qW,t)
inherit(P.qY,t)
inherit(P.oG,t)
inherit(P.r2,t)
inherit(P.d7,t)
inherit(P.fq,t)
inherit(P.aN,t)
inherit(P.rz,t)
inherit(P.r3,t)
inherit(P.h3,t)
inherit(P.h6,t)
inherit(P.rB,t)
inherit(P.cW,t)
inherit(P.bK,t)
inherit(P.e5,t)
inherit(P.dx,t)
inherit(P.dN,t)
inherit(P.o_,t)
inherit(P.k6,t)
inherit(P.qH,t)
inherit(P.bQ,t)
inherit(P.lO,t)
inherit(P.p,t)
inherit(P.b1,t)
inherit(P.cG,t)
inherit(P.db,t)
inherit(P.dX,t)
inherit(P.z,t)
inherit(P.ch,t)
inherit(P.eR,t)
inherit(P.ky,t)
inherit(P.pP,t)
inherit(P.rn,t)
inherit(W.iq,t)
inherit(W.jT,t)
inherit(W.is,t)
inherit(W.qo,t)
inherit(P.lm,t)
inherit(W.ia,t)
inherit(W.bv,t)
inherit(W.jR,t)
inherit(W.id,t)
inherit(W.rv,t)
inherit(W.iO,t)
inherit(W.ed,t)
inherit(W.ry,t)
inherit(W.rj,t)
inherit(W.kz,t)
inherit(P.rs,t)
inherit(P.qh,t)
inherit(P.r1,t)
inherit(P.ra,t)
inherit(P.rb,t)
inherit(P.bl,t)
inherit(P.di,t)
inherit(T.fU,t)
inherit(T.dl,t)
inherit(T.hv,t)
inherit(T.o1,t)
inherit(T.qd,t)
inherit(T.qe,t)
inherit(T.qf,t)
inherit(T.qc,t)
inherit(T.mC,t)
inherit(T.iT,t)
inherit(B.hw,t)
inherit(N.ac,t)
inherit(L.fV,t)
inherit(A.jU,t)
inherit(O.c8,t)
inherit(T.hW,t)
inherit(M.h1,t)
inherit(X.iD,t)
inherit(X.io,t)
inherit(M.hj,t)
inherit(Z.iC,t)
inherit(E.nX,t)
inherit(E.O,t)
inherit(A.a5,t)
inherit(U.b,t)
inherit(Y.dW,t)
inherit(K.cL,t)
inherit(X.F,t)
inherit(G.a1,t)
inherit(A.h0,t)
inherit(B.dz,t)
inherit(B.dn,t)
inherit(A.dM,t)
inherit(F.hI,t)
inherit(F.eC,t)
inherit(Q.jW,t)
inherit(A.eG,t)
inherit(Y.dV,t)
inherit(O.d1,t)
inherit(D.co,t)
inherit(B.pv,t)
inherit(B.d5,t)
inherit(Q.cH,t)
inherit(B.eT,t)
inherit(Q.h,t)
t=J.f
inherit(J.n_,t)
inherit(J.n0,t)
inherit(J.hC,t)
inherit(J.ey,t)
inherit(J.fr,t)
inherit(J.ez,t)
inherit(H.fs,t)
inherit(H.eE,t)
inherit(W.aH,t)
inherit(W.cP,t)
inherit(W.f5,t)
inherit(W.lc,t)
inherit(W.h7,t)
inherit(W.ll,t)
inherit(W.bP,t)
inherit(W.iU,t)
inherit(W.lx,t)
inherit(W.fa,t)
inherit(W.it,t)
inherit(W.iw,t)
inherit(W.lA,t)
inherit(W.ix,t)
inherit(W.iV,t)
inherit(W.iz,t)
inherit(W.iA,t)
inherit(W.hb,t)
inherit(W.P,t)
inherit(W.iW,t)
inherit(W.mi,t)
inherit(W.ml,t)
inherit(W.mo,t)
inherit(W.ct,t)
inherit(W.mx,t)
inherit(W.iX,t)
inherit(W.hu,t)
inherit(W.eh,t)
inherit(W.no,t)
inherit(W.jL,t)
inherit(W.cv,t)
inherit(W.j6,t)
inherit(W.nO,t)
inherit(W.nP,t)
inherit(W.jP,t)
inherit(W.j7,t)
inherit(W.o6,t)
inherit(W.ee,t)
inherit(W.ei,t)
inherit(W.cl,t)
inherit(W.j8,t)
inherit(W.k0,t)
inherit(W.oE,t)
inherit(W.cx,t)
inherit(W.j9,t)
inherit(W.fB,t)
inherit(W.cn,t)
inherit(W.oQ,t)
inherit(W.oW,t)
inherit(W.pk,t)
inherit(W.cp,t)
inherit(W.ja,t)
inherit(W.pF,t)
inherit(W.cz,t)
inherit(W.jb,t)
inherit(W.fE,t)
inherit(W.ka,t)
inherit(W.kb,t)
inherit(W.pU,t)
inherit(W.pV,t)
inherit(W.fF,t)
inherit(W.kc,t)
inherit(W.qs,t)
inherit(W.jc,t)
inherit(W.jd,t)
inherit(W.iY,t)
inherit(W.iZ,t)
inherit(W.j_,t)
inherit(W.j0,t)
inherit(W.rG,t)
inherit(W.rH,t)
inherit(P.mG,t)
inherit(P.nW,t)
inherit(P.da,t)
inherit(P.j1,t)
inherit(P.dc,t)
inherit(P.j2,t)
inherit(P.oe,t)
inherit(P.j3,t)
inherit(P.dh,t)
inherit(P.j4,t)
inherit(P.q0,t)
inherit(P.fX,t)
inherit(P.kQ,t)
inherit(P.ot,t)
inherit(P.rF,t)
inherit(P.j5,t)
t=J.hC
inherit(J.oc,t)
inherit(J.eP,t)
inherit(J.eA,t)
inherit(F.uL,t)
inherit(R.hq,t)
inherit(R.v3,t)
inherit(R.v2,t)
inherit(S.fv,t)
inherit(S.vv,t)
inherit(S.vw,t)
inherit(S.vx,t)
inherit(S.tR,t)
inherit(S.tU,t)
inherit(S.tG,t)
inherit(S.vz,t)
inherit(S.vA,t)
inherit(S.lu,t)
inherit(S.vl,t)
inherit(S.vm,t)
inherit(S.tA,t)
inherit(S.ms,t)
inherit(S.l8,t)
inherit(S.tF,t)
inherit(S.tE,t)
inherit(S.tT,t)
inherit(S.pC,t)
inherit(S.tJ,t)
inherit(S.hK,t)
inherit(S.uT,t)
inherit(S.uV,t)
inherit(S.vg,t)
inherit(S.vh,t)
inherit(S.uY,t)
inherit(S.uZ,t)
inherit(S.u7,t)
inherit(S.u8,t)
inherit(S.v_,t)
inherit(S.uW,t)
inherit(S.tC,t)
inherit(S.vs,t)
inherit(S.vt,t)
inherit(S.vr,t)
inherit(Z.uG,t)
inherit(Z.uC,t)
inherit(Z.uD,t)
inherit(J.uH,J.ey)
t=J.fr
inherit(J.jF,t)
inherit(J.jE,t)
inherit(P.hG,P.fw)
t=P.hG
inherit(H.i3,t)
inherit(W.ko,t)
inherit(W.d6,t)
inherit(H.le,H.i3)
t=P.n
inherit(H.t,t)
inherit(H.hJ,t)
inherit(H.ej,t)
inherit(P.hz,t)
inherit(H.rq,t)
t=H.t
inherit(H.eB,t)
inherit(H.ng,t)
inherit(P.qX,t)
inherit(P.eI,t)
t=H.eB
inherit(H.pl,t)
inherit(H.eD,t)
inherit(P.ni,t)
inherit(H.fb,H.hJ)
t=P.jD
inherit(H.jK,t)
inherit(H.ke,t)
inherit(Q.q4,t)
t=H.f7
inherit(H.tp,t)
inherit(H.tq,t)
inherit(H.r0,t)
inherit(H.qE,t)
inherit(H.mL,t)
inherit(H.mM,t)
inherit(H.r7,t)
inherit(H.pH,t)
inherit(H.pI,t)
inherit(H.tr,t)
inherit(H.tb,t)
inherit(H.tc,t)
inherit(H.td,t)
inherit(H.te,t)
inherit(H.tf,t)
inherit(H.pr,t)
inherit(H.n3,t)
inherit(H.n2,t)
inherit(H.t7,t)
inherit(H.t8,t)
inherit(H.t9,t)
inherit(P.ql,t)
inherit(P.qk,t)
inherit(P.qm,t)
inherit(P.qn,t)
inherit(P.rJ,t)
inherit(P.rK,t)
inherit(P.rU,t)
inherit(P.rW,t)
inherit(P.mr,t)
inherit(P.mq,t)
inherit(P.qI,t)
inherit(P.qQ,t)
inherit(P.qM,t)
inherit(P.qN,t)
inherit(P.qO,t)
inherit(P.qK,t)
inherit(P.qP,t)
inherit(P.qJ,t)
inherit(P.qT,t)
inherit(P.qU,t)
inherit(P.qS,t)
inherit(P.qR,t)
inherit(P.p_,t)
inherit(P.oY,t)
inherit(P.oZ,t)
inherit(P.p0,t)
inherit(P.p5,t)
inherit(P.p3,t)
inherit(P.p4,t)
inherit(P.p6,t)
inherit(P.p9,t)
inherit(P.pa,t)
inherit(P.p7,t)
inherit(P.p8,t)
inherit(P.pb,t)
inherit(P.pc,t)
inherit(P.p1,t)
inherit(P.p2,t)
inherit(P.qr,t)
inherit(P.qq,t)
inherit(P.r9,t)
inherit(P.rM,t)
inherit(P.rL,t)
inherit(P.rN,t)
inherit(P.rT,t)
inherit(P.rd,t)
inherit(P.re,t)
inherit(P.rf,t)
inherit(P.qZ,t)
inherit(P.rZ,t)
inherit(P.nu,t)
inherit(P.rD,t)
inherit(P.rC,t)
inherit(P.lE,t)
inherit(P.lF,t)
inherit(P.pT,t)
inherit(P.pQ,t)
inherit(P.pR,t)
inherit(P.pS,t)
inherit(P.rX,t)
inherit(P.rQ,t)
inherit(P.rP,t)
inherit(P.rR,t)
inherit(P.rS,t)
inherit(W.qu,t)
inherit(W.rV,t)
inherit(W.mA,t)
inherit(W.mB,t)
inherit(W.qG,t)
inherit(W.nR,t)
inherit(W.nQ,t)
inherit(W.rl,t)
inherit(W.rm,t)
inherit(W.rx,t)
inherit(W.rE,t)
inherit(P.ru,t)
inherit(P.qi,t)
inherit(P.t_,t)
inherit(P.t0,t)
inherit(P.t1,t)
inherit(P.ln,t)
inherit(P.rO,t)
inherit(P.kW,t)
inherit(P.kX,t)
inherit(O.mf,t)
inherit(O.mg,t)
inherit(O.mh,t)
inherit(O.l3,t)
inherit(Z.mp,t)
inherit(A.mZ,t)
inherit(A.mY,t)
inherit(G.mW,t)
inherit(U.q8,t)
inherit(U.q9,t)
inherit(A.rY,t)
inherit(A.nm,t)
inherit(A.nk,t)
inherit(A.nl,t)
inherit(A.nn,t)
inherit(O.tk,t)
inherit(O.tl,t)
inherit(O.tj,t)
inherit(V.lL,t)
inherit(V.lK,t)
inherit(V.lJ,t)
inherit(V.lI,t)
inherit(D.oT,t)
inherit(D.oU,t)
inherit(D.oV,t)
inherit(B.px,t)
inherit(B.pw,t)
inherit(Q.q5,t)
t=H.qp
inherit(H.fJ,t)
inherit(H.ig,t)
inherit(P.eQ,P.jJ)
inherit(H.li,P.eQ)
inherit(H.h5,H.lh)
inherit(H.lj,H.h5)
t=P.eo
inherit(H.jS,t)
inherit(H.n4,t)
inherit(H.pN,t)
inherit(H.lb,t)
inherit(H.ow,t)
inherit(P.fu,t)
inherit(P.cY,t)
inherit(P.V,t)
inherit(P.eO,t)
inherit(P.df,t)
inherit(P.bC,t)
inherit(P.lw,t)
t=H.pr
inherit(H.oS,t)
inherit(H.fZ,t)
t=P.hz
inherit(H.qj,t)
inherit(T.fT,t)
t=H.eE
inherit(H.nG,t)
inherit(H.jN,t)
t=H.jN
inherit(H.hP,t)
inherit(H.hQ,t)
inherit(H.hR,H.hP)
inherit(H.hN,H.hR)
inherit(H.hS,H.hQ)
inherit(H.hO,H.hS)
t=H.hN
inherit(H.nH,t)
inherit(H.nI,t)
t=H.hO
inherit(H.nJ,t)
inherit(H.nK,t)
inherit(H.nL,t)
inherit(H.nM,t)
inherit(H.nN,t)
inherit(H.jO,t)
inherit(H.ft,t)
t=P.kk
inherit(P.e0,t)
inherit(P.kx,t)
t=P.km
inherit(P.qw,t)
inherit(P.qy,t)
inherit(P.ro,P.r8)
t=P.dt
inherit(P.i7,t)
inherit(W.kn,t)
inherit(P.i8,P.du)
inherit(P.r6,P.i7)
inherit(P.rc,P.rI)
inherit(P.ks,H.w)
inherit(P.oF,P.oG)
inherit(P.r_,P.oF)
inherit(P.kr,P.r_)
t=P.h3
inherit(P.l0,t)
inherit(P.lH,t)
t=P.h6
inherit(P.l1,t)
inherit(P.pY,t)
inherit(P.pX,P.lH)
t=P.dx
inherit(P.W,t)
inherit(P.C,t)
t=P.cY
inherit(P.eH,t)
inherit(P.mH,t)
inherit(P.qv,P.ky)
t=W.aH
inherit(W.af,t)
inherit(W.hc,t)
inherit(W.lg,t)
inherit(W.iM,t)
inherit(W.mj,t)
inherit(W.mm,t)
inherit(W.ht,t)
inherit(W.hM,t)
inherit(W.og,t)
inherit(W.k_,t)
inherit(W.oH,t)
inherit(W.eU,t)
inherit(W.cw,t)
inherit(W.hd,t)
inherit(W.cV,t)
inherit(W.cN,t)
inherit(W.he,t)
inherit(W.pZ,t)
inherit(W.q3,t)
inherit(W.kf,t)
inherit(W.qa,t)
inherit(W.rk,t)
inherit(P.ly,t)
inherit(P.hV,t)
inherit(P.pJ,t)
inherit(P.bJ,t)
inherit(P.fY,t)
t=W.af
inherit(W.cC,t)
inherit(W.em,t)
inherit(W.en,t)
inherit(W.iv,t)
inherit(W.fG,t)
inherit(W.qz,t)
t=W.cC
inherit(W.aL,t)
inherit(P.cb,t)
t=W.aL
inherit(W.f0,t)
inherit(W.kR,t)
inherit(W.hL,t)
inherit(W.l2,t)
inherit(W.f6,t)
inherit(W.h2,t)
inherit(W.lG,t)
inherit(W.me,t)
inherit(W.iQ,t)
inherit(W.mD,t)
inherit(W.fm,t)
inherit(W.mJ,t)
inherit(W.n6,t)
inherit(W.n8,t)
inherit(W.hE,t)
inherit(W.nt,t)
inherit(W.nx,t)
inherit(W.ny,t)
inherit(W.nz,t)
inherit(W.nA,t)
inherit(W.nU,t)
inherit(W.nV,t)
inherit(W.nZ,t)
inherit(W.o0,t)
inherit(W.o4,t)
inherit(W.ok,t)
inherit(W.fA,t)
inherit(W.k1,t)
inherit(W.oJ,t)
inherit(W.oM,t)
inherit(W.hY,t)
inherit(W.pi,t)
inherit(W.k8,t)
inherit(W.pp,t)
inherit(W.pq,t)
inherit(W.i1,t)
inherit(W.pu,t)
inherit(W.qV,t)
inherit(W.f3,W.hL)
inherit(W.hf,W.hc)
inherit(W.kZ,W.hf)
t=W.bP
inherit(W.lo,t)
inherit(W.lp,t)
inherit(W.h8,t)
inherit(W.h9,t)
inherit(W.lq,t)
inherit(W.lr,t)
inherit(W.ls,t)
inherit(W.f9,W.iU)
inherit(W.qt,W.jT)
inherit(W.je,W.iV)
inherit(W.iy,W.je)
t=W.P
inherit(W.lM,t)
inherit(W.oO,t)
inherit(W.oP,t)
inherit(W.cj,W.f5)
inherit(W.jf,W.iW)
inherit(W.fj,W.jf)
inherit(W.jg,W.iX)
inherit(W.fk,W.jg)
inherit(W.iS,W.fk)
inherit(W.eb,W.ht)
inherit(W.hD,W.eh)
inherit(W.nB,W.hM)
inherit(W.jq,W.j6)
inherit(W.jM,W.jq)
inherit(W.jr,W.j7)
inherit(W.jQ,W.jr)
inherit(W.ob,W.ei)
inherit(W.js,W.j8)
inherit(W.jY,W.js)
inherit(W.oI,W.eU)
inherit(W.hg,W.hd)
inherit(W.k3,W.hg)
inherit(W.jt,W.j9)
inherit(W.k4,W.jt)
inherit(W.ju,W.ja)
inherit(W.pA,W.ju)
inherit(W.hh,W.he)
inherit(W.pB,W.hh)
inherit(W.jv,W.jb)
inherit(W.k9,W.jv)
inherit(W.jw,W.jc)
inherit(W.i6,W.jw)
inherit(W.jx,W.jd)
inherit(W.kl,W.jx)
inherit(W.qA,W.ix)
inherit(W.jh,W.iY)
inherit(W.kq,W.jh)
inherit(W.ji,W.iZ)
inherit(W.ic,W.ji)
inherit(W.jj,W.j_)
inherit(W.ku,W.jj)
inherit(W.jk,W.j0)
inherit(W.kw,W.jk)
inherit(W.qB,W.qo)
t=P.lm
inherit(W.qC,t)
inherit(P.kV,t)
inherit(W.e1,W.kn)
inherit(W.qF,P.oX)
inherit(W.rw,W.id)
inherit(P.rt,P.rs)
inherit(P.kh,P.qh)
inherit(P.bW,P.rb)
t=P.cb
inherit(P.cu,t)
inherit(P.el,t)
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
inherit(P.m2,t)
inherit(P.m3,t)
inherit(P.mk,t)
inherit(P.nv,t)
inherit(P.nw,t)
inherit(P.o9,t)
inherit(P.hX,t)
inherit(P.pj,t)
inherit(P.po,t)
inherit(P.q_,t)
inherit(P.i9,t)
inherit(P.rg,t)
inherit(P.rh,t)
inherit(P.ri,t)
t=P.cu
inherit(P.kO,t)
inherit(P.mE,t)
inherit(P.pm,t)
inherit(P.eN,t)
inherit(P.pW,t)
inherit(P.jl,P.j1)
inherit(P.nb,P.jl)
inherit(P.jm,P.j2)
inherit(P.nS,P.jm)
inherit(P.jn,P.j3)
inherit(P.pg,P.jn)
inherit(P.pz,P.eN)
inherit(P.jo,P.j4)
inherit(P.pK,P.jo)
t=P.bJ
inherit(P.f4,t)
inherit(P.l4,t)
inherit(P.lk,t)
t=P.f4
inherit(P.f2,t)
inherit(P.jV,t)
inherit(P.jp,P.j5)
inherit(P.k5,P.jp)
t=B.hw
inherit(S.kP,t)
inherit(M.kU,t)
inherit(A.lf,t)
inherit(M.lt,t)
inherit(V.lB,t)
inherit(U.m4,t)
inherit(N.n5,t)
inherit(F.nE,t)
inherit(G.of,t)
inherit(Q.ov,t)
inherit(N.oL,t)
inherit(D.ps,t)
inherit(V.pt,t)
inherit(F.qb,t)
t=N.ac
inherit(T.lz,t)
inherit(R.ol,t)
t=T.lz
inherit(K.bT,t)
inherit(S.bE,t)
inherit(T.c2,t)
inherit(M.bA,t)
inherit(A.o3,A.jU)
inherit(L.aT,A.o3)
t=O.c8
inherit(O.dy,t)
inherit(O.iB,t)
inherit(O.eM,t)
t=O.dy
inherit(U.kY,t)
inherit(Y.oq,t)
inherit(V.mn,t)
inherit(Q.mF,t)
inherit(Q.oa,t)
inherit(M.oR,t)
inherit(B.qg,t)
t=U.kY
inherit(U.nq,t)
inherit(U.nY,t)
inherit(U.pd,O.iB)
t=U.pd
inherit(U.pe,t)
inherit(U.pf,t)
t=T.hW
inherit(O.l_,t)
inherit(Y.mt,t)
inherit(Y.mu,t)
inherit(B.mw,t)
inherit(S.n7,t)
inherit(Z.np,t)
inherit(S.nr,t)
inherit(U.ns,t)
inherit(E.nD,t)
inherit(V.o2,t)
inherit(N.oj,t)
inherit(N.ou,t)
inherit(E.oy,t)
inherit(Y.oA,t)
inherit(L.oB,t)
inherit(S.oD,t)
inherit(Y.oK,t)
inherit(R.pn,t)
inherit(U.pD,t)
inherit(E.q2,t)
inherit(M.q6,t)
t=O.eM
inherit(Y.py,t)
inherit(Y.l9,t)
inherit(Y.nT,t)
inherit(U.q7,t)
t=L.fV
inherit(T.l5,t)
inherit(T.l7,t)
inherit(U.lC,t)
inherit(Z.lD,t)
inherit(T.mv,t)
inherit(X.my,t)
inherit(V.mI,t)
inherit(Q.na,t)
inherit(K.nc,t)
inherit(G.nd,t)
inherit(V.nC,t)
inherit(E.op,t)
inherit(K.oz,t)
inherit(N.oN,t)
inherit(N.pE,t)
inherit(Q.q1,t)
t=S.bE
inherit(S.ip,t)
inherit(S.mz,t)
inherit(E.iR,E.nX)
t=E.O
inherit(E.fW,t)
inherit(E.kT,t)
inherit(Q.od,Q.mF)
inherit(U.S,U.b)
t=R.ol
inherit(R.Z,t)
inherit(R.M,t)
inherit(R.a4,t)
inherit(R.bH,R.a4)
t=Y.dW
inherit(Y.a7,t)
inherit(Y.bX,t)
inherit(Y.R,t)
inherit(Y.ir,t)
inherit(Y.bG,t)
inherit(Y.d4,t)
inherit(Y.ld,t)
inherit(Y.hT,t)
inherit(Y.iP,t)
inherit(Y.jX,t)
t=Y.bX
inherit(Y.dm,t)
inherit(Y.bF,t)
inherit(U.ag,A.a5)
t=G.a1
inherit(G.aJ,t)
inherit(G.bL,t)
inherit(G.d,t)
inherit(G.ae,G.bL)
t=D.co
inherit(D.kg,t)
inherit(D.os,t)
t=Q.cH
inherit(Q.i5,t)
inherit(Q.i4,t)
inherit(Q.e_,Q.i5)
inherit(B.eS,Q.e_)
t=S.fv
inherit(S.ve,t)
inherit(S.la,t)
inherit(S.ne,t)
inherit(S.uR,t)
inherit(S.u6,t)
t=S.la
inherit(S.v6,t)
inherit(S.v0,t)
t=S.ne
inherit(S.tL,t)
inherit(S.tB,t)
t=S.lu
inherit(S.uM,t)
inherit(S.lv,t)
inherit(S.o5,S.lv)
inherit(S.vi,S.o5)
t=S.l8
inherit(S.v7,t)
inherit(S.vj,t)
t=S.ms
inherit(S.vn,t)
inherit(S.v8,t)
inherit(S.tS,t)
inherit(S.vk,t)
t=S.pC
inherit(S.vq,t)
inherit(S.tI,t)
inherit(S.vy,t)
t=S.hK
inherit(S.uS,t)
inherit(S.uU,t)
inherit(S.vf,t)
inherit(Q.eV,Q.i4)
inherit(Q.kd,Q.eV)
mixin(H.i3,H.pO)
mixin(H.hP,P.aN)
mixin(H.hR,H.iN)
mixin(H.hQ,P.aN)
mixin(H.hS,H.iN)
mixin(P.fw,P.aN)
mixin(P.eQ,P.rz)
mixin(W.hc,P.aN)
mixin(W.hf,W.bv)
mixin(W.iU,W.is)
mixin(W.jT,W.is)
mixin(W.iV,P.aN)
mixin(W.je,W.bv)
mixin(W.iW,P.aN)
mixin(W.jf,W.bv)
mixin(W.iX,P.aN)
mixin(W.jg,W.bv)
mixin(W.j6,P.aN)
mixin(W.jq,W.bv)
mixin(W.j7,P.aN)
mixin(W.jr,W.bv)
mixin(W.j8,P.aN)
mixin(W.js,W.bv)
mixin(W.hd,P.aN)
mixin(W.hg,W.bv)
mixin(W.j9,P.aN)
mixin(W.jt,W.bv)
mixin(W.ja,P.aN)
mixin(W.ju,W.bv)
mixin(W.he,P.aN)
mixin(W.hh,W.bv)
mixin(W.jb,P.aN)
mixin(W.jv,W.bv)
mixin(W.jc,P.aN)
mixin(W.jw,W.bv)
mixin(W.jd,P.aN)
mixin(W.jx,W.bv)
mixin(W.iY,P.aN)
mixin(W.jh,W.bv)
mixin(W.iZ,P.aN)
mixin(W.ji,W.bv)
mixin(W.j_,P.aN)
mixin(W.jj,W.bv)
mixin(W.j0,P.aN)
mixin(W.jk,W.bv)
mixin(P.j1,P.aN)
mixin(P.jl,W.bv)
mixin(P.j2,P.aN)
mixin(P.jm,W.bv)
mixin(P.j3,P.aN)
mixin(P.jn,W.bv)
mixin(P.j4,P.aN)
mixin(P.jo,W.bv)
mixin(P.j5,P.aN)
mixin(P.jp,W.bv)
mixin(A.jU,P.fq)
mixin(Q.i5,P.aN)
mixin(Q.i4,P.fq)})();(function constants(){C.v=W.f6.prototype
C.x=W.iM.prototype
C.R=W.eb.prototype
C.S=J.f.prototype
C.b=J.ey.prototype
C.f=J.jE.prototype
C.a=J.jF.prototype
C.d=J.fr.prototype
C.c=J.ez.prototype
C.Z=J.eA.prototype
C.t=H.ft.prototype
C.K=J.oc.prototype
C.L=W.k8.prototype
C.u=J.eP.prototype
C.N=new P.l1(!1)
C.M=new P.l0(C.N)
C.j=new W.iq()
C.O=new P.o_()
C.P=new P.qx()
C.Q=new P.r1()
C.e=new P.rc()
C.w=new W.ry()
C.p=new P.dN(0)
C.T=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.y=function(hooks) { return hooks; }
C.U=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.V=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.W=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.z=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.X=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.Y=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.A=H.a(makeConstList([127,2047,65535,1114111]),[P.C])
C.B=makeConstList([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8])
C.k=makeConstList([0,0,32776,33792,1,10240,0,0])
C.a_=H.a(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.z])
C.l=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.m=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
C.a0=makeConstList([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13])
C.C=makeConstList([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5])
C.a1=makeConstList([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0])
C.a2=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.D=makeConstList([])
C.a4=makeConstList([0,0,32722,12287,65534,34815,65534,18431])
C.E=makeConstList([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577])
C.F=makeConstList([0,0,24576,1023,65534,34815,65534,18431])
C.G=makeConstList([0,0,32754,11263,65534,34815,65534,18431])
C.H=makeConstList([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258])
C.I=makeConstList([0,0,65490,12287,65535,34815,65534,18431])
C.J=makeConstList([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15])
C.q=H.a(makeConstList(["bind","if","ref","repeat","syntax"]),[P.z])
C.r=H.a(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.z])
C.i=new F.hI(0,"LogLevel.ERROR")
C.h=new F.hI(1,"LogLevel.WARN")
C.a5=new F.hI(3,"LogLevel.VERBOSE")
C.a3=H.a(makeConstList([]),[P.z])
C.a6=new H.h5(0,{},C.a3,[P.z,P.z])
C.a7=H.c3("bl")
C.a8=H.c3("J5")
C.n=H.c3("J6")
C.a9=H.c3("J7")
C.aa=H.c3("J8")
C.ab=H.c3("Ja")
C.ac=H.c3("Jb")
C.ad=H.c3("Jc")
C.ae=H.c3("n1")
C.af=H.c3("cG")
C.ag=H.c3("z")
C.ah=H.c3("Je")
C.ai=H.c3("Jf")
C.aj=H.c3("Jg")
C.ak=H.c3("di")
C.al=H.c3("cW")
C.am=H.c3("W")
C.an=H.c3("C")
C.ao=H.c3("dx")
C.o=new P.pX(!1)})();(function staticFields(){$.xE="$cachedFunction"
$.xF="$cachedInvocation"
$.dL=0
$.h_=null
$.wc=null
$.vM=null
$.yG=null
$.yV=null
$.t3=null
$.ta=null
$.vN=null
$.fL=null
$.ih=null
$.ii=null
$.vI=!1
$.ap=C.e
$.wu=0
$.e6=null
$.tM=null
$.ws=null
$.wr=null
$.wo=null
$.wn=null
$.wm=null
$.wp=null
$.wl=null
$.zT=null
$.zU=null
$.zG=null
$.zH=null
$.zF=null
$.zJ=null
$.zP=null
$.zO=null
$.zV=null
$.zR=null
$.zK=null
$.zN=null
$.zI=null
$.zM=null
$.zS=null
$.zL=null
$.zQ=null
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
$.al=1300
$.j=3
$.o=2
$.H=1
$.A=0.1
$.e9=1
$.cS=-1
$.u0=null
$.e7=null
$.ww=null
$.er=null
$.fh=null
$.hk=null
$.tV=null
$.m8=null
$.u2=null
$.iF=null
$.iE=null
$.wz=null
$.iL=null
$.fe=null
$.dQ=null
$.wy=null
$.m6=null
$.md=null
$.eu=null
$.Ax=null
$.Au=null
$.Aw=null
$.wx=null
$.Ay=null
$.hp=null
$.fc=null
$.cs=null
$.d_=null
$.et=null
$.mc=null
$.ce=null
$.c6=null
$.tX=null
$.iK=null
$.eq=null
$.Av=null
$.ff=null
$.cR=null
$.e8=null
$.hn=null
$.dp=null
$.fg=null
$.c5=null
$.ma=null
$.wv=null
$.aO=null
$.cE=null
$.cZ=null
$.ci=null
$.iJ=null
$.c7=null
$.dA=null
$.dq=null
$.fd=null
$.dO=null
$.dr=null
$.m7=null
$.dC=null
$.ho=null
$.m9=null
$.m5=null
$.cQ=null
$.cD=null
$.bf=null
$.ep=null
$.es=null
$.mb=null
$.iG=null
$.hm=null
$.tZ=null
$.cr=null
$.u1=null
$.tW=null
$.wB=null
$.hl=null
$.cJ=null
$.dP=null
$.dB=null
$.fi=null
$.tY=null
$.u_=null
$.wA=null
$.iH=null
$.iI=null
$.ev=null
$.wC=!1
$.u4=null
$.AA=null
$.wE=null
$.wH=null
$.wG=null
$.wF=null
$.AI=null
$.AJ=null
$.u3=null
$.AF=null
$.AD=null
$.AE=null
$.AG=null
$.AH=null
$.AU=null
$.AN=null
$.AO=null
$.AP=null
$.AQ=null
$.AR=null
$.AS=null
$.AT=null
$.AW=null
$.AX=null
$.AY=null
$.AZ=null
$.B_=null
$.B0=null
$.AV=null
$.xy="JACK"
$.Gn="PM"
$.Gj="JS"
$.Gi="HP"
$.Gs="YD"
$.Gp="SI"
$.Gq="SU"
$.Gk="ME"
$.Go="RB"
$.Gg="GN"
$.Gl="MP"
$.Ge="AR"
$.Gm="PE"
$.Gf="DP"
$.Gr="WV"
$.Gh="HB"
$.m="PLAYER1TAG"
$.dD="PLAYER2TAG"
$.y="DENIZENTAG"
$.r="CONSORTTAG"
$.L="CONSORTSOUNDTAG"
$.ax="MCGUFFINTAG"
$.ab="TAGPHYSICALMCGUFFIN"
$.by="TAGWEAPON"
$.H5=null
$.Hh=null
$.H1=null
$.H4=null
$.H8=null
$.Hd=null
$.Hb=null
$.Hk=null
$.Hj=null
$.Hc=null
$.Hm=null
$.H7=null
$.Hl=null
$.Hf=null
$.He=null
$.Hg=null
$.H3=null
$.H2=null
$.Ha=null
$.H9=null
$.H6=null
$.Hi=null
$.yN=!1
$.Iv=!1
$.Hn=!1
$.xL=null
$.Hv=13
$.at=3
$.bN=2
$.aB=1
$.mX=0
$.I=1
$.a3=3
$.G=4
$.uz=6
$.uA=7
$.aa=8
$.v=9
$.q=10
$.wZ=null
$.ex=null
$.mQ=null
$.uv=null
$.up=null
$.wP=null
$.uf=null
$.uo=null
$.hy=null
$.wX=null
$.xj=null
$.wS=null
$.wY=null
$.ug=null
$.un=null
$.ux=null
$.xm=null
$.uc=null
$.jA=null
$.jy=null
$.aC=null
$.xc=null
$.ub=null
$.x7=null
$.fp=null
$.wR=null
$.xn=null
$.xk=null
$.xi=null
$.ul=null
$.mP=null
$.fn=null
$.xl=null
$.mN=null
$.ui=null
$.hx=null
$.xg=null
$.dR=null
$.ew=null
$.uy=null
$.xh=null
$.uw=null
$.ut=null
$.uu=null
$.mT=null
$.jz=null
$.Br=null
$.x0=null
$.x6=null
$.xf=null
$.xe=null
$.uq=null
$.D=null
$.wW=null
$.mO=null
$.bU=null
$.b_=null
$.bV=null
$.X=null
$.aE=null
$.cg=null
$.K=null
$.Q=null
$.aw=null
$.aQ=null
$.bY=null
$.bo=null
$.bs=null
$.ck=null
$.aS=null
$.bx=null
$.c_=null
$.a0=null
$.FP=null
$.au=null
$.aX=null
$.aM=null
$.ah=null
$.cf=null
$.aK=null
$.as=null
$.bZ=null
$.aR=null
$.am=null
$.bn=null
$.ca=null
$.aD=null
$.bt=null
$.br=null
$.a8=null
$.bR=null
$.a9=null
$.bm=null
$.bw=null
$.aI=null
$.aW=null
$.ay=null
$.b0=null
$.aF=null
$.Y=null
$.av=null
$.aA=null
$.aU=null
$.ar=null
$.ao=null
$.a2=null
$.T=null
$.U=null
$.ai=null
$.aP=null
$.bp=null
$.aV=null
$.CL=null
$.Fr=null
$.G_=null
$.Cg=null
$.Fo=null
$.CM=null
$.wN=null
$.FD=null
$.DM=null
$.CH=null
$.Bl=null
$.Em=null
$.ur=null
$.wT=null
$.EM=null
$.Cd=null
$.Dv=null
$.Cb=null
$.ud=null
$.BX=null
$.CY=null
$.Cl=null
$.DF=null
$.FL=null
$.CN=null
$.ue=null
$.DG=null
$.Cj=null
$.C2=null
$.xb=null
$.Be=null
$.wO=null
$.Do=null
$.mR=null
$.E0=null
$.DV=null
$.Bi=null
$.C5=null
$.EV=null
$.Bk=null
$.Fn=null
$.Du=null
$.Cs=null
$.EG=null
$.Fh=null
$.uk=null
$.DQ=null
$.ED=null
$.Ck=null
$.B7=null
$.FO=null
$.Dy=null
$.C1=null
$.FC=null
$.E3=null
$.C8=null
$.Fm=null
$.CC=null
$.F2=null
$.F3=null
$.Bg=null
$.DX=null
$.Cm=null
$.Cw=null
$.G3=null
$.mV=null
$.EU=null
$.Fk=null
$.mS=null
$.BR=null
$.Ed=null
$.Eh=null
$.Bd=null
$.CB=null
$.Fl=null
$.E2=null
$.FF=null
$.EI=null
$.Ei=null
$.x5=null
$.F6=null
$.FU=null
$.Fq=null
$.Db=null
$.Eu=null
$.Dc=null
$.EW=null
$.FS=null
$.DE=null
$.Cy=null
$.CV=null
$.BH=null
$.EE=null
$.CT=null
$.D_=null
$.Co=null
$.F5=null
$.fo=null
$.E7=null
$.x3=null
$.Dd=null
$.Da=null
$.FX=null
$.BN=null
$.ES=null
$.ET=null
$.ER=null
$.EQ=null
$.Fd=null
$.D0=null
$.DY=null
$.Fg=null
$.DP=null
$.E8=null
$.Ch=null
$.FR=null
$.DW=null
$.CE=null
$.CF=null
$.Eg=null
$.G2=null
$.Ds=null
$.FQ=null
$.x9=null
$.F1=null
$.DC=null
$.us=null
$.Dm=null
$.Ew=null
$.BM=null
$.CI=null
$.EY=null
$.DZ=null
$.FK=null
$.x8=null
$.E6=null
$.BT=null
$.Ce=null
$.Es=null
$.Fx=null
$.EX=null
$.ua=null
$.xd=null
$.F8=null
$.FT=null
$.D9=null
$.Bv=null
$.BE=null
$.Fv=null
$.Ea=null
$.DN=null
$.Eb=null
$.Fs=null
$.Dn=null
$.Bh=null
$.CZ=null
$.DL=null
$.Fa=null
$.CS=null
$.BL=null
$.EO=null
$.EP=null
$.FI=null
$.F_=null
$.um=null
$.wU=null
$.C9=null
$.uh=null
$.Dh=null
$.x4=null
$.Ey=null
$.DU=null
$.EK=null
$.uj=null
$.mU=null
$.x2=null
$.wV=null
$.Cu=null
$.CX=null
$.xa=null
$.x_=null
$.C4=null
$.Fz=null
$.BY=null
$.Ek=null
$.De=null
$.Ff=null
$.DO=null
$.Bs=null
$.Df=null
$.Cr=null
$.Eo=null
$.Dx=null
$.DT=null
$.DD=null
$.DH=null
$.EN=null
$.EJ=null
$.Ba=null
$.Fw=null
$.EB=null
$.Ci=null
$.Cn=null
$.CW=null
$.Ft=null
$.CP=null
$.Dz=null
$.Bz=null
$.CJ=null
$.Cq=null
$.Ec=null
$.Cz=null
$.jB=null
$.DB=null
$.wQ=null
$.Ex=null
$.Dg=null
$.CQ=null
$.B8=null
$.Bf=null
$.E9=null
$.Ej=null
$.Dw=null
$.D7=null
$.FN=null
$.BC=null
$.CR=null
$.DA=null
$.Cf=null
$.Fc=null
$.C3=null
$.EZ=null
$.BA=null
$.Fy=null
$.DJ=null
$.Bu=null
$.EH=null
$.Et=null
$.Ca=null
$.D1=null
$.BS=null
$.Fu=null
$.Dk=null
$.FJ=null
$.BU=null
$.D2=null
$.BV=null
$.Cc=null
$.EA=null
$.C6=null
$.Dl=null
$.E_=null
$.BO=null
$.Fe=null
$.FZ=null
$.F4=null
$.DR=null
$.Fb=null
$.DS=null
$.Bn=null
$.B9=null
$.DK=null
$.Bx=null
$.BW=null
$.Bo=null
$.Bt=null
$.E5=null
$.Ep=null
$.FB=null
$.Di=null
$.FY=null
$.EF=null
$.EC=null
$.Dp=null
$.Dj=null
$.C_=null
$.D5=null
$.DI=null
$.Ee=null
$.F7=null
$.Bc=null
$.FV=null
$.Cx=null
$.Fi=null
$.Cp=null
$.Bm=null
$.BP=null
$.BG=null
$.G1=null
$.BQ=null
$.CA=null
$.BZ=null
$.FH=null
$.F9=null
$.FA=null
$.Bb=null
$.EL=null
$.Dq=null
$.Dt=null
$.FM=null
$.Fj=null
$.x1=null
$.CG=null
$.Er=null
$.FW=null
$.CK=null
$.Dr=null
$.BK=null
$.D8=null
$.D6=null
$.F0=null
$.Eq=null
$.D3=null
$.BF=null
$.Fp=null
$.Ef=null
$.FE=null
$.G0=null
$.Bq=null
$.Bp=null
$.BB=null
$.CD=null
$.Ez=null
$.C7=null
$.Ev=null
$.Ct=null
$.Bj=null
$.BD=null
$.E4=null
$.Cv=null
$.En=null
$.BJ=null
$.CO=null
$.FG=null
$.Bw=null
$.CU=null
$.El=null
$.BI=null
$.D4=null
$.E1=null
$.By=null
$.C0=null
$.yd=4
$.ea="OWNER"
$.xv=!1
$.uQ=null
$.yY=""
$.xN=null
$.Hr=null
$.i0=null
$.eK=null
$.Hq=null
$.eL=null
$.eg=null
$.dg=null
$.eJ=null
$.hZ=null
$.i_=null
$.dE=null
$.cy=null
$.xO=!1
$.Hs=null
$.t2=!0
$.kI=null
$.tn=null
$.ts=null
$.yM=null
$.yT=null
$.vP=null
$.vS=null})();(function lazyInitializers(){lazy($,"wj","$get$wj",function(){return H.yQ("_$dart_dartClosure")})
lazy($,"uJ","$get$uJ",function(){return H.yQ("_$dart_js")})
lazy($,"wL","$get$wL",function(){return H.B5()})
lazy($,"wM","$get$wM",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.wu
$.wu=t+1
t="expando$key$"+t}return new P.lO(null,t,[P.C])})
lazy($,"xU","$get$xU",function(){return H.dY(H.pM({
toString:function(){return"$receiver$"}}))})
lazy($,"xV","$get$xV",function(){return H.dY(H.pM({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"xW","$get$xW",function(){return H.dY(H.pM(null))})
lazy($,"xX","$get$xX",function(){return H.dY(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"y0","$get$y0",function(){return H.dY(H.pM(void 0))})
lazy($,"y1","$get$y1",function(){return H.dY(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"xZ","$get$xZ",function(){return H.dY(H.y_(null))})
lazy($,"xY","$get$xY",function(){return H.dY(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"y3","$get$y3",function(){return H.dY(H.y_(void 0))})
lazy($,"y2","$get$y2",function(){return H.dY(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"vD","$get$vD",function(){return P.HC()})
lazy($,"hs","$get$hs",function(){return P.HI(null,P.cG)})
lazy($,"ij","$get$ij",function(){return[]})
lazy($,"yf","$get$yf",function(){return H.Gt([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"yE","$get$yE",function(){return P.I7()})
lazy($,"yi","$get$yi",function(){return P.jH(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"vG","$get$vG",function(){return P.jG()})
lazy($,"wi","$get$wi",function(){return P.d3("^\\S+$",!0,!1)})
lazy($,"cd","$get$cd",function(){return H.a([],[K.bT])})
lazy($,"kS","$get$kS",function(){return P.c0(P.C,L.fV)})
lazy($,"we","$get$we",function(){return P.d3("[\\/]",!0,!1)})
lazy($,"bO","$get$bO",function(){return H.a([],[S.bE])})
lazy($,"hr","$get$hr",function(){return P.c0(P.z,Z.iC)})
lazy($,"mK","$get$mK",function(){return P.c0(P.C,B.hw)})
lazy($,"xo","$get$xo",function(){return H.a([],[A.a5])})
lazy($,"xz","$get$xz",function(){return H.a([],[P.z])})
lazy($,"ox","$get$ox",function(){return P.c0(P.C,T.hW)})
lazy($,"cm","$get$cm",function(){return H.a([],[T.c2])})
lazy($,"bM","$get$bM",function(){return H.a([],[M.bA])})
lazy($,"aj","$get$aj",function(){return H.a([],[U.ag])})
lazy($,"xM","$get$xM",function(){return P.xs([0,new K.cL("Pixels -> Bytes",T.In(),T.Im()),1,new K.cL("Pixels -> Packed bits",T.Il(),T.Ik()),2,new K.cL("RLE 1 byte",V.tQ(1),V.tP(1)),3,new K.cL("RLE 2 bytes",V.tQ(2),V.tP(2)),4,new K.cL("RLE 3 bytes",V.tQ(3),V.tP(3)),5,new K.cL("RLE packed 1 byte",V.tO(1),V.tN(1)),6,new K.cL("RLE packed 2 bytes",V.tO(2),V.tN(2)),7,new K.cL("RLE packed 3 bytes",V.tO(3),V.tN(3)),8,new K.cL("RLE dynamic",V.IV(),V.IU()),9,new K.cL("Exponential-Golomb pixels",F.IB(),F.IA()),10,new K.cL("Exponential-Golomb run RLE",F.Iz(),F.Iy()),11,new K.cL("Exponential-Golomb run/data RLE",F.Ix(),F.Iw())],P.C,K.cL)})
lazy($,"c","$get$c",function(){return P.a_(null,null,null,G.a1)})
lazy($,"yb","$get$yb",function(){return P.d3("[\n\r]+",!0,!1)})
lazy($,"yc","$get$yc",function(){return P.d3("( *)(.*)",!0,!1)})
lazy($,"ya","$get$ya",function(){return P.d3("^s*//",!0,!1)})
lazy($,"y9","$get$y9",function(){return P.d3("//",!0,!1)})
lazy($,"cO","$get$cO",function(){return new F.eC(!1,!1,"WordListFileFormat")})
lazy($,"ye","$get$ye",function(){return new T.qc(null)})
lazy($,"wa","$get$wa",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cF","$get$cF",function(){return P.c0(P.z,Y.dV)})
lazy($,"xw","$get$xw",function(){return P.d3("[\\/]",!0,!1)})
lazy($,"uO","$get$uO",function(){return P.c0(P.z,W.fA)})
lazy($,"v1","$get$v1",function(){return A.h4(255,0,255,255)})
lazy($,"o8","$get$o8",function(){return new F.eC(!1,!1,"Path Utils")})
lazy($,"o7","$get$o7",function(){return P.c0(P.eR,P.C)})
lazy($,"cM","$get$cM",function(){return H.a([],[D.co])})
lazy($,"xS","$get$xS",function(){return P.d3("([^\\\\|]|\\\\|)+",!0,!1)})
lazy($,"i2","$get$i2",function(){return P.d3("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fD","$get$fD",function(){return new F.eC(!1,!1,"TextEngine")})
lazy($,"xQ","$get$xQ",function(){return P.d3("#(.*?)#",!0,!1)})
lazy($,"xR","$get$xR",function(){return P.d3("\\?(.*?)\\?",!0,!1)})
lazy($,"fC","$get$fC",function(){return P.d3("\\\\(?!\\\\)",!0,!1)})
lazy($,"ik","$get$ik",function(){return P.a_(null,null,null,P.z)})
lazy($,"n9","$get$n9",function(){return new F.eC(!1,!1,"TextPlayground")})
lazy($,"wk","$get$wk",function(){var t={color:16711935}
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
mangledGlobalNames:{C:"int",W:"double",dx:"num",z:"String",cW:"bool",cG:"Null",p:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.cW,args:[[P.p,E.iR]]},{func:1,v:true},{func:1,ret:P.di,args:[P.bl,P.C,P.C,O.d1]},{func:1,ret:P.bl,args:[P.C,P.bl,P.bl,O.d1]},{func:1,v:true,args:[P.ad]},{func:1,ret:P.z,args:[P.C]},{func:1,ret:W.af},{func:1,v:true,args:[{func:1,v:true}]},{func:1,v:true,args:[P.ad],opt:[P.dX]},{func:1,ret:P.z,args:[P.z]},{func:1,ret:W.cC,args:[P.C]},{func:1,ret:W.af,args:[P.C]},{func:1,ret:W.cv,args:[P.C]},{func:1,ret:P.cW,args:[W.cC,P.z,P.z,W.ia]},{func:1,args:[,]},{func:1,v:true,opt:[W.P]},{func:1,ret:W.fa,args:[P.C]},{func:1,ret:W.cj,args:[P.C]},{func:1,v:true,args:[,P.dX]},{func:1,ret:W.cl,args:[P.C]},{func:1,ret:W.cw,args:[P.C]},{func:1,ret:W.cx,args:[P.C]},{func:1,ret:W.fB,args:[P.C]},{func:1,ret:W.cz,args:[P.C]},{func:1,ret:W.fF,args:[P.C]},{func:1,ret:P.bW,args:[P.C]},{func:1,ret:W.bP,args:[P.C]},{func:1,ret:W.ct,args:[P.C]},{func:1,ret:W.fG,args:[P.C]},{func:1,ret:[P.c9,P.cG],opt:[W.P]},{func:1,ret:W.cp,args:[P.C]},{func:1,ret:P.b1,args:[P.C]},{func:1,ret:P.C,args:[P.bK,P.bK]},{func:1,ret:P.cW,args:[P.ad]},{func:1,v:true,args:[P.z]},{func:1,ret:W.cn,args:[P.C]},{func:1,ret:P.z,args:[P.db]},{func:1,ret:[P.c9,P.cG]},{func:1,v:true,args:[B.eT,P.z]},{func:1,ret:W.fE,args:[P.C]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.f,AnimationEffectTiming:J.f,AnimationTimeline:J.f,AppBannerPromptResult:J.f,BarProp:J.f,Body:J.f,CacheStorage:J.f,CanvasGradient:J.f,CanvasPattern:J.f,CanvasRenderingContext2D:J.f,CHROMIUMValuebuffer:J.f,CircularGeofencingRegion:J.f,Client:J.f,CompositorProxy:J.f,ConsoleBase:J.f,Coordinates:J.f,Crypto:J.f,CryptoKey:J.f,CSS:J.f,DeprecatedStorageInfo:J.f,DeprecatedStorageQuota:J.f,DeviceAcceleration:J.f,DeviceRotationRate:J.f,DirectoryReader:J.f,DOMImplementation:J.f,Iterator:J.f,DOMMatrix:J.f,DOMMatrixReadOnly:J.f,DOMParser:J.f,DOMPoint:J.f,DOMPointReadOnly:J.f,EffectModel:J.f,Stream:J.f,GamepadButton:J.f,Geofencing:J.f,GeofencingRegion:J.f,Geolocation:J.f,Geoposition:J.f,Headers:J.f,HMDVRDevice:J.f,IdleDeadline:J.f,ImageBitmap:J.f,ImageBitmapRenderingContext:J.f,InjectedScriptHost:J.f,InputDeviceCapabilities:J.f,IntersectionObserver:J.f,IntersectionObserverEntry:J.f,KeyframeEffect:J.f,MediaDeviceInfo:J.f,MediaDevices:J.f,MediaError:J.f,MediaKeyStatusMap:J.f,MediaKeySystemAccess:J.f,MediaKeys:J.f,MediaMetadata:J.f,MediaSession:J.f,MemoryInfo:J.f,MessageChannel:J.f,Metadata:J.f,MIDIInputMap:J.f,MIDIOutputMap:J.f,MutationObserver:J.f,WebKitMutationObserver:J.f,MutationRecord:J.f,NavigatorStorageUtils:J.f,NodeFilter:J.f,NonDocumentTypeChildNode:J.f,NonElementParentNode:J.f,OffscreenCanvas:J.f,PerformanceNavigation:J.f,PerformanceObserver:J.f,PerformanceObserverEntryList:J.f,PerformanceTiming:J.f,Permissions:J.f,PositionError:J.f,PositionSensorVRDevice:J.f,Presentation:J.f,PushManager:J.f,PushMessageData:J.f,PushSubscription:J.f,Range:J.f,ReadableByteStream:J.f,ReadableByteStreamReader:J.f,ReadableStreamReader:J.f,RTCCertificate:J.f,RTCIceCandidate:J.f,mozRTCIceCandidate:J.f,RTCStatsReport:J.f,RTCStatsResponse:J.f,Screen:J.f,ScrollState:J.f,Selection:J.f,SharedArrayBuffer:J.f,SourceInfo:J.f,StorageInfo:J.f,StorageManager:J.f,StorageQuota:J.f,StyleMedia:J.f,SyncManager:J.f,TextMetrics:J.f,UnderlyingSourceBase:J.f,VRDevice:J.f,VREyeParameters:J.f,VRFieldOfView:J.f,VRPositionState:J.f,ValidityState:J.f,VideoPlaybackQuality:J.f,VideoTrack:J.f,WindowClient:J.f,WorkerConsole:J.f,XPathEvaluator:J.f,XPathExpression:J.f,XPathNSResolver:J.f,XPathResult:J.f,XMLSerializer:J.f,XSLTProcessor:J.f,Bluetooth:J.f,BluetoothAdvertisingData:J.f,BluetoothCharacteristicProperties:J.f,BluetoothRemoteGATTServer:J.f,BluetoothRemoteGATTService:J.f,BluetoothUUID:J.f,Cache:J.f,DOMFileSystemSync:J.f,DirectoryEntrySync:J.f,DirectoryReaderSync:J.f,EntrySync:J.f,FileEntrySync:J.f,FileReaderSync:J.f,FileWriterSync:J.f,HTMLAllCollection:J.f,NFC:J.f,PagePopupController:J.f,Request:J.f,Response:J.f,SubtleCrypto:J.f,USBAlternateInterface:J.f,USBConfiguration:J.f,USBDevice:J.f,USBEndpoint:J.f,USBInTransferResult:J.f,USBInterface:J.f,USBIsochronousInTransferPacket:J.f,USBIsochronousInTransferResult:J.f,USBIsochronousOutTransferPacket:J.f,USBIsochronousOutTransferResult:J.f,USBOutTransferResult:J.f,WebKitCSSMatrix:J.f,Worklet:J.f,WorkletGlobalScope:J.f,IDBCursor:J.f,IDBCursorWithValue:J.f,IDBFactory:J.f,IDBKeyRange:J.f,SVGAngle:J.f,SVGAnimatedAngle:J.f,SVGAnimatedBoolean:J.f,SVGAnimatedEnumeration:J.f,SVGAnimatedInteger:J.f,SVGAnimatedLength:J.f,SVGAnimatedLengthList:J.f,SVGAnimatedNumber:J.f,SVGAnimatedNumberList:J.f,SVGAnimatedPreserveAspectRatio:J.f,SVGAnimatedRect:J.f,SVGAnimatedString:J.f,SVGAnimatedTransformList:J.f,SVGMatrix:J.f,SVGPoint:J.f,SVGPreserveAspectRatio:J.f,SVGRect:J.f,SVGUnitTypes:J.f,AudioListener:J.f,AudioParam:J.f,PeriodicWave:J.f,ANGLEInstancedArrays:J.f,ANGLE_instanced_arrays:J.f,WebGLBuffer:J.f,CHROMIUMSubscribeUniform:J.f,WebGLCompressedTextureASTC:J.f,WebGLCompressedTextureATC:J.f,WEBGL_compressed_texture_atc:J.f,WebGLCompressedTextureETC1:J.f,WEBGL_compressed_texture_etc1:J.f,WebGLCompressedTexturePVRTC:J.f,WEBGL_compressed_texture_pvrtc:J.f,WebGLCompressedTextureS3TC:J.f,WEBGL_compressed_texture_s3tc:J.f,WebGLDebugRendererInfo:J.f,WEBGL_debug_renderer_info:J.f,WebGLDebugShaders:J.f,WEBGL_debug_shaders:J.f,WebGLDepthTexture:J.f,WEBGL_depth_texture:J.f,WebGLDrawBuffers:J.f,WEBGL_draw_buffers:J.f,EXTsRGB:J.f,EXT_sRGB:J.f,EXTBlendMinMax:J.f,EXT_blend_minmax:J.f,EXTColorBufferFloat:J.f,EXTDisjointTimerQuery:J.f,EXTFragDepth:J.f,EXT_frag_depth:J.f,EXTShaderTextureLOD:J.f,EXT_shader_texture_lod:J.f,EXTTextureFilterAnisotropic:J.f,EXT_texture_filter_anisotropic:J.f,WebGLFramebuffer:J.f,WebGLLoseContext:J.f,WebGLExtensionLoseContext:J.f,WEBGL_lose_context:J.f,OESElementIndexUint:J.f,OES_element_index_uint:J.f,OESStandardDerivatives:J.f,OES_standard_derivatives:J.f,OESTextureFloat:J.f,OES_texture_float:J.f,OESTextureFloatLinear:J.f,OES_texture_float_linear:J.f,OESTextureHalfFloat:J.f,OES_texture_half_float:J.f,OESTextureHalfFloatLinear:J.f,OES_texture_half_float_linear:J.f,OESVertexArrayObject:J.f,OES_vertex_array_object:J.f,WebGLProgram:J.f,WebGLQuery:J.f,WebGLRenderbuffer:J.f,WebGLRenderingContext:J.f,WebGLSampler:J.f,WebGLShader:J.f,WebGLShaderPrecisionFormat:J.f,WebGLSync:J.f,WebGLTexture:J.f,WebGLTimerQueryEXT:J.f,WebGLTransformFeedback:J.f,WebGLUniformLocation:J.f,WebGLVertexArrayObject:J.f,WebGLVertexArrayObjectOES:J.f,Database:J.f,SQLError:J.f,SQLResultSet:J.f,SQLTransaction:J.f,ArrayBuffer:H.fs,ArrayBufferView:H.eE,DataView:H.nG,Float32Array:H.nH,Float64Array:H.nI,Int16Array:H.nJ,Int32Array:H.nK,Int8Array:H.nL,Uint16Array:H.nM,Uint32Array:H.nN,Uint8ClampedArray:H.jO,CanvasPixelArray:H.jO,Uint8Array:H.ft,HTMLBRElement:W.aL,HTMLCanvasElement:W.aL,HTMLContentElement:W.aL,HTMLDListElement:W.aL,HTMLDataListElement:W.aL,HTMLDetailsElement:W.aL,HTMLDialogElement:W.aL,HTMLDivElement:W.aL,HTMLHRElement:W.aL,HTMLHeadElement:W.aL,HTMLHeadingElement:W.aL,HTMLHtmlElement:W.aL,HTMLLabelElement:W.aL,HTMLLegendElement:W.aL,HTMLModElement:W.aL,HTMLOptGroupElement:W.aL,HTMLParagraphElement:W.aL,HTMLPictureElement:W.aL,HTMLPreElement:W.aL,HTMLQuoteElement:W.aL,HTMLShadowElement:W.aL,HTMLTableCaptionElement:W.aL,HTMLTableCellElement:W.aL,HTMLTableDataCellElement:W.aL,HTMLTableHeaderCellElement:W.aL,HTMLTableColElement:W.aL,HTMLTitleElement:W.aL,HTMLTrackElement:W.aL,HTMLUListElement:W.aL,HTMLUnknownElement:W.aL,HTMLDirectoryElement:W.aL,HTMLFontElement:W.aL,HTMLFrameElement:W.aL,HTMLMarqueeElement:W.aL,HTMLElement:W.aL,HTMLAnchorElement:W.f0,HTMLAreaElement:W.kR,HTMLAudioElement:W.f3,AudioTrack:W.cP,AudioTrackList:W.kZ,HTMLBaseElement:W.l2,Blob:W.f5,HTMLBodyElement:W.f6,HTMLButtonElement:W.h2,CDATASection:W.em,CharacterData:W.em,Comment:W.em,ProcessingInstruction:W.em,Text:W.em,Clients:W.lc,CompositorWorker:W.lg,Credential:W.h7,FederatedCredential:W.h7,PasswordCredential:W.h7,CredentialsContainer:W.ll,CSSFontFaceRule:W.lo,CSSImportRule:W.lp,CSSKeyframeRule:W.h8,MozCSSKeyframeRule:W.h8,WebKitCSSKeyframeRule:W.h8,CSSKeyframesRule:W.h9,MozCSSKeyframesRule:W.h9,WebKitCSSKeyframesRule:W.h9,CSSPageRule:W.lq,CSSCharsetRule:W.bP,CSSGroupingRule:W.bP,CSSMediaRule:W.bP,CSSNamespaceRule:W.bP,CSSSupportsRule:W.bP,CSSRule:W.bP,CSSStyleDeclaration:W.f9,MSStyleCSSProperties:W.f9,CSS2Properties:W.f9,CSSStyleRule:W.lr,CSSViewportRule:W.ls,DataTransfer:W.lx,DataTransferItem:W.fa,DataTransferItemList:W.it,Document:W.en,HTMLDocument:W.en,XMLDocument:W.en,DocumentFragment:W.iv,ShadowRoot:W.iv,DOMError:W.iw,FileError:W.iw,DOMException:W.lA,DOMRectReadOnly:W.ix,DOMStringList:W.iy,DOMStringMap:W.iz,DOMTokenList:W.iA,Element:W.cC,HTMLEmbedElement:W.lG,DirectoryEntry:W.hb,Entry:W.hb,FileEntry:W.hb,ErrorEvent:W.lM,AnimationEvent:W.P,AnimationPlayerEvent:W.P,ApplicationCacheErrorEvent:W.P,AutocompleteErrorEvent:W.P,BeforeInstallPromptEvent:W.P,BeforeUnloadEvent:W.P,BlobEvent:W.P,ClipboardEvent:W.P,CloseEvent:W.P,CompositionEvent:W.P,CustomEvent:W.P,DeviceLightEvent:W.P,DeviceMotionEvent:W.P,DeviceOrientationEvent:W.P,ExtendableEvent:W.P,ExtendableMessageEvent:W.P,FetchEvent:W.P,FocusEvent:W.P,FontFaceSetLoadEvent:W.P,GamepadEvent:W.P,GeofencingEvent:W.P,HashChangeEvent:W.P,InstallEvent:W.P,KeyboardEvent:W.P,MediaEncryptedEvent:W.P,MediaKeyMessageEvent:W.P,MediaQueryListEvent:W.P,MediaStreamEvent:W.P,MediaStreamTrackEvent:W.P,MessageEvent:W.P,MIDIConnectionEvent:W.P,MIDIMessageEvent:W.P,MouseEvent:W.P,DragEvent:W.P,NotificationEvent:W.P,PageTransitionEvent:W.P,PointerEvent:W.P,PopStateEvent:W.P,PresentationConnectionAvailableEvent:W.P,PresentationConnectionCloseEvent:W.P,ProgressEvent:W.P,PromiseRejectionEvent:W.P,PushEvent:W.P,RelatedEvent:W.P,RTCDataChannelEvent:W.P,RTCDTMFToneChangeEvent:W.P,RTCIceCandidateEvent:W.P,RTCPeerConnectionIceEvent:W.P,SecurityPolicyViolationEvent:W.P,ServicePortConnectEvent:W.P,ServiceWorkerMessageEvent:W.P,SpeechRecognitionEvent:W.P,StorageEvent:W.P,SyncEvent:W.P,TextEvent:W.P,TouchEvent:W.P,TrackEvent:W.P,TransitionEvent:W.P,WebKitTransitionEvent:W.P,UIEvent:W.P,WheelEvent:W.P,ResourceProgressEvent:W.P,USBConnectionEvent:W.P,IDBVersionChangeEvent:W.P,SVGZoomEvent:W.P,AudioProcessingEvent:W.P,OfflineAudioCompletionEvent:W.P,WebGLContextEvent:W.P,Event:W.P,InputEvent:W.P,Animation:W.aH,ApplicationCache:W.aH,DOMApplicationCache:W.aH,OfflineResourceList:W.aH,BatteryManager:W.aH,CanvasCaptureMediaStreamTrack:W.aH,CrossOriginServiceWorkerClient:W.aH,EventSource:W.aH,MediaKeySession:W.aH,MediaQueryList:W.aH,MediaRecorder:W.aH,MediaSource:W.aH,MediaStream:W.aH,MediaStreamTrack:W.aH,MessagePort:W.aH,MIDIAccess:W.aH,NetworkInformation:W.aH,Notification:W.aH,Performance:W.aH,PermissionStatus:W.aH,PresentationAvailability:W.aH,PresentationReceiver:W.aH,PresentationRequest:W.aH,RTCDTMFSender:W.aH,RTCPeerConnection:W.aH,webkitRTCPeerConnection:W.aH,mozRTCPeerConnection:W.aH,ScreenOrientation:W.aH,ServicePortCollection:W.aH,ServiceWorkerContainer:W.aH,ServiceWorkerRegistration:W.aH,SpeechRecognition:W.aH,SpeechSynthesis:W.aH,SpeechSynthesisUtterance:W.aH,WorkerPerformance:W.aH,BluetoothDevice:W.aH,BluetoothRemoteGATTCharacteristic:W.aH,USB:W.aH,EventTarget:W.aH,HTMLFieldSetElement:W.me,File:W.cj,FileList:W.fj,FileReader:W.iM,DOMFileSystem:W.mi,FileWriter:W.mj,FontFace:W.ml,FontFaceSet:W.mm,FormData:W.mo,HTMLFormElement:W.iQ,Gamepad:W.ct,History:W.mx,HTMLOptionsCollection:W.fk,HTMLCollection:W.fk,HTMLFormControlsCollection:W.iS,XMLHttpRequest:W.eb,XMLHttpRequestUpload:W.ht,XMLHttpRequestEventTarget:W.ht,HTMLIFrameElement:W.mD,ImageData:W.hu,HTMLImageElement:W.fm,HTMLInputElement:W.mJ,HTMLKeygenElement:W.n6,HTMLLIElement:W.n8,CalcLength:W.hD,LengthValue:W.hD,SimpleLength:W.hD,HTMLLinkElement:W.hE,Location:W.no,HTMLMapElement:W.nt,HTMLVideoElement:W.hL,HTMLMediaElement:W.hL,MediaList:W.jL,HTMLMenuElement:W.nx,HTMLMenuItemElement:W.ny,HTMLMetaElement:W.nz,HTMLMeterElement:W.nA,MIDIOutput:W.nB,MIDIInput:W.hM,MIDIPort:W.hM,MimeType:W.cv,MimeTypeArray:W.jM,Navigator:W.nO,NavigatorUserMediaError:W.nP,Node:W.af,NodeIterator:W.jP,NodeList:W.jQ,RadioNodeList:W.jQ,HTMLOListElement:W.nU,HTMLObjectElement:W.nV,HTMLOptionElement:W.nZ,HTMLOutputElement:W.o0,HTMLParamElement:W.o4,Path2D:W.o6,PerformanceCompositeTiming:W.ee,PerformanceEntry:W.ee,PerformanceMark:W.ee,PerformanceMeasure:W.ee,PerformanceRenderTiming:W.ee,PerformanceResourceTiming:W.ee,Perspective:W.ob,Plugin:W.cl,PluginArray:W.jY,PresentationConnection:W.og,HTMLProgressElement:W.ok,RTCDataChannel:W.k_,DataChannel:W.k_,RTCSessionDescription:W.k0,mozRTCSessionDescription:W.k0,HTMLScriptElement:W.fA,HTMLSelectElement:W.k1,ServicePort:W.oE,SharedWorker:W.oH,SharedWorkerGlobalScope:W.oI,HTMLSlotElement:W.oJ,SourceBuffer:W.cw,SourceBufferList:W.k3,HTMLSourceElement:W.oM,HTMLSpanElement:W.hY,SpeechGrammar:W.cx,SpeechGrammarList:W.k4,SpeechRecognitionAlternative:W.fB,SpeechRecognitionError:W.oO,SpeechRecognitionResult:W.cn,SpeechSynthesisEvent:W.oP,SpeechSynthesisVoice:W.oQ,Storage:W.oW,HTMLStyleElement:W.pi,StylePropertyMap:W.pk,CSSStyleSheet:W.cp,StyleSheet:W.cp,KeywordValue:W.eh,NumberValue:W.eh,PositionValue:W.eh,TransformValue:W.eh,StyleValue:W.eh,HTMLTableElement:W.k8,HTMLTableRowElement:W.pp,HTMLTableSectionElement:W.pq,HTMLTemplateElement:W.i1,HTMLTextAreaElement:W.pu,TextTrack:W.cV,TextTrackCue:W.cN,VTTCue:W.cN,TextTrackCueList:W.pA,TextTrackList:W.pB,TimeRanges:W.pF,Touch:W.cz,TouchList:W.k9,TrackDefault:W.fE,TrackDefaultList:W.ka,Matrix:W.ei,Rotation:W.ei,Skew:W.ei,Translation:W.ei,TransformComponent:W.ei,TreeWalker:W.kb,URL:W.pU,URLSearchParams:W.pV,VideoTrackList:W.pZ,VTTRegion:W.fF,VTTRegionList:W.kc,WebSocket:W.q3,Window:W.kf,DOMWindow:W.kf,Worker:W.qa,CompositorWorkerGlobalScope:W.eU,DedicatedWorkerGlobalScope:W.eU,ServiceWorkerGlobalScope:W.eU,WorkerGlobalScope:W.eU,Attr:W.fG,ClientRect:W.qs,ClientRectList:W.i6,DOMRectList:W.i6,CSSRuleList:W.kl,DocumentType:W.qz,DOMRect:W.qA,GamepadList:W.kq,HTMLFrameSetElement:W.qV,NamedNodeMap:W.ic,MozNamedAttrMap:W.ic,ServiceWorker:W.rk,SpeechRecognitionResultList:W.ku,StyleSheetList:W.kw,WorkerLocation:W.rG,WorkerNavigator:W.rH,IDBDatabase:P.ly,IDBIndex:P.mG,IDBObjectStore:P.nW,IDBOpenDBRequest:P.hV,IDBVersionChangeRequest:P.hV,IDBRequest:P.hV,IDBTransaction:P.pJ,SVGAElement:P.kO,SVGAnimateElement:P.el,SVGAnimateMotionElement:P.el,SVGAnimateTransformElement:P.el,SVGAnimationElement:P.el,SVGSetElement:P.el,SVGFEBlendElement:P.lP,SVGFEColorMatrixElement:P.lQ,SVGFEComponentTransferElement:P.lR,SVGFECompositeElement:P.lS,SVGFEConvolveMatrixElement:P.lT,SVGFEDiffuseLightingElement:P.lU,SVGFEDisplacementMapElement:P.lV,SVGFEFloodElement:P.lW,SVGFEGaussianBlurElement:P.lX,SVGFEImageElement:P.lY,SVGFEMergeElement:P.lZ,SVGFEMorphologyElement:P.m_,SVGFEOffsetElement:P.m0,SVGFESpecularLightingElement:P.m1,SVGFETileElement:P.m2,SVGFETurbulenceElement:P.m3,SVGFilterElement:P.mk,SVGCircleElement:P.cu,SVGClipPathElement:P.cu,SVGDefsElement:P.cu,SVGEllipseElement:P.cu,SVGForeignObjectElement:P.cu,SVGGElement:P.cu,SVGGeometryElement:P.cu,SVGLineElement:P.cu,SVGPathElement:P.cu,SVGPolygonElement:P.cu,SVGPolylineElement:P.cu,SVGRectElement:P.cu,SVGSwitchElement:P.cu,SVGGraphicsElement:P.cu,SVGImageElement:P.mE,SVGLength:P.da,SVGLengthList:P.nb,SVGMarkerElement:P.nv,SVGMaskElement:P.nw,SVGNumber:P.dc,SVGNumberList:P.nS,SVGPatternElement:P.o9,SVGPointList:P.oe,SVGScriptElement:P.hX,SVGStringList:P.pg,SVGStyleElement:P.pj,SVGDescElement:P.cb,SVGDiscardElement:P.cb,SVGFEDistantLightElement:P.cb,SVGFEFuncAElement:P.cb,SVGFEFuncBElement:P.cb,SVGFEFuncGElement:P.cb,SVGFEFuncRElement:P.cb,SVGFEMergeNodeElement:P.cb,SVGFEPointLightElement:P.cb,SVGFESpotLightElement:P.cb,SVGMetadataElement:P.cb,SVGStopElement:P.cb,SVGTitleElement:P.cb,SVGComponentTransferFunctionElement:P.cb,SVGElement:P.cb,SVGSVGElement:P.pm,SVGSymbolElement:P.po,SVGTSpanElement:P.eN,SVGTextElement:P.eN,SVGTextPositioningElement:P.eN,SVGTextContentElement:P.eN,SVGTextPathElement:P.pz,SVGTransform:P.dh,SVGTransformList:P.pK,SVGUseElement:P.pW,SVGViewElement:P.q_,SVGViewSpec:P.q0,SVGLinearGradientElement:P.i9,SVGRadialGradientElement:P.i9,SVGGradientElement:P.i9,SVGCursorElement:P.rg,SVGFEDropShadowElement:P.rh,SVGMPathElement:P.ri,AudioBuffer:P.fX,AudioBufferSourceNode:P.f2,AudioContext:P.fY,webkitAudioContext:P.fY,OfflineAudioContext:P.fY,AnalyserNode:P.bJ,RealtimeAnalyserNode:P.bJ,AudioDestinationNode:P.bJ,ChannelMergerNode:P.bJ,AudioChannelMerger:P.bJ,ChannelSplitterNode:P.bJ,AudioChannelSplitter:P.bJ,DelayNode:P.bJ,DynamicsCompressorNode:P.bJ,GainNode:P.bJ,AudioGainNode:P.bJ,IIRFilterNode:P.bJ,MediaStreamAudioDestinationNode:P.bJ,PannerNode:P.bJ,AudioPannerNode:P.bJ,webkitAudioPannerNode:P.bJ,ScriptProcessorNode:P.bJ,JavaScriptAudioNode:P.bJ,StereoPannerNode:P.bJ,WaveShaperNode:P.bJ,AudioNode:P.bJ,MediaElementAudioSourceNode:P.f4,MediaStreamAudioSourceNode:P.f4,AudioSourceNode:P.f4,BiquadFilterNode:P.l4,ConvolverNode:P.lk,OscillatorNode:P.jV,Oscillator:P.jV,WebGLActiveInfo:P.kQ,WebGL2RenderingContext:P.ot,WebGL2RenderingContextBase:P.rF,SQLResultSetRowList:P.k5})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,SyncManager:true,TextMetrics:true,UnderlyingSourceBase:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLModElement:true,HTMLOptGroupElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,Clients:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CredentialsContainer:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,FormData:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLIElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,HTMLProgressElement:true,RTCDataChannel:true,DataChannel:true,RTCSessionDescription:true,mozRTCSessionDescription:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSourceElement:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,HTMLStyleElement:true,StylePropertyMap:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,TreeWalker:true,URL:true,URLSearchParams:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGStyleElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,AudioSourceNode:false,BiquadFilterNode:true,ConvolverNode:true,OscillatorNode:true,Oscillator:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jN.$nativeSuperclassTag="ArrayBufferView"
H.hP.$nativeSuperclassTag="ArrayBufferView"
H.hR.$nativeSuperclassTag="ArrayBufferView"
H.hN.$nativeSuperclassTag="ArrayBufferView"
H.hQ.$nativeSuperclassTag="ArrayBufferView"
H.hS.$nativeSuperclassTag="ArrayBufferView"
H.hO.$nativeSuperclassTag="ArrayBufferView"
W.hc.$nativeSuperclassTag="EventTarget"
W.hf.$nativeSuperclassTag="EventTarget"
W.hd.$nativeSuperclassTag="EventTarget"
W.hg.$nativeSuperclassTag="EventTarget"
W.he.$nativeSuperclassTag="EventTarget"
W.hh.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.yZ(S.z0(),b)},[])
else (function(b){H.yZ(S.z0(),b)})([])})})()
//# sourceMappingURL=text_engine_playground.dart.js.map
