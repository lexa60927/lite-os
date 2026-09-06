var to=i=>{throw TypeError(i)};var xh=(i,t,e)=>t.has(i)||to("Cannot "+e);var Lr=(i,t,e)=>t.has(i)?to("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e);var Xe=(i,t,e)=>(xh(i,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ka="160",Mh=0,eo=1,yh=2,ac=1,Sh=2,Mn=3,Bn=0,He=1,je=2,Fn=0,Ni=1,no=2,io=3,so=4,bh=5,jn=100,Eh=101,Th=102,ro=103,ao=104,wh=200,Ah=201,Rh=202,Ch=203,pa=204,ma=205,Lh=206,Ph=207,Dh=208,Ih=209,Uh=210,Nh=211,Fh=212,Oh=213,kh=214,Bh=0,zh=1,Hh=2,lr=3,Gh=4,Vh=5,Wh=6,Xh=7,oc=0,qh=1,Yh=2,On=0,$h=1,Kh=2,jh=3,Zh=4,Jh=5,Qh=6,lc=300,Hi=301,Gi=302,ga=303,_a=304,yr=306,cr=1e3,tn=1001,va=1002,fe=1003,oo=1004,Pr=1005,$e=1006,tu=1007,ei=1008,kn=1009,eu=1010,nu=1011,Ba=1012,cc=1013,Un=1014,Nn=1015,fs=1016,hc=1017,uc=1018,Jn=1020,iu=1021,ze=1023,su=1024,ru=1025,Qn=1026,Vi=1027,au=1028,dc=1029,ou=1030,fc=1031,pc=1033,Dr=33776,Ir=33777,Ur=33778,Nr=33779,lo=35840,co=35841,ho=35842,uo=35843,mc=36196,fo=37492,po=37496,mo=37808,go=37809,_o=37810,vo=37811,xo=37812,Mo=37813,yo=37814,So=37815,bo=37816,Eo=37817,To=37818,wo=37819,Ao=37820,Ro=37821,Fr=36492,Co=36494,Lo=36495,lu=36283,Po=36284,Do=36285,Io=36286,gc=3e3,ti=3001,cu=3200,hu=3201,uu=0,du=1,Pe="",be="srgb",fn="srgb-linear",za="display-p3",Sr="display-p3-linear",hr="linear",le="srgb",ur="rec709",dr="p3",ri=7680,Uo=519,fu=512,pu=513,mu=514,_c=515,gu=516,_u=517,vu=518,xu=519,xa=35044,No=35048,Fo="300 es",Ma=1035,yn=2e3,fr=2001;class Xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oo=1234567;const Fi=Math.PI/180,ps=180/Math.PI;function Sn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function Ha(i,t){return(i%t+t)%t}function Mu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function yu(i,t,e){return i!==t?(e-i)/(t-i):0}function ls(i,t,e){return(1-e)*i+e*t}function Su(i,t,e,n){return ls(i,t,1-Math.exp(-e*n))}function bu(i,t=1){return t-Math.abs(Ha(i,t*2)-t)}function Eu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Tu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function wu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Au(i,t){return i+Math.random()*(t-i)}function Ru(i){return i*(.5-Math.random())}function Cu(i){i!==void 0&&(Oo=i);let t=Oo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lu(i){return i*Fi}function Pu(i){return i*ps}function ya(i){return(i&i-1)===0&&i!==0}function Du(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Iu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xs={DEG2RAD:Fi,RAD2DEG:ps,generateUUID:Sn,clamp:Be,euclideanModulo:Ha,mapLinear:Mu,inverseLerp:yu,lerp:ls,damp:Su,pingpong:bu,smoothstep:Eu,smootherstep:Tu,randInt:wu,randFloat:Au,randFloatSpread:Ru,seededRandom:Cu,degToRad:Lu,radToDeg:Pu,isPowerOfTwo:ya,ceilPowerOfTwo:Du,floorPowerOfTwo:pr,setQuaternionFromProperEuler:Iu,normalize:se,denormalize:hn};class Jt{constructor(t=0,e=0){Jt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,s,r,o,a,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],x=s[1],v=s[4],S=s[7],R=s[2],T=s[5],b=s[8];return r[0]=o*_+a*x+l*R,r[3]=o*m+a*v+l*T,r[6]=o*f+a*S+l*b,r[1]=c*_+h*x+u*R,r[4]=c*m+h*v+u*T,r[7]=c*f+h*S+u*b,r[2]=d*_+p*x+g*R,r[5]=d*m+p*v+g*T,r[8]=d*f+p*S+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Or.makeScale(t,e)),this}rotate(t){return this.premultiply(Or.makeRotation(-t)),this}translate(t,e){return this.premultiply(Or.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Or=new Kt;function vc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uu(){const i=mr("canvas");return i.style.display="block",i}const ko={};function cs(i){i in ko||(ko[i]=!0,console.warn(i))}const Bo=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zo=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ms={[fn]:{transfer:hr,primaries:ur,toReference:i=>i,fromReference:i=>i},[be]:{transfer:le,primaries:ur,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Sr]:{transfer:hr,primaries:dr,toReference:i=>i.applyMatrix3(zo),fromReference:i=>i.applyMatrix3(Bo)},[za]:{transfer:le,primaries:dr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(zo),fromReference:i=>i.applyMatrix3(Bo).convertLinearToSRGB()}},Nu=new Set([fn,Sr]),re={enabled:!0,_workingColorSpace:fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Nu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ms[t].toReference,s=Ms[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ms[i].primaries},getTransfer:function(i){return i===Pe?hr:Ms[i].transfer}};function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ai;class xc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ai===void 0&&(ai=mr("canvas")),ai.width=t.width,ai.height=t.height;const n=ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fu=0;class Mc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Sn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Br(s[o].image)):r.push(Br(s[o]))}else r=Br(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ou=0;class Ge extends Xi{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=tn,s=tn,r=$e,o=ei,a=ze,l=kn,c=Ge.DEFAULT_ANISOTROPY,h=Pe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Sn(),this.name="",this.source=new Mc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ti?be:Pe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cr:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cr:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===be?ti:gc}set encoding(t){cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ti?be:Pe}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=lc;Ge.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,s=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(p+1)/2,R=(f+1)/2,T=(h+d)/4,b=(u+_)/4,I=(g+m)/4;return v>S&&v>R?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=b/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=b/r,s=I/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ku extends Xi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(cs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ti?be:Pe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ge(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends ku{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yc extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fe,this.minFilter=fe,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bu extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fe,this.minFilter=fe,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const R=Math.sqrt(v),T=Math.atan2(R,f*x);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const S=a*x;if(l=l*m+d*S,c=c*m+p*S,h=h*m+g*S,u=u*m+_*S,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ho.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ho.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zr.copy(this).projectOnVector(t),this.sub(zr)}reflect(t){return this.sub(zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zr=new U,Ho=new gs;class qi{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ji),Ss.subVectors(this.max,ji),oi.subVectors(t.a,ji),li.subVectors(t.b,ji),ci.subVectors(t.c,ji),wn.subVectors(li,oi),An.subVectors(ci,li),Gn.subVectors(oi,ci);let e=[0,-wn.z,wn.y,0,-An.z,An.y,0,-Gn.z,Gn.y,wn.z,0,-wn.x,An.z,0,-An.x,Gn.z,0,-Gn.x,-wn.y,wn.x,0,-An.y,An.x,0,-Gn.y,Gn.x,0];return!Hr(e,oi,li,ci,Ss)||(e=[1,0,0,0,1,0,0,0,1],!Hr(e,oi,li,ci,Ss))?!1:(bs.crossVectors(wn,An),e=[bs.x,bs.y,bs.z],Hr(e,oi,li,ci,Ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mn=[new U,new U,new U,new U,new U,new U,new U,new U],en=new U,ys=new qi,oi=new U,li=new U,ci=new U,wn=new U,An=new U,Gn=new U,ji=new U,Ss=new U,bs=new U,Vn=new U;function Hr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Vn.fromArray(i,r);const a=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),l=t.dot(Vn),c=e.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const zu=new qi,Zi=new U,Gr=new U;class Yi{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zi.subVectors(t,this.center);const e=Zi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zi.copy(t.center).add(Gr)),this.expandByPoint(Zi.copy(t.center).sub(Gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new U,Vr=new U,Es=new U,Rn=new U,Wr=new U,Ts=new U,Xr=new U;class Ga{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gn.copy(this.origin).addScaledVector(this.direction,e),gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Vr.copy(t).add(e).multiplyScalar(.5),Es.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(Vr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Es),a=Rn.dot(this.direction),l=-Rn.dot(Es),c=Rn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vr).addScaledVector(Es,d),p}intersectSphere(t,e){gn.subVectors(t.center,this.origin);const n=gn.dot(this.direction),s=gn.dot(gn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,n,s,r){Wr.subVectors(e,t),Ts.subVectors(n,t),Xr.crossVectors(Wr,Ts);let o=this.direction.dot(Xr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Rn.subVectors(this.origin,t);const l=a*this.direction.dot(Ts.crossVectors(Rn,Ts));if(l<0)return null;const c=a*this.direction.dot(Wr.cross(Rn));if(c<0||l+c>o)return null;const h=-a*Rn.dot(Xr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/hi.setFromMatrixColumn(t,0).length(),r=1/hi.setFromMatrixColumn(t,1).length(),o=1/hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hu,t,Gu)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Cn.crossVectors(n,qe),Cn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Cn.crossVectors(n,qe)),Cn.normalize(),ws.crossVectors(qe,Cn),s[0]=Cn.x,s[4]=ws.x,s[8]=qe.x,s[1]=Cn.y,s[5]=ws.y,s[9]=qe.y,s[2]=Cn.z,s[6]=ws.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],x=n[3],v=n[7],S=n[11],R=n[15],T=s[0],b=s[4],I=s[8],M=s[12],A=s[1],G=s[5],q=s[9],K=s[13],D=s[2],C=s[6],P=s[10],X=s[14],N=s[3],H=s[7],Y=s[11],tt=s[15];return r[0]=o*T+a*A+l*D+c*N,r[4]=o*b+a*G+l*C+c*H,r[8]=o*I+a*q+l*P+c*Y,r[12]=o*M+a*K+l*X+c*tt,r[1]=h*T+u*A+d*D+p*N,r[5]=h*b+u*G+d*C+p*H,r[9]=h*I+u*q+d*P+p*Y,r[13]=h*M+u*K+d*X+p*tt,r[2]=g*T+_*A+m*D+f*N,r[6]=g*b+_*G+m*C+f*H,r[10]=g*I+_*q+m*P+f*Y,r[14]=g*M+_*K+m*X+f*tt,r[3]=x*T+v*A+S*D+R*N,r[7]=x*b+v*G+S*C+R*H,r[11]=x*I+v*q+S*P+R*Y,r[15]=x*M+v*K+S*X+R*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+_*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],x=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,v=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,S=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,R=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,T=e*x+n*v+s*S+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=x*b,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*b,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*b,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*b,t[4]=v*b,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*b,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*b,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*b,t[8]=S*b,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*b,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*b,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*b,t[12]=R*b,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*b,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*b,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,x=l*c,v=l*h,S=l*u,R=n.x,T=n.y,b=n.z;return s[0]=(1-(_+f))*R,s[1]=(p+S)*R,s[2]=(g-v)*R,s[3]=0,s[4]=(p-S)*T,s[5]=(1-(d+f))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+v)*b,s[9]=(m-x)*b,s[10]=(1-(d+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=hi.set(s[0],s[1],s[2]).length();const o=hi.set(s[4],s[5],s[6]).length(),a=hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const c=1/r,h=1/o,u=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=yn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===yn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===fr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=yn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,p=(n+s)*h;let g,_;if(a===yn)g=(o+r)*u,_=-2*u;else if(a===fr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hi=new U,nn=new _e,Hu=new U(0,0,0),Gu=new U(1,1,1),Cn=new U,ws=new U,qe=new U,Go=new _e,Vo=new gs;class br{constructor(t=0,e=0,n=0,s=br.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Go.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Go,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vo.setFromEuler(this),this.setFromQuaternion(Vo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}br.DEFAULT_ORDER="XYZ";class Sc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vu=0;const Wo=new U,ui=new gs,_n=new _e,As=new U,Ji=new U,Wu=new U,Xu=new gs,Xo=new U(1,0,0),qo=new U(0,1,0),Yo=new U(0,0,1),qu={type:"added"},Yu={type:"removed"};class De extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new U,e=new br,n=new gs,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Kt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.multiply(ui),this}rotateOnWorldAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.premultiply(ui),this}rotateX(t){return this.rotateOnAxis(Xo,t)}rotateY(t){return this.rotateOnAxis(qo,t)}rotateZ(t){return this.rotateOnAxis(Yo,t)}translateOnAxis(t,e){return Wo.copy(t).applyQuaternion(this.quaternion),this.position.add(Wo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xo,t)}translateY(t){return this.translateOnAxis(qo,t)}translateZ(t){return this.translateOnAxis(Yo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?As.copy(t):As.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Ji,As,this.up):_n.lookAt(As,Ji,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),ui.setFromRotationMatrix(_n),this.quaternion.premultiply(ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(qu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yu)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,t,Wu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,Xu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new U(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new U,vn=new U,qr=new U,xn=new U,di=new U,fi=new U,$o=new U,Yr=new U,$r=new U,Kr=new U;let Rs=!1;class Ke{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),vn.subVectors(n,e),qr.subVectors(t,e);const o=sn.dot(sn),a=sn.dot(vn),l=sn.dot(qr),c=vn.dot(vn),h=vn.dot(qr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(t,e,n,s,r,o,a,l){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),this.getInterpolation(t,e,n,s,r,o,a,l)}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(o,xn.y),l.addScaledVector(a,xn.z),l)}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),vn.subVectors(t,e),sn.cross(vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),sn.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),Ke.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;di.subVectors(s,n),fi.subVectors(r,n),Yr.subVectors(t,n);const l=di.dot(Yr),c=fi.dot(Yr);if(l<=0&&c<=0)return e.copy(n);$r.subVectors(t,s);const h=di.dot($r),u=fi.dot($r);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(di,o);Kr.subVectors(t,r);const p=di.dot(Kr),g=fi.dot(Kr);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(fi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return $o.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector($o,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(di,o).addScaledVector(fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function jr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Ha(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=jr(o,r,t+1/3),this.g=jr(o,r,t),this.b=jr(o,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){const n=bc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return re.fromWorkingColorSpace(Le.copy(this),t),Math.round(Be(Le.r*255,0,255))*65536+Math.round(Be(Le.g*255,0,255))*256+Math.round(Be(Le.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,s=Le.g,r=Le.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=be){re.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,s=Le.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(Cs);const n=ls(Ln.h,Cs.h,e),s=ls(Ln.s,Cs.s,e),r=ls(Ln.l,Cs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Ut;Ut.NAMES=bc;let $u=0;class ii extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=Ni,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pa,this.blendDst=ma,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pa&&(n.blendSrc=this.blendSrc),this.blendDst!==ma&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class bn extends ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new U,Ls=new Jt;class pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ls.fromBufferAttribute(this,e),Ls.applyMatrix3(t),this.setXY(e,Ls.x,Ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xa&&(t.usage=this.usage),t}}class Ec extends pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Tc extends pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ie extends pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ku=0;const Je=new _e,Zr=new De,pi=new U,Ye=new qi,Qi=new qi,Se=new U;class Ae extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vc(t)?Tc:Ec)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return Zr.lookAt(t),Zr.updateMatrix(),this.applyMatrix4(Zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Qi.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Ye.min,Qi.min),Ye.expandByPoint(Se),Se.addVectors(Ye.max,Qi.max),Ye.expandByPoint(Se)):(Ye.expandByPoint(Qi.min),Ye.expandByPoint(Qi.max))}Ye.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Se.fromBufferAttribute(a,c),l&&(pi.fromBufferAttribute(t,c),Se.add(pi)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<a;A++)c[A]=new U,h[A]=new U;const u=new U,d=new U,p=new U,g=new Jt,_=new Jt,m=new Jt,f=new U,x=new U;function v(A,G,q){u.fromArray(s,A*3),d.fromArray(s,G*3),p.fromArray(s,q*3),g.fromArray(o,A*2),_.fromArray(o,G*2),m.fromArray(o,q*2),d.sub(u),p.sub(u),_.sub(g),m.sub(g);const K=1/(_.x*m.y-m.x*_.y);isFinite(K)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(K),x.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(K),c[A].add(f),c[G].add(f),c[q].add(f),h[A].add(x),h[G].add(x),h[q].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let A=0,G=S.length;A<G;++A){const q=S[A],K=q.start,D=q.count;for(let C=K,P=K+D;C<P;C+=3)v(n[C+0],n[C+1],n[C+2])}const R=new U,T=new U,b=new U,I=new U;function M(A){b.fromArray(r,A*3),I.copy(b);const G=c[A];R.copy(G),R.sub(b.multiplyScalar(b.dot(G))).normalize(),T.crossVectors(I,G);const K=T.dot(h[A])<0?-1:1;l[A*4]=R.x,l[A*4+1]=R.y,l[A*4+2]=R.z,l[A*4+3]=K}for(let A=0,G=S.length;A<G;++A){const q=S[A],K=q.start,D=q.count;for(let C=K,P=K+D;C<P;C+=3)M(n[C+0]),M(n[C+1]),M(n[C+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ko=new _e,Wn=new Ga,Ps=new Yi,jo=new U,mi=new U,gi=new U,_i=new U,Jr=new U,Ds=new U,Is=new Jt,Us=new Jt,Ns=new Jt,Zo=new U,Jo=new U,Qo=new U,Fs=new U,Os=new U;class Ee extends De{constructor(t=new Ae,e=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ds.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Jr.fromBufferAttribute(u,t),o?Ds.addScaledVector(Jr,h):Ds.addScaledVector(Jr.sub(e),h))}e.add(Ds)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(r),Wn.copy(t.ray).recast(t.near),!(Ps.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Ps,jo)===null||Wn.origin.distanceToSquared(jo)>(t.far-t.near)**2))&&(Ko.copy(r).invert(),Wn.copy(t.ray).applyMatrix4(Ko),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,R=v;S<R;S+=3){const T=a.getX(S),b=a.getX(S+1),I=a.getX(S+2);s=ks(this,f,t,n,c,h,u,T,b,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);s=ks(this,o,t,n,c,h,u,x,v,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,R=v;S<R;S+=3){const T=S,b=S+1,I=S+2;s=ks(this,f,t,n,c,h,u,T,b,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=m,v=m+1,S=m+2;s=ks(this,o,t,n,c,h,u,x,v,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function ju(i,t,e,n,s,r,o,a){let l;if(t.side===He?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Bn,a),l===null)return null;Os.copy(a),Os.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Os);return c<e.near||c>e.far?null:{distance:c,point:Os.clone(),object:i}}function ks(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,mi),i.getVertexPosition(l,gi),i.getVertexPosition(c,_i);const h=ju(i,t,e,n,mi,gi,_i,Fs);if(h){s&&(Is.fromBufferAttribute(s,a),Us.fromBufferAttribute(s,l),Ns.fromBufferAttribute(s,c),h.uv=Ke.getInterpolation(Fs,mi,gi,_i,Is,Us,Ns,new Jt)),r&&(Is.fromBufferAttribute(r,a),Us.fromBufferAttribute(r,l),Ns.fromBufferAttribute(r,c),h.uv1=Ke.getInterpolation(Fs,mi,gi,_i,Is,Us,Ns,new Jt),h.uv2=h.uv1),o&&(Zo.fromBufferAttribute(o,a),Jo.fromBufferAttribute(o,l),Qo.fromBufferAttribute(o,c),h.normal=Ke.getInterpolation(Fs,mi,gi,_i,Zo,Jo,Qo,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new U,materialIndex:0};Ke.getNormal(mi,gi,_i,u.normal),h.face=u}return h}class En extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2));function g(_,m,f,x,v,S,R,T,b,I,M){const A=S/b,G=R/I,q=S/2,K=R/2,D=T/2,C=b+1,P=I+1;let X=0,N=0;const H=new U;for(let Y=0;Y<P;Y++){const tt=Y*G-K;for(let et=0;et<C;et++){const V=et*A-q;H[_]=V*x,H[m]=tt*v,H[f]=D,c.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[f]=T>0?1:-1,h.push(H.x,H.y,H.z),u.push(et/b),u.push(1-Y/I),X+=1}}for(let Y=0;Y<I;Y++)for(let tt=0;tt<b;tt++){const et=d+tt+C*Y,V=d+tt+C*(Y+1),j=d+(tt+1)+C*(Y+1),ct=d+(tt+1)+C*Y;l.push(et,V,ct),l.push(V,j,ct),N+=6}a.addGroup(p,N,M),p+=N,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=Wi(i[e]);for(const s in n)t[s]=n[s]}return t}function Zu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wc(i){return i.getRenderTarget()===null?i.outputColorSpace:re.workingColorSpace}const Ju={clone:Wi,merge:Oe};var Qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qu,this.fragmentShader=td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=Zu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ac extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qe extends Ac{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(Fi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vi=-90,xi=1;class ed extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(vi,xi,t,e);s.layers=this.layers,this.add(s);const r=new Qe(vi,xi,t,e);r.layers=this.layers,this.add(r);const o=new Qe(vi,xi,t,e);o.layers=this.layers,this.add(o);const a=new Qe(vi,xi,t,e);a.layers=this.layers,this.add(a);const l=new Qe(vi,xi,t,e);l.layers=this.layers,this.add(l);const c=new Qe(vi,xi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rc extends Ge{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Hi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nd extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(cs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ti?be:Pe),this.texture=new Rc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new En(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:Fn});r.uniforms.tEquirect.value=e;const o=new Ee(s,r),a=e.minFilter;return e.minFilter===ei&&(e.minFilter=$e),new ed(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Qr=new U,id=new U,sd=new Kt;class Yn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Qr.subVectors(n,e).cross(id.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sd.getNormalMatrix(t),s=this.coplanarPoint(Qr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new Yi,Bs=new U;class Cc{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],x=s[13],v=s[14],S=s[15];if(n[0].setComponents(l-r,d-c,m-p,S-f).normalize(),n[1].setComponents(l+r,d+c,m+p,S+f).normalize(),n[2].setComponents(l+o,d+h,m+g,S+x).normalize(),n[3].setComponents(l-o,d-h,m-g,S-x).normalize(),n[4].setComponents(l-a,d-u,m-_,S-v).normalize(),e===yn)n[5].setComponents(l+a,d+u,m+_,S+v).normalize();else if(e===fr)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Bs.x=s.normal.x>0?t.max.x:t.min.x,Bs.y=s.normal.y>0?t.max.y:t.min.y,Bs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function rd(i,t){const e=t.isWebGL2,n=new WeakMap;function s(c,h){const u=c.array,d=c.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){const d=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),p.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];e?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class ki extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const x=f*d-o;for(let v=0;v<c;v++){const S=v*u-r;g.push(S,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const v=x+c*f,S=x+c*(f+1),R=x+1+c*(f+1),T=x+1+c*f;p.push(v,S,T),p.push(S,R,T)}this.setIndex(p),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ki(t.width,t.height,t.widthSegments,t.heightSegments)}}var ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,od=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Md=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ld=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Od=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$d=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ef=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,af=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,of=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ff=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_f=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Sf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Df=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,If=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Vf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ep=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,op=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ap=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:ad,alphahash_pars_fragment:od,alphamap_fragment:ld,alphamap_pars_fragment:cd,alphatest_fragment:hd,alphatest_pars_fragment:ud,aomap_fragment:dd,aomap_pars_fragment:fd,batching_pars_vertex:pd,batching_vertex:md,begin_vertex:gd,beginnormal_vertex:_d,bsdfs:vd,iridescence_fragment:xd,bumpmap_pars_fragment:Md,clipping_planes_fragment:yd,clipping_planes_pars_fragment:Sd,clipping_planes_pars_vertex:bd,clipping_planes_vertex:Ed,color_fragment:Td,color_pars_fragment:wd,color_pars_vertex:Ad,color_vertex:Rd,common:Cd,cube_uv_reflection_fragment:Ld,defaultnormal_vertex:Pd,displacementmap_pars_vertex:Dd,displacementmap_vertex:Id,emissivemap_fragment:Ud,emissivemap_pars_fragment:Nd,colorspace_fragment:Fd,colorspace_pars_fragment:Od,envmap_fragment:kd,envmap_common_pars_fragment:Bd,envmap_pars_fragment:zd,envmap_pars_vertex:Hd,envmap_physical_pars_fragment:Qd,envmap_vertex:Gd,fog_vertex:Vd,fog_pars_vertex:Wd,fog_fragment:Xd,fog_pars_fragment:qd,gradientmap_pars_fragment:Yd,lightmap_fragment:$d,lightmap_pars_fragment:Kd,lights_lambert_fragment:jd,lights_lambert_pars_fragment:Zd,lights_pars_begin:Jd,lights_toon_fragment:tf,lights_toon_pars_fragment:ef,lights_phong_fragment:nf,lights_phong_pars_fragment:sf,lights_physical_fragment:rf,lights_physical_pars_fragment:af,lights_fragment_begin:of,lights_fragment_maps:lf,lights_fragment_end:cf,logdepthbuf_fragment:hf,logdepthbuf_pars_fragment:uf,logdepthbuf_pars_vertex:df,logdepthbuf_vertex:ff,map_fragment:pf,map_pars_fragment:mf,map_particle_fragment:gf,map_particle_pars_fragment:_f,metalnessmap_fragment:vf,metalnessmap_pars_fragment:xf,morphcolor_vertex:Mf,morphnormal_vertex:yf,morphtarget_pars_vertex:Sf,morphtarget_vertex:bf,normal_fragment_begin:Ef,normal_fragment_maps:Tf,normal_pars_fragment:wf,normal_pars_vertex:Af,normal_vertex:Rf,normalmap_pars_fragment:Cf,clearcoat_normal_fragment_begin:Lf,clearcoat_normal_fragment_maps:Pf,clearcoat_pars_fragment:Df,iridescence_pars_fragment:If,opaque_fragment:Uf,packing:Nf,premultiplied_alpha_fragment:Ff,project_vertex:Of,dithering_fragment:kf,dithering_pars_fragment:Bf,roughnessmap_fragment:zf,roughnessmap_pars_fragment:Hf,shadowmap_pars_fragment:Gf,shadowmap_pars_vertex:Vf,shadowmap_vertex:Wf,shadowmask_pars_fragment:Xf,skinbase_vertex:qf,skinning_pars_vertex:Yf,skinning_vertex:$f,skinnormal_vertex:Kf,specularmap_fragment:jf,specularmap_pars_fragment:Zf,tonemapping_fragment:Jf,tonemapping_pars_fragment:Qf,transmission_fragment:tp,transmission_pars_fragment:ep,uv_pars_fragment:np,uv_pars_vertex:ip,uv_vertex:sp,worldpos_vertex:rp,background_vert:ap,background_frag:op,backgroundCube_vert:lp,backgroundCube_frag:cp,cube_vert:hp,cube_frag:up,depth_vert:dp,depth_frag:fp,distanceRGBA_vert:pp,distanceRGBA_frag:mp,equirect_vert:gp,equirect_frag:_p,linedashed_vert:vp,linedashed_frag:xp,meshbasic_vert:Mp,meshbasic_frag:yp,meshlambert_vert:Sp,meshlambert_frag:bp,meshmatcap_vert:Ep,meshmatcap_frag:Tp,meshnormal_vert:wp,meshnormal_frag:Ap,meshphong_vert:Rp,meshphong_frag:Cp,meshphysical_vert:Lp,meshphysical_frag:Pp,meshtoon_vert:Dp,meshtoon_frag:Ip,points_vert:Up,points_frag:Np,shadow_vert:Fp,shadow_frag:Op,sprite_vert:kp,sprite_frag:Bp},at={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},cn={basic:{uniforms:Oe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Oe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ut(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Oe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Oe([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Oe([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Ut(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Oe([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Oe([at.points,at.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Oe([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Oe([at.common,at.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Oe([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Oe([at.sprite,at.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Oe([at.common,at.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Oe([at.lights,at.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};cn.physical={uniforms:Oe([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const zs={r:0,b:0,g:0};function zp(i,t,e,n,s,r,o){const a=new Ut(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let x=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===yr)?(h===void 0&&(h=new Ee(new En(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Wi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=re.getTransfer(v.colorSpace)!==le,(u!==v||d!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ee(new ki(2,2),new Tn({name:"BackgroundMaterial",uniforms:Wi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=re.getTransfer(v.colorSpace)!==le,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(zs,wc(i)),n.buffers.color.setClear(zs.r,zs.g,zs.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Hp(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,h=!1;function u(D,C,P,X,N){let H=!1;if(o){const Y=_(X,P,C);c!==Y&&(c=Y,p(c.object)),H=f(D,X,P,N),H&&x(D,X,P,N)}else{const Y=C.wireframe===!0;(c.geometry!==X.id||c.program!==P.id||c.wireframe!==Y)&&(c.geometry=X.id,c.program=P.id,c.wireframe=Y,H=!0)}N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(H||h)&&(h=!1,I(D,C,P,X),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,C,P){const X=P.wireframe===!0;let N=a[D.id];N===void 0&&(N={},a[D.id]=N);let H=N[C.id];H===void 0&&(H={},N[C.id]=H);let Y=H[X];return Y===void 0&&(Y=m(d()),H[X]=Y),Y}function m(D){const C=[],P=[],X=[];for(let N=0;N<s;N++)C[N]=0,P[N]=0,X[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:X,object:D,attributes:{},index:null}}function f(D,C,P,X){const N=c.attributes,H=C.attributes;let Y=0;const tt=P.getAttributes();for(const et in tt)if(tt[et].location>=0){const j=N[et];let ct=H[et];if(ct===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(ct=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(ct=D.instanceColor)),j===void 0||j.attribute!==ct||ct&&j.data!==ct.data)return!0;Y++}return c.attributesNum!==Y||c.index!==X}function x(D,C,P,X){const N={},H=C.attributes;let Y=0;const tt=P.getAttributes();for(const et in tt)if(tt[et].location>=0){let j=H[et];j===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const ct={};ct.attribute=j,j&&j.data&&(ct.data=j.data),N[et]=ct,Y++}c.attributes=N,c.attributesNum=Y,c.index=X}function v(){const D=c.newAttributes;for(let C=0,P=D.length;C<P;C++)D[C]=0}function S(D){R(D,0)}function R(D,C){const P=c.newAttributes,X=c.enabledAttributes,N=c.attributeDivisors;P[D]=1,X[D]===0&&(i.enableVertexAttribArray(D),X[D]=1),N[D]!==C&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,C),N[D]=C)}function T(){const D=c.newAttributes,C=c.enabledAttributes;for(let P=0,X=C.length;P<X;P++)C[P]!==D[P]&&(i.disableVertexAttribArray(P),C[P]=0)}function b(D,C,P,X,N,H,Y){Y===!0?i.vertexAttribIPointer(D,C,P,N,H):i.vertexAttribPointer(D,C,P,X,N,H)}function I(D,C,P,X){if(n.isWebGL2===!1&&(D.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const N=X.attributes,H=P.getAttributes(),Y=C.defaultAttributeValues;for(const tt in H){const et=H[tt];if(et.location>=0){let V=N[tt];if(V===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(V=D.instanceColor)),V!==void 0){const j=V.normalized,ct=V.itemSize,vt=e.get(V);if(vt===void 0)continue;const gt=vt.buffer,Nt=vt.type,Ot=vt.bytesPerElement,Ct=n.isWebGL2===!0&&(Nt===i.INT||Nt===i.UNSIGNED_INT||V.gpuType===cc);if(V.isInterleavedBufferAttribute){const Zt=V.data,O=Zt.stride,he=V.offset;if(Zt.isInstancedInterleavedBuffer){for(let At=0;At<et.locationSize;At++)R(et.location+At,Zt.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Zt.meshPerAttribute*Zt.count)}else for(let At=0;At<et.locationSize;At++)S(et.location+At);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let At=0;At<et.locationSize;At++)b(et.location+At,ct/et.locationSize,Nt,j,O*Ot,(he+ct/et.locationSize*At)*Ot,Ct)}else{if(V.isInstancedBufferAttribute){for(let Zt=0;Zt<et.locationSize;Zt++)R(et.location+Zt,V.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Zt=0;Zt<et.locationSize;Zt++)S(et.location+Zt);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let Zt=0;Zt<et.locationSize;Zt++)b(et.location+Zt,ct/et.locationSize,Nt,j,ct*Ot,ct/et.locationSize*Zt*Ot,Ct)}}else if(Y!==void 0){const j=Y[tt];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(et.location,j);break;case 3:i.vertexAttrib3fv(et.location,j);break;case 4:i.vertexAttrib4fv(et.location,j);break;default:i.vertexAttrib1fv(et.location,j)}}}}T()}function M(){q();for(const D in a){const C=a[D];for(const P in C){const X=C[P];for(const N in X)g(X[N].object),delete X[N];delete C[P]}delete a[D]}}function A(D){if(a[D.id]===void 0)return;const C=a[D.id];for(const P in C){const X=C[P];for(const N in X)g(X[N].object),delete X[N];delete C[P]}delete a[D.id]}function G(D){for(const C in a){const P=a[C];if(P[D.id]===void 0)continue;const X=P[D.id];for(const N in X)g(X[N].object),delete X[N];delete P[D.id]}}function q(){K(),h=!0,c!==l&&(c=l,p(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:q,resetDefaultState:K,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:S,disableUnusedAttributes:T}}function Gp(i,t,e,n){const s=n.isWebGL2;let r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Vp(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=o||t.has("OES_texture_float"),R=v&&S,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:T}}function Wp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Yn,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,v=x*4;let S=f.clippingState||null;l.value=S,S=h(g,d,v,p);for(let R=0;R!==v;++R)S[R]=e[R];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=p;v!==_;++v,S+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Xp(i){let t=new WeakMap;function e(o,a){return a===ga?o.mapping=Hi:a===_a&&(o.mapping=Gi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ga||a===_a)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new nd(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class qp extends Ac{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Li=4,tl=[.125,.215,.35,.446,.526,.582],Zn=20,ta=new qp,el=new Ut;let ea=null,na=0,ia=0;const $n=(1+Math.sqrt(5))/2,Mi=1/$n,nl=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,$n,Mi),new U(0,$n,-Mi),new U(Mi,0,$n),new U(-Mi,0,$n),new U($n,Mi,0),new U(-$n,Mi,0)];class il{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ea,na,ia),t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:fs,format:ze,colorSpace:fn,depthBuffer:!1},s=sl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yp(r)),this._blurMaterial=$p(r,t,e)}return s}_compileMaterial(t){const e=new Ee(this._lodPlanes[0],t);this._renderer.compile(e,ta)}_sceneToCubeUV(t,e,n,s){const a=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(el),h.toneMapping=On,h.autoClear=!1;const p=new bn({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new Ee(new En,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(el),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;Hs(s,x*v,f>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Hi||t.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ta)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=nl[(s-1)%nl.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ee(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Zn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Zn;m>Zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zn}`);const f=[];let x=0;for(let b=0;b<Zn;++b){const I=b/_,M=Math.exp(-I*I/2);f.push(M),b===0?x+=M:b<m&&(x+=2*M)}for(let b=0;b<f.length;b++)f[b]=f[b]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[s],R=3*S*(s>v-Li?s-v+Li:0),T=4*(this._cubeSize-S);Hs(e,R,T,3*S,2*S),l.setRenderTarget(e),l.render(u,ta)}}function Yp(i){const t=[],e=[],n=[];let s=i;const r=i-Li+1+tl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Li?l=tl[o-i+Li-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let T=0;T<p;T++){const b=T%3*2/3-1,I=T>2?0:-1,M=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];x.set(M,_*g*T),v.set(d,m*g*T);const A=[T,T,T,T,T,T];S.set(A,f*g*T)}const R=new Ae;R.setAttribute("position",new pe(x,_)),R.setAttribute("uv",new pe(v,m)),R.setAttribute("faceIndex",new pe(S,f)),t.push(R),s>Li&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sl(i,t,e){const n=new ni(i,t,e);return n.texture.mapping=yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function $p(i,t,e){const n=new Float32Array(Zn),s=new U(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function rl(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function al(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Va(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ga||l===_a,h=l===Hi||l===Gi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new il(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new il(i));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function jp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zp(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,S=x.length;v<S;v+=3){const R=x[v+0],T=x[v+1],b=x[v+2];d.push(R,T,T,b,b,R)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const R=v+0,T=v+1,b=v+2;d.push(R,T,T,b,b,R)}}else return;const m=new(vc(d)?Tc:Ec)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Jp(i,t,e,n){const s=n.isWebGL2;let r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){i.drawElements(r,g,a,p*l),e.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,a,p*l,_),e.update(g,r,_)}function d(p,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,_);let f=0;for(let x=0;x<_;x++)f+=g[x];e.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Qp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function tm(i,t){return i[0]-t[0]}function em(i,t){return Math.abs(t[1])-Math.abs(i[1])}function nm(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,o=new we,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let C=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var p=C;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),R===!0&&(M=3);let A=h.attributes.position.count*M,G=1;A>t.maxTextureSize&&(G=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const q=new Float32Array(A*G*4*_),K=new yc(q,A,G,_);K.type=Nn,K.needsUpdate=!0;const D=M*4;for(let P=0;P<_;P++){const X=T[P],N=b[P],H=I[P],Y=A*G*4*P;for(let tt=0;tt<X.count;tt++){const et=tt*D;v===!0&&(o.fromBufferAttribute(X,tt),q[Y+et+0]=o.x,q[Y+et+1]=o.y,q[Y+et+2]=o.z,q[Y+et+3]=0),S===!0&&(o.fromBufferAttribute(N,tt),q[Y+et+4]=o.x,q[Y+et+5]=o.y,q[Y+et+6]=o.z,q[Y+et+7]=0),R===!0&&(o.fromBufferAttribute(H,tt),q[Y+et+8]=o.x,q[Y+et+9]=o.y,q[Y+et+10]=o.z,q[Y+et+11]=H.itemSize===4?o.w:1)}}m={count:_,texture:K,size:new Jt(A,G)},r.set(h,m),h.addEventListener("dispose",C)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const x=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[h.id]=_}for(let S=0;S<g;S++){const R=_[S];R[0]=S,R[1]=d[S]}_.sort(em);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(tm);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const R=a[S],T=R[0],b=R[1];T!==Number.MAX_SAFE_INTEGER&&b?(m&&h.getAttribute("morphTarget"+S)!==m[T]&&h.setAttribute("morphTarget"+S,m[T]),f&&h.getAttribute("morphNormal"+S)!==f[T]&&h.setAttribute("morphNormal"+S,f[T]),s[S]=b,x+=b):(m&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),f&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),s[S]=0)}const v=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function im(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Pc extends Ge{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Qn,h!==Qn&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qn&&(n=Un),n===void 0&&h===Vi&&(n=Jn),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:fe,this.minFilter=l!==void 0?l:fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Dc=new Ge,Ic=new Pc(1,1);Ic.compareFunction=_c;const Uc=new yc,Nc=new Bu,Fc=new Rc,ol=[],ll=[],cl=new Float32Array(16),hl=new Float32Array(9),ul=new Float32Array(4);function $i(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ol[s];if(r===void 0&&(r=new Float32Array(s),ol[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Er(i,t){let e=ll[t];e===void 0&&(e=new Int32Array(t),ll[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function sm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;ul.set(n),i.uniformMatrix2fv(this.addr,!1,ul),xe(e,n)}}function cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;hl.set(n),i.uniformMatrix3fv(this.addr,!1,hl),xe(e,n)}}function hm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;cl.set(n),i.uniformMatrix4fv(this.addr,!1,cl),xe(e,n)}}function um(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function xm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Ic:Dc;e.setTexture2D(t||r,s)}function Mm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nc,s)}function ym(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Fc,s)}function Sm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Uc,s)}function bm(i){switch(i){case 5126:return sm;case 35664:return rm;case 35665:return am;case 35666:return om;case 35674:return lm;case 35675:return cm;case 35676:return hm;case 5124:case 35670:return um;case 35667:case 35671:return dm;case 35668:case 35672:return fm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return gm;case 36295:return _m;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Sm}}function Em(i,t){i.uniform1fv(this.addr,t)}function Tm(i,t){const e=$i(t,this.size,2);i.uniform2fv(this.addr,e)}function wm(i,t){const e=$i(t,this.size,3);i.uniform3fv(this.addr,e)}function Am(i,t){const e=$i(t,this.size,4);i.uniform4fv(this.addr,e)}function Rm(i,t){const e=$i(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cm(i,t){const e=$i(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Lm(i,t){const e=$i(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Pm(i,t){i.uniform1iv(this.addr,t)}function Dm(i,t){i.uniform2iv(this.addr,t)}function Im(i,t){i.uniform3iv(this.addr,t)}function Um(i,t){i.uniform4iv(this.addr,t)}function Nm(i,t){i.uniform1uiv(this.addr,t)}function Fm(i,t){i.uniform2uiv(this.addr,t)}function Om(i,t){i.uniform3uiv(this.addr,t)}function km(i,t){i.uniform4uiv(this.addr,t)}function Bm(i,t,e){const n=this.cache,s=t.length,r=Er(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Dc,r[o])}function zm(i,t,e){const n=this.cache,s=t.length,r=Er(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Nc,r[o])}function Hm(i,t,e){const n=this.cache,s=t.length,r=Er(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Fc,r[o])}function Gm(i,t,e){const n=this.cache,s=t.length,r=Er(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Uc,r[o])}function Vm(i){switch(i){case 5126:return Em;case 35664:return Tm;case 35665:return wm;case 35666:return Am;case 35674:return Rm;case 35675:return Cm;case 35676:return Lm;case 5124:case 35670:return Pm;case 35667:case 35671:return Dm;case 35668:case 35672:return Im;case 35669:case 35673:return Um;case 5125:return Nm;case 36294:return Fm;case 36295:return Om;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return Gm}}class Wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bm(e.type)}}class Xm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vm(e.type)}}class qm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const sa=/(\w+)(\])?(\[|\.)?/g;function dl(i,t){i.seq.push(t),i.map[t.id]=t}function Ym(i,t,e){const n=i.name,s=n.length;for(sa.lastIndex=0;;){const r=sa.exec(n),o=sa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){dl(e,c===void 0?new Wm(a,i,t):new Xm(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new qm(a),dl(e,u)),e=u}}}class nr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Ym(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function fl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const $m=37297;let Km=0;function jm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Zm(i){const t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(i);let n;switch(t===e?n="":t===dr&&e===ur?n="LinearDisplayP3ToLinearSRGB":t===ur&&e===dr&&(n="LinearSRGBToLinearDisplayP3"),i){case fn:case Sr:return[n,"LinearTransferOETF"];case be:case za:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function pl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+jm(i.getShaderSource(t),o)}else return s}function Jm(i,t){const e=Zm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Qm(i,t){let e;switch(t){case $h:e="Linear";break;case Kh:e="Reinhard";break;case jh:e="OptimizedCineon";break;case Zh:e="ACESFilmic";break;case Qh:e="AgX";break;case Jh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function t0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function e0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Pi).join(`
`)}function n0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function i0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Pi(i){return i!==""}function ml(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(i){return i.replace(s0,a0)}const r0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function a0(i,t){let e=qt[t];if(e===void 0){const n=r0.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sa(e)}const o0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(i){return i.replace(o0,l0)}function l0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vl(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function c0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ac?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function h0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hi:case Gi:t="ENVMAP_TYPE_CUBE";break;case yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function u0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gi:t="ENVMAP_MODE_REFRACTION";break}return t}function d0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case oc:t="ENVMAP_BLENDING_MULTIPLY";break;case qh:t="ENVMAP_BLENDING_MIX";break;case Yh:t="ENVMAP_BLENDING_ADD";break}return t}function f0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function p0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=c0(e),c=h0(e),h=u0(e),u=d0(e),d=f0(e),p=e.isWebGL2?"":t0(e),g=e0(e),_=n0(r),m=s.createProgram();let f,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Pi).join(`
`),f.length>0&&(f+=`
`),x=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Pi).join(`
`),x.length>0&&(x+=`
`)):(f=[vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),x=[p,vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?qt.tonemapping_pars_fragment:"",e.toneMapping!==On?Qm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Jm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pi).join(`
`)),o=Sa(o),o=ml(o,e),o=gl(o,e),a=Sa(a),a=ml(a,e),a=gl(a,e),o=_l(o),a=_l(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=v+f+o,R=v+x+a,T=fl(s,s.VERTEX_SHADER,S),b=fl(s,s.FRAGMENT_SHADER,R);s.attachShader(m,T),s.attachShader(m,b),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function I(q){if(i.debug.checkShaderErrors){const K=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(T).trim(),C=s.getShaderInfoLog(b).trim();let P=!0,X=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(P=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,b);else{const N=pl(s,T,"vertex"),H=pl(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+N+`
`+H)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(D===""||C==="")&&(X=!1);X&&(q.diagnostics={runnable:P,programLog:K,vertexShader:{log:D,prefix:f},fragmentShader:{log:C,prefix:x}})}s.deleteShader(T),s.deleteShader(b),M=new nr(s,m),A=i0(s,m)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(m,$m)),G},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Km++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=b,this}let m0=0;class g0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new _0(t),e.set(t,n)),n}}class _0{constructor(t){this.id=m0++,this.code=t,this.usedTimes=0}}function v0(i,t,e,n,s,r,o){const a=new Sc,l=new g0,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,A,G,q,K){const D=q.fog,C=K.geometry,P=M.isMeshStandardMaterial?q.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||P),N=X&&X.mapping===yr?X.image.height:null,H=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Y=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,tt=Y!==void 0?Y.length:0;let et=0;C.morphAttributes.position!==void 0&&(et=1),C.morphAttributes.normal!==void 0&&(et=2),C.morphAttributes.color!==void 0&&(et=3);let V,j,ct,vt;if(H){const Ue=cn[H];V=Ue.vertexShader,j=Ue.fragmentShader}else V=M.vertexShader,j=M.fragmentShader,l.update(M),ct=l.getVertexShaderID(M),vt=l.getFragmentShaderID(M);const gt=i.getRenderTarget(),Nt=K.isInstancedMesh===!0,Ot=K.isBatchedMesh===!0,Ct=!!M.map,Zt=!!M.matcap,O=!!X,he=!!M.aoMap,At=!!M.lightMap,xt=!!M.bumpMap,ht=!!M.normalMap,Wt=!!M.displacementMap,Lt=!!M.emissiveMap,w=!!M.metalnessMap,y=!!M.roughnessMap,k=M.anisotropy>0,J=M.clearcoat>0,$=M.iridescence>0,Q=M.sheen>0,pt=M.transmission>0,rt=k&&!!M.anisotropyMap,mt=J&&!!M.clearcoatMap,wt=J&&!!M.clearcoatNormalMap,kt=J&&!!M.clearcoatRoughnessMap,Z=$&&!!M.iridescenceMap,Qt=$&&!!M.iridescenceThicknessMap,bt=Q&&!!M.sheenColorMap,Mt=Q&&!!M.sheenRoughnessMap,Et=!!M.specularMap,ft=!!M.specularColorMap,Ft=!!M.specularIntensityMap,te=pt&&!!M.transmissionMap,oe=pt&&!!M.thicknessMap,Gt=!!M.gradientMap,it=!!M.alphaMap,L=M.alphaTest>0,ot=!!M.alphaHash,lt=!!M.extensions,Rt=!!C.attributes.uv1,Tt=!!C.attributes.uv2,ie=!!C.attributes.uv3;let ee=On;return M.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ee=i.toneMapping),{isWebGL2:h,shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:V,fragmentShader:j,defines:M.defines,customVertexShaderID:ct,customFragmentShaderID:vt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ot,instancing:Nt,instancingColor:Nt&&K.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:fn,map:Ct,matcap:Zt,envMap:O,envMapMode:O&&X.mapping,envMapCubeUVHeight:N,aoMap:he,lightMap:At,bumpMap:xt,normalMap:ht,displacementMap:d&&Wt,emissiveMap:Lt,normalMapObjectSpace:ht&&M.normalMapType===du,normalMapTangentSpace:ht&&M.normalMapType===uu,metalnessMap:w,roughnessMap:y,anisotropy:k,anisotropyMap:rt,clearcoat:J,clearcoatMap:mt,clearcoatNormalMap:wt,clearcoatRoughnessMap:kt,iridescence:$,iridescenceMap:Z,iridescenceThicknessMap:Qt,sheen:Q,sheenColorMap:bt,sheenRoughnessMap:Mt,specularMap:Et,specularColorMap:ft,specularIntensityMap:Ft,transmission:pt,transmissionMap:te,thicknessMap:oe,gradientMap:Gt,opaque:M.transparent===!1&&M.blending===Ni,alphaMap:it,alphaTest:L,alphaHash:ot,combine:M.combine,mapUv:Ct&&_(M.map.channel),aoMapUv:he&&_(M.aoMap.channel),lightMapUv:At&&_(M.lightMap.channel),bumpMapUv:xt&&_(M.bumpMap.channel),normalMapUv:ht&&_(M.normalMap.channel),displacementMapUv:Wt&&_(M.displacementMap.channel),emissiveMapUv:Lt&&_(M.emissiveMap.channel),metalnessMapUv:w&&_(M.metalnessMap.channel),roughnessMapUv:y&&_(M.roughnessMap.channel),anisotropyMapUv:rt&&_(M.anisotropyMap.channel),clearcoatMapUv:mt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:wt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(M.sheenRoughnessMap.channel),specularMapUv:Et&&_(M.specularMap.channel),specularColorMapUv:ft&&_(M.specularColorMap.channel),specularIntensityMapUv:Ft&&_(M.specularIntensityMap.channel),transmissionMapUv:te&&_(M.transmissionMap.channel),thicknessMapUv:oe&&_(M.thicknessMap.channel),alphaMapUv:it&&_(M.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(ht||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,vertexUv1s:Rt,vertexUv2s:Tt,vertexUv3s:ie,pointsUvs:K.isPoints===!0&&!!C.attributes.uv&&(Ct||it),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:et,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ct&&M.map.isVideoTexture===!0&&re.getTransfer(M.map.colorSpace)===le,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===je,flipSided:M.side===He,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:lt&&M.extensions.derivatives===!0,extensionFragDepth:lt&&M.extensions.fragDepth===!0,extensionDrawBuffers:lt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:lt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const G in M.defines)A.push(G),A.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(x(A,M),v(A,M),A.push(i.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function x(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function v(M,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){const A=g[M.type];let G;if(A){const q=cn[A];G=Ju.clone(q.uniforms)}else G=M.uniforms;return G}function R(M,A){let G;for(let q=0,K=c.length;q<K;q++){const D=c[q];if(D.cacheKey===A){G=D,++G.usedTimes;break}}return G===void 0&&(G=new p0(i,A,M,r),c.push(G)),G}function T(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function b(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:I}}function x0(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function M0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ml(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||M0),n.length>1&&n.sort(d||xl),s.length>1&&s.sort(d||xl)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function y0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ml,i.set(n,[o])):s>=r.length?(o=new Ml,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function S0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ut};break;case"SpotLight":e={position:new U,direction:new U,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function b0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let E0=0;function T0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function w0(i,t){const e=new S0,n=b0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);const r=new U,o=new _e,a=new _e;function l(h,u){let d=0,p=0,g=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let _=0,m=0,f=0,x=0,v=0,S=0,R=0,T=0,b=0,I=0,M=0;h.sort(T0);const A=u===!0?Math.PI:1;for(let q=0,K=h.length;q<K;q++){const D=h[q],C=D.color,P=D.intensity,X=D.distance,N=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=C.r*P*A,p+=C.g*P*A,g+=C.b*P*A;else if(D.isLightProbe){for(let H=0;H<9;H++)s.probe[H].addScaledVector(D.sh.coefficients[H],P);M++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const Y=D.shadow,tt=n.get(D);tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,s.directionalShadow[_]=tt,s.directionalShadowMap[_]=N,s.directionalShadowMatrix[_]=D.shadow.matrix,S++}s.directional[_]=H,_++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(C).multiplyScalar(P*A),H.distance=X,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,s.spot[f]=H;const Y=D.shadow;if(D.map&&(s.spotLightMap[b]=D.map,b++,Y.updateMatrices(D),D.castShadow&&I++),s.spotLightMatrix[f]=Y.matrix,D.castShadow){const tt=n.get(D);tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,s.spotShadow[f]=tt,s.spotShadowMap[f]=N,T++}f++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(C).multiplyScalar(P),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),s.rectArea[x]=H,x++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*A),H.distance=D.distance,H.decay=D.decay,D.castShadow){const Y=D.shadow,tt=n.get(D);tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,tt.shadowCameraNear=Y.camera.near,tt.shadowCameraFar=Y.camera.far,s.pointShadow[m]=tt,s.pointShadowMap[m]=N,s.pointShadowMatrix[m]=D.shadow.matrix,R++}s.point[m]=H,m++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(P*A),H.groundColor.copy(D.groundColor).multiplyScalar(P*A),s.hemi[v]=H,v++}}x>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;const G=s.hash;(G.directionalLength!==_||G.pointLength!==m||G.spotLength!==f||G.rectAreaLength!==x||G.hemiLength!==v||G.numDirectionalShadows!==S||G.numPointShadows!==R||G.numSpotShadows!==T||G.numSpotMaps!==b||G.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=x,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=T+b-I,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=M,G.directionalLength=_,G.pointLength=m,G.spotLength=f,G.rectAreaLength=x,G.hemiLength=v,G.numDirectionalShadows=S,G.numPointShadows=R,G.numSpotShadows=T,G.numSpotMaps=b,G.numLightProbes=M,s.version=E0++)}function c(h,u){let d=0,p=0,g=0,_=0,m=0;const f=u.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const S=h[x];if(S.isDirectionalLight){const R=s.directional[d];R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),d++}else if(S.isSpotLight){const R=s.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const R=s.rectArea[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const R=s.point[p];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const R=s.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function yl(i,t){const e=new w0(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function A0(i,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new yl(i,t),e.set(r,[l])):o>=a.length?(l=new yl(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}class R0 extends ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class C0 extends ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const L0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function D0(i,t,e){let n=new Cc;const s=new Jt,r=new Jt,o=new we,a=new R0({depthPacking:hu}),l=new C0,c={},h=e.maxTextureSize,u={[Bn]:He,[He]:Bn,[je]:je},d=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:L0,fragmentShader:P0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ee(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let f=this.type;this.render=function(T,b,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),A=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Fn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const K=f!==Mn&&this.type===Mn,D=f===Mn&&this.type!==Mn;for(let C=0,P=T.length;C<P;C++){const X=T[C],N=X.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const H=N.getFrameExtents();if(s.multiply(H),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,N.mapSize.y=r.y)),N.map===null||K===!0||D===!0){const tt=this.type!==Mn?{minFilter:fe,magFilter:fe}:{};N.map!==null&&N.map.dispose(),N.map=new ni(s.x,s.y,tt),N.map.texture.name=X.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const Y=N.getViewportCount();for(let tt=0;tt<Y;tt++){const et=N.getViewport(tt);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),q.viewport(o),N.updateMatrices(X,tt),n=N.getFrustum(),S(b,I,N.camera,X,this.type)}N.isPointLightShadow!==!0&&this.type===Mn&&x(N,I),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,A,G)};function x(T,b){const I=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ni(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(b,null,I,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(b,null,I,p,_,null)}function v(T,b,I,M){let A=null;const G=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(G!==void 0)A=G;else if(A=I.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const q=A.uuid,K=b.uuid;let D=c[q];D===void 0&&(D={},c[q]=D);let C=D[K];C===void 0&&(C=A.clone(),D[K]=C,b.addEventListener("dispose",R)),A=C}if(A.visible=b.visible,A.wireframe=b.wireframe,M===Mn?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:u[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,I.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const q=i.properties.get(A);q.light=I}return A}function S(T,b,I,M,A){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===Mn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const K=t.update(T),D=T.material;if(Array.isArray(D)){const C=K.groups;for(let P=0,X=C.length;P<X;P++){const N=C[P],H=D[N.materialIndex];if(H&&H.visible){const Y=v(T,H,M,A);T.onBeforeShadow(i,T,b,I,K,Y,N),i.renderBufferDirect(I,null,K,Y,T,N),T.onAfterShadow(i,T,b,I,K,Y,N)}}}else if(D.visible){const C=v(T,D,M,A);T.onBeforeShadow(i,T,b,I,K,C,null),i.renderBufferDirect(I,null,K,C,T,null),T.onAfterShadow(i,T,b,I,K,C,null)}}const q=T.children;for(let K=0,D=q.length;K<D;K++)S(q[K],b,I,M,A)}function R(T){T.target.removeEventListener("dispose",R);for(const I in c){const M=c[I],A=T.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function I0(i,t,e){const n=e.isWebGL2;function s(){let L=!1;const ot=new we;let lt=null;const Rt=new we(0,0,0,0);return{setMask:function(Tt){lt!==Tt&&!L&&(i.colorMask(Tt,Tt,Tt,Tt),lt=Tt)},setLocked:function(Tt){L=Tt},setClear:function(Tt,ie,ee,Me,Ue){Ue===!0&&(Tt*=Me,ie*=Me,ee*=Me),ot.set(Tt,ie,ee,Me),Rt.equals(ot)===!1&&(i.clearColor(Tt,ie,ee,Me),Rt.copy(ot))},reset:function(){L=!1,lt=null,Rt.set(-1,0,0,0)}}}function r(){let L=!1,ot=null,lt=null,Rt=null;return{setTest:function(Tt){Tt?Ot(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(Tt){ot!==Tt&&!L&&(i.depthMask(Tt),ot=Tt)},setFunc:function(Tt){if(lt!==Tt){switch(Tt){case Bh:i.depthFunc(i.NEVER);break;case zh:i.depthFunc(i.ALWAYS);break;case Hh:i.depthFunc(i.LESS);break;case lr:i.depthFunc(i.LEQUAL);break;case Gh:i.depthFunc(i.EQUAL);break;case Vh:i.depthFunc(i.GEQUAL);break;case Wh:i.depthFunc(i.GREATER);break;case Xh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=Tt}},setLocked:function(Tt){L=Tt},setClear:function(Tt){Rt!==Tt&&(i.clearDepth(Tt),Rt=Tt)},reset:function(){L=!1,ot=null,lt=null,Rt=null}}}function o(){let L=!1,ot=null,lt=null,Rt=null,Tt=null,ie=null,ee=null,Me=null,Ue=null;return{setTest:function(ae){L||(ae?Ot(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(ae){ot!==ae&&!L&&(i.stencilMask(ae),ot=ae)},setFunc:function(ae,Ne,on){(lt!==ae||Rt!==Ne||Tt!==on)&&(i.stencilFunc(ae,Ne,on),lt=ae,Rt=Ne,Tt=on)},setOp:function(ae,Ne,on){(ie!==ae||ee!==Ne||Me!==on)&&(i.stencilOp(ae,Ne,on),ie=ae,ee=Ne,Me=on)},setLocked:function(ae){L=ae},setClear:function(ae){Ue!==ae&&(i.clearStencil(ae),Ue=ae)},reset:function(){L=!1,ot=null,lt=null,Rt=null,Tt=null,ie=null,ee=null,Me=null,Ue=null}}}const a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,S=null,R=null,T=null,b=null,I=null,M=new Ut(0,0,0),A=0,G=!1,q=null,K=null,D=null,C=null,P=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,H=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Y)[1]),N=H>=1):Y.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),N=H>=2);let tt=null,et={};const V=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ct=new we().fromArray(V),vt=new we().fromArray(j);function gt(L,ot,lt,Rt){const Tt=new Uint8Array(4),ie=i.createTexture();i.bindTexture(L,ie),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<lt;ee++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(ot,0,i.RGBA,1,1,Rt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(ot+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return ie}const Nt={};Nt[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),Nt[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Nt[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Nt[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ot(i.DEPTH_TEST),l.setFunc(lr),Lt(!1),w(eo),Ot(i.CULL_FACE),ht(Fn);function Ot(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function Ct(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function Zt(L,ot){return p[L]!==ot?(i.bindFramebuffer(L,ot),p[L]=ot,n&&(L===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ot),L===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ot)),!0):!1}function O(L,ot){let lt=_,Rt=!1;if(L)if(lt=g.get(ot),lt===void 0&&(lt=[],g.set(ot,lt)),L.isWebGLMultipleRenderTargets){const Tt=L.texture;if(lt.length!==Tt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,ee=Tt.length;ie<ee;ie++)lt[ie]=i.COLOR_ATTACHMENT0+ie;lt.length=Tt.length,Rt=!0}}else lt[0]!==i.COLOR_ATTACHMENT0&&(lt[0]=i.COLOR_ATTACHMENT0,Rt=!0);else lt[0]!==i.BACK&&(lt[0]=i.BACK,Rt=!0);Rt&&(e.isWebGL2?i.drawBuffers(lt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(lt))}function he(L){return m!==L?(i.useProgram(L),m=L,!0):!1}const At={[jn]:i.FUNC_ADD,[Eh]:i.FUNC_SUBTRACT,[Th]:i.FUNC_REVERSE_SUBTRACT};if(n)At[ro]=i.MIN,At[ao]=i.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(At[ro]=L.MIN_EXT,At[ao]=L.MAX_EXT)}const xt={[wh]:i.ZERO,[Ah]:i.ONE,[Rh]:i.SRC_COLOR,[pa]:i.SRC_ALPHA,[Uh]:i.SRC_ALPHA_SATURATE,[Dh]:i.DST_COLOR,[Lh]:i.DST_ALPHA,[Ch]:i.ONE_MINUS_SRC_COLOR,[ma]:i.ONE_MINUS_SRC_ALPHA,[Ih]:i.ONE_MINUS_DST_COLOR,[Ph]:i.ONE_MINUS_DST_ALPHA,[Nh]:i.CONSTANT_COLOR,[Fh]:i.ONE_MINUS_CONSTANT_COLOR,[Oh]:i.CONSTANT_ALPHA,[kh]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(L,ot,lt,Rt,Tt,ie,ee,Me,Ue,ae){if(L===Fn){f===!0&&(Ct(i.BLEND),f=!1);return}if(f===!1&&(Ot(i.BLEND),f=!0),L!==bh){if(L!==x||ae!==G){if((v!==jn||T!==jn)&&(i.blendEquation(i.FUNC_ADD),v=jn,T=jn),ae)switch(L){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case no:i.blendFunc(i.ONE,i.ONE);break;case io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case so:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case no:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case so:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,R=null,b=null,I=null,M.set(0,0,0),A=0,x=L,G=ae}return}Tt=Tt||ot,ie=ie||lt,ee=ee||Rt,(ot!==v||Tt!==T)&&(i.blendEquationSeparate(At[ot],At[Tt]),v=ot,T=Tt),(lt!==S||Rt!==R||ie!==b||ee!==I)&&(i.blendFuncSeparate(xt[lt],xt[Rt],xt[ie],xt[ee]),S=lt,R=Rt,b=ie,I=ee),(Me.equals(M)===!1||Ue!==A)&&(i.blendColor(Me.r,Me.g,Me.b,Ue),M.copy(Me),A=Ue),x=L,G=!1}function Wt(L,ot){L.side===je?Ct(i.CULL_FACE):Ot(i.CULL_FACE);let lt=L.side===He;ot&&(lt=!lt),Lt(lt),L.blending===Ni&&L.transparent===!1?ht(Fn):ht(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Rt=L.stencilWrite;c.setTest(Rt),Rt&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),k(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ot(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(L){q!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),q=L)}function w(L){L!==Mh?(Ot(i.CULL_FACE),L!==K&&(L===eo?i.cullFace(i.BACK):L===yh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),K=L}function y(L){L!==D&&(N&&i.lineWidth(L),D=L)}function k(L,ot,lt){L?(Ot(i.POLYGON_OFFSET_FILL),(C!==ot||P!==lt)&&(i.polygonOffset(ot,lt),C=ot,P=lt)):Ct(i.POLYGON_OFFSET_FILL)}function J(L){L?Ot(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function $(L){L===void 0&&(L=i.TEXTURE0+X-1),tt!==L&&(i.activeTexture(L),tt=L)}function Q(L,ot,lt){lt===void 0&&(tt===null?lt=i.TEXTURE0+X-1:lt=tt);let Rt=et[lt];Rt===void 0&&(Rt={type:void 0,texture:void 0},et[lt]=Rt),(Rt.type!==L||Rt.texture!==ot)&&(tt!==lt&&(i.activeTexture(lt),tt=lt),i.bindTexture(L,ot||Nt[L]),Rt.type=L,Rt.texture=ot)}function pt(){const L=et[tt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function kt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Qt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ft(L){ct.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ct.copy(L))}function te(L){vt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),vt.copy(L))}function oe(L,ot){let lt=u.get(ot);lt===void 0&&(lt=new WeakMap,u.set(ot,lt));let Rt=lt.get(L);Rt===void 0&&(Rt=i.getUniformBlockIndex(ot,L.name),lt.set(L,Rt))}function Gt(L,ot){const Rt=u.get(ot).get(L);h.get(ot)!==Rt&&(i.uniformBlockBinding(ot,Rt,L.__bindingPointIndex),h.set(ot,Rt))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},tt=null,et={},p={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,S=null,R=null,T=null,b=null,I=null,M=new Ut(0,0,0),A=0,G=!1,q=null,K=null,D=null,C=null,P=null,ct.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ot,disable:Ct,bindFramebuffer:Zt,drawBuffers:O,useProgram:he,setBlending:ht,setMaterial:Wt,setFlipSided:Lt,setCullFace:w,setLineWidth:y,setPolygonOffset:k,setScissorTest:J,activeTexture:$,bindTexture:Q,unbindTexture:pt,compressedTexImage2D:rt,compressedTexImage3D:mt,texImage2D:Et,texImage3D:ft,updateUBOMapping:oe,uniformBlockBinding:Gt,texStorage2D:bt,texStorage3D:Mt,texSubImage2D:wt,texSubImage3D:kt,compressedTexSubImage2D:Z,compressedTexSubImage3D:Qt,scissor:Ft,viewport:te,reset:it}}function U0(i,t,e,n,s,r,o){const a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return p?new OffscreenCanvas(w,y):mr("canvas")}function _(w,y,k,J){let $=1;if((w.width>J||w.height>J)&&($=J/Math.max(w.width,w.height)),$<1||y===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const Q=y?pr:Math.floor,pt=Q($*w.width),rt=Q($*w.height);u===void 0&&(u=g(pt,rt));const mt=k?g(pt,rt):u;return mt.width=pt,mt.height=rt,mt.getContext("2d").drawImage(w,0,0,pt,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+pt+"x"+rt+")."),mt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return ya(w.width)&&ya(w.height)}function f(w){return a?!1:w.wrapS!==tn||w.wrapT!==tn||w.minFilter!==fe&&w.minFilter!==$e}function x(w,y){return w.generateMipmaps&&y&&w.minFilter!==fe&&w.minFilter!==$e}function v(w){i.generateMipmap(w)}function S(w,y,k,J,$=!1){if(a===!1)return y;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Q=y;if(y===i.RED&&(k===i.FLOAT&&(Q=i.R32F),k===i.HALF_FLOAT&&(Q=i.R16F),k===i.UNSIGNED_BYTE&&(Q=i.R8)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.R8UI),k===i.UNSIGNED_SHORT&&(Q=i.R16UI),k===i.UNSIGNED_INT&&(Q=i.R32UI),k===i.BYTE&&(Q=i.R8I),k===i.SHORT&&(Q=i.R16I),k===i.INT&&(Q=i.R32I)),y===i.RG&&(k===i.FLOAT&&(Q=i.RG32F),k===i.HALF_FLOAT&&(Q=i.RG16F),k===i.UNSIGNED_BYTE&&(Q=i.RG8)),y===i.RGBA){const pt=$?hr:re.getTransfer(J);k===i.FLOAT&&(Q=i.RGBA32F),k===i.HALF_FLOAT&&(Q=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Q=pt===le?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function R(w,y,k){return x(w,k)===!0||w.isFramebufferTexture&&w.minFilter!==fe&&w.minFilter!==$e?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function T(w){return w===fe||w===oo||w===Pr?i.NEAREST:i.LINEAR}function b(w){const y=w.target;y.removeEventListener("dispose",b),M(y),y.isVideoTexture&&h.delete(y)}function I(w){const y=w.target;y.removeEventListener("dispose",I),G(y)}function M(w){const y=n.get(w);if(y.__webglInit===void 0)return;const k=w.source,J=d.get(k);if(J){const $=J[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&A(w),Object.keys(J).length===0&&d.delete(k)}n.remove(w)}function A(w){const y=n.get(w);i.deleteTexture(y.__webglTexture);const k=w.source,J=d.get(k);delete J[y.__cacheKey],o.memory.textures--}function G(w){const y=w.texture,k=n.get(w),J=n.get(y);if(J.__webglTexture!==void 0&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(k.__webglFramebuffer[$]))for(let Q=0;Q<k.__webglFramebuffer[$].length;Q++)i.deleteFramebuffer(k.__webglFramebuffer[$][Q]);else i.deleteFramebuffer(k.__webglFramebuffer[$]);k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[$])}else{if(Array.isArray(k.__webglFramebuffer))for(let $=0;$<k.__webglFramebuffer.length;$++)i.deleteFramebuffer(k.__webglFramebuffer[$]);else i.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let $=0;$<k.__webglColorRenderbuffer.length;$++)k.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[$]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let $=0,Q=y.length;$<Q;$++){const pt=n.get(y[$]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(y[$])}n.remove(y),n.remove(w)}let q=0;function K(){q=0}function D(){const w=q;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),q+=1,w}function C(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function P(w,y){const k=n.get(w);if(w.isVideoTexture&&Wt(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(k,w,y);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function X(w,y){const k=n.get(w);if(w.version>0&&k.__version!==w.version){ct(k,w,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function N(w,y){const k=n.get(w);if(w.version>0&&k.__version!==w.version){ct(k,w,y);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function H(w,y){const k=n.get(w);if(w.version>0&&k.__version!==w.version){vt(k,w,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}const Y={[cr]:i.REPEAT,[tn]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},tt={[fe]:i.NEAREST,[oo]:i.NEAREST_MIPMAP_NEAREST,[Pr]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[tu]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},et={[fu]:i.NEVER,[xu]:i.ALWAYS,[pu]:i.LESS,[_c]:i.LEQUAL,[mu]:i.EQUAL,[vu]:i.GEQUAL,[gu]:i.GREATER,[_u]:i.NOTEQUAL};function V(w,y,k){if(k?(i.texParameteri(w,i.TEXTURE_WRAP_S,Y[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Y[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Y[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,tt[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,tt[y.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==tn||y.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,T(y.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==fe&&y.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,et[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const J=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===fe||y.minFilter!==Pr&&y.minFilter!==ei||y.type===Nn&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===fs&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(w,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function j(w,y){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",b));const J=y.source;let $=d.get(J);$===void 0&&($={},d.set(J,$));const Q=C(y);if(Q!==w.__cacheKey){$[Q]===void 0&&($[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),$[Q].usedTimes++;const pt=$[w.__cacheKey];pt!==void 0&&($[w.__cacheKey].usedTimes--,pt.usedTimes===0&&A(y)),w.__cacheKey=Q,w.__webglTexture=$[Q].texture}return k}function ct(w,y,k){let J=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=i.TEXTURE_3D);const $=j(w,y),Q=y.source;e.bindTexture(J,w.__webglTexture,i.TEXTURE0+k);const pt=n.get(Q);if(Q.version!==pt.__version||$===!0){e.activeTexture(i.TEXTURE0+k);const rt=re.getPrimaries(re.workingColorSpace),mt=y.colorSpace===Pe?null:re.getPrimaries(y.colorSpace),wt=y.colorSpace===Pe||rt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const kt=f(y)&&m(y.image)===!1;let Z=_(y.image,kt,!1,s.maxTextureSize);Z=Lt(y,Z);const Qt=m(Z)||a,bt=r.convert(y.format,y.colorSpace);let Mt=r.convert(y.type),Et=S(y.internalFormat,bt,Mt,y.colorSpace,y.isVideoTexture);V(J,y,Qt);let ft;const Ft=y.mipmaps,te=a&&y.isVideoTexture!==!0&&Et!==mc,oe=pt.__version===void 0||$===!0,Gt=R(y,Z,Qt);if(y.isDepthTexture)Et=i.DEPTH_COMPONENT,a?y.type===Nn?Et=i.DEPTH_COMPONENT32F:y.type===Un?Et=i.DEPTH_COMPONENT24:y.type===Jn?Et=i.DEPTH24_STENCIL8:Et=i.DEPTH_COMPONENT16:y.type===Nn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Qn&&Et===i.DEPTH_COMPONENT&&y.type!==Ba&&y.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Un,Mt=r.convert(y.type)),y.format===Vi&&Et===i.DEPTH_COMPONENT&&(Et=i.DEPTH_STENCIL,y.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Jn,Mt=r.convert(y.type))),oe&&(te?e.texStorage2D(i.TEXTURE_2D,1,Et,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,Et,Z.width,Z.height,0,bt,Mt,null));else if(y.isDataTexture)if(Ft.length>0&&Qt){te&&oe&&e.texStorage2D(i.TEXTURE_2D,Gt,Et,Ft[0].width,Ft[0].height);for(let it=0,L=Ft.length;it<L;it++)ft=Ft[it],te?e.texSubImage2D(i.TEXTURE_2D,it,0,0,ft.width,ft.height,bt,Mt,ft.data):e.texImage2D(i.TEXTURE_2D,it,Et,ft.width,ft.height,0,bt,Mt,ft.data);y.generateMipmaps=!1}else te?(oe&&e.texStorage2D(i.TEXTURE_2D,Gt,Et,Z.width,Z.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,bt,Mt,Z.data)):e.texImage2D(i.TEXTURE_2D,0,Et,Z.width,Z.height,0,bt,Mt,Z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){te&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Et,Ft[0].width,Ft[0].height,Z.depth);for(let it=0,L=Ft.length;it<L;it++)ft=Ft[it],y.format!==ze?bt!==null?te?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,Z.depth,bt,ft.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Et,ft.width,ft.height,Z.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,Z.depth,bt,Mt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Et,ft.width,ft.height,Z.depth,0,bt,Mt,ft.data)}else{te&&oe&&e.texStorage2D(i.TEXTURE_2D,Gt,Et,Ft[0].width,Ft[0].height);for(let it=0,L=Ft.length;it<L;it++)ft=Ft[it],y.format!==ze?bt!==null?te?e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,ft.width,ft.height,bt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Et,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage2D(i.TEXTURE_2D,it,0,0,ft.width,ft.height,bt,Mt,ft.data):e.texImage2D(i.TEXTURE_2D,it,Et,ft.width,ft.height,0,bt,Mt,ft.data)}else if(y.isDataArrayTexture)te?(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Et,Z.width,Z.height,Z.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,bt,Mt,Z.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,Z.width,Z.height,Z.depth,0,bt,Mt,Z.data);else if(y.isData3DTexture)te?(oe&&e.texStorage3D(i.TEXTURE_3D,Gt,Et,Z.width,Z.height,Z.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,bt,Mt,Z.data)):e.texImage3D(i.TEXTURE_3D,0,Et,Z.width,Z.height,Z.depth,0,bt,Mt,Z.data);else if(y.isFramebufferTexture){if(oe)if(te)e.texStorage2D(i.TEXTURE_2D,Gt,Et,Z.width,Z.height);else{let it=Z.width,L=Z.height;for(let ot=0;ot<Gt;ot++)e.texImage2D(i.TEXTURE_2D,ot,Et,it,L,0,bt,Mt,null),it>>=1,L>>=1}}else if(Ft.length>0&&Qt){te&&oe&&e.texStorage2D(i.TEXTURE_2D,Gt,Et,Ft[0].width,Ft[0].height);for(let it=0,L=Ft.length;it<L;it++)ft=Ft[it],te?e.texSubImage2D(i.TEXTURE_2D,it,0,0,bt,Mt,ft):e.texImage2D(i.TEXTURE_2D,it,Et,bt,Mt,ft);y.generateMipmaps=!1}else te?(oe&&e.texStorage2D(i.TEXTURE_2D,Gt,Et,Z.width,Z.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Mt,Z)):e.texImage2D(i.TEXTURE_2D,0,Et,bt,Mt,Z);x(y,Qt)&&v(J),pt.__version=Q.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function vt(w,y,k){if(y.image.length!==6)return;const J=j(w,y),$=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+k);const Q=n.get($);if($.version!==Q.__version||J===!0){e.activeTexture(i.TEXTURE0+k);const pt=re.getPrimaries(re.workingColorSpace),rt=y.colorSpace===Pe?null:re.getPrimaries(y.colorSpace),mt=y.colorSpace===Pe||pt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const wt=y.isCompressedTexture||y.image[0].isCompressedTexture,kt=y.image[0]&&y.image[0].isDataTexture,Z=[];for(let it=0;it<6;it++)!wt&&!kt?Z[it]=_(y.image[it],!1,!0,s.maxCubemapSize):Z[it]=kt?y.image[it].image:y.image[it],Z[it]=Lt(y,Z[it]);const Qt=Z[0],bt=m(Qt)||a,Mt=r.convert(y.format,y.colorSpace),Et=r.convert(y.type),ft=S(y.internalFormat,Mt,Et,y.colorSpace),Ft=a&&y.isVideoTexture!==!0,te=Q.__version===void 0||J===!0;let oe=R(y,Qt,bt);V(i.TEXTURE_CUBE_MAP,y,bt);let Gt;if(wt){Ft&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,oe,ft,Qt.width,Qt.height);for(let it=0;it<6;it++){Gt=Z[it].mipmaps;for(let L=0;L<Gt.length;L++){const ot=Gt[L];y.format!==ze?Mt!==null?Ft?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,L,0,0,ot.width,ot.height,Mt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,L,ft,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,L,0,0,ot.width,ot.height,Mt,Et,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,L,ft,ot.width,ot.height,0,Mt,Et,ot.data)}}}else{Gt=y.mipmaps,Ft&&te&&(Gt.length>0&&oe++,e.texStorage2D(i.TEXTURE_CUBE_MAP,oe,ft,Z[0].width,Z[0].height));for(let it=0;it<6;it++)if(kt){Ft?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Z[it].width,Z[it].height,Mt,Et,Z[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ft,Z[it].width,Z[it].height,0,Mt,Et,Z[it].data);for(let L=0;L<Gt.length;L++){const lt=Gt[L].image[it].image;Ft?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,L+1,0,0,lt.width,lt.height,Mt,Et,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,L+1,ft,lt.width,lt.height,0,Mt,Et,lt.data)}}else{Ft?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Mt,Et,Z[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ft,Mt,Et,Z[it]);for(let L=0;L<Gt.length;L++){const ot=Gt[L];Ft?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,L+1,0,0,Mt,Et,ot.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,L+1,ft,Mt,Et,ot.image[it])}}}x(y,bt)&&v(i.TEXTURE_CUBE_MAP),Q.__version=$.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function gt(w,y,k,J,$,Q){const pt=r.convert(k.format,k.colorSpace),rt=r.convert(k.type),mt=S(k.internalFormat,pt,rt,k.colorSpace);if(!n.get(y).__hasExternalTextures){const kt=Math.max(1,y.width>>Q),Z=Math.max(1,y.height>>Q);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,Q,mt,kt,Z,y.depth,0,pt,rt,null):e.texImage2D($,Q,mt,kt,Z,0,pt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),ht(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,$,n.get(k).__webglTexture,0,xt(y)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,$,n.get(k).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(w,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer&&!y.stencilBuffer){let J=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(k||ht(y)){const $=y.depthTexture;$&&$.isDepthTexture&&($.type===Nn?J=i.DEPTH_COMPONENT32F:$.type===Un&&(J=i.DEPTH_COMPONENT24));const Q=xt(y);ht(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,J,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,J,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,J,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(y.depthBuffer&&y.stencilBuffer){const J=xt(y);k&&ht(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,y.width,y.height):ht(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const J=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let $=0;$<J.length;$++){const Q=J[$],pt=r.convert(Q.format,Q.colorSpace),rt=r.convert(Q.type),mt=S(Q.internalFormat,pt,rt,Q.colorSpace),wt=xt(y);k&&ht(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,mt,y.width,y.height):ht(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,mt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,mt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),P(y.depthTexture,0);const J=n.get(y.depthTexture).__webglTexture,$=xt(y);if(y.depthTexture.format===Qn)ht(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(y.depthTexture.format===Vi)ht(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ct(w){const y=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ot(y.__webglFramebuffer,w)}else if(k){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]=i.createRenderbuffer(),Nt(y.__webglDepthbuffer[J],w,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Nt(y.__webglDepthbuffer,w,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(w,y,k){const J=n.get(w);y!==void 0&&gt(J.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ct(w)}function O(w){const y=w.texture,k=n.get(w),J=n.get(y);w.addEventListener("dispose",I),w.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=y.version,o.memory.textures++);const $=w.isWebGLCubeRenderTarget===!0,Q=w.isWebGLMultipleRenderTargets===!0,pt=m(w)||a;if($){k.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[rt]=[];for(let mt=0;mt<y.mipmaps.length;mt++)k.__webglFramebuffer[rt][mt]=i.createFramebuffer()}else k.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let rt=0;rt<y.mipmaps.length;rt++)k.__webglFramebuffer[rt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Q)if(s.drawBuffers){const rt=w.texture;for(let mt=0,wt=rt.length;mt<wt;mt++){const kt=n.get(rt[mt]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&ht(w)===!1){const rt=Q?y:[y];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let mt=0;mt<rt.length;mt++){const wt=rt[mt];k.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[mt]);const kt=r.convert(wt.format,wt.colorSpace),Z=r.convert(wt.type),Qt=S(wt.internalFormat,kt,Z,wt.colorSpace,w.isXRRenderTarget===!0),bt=xt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,Qt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,k.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Nt(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),V(i.TEXTURE_CUBE_MAP,y,pt);for(let rt=0;rt<6;rt++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)gt(k.__webglFramebuffer[rt][mt],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt);else gt(k.__webglFramebuffer[rt],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);x(y,pt)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){const rt=w.texture;for(let mt=0,wt=rt.length;mt<wt;mt++){const kt=rt[mt],Z=n.get(kt);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture),V(i.TEXTURE_2D,kt,pt),gt(k.__webglFramebuffer,w,kt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),x(kt,pt)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?rt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(rt,J.__webglTexture),V(rt,y,pt),a&&y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)gt(k.__webglFramebuffer[mt],w,y,i.COLOR_ATTACHMENT0,rt,mt);else gt(k.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,rt,0);x(y,pt)&&v(rt),e.unbindTexture()}w.depthBuffer&&Ct(w)}function he(w){const y=m(w)||a,k=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let J=0,$=k.length;J<$;J++){const Q=k[J];if(x(Q,y)){const pt=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,rt=n.get(Q).__webglTexture;e.bindTexture(pt,rt),v(pt),e.unbindTexture()}}}function At(w){if(a&&w.samples>0&&ht(w)===!1){const y=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],k=w.width,J=w.height;let $=i.COLOR_BUFFER_BIT;const Q=[],pt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(w),mt=w.isWebGLMultipleRenderTargets===!0;if(mt)for(let wt=0;wt<y.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let wt=0;wt<y.length;wt++){Q.push(i.COLOR_ATTACHMENT0+wt),w.depthBuffer&&Q.push(pt);const kt=rt.__ignoreDepthValues!==void 0?rt.__ignoreDepthValues:!1;if(kt===!1&&(w.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),mt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[wt]),kt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[pt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[pt])),mt){const Z=n.get(y[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,k,J,0,0,k,J,$,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let wt=0;wt<y.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,rt.__webglColorRenderbuffer[wt]);const kt=n.get(y[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}}function xt(w){return Math.min(s.maxSamples,w.samples)}function ht(w){const y=n.get(w);return a&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Wt(w){const y=o.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function Lt(w,y){const k=w.colorSpace,J=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Ma||k!==fn&&k!==Pe&&(re.getTransfer(k)===le?a===!1?t.has("EXT_sRGB")===!0&&J===ze?(w.format=Ma,w.minFilter=$e,w.generateMipmaps=!1):y=xc.sRGBToLinear(y):(J!==ze||$!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}this.allocateTextureUnit=D,this.resetTextureUnits=K,this.setTexture2D=P,this.setTexture2DArray=X,this.setTexture3D=N,this.setTextureCube=H,this.rebindTextures=Zt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=ht}function N0(i,t,e){const n=e.isWebGL2;function s(r,o=Pe){let a;const l=re.getTransfer(o);if(r===kn)return i.UNSIGNED_BYTE;if(r===hc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===uc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===eu)return i.BYTE;if(r===nu)return i.SHORT;if(r===Ba)return i.UNSIGNED_SHORT;if(r===cc)return i.INT;if(r===Un)return i.UNSIGNED_INT;if(r===Nn)return i.FLOAT;if(r===fs)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===iu)return i.ALPHA;if(r===ze)return i.RGBA;if(r===su)return i.LUMINANCE;if(r===ru)return i.LUMINANCE_ALPHA;if(r===Qn)return i.DEPTH_COMPONENT;if(r===Vi)return i.DEPTH_STENCIL;if(r===Ma)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===au)return i.RED;if(r===dc)return i.RED_INTEGER;if(r===ou)return i.RG;if(r===fc)return i.RG_INTEGER;if(r===pc)return i.RGBA_INTEGER;if(r===Dr||r===Ir||r===Ur||r===Nr)if(l===le)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Dr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ir)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Nr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Dr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ir)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ur)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Nr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lo||r===co||r===ho||r===uo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===lo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===co)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ho)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===uo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===fo||r===po)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===fo)return l===le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===po)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===mo||r===go||r===_o||r===vo||r===xo||r===Mo||r===yo||r===So||r===bo||r===Eo||r===To||r===wo||r===Ao||r===Ro)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===mo)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===go)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_o)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vo)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xo)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Mo)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yo)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===So)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bo)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Eo)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===To)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wo)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ao)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ro)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fr||r===Co||r===Lo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Fr)return l===le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Co)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lu||r===Po||r===Do||r===Io)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Fr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Po)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Do)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Io)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Jn?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class F0 extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class dn extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O0={type:"move"};class ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new dn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class k0 extends Xi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=e.getContextAttributes();let m=null,f=null;const x=[],v=[],S=new Jt;let R=null;const T=new Qe;T.layers.enable(1),T.viewport=new we;const b=new Qe;b.layers.enable(2),b.viewport=new we;const I=[T,b],M=new F0;M.layers.enable(1),M.layers.enable(2);let A=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=x[V];return j===void 0&&(j=new ra,x[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=x[V];return j===void 0&&(j=new ra,x[V]=j),j.getGripSpace()},this.getHand=function(V){let j=x[V];return j===void 0&&(j=new ra,x[V]=j),j.getHandSpace()};function q(V){const j=v.indexOf(V.inputSource);if(j===-1)return;const ct=x[j];ct!==void 0&&(ct.update(V.inputSource,V.frame,c||o),ct.dispatchEvent({type:V.type,data:V.inputSource}))}function K(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",D);for(let V=0;V<x.length;V++){const j=v[V];j!==null&&(v[V]=null,x[V].disconnect(j))}A=null,G=null,t.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",K),s.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(S),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new ni(p.framebufferWidth,p.framebufferHeight,{format:ze,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,ct=null,vt=null;_.depth&&(vt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=_.stencil?Vi:Qn,ct=_.stencil?Jn:Un);const gt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(gt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new ni(d.textureWidth,d.textureHeight,{format:ze,type:kn,depthTexture:new Pc(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Nt=t.properties.get(f);Nt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(V){for(let j=0;j<V.removed.length;j++){const ct=V.removed[j],vt=v.indexOf(ct);vt>=0&&(v[vt]=null,x[vt].disconnect(ct))}for(let j=0;j<V.added.length;j++){const ct=V.added[j];let vt=v.indexOf(ct);if(vt===-1){for(let Nt=0;Nt<x.length;Nt++)if(Nt>=v.length){v.push(ct),vt=Nt;break}else if(v[Nt]===null){v[Nt]=ct,vt=Nt;break}if(vt===-1)break}const gt=x[vt];gt&&gt.connect(ct)}}const C=new U,P=new U;function X(V,j,ct){C.setFromMatrixPosition(j.matrixWorld),P.setFromMatrixPosition(ct.matrixWorld);const vt=C.distanceTo(P),gt=j.projectionMatrix.elements,Nt=ct.projectionMatrix.elements,Ot=gt[14]/(gt[10]-1),Ct=gt[14]/(gt[10]+1),Zt=(gt[9]+1)/gt[5],O=(gt[9]-1)/gt[5],he=(gt[8]-1)/gt[0],At=(Nt[8]+1)/Nt[0],xt=Ot*he,ht=Ot*At,Wt=vt/(-he+At),Lt=Wt*-he;j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Lt),V.translateZ(Wt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const w=Ot+Wt,y=Ct+Wt,k=xt-Lt,J=ht+(vt-Lt),$=Zt*Ct/y*w,Q=O*Ct/y*w;V.projectionMatrix.makePerspective(k,J,$,Q,w,y),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function N(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;M.near=b.near=T.near=V.near,M.far=b.far=T.far=V.far,(A!==M.near||G!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,G=M.far);const j=V.parent,ct=M.cameras;N(M,j);for(let vt=0;vt<ct.length;vt++)N(ct[vt],j);ct.length===2?X(M,T,b):M.projectionMatrix.copy(T.projectionMatrix),H(V,M,j)};function H(V,j,ct){ct===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(ct.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ps*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let Y=null;function tt(V,j){if(h=j.getViewerPose(c||o),g=j,h!==null){const ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let vt=!1;ct.length!==M.cameras.length&&(M.cameras.length=0,vt=!0);for(let gt=0;gt<ct.length;gt++){const Nt=ct[gt];let Ot=null;if(p!==null)Ot=p.getViewport(Nt);else{const Zt=u.getViewSubImage(d,Nt);Ot=Zt.viewport,gt===0&&(t.setRenderTargetTextures(f,Zt.colorTexture,d.ignoreDepthValues?void 0:Zt.depthStencilTexture),t.setRenderTarget(f))}let Ct=I[gt];Ct===void 0&&(Ct=new Qe,Ct.layers.enable(gt),Ct.viewport=new we,I[gt]=Ct),Ct.matrix.fromArray(Nt.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Nt.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),gt===0&&(M.matrix.copy(Ct.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),vt===!0&&M.cameras.push(Ct)}}for(let ct=0;ct<x.length;ct++){const vt=v[ct],gt=x[ct];vt!==null&&gt!==void 0&&gt.update(vt,j,c||o)}Y&&Y(V,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const et=new Lc;et.setAnimationLoop(tt),this.setAnimationLoop=function(V){Y=V},this.dispose=function(){}}}function B0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,wc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,x,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,x,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===He&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===He&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===He&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function z0(i,t,e,n){let s={},r={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const S=v.program;n.uniformBlockBinding(x,S)}function c(x,v){let S=s[x.id];S===void 0&&(g(x),S=h(x),s[x.id]=S,x.addEventListener("dispose",m));const R=v.program;n.updateUBOMapping(x,R);const T=t.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function h(x){const v=u();x.__bindingPointIndex=v;const S=i.createBuffer(),R=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=s[x.id],S=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,b=S.length;T<b;T++){const I=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,A=I.length;M<A;M++){const G=I[M];if(p(G,T,M,R)===!0){const q=G.__offset,K=Array.isArray(G.value)?G.value:[G.value];let D=0;for(let C=0;C<K.length;C++){const P=K[C],X=_(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,q+D,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,D),D+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,G.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,v,S,R){const T=x.value,b=v+"_"+S;if(R[b]===void 0)return typeof T=="number"||typeof T=="boolean"?R[b]=T:R[b]=T.clone(),!0;{const I=R[b];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[b]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(x){const v=x.uniforms;let S=0;const R=16;for(let b=0,I=v.length;b<I;b++){const M=Array.isArray(v[b])?v[b]:[v[b]];for(let A=0,G=M.length;A<G;A++){const q=M[A],K=Array.isArray(q.value)?q.value:[q.value];for(let D=0,C=K.length;D<C;D++){const P=K[D],X=_(P),N=S%R;N!==0&&R-N<X.boundary&&(S+=R-N),q.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=X.storage}}}const T=S%R;return T>0&&(S+=R-T),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Oc{constructor(t={}){const{canvas:e=Uu(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this._useLegacyLights=!1,this.toneMapping=On,this.toneMappingExposure=1;const v=this;let S=!1,R=0,T=0,b=null,I=-1,M=null;const A=new we,G=new we;let q=null;const K=new Ut(0);let D=0,C=e.width,P=e.height,X=1,N=null,H=null;const Y=new we(0,0,C,P),tt=new we(0,0,C,P);let et=!1;const V=new Cc;let j=!1,ct=!1,vt=null;const gt=new _e,Nt=new Jt,Ot=new U,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Zt(){return b===null?X:1}let O=n;function he(E,F){for(let z=0;z<E.length;z++){const W=E[z],B=e.getContext(W,F);if(B!==null)return B}return null}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ka}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",ot,!1),O===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),O=he(F,E),O===null)throw he(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let At,xt,ht,Wt,Lt,w,y,k,J,$,Q,pt,rt,mt,wt,kt,Z,Qt,bt,Mt,Et,ft,Ft,te;function oe(){At=new jp(O),xt=new Vp(O,At,t),At.init(xt),ft=new N0(O,At,xt),ht=new I0(O,At,xt),Wt=new Qp(O),Lt=new x0,w=new U0(O,At,ht,Lt,xt,ft,Wt),y=new Xp(v),k=new Kp(v),J=new rd(O,xt),Ft=new Hp(O,At,J,xt),$=new Zp(O,J,Wt,Ft),Q=new im(O,$,J,Wt),bt=new nm(O,xt,w),kt=new Wp(Lt),pt=new v0(v,y,k,At,xt,Ft,kt),rt=new B0(v,Lt),mt=new y0,wt=new A0(At,xt),Qt=new zp(v,y,k,ht,Q,d,l),Z=new D0(v,Q,xt),te=new z0(O,Wt,xt,ht),Mt=new Gp(O,At,Wt,xt),Et=new Jp(O,At,Wt,xt),Wt.programs=pt.programs,v.capabilities=xt,v.extensions=At,v.properties=Lt,v.renderLists=mt,v.shadowMap=Z,v.state=ht,v.info=Wt}oe();const Gt=new k0(v,O);this.xr=Gt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=At.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=At.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(C,P,!1))},this.getSize=function(E){return E.set(C,P)},this.setSize=function(E,F,z=!0){if(Gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,P=F,e.width=Math.floor(E*X),e.height=Math.floor(F*X),z===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(C*X,P*X).floor()},this.setDrawingBufferSize=function(E,F,z){C=E,P=F,X=z,e.width=Math.floor(E*z),e.height=Math.floor(F*z),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(Y)},this.setViewport=function(E,F,z,W){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,F,z,W),ht.viewport(A.copy(Y).multiplyScalar(X).floor())},this.getScissor=function(E){return E.copy(tt)},this.setScissor=function(E,F,z,W){E.isVector4?tt.set(E.x,E.y,E.z,E.w):tt.set(E,F,z,W),ht.scissor(G.copy(tt).multiplyScalar(X).floor())},this.getScissorTest=function(){return et},this.setScissorTest=function(E){ht.setScissorTest(et=E)},this.setOpaqueSort=function(E){N=E},this.setTransparentSort=function(E){H=E},this.getClearColor=function(E){return E.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor.apply(Qt,arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha.apply(Qt,arguments)},this.clear=function(E=!0,F=!0,z=!0){let W=0;if(E){let B=!1;if(b!==null){const dt=b.texture.format;B=dt===pc||dt===fc||dt===dc}if(B){const dt=b.texture.type,St=dt===kn||dt===Un||dt===Ba||dt===Jn||dt===hc||dt===uc,Pt=Qt.getClearColor(),It=Qt.getClearAlpha(),Yt=Pt.r,zt=Pt.g,Vt=Pt.b;St?(p[0]=Yt,p[1]=zt,p[2]=Vt,p[3]=It,O.clearBufferuiv(O.COLOR,0,p)):(g[0]=Yt,g[1]=zt,g[2]=Vt,g[3]=It,O.clearBufferiv(O.COLOR,0,g))}else W|=O.COLOR_BUFFER_BIT}F&&(W|=O.DEPTH_BUFFER_BIT),z&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),mt.dispose(),wt.dispose(),Lt.dispose(),y.dispose(),k.dispose(),Q.dispose(),Ft.dispose(),te.dispose(),pt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",Ue),Gt.removeEventListener("sessionend",ae),vt&&(vt.dispose(),vt=null),Ne.stop()};function it(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=Wt.autoReset,F=Z.enabled,z=Z.autoUpdate,W=Z.needsUpdate,B=Z.type;oe(),Wt.autoReset=E,Z.enabled=F,Z.autoUpdate=z,Z.needsUpdate=W,Z.type=B}function ot(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function lt(E){const F=E.target;F.removeEventListener("dispose",lt),Rt(F)}function Rt(E){Tt(E),Lt.remove(E)}function Tt(E){const F=Lt.get(E).programs;F!==void 0&&(F.forEach(function(z){pt.releaseProgram(z)}),E.isShaderMaterial&&pt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,z,W,B,dt){F===null&&(F=Ct);const St=B.isMesh&&B.matrixWorld.determinant()<0,Pt=mh(E,F,z,W,B);ht.setMaterial(W,St);let It=z.index,Yt=1;if(W.wireframe===!0){if(It=$.getWireframeAttribute(z),It===void 0)return;Yt=2}const zt=z.drawRange,Vt=z.attributes.position;let me=zt.start*Yt,We=(zt.start+zt.count)*Yt;dt!==null&&(me=Math.max(me,dt.start*Yt),We=Math.min(We,(dt.start+dt.count)*Yt)),It!==null?(me=Math.max(me,0),We=Math.min(We,It.count)):Vt!=null&&(me=Math.max(me,0),We=Math.min(We,Vt.count));const ye=We-me;if(ye<0||ye===1/0)return;Ft.setup(B,W,Pt,z,It);let pn,ue=Mt;if(It!==null&&(pn=J.get(It),ue=Et,ue.setIndex(pn)),B.isMesh)W.wireframe===!0?(ht.setLineWidth(W.wireframeLinewidth*Zt()),ue.setMode(O.LINES)):ue.setMode(O.TRIANGLES);else if(B.isLine){let $t=W.linewidth;$t===void 0&&($t=1),ht.setLineWidth($t*Zt()),B.isLineSegments?ue.setMode(O.LINES):B.isLineLoop?ue.setMode(O.LINE_LOOP):ue.setMode(O.LINE_STRIP)}else B.isPoints?ue.setMode(O.POINTS):B.isSprite&&ue.setMode(O.TRIANGLES);if(B.isBatchedMesh)ue.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ue.renderInstances(me,ye,B.count);else if(z.isInstancedBufferGeometry){const $t=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,wr=Math.min(z.instanceCount,$t);ue.renderInstances(me,ye,wr)}else ue.render(me,ye)};function ie(E,F,z){E.transparent===!0&&E.side===je&&E.forceSinglePass===!1?(E.side=He,E.needsUpdate=!0,vs(E,F,z),E.side=Bn,E.needsUpdate=!0,vs(E,F,z),E.side=je):vs(E,F,z)}this.compile=function(E,F,z=null){z===null&&(z=E),m=wt.get(z),m.init(),x.push(m),z.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),E!==z&&E.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(v._useLegacyLights);const W=new Set;return E.traverse(function(B){const dt=B.material;if(dt)if(Array.isArray(dt))for(let St=0;St<dt.length;St++){const Pt=dt[St];ie(Pt,z,B),W.add(Pt)}else ie(dt,z,B),W.add(dt)}),x.pop(),m=null,W},this.compileAsync=function(E,F,z=null){const W=this.compile(E,F,z);return new Promise(B=>{function dt(){if(W.forEach(function(St){Lt.get(St).currentProgram.isReady()&&W.delete(St)}),W.size===0){B(E);return}setTimeout(dt,10)}At.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let ee=null;function Me(E){ee&&ee(E)}function Ue(){Ne.stop()}function ae(){Ne.start()}const Ne=new Lc;Ne.setAnimationLoop(Me),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(E){ee=E,Gt.setAnimationLoop(E),E===null?Ne.stop():Ne.start()},Gt.addEventListener("sessionstart",Ue),Gt.addEventListener("sessionend",ae),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(F),F=Gt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,F,b),m=wt.get(E,x.length),m.init(),x.push(m),gt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),V.setFromProjectionMatrix(gt),ct=this.localClippingEnabled,j=kt.init(this.clippingPlanes,ct),_=mt.get(E,f.length),_.init(),f.push(_),on(E,F,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(N,H),this.info.render.frame++,j===!0&&kt.beginShadows();const z=m.state.shadowsArray;if(Z.render(z,E,F),j===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qt.render(_,E),m.setupLights(v._useLegacyLights),F.isArrayCamera){const W=F.cameras;for(let B=0,dt=W.length;B<dt;B++){const St=W[B];$a(_,E,St,St.viewport)}}else $a(_,E,F);b!==null&&(w.updateMultisampleRenderTarget(b),w.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(v,E,F),Ft.resetDefaultState(),I=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function on(E,F,z,W){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){W&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(gt);const St=Q.update(E),Pt=E.material;Pt.visible&&_.push(E,St,Pt,z,Ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||V.intersectsObject(E))){const St=Q.update(E),Pt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ot.copy(St.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(gt)),Array.isArray(Pt)){const It=St.groups;for(let Yt=0,zt=It.length;Yt<zt;Yt++){const Vt=It[Yt],me=Pt[Vt.materialIndex];me&&me.visible&&_.push(E,St,me,z,Ot.z,Vt)}}else Pt.visible&&_.push(E,St,Pt,z,Ot.z,null)}}const dt=E.children;for(let St=0,Pt=dt.length;St<Pt;St++)on(dt[St],F,z,W)}function $a(E,F,z,W){const B=E.opaque,dt=E.transmissive,St=E.transparent;m.setupLightsView(z),j===!0&&kt.setGlobalState(v.clippingPlanes,z),dt.length>0&&ph(B,dt,F,z),W&&ht.viewport(A.copy(W)),B.length>0&&_s(B,F,z),dt.length>0&&_s(dt,F,z),St.length>0&&_s(St,F,z),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function ph(E,F,z,W){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const dt=xt.isWebGL2;vt===null&&(vt=new ni(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")?fs:kn,minFilter:ei,samples:dt?4:0})),v.getDrawingBufferSize(Nt),dt?vt.setSize(Nt.x,Nt.y):vt.setSize(pr(Nt.x),pr(Nt.y));const St=v.getRenderTarget();v.setRenderTarget(vt),v.getClearColor(K),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Pt=v.toneMapping;v.toneMapping=On,_s(E,z,W),w.updateMultisampleRenderTarget(vt),w.updateRenderTargetMipmap(vt);let It=!1;for(let Yt=0,zt=F.length;Yt<zt;Yt++){const Vt=F[Yt],me=Vt.object,We=Vt.geometry,ye=Vt.material,pn=Vt.group;if(ye.side===je&&me.layers.test(W.layers)){const ue=ye.side;ye.side=He,ye.needsUpdate=!0,Ka(me,z,W,We,ye,pn),ye.side=ue,ye.needsUpdate=!0,It=!0}}It===!0&&(w.updateMultisampleRenderTarget(vt),w.updateRenderTargetMipmap(vt)),v.setRenderTarget(St),v.setClearColor(K,D),v.toneMapping=Pt}function _s(E,F,z){const W=F.isScene===!0?F.overrideMaterial:null;for(let B=0,dt=E.length;B<dt;B++){const St=E[B],Pt=St.object,It=St.geometry,Yt=W===null?St.material:W,zt=St.group;Pt.layers.test(z.layers)&&Ka(Pt,F,z,It,Yt,zt)}}function Ka(E,F,z,W,B,dt){E.onBeforeRender(v,F,z,W,B,dt),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(v,F,z,W,E,dt),B.transparent===!0&&B.side===je&&B.forceSinglePass===!1?(B.side=He,B.needsUpdate=!0,v.renderBufferDirect(z,F,W,B,E,dt),B.side=Bn,B.needsUpdate=!0,v.renderBufferDirect(z,F,W,B,E,dt),B.side=je):v.renderBufferDirect(z,F,W,B,E,dt),E.onAfterRender(v,F,z,W,B,dt)}function vs(E,F,z){F.isScene!==!0&&(F=Ct);const W=Lt.get(E),B=m.state.lights,dt=m.state.shadowsArray,St=B.state.version,Pt=pt.getParameters(E,B.state,dt,F,z),It=pt.getProgramCacheKey(Pt);let Yt=W.programs;W.environment=E.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(E.isMeshStandardMaterial?k:y).get(E.envMap||W.environment),Yt===void 0&&(E.addEventListener("dispose",lt),Yt=new Map,W.programs=Yt);let zt=Yt.get(It);if(zt!==void 0){if(W.currentProgram===zt&&W.lightsStateVersion===St)return Za(E,Pt),zt}else Pt.uniforms=pt.getUniforms(E),E.onBuild(z,Pt,v),E.onBeforeCompile(Pt,v),zt=pt.acquireProgram(Pt,It),Yt.set(It,zt),W.uniforms=Pt.uniforms;const Vt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Vt.clippingPlanes=kt.uniform),Za(E,Pt),W.needsLights=_h(E),W.lightsStateVersion=St,W.needsLights&&(Vt.ambientLightColor.value=B.state.ambient,Vt.lightProbe.value=B.state.probe,Vt.directionalLights.value=B.state.directional,Vt.directionalLightShadows.value=B.state.directionalShadow,Vt.spotLights.value=B.state.spot,Vt.spotLightShadows.value=B.state.spotShadow,Vt.rectAreaLights.value=B.state.rectArea,Vt.ltc_1.value=B.state.rectAreaLTC1,Vt.ltc_2.value=B.state.rectAreaLTC2,Vt.pointLights.value=B.state.point,Vt.pointLightShadows.value=B.state.pointShadow,Vt.hemisphereLights.value=B.state.hemi,Vt.directionalShadowMap.value=B.state.directionalShadowMap,Vt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Vt.spotShadowMap.value=B.state.spotShadowMap,Vt.spotLightMatrix.value=B.state.spotLightMatrix,Vt.spotLightMap.value=B.state.spotLightMap,Vt.pointShadowMap.value=B.state.pointShadowMap,Vt.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=zt,W.uniformsList=null,zt}function ja(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=nr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Za(E,F){const z=Lt.get(E);z.outputColorSpace=F.outputColorSpace,z.batching=F.batching,z.instancing=F.instancing,z.instancingColor=F.instancingColor,z.skinning=F.skinning,z.morphTargets=F.morphTargets,z.morphNormals=F.morphNormals,z.morphColors=F.morphColors,z.morphTargetsCount=F.morphTargetsCount,z.numClippingPlanes=F.numClippingPlanes,z.numIntersection=F.numClipIntersection,z.vertexAlphas=F.vertexAlphas,z.vertexTangents=F.vertexTangents,z.toneMapping=F.toneMapping}function mh(E,F,z,W,B){F.isScene!==!0&&(F=Ct),w.resetTextureUnits();const dt=F.fog,St=W.isMeshStandardMaterial?F.environment:null,Pt=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:fn,It=(W.isMeshStandardMaterial?k:y).get(W.envMap||St),Yt=W.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,zt=!!z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Vt=!!z.morphAttributes.position,me=!!z.morphAttributes.normal,We=!!z.morphAttributes.color;let ye=On;W.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ye=v.toneMapping);const pn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ue=pn!==void 0?pn.length:0,$t=Lt.get(W),wr=m.state.lights;if(j===!0&&(ct===!0||E!==M)){const Ze=E===M&&W.id===I;kt.setState(W,E,Ze)}let de=!1;W.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==wr.state.version||$t.outputColorSpace!==Pt||B.isBatchedMesh&&$t.batching===!1||!B.isBatchedMesh&&$t.batching===!0||B.isInstancedMesh&&$t.instancing===!1||!B.isInstancedMesh&&$t.instancing===!0||B.isSkinnedMesh&&$t.skinning===!1||!B.isSkinnedMesh&&$t.skinning===!0||B.isInstancedMesh&&$t.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&$t.instancingColor===!1&&B.instanceColor!==null||$t.envMap!==It||W.fog===!0&&$t.fog!==dt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==kt.numPlanes||$t.numIntersection!==kt.numIntersection)||$t.vertexAlphas!==Yt||$t.vertexTangents!==zt||$t.morphTargets!==Vt||$t.morphNormals!==me||$t.morphColors!==We||$t.toneMapping!==ye||xt.isWebGL2===!0&&$t.morphTargetsCount!==ue)&&(de=!0):(de=!0,$t.__version=W.version);let zn=$t.currentProgram;de===!0&&(zn=vs(W,F,B));let Ja=!1,Ki=!1,Ar=!1;const Re=zn.getUniforms(),Hn=$t.uniforms;if(ht.useProgram(zn.program)&&(Ja=!0,Ki=!0,Ar=!0),W.id!==I&&(I=W.id,Ki=!0),Ja||M!==E){Re.setValue(O,"projectionMatrix",E.projectionMatrix),Re.setValue(O,"viewMatrix",E.matrixWorldInverse);const Ze=Re.map.cameraPosition;Ze!==void 0&&Ze.setValue(O,Ot.setFromMatrixPosition(E.matrixWorld)),xt.logarithmicDepthBuffer&&Re.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Re.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Ki=!0,Ar=!0)}if(B.isSkinnedMesh){Re.setOptional(O,B,"bindMatrix"),Re.setOptional(O,B,"bindMatrixInverse");const Ze=B.skeleton;Ze&&(xt.floatVertexTextures?(Ze.boneTexture===null&&Ze.computeBoneTexture(),Re.setValue(O,"boneTexture",Ze.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Re.setOptional(O,B,"batchingTexture"),Re.setValue(O,"batchingTexture",B._matricesTexture,w));const Rr=z.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0&&xt.isWebGL2===!0)&&bt.update(B,z,zn),(Ki||$t.receiveShadow!==B.receiveShadow)&&($t.receiveShadow=B.receiveShadow,Re.setValue(O,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Hn.envMap.value=It,Hn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Ki&&(Re.setValue(O,"toneMappingExposure",v.toneMappingExposure),$t.needsLights&&gh(Hn,Ar),dt&&W.fog===!0&&rt.refreshFogUniforms(Hn,dt),rt.refreshMaterialUniforms(Hn,W,X,P,vt),nr.upload(O,ja($t),Hn,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(nr.upload(O,ja($t),Hn,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Re.setValue(O,"center",B.center),Re.setValue(O,"modelViewMatrix",B.modelViewMatrix),Re.setValue(O,"normalMatrix",B.normalMatrix),Re.setValue(O,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ze=W.uniformsGroups;for(let Cr=0,vh=Ze.length;Cr<vh;Cr++)if(xt.isWebGL2){const Qa=Ze[Cr];te.update(Qa,zn),te.bind(Qa,zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zn}function gh(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function _h(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,F,z){Lt.get(E.texture).__webglTexture=F,Lt.get(E.depthTexture).__webglTexture=z;const W=Lt.get(E);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=z===void 0,W.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,F){const z=Lt.get(E);z.__webglFramebuffer=F,z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,z=0){b=E,R=F,T=z;let W=!0,B=null,dt=!1,St=!1;if(E){const It=Lt.get(E);It.__useDefaultFramebuffer!==void 0?(ht.bindFramebuffer(O.FRAMEBUFFER,null),W=!1):It.__webglFramebuffer===void 0?w.setupRenderTarget(E):It.__hasExternalTextures&&w.rebindTextures(E,Lt.get(E.texture).__webglTexture,Lt.get(E.depthTexture).__webglTexture);const Yt=E.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(St=!0);const zt=Lt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[F])?B=zt[F][z]:B=zt[F],dt=!0):xt.isWebGL2&&E.samples>0&&w.useMultisampledRTT(E)===!1?B=Lt.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?B=zt[z]:B=zt,A.copy(E.viewport),G.copy(E.scissor),q=E.scissorTest}else A.copy(Y).multiplyScalar(X).floor(),G.copy(tt).multiplyScalar(X).floor(),q=et;if(ht.bindFramebuffer(O.FRAMEBUFFER,B)&&xt.drawBuffers&&W&&ht.drawBuffers(E,B),ht.viewport(A),ht.scissor(G),ht.setScissorTest(q),dt){const It=Lt.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,It.__webglTexture,z)}else if(St){const It=Lt.get(E.texture),Yt=F||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.__webglTexture,z||0,Yt)}I=-1},this.readRenderTargetPixels=function(E,F,z,W,B,dt,St){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Lt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(Pt=Pt[St]),Pt){ht.bindFramebuffer(O.FRAMEBUFFER,Pt);try{const It=E.texture,Yt=It.format,zt=It.type;if(Yt!==ze&&ft.convert(Yt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Vt=zt===fs&&(At.has("EXT_color_buffer_half_float")||xt.isWebGL2&&At.has("EXT_color_buffer_float"));if(zt!==kn&&ft.convert(zt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===Nn&&(xt.isWebGL2||At.has("OES_texture_float")||At.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-W&&z>=0&&z<=E.height-B&&O.readPixels(F,z,W,B,ft.convert(Yt),ft.convert(zt),dt)}finally{const It=b!==null?Lt.get(b).__webglFramebuffer:null;ht.bindFramebuffer(O.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(E,F,z=0){const W=Math.pow(2,-z),B=Math.floor(F.image.width*W),dt=Math.floor(F.image.height*W);w.setTexture2D(F,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,E.x,E.y,B,dt),ht.unbindTexture()},this.copyTextureToTexture=function(E,F,z,W=0){const B=F.image.width,dt=F.image.height,St=ft.convert(z.format),Pt=ft.convert(z.type);w.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment),F.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,W,E.x,E.y,B,dt,St,Pt,F.image.data):F.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,W,E.x,E.y,F.mipmaps[0].width,F.mipmaps[0].height,St,F.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,W,E.x,E.y,St,Pt,F.image),W===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ht.unbindTexture()},this.copyTextureToTexture3D=function(E,F,z,W,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dt=E.max.x-E.min.x+1,St=E.max.y-E.min.y+1,Pt=E.max.z-E.min.z+1,It=ft.convert(W.format),Yt=ft.convert(W.type);let zt;if(W.isData3DTexture)w.setTexture3D(W,0),zt=O.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)w.setTexture2DArray(W,0),zt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const Vt=O.getParameter(O.UNPACK_ROW_LENGTH),me=O.getParameter(O.UNPACK_IMAGE_HEIGHT),We=O.getParameter(O.UNPACK_SKIP_PIXELS),ye=O.getParameter(O.UNPACK_SKIP_ROWS),pn=O.getParameter(O.UNPACK_SKIP_IMAGES),ue=z.isCompressedTexture?z.mipmaps[B]:z.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ue.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ue.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,E.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,E.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,E.min.z),z.isDataTexture||z.isData3DTexture?O.texSubImage3D(zt,B,F.x,F.y,F.z,dt,St,Pt,It,Yt,ue.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(zt,B,F.x,F.y,F.z,dt,St,Pt,It,ue.data)):O.texSubImage3D(zt,B,F.x,F.y,F.z,dt,St,Pt,It,Yt,ue),O.pixelStorei(O.UNPACK_ROW_LENGTH,Vt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,me),O.pixelStorei(O.UNPACK_SKIP_PIXELS,We),O.pixelStorei(O.UNPACK_SKIP_ROWS,ye),O.pixelStorei(O.UNPACK_SKIP_IMAGES,pn),B===0&&W.generateMipmaps&&O.generateMipmap(zt),ht.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),ht.unbindTexture()},this.resetState=function(){R=0,T=0,b=null,ht.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===za?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===Sr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===be?ti:gc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ti?be:fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class H0 extends Oc{}H0.prototype.isWebGL1Renderer=!0;class G0 extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class V0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fe=new U;class gr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new gr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class kc extends ii{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let yi;const ts=new U,Si=new U,bi=new U,Ei=new Jt,es=new Jt,Bc=new _e,Gs=new U,ns=new U,Vs=new U,Sl=new Jt,aa=new Jt,bl=new Jt;class W0 extends De{constructor(t=new kc){if(super(),this.isSprite=!0,this.type="Sprite",yi===void 0){yi=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new V0(e,5);yi.setIndex([0,1,2,0,2,3]),yi.setAttribute("position",new gr(n,3,0,!1)),yi.setAttribute("uv",new gr(n,2,3,!1))}this.geometry=yi,this.material=t,this.center=new Jt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Si.setFromMatrixScale(this.matrixWorld),Bc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Si.multiplyScalar(-bi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Ws(Gs.set(-.5,-.5,0),bi,o,Si,s,r),Ws(ns.set(.5,-.5,0),bi,o,Si,s,r),Ws(Vs.set(.5,.5,0),bi,o,Si,s,r),Sl.set(0,0),aa.set(1,0),bl.set(1,1);let a=t.ray.intersectTriangle(Gs,ns,Vs,!1,ts);if(a===null&&(Ws(ns.set(-.5,.5,0),bi,o,Si,s,r),aa.set(0,1),a=t.ray.intersectTriangle(Gs,Vs,ns,!1,ts),a===null))return;const l=t.ray.origin.distanceTo(ts);l<t.near||l>t.far||e.push({distance:l,point:ts.clone(),uv:Ke.getInterpolation(ts,Gs,ns,Vs,Sl,aa,bl,new Jt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ws(i,t,e,n,s,r){Ei.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(es.x=r*Ei.x-s*Ei.y,es.y=s*Ei.x+r*Ei.y):es.copy(Ei),i.copy(t),i.x+=es.x,i.y+=es.y,i.applyMatrix4(Bc)}class Tr extends Ge{constructor(t=null,e=1,n=1,s,r,o,a,l,c=fe,h=fe,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zc extends ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const El=new U,Tl=new U,wl=new _e,oa=new Ga,Xs=new Yi;class X0 extends De{constructor(t=new Ae,e=new zc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)El.fromBufferAttribute(e,s-1),Tl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=El.distanceTo(Tl);t.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),Xs.radius+=r,t.ray.intersectsSphere(Xs)===!1)return;wl.copy(s).invert(),oa.copy(t.ray).applyMatrix4(wl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,h=new U,u=new U,d=new U,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=f,S=x-1;v<S;v+=p){const R=g.getX(v),T=g.getX(v+1);if(c.fromBufferAttribute(m,R),h.fromBufferAttribute(m,T),oa.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const I=t.ray.origin.distanceTo(d);I<t.near||I>t.far||e.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=f,S=x-1;v<S;v+=p){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),oa.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(d);T<t.near||T>t.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Al=new U,Rl=new U;class q0 extends X0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Al.fromBufferAttribute(e,s),Rl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Al.distanceTo(Rl);t.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wa extends ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cl=new _e,ba=new Ga,qs=new Yi,Ys=new U;class Hc extends De{constructor(t=new Ae,e=new Wa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(s),qs.radius+=r,t.ray.intersectsSphere(qs)===!1)return;Cl.copy(s).invert(),ba.copy(t.ray).applyMatrix4(Cl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);Ys.fromBufferAttribute(u,m),Ll(Ys,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Ys.fromBufferAttribute(u,g),Ll(Ys,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ll(i,t,e,n,s,r,o){const a=ba.distanceSqToPoint(i);if(a<e){const l=new U;ba.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Y0 extends Ge{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const $s=new U,Ks=new U,la=new U,js=new Ke;class $0 extends Ae{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Fi*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:f}=js;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),js.getNormal(la),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const v=(x+1)%3,S=u[x],R=u[v],T=js[h[x]],b=js[h[v]],I=`${S}_${R}`,M=`${R}_${S}`;M in d&&d[M]?(la.dot(d[M].normal)<=r&&(p.push(T.x,T.y,T.z),p.push(b.x,b.y,b.z)),d[M]=null):I in d||(d[I]={index0:c[x],index1:c[v],normal:la.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];$s.fromBufferAttribute(a,_),Ks.fromBufferAttribute(a,m),p.push($s.x,$s.y,$s.z),p.push(Ks.x,Ks.y,Ks.z)}this.setAttribute("position",new Ie(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Xa extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new U,d=new U,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const x=[],v=f/n;let S=0;f===0&&o===0?S=.5/e:f===n&&l===Math.PI&&(S=-.5/e);for(let R=0;R<=e;R++){const T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+S,1-v),x.push(c++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const v=h[f][x+1],S=h[f][x],R=h[f+1][x],T=h[f+1][x+1];(f!==0||o>0)&&p.push(v,S,T),(f!==n-1||l<Math.PI)&&p.push(S,R,T)}this.setIndex(p),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ka);function K0(i){const t=new Oc({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!1});return t.outputColorSpace=fn,t.setClearColor(8900331,1),t.shadowMap.enabled=!1,t}function j0(i){let t=i>>>0||2654435769;return function(){return t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296}}const ca=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];function is(i){return i*i*i*(i*(i*6-15)+10)}function ln(i,t,e){return i+(t-i)*e}class Di{constructor(t=1337){const e=j0(t),n=new Uint8Array(256);for(let s=0;s<256;s++)n[s]=s;for(let s=255;s>0;s--){const r=e()*(s+1)|0,o=n[s];n[s]=n[r],n[r]=o}this.perm=new Uint8Array(512);for(let s=0;s<512;s++)this.perm[s]=n[s&255]}perlin2(t,e){const n=Math.floor(t)&255,s=Math.floor(e)&255,r=t-Math.floor(t),o=e-Math.floor(e),a=is(r),l=is(o),c=this.perm,h=c[c[n]+s]%12,u=c[c[n]+s+1]%12,d=c[c[n+1]+s]%12,p=c[c[n+1]+s+1]%12,g=(f,x,v)=>ca[f][0]*x+ca[f][1]*v,_=ln(g(h,r,o),g(d,r-1,o),a),m=ln(g(u,r,o-1),g(p,r-1,o-1),a);return ln(_,m,l)}perlin3(t,e,n){const s=Math.floor(t)&255,r=Math.floor(e)&255,o=Math.floor(n)&255,a=t-Math.floor(t),l=e-Math.floor(e),c=n-Math.floor(n),h=is(a),u=is(l),d=is(c),p=this.perm,g=p[s]+r,_=p[g]+o,m=p[g+1]+o,f=p[s+1]+r,x=p[f]+o,v=p[f+1]+o,S=K=>ca[p[K]%12],R=(K,D,C,P)=>K[0]*D+K[1]*C+K[2]*P,T=(K,D,C,P)=>R(S(K),D,C,P),b=ln(T(_,a,l,c),T(x,a-1,l,c),h),I=ln(T(m,a,l-1,c),T(v,a-1,l-1,c),h),M=ln(b,I,u),A=ln(T(_+1,a,l,c-1),T(x+1,a-1,l,c-1),h),G=ln(T(m+1,a,l-1,c-1),T(v+1,a-1,l-1,c-1),h),q=ln(A,G,u);return ln(M,q,d)}fbm2(t,e,n=4,s=2,r=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<n;h++)l+=o*this.perlin2(t*a,e*a),c+=o,o*=r,a*=s;return l/c}fbm3(t,e,n,s=3,r=2,o=.5){let a=1,l=1,c=0,h=0;for(let u=0;u<s;u++)c+=a*this.perlin3(t*l,e*l,n*l),h+=a,a*=o,l*=r;return c/h}ridged2(t,e,n=4){let s=1,r=1,o=0,a=0;for(let l=0;l<n;l++){const c=1-Math.abs(this.perlin2(t*r,e*r));o+=s*c*c,a+=s,s*=.5,r*=2}return o/a}}function ut(i,t,e=0){let n=i*374761393+t*668265263+e*1274126177;return n=(n^n>>>13)*1274126177,n=(n^n>>>16)>>>0,n/4294967296}function Z0(i,t,e,n=0){let s=i*374761393+t*1103515245+e*668265263+n*1274126177;return s=(s^s>>>13)*1274126177,s=(s^s>>>16)>>>0,s/4294967296}function Pl(i){const t=String(i).trim();if(t!==""&&!Number.isNaN(Number(t)))return Math.abs(Math.trunc(Number(t)))>>>0;let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}const _t=16,Kn=8,ir=_t+Kn*2,Bi=16,Ti=i=>i<0?0:i>255?255:i|0,Dl=new Map;function Gc(i){let t=Dl.get(i);if(t)return t;const e=parseInt(i.slice(1),16);return t=[e>>16&255,e>>8&255,e&255],Dl.set(i,t),t}function un(i,t=0){const e=typeof i=="string"?Gc(i):i;return[e[0]+t,e[1]+t,e[2]+t]}class Vc{constructor(){this.data=new Uint8ClampedArray(_t*_t*4)}set(t,e,n,s=255){if(t=t|0,e=e|0,t<0||e<0||t>=_t||e>=_t)return;const r=typeof n=="string"?Gc(n):n,o=(e*_t+t)*4;this.data[o]=Ti(r[0]),this.data[o+1]=Ti(r[1]),this.data[o+2]=Ti(r[2]),this.data[o+3]=s}shade(t,e,n){if(t=t|0,e=e|0,t<0||e<0||t>=_t||e>=_t)return;const s=(e*_t+t)*4;this.data[s]=Ti(this.data[s]+n),this.data[s+1]=Ti(this.data[s+1]+n),this.data[s+2]=Ti(this.data[s+2]+n)}rect(t,e,n,s,r,o=255){for(let a=e;a<e+s;a++)for(let l=t;l<t+n;l++)this.set(l,a,r,o);return this}get(t,e){const n=((e|0)*_t+(t|0))*4;return[this.data[n],this.data[n+1],this.data[n+2],this.data[n+3]]}fill(t,e=255){for(let n=0;n<_t;n++)for(let s=0;s<_t;s++)this.set(s,n,t,e);return this}noise(t,e=0,n=8){for(let s=0;s<_t;s++)for(let r=0;r<_t;r++){const o=ut(r,s,e),a=t[o*t.length|0]??t[0],l=(ut(r+7,s*3+1,e+99)-.5)*n;this.set(r,s,un(a,l))}return this}soft(t,e=0,n=8,s=5){const r=a=>a*a*(3-2*a),o=(a,l)=>ut(a,l,e);for(let a=0;a<_t;a++)for(let l=0;l<_t;l++){const c=l/s,h=a/s,u=Math.floor(c),d=Math.floor(h),p=r(c-u),g=r(h-d),_=o(u,d),m=o(u+1,d),f=o(u,d+1),x=o(u+1,d+1),v=(_*(1-p)+m*p)*(1-g)+(f*(1-p)+x*p)*g,S=t[v*t.length|0]??t[0];this.set(l,a,un(S,(v-.5)*n))}return this}grain(t=5,e=0){for(let n=0;n<_t;n++)for(let s=0;s<_t;s++)this.shade(s,n,(ut(s*5+1,n*7+3,e)-.5)*t);return this}pebbles(t,e,n=0,s=2,r=16,o=-14){for(let a=0;a<e;a++){const l=1+(ut(a*7+3,a*5+11,n)*(_t-2)|0),c=1+(ut(a*13+5,a*3+7,n+21)*(_t-2)|0),h=1+(ut(a,a+9,n+3)*s|0),u=1+(ut(a+4,a*2+1,n+5)*s|0);for(let d=c;d<c+u;d++)for(let p=l;p<l+h;p++)this.set(p,d,un(t,d===c||p===l?r:d===c+u-1||p===l+h-1?o:0))}return this}speckles(t,e,n=0,s=10){for(let r=0;r<e;r++){const o=ut(r*3+1,r*7+5,n),a=ut(r*13+2,r*5+9,n+1),l=(ut(r,r+3,n+2)-.5)*s;this.set(o*_t|0,a*_t|0,un(t,l))}return this}mottle(t,e=0,n=5,s=1.5,r=3.4,o=2.5){this.fill(t[0]);for(let a=1;a<t.length;a++)for(let l=0;l<n;l++){const c=e+a*97+l*13>>>0,h=ut(a*7+l,l*31+a,c)*_t,u=ut(l*17+a,a*13+l,c+5)*_t,d=s+ut(a,l,c+9)*(r-s);for(let p=Math.floor(u-d);p<=u+d;p++)for(let g=Math.floor(h-d);g<=h+d;g++){const _=g+.5-h,m=p+.5-u,f=_*_+m*m;f>d*d||f<(d-.7)**2&&ut(g*5+a,p*3+l,c+21)>.8||this.set((g%_t+_t)%_t,(p%_t+_t)%_t,t[a])}}return o&&this.grain(o,e+1009),this}blobs(t,e,n=0,s=2.6){for(let r=0;r<e;r++){const o=ut(r*5+3,r*11+7,n)*_t,a=ut(r*17+1,r*23+4,n+40)*_t,l=s*(.6+ut(r,r*2+1,n+7)*.8);for(let c=Math.floor(a-l);c<=a+l;c++)for(let h=Math.floor(o-l);h<=o+l;h++){const u=h+.5-o,d=c+.5-a;if(u*u+d*d>l*l)continue;const p=(ut(h*3,c*5,n+11)-.5)*14;this.set(h,c,un(t,p))}}return this}border(t,e=255){for(let n=0;n<_t;n++)this.set(n,0,t,e),this.set(n,_t-1,t,e),this.set(0,n,t,e),this.set(_t-1,n,t,e);return this}clear(){return this.data.fill(0),this}}function J0(i){const t=ir*Bi,e={data:new Uint8ClampedArray(t*t*4),width:t,height:t},n=e.data;for(const s of i){const r=s.index%Bi,o=s.index/Bi|0,a=r*ir+Kn,l=o*ir+Kn;for(let c=0;c<_t;c++)for(let h=0;h<_t;h++){const u=(c*_t+h)*4,d=((l+c)*t+(a+h))*4;n[d]=s.tile.data[u],n[d+1]=s.tile.data[u+1],n[d+2]=s.tile.data[u+2],n[d+3]=s.tile.data[u+3]}for(let c=-Kn;c<_t+Kn;c++)for(let h=-Kn;h<_t+Kn;h++){if(h>=0&&h<_t&&c>=0&&c<_t)continue;const u=Math.max(0,Math.min(_t-1,h)),p=(Math.max(0,Math.min(_t-1,c))*_t+u)*4,g=((l+c)*t+(a+h))*4;if(s.tile.data[p+3]===0&&s.transparentPadding){n[g+3]=0;continue}n[g]=s.tile.data[p],n[g+1]=s.tile.data[p+1],n[g+2]=s.tile.data[p+2],n[g+3]=Math.max(n[g+3],s.tile.data[p+3])}}return e}function Q0(i,t=1){const e=document.createElement("canvas");e.width=_t*t,e.height=_t*t;const n=e.getContext("2d"),s=new ImageData(i.data,_t,_t),r=document.createElement("canvas");return r.width=_t,r.height=_t,r.getContext("2d").putImageData(s,0,0),n.imageSmoothingEnabled=!1,n.drawImage(r,0,0,e.width,e.height),e}const Bt={dirt:["#8a6647","#7f5c3e","#93704f","#75543a"],grass:["#63ad3c","#59a133","#6cba45","#4f952c"],grassDark:["#3f8327","#357021"],stone:["#8e8e8e","#878787","#949494","#7e7e7e"],cobble:["#9a9a9a","#8d8d8d","#a4a4a4","#828282"],sand:["#e2d1a4","#dbca9c","#e8d8ae","#d4c293"],sandstone:["#ddcd97","#d5c48c","#e4d6a5","#cdbd83"],gravel:["#8b8681","#827d78","#949088","#797471"],log:["#6d5335","#63492c","#77593a","#573f26"],logRing:["#a9884f","#9c7b45","#b4955c"],leaves:["#43832a","#3a7624","#4c9231","#316920","#57a238"],planks:["#bb8f56","#b0854d","#c49860","#a5793f"],water:["#3b6ecc","#3465c0","#457ad4","#2e5db8"],bedrock:["#414141","#383838","#4b4b4b","#2f2f2f"],snow:["#f6fcff","#eef7fd","#ffffff","#e4f1f9"],brick:["#a2554a","#954b41","#ac5f54"],mortar:["#c3bcb3","#cec7bf"],obsidian:["#20172f","#2a1f3d","#180f24","#3a2a55"],cactus:["#4d8f3a","#447f31","#569c42"],woolW:["#e9e9e9","#dedede","#f2f2f2"],woolR:["#b02e2e","#9c2727","#c13a3a"],woolB:["#2f4ecb","#2741b3","#3a5cdb"],woolY:["#e0c02f","#c9a926","#f0d346"],woolL:["#a6d434","#94c02a","#b6e246"],woolK:["#242424","#1b1b1b","#313131"],glow:["#f2d488","#e6c069","#f8e0a0","#d3a95d"],stoneBrick:["#949494","#8b8b8b","#9d9d9d","#7f7f7f"],podzol:["#6d5130","#634829","#785a38","#55712c"]};function tg(i){const t=new Vc;return i(t),t}function wi(i,t=0){return i.mottle(Bt.stone,7+t,5,1.4,3,2.4).speckles("#7c7c7c",4,21+t,6)}function Ea(i,t,e,n,s=3,r=3){i.mottle(n,t,5,1.3,2.8,2.2),i.pebbles("#6f4f33",5,t+5,2,8,-10);for(let o=0;o<16;o++){const a=s+(ut(o/2|0,1,t)*r|0);for(let l=0;l<a;l++)i.set(o,l,e[ut(o/2|0,l/2|0,t+3)*e.length|0]);ut(o,5,t+8)>.35&&i.set(o,a,Bt.grassDark[ut(o/2|0,6,t)*2|0])}return i}const ce={grass_top:i=>i.mottle(Bt.grass,11,5,1.6,3.4,1.8),grass_side:i=>Ea(i,21,Bt.grass,Bt.dirt,3,3),podzol_side:i=>Ea(i,62,Bt.podzol,Bt.dirt,2,2),dirt:i=>i.mottle(Bt.dirt,3,5,1.3,2.8,2.4).pebbles("#6f4f33",5,5,2,8,-12),podzol:i=>{i.mottle(Bt.podzol,61,5,1.4,3,2.2);for(let t=0;t<16;t++)t%3&&i.set(t,0,Bt.grassDark[ut(t,1,63)*2|0]);return i},stone:i=>wi(i),cobblestone:i=>{i.fill("#616161");const t=[-1,5,11,17],e=[-1,6,12,17];for(let n=0;n<e.length-1;n++)for(let s=0;s<t.length-1;s++){const r=Math.max(0,t[s]+1),o=Math.min(16,t[s+1]-1),a=Math.max(0,e[n]+1),l=Math.min(16,e[n+1]-1);for(let c=a;c<l;c++)for(let h=r;h<o;h++){let u=Bt.cobble[ut(h,c,92)*Bt.cobble.length|0];(c===a||h===r)&&(u=un(u,18)),(c===l-1||h===o-1)&&(u=un(u,-16)),i.set(h,c,u)}}return i.grain(4,93)},stone_bricks:i=>{i.soft(Bt.stoneBrick,33,6,4).grain(3,34);for(let t=0;t<16;t++)for(let e=0;e<16;e++){const s=(t/8|0)%2?4:0;t%8===0||(e+s)%8===7?i.set(e,t,["#6f6f6f","#676767"][ut(e,t,4)*2|0]):(t%8===1||(e+s)%8===6)&&i.set(e,t,"#a0a0a0")}return i},sand:i=>i.mottle(Bt.sand,18,4,1.8,3.6,1.5),sandstone_side:i=>{i.mottle(Bt.sandstone,23,4,1.8,3.6,1.6);for(let t=0;t<16;t++)for(let e=0;e<16;e++)t===0||t===15?i.set(e,t,"#c2b078"):(t===7||t===8)&&i.set(e,t,"#cbb983");return i},sandstone_top:i=>i.fill("#dbcb94").grain(5,30).border("#c2b078"),gravel:i=>{i.mottle(Bt.gravel,37,4,1.6,3.2,1.6);for(let t=0;t<15;t++){const e=ut(t,3,41)*15|0,n=ut(t,7,42)*15|0,s=1+(ut(t,11,43)*2|0),r=1+(ut(t,13,44)*2|0),o=Bt.gravel[ut(t,17,45)*Bt.gravel.length|0];for(let a=0;a<r;a++)for(let l=0;l<s;l++){const c=l===0&&a===0?14:l===s-1&&a===r-1?-16:0;i.set(e+l,n+a,un(o,c))}}return i.grain(3,46)},log_side:i=>{i.soft(Bt.log,43,6,4).grain(3,44);for(let t=0;t<16;t++){const e=ut(t,0,47)>.62;for(let n=0;n<16;n++)!e&&ut(t*2,n,51)<=.9||i.set(t,n,un(["#4e3a22","#573f26"][ut(t,n,5)*2|0],(ut(t,n,52)-.5)*7))}return i},log_top:i=>{i.soft(Bt.logRing,53,5,4);for(let t=0;t<16;t++)for(let e=0;e<16;e++){const n=Math.hypot(e-7.5,t-7.5),s=Math.sin(n*2.1)>.2;i.set(e,t,un(s?"#8a6a3a":"#a8874f",(ut(e,t,54)-.5)*6)),n>7.2&&i.set(e,t,Bt.log[ut(e,t,61)*Bt.log.length|0])}return i},leaves:i=>{i.clear(),i.mottle(Bt.leaves,66,5,1.6,3.4,2),i.blobs("#316920",5,81,2.3),i.blobs("#57a238",3,97,1.7);for(let t=0;t<16;t++)for(let e=0;e<16;e++)(e===0||t===0||e===15||t===15?ut(e,t,67)>.55:ut(e,t,68)>.972)&&i.set(e,t,[0,0,0],0);return i},planks:i=>{i.mottle([Bt.planks[0],Bt.planks[1]],71,4,2.2,4.2,1.6);for(let t=0;t<16;t++)for(let e=0;e<16;e++)t%4===3&&i.set(e,t,"#8a6a35");for(let t=0;t<6;t++){const e=ut(t,3,73)*16|0,n=ut(t,5,74)*12|0,s=2+(ut(t,7,75)*3|0);if(e%4!==3)for(let r=0;r<s;r++)i.set(n+r,e,"#c69a61")}for(const t of[5,12])for(let e=0;e<16;e++)e%4!==3&&i.set(t,e,"#9c7640");return i},glass:i=>{i.clear();for(let t=0;t<16;t++)for(let e=0;e<16;e++)e===0||t===0||e===15||t===15?i.set(e,t,"#cfe9f2",255):(e-t===2||e-t===3||e-t===-8)&&(e+t)%4!==0&&i.set(e,t,"#eaf7ff",110);return i},water:i=>{i.soft(Bt.water,79,6,5).grain(3,80);for(let t=0;t<16;t++)for(let e=0;e<16;e++)Math.sin((e+t*.6)*.9)>.72&&i.set(e,t,"#5890e2");return i},bedrock:i=>i.soft(Bt.bedrock,83,10,3).grain(5,84).pebbles("#262626",8,89,2,-10,12),snow:i=>i.mottle(Bt.snow,98,4,1.8,3.4,1.2),coal_ore:i=>(wi(i,1),i.pebbles("#242424",4,103,2,-6,-22)),iron_ore:i=>(wi(i,2),i.pebbles("#c9915f",4,107,2,18,-16)),gold_ore:i=>(wi(i,3),i.pebbles("#f5d33c",4,109,2,20,-16)),diamond_ore:i=>(wi(i,4),i.pebbles("#4fe3dd",4,113,2,22,-14)),redstone_ore:i=>(wi(i,5),i.pebbles("#c02b2b",5,127,2,16,-18)),bricks:i=>{i.soft(Bt.brick,131,6,4).grain(3,132);for(let t=0;t<16;t++)for(let e=0;e<16;e++){const s=(t/4|0)%2?4:0;(t%4===0||(e+s)%8===0)&&i.set(e,t,Bt.mortar[ut(e,t,13)*2|0])}return i},obsidian:i=>i.soft(Bt.obsidian,137,9,4).grain(4,138).speckles("#6b4aa8",6,139,12),glowstone:i=>i.soft(Bt.glow,149,8,4).grain(4,150).pebbles("#fff3c4",6,151,2,16,-18),torch:i=>{i.clear();for(let t=6;t<16;t++)for(let e=6;e<10;e++)i.set(e,t,t%3===0?"#6b4a24":"#8a6234");for(let t=2;t<7;t++)for(let e=5;e<11;e++){const n=Math.hypot(e-7.5,t-4);n<3&&i.set(e,t,n<1.3?"#fff6c0":n<2.2?"#ffc23c":"#e07a1e")}return i},tall_grass:i=>{i.clear();for(let t=0;t<5;t++){const e=1+t*2+(ut(t,3,157)*2|0),n=5+(ut(t,7,163)*4|0),s=(ut(t,11,167)-.5)*3;for(let r=0;r<n;r++){const o=15-r,a=Math.round(e+s*r/n),l=r>n-2?"#69a440":r>n*.45?"#4f8a2c":"#3c6a21";i.set(a,o,l),r%4===0&&ut(a,o,179)>.55&&i.set(a+1,o,"#3f7024")}}for(let t=0;t<3;t++){const e=2+(ut(t,23,181)*12|0);i.set(e,15-(4+(ut(t,29,183)*3|0)),"#7c8a3c")}return i},fern:i=>{i.clear();for(let t=0;t<11;t++){const e=15-t,n=1+((10-t)*.45|0);for(let s=8-n;s<=8+n;s++){const r=Math.abs(s-8);r===n&&t%2||r===0&&t>4&&t%3===0||i.set(s,e,t>7?"#548c2e":r===n?"#356a1f":"#3f7d24")}}return i},flower_red:i=>{i.clear();for(let e=8;e<16;e++)i.set(7,e,"#3f7d24");for(let e=9;e<12;e++)i.set(e%2?8:6,e,"#4f9a2c");const t=[[6,5],[7,4],[8,5],[9,6],[8,7],[7,8],[6,7],[5,6]];for(const[e,n]of t)i.set(e,n,"#d93b3b");return i.set(7,6,"#ffe27a"),i.set(8,6,"#ffd63c"),i},flower_yellow:i=>{i.clear();for(let e=8;e<16;e++)i.set(8,e,"#3f7d24");const t=[[7,5],[8,4],[9,5],[10,6],[9,7],[8,8],[7,7],[6,6]];for(const[e,n]of t)i.set(e,n,"#f5d33c");return i.set(8,6,"#a06b1e"),i.set(8,5,"#c9911e"),i},cactus_side:i=>{i.noise(Bt.cactus,171,6);for(let t=0;t<16;t++)i.set(0,t,"#2f5f22"),i.set(15,t,"#2f5f22"),t%4===1&&(i.set(4,t,"#dfeee0"),i.set(11,t,"#dfeee0"));return i},cactus_top:i=>i.noise(["#4d8f3a","#5aa145","#3f7d2f"],173,6).border("#2f5f22"),wool_white:i=>i.noise(Bt.woolW,181,6),wool_red:i=>i.noise(Bt.woolR,183,6),wool_blue:i=>i.noise(Bt.woolB,185,6),wool_yellow:i=>i.noise(Bt.woolY,187,6),wool_lime:i=>i.noise(Bt.woolL,189,6),wool_black:i=>i.noise(Bt.woolK,191,6),crafting_top:i=>{i.noise(Bt.planks,193,6);for(let t=1;t<15;t++)for(let e=1;e<15;e++)(e%7===0||t%7===0)&&i.set(e,t,"#7a5a2f");return i},crafting_side:i=>{i.noise(Bt.planks,197,6);for(let t=2;t<7;t++)for(let e=2;e<14;e++)(e+t)%3===0&&i.set(e,t,"#8a6a35");return i}},eg={wood:["#a97f4a","#8a6134"],stone:["#9a9a9a","#7d7d7d"],iron:["#e2e2e2","#b9bcc2"],diamond:["#57e6e0","#31b9c2"]},ng=["pickaxe","axe","shovel","sword"];function ig(i,t,e,n){const s="#8a6134",r="#6d4c28";if(t==="sword"){for(let l=0;l<9;l++)i.set(5+l,12-l,l>5?n:e);for(let l=0;l<8;l++)i.set(4+l,13-l,l>5?n:e);return i.set(4,11,s),i.set(5,12,s),i.set(3,12,r),i.set(4,13,r),i.set(2,13,r),i.set(3,14,s),i.set(2,14,r),i.set(5,10,n),i.set(6,9,n),i.set(7,8,n),i.set(8,7,n),i.set(2,11,r),i.set(3,10,s),i.set(1,12,r),i}for(let l=0;l<10;l++){const c=3+l,h=14-l;i.set(c,h,s),i.set(c,h+1,r)}const o=12,a=5;if(t==="pickaxe"){for(let l=-4;l<=4;l++)i.set(o+l,a-1+Math.abs(l)>>1,e);for(let l=-3;l<=3;l++)i.set(o+l,a+Math.abs(l)>>1,e);i.set(o-4,a+1,n),i.set(o+4,a+1,n),i.set(o-5,a+2,n),i.set(o+5,a+2,n),i.set(o,a,n),i.set(o-1,a,n)}else if(t==="axe"){for(let l=-2;l<=3;l++)for(let c=-1;c<=3;c++)i.set(o+c,a+l,e);for(let l=-2;l<=3;l++)i.set(o+3,a+l,n);i.set(o-1,a-2,n),i.set(o-1,a+3,n)}else{for(let l=-1;l<=3;l++)for(let c=-2;c<=2;c++)i.set(o+c,a+l,e);for(let l=0;l<=2;l++)i.set(o,a+l,n);i.set(o-2,a+3,r),i.set(o+2,a+3,r)}return i}function si(i,t){if(i.fill("#e8e8e8"),i.noise(["#e2e2e2","#efefef","#d9d9d9"],313,10),t)for(const[e,n]of t)i.rect(e,n,2,2,"#f2f2f2");return i}ce.snow_side=i=>Ea(i,201,Bt.snow,Bt.dirt,4,3);for(const[i,[t,e]]of Object.entries(eg))for(const n of ng)ce[`tool_${n}_${i}`]=s=>ig(s,n,t,e);ce.mob_pig=i=>si(i,null);ce.mob_face=i=>(si(i,null),i.set(3,6,"#241a1a"),i.set(4,6,"#241a1a"),i.set(11,6,"#241a1a"),i.set(12,6,"#241a1a"),i.rect(6,10,4,2,"#3a2a2a"),i);ce.mob_snout=i=>(si(i,null),i.rect(4,4,8,6,"#d9a6a0"),i.set(5,6,"#5a3a38"),i.set(10,6,"#5a3a38"),i);ce.mob_cow=i=>(si(i,null),i.rect(0,0,16,5,"#4a3a34"),i.rect(3,9,6,5,"#3a2c28"),i);ce.mob_sheep=i=>(si(i,[[2,2],[9,5],[4,10]]),i);ce.mob_husk=i=>(si(i,null),i.rect(0,0,16,16,"#6f7d5f"),i.noise(["#5d6b52","#7c8a68"],77,12),i.set(3,6,"#0e1408"),i.set(4,6,"#0e1408"),i.set(11,6,"#0e1408"),i.set(12,6,"#0e1408"),i);ce.mob_crawler=i=>(si(i,null),i.rect(0,0,16,16,"#39424f"),i.noise(["#2e3742","#48525f"],91,14),i.rect(4,4,3,2,"#d8e6ff"),i.rect(10,4,3,2,"#d8e6ff"),i);ce.sapling=i=>{i.rect(6,11,4,4,"#6b4a2a");for(const[t,e]of[[5,7],[6,6],[7,5],[8,4],[9,5],[10,6],[11,7],[6,8],[9,8],[7,7],[8,7],[8,6]])i.set(t,e,"#4f9a2c");for(const[t,e]of[[7,6],[9,6],[8,8],[6,7],[10,7]])i.set(t,e,"#5aa832");return i};ce.item_stick=i=>{for(let t=0;t<9;t++)i.set(4+t,12-t,"#8a6134"),i.set(4+t,13-t,"#6d4c28");return i};ce.item_coal=i=>(i.blobs("#232323",7,12,3.4),i.blobs("#3b3b3b",5,44,2.2),i);ce.item_leather=i=>{i.rect(3,3,10,10,"#9c6b45"),i.rect(4,4,8,8,"#ab7850");for(let t=0;t<4;t++)i.set(4+t*2,4,"#8a5b3a"),i.set(11,5+t*2,"#8a5b3a");return i};ce.item_pork=i=>(i.rect(3,5,10,7,"#e08f8a"),i.rect(4,6,8,5,"#f0a8a2"),i.rect(5,7,3,2,"#f8c6c2"),i.set(12,5,"#c96f6c"),i.set(12,11,"#c96f6c"),i);ce.farmland=i=>{i.fill("#4b3520"),i.grain("#3f2b19","#57401f",.55);for(let t=1;t<15;t+=3)i.rect(0,t,16,2,"#33220f"),i.rect(0,t+2,16,1,"#5c4525");return i.speckles("#6d5230",16,7),i.border("#2b1c0c",.5),i};ce.wheat=i=>{i.clear();const t=[[2,5],[6,3],[10,6],[13,4],[4,11],[8,12],[12,10]];for(const[e,n]of t){for(let s=15;s>=n;s--)i.set(e,s,"#8aa63c",255);for(let s=0;s<4;s++)i.rect(e-1,n+s,3,1,"#dcb955"),i.set(e,n+s,"#f0d67e",255);i.set(e+1,n+3,"#6f8a2e",255)}return i};ce.hay_side=i=>{i.fill("#c2a03c"),i.grain("#b28f2f","#d3b254",.5);for(let t=0;t<16;t+=2)i.rect(0,t,16,1,"#ad8b2c");return i.rect(3,0,2,16,"#6d5318"),i.rect(11,0,2,16,"#6d5318"),i.rect(0,0,16,1,"#8f7220"),i.rect(0,15,16,1,"#7e6318"),i};ce.hay_top=i=>{i.fill("#d3b254"),i.grain("#c4a344","#e0c266",.5);for(const[t,e,n]of[[2,2,12],[4,4,8],[6,6,4]])i.rect(t,e,n,1,"#a98731"),i.rect(t,e+n-1,n,1,"#a98731"),i.rect(t,e,1,n,"#a98731"),i.rect(t+n-1,e,1,n,"#a98731");return i.rect(7,7,2,2,"#8a6c28"),i};ce.item_emerald=i=>{i.clear();for(let t=0;t<16;t++){const e=Math.round(2+(6-Math.abs(t-7.5))*1.1);i.rect(8-e,t,e*2,1,"#1f9c58")}return i.rect(5,5,4,4,"#43d47f"),i.rect(4,4,2,2,"#a6f2c4"),i.rect(9,9,3,3,"#146c3c"),i.set(8,3,"#8be9b6"),i.set(3,8,"#8be9b6"),i};ce.mob_villager=i=>{i.fill("#6d4b2c"),i.grain("#5f4025","#7d5a37",.5);for(let t=1;t<16;t+=4)i.rect(0,t,16,1,"#57381f");return i.rect(0,6,16,3,"#8a6a44"),i.rect(0,7,16,1,"#a3855c"),i.rect(2,10,12,1,"#57381f"),i};ce.mob_villager_face=i=>(i.fill("#c39a6b"),i.grain("#b8905f","#cba876",.4),i.rect(0,0,16,4,"#4a3520"),i.rect(0,3,16,1,"#5d452a"),i.rect(3,7,2,2,"#2f2a3a"),i.rect(11,7,2,2,"#2f2a3a"),i.rect(2,6,4,1,"#8a6a44"),i.rect(10,6,4,1,"#8a6a44"),i.rect(7,8,2,4,"#ab7f52"),i.rect(6,11,4,2,"#b98d5d"),i.rect(4,13,8,1,"#4a3520"),i);const sg=Object.keys(ce).filter(i=>ce[i]);function rg(){const i=[],t={};if(sg.forEach((e,n)=>{const s=tg(ce[e]);t[e]=n,i.push({name:e,index:n,tile:s,transparentPadding:e!=="water"})}),i.length>Bi*Bi)throw new Error("Слишком много тайлов для атласа");return{tiles:i,index:t}}const Ta=8;function ag(i){const t=new Vc;t.clear();const e=2+i,n=i*7+3;for(let s=0;s<e;s++){let r=1+(ut(s,i,n)*(_t-2)|0),o=1+(ut(s+5,i,n+1)*(_t-2)|0);const a=ut(s,0,n+2)>.5?1:-1,l=3+(i*.9+ut(s,1,n)*4|0);for(let c=0;c<l;c++){const h=i>=4?1:0;t.set(r,o,[12,12,12],225),h&&(t.set(r+a,o,[30,30,30],150),t.set(r,o+1,[20,20,20],120)),r+=a*(ut(c,s,n+3)>.45?1:0),o+=ut(c,s+2,n+4)>.35?1:-1,r=Math.max(0,Math.min(_t-1,r)),o=Math.max(0,Math.min(_t-1,o))}}return i>=6&&t.speckles([0,0,0],14,i,0),t}function og(){const i=[];for(let t=0;t<Ta;t++){const e=ag(t),n=new Tr(e.data,_t,_t,ze);n.magFilter=fe,n.minFilter=fe,n.generateMipmaps=!1,n.colorSpace=Pe,n.needsUpdate=!0,i.push(n)}return i}const zi=0,lg=[{id:38,name:"Саженец",key:"sapling",tiles:{all:"sapling",tinted:!0},render:"cross",cutout:!0,breakable:!0,hardness:.15,sound:"grass",plantH:.4},{id:39,name:"Кожа",key:"leather",tiles:{all:"item_leather"},render:"item",sound:"soft"},{id:40,name:"Мясо",key:"pork",tiles:{all:"item_pork"},render:"item",sound:"soft"},{id:41,name:"Палка",key:"stick",tiles:{all:"item_stick"},render:"item",sound:"wood"},{id:42,name:"Уголь",key:"coal_item",tiles:{all:"item_coal"},render:"item",sound:"soft"}],cg=[{kind:"pickaxe",label:"кирка",fem:!0,mine:["stone","glass"]},{kind:"axe",label:"топор",mine:["wood"]},{kind:"shovel",label:"лопата",fem:!0,mine:["dirt","sand","grass"]},{kind:"sword",label:"меч",mine:["plant","wool","grass"]}],hg=[{tier:"wood",fem:"деревянная",masc:"деревянный",speed:2.4,damage:2,uses:60},{tier:"stone",fem:"каменная",masc:"каменный",speed:3.6,damage:3,uses:132},{tier:"iron",fem:"железная",masc:"железный",speed:5.6,damage:5,uses:251},{tier:"diamond",fem:"алмазная",masc:"алмазный",speed:8.2,damage:7,uses:601}],ug=[{id:59,name:"Грядка",key:"farmland",tiles:{top:"farmland",bottom:"dirt",side:"dirt"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.4,sound:"sand",drops:"dirt"},{id:60,name:"Пшеница",key:"wheat",tiles:{all:"wheat"},render:"cross",solid:!1,opaque:!1,cutout:!0,breakable:!0,hardness:.05,sound:"grass",replaceable:!0,plantH:.62},{id:61,name:"Стог сена",key:"hay_block",tiles:{top:"hay_top",bottom:"hay_top",side:"hay_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.5,sound:"grass"},{id:62,name:"Изумруд",key:"emerald",tiles:{all:"item_emerald"},render:"item",sound:"soft"}],Wc=[];{let i=43;for(const t of hg)for(const e of cg)Wc.push({id:i++,name:`${(e.fem?t.fem:t.masc)[0].toUpperCase()}${(e.fem?t.fem:t.masc).slice(1)} ${e.label}`,key:`${t.tier}_${e.kind}`,tiles:{all:`tool_${e.kind}_${t.tier}`},render:"item",sound:"wood",tool:{kind:e.kind,mine:e.mine,speed:t.speed,damage:t.damage,uses:t.uses}})}const yt=[{id:0,name:"Воздух",key:"air",tiles:null,render:"none",solid:!1,opaque:!1,breakable:!1,replaceable:!0,hardness:0,sound:"soft"},{id:1,name:"Камень",key:"stone",tiles:{all:"stone"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.1,sound:"stone",drops:"cobblestone"},{id:2,name:"Дёрн",key:"grass",tiles:{top:"grass_top",bottom:"dirt",side:"grass_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.6,sound:"grass",drops:"dirt",tinted:!0},{id:3,name:"Земля",key:"dirt",tiles:{all:"dirt"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.5,sound:"dirt"},{id:4,name:"Булыжник",key:"cobblestone",tiles:{all:"cobblestone"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.3,sound:"stone"},{id:5,name:"Доски",key:"planks",tiles:{all:"planks"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1,sound:"wood"},{id:6,name:"Песок",key:"sand",tiles:{all:"sand"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.5,sound:"sand"},{id:7,name:"Песчаник",key:"sandstone",tiles:{top:"sandstone_top",bottom:"sandstone_top",side:"sandstone_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.9,sound:"stone"},{id:8,name:"Гравий",key:"gravel",tiles:{all:"gravel"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.6,sound:"sand"},{id:9,name:"Бревно",key:"log",tiles:{top:"log_top",bottom:"log_top",side:"log_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.2,sound:"wood"},{id:10,name:"Листва",key:"leaves",tiles:{all:"leaves"},render:"cube",solid:!0,opaque:!1,cutout:!0,breakable:!0,hardness:.3,sound:"grass",tinted:!0,drops:"sapling"},{id:11,name:"Вода",key:"water",tiles:{all:"water"},render:"liquid",solid:!1,opaque:!1,liquid:!0,hideSame:!0,breakable:!1,hardness:0,sound:"splash"},{id:12,name:"Стекло",key:"glass",tiles:{all:"glass"},render:"cube",solid:!0,opaque:!1,cutout:!0,hideSame:!0,breakable:!0,hardness:.4,sound:"glass"},{id:13,name:"Кирпичи",key:"bricks",tiles:{all:"bricks"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.4,sound:"stone"},{id:14,name:"Каменный кирпич",key:"stone_bricks",tiles:{all:"stone_bricks"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.3,sound:"stone"},{id:15,name:"Снег",key:"snow",tiles:{top:"snow",bottom:"dirt",side:"snow_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.3,sound:"grass"},{id:16,name:"Уголь",key:"coal_ore",tiles:{all:"coal_ore"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.6,sound:"stone"},{id:17,name:"Железо",key:"iron_ore",tiles:{all:"iron_ore"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:2,sound:"stone"},{id:18,name:"Золото",key:"gold_ore",tiles:{all:"gold_ore"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:2.2,sound:"stone"},{id:19,name:"Алмазы",key:"diamond_ore",tiles:{all:"diamond_ore"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:2.6,sound:"stone"},{id:20,name:"Редстоун",key:"redstone_ore",tiles:{all:"redstone_ore"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:2,sound:"stone",light:.25},{id:21,name:"Обсидиан",key:"obsidian",tiles:{all:"obsidian"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:5,sound:"stone"},{id:22,name:"Бедрок",key:"bedrock",tiles:{all:"bedrock"},render:"cube",solid:!0,opaque:!0,breakable:!1,hardness:0,sound:"stone"},{id:23,name:"Светокамень",key:"glowstone",tiles:{all:"glowstone"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.5,sound:"glass",light:1,fullBright:!0},{id:24,name:"Факел",key:"torch",tiles:{all:"torch"},render:"torch",solid:!1,opaque:!1,cutout:!0,breakable:!0,hardness:.05,sound:"wood",light:1,fullBright:!0,noSelect:!1,slim:!0},{id:25,name:"Высокая трава",key:"tall_grass",tiles:{all:"tall_grass",tinted:!0},render:"cross",solid:!1,opaque:!1,cutout:!0,breakable:!0,hardness:.05,sound:"grass",replaceable:!0,plantH:.5},{id:26,name:"Папоротник",key:"fern",tiles:{all:"fern",tinted:!0},render:"cross",solid:!1,opaque:!1,cutout:!0,breakable:!0,hardness:.05,sound:"grass",replaceable:!0,plantH:.46},{id:27,name:"Красный цветок",key:"flower_red",tiles:{all:"flower_red"},render:"cross",solid:!1,opaque:!1,cutout:!0,breakable:!0,hardness:.05,sound:"grass",replaceable:!0,plantH:.38},{id:28,name:"Жёлтый цветок",key:"flower_yellow",tiles:{all:"flower_yellow"},render:"cross",solid:!1,opaque:!1,cutable:!0,cutout:!0,replaceable:!0,hardness:.05,sound:"grass",plantH:.38},{id:29,name:"Кактус",key:"cactus",tiles:{top:"cactus_top",bottom:"cactus_top",side:"cactus_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.5,sound:"grass",inset:.06},{id:30,name:"Белая шерсть",key:"wool_white",tiles:{all:"wool_white"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.7,sound:"wool"},{id:31,name:"Красная шерсть",key:"wool_red",tiles:{all:"wool_red"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.7,sound:"wool"},{id:32,name:"Синяя шерсть",key:"wool_blue",tiles:{all:"wool_blue"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.7,sound:"wool"},{id:33,name:"Жёлтая шерсть",key:"wool_yellow",tiles:{all:"wool_yellow"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.7,sound:"wool"},{id:34,name:"Зелёная шерсть",key:"wool_lime",tiles:{all:"wool_lime"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.7,sound:"wool"},{id:35,name:"Чёрная шерсть",key:"wool_black",tiles:{all:"wool_black"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.7,sound:"wool"},{id:36,name:"Верстак",key:"crafting_table",tiles:{top:"crafting_top",bottom:"planks",side:"crafting_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1,sound:"wood"},{id:37,name:"Подзол",key:"podzol",tiles:{top:"podzol",bottom:"dirt",side:"podzol_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.5,sound:"dirt"},...lg,...Wc,...ug],dg=new Map(yt.map(i=>[i.key,i])),Dt=i=>i==null?zi:dg.get(i)?.id??zi,Il=i=>yt[i]?.liquid===!0,fg=i=>yt[i]?.render==="item",pg=i=>{const t=yt[i];return t?t.drops?Dt(t.drops):t.item||t.replaceable?0:i:0};function mg(i,t){if(!i||!t)return 1;const e=yt[t]?.tool;return e?e.mine.includes(i.sound)?e.speed:i.sound==="stone"||i.sound==="glass"?.45:1:1}const gg=i=>yt[i]?.tool?.damage??1,_g=Bi,vg=ir;class xg{constructor(){const{tiles:t,index:e}=rg(),n=J0(t),s=new Tr(n.data,n.width,n.height,ze);s.magFilter=fe,s.minFilter=ei,s.generateMipmaps=!0,s.wrapS=s.wrapT=tn,s.colorSpace=Pe,s.needsUpdate=!0,this.texture=s,this.index=e,this.tile=_t,this.cell=vg,this.grid=_g,this.canvases={};for(const r of t)this.canvases[r.name]=Q0(r.tile,1);this.cracks=og(),this.iconCache=new Map}setMaxAnisotropy(t){const e=Math.max(1,Math.min(8,t|0));return this.texture.anisotropy=e,this.texture.needsUpdate=!0,e}icon(t,e=48){const n=t+":"+e,s=this.iconCache.get(n);if(s)return s;const r=document.createElement("canvas");r.width=r.height=e;const o=r.getContext("2d");o.imageSmoothingEnabled=!1;const a=yt[t]??yt[zi];if(a&&a.tiles){const c=a.render==="cross"||a.render==="torch"||a.render==="item",h=this.canvases[a.tiles.top??a.tiles.all],u=this.canvases[a.tiles.side??a.tiles.all];if(c||!h||!u){const d=this.canvases[a.tiles.all]??h;if(d){const p=e*.8;o.drawImage(d,(e-p)/2,(e-p)/2,p,p)}}else Mg(o,e,h,u)}const l=r.toDataURL();return this.iconCache.set(n,l),l}}function Mg(i,t,e,n){const s=t*.46,r=t*.42,o=t*.08;i.save(),i.translate(0,o),i.save(),i.setTransform(s,s*.5,-s,s*.5,t/2,0),i.drawImage(e,0,0,1,1),i.restore(),i.save(),i.setTransform(s,s*.5,0,r,t/2-s,s*.5),i.drawImage(n,0,0,1,1),i.fillStyle="rgba(0,0,0,0.28)",i.fillRect(0,0,1,1),i.restore(),i.save(),i.setTransform(s,-s*.5,0,r,t/2,s*.5),i.drawImage(n,0,0,1,1),i.fillStyle="rgba(0,0,0,0.12)",i.fillRect(0,0,1,1),i.restore(),i.restore()}const st=16,jt=96,ke=34,Xc=ke+4,ne=(i,t,e)=>(t*st+e)*st+i,_r=32768,wa=65536,qc=(i,t)=>(i+_r)*wa+(t+_r);function sr(i){const t=Math.floor(i/wa)-_r,e=i%wa-_r;return[t,e]}const Aa=(i,t,e)=>i+","+t+","+e,yg=`
attribute vec4 light;
attribute vec3 tint;
varying vec4 vLight;
varying vec3 vTint;
varying vec2 vUv;
varying float vFog;
varying vec3 vWorld;
uniform float uTime;
uniform float uWave;
uniform float uFogDensity;
uniform float uFogStart;
uniform float uFogEnd;

void main() {
  vUv = uv;
  vLight = light;
  vTint = tint;
  vec3 p = position;
  vec4 world = modelMatrix * vec4(p, 1.0);
  if (uWave > 0.5 && light.w > 0.5) {
    world.y += sin(world.x * 0.8 + uTime * 1.6) * 0.035 + cos(world.z * 1.1 - uTime * 1.2) * 0.03;
  }
  vWorld = world.xyz;
  vec4 mv = viewMatrix * world;
  float d = length(mv.xyz);
  // Поздний линейный туман: до uFogStart мир абсолютно чистый, плотнеет только
  // к границе прокрутки — так мир читается большим, а край чанков не виден.
  float lin = clamp((d - uFogStart) / max(1.0, uFogEnd - uFogStart), 0.0, 1.0);
  float expf = 1.0 - exp(-uFogDensity * uFogDensity * d * d);
  vFog = clamp(max(lin * lin, expf), 0.0, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = 1.0;
}
`,Sg=`
precision highp float;
uniform sampler2D uMap;
uniform vec3 uSunColor;
uniform vec3 uAmbient;
uniform vec3 uTorch;
uniform vec3 uFogColor;
uniform float uSun;
uniform float uAlpha;
uniform float uAlphaTest;
uniform float uExposure;
uniform float uQuality;
uniform vec3 uSunDirW;
uniform float uSea;
uniform float uWave;
uniform float uTime;
varying vec4 vLight;
varying vec3 vTint;
varying vec2 vUv;
varying float vFog;
varying vec3 vWorld;

vec3 aces(vec3 x) {
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}

void main() {
  vec4 tex = texture2D(uMap, vUv);
  if (tex.a < uAlphaTest) discard;
  float occ = vLight.x;
  float sky = vLight.y;
  float blk = vLight.z;

  vec3 nrm = vec3(0.0, 1.0, 0.0);
  float lit0 = 1.0;
  if (uQuality > 0.5) {
    // Нормали у геометрии чанков нет (и не будет: это +3 float на вершину).
    // Грань плоская, поэтому нормаль точно восстанавливается из производных
    // мировой координаты — дёшево и без дополнительных атрибутов.
    nrm = normalize(cross(dFdx(vWorld), dFdy(vWorld)));
    // Материал двусторонний, а нормалей у геометрии нет: знак производной
    // зависит от порядка обхода треугольника, поэтому половина граней могла
    // получать нормаль «от камеры» → освещение прыгало шахматкой между
    // соседними квадами. Разворачиваем нормаль к зрителю: тогда она зависит
    // только от того, на какую сторону мы смотрим.
    vec3 Vw = normalize(cameraPosition - vWorld);
    if (dot(nrm, Vw) < 0.0) nrm = -nrm;
    lit0 = 0.72 + 0.5 * max(dot(nrm, uSunDirW), 0.0);
  }

  vec3 skyLight = uAmbient + uSunColor * (uSun * sky);
  vec3 lit = skyLight * occ * lit0 + uTorch * blk * (0.25 + 0.75 * occ);
  vec3 col = tex.rgb * vTint * lit;

  if (uQuality > 0.5 && uWave > 0.5) {
    // Вода: лёгкое волновое возмущение нормали + френелевское отражение неба
    // и солнечная дорожка. Без этого вода выглядела плоской закрашенной
    // поверхностью, и «шейдеров» как бы не было видно вовсе.
    float w1 = sin(vWorld.x * 1.7 + uTime * 2.1) + sin(vWorld.z * 1.31 - uTime * 1.7);
    float w2 = cos(vWorld.x * 1.13 - uTime * 1.3) + cos(vWorld.z * 1.9 + uTime * 1.9);
    nrm = normalize(nrm + vec3(w1 * 0.09, 0.0, w2 * 0.09));
    col *= (0.9 + 0.2 * (1.0 + w1 * 0.5));
  }

  if (uQuality > 1.5) {
    // Vw из блока выше здесь уже не видна (свой scope), поэтому считаем заново
    vec3 V = normalize(cameraPosition - vWorld);
    vec3 H = normalize(uSunDirW + V);
    float sp = pow(max(dot(nrm, H), 0.0), 34.0);
    col += uSunColor * sp * 0.26;
    float rim = pow(1.0 - clamp(dot(nrm, V), 0.0, 1.0), 3.0);
    col += uFogColor * rim * 0.09 * sky;
    if (uWave > 0.5) {
      vec3 V2 = normalize(cameraPosition - vWorld);
      float fr = pow(1.0 - clamp(dot(nrm, V2), 0.0, 1.0), 3.0);
      col = mix(col, uFogColor * (0.72 + 0.5 * uSun * sky), fr * 0.5);
      col += uSunColor * pow(max(dot(nrm, normalize(uSunDirW + V2)), 0.0), 120.0) * uSun * 0.85;
    }
  }

  col = clamp(col, 0.0, 1.45) * uExposure;
  if (uQuality > 1.5) {
    col = aces(col);
    float l = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(vec3(l), col, 1.12);
  }
  float fg = clamp(vFog, 0.0, 1.0);
  if (uQuality > 0.5) {
    // Дымка у земли: ниже уровня моря и в низинах туман держится гуще, чем на
    // возвышенностях. Это единственное, что делает рельеф «объёмным» вдали.
    float hz = clamp((uSea + 9.0 - vWorld.y) / 26.0, 0.0, 1.0) * 0.32;
    fg = clamp(max(fg, hz * (1.0 - fg)), 0.0, 1.0);
  }
  col = mix(col, uFogColor, fg);
  gl_FragColor = vec4(col, uAlpha);
}
`;function bg(i){const t={uMap:{value:i.texture},uTime:{value:0},uSun:{value:1},uSunColor:{value:new Ut(1,.97,.9)},uAmbient:{value:new Ut(.36,.42,.55)},uTorch:{value:new Ut(1,.58,.22)},uFogColor:{value:new Ut(.72,.85,.98)},uFogDensity:{value:.008},uFogStart:{value:70},uFogEnd:{value:110},uExposure:{value:1},uQuality:{value:0},uSunDirW:{value:new U(0,1,0)},uSea:{value:Xc}},e=n=>{const s=new Tn({uniforms:{...t,uWave:{value:n.wave?1:0},uAlpha:{value:n.alpha},uAlphaTest:{value:n.alphaTest}},vertexShader:yg,fragmentShader:Sg,transparent:n.transparent,side:je,depthWrite:!0});s.extensions={derivatives:!0};for(const r of Object.keys(t))s.uniforms[r]=t[r];return s};return{uniforms:t,setQuality(n){t.uQuality.value=Math.max(0,Math.min(2,n|0))},quality(){return t.uQuality.value},solid:e({wave:!1,alpha:1,alphaTest:.15,transparent:!1}),water:e({wave:!0,alpha:.76,alphaTest:.02,transparent:!0})}}const Eg=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Tg=`
precision highp float;
uniform vec3 uZenith, uHorizon, uNight, uSunDir, uSunTint;
uniform float uDay, uNightF;
varying vec3 vDir;
void main() {
  float h = clamp(vDir.y * 0.5 + 0.5, 0.0, 1.0);
  vec3 sky = mix(uHorizon, uZenith, pow(h, 0.75));
  sky = mix(uNight, sky, uDay);
  // тёплое зарево вокруг солнца
  float sun = max(dot(normalize(vDir), normalize(uSunDir)), 0.0);
  sky += uSunTint * pow(sun, 26.0) * 0.9 * uDay;
  sky += uSunTint * pow(sun, 3.0) * 0.14 * uDay;
  // лёгкая полоса на горизонте ночью
  sky += vec3(0.02, 0.03, 0.06) * uNightF * (1.0 - h);
  gl_FragColor = vec4(sky, 1.0);
}
`;function wg(){const i=new Di(9137),t=128,e=new Uint8ClampedArray(t*t*4);for(let o=0;o<t;o++)for(let a=0;a<t;a++){const l=i.fbm2(a/26,o/26,4)*1.5,c=l>.06?1:0,h=c?l>.28?255:232:0,u=(o*t+a)*4;e[u]=h,e[u+1]=h,e[u+2]=255,e[u+3]=c?235:0}const n=new Uint8ClampedArray(t*t*4),s=4;for(let o=0;o<t;o++)for(let a=0;a<t;a++){const l=(a/s|0)*s+(o/s|0)%2,c=(o/s|0)*s,h=(Math.min(t-1,c)*t+Math.min(t-1,l))*4,u=(o*t+a)*4;n[u]=e[h],n[u+1]=e[h+1],n[u+2]=e[h+2],n[u+3]=e[h+3]}const r=new Tr(n,t,t,ze);return r.wrapS=r.wrapT=cr,r.magFilter=fe,r.minFilter=ei,r.generateMipmaps=!0,r.colorSpace=Pe,r.needsUpdate=!0,r}function Ul(i){const e=new Uint8ClampedArray(4096),n=new Di(i==="moon"?4242:111);for(let r=0;r<32;r++)for(let o=0;o<32;o++){const a=o-16+.5,l=r-32/2+.5,c=Math.hypot(a,l),h=(r*32+o)*4;let u=255;i==="moon"?u=226-(n.perlin2(o*.35,r*.35)>.18?42:0)-(c>13.5?226:0):c>15&&(u=0);const d=c>15.5?0:255;e[h]=u,e[h+1]=i==="moon"?u:Math.min(255,u*.94),e[h+2]=i==="moon"?u*.98:u*.7,e[h+3]=d}const s=new Tr(e,32,32,ze);return s.magFilter=fe,s.minFilter=$e,s.generateMipmaps=!1,s.colorSpace=Pe,s.needsUpdate=!0,s}class Ag{constructor(t){this.group=new dn,t.add(this.group),this.uniforms={uZenith:{value:new Ut(.36,.62,.98)},uHorizon:{value:new Ut(.72,.85,.98)},uNight:{value:new Ut(.02,.03,.07)},uNightF:{value:0},uSunDir:{value:new U(0,1,0)},uSunTint:{value:new Ut(1,.85,.6)},uDay:{value:1}};const e=new Ee(new Xa(1,24,16),new Tn({uniforms:this.uniforms,vertexShader:Eg,fragmentShader:Tg,side:He,depthWrite:!1,fog:!1}));e.scale.setScalar(600),e.renderOrder=-10,this.dome=e,this.group.add(e);const n=new bn({map:Ul("sun"),transparent:!0,depthWrite:!1,color:16777215});this.sun=new Ee(new ki(1,1),n),this.sun.scale.setScalar(46),this.sun.renderOrder=-9,this.group.add(this.sun),this.moon=new Ee(new ki(1,1),new bn({map:Ul("moon"),transparent:!0,depthWrite:!1})),this.moon.scale.setScalar(30),this.moon.renderOrder=-9,this.group.add(this.moon);const s=900,r=new Float32Array(s*3);for(let l=0;l<s;l++){const c=Math.random()*Math.PI*2,h=Math.random()*.9+.05,u=Math.sqrt(Math.max(0,1-h*h));r[l*3]=Math.cos(c)*u*560,r[l*3+1]=h*560,r[l*3+2]=Math.sin(c)*u*560}const o=new Ae;o.setAttribute("position",new pe(r,3)),this.stars=new Hc(o,new Wa({color:16777215,size:2.4,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1})),this.stars.renderOrder=-9,this.group.add(this.stars);const a=wg();a.repeat.set(9,9),this.cloudTex=a,this.clouds=new Ee(new ki(2400,2400),new bn({map:a,transparent:!0,opacity:.85,depthWrite:!1,side:je,color:16777215})),this.clouds.rotation.x=-Math.PI/2,this.clouds.position.y=118,this.clouds.renderOrder=-8,this.group.add(this.clouds),this.dayLight=1,this.sunElevation=1}update(t,e,n,s){const r=(t-.25)*Math.PI*2+Math.PI/2,o=new U(Math.cos(r),Math.sin(r),.34).normalize(),a=o.y,l=xs.clamp(a*2.1+.18,0,1),c=xs.clamp(1-Math.abs(a)*4.5,0,1),h=1-l;this.sunElevation=a,this.dayLight=l,this.uniforms.uSunDir.value.copy(o),this.uniforms.uDay.value=l,this.uniforms.uNightF.value=h,this.uniforms.uSunTint.value.setRGB(1,.62+.3*(1-c),.35+.5*(1-c));const u=this.uniforms.uZenith.value,d=this.uniforms.uHorizon.value;u.setRGB(.19,.4,.86).lerp(new Ut(.02,.03,.08),h),d.setRGB(.72,.85,.98).lerp(new Ut(.05,.07,.14),h),c>.02&&(d.lerp(new Ut(.98,.46,.22),c*.75),u.lerp(new Ut(.42,.3,.6),c*.4)),this.dome.position.copy(n),this.stars.position.copy(n),this.clouds.position.x=n.x+t*900,this.clouds.position.z=n.z,this.cloudTex.offset.x=t*.9,this.stars.material.opacity=Math.pow(h,1.4)*.95,this.clouds.material.opacity=.25+e*.7;const p=1;if(this.sun.position.copy(n).addScaledVector(o,480),this.sun.lookAt(n),this.sun.material.color.setRGB(1,.94-c*.25,.78-c*.35),this.sun.material.opacity=xs.clamp(l*1.6,0,1),this.moon.position.copy(n).addScaledVector(o,-480),this.moon.lookAt(n),this.moon.material.opacity=xs.clamp(h*1.4,0,1),s){const g=.18+l*.92;s.uSun.value=g*p,s.uAmbient.value.setRGB(.3,.34,.44).multiplyScalar(.32+l*.75),s.uSunColor.value.setRGB(1,.93-c*.2,.82-c*.3),s.uFogColor.value.copy(d).lerp(u,.25),s.uSunDirW&&s.uSunDirW.value.set(o.x,Math.max(o.y,.05),o.z).normalize()}return{day:l,night:h,dusk:c,horizonColor:d.clone(),fogColor:s?s.uFogColor.value.clone():d.clone()}}dispose(){this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose())})}}const Rg=0,Yc=1,rr=2,$c=3,Ra=4,Ve=yt.length,Ai=(i,t,e,n=0)=>t[e]?1:n,ar=new Uint8Array(Ve),Cg=new Uint8Array(Ve),Ca=new Uint8Array(Ve),Kc=new Uint8Array(Ve),jc=new Uint8Array(Ve),La=new Uint8Array(Ve),Lg=new Uint8Array(Ve),Zc=new Float32Array(Ve),Jc=new Float32Array(Ve),Pa=new Float32Array(Ve),Pg=new Uint8Array(Ve),Qc=new Uint8Array(Ve),Da=new Uint8Array(Ve);for(let i=0;i<Ve;i++){const t=yt[i];ar[i]=Ai(i,t,"opaque"),Cg[i]=Ai(i,t,"solid"),jc[i]=Ai(i,t,"cutout"),Kc[i]=Ai(i,t,"hideSame"),La[i]=Ai(i,t,"fullBright"),Lg[i]=Ai(i,t,"replaceable"),Zc[i]=t.light||0,Jc[i]=t.inset||0,Pa[i]=t.render==="cross"?t.plantH??.62:1,Pg[i]=t.render==="item"?1:0,Qc[i]=t.tinted?1:0,Da[i]=t.liquid?1:0,Ca[i]=t.render==="cube"?Yc:t.render==="liquid"?rr:t.render==="cross"?$c:t.render==="torch"?Ra:Rg}const Dg=56,Nl=70,Ig=61,nt={stone:Dt("stone"),dirt:Dt("dirt"),grass:Dt("grass"),sand:Dt("sand"),sandstone:Dt("sandstone"),gravel:Dt("gravel"),bedrock:Dt("bedrock"),water:Dt("water"),snow:Dt("snow"),podzol:Dt("podzol"),log:Dt("log"),leaves:Dt("leaves"),coal:Dt("coal_ore"),iron:Dt("iron_ore"),gold:Dt("gold_ore"),diamond:Dt("diamond_ore"),redstone:Dt("redstone_ore"),cactus:Dt("cactus"),tall_grass:Dt("tall_grass"),fern:Dt("fern"),flower_red:Dt("flower_red"),flower_yellow:Dt("flower_yellow"),planks:Dt("planks"),glass:Dt("glass"),torch:Dt("torch"),glowstone:Dt("glowstone"),cobblestone:Dt("cobblestone"),stone_bricks:Dt("stone_bricks"),farmland:Dt("farmland"),wheat:Dt("wheat"),hay_block:Dt("hay_block")},Ht={OCEAN:0,BEACH:1,PLAINS:2,FOREST:3,DESERT:4,SNOWY:5,MOUNTAIN:6,SAVANNA:7,SWAMP:8,TAIGA:9},rn=32,vr=rn*1.5,Fl=12,Ol=[Ht.PLAINS,Ht.SAVANNA,Ht.DESERT,Ht.TAIGA,Ht.SNOWY],Ug=[[0,0],[38,0],[-38,0],[0,38],[0,-38],[26,26],[-26,-26],[26,-26],[-26,26]],Ia=42,Ng=[[.62,.78,1],[.72,.86,1],[.8,.9,1],[.76,.9,1],[.95,.92,.82],[.86,.94,1],[.88,.94,1],[.86,.92,.96],[.52,.72,.56],[.78,.9,.98]],Fg=["Океан","Пляж","Равнины","Лес","Пустыня","Снега","Горы","Саванна","Болото","Тайга"],kl=[[.62,.84,.44],[.74,.86,.56],[.62,.84,.44],[.45,.76,.32],[.9,.86,.56],[.76,.88,.82],[.7,.8,.64],[.84,.82,.44],[.5,.64,.3],[.52,.78,.42]];var Mr,th;class Og{constructor(t=1){Lr(this,Mr);this.seed=t>>>0,this.h=new Di(this.seed^1374496513),this.bi=new Di(this.seed^2654435769),this.cv=new Di(this.seed^625341585),this.or=new Di(this.seed^2146121005),this.cache=new Map,this._villages=new Map}climate(t,e){const n=this.bi.fbm2(t/470+13.7,e/470-4.2,3)*.5+.5,s=this.bi.fbm2(t/380-31.3,e/380+57.1,3)*.5+.5;return[n,s]}rawHeight(t,e){const n=this.h.fbm2(t/420,e/420,4)*.5+.5,s=this.h.fbm2(t/118,e/118,3),r=this.h.ridged2(t/260,e/260,3),o=this.h.fbm2(t/46,e/46,1),a=Math.max(0,this.h.fbm2(t/700+220,e/700-120,2)*1.5),l=Math.pow(r,1.9)*(8+a*78);let c=24+n*21+s*10.5+l+o*1.3;return n<.5&&(c-=(.5-n)*58),Math.max(3,Math.min(jt-8,Math.round(c)))}col(t,e){const n=t*4194304+e;let s=this.cache.get(n);if(s)return s;const r=this.rawHeight(t,e),[o,a]=this.climate(t,e);let l;return r<ke-2?l=Ht.OCEAN:r>=Dg?l=Ht.MOUNTAIN:r<=ke+1?l=Ht.BEACH:o>.55&&a<.46?l=Ht.DESERT:o<.36?l=Ht.SNOWY:r<=ke+7&&a>.6?l=Ht.SWAMP:a>.55?l=Ht.FOREST:o>.5&&a>.4?l=Ht.SAVANNA:o<.46&&a>.44?l=Ht.TAIGA:l=Ht.PLAINS,s={h:r,temp:o,humid:a,biome:l},this.cache.set(n,s),s}height(t,e){return this.col(t,e).h}biomeAt(t,e){return this.col(t,e).biome}climateAt(t,e){const n=this.col(t,e);return[n.temp,n.humid]}isCave(t,e,n){const s=Math.abs(this.cv.perlin3(t/52,e/64,n/52));return s<.06&&Math.abs(this.cv.perlin3(t/46+90,e/57+40,n/46-70))<.08||e<24&&s<.16&&this.cv.fbm3(t/26,e/20,n/26,3)>.62}oreCellType(t,e,n){const s=this.or.perlin3(t*.26,e*1.05,n*.26);if(s<.58)return 0;const r=e*4;return r<13&&s>.855?nt.diamond:r<23&&s>.8?nt.redstone:r<31&&s>.755?nt.gold:r<57&&s>.685?nt.iron:s>.625?nt.coal:0}villageSite(t,e){const n=t+","+e;if(this._villages.has(n))return this._villages.get(n);const s=Xe(this,Mr,th).call(this,t,e);return this._villages.size>8192&&this._villages.clear(),this._villages.set(n,s),s}villageAt(t,e){const n=Math.floor(t/(rn*3)),s=Math.floor(e/(rn*3));for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){const a=this.villageSite(n+r,s+o);if(!a)continue;const l=t-a.cx,c=e-a.cz;if(Math.abs(l)<=vr&&Math.abs(c)<=vr)return a}return null}villageColumn(t){const{site:e,cell:n,ci:s,cj:r,lx:o,lz:a}=t,l=e.h,c=[],h=Math.abs(o)>Fl||Math.abs(a)>Fl,u=n.kind==="plaza",d=(_,m)=>{_>=0&&_<jt&&c.push([_,m])};if(h)return d(l,e.desert?nt.sandstone:nt.gravel),c;if(u){const _=Math.max(Math.abs(o),Math.abs(a));if(_<=1)d(l,nt.cobblestone),d(l+1,nt.water);else if(_===2)d(l,nt.cobblestone),d(l+1,nt.stone_bricks);else if(Math.abs(o)===9&&Math.abs(a)===9){for(let m=l+1;m<=l+3;m++)d(m,nt.log);d(l+4,nt.glowstone),d(l,nt.cobblestone)}else _<=7&&d(l,nt.stone_bricks);return c}const p=n.w>>1,g=n.l>>1;if(n.kind==="house"){const _=o+p,m=a+g,f=_>=0&&m>=0&&_<n.w&&m<n.l,x=n.tall?5:4,v=l+2+x,S=v-1;if(!f)return Math.abs(o)<=p+1&&Math.abs(a)<=g+1&&d(S,nt.planks),c;const R=_===0||m===0||_===n.w-1||m===n.l-1,T=e.desert?nt.sandstone:e.cold?nt.cobblestone:nt.planks,b=nt.log;if(R){const I=(_===0||_===n.w-1)&&(m===0||m===n.l-1),M=_===p,A=m===g,q=(s<1&&_===n.w-1||s>1&&_===0||r<1&&m===n.l-1||r>1&&m===0)&&(s!==1?A:M);for(let K=l+1;K<=l+x;K++){if(q&&(K===l+1||K===l+2)){d(K,0);continue}d(K,I||K===l+x?b:T)}!q&&(s!==1?A:M)&&(d(l+3,nt.glass),d(l+2,nt.glass)),d(l,e.desert?nt.sand:nt.cobblestone),q&&d(l+3,nt.log)}else{d(l,nt.planks);const I=_===0||m===0||_===n.w-1||m===n.l-1;for(let M=l+1;M<S;M++)d(M,0);if(d(S,nt.planks),d(v,I?nt.planks:0),_===p&&m===g&&d(v,nt.log),_===1&&m===1)for(let M=l+1;M<=v+1;M++)d(M,nt.cobblestone);_===p&&m===g&&n.tall&&d(v+1,nt.glowstone)}return c}if(n.kind==="farm"){const _=Math.abs(o)<=8&&Math.abs(a)<=6;if(Math.abs(o-9)<=1&&Math.abs(a+5)<=1)return d(l,nt.water),c;if(Math.abs(o)===10||Math.abs(a)===8)return d(l+1,nt.log),c;if(!_)return c;const f=(a+6)%2===0;return d(l,f?nt.farmland:nt.dirt),f&&d(l+1,nt.wheat),Math.abs(o+9)<=1&&Math.abs(a-6)<=1&&(d(l+1,nt.hay_block),o===-9&&a===6&&d(l+2,nt.hay_block)),c}return Math.abs(o)===4&&Math.abs(a)===4&&!(o+a&2)&&d(l+1,nt.hay_block),Math.abs(o)===7&&Math.abs(a)===1&&(d(l+1,nt.log),d(l+2,nt.log)),c}treeAt(t,e){if(kg(this,t,e))return null;const n=ut(t,e,this.seed^1540483477),s=this.col(t,e),r=s.biome;if(s.h>Ig)return null;const o=r===Ht.FOREST?.055:r===Ht.TAIGA?.042:r===Ht.PLAINS?.008:r===Ht.SAVANNA?.006:r===Ht.SWAMP?.03:r===Ht.SNOWY?.02:r===Ht.MOUNTAIN?.004:0;if(r===Ht.DESERT)return n>.006||s.h<=ke+1?null:{kind:"cactus",trunk:2+(ut(t,e,7)*3|0),h:s.h};if(o===0||n>o)return null;const a=s.h;if(a<=ke+1||Math.max(Math.abs(a-this.col(t+1,e).h),Math.abs(a-this.col(t,e-1).h),Math.abs(a-this.col(t-1,e).h),Math.abs(a-this.col(t,e+1).h))>4)return null;const c=r===Ht.SNOWY||r===Ht.MOUNTAIN||r===Ht.TAIGA||r===Ht.SWAMP,h=c?6+(ut(t,e,11)*5|0):4+(ut(t,e,13)*3|0);return{kind:c?"spruce":"oak",trunk:h,h:a}}treeBlocks(t,e){const n=this.treeAt(t,e);if(!n)return null;const s=[],r=n.h;if(n.kind==="cactus"){for(let a=1;a<=n.trunk;a++)s.push([0,r+a,0,nt.cactus]);return s}if(n.kind==="spruce"){for(let l=1;l<=n.trunk;l++)s.push([0,r+l,0,nt.log]);const a=r+n.trunk;for(let l=0;l<3;l++){const c=l===0?2:l===1?1:0;for(let h=-c;h<=c;h++)for(let u=-c;u<=c;u++)Math.abs(h)+Math.abs(u)>c+1||h===0&&u===0||s.push([h,a-1-l,u,nt.leaves])}return s.push([0,a+1,0,nt.leaves]),s}for(let a=1;a<=n.trunk;a++)s.push([0,r+a,0,nt.log]);const o=r+n.trunk;for(let a=-2;a<=1;a++){const l=a<=-1?2:1;for(let c=-l;c<=l;c++)for(let h=-l;h<=l;h++){const u=Math.abs(c)+Math.abs(h);if(u>l+1||c===0&&h===0&&a<1||u===l+1&&ut(t+c,e+h+a*3,this.seed+31)>.6)continue;const d=o+a;d>=jt||s.push([c,d,h,nt.leaves])}}return s.push([0,o+1,0,nt.leaves]),s}generate(t){this.cache.clear();const{cx:e,cz:n}=t,s=t.blocks,r=new Uint8Array(st*st);(!t.biomes||t.biomes.length!==st*st)&&(t.biomes=new Uint8Array(st*st));const o=t.biomes;s.fill(0);let a=0,l=0;for(let c=0;c<st;c++)for(let h=0;h<st;h++){const u=e*st+h,d=n*st+c,p=this.col(u,d),g=p.h,_=p.biome,m=p.temp;r[c*st+h]=g,g>l&&(l=g),o[c*st+h]=_;let f=-1,x=0;const v=_===Ht.DESERT||_===Ht.BEACH,S=_===Ht.SNOWY||_===Ht.TAIGA||g>=Nl&&m<.45,R=_===Ht.SWAMP;for(let b=0;b<=g;b++){let I;b===0?I=nt.bedrock:b===g?g<=ke+1?I=ut(u,d,91)>.86?nt.gravel:nt.sand:R?I=g<=ke+2?nt.podzol:nt.grass:v?I=nt.sand:S?I=nt.snow:_===Ht.MOUNTAIN?I=nt.stone:_===Ht.SNOWY?I=nt.podzol:I=nt.grass:b>g-4?(I=v||g<=ke+1?nt.dirt:S||_===Ht.MOUNTAIN?nt.stone:nt.dirt,v&&b<g-1&&(I=nt.sandstone)):(I=nt.stone,b>1&&this.isCave(u,b,d)?I=0:b<g-3&&(b>>2!==f&&(f=b>>2,x=this.oreCellType(u,f,d)),x&&Z0(u,b,d,this.seed+x*17)<zg[x]&&(I=x)),b===1&&ut(u*3,d*5,this.seed+5)>.55&&(I=nt.bedrock)),I&&(s[ne(h,b,c)]=I,a++)}const T=R?ke+1:ke;for(let b=g+1;b<=T;b++)s[ne(h,b,c)]=nt.water;T>l&&(l=T)}try{for(let c=0;c<st;c++)for(let h=0;h<st;h++){const u=e*st+h,d=n*st+c,p=eh(this,u,d);if(!p)continue;const g=Bg(p,u-p.cx,d-p.cz);if(!g)continue;const _=this.villageColumn(g),m=r[c*st+h];let f=p.h;if(!s[ne(h,p.h,c)]){let x=p.h;for(;x>0&&!s[ne(h,x-1,c)]&&p.h-x<10;)x--;for(let v=p.h;v>=x;v--)s[ne(h,v,c)]=v===p.h?p.top:nt.dirt}if(m<p.h)for(let x=m+1;x<=p.h;x++)s[ne(h,x,c)]=x===p.h?p.top:nt.dirt;else if(m>p.h){for(let x=p.h+1;x<=m;x++)s[ne(h,x,c)]=0;s[ne(h,p.h,c)]=p.top}for(const[x,v]of _)s[ne(h,x,c)]=v,v!==0&&x>f&&(f=x),x+1>l&&(l=x+1);r[c*st+h]=Math.min(jt-1,f)}for(let c=-3;c<st+3;c++)for(let h=-3;h<st+3;h++){const u=e*st+h,d=n*st+c,p=this.treeBlocks(u,d);if(p)for(const[g,_,m,f]of p){const x=h+g,v=c+m;if(x<0||v<0||x>=st||v>=st)continue;const S=_;if(S<0||S>=jt)continue;const R=ne(x,S,v),T=s[R];(f!==nt.leaves||T===0||T===nt.tall_grass)&&(f===nt.log?s[R]=f:T===0&&(s[R]=f,a++),S+1>l&&(l=S+1))}}}catch(c){nh(this,c)}for(let c=0;c<st;c++)for(let h=0;h<st;h++){const u=e*st+h,d=n*st+c,p=r[c*st+h];if(p<=ke||p>=Nl)continue;const g=ne(h,p,c);if(s[g]!==nt.grass&&s[g]!==nt.podzol)continue;const _=ut(u,d,this.seed^668265263),m=ne(h,p+1,c);if(s[m]!==0)continue;const f=this.col(u,d).biome,x=f===Ht.FOREST||f===Ht.SWAMP,v=f===Ht.SAVANNA;p+1>l&&(l=p+1);const S=ut(u>>2,d>>2,this.seed+23601>>>0),R=S>.72?.2:S>.46?.6:1,T=(x?.115:v?.062:.085)*R,b=T+(x?.05:.026)*R;_<T?s[m]=nt.tall_grass:_<b?s[m]=nt.fern:_>.968?s[m]=nt.flower_red:_>.95&&(s[m]=nt.flower_yellow)}return t.hmax=Math.min(jt-1,l),a}}Mr=new WeakSet,th=function(t,e){if(ut(t*3+1,e*7+5,(this.seed^5350175)>>>0)<.72)return null;const n=Math.round((ut(t+11,e-3,this.seed+91>>>0)-.5)*14),s=Math.round((ut(t-7,e+17,this.seed+441>>>0)-.5)*14),r=t*rn*3+rn*1.5+n,o=e*rn*3+rn*1.5+s,a=this.col(r,o);if(!Ol.includes(a.biome))return null;let l=255,c=0;for(const[g,_]of Ug){const m=this.col(r+g,o+_);if(!Ol.includes(m.biome))return null;m.h<l&&(l=m.h),m.h>c&&(c=m.h)}if(c-l>6||l<=ke+1)return null;const h=Math.max(ke+2,Math.round((l+c)/2)),u=a.biome===Ht.DESERT,d=a.biome===Ht.SNOWY||a.biome===Ht.TAIGA,p=[];for(let g=0;g<3;g++)for(let _=0;_<3;_++){if(_===1&&g===1){p.push({kind:"plaza"});continue}const m=ut(t*97+_*13+5,e*61+g*29+7,this.seed+_*31+g*733>>>0),f=m<.56?"house":m<.78?"farm":"yard",x=ut(_*7+e,g*11+t,this.seed+17>>>0);p.push({kind:f,w:9+(x>.55?3:0)+(x>.86?2:0),l:9+(x>.35&&x<=.6?3:0),tall:x>.72})}return p.some(g=>g.kind==="house")||(p[0]={...p[0],kind:"house",w:9,l:9,tall:!1}),{cx:r,cz:o,h,biome:a.biome,desert:u,cold:d,cells:p,top:u?nt.sand:d&&a.biome===Ht.SNOWY?nt.snow:nt.grass}};function eh(i,t,e){try{return typeof i.villageAt=="function"?i.villageAt(t,e):null}catch(n){return nh(i,n),null}}const kg=(i,t,e)=>!!eh(i,t,e);function Bg(i,t,e){const n=Math.floor((t+vr)/rn),s=Math.floor((e+vr)/rn);return n<0||s<0||n>2||s>2?null:{site:i,ci:n,cj:s,lx:t-(n-1)*rn,lz:e-(s-1)*rn,cell:i.cells[s*3+n]}}function nh(i,t){i&&i._villageWarned||(i&&(i._villageWarned=!0),console.warn("застройка деревень пропущена (мир генерируется без неё):",t?.message??t))}function ih(i,t,e){const n=i?.terrain;return typeof n?.villageAt=="function"?!!n.villageAt(Math.floor(t),Math.floor(e)):!1}const zg={[nt.coal]:.42,[nt.iron]:.34,[nt.gold]:.26,[nt.diamond]:.22,[nt.redstone]:.32},Bl=2,Hg=3,qa=[{dir:[1,0,0],shade:.76,verts:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],uv:[[0,1],[0,0],[1,0],[1,1]]},{dir:[-1,0,0],shade:.76,verts:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],uv:[[0,1],[0,0],[1,0],[1,1]]},{dir:[0,1,0],shade:1,verts:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]},{dir:[0,-1,0],shade:.52,verts:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{dir:[0,0,1],shade:.9,verts:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],uv:[[0,1],[0,0],[1,0],[1,1]]},{dir:[0,0,-1],shade:.9,verts:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],uv:[[0,1],[0,0],[1,0],[1,1]]}],zl=1024,Gg=10,Vg=8192,Ii=[];function Hl(){for(let i=0;i<Ii.length;i++)if(Ii[i].cap>=zl){const t=Ii[i];return Ii.splice(i,1),t.reset(),t}return new sh(zl)}function Gl(i){i&&Ii.length<Gg&&i.cap<=Vg&&(i.reset(),Ii.push(i))}const Ui={ao:!0,smoothLight:!0},Wg=[.4,.6,.8,1],Xg=.125;class sh{constructor(t=4096){this.cap=t,this.pos=new Float32Array(t*12),this.uv=new Float32Array(t*8),this.light=new Float32Array(t*16),this.tint=new Float32Array(t*12),this.index=new Uint32Array(t*6),this.tr=1,this.tg=1,this.tb=1,this.q=0}setTint(t,e,n){this.tr=t,this.tg=e,this.tb=n}ensure(){if(this.q<this.cap)return;this.cap=Math.max(64,this.cap*2);const t=(e,n)=>{const s=new e.constructor(this.cap*n);return s.set(e),s};this.pos=t(this.pos,12),this.uv=t(this.uv,8),this.light=t(this.light,16),this.tint=t(this.tint,12),this.index=t(this.index,6)}push(t,e,n,s){this.ensure();const r=this.q*12,o=this.q*12,a=this.q*16,l=this.q*8,c=this.q*6;for(let d=0;d<4;d++){const p=t[d],g=n[d],_=r+d*3;this.pos[_]=p[0],this.pos[_+1]=p[1],this.pos[_+2]=p[2];const m=a+d*4;this.light[m]=g[0],this.light[m+1]=g[1],this.light[m+2]=g[2],this.light[m+3]=g[3]||0;const f=o+d*3;this.tint[f]=this.tr,this.tint[f+1]=this.tg,this.tint[f+2]=this.tb,this.uv[l+d*2]=e[d][0],this.uv[l+d*2+1]=e[d][1]}const h=this.q*4,u=this.index;s?(u[c]=h+1,u[c+1]=h+2,u[c+2]=h+3,u[c+3]=h+1,u[c+4]=h+3,u[c+5]=h):(u[c]=h,u[c+1]=h+1,u[c+2]=h+2,u[c+3]=h,u[c+4]=h+2,u[c+5]=h+3),this.q++}take(){return this.q===0?null:{position:this.pos.slice(0,this.q*12),uv:this.uv.slice(0,this.q*8),light:this.light.slice(0,this.q*16),tint:this.tint.slice(0,this.q*12),index:this.index.slice(0,this.q*6),quads:this.q,vertices:this.q*4}}reset(){this.q=0,this.tr=1,this.tg=1,this.tb=1}slice(){return this.q===0?null:{position:this.pos.subarray(0,this.q*12),uv:this.uv.subarray(0,this.q*8),light:this.light.subarray(0,this.q*16),tint:this.tint.subarray(0,this.q*12),index:this.index.subarray(0,this.q*6),quads:this.q,vertices:this.q*4}}}function xr(i,t,e,n){const s=t*n,r=i%n,o=i/n|0,a=(t-e)/2;return{u0:(r*t+a)/s,v0:(o*t+a)/s,s:e/s}}const Ua=21,Na=Ua*Ua;let ss=null;function qg(i){const t=i*Na;return!ss||ss.length<t?ss=new Uint8Array(t):ss.fill(0,0,t),ss}class Yg{constructor(t,e,n){const s=[];for(let r=0;r<9;r++)s.push(null);this.at=(r,o)=>{var a;return s[a=(r+1)*3+(o+1)]??(s[a]=t.getChunk(e+r,n+o)??void 0)},this.world=t,this.cx=e,this.cz=n}}function $g(i,t,e){const n=Hl();let s=null;const r=t.cx,o=t.cz,a=t.blocks,l=t.biomes,c=new Yg(i,r,o),h=st,u=(C,P,X)=>{if(P<0)return 1;if(P>=jt)return 0;if(C>=0&&C<h&&X>=0&&X<h)return a[ne(C,P,X)];const N=C<0?-1:C>=h?1:0,H=X<0?-1:X>=h?1:0,Y=c.at(N,H);return Y?Y.blocks[ne(C+(N?-N*h:0),P,X+(H?-H*h:0))]:0},d=(C,P,X)=>{if(C>=0&&C<h&&X>=0&&X<h)return ar[a[ne(C,P,X)]]===1;const N=C<0?-1:C>=h?1:0,H=X<0?-1:X>=h?1:0,Y=c.at(N,H);return Y?ar[Y.blocks[ne(C+(N?-N*h:0),P,X+(H?-H*h:0))]]===1:!1},p=(C,P,X)=>{if(P>=jt)return 1;const N=C<0?-1:C>=h?1:0,H=X<0?-1:X>=h?1:0,Y=N||H?c.at(N,H):t,tt=C+(N?-N*h:0),et=X+(H?-H*h:0);let V;return Y?V=Y.skyH[(et&15)*h+(tt&15)]:V=i.terrain.col(r*h+C,o*h+X).h+1,V===255||P>=V?1:Math.max(.13,1-(V-P)*.055)},g=(C,P,X)=>{if(P<0||P>=jt)return 0;const N=C<0?-1:C>=h?1:0,H=X<0?-1:X>=h?1:0,Y=N||H?c.at(N,H):t;return!Y||!Y.light?0:Y.light[ne(C+(N?-N*h:0),P,X+(H?-H*h:0))]},_=[0,0,0],m=[0,0,0],f=[0,0,0],x=[0,0,0],v=[0,0],S=[0,0],R=[0,0],T=[0,0],b=[0,0,0],I=[0,0,0],M=[0,0,0],A=[0,0,0],G=t.hmax?Math.min(jt,Math.max(t.hmax+2,Xc)):jt,q=qg(Math.min(jt,G+2)+1),K=(C,P,X)=>{if(P<0)return!0;if(P>=jt)return!1;if(C<-2||C>h+1||X<-2||X>h+1||(P+1)*Na>=q.length)return d(C,P,X);const N=(P+1)*Na+(X+2)*Ua+(C+2),H=q[N];if(H)return H===2;const Y=d(C,P,X)?2:1;return q[N]=Y,Y===2};for(let C=0;C<G;C++)for(let P=0;P<h;P++){const X=(C*h+P)*h;for(let N=0;N<h;N++){const H=a[X+N];if(H===0)continue;const Y=Ca[H],tt=yt[H];let et=1,V=1,j=1;if(Qc[H]||Da[H]){const xt=l?l[P*h+N]:2,ht=(Da[H]?Ng:kl)[xt]??kl[2];et=ht[0],V=ht[1],j=ht[2]}if(n.setTint(et,V,j),s&&s.setTint(et,V,j),Y===$c||Y===Ra){const xt=xr(e.index[tt.tiles.all],e.cell,e.tile,e.grid),ht=La[H]?1:g(N,C,P),Wt=(Q,pt)=>[xt.u0+Q*xt.s,xt.v0+pt*xt.s];v[0]=Wt(0,1)[0],v[1]=Wt(0,1)[1],S[0]=Wt(0,0)[0],S[1]=Wt(0,0)[1],R[0]=Wt(1,0)[0],R[1]=Wt(1,0)[1],T[0]=Wt(1,1)[0],T[1]=Wt(1,1)[1],b[0]=I[0]=M[0]=A[0]=1,b[1]=I[1]=M[1]=A[1]=1,b[2]=I[2]=M[2]=A[2]=ht,b[3]=I[3]=M[3]=A[3]=0;const J=[v,S,R,T],$=[b,I,M,A];if(Y===Ra)n.push([[N+.6,C,P+.6],[N+.6,C+.625,P+.6],[N+.4,C+.625,P+.6],[N+.4,C,P+.6]],J,$),n.push([[N+.4,C,P+.4],[N+.4,C+.625,P+.4],[N+.6,C+.625,P+.4],[N+.6,C,P+.4]],J,$),n.push([[N+.6,C,P+.4],[N+.6,C+.625,P+.4],[N+.6,C+.625,P+.6],[N+.6,C,P+.6]],J,$),n.push([[N+.4,C,P+.6],[N+.4,C+.625,P+.6],[N+.4,C+.625,P+.4],[N+.4,C,P+.4]],J,$),n.push([[N+.4,C+.625,P+.6],[N+.6,C+.625,P+.6],[N+.6,C+.625,P+.4],[N+.4,C+.625,P+.4]],[v,S,R,T],$);else{const rt=Pa[H]>0?Pa[H]:1;n.push([[N+.146,C,P+.146],[N+.146,C+rt,P+.146],[N+.854,C+rt,P+.854],[N+.854,C,P+.854]],J,$),n.push([[N+.854,C,P+.146],[N+.854,C+rt,P+.146],[N+.146,C+rt,P+.854],[N+.146,C,P+.854]],J,$)}continue}if(Y!==Yc&&Y!==rr)continue;const ct=Y===rr;let vt=n;ct&&(s||(s=Hl(),s.setTint(et,V,j)),vt=s);const gt=Jc[H],Nt=La[H]===1,Ot=Zc[H],Ct=jc[H]===1,Zt=Kc[H]===1,O=ct&&u(N,C+1,P)!==H?Xg:0,he=tt.tiles,At=Ui.ao&&!ct&&!Nt&&!Ct;for(let xt=0;xt<6;xt++){const ht=qa[xt],Wt=N+ht.dir[0],Lt=C+ht.dir[1],w=P+ht.dir[2],y=u(Wt,Lt,w);if(y===H&&Zt||y!==0&&(ar[y]===1||ct&&Ca[y]===rr))continue;const k=xt===Bl?he.top??he.all:xt===Hg?he.bottom??he.all:he.side??he.all,J=e.index[k]??e.index[he.all],$=xr(J,e.cell,e.tile,e.grid),Q=ct&&O>0&&xt===Bl?1:0;let pt=p(Wt,Lt,w);Ui.smoothLight||(pt=pt>=1?1:.28);const rt=Nt?1:Ot>0?Math.max(Ot,g(Wt,Lt,w)):g(Wt,Lt,w),mt=ht.shade,wt=[_,m,f,x],kt=[v,S,R,T],Z=[b,I,M,A],Qt=[0,0,0,0];for(let bt=0;bt<4;bt++){const Mt=ht.verts[bt];wt[bt][0]=gt?N+(Mt[0]?1-gt:gt):N+Mt[0],wt[bt][1]=C+Mt[1]-(Mt[1]===1?O:0),wt[bt][2]=gt?P+(Mt[2]?1-gt:gt):P+Mt[2];let Et=mt;if(At){const Ft=ht.verts[bt+1&3],te=ht.verts[bt+3&3],oe=Ft[0]-Mt[0],Gt=Ft[1]-Mt[1],it=Ft[2]-Mt[2],L=te[0]-Mt[0],ot=te[1]-Mt[1],lt=te[2]-Mt[2],Rt=K(Wt+oe,Lt+Gt,w+it)?1:0,Tt=K(Wt+L,Lt+ot,w+lt)?1:0,ie=Rt&&Tt?0:K(Wt+oe+L,Lt+Gt+ot,w+it+lt)?1:0,ee=Rt&&Tt?0:3-(Rt+Tt+ie);Et*=Wg[ee],Qt[bt]=ee}Z[bt][0]=Et,Z[bt][1]=pt,Z[bt][2]=rt,Z[bt][3]=Q;const ft=ht.uv[bt];kt[bt][0]=$.u0+ft[0]*$.s,kt[bt][1]=$.v0+ft[1]*$.s}vt.push(wt,kt,Z,Qt[0]+Qt[2]>Qt[1]+Qt[3])}}}const D={solid:n.take(),water:s?s.take():null};return Gl(n),Gl(s),D}const Vl=(i,t,e)=>!!i.getChunk(t+1,e)&&!!i.getChunk(t-1,e)&&!!i.getChunk(t,e+1)&&!!i.getChunk(t,e-1),Kg=3.4,jg=16,Zg=1.2;function Jg(i,t,e=6){const n=t>60;let s=e;return n?s=jg:i>20&&t<32?s=s*.4:i<13&&t>8&&(s=e*1.4),{pool:Math.max(Kg,s),gen:n?.8:t>24?.35:.5}}class hs{constructor(t,e,n,s){this.world=t,this.scene=e,this.materials=n,this.atlas=s,this.objects=new Map,this.renderDistance=10,this.streamBudget=6,this._frameMs=16.7,this._last=0,this._candidates=[],this.stats={gen:0,mesh:0,quads:0,pending:0,ms:0}}static key(t,e){return qc(t,e)}setRenderDistance(t){this.renderDistance=Math.max(2,Math.min(16,t|0))}streamDebug(){const t=this.world;return{gen:this.stats.gen,mesh:this.stats.mesh,pending:t.dirtyMesh.size,light:t.dirtyLight.size,genErr:this._genErrCount??0,meshErr:this._meshErrCount??0,msg:t.lastGenError??this._meshErrMsg??""}}update(t){const e=this.world,n=Math.floor(t.x/st),s=Math.floor(t.z/st),r=this.renderDistance,o=t.vx??0,a=t.vz??0,l=Math.max(-2,Math.min(2,Math.round(o*1.1/st))),c=Math.max(-2,Math.min(2,Math.round(a*1.1/st))),h=n+l,u=s+c,d=e.dirtyMesh.size,p=performance.now();if(this._last){const b=Math.min(250,p-this._last);this._frameMs+=(b-this._frameMs)*.15}this._last=p;const g=Jg(this._frameMs,d,this.streamBudget),_=g.pool,m=p+_,f=p+Math.max(Zg,_*g.gen);let x=0;t:for(let b=0;b<=r+1;b++)for(let I=-b;I<=b;I++)for(let M=-b;M<=b;M++){if(Math.max(Math.abs(M),Math.abs(I))!==b)continue;const A=h+M,G=u+I,q=e.getChunk(A,G);if(q&&q.needsMesh&&Vl(e,A,G)&&e.dirtyMesh.add(hs.key(A,G)),!q){try{e.ensureChunk(A,G)}catch(K){this._genErrCount=(this._genErrCount??0)+1,this._genErr||(this._genErr=1,console.error("чанк не сгенерирован:",A,G,K));continue}if(x++,performance.now()>=f)break t}}const v=Math.min(m,performance.now()+_*.2);if(e.dirtyLight.size)for(const b of[...e.dirtyLight]){const[I,M]=sr(b),A=e.getChunk(I,M);if(A&&e.recomputeLight(A),e.dirtyLight.delete(b),performance.now()>=v)break}let S=0;const R=[];for(const b of e.dirtyMesh){const[I,M]=sr(b);if(Math.max(Math.abs(I-n),Math.abs(M-s))>r+1){e.dirtyMesh.delete(b);continue}if(!e.getChunk(I,M)){e.dirtyMesh.delete(b);continue}if(!Vl(e,I,M)){e.dirtyMesh.delete(b);continue}R.push([(I-h)**2+(M-u)**2,I,M])}R.sort((b,I)=>b[0]-I[0]);for(const[,b,I]of R){try{this.remesh(b,I)}catch(M){this._meshErrCount=(this._meshErrCount??0)+1,this._meshErrMsg=String(M?.message??M),this._meshErr||(this._meshErr=1,console.error("меширование чанка не удалось:",b,I,M))}if(e.dirtyMesh.delete(hs.key(b,I)),S++,performance.now()>=m)break}this.stats.gen=x,this.stats.mesh=S,this.stats.pending=e.dirtyMesh.size,this.stats.ms=performance.now()-p,this.stats.frameMs=this._frameMs;const T=r+3;for(const[b,I]of this.objects){const[M,A]=sr(b);Math.max(Math.abs(M-n),Math.abs(A-s))>T&&(this.disposeObject(I),this.objects.delete(b),e.removeChunk(M,A))}}remesh(t,e){const n=this.world,s=n.getChunk(t,e);if(!s)return;const r=hs.key(t,e);let o=this.objects.get(r);const a=$g(n,s,this.atlas);if(!a.solid&&!a.water){o&&(this.disposeObject(o),this.objects.delete(r)),s.needsMesh=!1;return}o||(o={solid:null,water:null},this.objects.set(r,o)),o.solid=this.applyMesh(o.solid,a.solid,this.materials.solid,t,e),o.water=this.applyMesh(o.water,a.water,this.materials.water,t,e),s.needsMesh=!1,this.stats.quads=(a.solid?.quads??0)+(a.water?.quads??0)}applyMesh(t,e,n,s,r){if(!e)return t&&(this.scene.remove(t),t.geometry.dispose()),null;let o=t?t.geometry:null;o||(o=new Ae,o.boundingSphere=new Yi(new U(st/2,jt/2,st/2),Math.sqrt((st/2)**2*2+(jt/2)**2)),o.boundingBox=new qi(new U(0,0,0),new U(st,jt,st)));const a=(h,u,d)=>{const p=o.getAttribute(h);if(p&&p.array.length>=u.length&&p.array.constructor===u.constructor){p.array.set(u),p.needsUpdate=!0;return}const g=new pe(u,d);g.setUsage(No),o.setAttribute(h,g)};a("position",e.position,3),a("uv",e.uv,2),a("light",e.light,4),a("tint",e.tint,3);const l=o.getIndex();if(l&&l.array.length>=e.index.length&&l.array.constructor===e.index.constructor)l.array.set(e.index),l.needsUpdate=!0;else{const h=new pe(e.index,1);h.setUsage(No),o.setIndex(h)}if(o.setDrawRange(0,e.index.length),t)return t.geometry=o,t;const c=new Ee(o,n);return c.position.set(s*st,0,r*st),c.matrixAutoUpdate=!1,c.updateMatrix(),c.renderOrder=n===this.materials.water?2:0,c.frustumCulled=!0,this.scene.add(c),c}disposeObject(t){for(const e of[t.solid,t.water])e&&(this.scene.remove(e),e.geometry.dispose())}dispose(){for(const[t,e]of[...this.objects])this.disposeObject(e),this.objects.delete(t)}rebuildAll(){for(const t of this.world.chunks.keys())this.world.dirtyMesh.add(t)}setVisible(t){for(const e of this.objects.values())e.solid&&(e.solid.visible=t),e.water&&(e.water.visible=t)}get chunkMeshCount(){return this.objects.size}}class Qg{constructor(t,e=700){this.max=e,this.count=0,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e);const n=new Ae;n.setAttribute("position",new pe(this.pos,3)),n.setAttribute("color",new pe(this.col,3)),n.setDrawRange(0,0),this.geo=n,this.points=new Hc(n,new Wa({size:.12,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!0})),this.points.frustumCulled=!1,t.add(this.points)}burst(t,e,n,s,r,o={}){const a=o.speed??3.2,l=o.life??.75,c=o.gravity??22;for(let h=0;h<s;h++){this.count>=this.max&&this.swap(0,--this.count);const u=this.count++;this.pos[u*3]=t+(Math.random()-.5)*(o.spread??.7),this.pos[u*3+1]=e+(Math.random()-.5)*(o.spread??.7),this.pos[u*3+2]=n+(Math.random()-.5)*(o.spread??.7),this.vel[u*3]=(Math.random()-.5)*a,this.vel[u*3+1]=Math.random()*a*.7+1.2,this.vel[u*3+2]=(Math.random()-.5)*a,this.col[u*3]=r[0]*(.75+Math.random()*.4),this.col[u*3+1]=r[1]*(.75+Math.random()*.4),this.col[u*3+2]=r[2]*(.75+Math.random()*.4),this.life[u]=l*(.6+Math.random()*.6),this.maxLife[u]=this.life[u],this.gravity=c}}swap(t,e){for(let n=0;n<3;n++)[this.pos[t*3+n],this.pos[e*3+n]]=[this.pos[e*3+n],this.pos[t*3+n]],[this.col[t*3+n],this.col[e*3+n]]=[this.col[e*3+n],this.col[t*3+n]],[this.vel[t*3+n],this.vel[e*3+n]]=[this.vel[e*3+n],this.vel[t*3+n]];[this.life[t],this.life[e]]=[this.life[e],this.life[t]],[this.maxLife[t],this.maxLife[e]]=[this.maxLife[e],this.maxLife[t]]}update(t){const e=this.gravity??22;let n=0;for(;n<this.count;){if(this.life[n]-=t,this.life[n]<=0){this.swap(n,--this.count);continue}this.vel[n*3+1]-=e*t;for(let s=0;s<3;s++)this.pos[n*3+s]+=this.vel[n*3+s]*t;n++}this.geo.setDrawRange(0,this.count),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}}const t_=[.76,.76,1,.55,.9,.9];function e_(i,t,e=1){const n=[],s=[],r=[],o=[],a=i.tiles??{};for(let c=0;c<6;c++){const h=qa[c],u=c===0?a.top??a.all:c===1?a.bottom??a.all:a.side??a.all,d=xr(t.index[u]??t.index[a.all]??0,t.cell,t.tile,t.grid),p=n.length/3;for(let g=0;g<4;g++){const _=h.verts[g];n.push(_[0]*e-e/2,_[1]*e-e/2,_[2]*e-e/2);const m=h.uv[g];s.push(d.u0+m[0]*d.s,d.v0+m[1]*d.s);const f=t_[c];r.push(f,f,f)}o.push(p,p+1,p+2,p,p+2,p+3)}const l=new Ae;return l.setAttribute("position",new Ie(n,3)),l.setAttribute("uv",new Ie(s,2)),l.setAttribute("color",new Ie(r,3)),l.setIndex(o),l}class n_{constructor(t){this.atlas=t,this.group=new dn,this.blockMesh=null,this.blockId=-1,this.arm=new Ee(new En(.16,.5,.14),new bn({color:14262378,depthTest:!1}));const e=this.arm.geometry,n=new Float32Array(e.attributes.position.count/4*4*3);let s=0;for(let r=0;r<6;r++)for(let o=0;o<4;o++){const a=.62+(r===2?.38:r===3?.05:.2);n[s++]=a,n[s++]=a,n[s++]=a}e.setAttribute("color",new pe(n,3)),this.arm.material.vertexColors=!0,this.arm.position.set(.24,-.36,-.6),this.arm.rotation.set(.5,0,.1),this.arm.renderOrder=999,this.group.add(this.arm),this.baseBlock=new U(.34,-.32,-.62),this.baseArm=this.arm.position.clone(),this.swing=0,this.swingActive=0,this.bobPhase=0,this.dayLight=1}setBlock(t){if(t===this.blockId)return;this.blockId=t,this.blockMesh&&(this.group.remove(this.blockMesh),this.blockMesh.geometry.dispose(),this.blockMesh=null);const e=yt[t];if(!e||!e.tiles){this.arm.visible=!0;return}const n=e_(e,this.atlas,.34),s=new bn({map:this.atlas.texture,vertexColors:!0,side:je,depthTest:!1});this.blockMesh=new Ee(n,s),this.blockMesh.position.copy(this.baseBlock),this.blockMesh.rotation.set(.1,-.72,.12),this.blockMesh.renderOrder=999,this.group.add(this.blockMesh),this.arm.visible=!1}triggerSwing(){this.swingActive=1}update(t,{moving:e=0,breaking:n=0,breakProgress:s=0}){this.bobPhase+=t*(2+e*7),this.swingActive=Math.max(0,this.swingActive-t*3.4);const r=this.swingActive,o=Math.sin((1-r)*Math.PI)*.9,a=Math.cos(this.bobPhase)*.012*e,l=Math.abs(Math.sin(this.bobPhase))*.016*e,c=n?Math.sin(performance.now()*.04)*.01*(.4+s):0;this.blockMesh??this.arm,this.blockMesh&&(this.blockMesh.position.set(this.baseBlock.x+a+c,this.baseBlock.y-l,this.baseBlock.z+o*.12),this.blockMesh.rotation.set(.1-o*.7,-.72,.12+o*.25)),this.arm.position.set(this.baseArm.x+a+c,this.baseArm.y-l,this.baseArm.z+o*.14),this.arm.rotation.set(.5-o*.9,0,.1);const h=.28+.72*this.dayLight,u=new Ut(h,h,h*1.02);this.blockMesh&&this.blockMesh.material.color.copy(u),this.arm.material.color.copy(u)}}class i_{constructor(t){this.atlas=t;const e=new En(1.004,1.004,1.004);this.outline=new q0(new $0(new En(1.002,1.002,1.002)),new zc({color:0,transparent:!0,opacity:.5,depthWrite:!1})),this.outline.visible=!1,this.crack=new Ee(e,new bn({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,side:je})),this.crack.visible=!1,this.stage=-1,this.group=new dn,this.group.add(this.outline,this.crack)}show(t){if(!t){this.outline.visible=this.crack.visible=!1;return}this.outline.position.set(t.x+.5,t.y+.5,t.z+.5),this.crack.position.copy(this.outline.position),this.outline.visible=!0}hide(){this.show(null)}setBreakProgress(t){if(t<=0){this.crack.visible=!1,this.stage=-1;return}const e=Math.min(Ta-1,Math.floor(t*Ta));e!==this.stage&&(this.stage=e,this.crack.material.map=this.atlas.cracks[e],this.crack.material.needsUpdate=!0),this.crack.visible=!0}setDayLight(t){const e=.35+.65*t;this.crack.material.color.setRGB(e,e,e),this.outline.material.opacity=.25+.3*t}}const Pn=7;class s_{constructor(t,e){this.cx=t,this.cz=e,this.blocks=new Uint8Array(st*st*jt),this.skyH=new Uint8Array(st*st),this.light=null,this.emitters=[],this.generated=!1,this.needsMesh=!0,this.hmax=0}}const r_=[[1,0],[-1,0],[0,1],[0,-1]];class ha{constructor(t=Ia){this.seed=t>>>0,this.terrain=new Og(this.seed),this.chunks=new Map,this.edits=new Map,this._original=new Map,this.dirtyMesh=new Set,this.dirtyLight=new Set,this._cacheKey=-1,this._cacheChunk=null,this.stats={generated:0}}key(t,e){return qc(t,e)}static decode(t){return sr(t)}getChunk(t,e){const n=this.key(t,e);if(n===this._cacheKey)return this._cacheChunk;const s=this.chunks.get(n)??null;return s?(this._cacheKey=n,this._cacheChunk=s,s):null}ensureChunk(t,e){const n=this.key(t,e);let s=this.chunks.get(n);if(s)return s;const r=this._genFail?.get(n)??0;if(r>=3)throw new Error(`чанк ${t},${e} не генерируется (3 попытки): ${this.lastGenError??"см. консоль"}`);s=new s_(t,e);try{this.terrain.generate(s),this.applyEdits(s),this.finalize(s)}catch(o){throw this.chunks.delete(n),this._cacheKey===n&&(this._cacheKey=-1),this._genFail=(this._genFail??new Map).set(n,r+1),this.lastGenError=String(o?.message??o),o}this._genFail?.delete(n),this.chunks.set(n,s),this._cacheKey=-1,s.generated=!0,s.needsMesh=!0,this.stats.generated++,this.dirtyLight.add(n),this.dirtyMesh.add(n);for(const[o,a]of r_){const l=this.key(t+o,e+a),c=this.chunks.get(l);c&&(c.needsMesh=!0,this.dirtyMesh.add(l))}return s}applyEdits(t){if(this.edits.size===0)return;const e=t.cx*st,n=t.cz*st;if(this.edits.size<6e3){for(const[s,r]of this.edits){const o=s.indexOf(","),a=s.indexOf(",",o+1),l=+s.slice(0,o),c=+s.slice(o+1,a),h=+s.slice(a+1),u=l-e,d=h-n;u<0||d<0||u>=st||d>=st||c<0||c>=jt||(t.blocks[ne(u,c,d)]=r,c+1>t.hmax&&(t.hmax=c+1))}return}for(let s=0;s<st;s++)for(let r=0;r<st;r++)for(let o=0;o<jt;o++){const a=this.edits.get(Aa(e+r,o,n+s));a!==void 0&&(t.blocks[ne(r,o,s)]=a,o+1>t.hmax&&(t.hmax=o+1))}}finalize(t){const e=t.blocks;t.emitters.length=0;for(let n=0;n<st;n++)for(let s=0;s<st;s++){let r=255;for(let o=jt-1;o>=0;o--){const a=e[ne(s,o,n)];if(a===0)continue;const l=yt[a];if(l.light&&t.emitters.length<512&&t.emitters.push([s,o,n,l.light]),l.opaque){r=o+1;break}}t.skyH[n*st+s]=r}}getBlock(t,e,n){if(e<0||e>=jt)return 0;const s=t>>4,r=n>>4,o=this.getChunk(s,r);return o?o.blocks[ne(t-s*st,e,n-r*st)]:0}isOpaque(t,e,n){return yt[this.getBlock(t,e,n)].opaque}isSolid(t,e,n){return yt[this.getBlock(t,e,n)].solid}isReplaceable(t,e,n){const s=this.getBlock(t,e,n);return s===0||yt[s].replaceable===!0}skyAt(t,e,n){if(e>=jt)return 1;const s=t>>4,r=n>>4,o=this.getChunk(s,r);let a;return o?a=o.skyH[(n-r*st)*st+(t-s*st)]:a=this.terrain.col(t,n).h+1,a===255||e>=a?1:Math.max(.13,1-(a-e)*.055)}lightAt(t,e,n){if(e<0||e>=jt)return 0;const s=t>>4,r=n>>4,o=this.getChunk(s,r);return!o||!o.light?0:o.light[ne(t-s*st,e,n-r*st)]}setBlock(t,e,n,s,r=!0){if(e<0||e>=jt)return!1;const o=t>>4,a=n>>4,l=this.ensureChunk(o,a),c=t-o*st,h=n-a*st,u=ne(c,e,h),d=l.blocks[u];if(d===s)return!1;if(l.blocks[u]=s,this.postEdit(l,c,e,h,d,s),r){const p=Aa(t,e,n);this._original.has(p)||this._original.set(p,d),this._original.get(p)===s?this.edits.delete(p):this.edits.set(p,s)}return this.touch(l,c,h,e),!0}postEdit(t,e,n,s,r,o){if(yt[r].light){const h=t.emitters;for(let u=h.length-1;u>=0;u--){const d=h[u];d[0]===e&&d[1]===n&&d[2]===s&&h.splice(u,1)}}yt[o].light&&t.emitters.length<512&&t.emitters.push([e,n,s,yt[o].light]);const a=s*st+e,l=yt[r].opaque,c=yt[o].opaque;c&&!l?(n+1>t.skyH[a]||t.skyH[a]===255)&&(t.skyH[a]=Math.min(255,n+1)):l&&!c&&this.recomputeColumn(t,e,s)}recomputeColumn(t,e,n){let s=255;for(let r=jt-1;r>=0;r--){const o=t.blocks[ne(e,r,n)];if(o!==0&&yt[o].opaque){s=r+1;break}}t.skyH[n*st+e]=s}touch(t,e,n,s){const r=this.key(t.cx,t.cz);s!==void 0&&s+1>t.hmax&&(t.hmax=s+1),this.dirtyMesh.add(r),this.dirtyLight.add(r),e===0&&this.markNeighbor(t.cx-1,t.cz),e===st-1&&this.markNeighbor(t.cx+1,t.cz),n===0&&this.markNeighbor(t.cx,t.cz-1),n===st-1&&this.markNeighbor(t.cx,t.cz+1)}markNeighbor(t,e){const n=this.key(t,e),s=this.chunks.get(n);s&&(s.needsMesh=!0),this.dirtyMesh.add(n),this.dirtyLight.add(n)}recomputeLight(t){const e=[];for(let n=-1;n<=1;n++)for(let s=-1;s<=1;s++){const r=this.getChunk(t.cx+n,t.cz+s);if(r)for(const[o,a,l,c]of r.emitters)e.push([o+n*st,a,l+s*st,c])}if(e.length===0)return t.light&&t.light.fill(0),!1;t.light||(t.light=new Float32Array(st*st*jt)),t.light.fill(0);for(const[n,s,r,o]of e){const a=Math.max(0,s-Pn),l=Math.min(jt-1,s+Pn);for(let c=a;c<=l;c++){const h=(c-s)*(c-s)*1.45;for(let u=Math.max(0,r-Pn);u<=Math.min(st-1,r+Pn);u++){const d=(u-r)*(u-r);for(let p=Math.max(0,n-Pn);p<=Math.min(st-1,n+Pn);p++){const g=Math.sqrt((p-n)*(p-n)+h+d);if(g>Pn)continue;const _=o*Math.pow(1-g/Pn,1.7),m=ne(p,c,u);_>t.light[m]&&(t.light[m]=_)}}}}return!0}findSpawn(){let t=null;for(let n=0;n<72;n++)for(let s=0;s<12;s++){const r=s/12*Math.PI*2+n*.31,o=Math.round(Math.cos(r)*n*5),a=Math.round(Math.sin(r)*n*5),l=this.terrain.col(o,a);if(!(l.h<=ke+1||l.h>64||Math.max(Math.abs(l.h-this.terrain.col(o+1,a).h),Math.abs(l.h-this.terrain.col(o-1,a).h),Math.abs(l.h-this.terrain.col(o,a+1).h),Math.abs(l.h-this.terrain.col(o,a-1).h))>3)&&(t||(t=[o+.5,l.h+1.05,a+.5]),!this.terrain.treeAt(o,a)))return[o+.5,l.h+1.05,a+.5]}return t||[.5,this.terrain.col(0,0).h+1.05,.5]}findOpenSpot(t,e,n=56){const s=new Set([yt.findIndex(r=>r.key==="grass"),yt.findIndex(r=>r.key==="dirt"),yt.findIndex(r=>r.key==="sand"),yt.findIndex(r=>r.key==="snow"),yt.findIndex(r=>r.key==="podzol"),yt.findIndex(r=>r.key==="gravel")]);for(let r=0;r<=n;r+=2)for(let o=0;o<12;o++){const a=o/12*Math.PI*2+r*.37,l=Math.round(t+Math.cos(a)*r),c=Math.round(e+Math.sin(a)*r),h=l>>4,u=c>>4,d=this.getChunk(h,u);if(!d)continue;const p=l-h*st,g=c-u*st;for(let _=jt-3;_>1;_--){const m=d.blocks[ne(p,_-1,g)];if(s.has(m)&&d.blocks[ne(p,_,g)]===0&&d.blocks[ne(p,_+1,g)]===0&&d.blocks[ne(p,_+2,g)]===0)return[l+.5,_+.02,c+.5]}}return null}removeChunk(t,e){const n=this.key(t,e);this.chunks.delete(n),this._genFail?.delete(n),this.dirtyMesh.delete(n),this.dirtyLight.delete(n),this._cacheKey===n&&(this._cacheKey=-1)}serializeEdits(){const t=[];for(const[e,n]of this.edits)t.push(e+":"+n);return t}loadEdits(t){if(this.edits.clear(),this._original.clear(),!!Array.isArray(t))for(const e of t){const n=e.lastIndexOf(":");if(n<0)continue;const s=e.slice(0,n),r=+e.slice(n+1);this.edits.set(s,r);const o=s.indexOf(",");s.indexOf(",",o+1),this._original.set(s,-1)}}get editedCount(){return this.edits.size}get chunkCount(){return this.chunks.size}}const a_=.6,Wl=1.8,o_=1.62,Dn=a_/2,l_=28,Xl=8.6,ql=4.317,c_=5.9,h_=1.5,u_=11,d_=26,f_=7.5,Yl=4,p_=.5,rh=new Uint8Array(yt.length);for(let i=0;i<yt.length;i++)rh[i]=yt[i].solid?1:0;const or=new Uint8Array(yt.length);for(let i=0;i<yt.length;i++)or[i]=yt[i].liquid?1:0;function $l(i){return i>Yl?(i-Yl)*p_:0}class m_{constructor(t){this.world=t,this.x=0,this.y=80,this.z=0,this.vx=0,this.vy=0,this.vz=0,this.yaw=0,this.pitch=0,this.onGround=!1,this.inWater=!1,this.headInWater=!1,this.flying=!1,this.sprinting=!1,this.sneaking=!1,this.walkDistance=0,this.bob=0,this.stepAcc=0,this.bumped=!1,this._airMax=null,this.fallDamage=0,this.justLanded=0,this._wasInWater=!1,this._wasHead=!1}spawn(t,e,n){this.x=t,this.y=e,this.z=n,this.vx=this.vy=this.vz=0,this._airMax=null,this.fallDamage=0,this.justLanded=0;for(let s=0;s<24&&this.collides(this.x,this.y,this.z);s++)this.y+=1;this.onGround=!1}get eyeY(){return this.y+o_-(this.sneaking?.18:0)}eye(t={}){return t.x=this.x,t.y=this.eyeY,t.z=this.z,t}forward(t={}){const e=Math.cos(this.pitch);return t.x=-Math.sin(this.yaw)*e,t.y=Math.sin(this.pitch),t.z=-Math.cos(this.yaw)*e,t}collides(t,e,n){const s=this.world,r=Math.floor(t-Dn),o=Math.floor(t+Dn),a=Math.floor(e),l=Math.floor(e+Wl-.001),c=Math.floor(n-Dn),h=Math.floor(n+Dn);for(let u=a;u<=l;u++){if(u<0)return!0;if(!(u>=jt)){for(let d=c;d<=h;d++)for(let p=r;p<=o;p++)if(rh[s.getBlock(p,u,d)])return!0}}return!1}moveAxis(t,e){if(e===0)return!1;const n=e,s=this[t];if(this[t]=s+n,!this.collides(this.x,this.y,this.z))return!1;let r=!1;for(let o=0;o<24;o++){const a=n*(1-o/24),l=s+a,c={x:this.x,y:this.y,z:this.z};if(c[t]=l,!this.collides(c.x,c.y,c.z)){this.x=c.x,this.y=c.y,this.z=c.z,r=!0;break}}return r||(this[t]=s,r=!0),r&&t!=="y"&&(this.bumped=!0),r}blockAtFeet(){return this.world.getBlock(Math.floor(this.x),Math.floor(this.y-.1),Math.floor(this.z))}update(t,e){const n=this.world;t=Math.min(t,1/20);const s=n.getBlock(Math.floor(this.x),Math.floor(this.y+.2),Math.floor(this.z)),r=n.getBlock(Math.floor(this.x),Math.floor(this.y+1),Math.floor(this.z));this.inWater=or[s]===1||or[r]===1,this.headInWater=or[n.getBlock(Math.floor(this.x),Math.floor(this.eyeY),Math.floor(this.z))]===1;const o=Math.sin(this.yaw),a=Math.cos(this.yaw);let l=0,c=0;e.forward&&(l-=o,c-=a),e.back&&(l+=o,c+=a),e.left&&(l-=a,c+=o),e.right&&(l+=a,c-=o);const h=Math.hypot(l,c);h>0&&(l/=h,c/=h),this.sneaking=!!e.sneak&&!this.flying,this.sprinting=!!e.sprint&&!this.sneaking&&e.forward&&!this.inWater;let u=this.flying?e.sprint?d_:u_:this.inWater?ql*.55:this.sneaking?h_:this.sprinting?c_:ql;const d=this.flying?34:this.onGround?62:this.inWater?24:22,p=e.analog??1,g=l*u*p,_=c*u*p;if(this.vx+=(g-this.vx)*Math.min(1,d*t),this.vz+=(_-this.vz)*Math.min(1,d*t),h===0&&(this.onGround||this.inWater)){const T=(this.flying?9:this.onGround?12:3.4)*t;this.vx-=this.vx*Math.min(1,T),this.vz-=this.vz*Math.min(1,T)}if(this.flying){let T=0;e.jump&&(T+=u*.75),e.sneak&&(T-=u*.75),this.vy+=(T-this.vy)*Math.min(1,22*t)}else this.inWater?(this.vy-=f_*t,e.jump&&(this.vy=Math.min(this.vy+26*t,3.4)),this.vy=Math.max(this.vy,-3.4),this.vy*=1-Math.min(.6,3.4*t)):(this.vy-=l_*t,this.vy=Math.max(this.vy,-58),e.jump&&this.onGround&&(this.vy=Xl,this.onGround=!1,this._airMax=this.y));const m=this.vx,f=this.vz,x=this.onGround;if(this.onGround=!1,this.moveAxis("x",this.vx*t)&&(this.vx=0),this.moveAxis("z",this.vz*t)&&(this.vz=0),this.moveAxis("y",this.vy*t)&&(this.vy<0?(this.onGround=!0,!this.flying&&!x&&this.fallStart!==null&&(this.fallDamage=$l(this.fallStart-this.y)),this.fallStart=this.inWater?null:this.y):this.vy>0&&(this.vy=Math.min(0,this.vy))),this.onGround){if(this.vy=0,!x&&this._airMax!==null){const T=this._airMax-this.y;this.fallDamage=this.flying||this.inWater?0:$l(T),this.justLanded=T>.7?Math.min(2,T/7):0}this._airMax=null}else this._airMax=this._airMax===null?this.y:Math.max(this._airMax,this.y);if(this.bumped){this.bumped=!1;const T=e.forward||e.back||e.left||e.right;if(this.onGround&&!this.inWater&&!this.flying&&!this.sneaking&&T&&e.autoJump!==!1){const I=this.x+Math.sign(m)*.46,M=this.z+Math.sign(f)*.46;this.collides(I,this.y+1.12,M)||(this.vy=Xl*.94,this.onGround=!1,m!==0&&(this.vx=m),f!==0&&(this.vz=f))}}const v=Math.hypot(this.vx,this.vz);this.walkDistance+=v*t,this.onGround&&v>.6?(this.stepAcc+=v*t,this.bob+=t*(6+v*.8)):this.bob+=(Math.round(this.bob/Math.PI)*Math.PI-this.bob)*Math.min(1,t*6);const S=this.stepAcc>1.9;S&&(this.stepAcc=0);const R=this.inWater&&!this._wasInWater;return this._wasInWater=this.inWater,this.y<-8&&(this.y=jt-4,this.vy=0),this.y>jt+40&&(this.y=jt+40),{stepped:S,splash:R,submerge:this.headInWater!==this._wasHead}}intersectsBlock(t,e,n){return!(t+1<=this.x-Dn||t>=this.x+Dn||e+1<=this.y||e>=this.y+Wl||n+1<=this.z-Dn||n>=this.z+Dn)}}function g_(i,t,e,n,s,r,o,a=6,l={}){const c=l.liquids===!0;let h=Math.floor(t),u=Math.floor(e),d=Math.floor(n);const p=s>0?1:-1,g=r>0?1:-1,_=o>0?1:-1,m=s!==0?Math.abs(1/s):1/0,f=r!==0?Math.abs(1/r):1/0,x=o!==0?Math.abs(1/o):1/0;let v=s!==0?(p>0?h+1-t:t-h)*m:1/0,S=r!==0?(g>0?u+1-e:e-u)*f:1/0,R=o!==0?(_>0?d+1-n:n-d)*x:1/0,T=0,b=0,I=0,M=0;for(let A=0;A<256&&T<=a;A++){const G=u<0?1:i.getBlock(h,u,d),q=yt[G];if(G!==0&&q.replaceable!==!0&&(c||!q.liquid))return{x:h,y:u,z:d,nx:b,ny:I,nz:M,id:G,dist:T,replaceable:!1};const K=__(v,S,R);if(K==="a"?(h+=p,T=v,v+=m,b=-p,I=0,M=0):K==="b"?(u+=g,T=S,S+=f,b=0,I=-g,M=0):(d+=_,T=R,R+=x,b=0,I=0,M=-_),u<-1||u>jt+1)return null}return null}const __=(i,t,e)=>i<=t&&i<=e?"a":t<=e?"b":"c",In={stone:{freq:720,q:1.1,decay:.09,gain:.55},dirt:{freq:380,q:.8,decay:.1,gain:.5},grass:{freq:1500,q:.7,decay:.07,gain:.32},wood:{freq:520,q:2.2,decay:.12,gain:.5},sand:{freq:2600,q:.5,decay:.08,gain:.3},glass:{freq:3200,q:3.5,decay:.16,gain:.45},wool:{freq:260,q:.6,decay:.09,gain:.35},splash:{freq:900,q:.4,decay:.35,gain:.6},soft:{freq:1200,q:.5,decay:.06,gain:.3}};class v_{constructor(){this.ctx=null,this.sfxVolume=.6,this.musicVolume=.28,this.musicOn=!0,this._musicTimer=null,this._noise=null,this._muted=!1}resume(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=1,this.master.connect(this.ctx.destination),this.sfx=this.ctx.createGain(),this.sfx.gain.value=this.sfxVolume,this.sfx.connect(this.master),this.music=this.ctx.createGain(),this.music.gain.value=1e-4,this.musicBus=this.ctx.createGain(),this.musicBus.connect(this.music);const e=this.ctx.createDelay(1);e.delayTime.value=.19;const n=this.ctx.createDelay(1);n.delayTime.value=.37;const s=this.ctx.createGain();s.gain.value=.34,this.musicBus.connect(e),this.musicBus.connect(n),e.connect(s),n.connect(s),s.connect(n),e.connect(this.music),n.connect(this.music);const r=this.ctx.sampleRate*1.2,o=this.ctx.createBuffer(1,r,this.ctx.sampleRate),a=o.getChannelData(0);for(let l=0;l<r;l++)a[l]=Math.random()*2-1;this._noise=o,this.musicOn&&this.startMusic()}return this.ctx.state==="suspended"&&this.ctx.resume(),!0}setVolumes(t,e){this.sfxVolume=t,this.musicVolume=e,this.sfx&&(this.sfx.gain.value=t),this.music&&(this.music.gain.cancelScheduledValues(this.ctx.currentTime),this.music.gain.linearRampToValueAtTime(e>0?e:1e-4,this.ctx.currentTime+.4))}get ready(){return!!this.ctx&&this.ctx.state==="running"}_noiseHit({freq:t=800,q:e=1,decay:n=.1,gain:s=.5,sweep:r=0,when:o=0}){const a=this.ctx,l=a.createBufferSource();l.buffer=this._noise,l.playbackRate.value=1+(Math.random()-.5)*.2;const c=a.createBiquadFilter();c.type="bandpass",c.frequency.value=t,c.Q.value=e;const h=a.createGain(),u=a.currentTime+o;h.gain.setValueAtTime(0,u),h.gain.linearRampToValueAtTime(s,u+.004),h.gain.exponentialRampToValueAtTime(8e-4,u+n),r&&c.frequency.exponentialRampToValueAtTime(Math.max(60,t*r),u+n),l.connect(c).connect(h).connect(this.sfx),l.start(u),l.stop(u+n+.05)}_tone({freq:t=440,dur:e=.12,gain:n=.2,type:s="sine",when:r=0,glide:o=0,detune:a=0}){const l=this.ctx,c=l.createOscillator();c.type=s;const h=l.currentTime+r;c.frequency.setValueAtTime(t,h),o&&c.frequency.exponentialRampToValueAtTime(Math.max(40,t*o),h+e),c.detune.value=a;const u=l.createGain();u.gain.setValueAtTime(1e-4,h),u.gain.linearRampToValueAtTime(n,h+.01),u.gain.exponentialRampToValueAtTime(5e-4,h+e),c.connect(u).connect(this.sfx),c.start(h),c.stop(h+e+.05)}hit(t,e=1){if(!this.ready)return;const n=In[t]??In.stone;this._noiseHit({freq:n.freq*(.9+Math.random()*.25),q:n.q,decay:n.decay*.7,gain:n.gain*.5*e})}breakBlock(t){if(!this.ready)return;const e=In[t]??In.stone;this._noiseHit({freq:e.freq,q:e.q,decay:e.decay*1.7,gain:e.gain,sweep:.45}),this._tone({freq:e.freq/6,dur:.1,gain:.06,type:"triangle",glide:.6})}place(t){if(!this.ready)return;const e=In[t]??In.stone;this._noiseHit({freq:e.freq*.7,q:1.4,decay:.07,gain:e.gain*.7}),this._tone({freq:180,dur:.07,gain:.09,type:"sine",glide:.6})}step(t){if(!this.ready)return;const e=In[t]??In.dirt;this._noiseHit({freq:e.freq*(.85+Math.random()*.3),q:e.q*.8,decay:e.decay*.5,gain:e.gain*.22})}jump(){this.ready&&this._tone({freq:300,dur:.07,gain:.05,type:"sine",glide:1.6})}land(t=1){this.ready&&this._noiseHit({freq:220,q:.7,decay:.1+t*.08,gain:.22*Math.min(1.6,t)})}splash(){this.ready&&this._noiseHit({freq:900,q:.4,decay:.35,gain:.5,sweep:.3})}ui(t="click"){this.ready&&(t==="hover"?this._tone({freq:900,dur:.04,gain:.03,type:"sine"}):t==="back"?this._tone({freq:320,dur:.1,gain:.08,type:"triangle",glide:.6}):this._tone({freq:640,dur:.07,gain:.09,type:"square"}))}deny(){this.ready&&this._tone({freq:180,dur:.12,gain:.08,type:"sawtooth",glide:.7})}openInv(){this.ready&&(this._tone({freq:520,dur:.09,gain:.06,type:"triangle"}),this._tone({freq:780,dur:.12,gain:.05,type:"triangle",when:.05}))}startMusic(){if(!this.ctx||this._musicTimer)return;const t=[0,2,4,7,9,12,14,16,19,21],e=[174.61,196,146.83,164.81];let n=0;const s=()=>{if(!this.ctx||this.ctx.state!=="running")return;const l=this.ctx,c=e[n%e.length];n++,l.currentTime;const h=[0,4,7].map((d,p)=>({freq:c*Math.pow(2,d/12)*(p===2?2:1),when:p*.12}));for(const d of h)this._pad(d.freq,5.2,.035,d.when);const u=1+(Math.random()*3|0);for(let d=0;d<u;d++){const p=t[Math.random()*t.length|0],g=c*2*Math.pow(2,p/12);this._bell(g,1.6+Math.random(),.055,.3+d*.75+Math.random()*.3)}Math.random()>.75&&this._bell(c*4*Math.pow(2,t[Math.random()*5|0]/12),2.4,.03,2.2)},r=(l,c,h,u)=>{const d=this.ctx;if(!d)return;const p=d.currentTime+u,g=d.createOscillator();g.type="sine",g.frequency.value=l;const _=d.createOscillator();_.type="triangle",_.frequency.value=l*1.004;const m=d.createGain();m.gain.setValueAtTime(1e-4,p),m.gain.linearRampToValueAtTime(h,p+c*.35),m.gain.linearRampToValueAtTime(1e-4,p+c),g.connect(m),_.connect(m),m.connect(this.musicBus),g.start(p),_.start(p),g.stop(p+c+.1),_.stop(p+c+.1)},o=(l,c,h,u)=>{const d=this.ctx;if(!d)return;const p=d.currentTime+u,g=d.createOscillator();g.type="sine",g.frequency.value=l;const _=d.createGain();_.gain.setValueAtTime(1e-4,p),_.gain.exponentialRampToValueAtTime(h,p+.02),_.gain.exponentialRampToValueAtTime(1e-4,p+c);const m=d.createBiquadFilter();m.type="lowpass",m.frequency.value=2400,g.connect(m).connect(_).connect(this.musicBus),g.start(p),g.stop(p+c+.1)};this._pad=r,this._bell=o;const a=()=>{try{s()}catch(l){console.warn("музыка выключена:",l?.message??l),this.stopMusic()}};a(),this._musicTimer=setInterval(a,5400)}stopMusic(){this._musicTimer&&clearInterval(this._musicTimer),this._musicTimer=null}toggleMusic(){return this.musicOn=!this.musicOn,this.musicOn?this.ctx&&this.startMusic():this.stopMusic(),this.musicOn}}const ms="litecraft:";function Ya(i){return`${ms}world:${i}`}const ah=ms+"settings",oh=2,lh=ms+"lastSeed";function x_(i,t){try{return localStorage.setItem(Ya(i),JSON.stringify(t)),!0}catch(e){return console.warn("Не удалось сохранить мир:",e),!1}}function M_(i){try{const t=localStorage.getItem(Ya(i));return t?JSON.parse(t):null}catch(t){return console.warn("Чтение сохранения не удалось:",t),null}}function y_(){const i=[];try{for(let t=0;t<localStorage.length;t++){const e=localStorage.key(t);if(!e?.startsWith(ms+"world:"))continue;const n=localStorage.getItem(e);if(!n)continue;const s=JSON.parse(n);i.push({key:e,seed:e.slice((ms+"world:").length),size:n.length,...s})}}catch{}return i.sort((t,e)=>(e.saved??0)-(t.saved??0))}function S_(i){try{return localStorage.removeItem(Ya(i)),!0}catch{return!1}}function qn(i){try{localStorage.setItem(ah,JSON.stringify({...i,v:oh}))}catch{}}function b_(){try{const i=JSON.parse(localStorage.getItem(ah)??"{}")??{};return i.v!==oh&&(delete i.renderDistance,delete i.mobs,delete i.creative),i}catch{return{}}}function E_(i){try{localStorage.setItem(lh,String(i))}catch{}}function T_(){try{return localStorage.getItem(lh)}catch{return null}}function w_(i,t=1200){let e=null;const n=(...s)=>{e&&clearTimeout(e),e=setTimeout(()=>{e=null,i(...s)},t)};return n.flush=(...s)=>{e&&(clearTimeout(e),e=null,i(...s))},n.cancel=()=>{e&&(clearTimeout(e),e=null)},n}const Xt=i=>document.getElementById(i),Fa={renderDistance:10,fov:74,mobs:14,creative:!1,sensitivity:1,sfx:.55,music:.22,dayLength:8,freeTime:!1,clouds:.75,shaders:1,netName:"",netUrl:"",netRoom:"world",renderScale:1,ao:!0,smoothLight:!0,viewBob:!0,autoJump:!0,showDebug:!0,touch:!1},A_=[["Стройка",null],["Природа",null],["Руды и свет",null],["Растения и ферма",null],["Инструменты",null],["Предметы",null],["Прочее",null]],R_={Стройка:["stone","cobblestone","stone_bricks","bricks","planks","log","glass","sandstone","obsidian","crafting_table","wool_white","wool_red","wool_blue","wool_yellow","wool_lime","wool_black"],Природа:["grass","dirt","sand","gravel","leaves","snow","podzol","bedrock","cactus","water"],"Руды и свет":["coal_ore","iron_ore","gold_ore","diamond_ore","redstone_ore","glowstone"],"Растения и ферма":["tall_grass","fern","flower_red","flower_yellow","sapling","wheat","farmland","hay_block"]};function C_(i){for(const[t,e]of Object.entries(R_))if(e.includes(i))return t;return/_pickaxe|_axe|_shovel|_sword/.test(i)?"Инструменты":i==="emerald"||i.endsWith(":item")||["leather","pork","stick","coal_item"].includes(i)?"Предметы":"Прочее"}const L_=[["WASD / ←↑↓→","движение"],["Мышь","осмотр"],["ЛКМ (держать)","копать блок · атака по мобу"],["ПКМ","поставить блок"],["СКМ","выбрать блок под курсором"],["Пробел","прыжок · двойной — полёт"],["Shift (в полёте)","вниз"],["Ctrl / 2×W","бег"],["1…9 · колесо","слот хотбара"],["E","инвентарь"],["Q","выбросить (сброс слота)"],["R","наверх, если застрял"],["N","промотать время"],["M","музыка вкл/выкл"],["F","полный экран"],["F1","спрятать интерфейс"],["F3","отладка"],["Esc","пауза"]];class P_{constructor(t){this.atlas=t,this.el={hud:Xt("hud"),hotbar:Xt("hotbar"),blockname:Xt("blockname"),debug:Xt("debug"),toasts:Xt("toasts"),menu:Xt("menu"),pause:Xt("pause"),settings:Xt("settings"),inventory:Xt("inventory"),loading:Xt("loading"),loadFill:Xt("load-fill"),loadText:Xt("load-text"),water:Xt("water-tint"),vignette:Xt("vignette"),hp:Xt("hp"),crosshair:Xt("crosshair"),seed:Xt("seed"),worlds:Xt("worlds"),touch:Xt("touch-ui"),invGrid:Xt("inv-grid"),invHotbar:Xt("inv-hotbar"),settingsBody:Xt("settings-body"),pauseStats:Xt("pause-stats"),controls:Xt("controls-list"),invCursor:Xt("inv-cursor"),invCraft:Xt("inv-craft"),invCraftTitle:Xt("inv-craft-title"),invPalette:Xt("inv-palette"),invPaletteTitle:Xt("inv-palette-title"),invHint:Xt("inv-hint"),net:Xt("net"),netStatus:Xt("net-status"),netPeers:Xt("net-peers"),netRole:Xt("net-role"),netName:Xt("net-name"),netUrl:Xt("net-url"),netRoom:Xt("net-room"),netCode:Xt("net-code"),netChat:Xt("net-chat"),netChatRow:Xt("net-chat-row")},this.slots=[],this.settings={...Fa},this.el.controls.innerHTML=L_.map(([e,n])=>`<div><kbd>${e}</kbd><span class="muted">${n}</span></div>`).join("")}show(t){for(const e of["menu","pause","settings","inventory","loading","net"])this.el[e].classList.toggle("hidden",e!==t);this.el.hud.classList.toggle("hidden",t!==null),this.el.hud.dataset.keep==="1"&&this.el.hud.classList.remove("hidden")}setLoading(t,e){this.el.loadFill.style.width=`${Math.round(t*100)}%`,e&&(this.el.loadText.textContent=e)}netState(){return{role:this._netRole??"host",name:(this.el.netName?.value??"").trim(),url:(this.el.netUrl?.value??"").trim(),room:(this.el.netRoom?.value??"").trim()}}netPrefill(t){this.el.netName&&(this.el.netName.value=t.name??""),this.el.netUrl&&(this.el.netUrl.value=t.url??""),this.el.netRoom&&(this.el.netRoom.value=t.room??""),this.netRole(t.role??"host"),this.el.netChatRow&&this.el.netChatRow.classList.toggle("hidden",!t.connected),t.text!==void 0&&this.netStatus(t.text??"",t.kind??"")}netRole(t){this._netRole=t==="guest"?"guest":"host";for(const e of this.el.netRole?.children??[])e&&e.classList&&e.classList.toggle("on",(e.dataset?.v??"")===this._netRole)}netStatus(t,e=""){const n=this.el.netStatus;n&&(n.textContent=t,n.classList?.toggle("on",e==="on"),n.classList?.toggle("err",e==="err"))}netCode(t){this.el.netCode&&(this.el.netCode.value=t??"")}netCodeValue(){return String(this.el.netCode?.value??"")}netPeers(t){const e=this.el.netPeers;if(!e)return;const n=t.length?"в комнате: "+t.map(s=>`${s.name} (${Math.round(s.x??0)}; ${Math.round(s.z??0)})`).join(", "):"пока никого — правки и шаги видят только тебя";e.textContent!==n&&(e.textContent=n)}toast(t,e=""){const n=this.el.toasts;if(!n)return;const s=String(t);for(const o of n.children??[])if(o.__toastKey===s){this._toastArm(o);return}const r=document.createElement("div");for(r.className=`toast ${e}`,r.textContent=t,r.__toastKey=s,n.appendChild(r);(n.children?.length??0)>6;)n.removeChild(n.children[0]);this._toastArm(r)}_toastArm(t){clearTimeout(t.__t),t.style.opacity="",t.__t=setTimeout(()=>{t.style.transition="opacity .4s",t.style.opacity="0",t.__t=setTimeout(()=>t.remove(),420)},2400)}setFlyAvailable(t){const e=document.getElementById("t-fly");e?.classList&&e.classList.toggle("dim",!t)}seg(t,e){for(const n of t?.children??[])n.classList?.toggle("on",(n.dataset?.v??n.__v)===e)}buildHotbar(t,e,n,s=null){this.hotbar=t,this.sel=e,this.hotCounts=s,this.onHotbarChange=n??this.onHotbarChange;const r=(o,a,l)=>{o.innerHTML="";const c=[];return t.forEach((h,u)=>{const d=document.createElement("div");if(d.className="slot"+(u===e?" sel":""),!a){const p=document.createElement("span");p.className="num",p.textContent=String(u+1),d.appendChild(p)}if(h){const p=document.createElement("img");p.src=this.atlas.icon(h,48),p.alt=yt[h].name,d.appendChild(p);const g=s?s[u]|0:0;if(g>1){const _=document.createElement("span");_.className="cnt",_.textContent=String(g),d.appendChild(_)}}d.title=h?yt[h].name:"пусто",d.addEventListener("click",p=>{p.stopPropagation(),l==="inv"?this.onInvSlot?.("hot",u):this.onHotbarChange?.(u,"click")}),o.appendChild(d),c.push(d)}),c};this.slots=r(this.el.hotbar,!1,"hud"),this.el.invHotbar&&(this.invSlots=r(this.el.invHotbar,!0,"inv"))}markInventorySelection(t){(this.invSlots??[]).forEach((e,n)=>e.classList.toggle("sel",n===t)),(this.slots??[]).forEach((e,n)=>e.classList.toggle("sel",n===t))}renderInventory(t){const{snap:e,recipes:n,creative:s,icon:r,names:o,onSlot:a,onPick:l,onCraft:c,nearTable:h,onCreative:u}=t;this.onInvSlot=a;const d=(f,x,v,S)=>{const R=document.createElement("div");if(R.className="slot",f){const T=document.createElement("img");if(T.src=r(f,44),T.alt=o(f),R.appendChild(T),x>1){const b=document.createElement("span");b.className="cnt",b.textContent=String(x),R.appendChild(b)}}return R.title=f?`${o(f)}${x?" ×"+x:""}`:"пусто",R.onclick=()=>a(v,S),R},p=this.el.invGrid;p.innerHTML="",e.main.forEach((f,x)=>p.appendChild(d(f.id,f.n,"main",x))),this.buildHotbar(e.hot.map(f=>f.id),e.sel,this.onHotbarSelect,s?null:e.hot.map(f=>f.n)),this.el.invCursor.textContent=e.cursor.id?`В руке: ${o(e.cursor.id)}${e.cursor.n>1?" ×"+e.cursor.n:""} — кликни по клетке, чтобы положить`:s?"Творчество: клик по палитре кладёт блок в выбранный слот":"Клик по клетке — взять стек, по другой — положить/обменять";const g=this.el.invCraft;g.innerHTML="",this.el.invCraftTitle&&(this.el.invCraftTitle.textContent=h?"Крафт · верстак рядом — доступны все рецепты":"Крафт · у верстака (в 4 блоках) открываются инструменты из камня и железа"),n.forEach((f,x)=>{const v=document.createElement("div");v.className="craft-row"+(f.ok?" ok":" locked");const S=document.createElement("img");S.src=r(f.outId,32),v.appendChild(S);const R=document.createElement("span");R.className="cname",R.textContent=`${o(f.outId)}${f.n>1?" ×"+f.n:""}`,v.appendChild(R);const T=document.createElement("span");T.className="cneed",T.textContent=f.need.map(I=>`${o(I.id)} ${I.have}/${I.n}`).join(" · ")+(f.table?" · верстак":""),v.appendChild(T);const b=document.createElement("button");b.textContent=f.ok?"Скрафтить":"—",b.disabled=!f.ok,b.onclick=()=>c(x),v.appendChild(b),g.appendChild(v)});const _=this.el.invPalette,m=this.el.invPaletteTitle;if(_&&(_.innerHTML="",m&&(m.style.display=s?"":"none"),s)){if(m){m.innerHTML="";const S=document.createElement("span");S.textContent="Все блоки ("+yt.filter(b=>b&&b.id&&b.render!=="none").length+")";const R=document.createElement("input");R.type="search",R.className="pal-search",R.placeholder="Поиск: стекло, кирка, шерсть…",R.value=this.palQuery??"",R.oninput=()=>{this.palQuery=R.value,this.renderInventory(t)};const T=document.createElement("button");T.className="btn ghost mini",T.textContent="Творчество: вкл",T.title="Выключить — инвентарь снова становится обычным, а блоки начинают тратиться",T.onclick=()=>{u?.(),this.renderInventory(t)},m.append(S,R,T)}const f=(this.palQuery??"").trim().toLowerCase(),x=new Map(A_.map(S=>[S[0],[]]));for(const S of yt)!S.id||S.render==="none"||f&&!(S.name.toLowerCase().includes(f)||S.key.includes(f))||(x.get(C_(S.key))??x.get("Прочее")).push(S);let v=0;for(const[S,R]of x){if(!R.length)continue;v+=R.length;const T=document.createElement("div");T.className="pal-cat",T.textContent=S,_.appendChild(T);for(const b of R){const I=document.createElement("div");I.className="slot";const M=document.createElement("img");M.src=r(b.id,36),M.alt=b.name,I.appendChild(M),I.title=b.name,I.onclick=()=>l(b.id),_.appendChild(I)}}if(f&&!v){const S=document.createElement("div");S.className="muted pal-empty",S.textContent=`По запросу «${f}» в палитре ничего нет — попробуй «кирка», «шерсть», «песч»`,_.appendChild(S)}}}selectSlot(t){this.sel=t,[...this.slots,...this.invSlots??[]].forEach((e,n)=>e.classList.toggle("sel",n%9===t))}setCinematic(t){const e=this.el.vignette;!e||!e.classList||e.classList.toggle("cine",!!t)}showBlockName(t){const e=this.el.blockname;e.textContent=t?yt[t].name:"Пусто",e.classList.add("show"),clearTimeout(this._nameT),this._nameT=setTimeout(()=>e.classList.remove("show"),1400)}setDebug(t){this.el.debug&&(this.el.debug.textContent=t)}hideDebug(t){this.el.debug.classList.toggle("hidden",t)}hideHud(t){this.el.hud.classList.toggle("hidden",t),this.el.crosshair.style.opacity=t?"0":""}setWater(t){this.el.water.classList.toggle("on",t)}setMining(t){this.el.crosshair.classList.toggle("mine",t)}hurt(){this.el.vignette.classList.add("hurt"),setTimeout(()=>this.el.vignette.classList.remove("hurt"),550)}setHealth(t,e=20){const n=[];for(let s=0;s<e/2;s++){const r=Math.max(0,Math.min(1,t-s*2))/2;n.push(r>=.99?"❤️":r>=.4?"🧡":"🖤")}this.el.hp.textContent=n.join("")}renderWorlds(t,e,n){const s=this.el.worlds;if(s.innerHTML="",!t.length){s.innerHTML='<div class="muted small">Сохранённых миров пока нет.</div>';return}for(const r of t){const o=document.createElement("div");o.className="world-item",o.innerHTML=`<div class="grow">Сид <b>${r.seed}</b> · правок: ${r.edits??0}
        <div class="muted small">${r.saved?new Date(r.saved).toLocaleString("ru-RU"):""}</div></div>`;const a=document.createElement("button");a.className="btn",a.textContent="Продолжить",a.onclick=()=>e(r.seed);const l=document.createElement("button");l.className="btn ghost danger",l.textContent="Удалить",l.onclick=()=>n(r.seed),o.append(a,l),s.appendChild(o)}}settingsForm(t,e,n={}){const s=[{key:"renderDistance",label:"Дальность прорисовки",min:2,max:16,step:1,fmt:l=>`${l} чанк · ~${l*16} блоков`},{key:"fov",label:"Поле зрения",min:55,max:110,step:1,fmt:l=>`${l}°`},{key:"sensitivity",label:"Чувствительность мыши",min:.2,max:3,step:.05,fmt:l=>l.toFixed(2)},{key:"sfx",label:"Громкость эффектов",min:0,max:1,step:.05,fmt:l=>`${Math.round(l*100)}%`},{key:"music",label:"Громкость музыки",min:0,max:1,step:.05,fmt:l=>`${Math.round(l*100)}%`},{key:"clouds",label:"Облачность",min:0,max:1,step:.05,fmt:l=>`${Math.round(l*100)}%`},{key:"renderScale",label:"Разрешение рендера",min:.5,max:1,step:.05,fmt:l=>`${Math.round(l*100)}%${l>=.98?" · пиксель в пиксель":l>=.8?" · мягко":" · экономно"}`},{key:"dayLength",label:"Длина суток, мин",min:2,max:40,step:1,fmt:l=>`${l}`},{key:"mobs",label:"Мобов вокруг",min:0,max:32,step:1,fmt:l=>l?`${l}`:"выкл"}],r=[{key:"shaders",label:"Шейдеры",options:[[0,"Выкл — базовая картинка"],[1,"Мягкие — блики, дымка, живая вода"],[2,"Красивые — тонмаппинг, небо в отражениях, виньетка"]]}],o=[{key:"ao",label:"Мягкое затенение (AO)"},{key:"smoothLight",label:"Плавный свет"},{key:"viewBob",label:"Покачивание камеры"},{key:"autoJump",label:"Автопрыжок через уступы"},{key:"creative",label:"Творчество: блоки не тратятся, урон не страшен"},{key:"freeTime",label:"Заморозить время"},{key:"showDebug",label:"Панель отладки (F3)"},{key:"touch",label:"Сенсорное управление"}],a=this.el.settingsBody;a.innerHTML="";for(const l of s){const c=document.createElement("div");c.className="setting";const h=document.createElement("label");h.textContent=l.label;const u=document.createElement("input");u.type="range",u.min=l.min,u.max=l.max,u.step=l.step,u.value=t[l.key];const d=document.createElement("span");d.className="val",d.textContent=l.fmt(+u.value),u.oninput=()=>{const p=+u.value;d.textContent=l.fmt(p),t[l.key]=p,e(l.key,p)},c.append(h,u,d),a.appendChild(c)}for(const l of r){const c=document.createElement("div");c.className="setting";const h=document.createElement("label");h.textContent=l.label;const u=document.createElement("select");for(const[d,p]of l.options){const g=document.createElement("option");g.value=String(d),g.textContent=p,Number(t[l.key])===d&&(g.selected=!0),u.appendChild(g)}u.onchange=()=>{const d=+u.value;t[l.key]=d,e(l.key,d)},c.append(h,u),a.appendChild(c)}for(const l of o){const c=document.createElement("div");c.className="setting";const h=document.createElement("label");h.className="check";const u=document.createElement("input");u.type="checkbox",u.checked=!!t[l.key],u.onchange=()=>{t[l.key]=u.checked,e(l.key,u.checked)},h.append(u,document.createTextNode(l.label)),c.appendChild(h),a.appendChild(c)}if(n.onRegenerate){const l=document.createElement("div");l.className="row buttons";const c=document.createElement("button");c.className="btn ghost",c.textContent="Пересобрать чанки",c.onclick=n.onRegenerate;const h=document.createElement("button");h.className="btn ghost",h.textContent="Сбросить настройки",h.onclick=n.onReset;const u=[c,h];if(n.onLowSpec){const d=document.createElement("button");d.className="btn ghost",d.textContent="Слабое железо",d.title="Меньше пикселей, без AO, реже свет и облака · дальность прорисовки не трогаем",d.onclick=n.onLowSpec,u.push(d)}l.append(...u),a.appendChild(l)}}buildInventory(t){const e=this.el.invGrid;e.innerHTML="";for(const n of yt){if(n.id===0)continue;const s=document.createElement("div");s.className="inv-cell";const r=document.createElement("img");r.src=this.atlas.icon(n.id,48);const o=document.createElement("span");o.textContent=n.name,s.append(r,o),s.onclick=()=>t(n.id),s.onmouseenter=()=>{window.__hudHover?.()},e.appendChild(s)}}}function D_(i,{input:t,api:e}){const n=i.querySelector("#stick"),s=i.querySelector("#stick-knob"),r={active:!1,id:-1,cx:0,cy:0},o=46,a=m=>{const f=n.getBoundingClientRect();r.cx=f.left+f.width/2,r.cy=f.top+f.height/2,r.active=!0,r.id=m.changedTouches?m.changedTouches[0].identifier:"m",l(m),m.preventDefault()},l=m=>{if(!r.active)return;const f=m.changedTouches?I_(m.changedTouches,r.id):m;if(!f)return;let x=f.clientX-r.cx,v=f.clientY-r.cy;const S=Math.hypot(x,v);S>o&&(x=x/S*o,v=v/S*o),s.style.transform=`translate(${x}px, ${v}px)`,t.tForward=v<-6?1:0,t.tBack=v>6?1:0,t.tLeft=x<-6?1:0,t.tRight=x>6?1:0,t.tAnalog=Math.min(1,S/o),m.preventDefault()},c=m=>{r.active=!1,s.style.transform="",t.tForward=t.tBack=t.tLeft=t.tRight=0,t.tAnalog=1};n.addEventListener("touchstart",a,{passive:!1}),n.addEventListener("touchmove",l,{passive:!1}),n.addEventListener("touchend",c),n.addEventListener("touchcancel",c);const h=(m,f,x)=>{const v=i.querySelector(m);if(!v)return;const S=R=>{v.classList.toggle("active",R),R?f():x?.()};v.addEventListener("touchstart",R=>{R.preventDefault(),S(!0)},{passive:!1}),v.addEventListener("touchend",R=>{R.preventDefault(),S(!1)},{passive:!1}),v.addEventListener("click",R=>{R.preventDefault()})};h("#t-jump",()=>{t.tJump=1},()=>{t.tJump=0}),h("#t-sneak",()=>{t.tSneak=1,t.tSprint=0},()=>{t.tSneak=0}),h("#t-mine",()=>{t.mine=1,e.onMineStart?.()},()=>{t.mine=0,e.onMineEnd?.()}),h("#t-place",()=>{e.place?.()},()=>{}),i.querySelector("#t-fly")?.addEventListener("click",()=>{e.toggleFly?.()}),i.querySelector("#t-inv")?.addEventListener("click",m=>{m.preventDefault(),e.toggleInv?.()});const u={id:-1,x:0,y:0},d=document.getElementById("gl");d.addEventListener("touchstart",m=>{const f=m.changedTouches[0];f.clientX<window.innerWidth*.32&&f.clientY>window.innerHeight*.6||f.target===d&&(u.id=f.identifier,u.x=f.clientX,u.y=f.clientY,p=!0)},{passive:!0});let p=!1;d.addEventListener("touchmove",m=>{const f=[...m.changedTouches].find(x=>x.identifier===u.id);f&&(t.lookX+=(f.clientX-u.x)*.0045,t.lookY+=(f.clientY-u.y)*.0045,u.x=f.clientX,u.y=f.clientY,m.preventDefault())},{passive:!1});const g=m=>{[...m.changedTouches].find(x=>x.identifier===u.id)&&(u.id=-1,p&&performance.now()-_<250&&e.tap?.(),p=!1)};let _=0;return d.addEventListener("touchstart",()=>{_=performance.now()},{passive:!0}),d.addEventListener("touchend",g,{passive:!0}),d.addEventListener("touchcancel",g,{passive:!0}),{uninstall(){n.replaceWith(n.cloneNode(!0))}}}function I_(i,t){for(let e=0;e<i.length;e++)if(i[e].identifier===t)return i[e];return null}const us=64,rs=9,Zs=27;class U_{constructor(){this.hot=new Array(rs).fill(0),this.hotN=new Array(rs).fill(0),this.main=new Array(Zs).fill(0),this.mainN=new Array(Zs).fill(0),this.sel=0,this.creative=!0,this.cursor=0,this.cursorN=0}kind(t){return t==="hot"?[this.hot,this.hotN]:[this.main,this.mainN]}id(t,e){return this.kind(t)[0][e]|0}n(t,e){return this.kind(t)[1][e]|0}set(t,e,n,s){const[r,o]=this.kind(t);r[e]=n|0,o[e]=Math.max(0,s|0)}swap(t,e,n,s){const[r,o]=this.kind(t),[a,l]=this.kind(n),c=r[e],h=o[e];r[e]=a[s],o[e]=l[s],a[s]=c,l[s]=h}selectedId(){return this.hot[this.sel]|0}selectedCount(){return this.creative?1/0:this.hotN[this.sel]|0}count(t){let e=0;if(this.creative)return this.hot.includes(t)?1/0:0;for(let n=0;n<rs;n++)this.hot[n]===t&&(e+=this.hotN[n]);for(let n=0;n<Zs;n++)this.main[n]===t&&(e+=this.mainN[n]);return e}add(t,e=1){if(t|=0,!t||e<=0)return 0;if(this.creative){for(let o=0;o<rs;o++)if(this.hot[o]===t)return 0;for(let o=0;o<rs;o++)if(!this.hot[o])return this.hot[o]=t,this.hotN[o]=0,0;for(let o=0;o<Zs;o++)if(!this.main[o])return this.main[o]=t,this.mainN[o]=0,0;return 0}let n=e;const s=(o,a,l)=>{for(let c=0;c<o.length&&n>0;c++){if(o[c]!==t)continue;const h=us-a[c];if(h<=0)continue;const u=Math.min(h,n);a[c]+=u,n-=u}};s(this.hot,this.hotN),s(this.main,this.mainN);const r=(o,a)=>{for(let l=0;l<o.length&&n>0;l++){if(o[l])continue;const c=Math.min(us,n);o[l]=t,a[l]=c,n-=c}};return r(this.hot,this.hotN),r(this.main,this.mainN),n}take(t,e=1){if(this.creative)return e;let n=e;const s=(r,o)=>{for(let a=r.length-1;a>=0&&n>0;a--){if(r[a]!==t)continue;const l=Math.min(o[a],n);o[a]-=l,n-=l,o[a]<=0&&(r[a]=0,o[a]=0)}};return s(this.main,this.mainN),s(this.hot,this.hotN),e-n}consumeSelected(t=1){if(this.creative)return!0;const e=this.sel;return this.hot[e]?(this.hotN[e]-=t,this.hotN[e]<=0&&(this.hot[e]=0,this.hotN[e]=0),!0):!1}snapshot(){return{hot:this.hot.map((t,e)=>({id:t,n:this.creative?0:this.hotN[e]})),main:this.main.map((t,e)=>({id:t,n:this.creative?0:this.mainN[e]})),sel:this.sel,cursor:{id:this.cursor,n:this.cursorN},creative:this.creative}}serialize(){return{hot:this.hot.slice(),hotN:this.hotN.slice(),main:this.main.slice(),mainN:this.mainN.slice(),sel:this.sel,creative:this.creative}}load(t){if(!t)return!1;const e=(n,s)=>{if(Array.isArray(n))for(let r=0;r<s.length&&r<n.length;r++)s[r]=n[r]|0};return e(t.hot,this.hot),e(t.hotN,this.hotN),e(t.main,this.main),e(t.mainN,this.mainN),this.sel=t.sel|0,typeof t.creative=="boolean"&&(this.creative=t.creative),!0}}const Js={stone:"камень",iron:"железо",diamond:"алмаз"},Qs={stone:"cobblestone",iron:"iron_ore",diamond:"diamond_ore"},N_=[{out:"planks",n:4,need:[["log",1]],name:"Доски"},{out:"stick",n:4,need:[["planks",2]],name:"Палки"},{out:"crafting_table",n:1,need:[["planks",4]],name:"Верстак"},{out:"torch",n:4,need:[["stick",1],["coal_item",1]],name:"Факелы"},{out:"cobblestone",n:1,need:[["stone",1]],name:"Булыжник"},{out:"glass",n:1,need:[["sand",1],["coal_item",1]],table:!0,name:"Стекло"},{out:"stone_bricks",n:4,need:[["stone",2],["coal_item",1]],table:!0,name:"Каменный кирпич"},{out:"bricks",n:4,need:[["clay",2],["coal_item",1]],table:!0,name:"Кирпичи"},{out:"wood_pickaxe",n:1,need:[["planks",3],["stick",1]],name:"Кирка (дерево)"},{out:"wood_axe",n:1,need:[["planks",3],["stick",2]],name:"Топор (дерево)"},{out:"wood_shovel",n:1,need:[["planks",1],["stick",1]],name:"Лопата (дерево)"},{out:"wood_sword",n:1,need:[["planks",2],["stick",1]],name:"Меч (дерево)"},...["stone","iron","diamond"].flatMap(i=>[{out:`${i}_pickaxe`,n:1,need:[[Qs[i],3],["stick",2]],table:!0,name:`Кирка (${Js[i]})`},{out:`${i}_axe`,n:1,need:[[Qs[i],3],["stick",2]],table:!0,name:`Топор (${Js[i]})`},{out:`${i}_shovel`,n:1,need:[[Qs[i],1],["stick",1]],table:!0,name:`Лопата (${Js[i]})`},{out:`${i}_sword`,n:1,need:[[Qs[i],2],["stick",1]],table:!0,name:`Меч (${Js[i]})`}])],Kl=N_.filter(i=>{if(!Dt(i.out))return!1;for(const[t]of i.need)if(!Dt(t))return!1;return!0}).map(i=>({outId:Dt(i.out),n:i.n,table:!!i.table,name:i.name,need:i.need.map(([t,e])=>({id:Dt(t),n:e}))}));function jl(i,t,e){if(i.table&&!e)return!1;for(const n of i.need)if(t.count(n.id)<n.n)return!1;return!0}function F_(i,t){for(const n of i.need)if(t.take(n.id,n.n)!==n.n)return!1;if(t.add(i.outId,i.n)>0){for(const n of i.need)t.add(n.id,n.n);return!1}return!0}const ds={pig:{name:"Свинья",hp:10,w:.85,h:.9,speed:1.5,passive:!0,aggro:0,drops:()=>[{id:Dt("pork"),n:2}],parts:[{p:[0,.05,.28],s:[.75,.6,.9],tile:"mob_pig",shade:1},{p:[0,.32,-.5],s:[.42,.42,.34],tile:"mob_face",shade:.95},{p:[0,.18,-.68],s:[.28,.2,.1],tile:"mob_snout",shade:.9},{p:[-.24,-.3,.28],s:[.2,.42,.2],tile:"mob_pig",shade:.72,limb:1},{p:[.24,-.3,.28],s:[.2,.42,.2],tile:"mob_pig",shade:.72,limb:1},{p:[-.24,-.3,-.22],s:[.2,.42,.2],tile:"mob_pig",shade:.72,limb:1},{p:[.24,-.3,-.22],s:[.2,.42,.2],tile:"mob_pig",shade:.72,limb:1}]},cow:{name:"Корова",hp:14,w:1.1,h:1.25,speed:1.4,passive:!0,aggro:0,drops:()=>[{id:Dt("leather"),n:2},{id:Dt("pork"),n:1}],parts:[{p:[0,.1,.25],s:[.95,.8,1.15],tile:"mob_cow",shade:1},{p:[0,.38,-.62],s:[.55,.52,.42],tile:"mob_face",shade:.96},{p:[-.36,.62,-.55],s:[.14,.16,.14],tile:"mob_cow",shade:1.05},{p:[.36,.62,-.55],s:[.14,.16,.14],tile:"mob_cow",shade:1.05},{p:[-.3,-.35,.45],s:[.24,.5,.24],tile:"mob_cow",shade:.7,limb:1},{p:[.3,-.35,.45],s:[.24,.5,.24],tile:"mob_cow",shade:.7,limb:1},{p:[-.3,-.35,-.1],s:[.24,.5,.24],tile:"mob_cow",shade:.7,limb:1},{p:[.3,-.35,-.1],s:[.24,.5,.24],tile:"mob_cow",shade:.7,limb:1}]},sheep:{name:"Овца",hp:8,w:.9,h:1.15,speed:1.5,passive:!0,aggro:0,drops:()=>[{id:Dt("wool_white"),n:2}],parts:[{p:[0,.1,.2],s:[.8,.75,1],tile:"mob_sheep",shade:1},{p:[0,.45,-.45],s:[.45,.42,.36],tile:"mob_face",shade:.9},{p:[-.26,-.32,.3],s:[.2,.45,.2],tile:"mob_sheep",shade:.72,limb:1},{p:[.26,-.32,.3],s:[.2,.45,.2],tile:"mob_sheep",shade:.72,limb:1},{p:[-.26,-.32,-.05],s:[.2,.45,.2],tile:"mob_sheep",shade:.72,limb:1},{p:[.26,-.32,-.05],s:[.2,.45,.2],tile:"mob_sheep",shade:.72,limb:1}]},husk:{name:"Сумеречник",hp:18,w:.6,h:1.85,speed:2.5,hostile:!0,damage:3,reach:1.8,aggro:20,burnsInSun:!0,drops:()=>[{id:Dt("coal_item"),n:1}],parts:[{p:[0,.35,0],s:[.55,.7,.32],tile:"mob_husk",shade:1},{p:[0,.82,0],s:[.44,.44,.44],tile:"mob_husk",shade:1.06},{p:[-.36,.4,.16],s:[.18,.62,.18],tile:"mob_husk",shade:.8,limb:1},{p:[.36,.4,.16],s:[.18,.62,.18],tile:"mob_husk",shade:.8,limb:1},{p:[-.14,-.42,0],s:[.2,.7,.2],tile:"mob_husk",shade:.72,limb:1},{p:[.14,-.42,0],s:[.2,.7,.2],tile:"mob_husk",shade:.72,limb:1}]},villager:{name:"Житель",hp:20,w:.7,h:1.9,speed:1,passive:!0,aggro:0,villageOnly:!0,drops:()=>[{id:Dt("emerald"),n:1}],parts:[{p:[0,.05,.02],s:[.66,1.1,.46],tile:"mob_villager",shade:1},{p:[0,.62,0],s:[.52,.5,.52],tile:"mob_villager_face",shade:.98},{p:[0,.58,-.3],s:[.2,.22,.16],tile:"mob_villager_face",shade:1.12},{p:[-.4,.12,.02],s:[.16,.74,.22],tile:"mob_villager",shade:.78,limb:1},{p:[.4,.12,.02],s:[.16,.74,.22],tile:"mob_villager",shade:.78,limb:1},{p:[-.16,-.62,.02],s:[.24,.55,.26],tile:"mob_villager",shade:.64,limb:1},{p:[.16,-.62,.02],s:[.24,.55,.26],tile:"mob_villager",shade:.64,limb:1}]},crawler:{name:"Пещерник",hp:12,w:.95,h:.75,speed:3.1,hostile:!0,damage:2,reach:1.6,aggro:13,jumps:!0,darkOnly:!0,drops:()=>[{id:Dt("glowstone"),n:1}],parts:[{p:[0,.05,0],s:[.8,.5,.8],tile:"mob_crawler",shade:1},{p:[0,.2,-.42],s:[.4,.34,.34],tile:"mob_crawler",shade:1.08},{p:[-.4,-.15,.24],s:[.16,.34,.16],tile:"mob_crawler",shade:.7,limb:1},{p:[.4,-.15,.24],s:[.16,.34,.16],tile:"mob_crawler",shade:.7,limb:1},{p:[-.4,-.15,-.24],s:[.16,.34,.16],tile:"mob_crawler",shade:.7,limb:1},{p:[.4,-.15,-.24],s:[.16,.34,.16],tile:"mob_crawler",shade:.7,limb:1}]}},O_=24,k_=96,B_=16,Zl=44;function Ri(i,t,e,n,s,r){const a=Math.floor(t-s/2+.001),l=Math.floor(t+s/2-.001),c=Math.floor(e+.001),h=Math.floor(e+r-.001),u=Math.floor(n-s/2+.001),d=Math.floor(n+s/2-.001);for(let p=c;p<=h;p++){if(p<0)return!0;for(let g=u;g<=d;g++)for(let _=a;_<=l;_++)if(i.isSolid(_,p,g))return!0}return!1}function z_(i,t,e){const n=new sh(6),s=xr(t.index[i.tile]??0,t.cell,t.tile,t.grid),r=i.shade??1,[o,a,l]=i.s,c=i.p[1]+e,h=[[0,0,0],[0,0,0],[0,0,0],[0,0,0]],u=[[0,0],[0,0],[0,0],[0,0]],d=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];for(const m of qa){for(let f=0;f<4;f++){const x=m.verts[f];h[f][0]=i.p[0]+(x[0]-.5)*o,h[f][1]=c+(x[1]-.5)*a,h[f][2]=i.p[2]+(x[2]-.5)*l;const v=m.uv[f];u[f][0]=s.u0+v[0]*s.s,u[f][1]=s.v0+v[1]*s.s,d[f][0]=r*m.shade,d[f][1]=1,d[f][2]=0,d[f][3]=0}n.push([[h[0][0],h[0][1],h[0][2]],[h[1][0],h[1][1],h[1][2]],[h[2][0],h[2][1],h[2][2]],[h[3][0],h[3][1],h[3][2]]],[[u[0][0],u[0][1]],[u[1][0],u[1][1]],[u[2][0],u[2][1]],[u[3][0],u[3][1]]],[[d[0][0],d[0][1],d[0][2],d[0][3]],[d[1][0],d[1][1],d[1][2],d[1][3]],[d[2][0],d[2][1],d[2][2],d[2][3]],[d[3][0],d[3][1],d[3][2],d[3][3]]],!1)}const p=n.slice(),g=new Ae;g.setAttribute("position",new pe(p.position,3)),g.setAttribute("uv",new pe(p.uv,2)),g.setAttribute("light",new pe(p.light,4));const _=new Float32Array(p.tint.length);return _.fill(1),g.setAttribute("tint",new pe(_,3)),g.setIndex(new pe(p.index,1)),g.computeBoundingSphere(),g}class H_{constructor(t,e,n,s,r){const o=ds[t];this.type=t,this.def=o,this.id=r,this.x=e,this.y=n,this.z=s,this.vx=0,this.vy=0,this.vz=0,this.yaw=Math.random()*Math.PI*2,this.hp=o.hp,this.onGround=!1,this.think=Math.random()*2,this.walkPhase=Math.random()*6,this.hurtT=0,this.attackCd=0,this.fleeT=0,this.burnT=0,this.lightKey=-1,this.parts=[],this.group=new dn}}var Te,ch,hh,as,os,uh;class G_{constructor({world:t,scene:e,material:n,atlas:s,onPlayerHit:r,onDrop:o,particles:a,audio:l,rng:c=Math.random}){Lr(this,Te);this.world=t,this.scene=e,this.material=n,this.atlas=s,this.onPlayerHit=r??(()=>{}),this.onDrop=o??(()=>{}),this.particles=a,this.audio=l,this.rng=c,this.list=[],this.cap=14,this.enabled=!0,this.spawnT=1,this.day=1,this.nextId=1,this.kills=0}get count(){return this.list.length}clear(){for(const t of this.list){this.scene.remove(t.group);for(const e of t.parts)e.geo.dispose()}this.list.length=0}dispose(){this.clear()}trySpawn(t){if(!this.enabled||this.list.length>=this.cap)return!1;const e=this.world,n=this.day<.3,s=Object.keys(ds),r=[];for(const o of e.chunks.values()){if(!o?.blocks)continue;const a=o.cx*16+8-t.x,l=o.cz*16+8-t.z,c=Math.hypot(a,l);(c>6||c<Zl)&&r.push(o)}for(let o=0;o<14&&r.length;o++){const a=r[this.rng()*r.length|0],l=this.rng()*16|0,c=this.rng()*16|0,h=a.cx*16+l,u=a.cz*16+c,d=h-t.x,p=u-t.z,g=Math.hypot(d,p);if(g<B_*.55||g>Zl)continue;let _=e.terrain.col(h,u).h;for(let M=0;M<10&&e.isSolid(h,_+1,u);M++)_++;if(_<3)continue;const m=e.getBlock(h,_,u);if(!m||Il(m))continue;const f=_+1,x=e.skyAt(h,f,u),v=Math.max(x*15*(n?.22:1),e.lightAt(h,f,u)*15),S=ih(e,h,u),R=s.filter(M=>Xe(this,Te,hh).call(this,ds[M],n,v,f,S));if(!R.length)continue;const T=R[this.rng()*R.length|0],b=ds[T];if(Ri(e,h+.5,f,u+.5,b.w,b.h))continue;const I=new H_(T,h+.5,f,u+.5,this.nextId++);return Xe(this,Te,ch).call(this,I),I.lightKey=-1,Xe(this,Te,os).call(this,I,!0),this.list.push(I),!0}return!1}pick(t,e,n,s,r,o,a){let l=null,c=a;for(const h of this.list){const u=h.def.w/2+.14,d=h.def.h,p=[h.x-u,h.y,h.z-u],g=[h.x+u,h.y+d,h.z+u],_=[t,e,n],m=[s,r,o];let f=0,x=c,v=!0;for(let S=0;S<3;S++){if(Math.abs(m[S])<1e-6){if(_[S]<p[S]||_[S]>g[S]){v=!1;break}continue}let R=(p[S]-_[S])/m[S],T=(g[S]-_[S])/m[S];if(R>T){const b=R;R=T,T=b}if(f=Math.max(f,R),x=Math.min(x,T),f>x){v=!1;break}}v&&x>=0&&f<=c&&(c=f,l=h)}return l}hurt(t,e,n,s,r=5.5){if(!t||t.hp<=0)return!1;t.hp-=e,t.hurtT=.3,t.def.passive&&(t.fleeT=5);const o=t.x-n,a=t.z-s,l=Math.hypot(o,a)||1;return t.vx+=o/l*r,t.vz+=a/l*r,t.vy=Math.max(t.vy,4),this.particles?.burst(t.x,t.y+t.def.h*.6,t.z,8,t.def.hostile?[.5,.75,.45]:[.9,.4,.4],{speed:2.6,life:.5,spread:.5}),this.audio?.hit?.("soft",1.5),Xe(this,Te,os).call(this,t,!0),t.hp<=0&&(this.kills++,Xe(this,Te,as).call(this,t,!0)),!0}update(t,e){if(!(!this.world||!e)){if(!this.enabled||this.cap<=0){this.list.length&&this.clear();return}this.spawnT-=t,this.spawnT<=0&&(this.spawnT=.8,this.trySpawn(e));for(let n=this.list.length-1;n>=0;n--){const s=this.list[n];if(Math.hypot(s.x-e.x,s.z-e.z)>k_||Math.abs(s.y-e.y)>48){Xe(this,Te,as).call(this,s,!1);continue}Xe(this,Te,uh).call(this,s,t,e)}}}nearCount(t,e=40){let n=0;for(const s of this.list)Math.hypot(s.x-t.x,s.z-t.z)<e&&n++;return n}}Te=new WeakSet,ch=function(t){const e=t.def.h/2;for(const n of t.def.parts){const s=z_(n,this.atlas,e),r=new Ee(s,this.material);r.position.set(0,0,0),t.parts.push({mesh:r,geo:s,base:n.p,limb:!!n.limb}),t.group.add(r)}t.group.position.set(t.x,t.y,t.z),t.group.rotation.y=t.yaw,this.scene.add(t.group)},hh=function(t,e,n,s,r=!1){return t.villageOnly?r:t.hostile&&r||t.darkOnly&&n>7||s<6?!1:e||n>7},as=function(t,e){const n=this.list.indexOf(t);n>=0&&this.list.splice(n,1),this.scene.remove(t.group);for(const s of t.parts)s.geo.dispose();if(e){this.particles?.burst(t.x,t.y+t.def.h*.5,t.z,18,[.85,.85,.85],{speed:3.4,life:.7,spread:.6});for(const s of t.def.drops?t.def.drops():[])s.id&&this.onDrop(s.id,s.n);this.audio?.breakBlock?.("wool")}},os=function(t,e=!1){const n=this.world,s=Math.floor(t.x),r=Math.floor(t.y+t.def.h*.7),o=Math.floor(t.z),a=n.skyAt(s,r,o),l=n.lightAt(s,r,o),c=Math.round(a*16)*32+Math.round(l*16),h=t.hurtT>0;if(!h&&!e&&c===t.lightKey)return;t.lightKey=c;const u=Math.min(1.3,.18+a*(.2+.85*this.day)+l*.95),d=h?Math.min(1.7,u+.8):u,p=h?u*.4:u,g=h?u*.35:u;for(const _ of t.parts){const m=_.geo.getAttribute("tint"),f=m.array;for(let x=0;x<f.length;x+=3)f[x]=d,f[x+1]=p,f[x+2]=g;m.needsUpdate=!0}},uh=function(t,e,n){const s=this.world,r=t.def;t.hurtT>0&&(t.hurtT-=e),t.fleeT>0&&(t.fleeT-=e),t.attackCd-=e,t.think-=e;const o=n.x-t.x,a=n.z-t.z,l=n.y-t.y,c=Math.hypot(o,a);let h=0,u=0,d=r.speed;const p=r.aggro||16;if(r.hostile&&c<p&&Math.abs(l)<5){const M=c||1;h=o/M,u=a/M,t.yaw=Math.atan2(h,u),c<r.reach&&Math.abs(l)<2.2&&t.attackCd<=0&&(t.attackCd=1.15,this.onPlayerHit(r.damage,t),r.jumps&&(t.vy=Math.max(t.vy,6.4)))}else if(t.fleeT>0){const M=c||1;h=-o/M,u=-a/M,t.yaw=Math.atan2(h,u),d*=1.7}else if(t.think<=0)if(t.think=1.8+this.rng()*4,this.rng()<.4)h=0,u=0;else{const M=this.rng()*Math.PI*2;t.yaw=M,h=Math.sin(M),u=Math.cos(M)}else t.think>.7&&(h=Math.sin(t.yaw),u=Math.cos(t.yaw));const _=h*d,m=u*d,f=Math.min(1,e*(r.hostile?9:5));if(t.vx+=(_-t.vx)*f,t.vz+=(m-t.vz)*f,t.vy-=O_*e,t.vy<-52&&(t.vy=-52),r.burnsInSun&&this.day>.5)if(s.skyAt(Math.floor(t.x),Math.floor(t.y+1),Math.floor(t.z))>=.97){if(t.burnT+=e,t.burnT>1&&(t.burnT=0,t.hp-=1.8,this.particles?.burst(t.x,t.y+r.h*.8,t.z,5,[1,.6,.2],{speed:1.4,life:.45,spread:.3}),Xe(this,Te,os).call(this,t,!0),t.hp<=0)){Xe(this,Te,as).call(this,t,!0);return}}else t.burnT=0;const x=r.w,v=r.h,S=(M,A)=>{if(!A)return;const G=M==="x"?t.x+A:t.x,q=M==="z"?t.z+A:t.z;if(!Ri(s,G,t.y,q,x,v)){t.x=G,t.z=q;return}const K=!Ri(s,G,t.y+1.02,q,x,v)&&!Ri(s,t.x,t.y+1.02,t.z,x,v);if(t.onGround&&K){t.y+=1.02,t.x=G,t.z=q,t.vy=0;return}r.jumps&&t.onGround&&(t.vy=7.2),M==="x"?t.vx=0:t.vz=0};S("x",t.vx*e),S("z",t.vz*e);const R=Il(s.getBlock(Math.floor(t.x),Math.floor(t.y+.3),Math.floor(t.z)));R&&(t.vy=Math.max(t.vy,1.6));const T=t.y+t.vy*e;if(t.vy<=0?(Ri(s,t.x,T,t.z,x,v)?(t.y=Math.floor(T)+1,t.y<T&&(t.y=T),t.vy=0,t.onGround=!0):(t.y=T,t.onGround=(R||t.onGround)&&!1),R&&(t.onGround=!1)):(Ri(s,t.x,T,t.z,x,v)?t.vy=0:t.y=T,t.onGround=!1),t.y<-4){Xe(this,Te,as).call(this,t,!1);return}const b=Math.hypot(t.vx,t.vz);t.walkPhase+=e*(3.4+b*2.2);const I=Math.sin(t.walkPhase)*Math.min(.75,b*.3);for(let M=0;M<t.parts.length;M++){const A=t.parts[M];A.limb&&(A.mesh.rotation.x=(M%2?I:-I)*.85)}t.group.position.set(t.x,t.y+Math.abs(Math.sin(t.walkPhase))*.03*Math.min(1,b),t.z),t.group.rotation.y=t.yaw,Xe(this,Te,os).call(this,t)};Object.fromEntries(Object.entries(ds).map(([i,t])=>[i,t.name]));const dh=1,V_=12,W_=15e3,Oa=16,tr=1e7,an=(i,t=0)=>typeof i=="number"&&Number.isFinite(i)?i:t,er=(i,t,e)=>i<t?t:i>e?e:i;function X_(i){return JSON.stringify(i)}function q_(i){if(typeof i!="string"||i.length>64*1024)return null;let t;try{t=JSON.parse(i)}catch{return null}return!t||typeof t!="object"||t.v!==dh||typeof t.t!="string"?null:t}function ua(i){return String(i??"").replace(/[\u0000-\u001f<>]/g,"").trim().slice(0,24)||"игрок"}function Jl(i){return String(i??"").toLowerCase().replace(/[^a-z0-9_-]/g,"").slice(0,32)||"world"}function Ql(i){const t=er(an(i?.x),-tr,tr),e=er(an(i?.y,64),-8,jt+8),n=er(an(i?.z),-tr,tr),s=an(i?.yaw)%(Math.PI*2),r=er(an(i?.pitch),-1.5708,1.5708);return{x:t,y:e,z:n,yaw:s,pitch:r}}class Y_{constructor(t={}){this.id=String(t.id??"me"),this.name=ua(t.name),this.seed=t.seed>>>0,this.blockCount=t.blockCount??256,this.send=typeof t.send=="function"?t.send:()=>{},this.onEdit=t.onEdit??null,this.onPeerJoin=t.onPeerJoin??null,this.onPeerLeave=t.onPeerLeave??null,this.onChat=t.onChat??null,this.onSeed=t.onSeed??null,this.log=t.log??(()=>{}),this.clock=t.clock??null,this.shareSeed=!!t.shareSeed,this.peers=new Map,this.edits=0,this.dropped=0,this.stats={in:0,out:0,bad:0},this._lastPos=0,this.closed=!1}announce(t={}){this._raw({t:"hello",n:this.name,s:this.seed,...t})}_raw(t){if(!this.closed){this.stats.out++;try{this.send(X_({v:dh,from:this.id,...t}))}catch(e){this.log("отправка не удалась: "+(e?.message??e))}}}announceSeed(){this._raw({t:"seed",s:this.seed>>>0})}broadcastEdit(t,e,n,s){this._raw({t:"e",x:t|0,y:e|0,z:n|0,id:s|0}),this.edits++}broadcastPosition(t,e=0){const n=this.now();if(n-this._lastPos<1e3/V_)return;this._lastPos=n;const s=Ql({...t});this._raw({t:"p",x:+s.x.toFixed(3),y:+s.y.toFixed(3),z:+s.z.toFixed(3),yaw:+s.yaw.toFixed(4),pitch:+s.pitch.toFixed(4),h:e|0})}broadcastChat(t){const e=String(t??"").slice(0,160);e.trim()&&this._raw({t:"c",x:e})}now(){return this.clock?this.clock():Date.now()}handle(t){if(this.closed)return;this.stats.in++;const e=q_(t);if(!e){this.stats.bad++;return}const n=String(e.from??"").slice(0,64);if(!n||n===this.id)return;const s=this.now();switch(e.t){case"hello":{const r=!this.peers.has(n),o=this._touch(n,s);if(o.name=ua(e.n),typeof e.s=="number"&&Number.isFinite(e.s)&&(o.seed=e.s>>>0),r&&this.peers.size>Oa){this.log("слишком много игроков, лишний отключён"),this.peers.delete(n);return}r&&(this._raw({t:"hello",n:this.name,s:this.seed}),this.shareSeed&&this._raw({t:"seed",s:this.seed}),this.onPeerJoin?.(n,o));return}case"seed":{const r=an(e.s,NaN);Number.isFinite(r)&&this.onSeed?.(r>>>0);return}case"p":{const r=this._touch(n,s),o=Ql(e);r.tx=o.x,r.ty=o.y,r.tz=o.z,r.tyaw=o.yaw,r.tpitch=o.pitch,r.x===void 0&&(r.x=o.x,r.y=o.y,r.z=o.z,r.yaw=o.yaw,r.pitch=o.pitch),r.held=an(e.h,0)|0,r.seen=s;return}case"e":{const r=an(e.x,NaN),o=an(e.y,NaN),a=an(e.z,NaN),l=an(e.id,NaN)|0;if(![r,o,a].every(Number.isFinite)){this.stats.bad++;return}if(o<0||o>=jt||l<0||l>=this.blockCount){this.dropped++;return}this.onEdit?.({x:r|0,y:o|0,z:a|0,id:l,from:n}),this.edits++;return}case"c":{const r=this._touch(n,s);this.onChat?.(ua(r.name??e.n),String(e.x??"").slice(0,160));return}case"bye":{this.peers.delete(n)&&this.onPeerLeave?.(n);return}default:this.stats.bad++}}_touch(t,e){let n=this.peers.get(t);return n||(n={id:t,name:"игрок",x:0,y:0,z:0,yaw:0,pitch:0,seen:e},this.peers.set(t,n)),n.seen=e,n}tick(t){const e=this.now();for(const[n,s]of this.peers){if(e-(s.seen??0)>W_){this.peers.delete(n),this.onPeerLeave?.(n);continue}const r=Math.max(0,Math.min(1,t*9));s.tx!==void 0&&(s.x+=(s.tx-s.x)*r,s.y+=(s.ty-s.y)*r,s.z+=(s.tz-s.z)*r,s.yaw+=(s.tyaw-s.yaw)*r,s.pitch+=(s.tpitch-s.pitch)*r)}}leave(){this._raw({t:"bye"}),this.closed=!0}peerList(){return[...this.peers.values()].map(t=>({id:t.id,name:t.name,x:t.x,y:t.y,z:t.z}))}}const $_=i=>typeof globalThis.btoa=="function"?globalThis.btoa(unescape(encodeURIComponent(i))):Buffer.from(i,"utf8").toString("base64"),K_=i=>typeof globalThis.atob=="function"?decodeURIComponent(escape(globalThis.atob(i))):Buffer.from(i,"base64").toString("utf8");function tc(i){return $_(JSON.stringify(i))}function ec(i){try{const t=JSON.parse(K_(String(i).trim().replace(/\s+/g,"")));return t&&t.type&&t.sdp?t:null}catch{return null}}function fh(){const i={message:[],open:[],close:[],error:[]},t=(n,s)=>(typeof s=="function"&&i[n].push(s),e),e={onMessage:n=>t("message",n),onOpen:n=>t("open",n),onClose:n=>t("close",n),onError:n=>t("error",n),emit(n,s){for(const r of i[n])try{r(s)}catch{}}};return e}function j_(i){const t=fh();let e=null,n=[],s=!1;return(()=>{if(s)return;const o=globalThis.WebSocket;if(typeof o!="function"){t.emit("error","браузер не поддерживает WebSocket");return}try{e=new o(i)}catch(a){t.emit("error",String(a?.message??a));return}e.onopen=()=>{for(const a of n)try{e.send(a)}catch{break}n=[],t.emit("open")},e.onmessage=a=>{typeof a.data=="string"&&t.emit("message",a.data)},e.onclose=()=>{e=null,t.emit("close")},e.onerror=()=>{t.emit("error","нет соединения с сервером")}})(),{...t,get ready(){return!!e&&e.readyState===1},send(o){if(e&&e.readyState===1)try{e.send(o);return}catch{}n.length<256&&n.push(o)},close(){s=!0;try{e?.close()}catch{}e=null}}}function nc({label:i="lite",ice:t=!0}={}){const e=globalThis.RTCPeerConnection,n=fh();if(!e)return n.emit("error","браузер не поддерживает WebRTC"),{...n,ready:!1,send(){},close(){}};const s=new e({iceServers:t?[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302"]}]:[]});let r=null,o=!1;const a=()=>new Promise(c=>{if(s.iceGatheringState==="complete")return c();const h=setTimeout(c,2500);s.addEventListener("icegatheringstatechange",()=>{s.iceGatheringState==="complete"&&(clearTimeout(h),c())})}),l=c=>{r=c,r.binaryType="arraybuffer",r.onmessage=h=>{typeof h.data=="string"&&n.emit("message",h.data)},r.onopen=()=>n.emit("open"),r.onclose=()=>{o||n.emit("close")}};return s.ondatachannel=c=>l(c.channel),s.onconnectionstatechange=()=>{(s.connectionState==="failed"||s.connectionState==="disconnected")&&n.emit("close")},{...n,get ready(){return!!r&&r.readyState==="open"},send(c){if(r&&r.readyState==="open")try{r.send(c)}catch{}},async hostStart(){l(s.createDataChannel(i,{ordered:!0}));const c=await s.createOffer();return await s.setLocalDescription(c),await a(),tc(s.localDescription)},async guestAccept(c){const h=ec(c);if(!h)throw new Error("код приглашения не читается");await s.setRemoteDescription(h);const u=await s.createAnswer();return await s.setLocalDescription(u),await a(),tc(s.localDescription)},async guestFinish(c){const h=ec(c);if(!h)throw new Error("ответ не читается");await s.setRemoteDescription(h)},close(){o=!0;try{r?.close()}catch{}try{s.close()}catch{}}}}function ic(i,t=8790){const e=globalThis.location,n=Z_(i);if(!e||!e.protocol)return`ws://127.0.0.1:${t}/${n}`;const s=e.protocol==="https:"?"wss:":"ws:",r=/^(\d+)-(.+)$/.exec(e.hostname??"");return r?`${s}//${t}-${r[2]}/${n}`:`${s}//${e.hostname}:${t}/${n}`}function Z_(i){return String(i??"").toLowerCase().replace(/[^a-z0-9_-]/g,"").slice(0,32)||"world"}const sc=[5227511,16758605,8505220,12216520,15037299,5093036,15753874,16773494],rc=13208675;function J_(i){let t=2166136261;for(let e=0;e<i.length;e++)t=(t^i.charCodeAt(e))*16777619;return t>>>0}const Ci=(i,t,e,n)=>({geo:new En(i,t,e),color:n});class Q_{constructor(t){this.scene=t,this.group=new dn,this.group.name="peers",this.scene.add(this.group),this.items=new Map,this.day=1,this.parts=[Ci(.5,.5,.5,rc),Ci(.55,.7,.3,0),Ci(.22,.75,.22,0),Ci(.22,.75,.22,0),Ci(.25,.8,.25,0),Ci(.25,.8,.25,0)],this.offs=[[0,1.45,0],[0,.85,0],[-.4,.85,0],[.4,.85,0],[-.15,.4,0],[.15,.4,0]],this.mats=[]}_label(t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n.fillStyle="rgba(12,16,20,0.68)",n.fillRect(0,0,e.width,e.height),n.font="600 34px ui-monospace, monospace",n.fillStyle="#eaf2f7",n.textAlign="center",n.textBaseline="middle",n.fillText(t.slice(0,18),e.width/2,e.height/2+2);const s=new Y0(e);s.colorSpace=be;const r=new W0(new kc({map:s,transparent:!0,depthTest:!0}));return r.scale.set(1.6,.4,1),r.position.set(0,2.15,0),r.renderOrder=3,r.userData.tex=s,r}ensure(t,e){let n=this.items.get(t);if(n)return n.name!==e&&(n.name=e,n.group.remove(n.label),n.label.material.map.dispose(),n.label.material.dispose(),n.label=this._label(e),n.group.add(n.label)),n;const s=sc[J_(String(e||t))%sc.length],r=new dn,o=[];this.parts.forEach((l,c)=>{const h=new bn({color:c===0?rc:c===1?s:tv(s)}),u=new Ee(l.geo,h),d=this.offs[c];u.position.set(d[0],d[1],d[2]),r.add(u),o.push(u)});const a=this._label(e||"игрок");return r.add(a),this.group.add(r),n={id:t,name:e||"игрок",group:r,meshes:o,label:a,t:0,px:0,pz:0,base:o.map(l=>l.material.color.clone())},this.items.set(t,n),this.day!==1&&this._apply(n),n}update(t,e){const n=new Set;for(const s of t){n.add(s.id);const r=this.ensure(s.id,s.name);r.group.position.set(s.x??0,(s.y??0)-.02,s.z??0),r.group.rotation.y=-(s.yaw??0);const o=Math.hypot((s.x??0)-r.px,(s.z??0)-r.pz);r.px=s.x??0,r.pz=s.z??0,r.t+=e*(1.5+o*9);const a=Math.sin(r.t*3.4)*Math.min(.7,o*4);r.meshes[4]&&(r.meshes[4].rotation.x=a),r.meshes[5]&&(r.meshes[5].rotation.x=-a),r.meshes[2]&&(r.meshes[2].rotation.x=-a*.7),r.meshes[3]&&(r.meshes[3].rotation.x=a*.7)}for(const s of[...this.items.keys()])n.has(s)||this.remove(s);return this.items.size}remove(t){const e=this.items.get(t);if(e){this.group.remove(e.group);for(const n of e.meshes)n.material.dispose();e.label.material.map?.dispose?.(),e.label.material.dispose(),this.items.delete(t)}}clear(){for(const t of[...this.items.keys()])this.remove(t)}setDayLight(t){const e=Math.max(.28,Math.min(1,t));if(!(Math.abs(e-this.day)<.01)){this.day=e;for(const n of this.items.values())this._apply(n)}}_apply(t){t.meshes.forEach((e,n)=>{t.base[n]&&e.material.color.copy(t.base[n]).multiplyScalar(this.day)})}}function tv(i){const t=new Ut(i);return t.multiplyScalar(.72),t.getHex()}const da=["grass","dirt","stone","cobblestone","planks","log","glass","torch","glowstone"],fa=1/60;class ev{constructor(t={}){this.canvas=document.getElementById("gl"),this.renderer=t.renderer??K0(this.canvas),t.renderer||this.applyPixelRatio(),this.scene=new G0,this.camera=new Qe(74,1,.08,1800),this.camera.rotation.order="YXZ",this.scene.add(this.camera),this.atlas=new xg;try{this.atlasAniso=this.atlas.setMaxAnisotropy(this.renderer.capabilities?.getMaxAnisotropy?.()??1)}catch{this.atlasAniso=1}this.materials=bg(this.atlas),this.sky=new Ag(this.scene),this.particles=new Qg(this.scene),this.target=new i_(this.atlas),this.scene.add(this.target.group),this.viewModel=new n_(this.atlas),this.camera.add(this.viewModel.group),this.settings={...Fa,...b_()},Ui.ao=this.settings.ao,Ui.smoothLight=this.settings.smoothLight,this.audio=new v_,this.hud=new P_(this.atlas),this.input={forward:0,back:0,left:0,right:0,jump:0,sneak:0,sprint:0,mine:0,place:0,lookX:0,lookY:0,analog:1},this.keys=new Set,this.state={running:!1,paused:!1,loading:!1,hudHidden:!1,time:.28,seed:Ia,world:null,hotbar:da.map(e=>yt.find(n=>n.key===e)?.id??0),sel:0,breakProgress:0,breakTarget:null,lastHit:null,dragging:!1,hp:20,regenT:0,saveT:0,placeCd:0,stepT:0,fps:0,ms:0,acc:0,flyTapT:0,sprintTapT:0},this.blockTint=this.computeTints(),this.inv=new U_,this.state.hotbar=this.inv.hot,this.state.counts=this.inv.hotN,this.state.sel=this.inv.sel,this.attackCd=0,this.state.mobTarget=null,this.mobs=new G_({world:null,scene:this.scene,material:this.materials.solid,atlas:this.atlas,particles:this.particles,audio:this.audio,onPlayerHit:(e,n)=>this.hitByMob(e,n),onDrop:(e,n)=>this.pickup(e,n)}),this.debouncedSave=w_(()=>this.save(),1500),this.net=null,this.netTransport=null,this.netKind=null,this.netRole="host",this.netAdopt=!1,this.netRtcWait=null,this.netPanelOpen=!1,this._netHudT=0,this.menuMode=this.settings.creative?"creative":"survival",this.avatars=new Q_(this.scene),this.applySettings(null,!0),this.bindUI(),this.bindNet(),this.bindInput(),this.resize(),addEventListener("resize",()=>this.resize()),this.hud.show("menu"),this.refreshWorlds(),this.bindModeSeg(),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state.running&&this.pause()}),requestAnimationFrame(e=>this.frame(e))}computeTints(){const t=new Map;for(const e of yt){if(!e.tiles)continue;const n=e.tiles.side??e.tiles.all,s=this.atlas.canvases[n];if(!s)continue;const o=s.getContext("2d").getImageData(0,0,s.width,s.height).data;let a=0,l=0,c=0,h=0;for(let u=0;u<o.length;u+=4)o[u+3]<40||(a+=o[u],l+=o[u+1],c+=o[u+2],h++);h&&t.set(e.id,[a/h/255,l/h/255,c/h/255])}return t}bindUI(){const{el:t}=this.hud;t.seed.value=T_()??"",document.getElementById("play").onclick=()=>this.startFromMenu(),document.getElementById("rnd-seed").onclick=()=>{t.seed.value=String(Math.random()*1e9|0),this.audio.ui("click")},t.seed.onkeydown=e=>{e.key==="Enter"&&this.startFromMenu()},document.getElementById("open-settings").onclick=()=>this.openSettings("settings"),document.getElementById("pause-settings").onclick=()=>this.openSettings("settings"),document.getElementById("settings-close").onclick=()=>{this.hud.show(this.state.running?"pause":"menu"),this.state.running&&this.resume()},document.getElementById("resume").onclick=()=>this.resume(),document.getElementById("save-now").onclick=()=>{this.save(!0)},document.getElementById("pause-quit").onclick=()=>{this.save(),this.toMenu()},this.hud.onHotbarSelect=(e,n)=>{this.inventoryOpen?(this.invTarget=e,this.hud.markInventorySelection(e)):(this.selectSlot(e),n==="click"&&this.resume())},this.hud.buildHotbar(this.inv.hot,this.inv.sel,this.hud.onHotbarSelect,null),window.__hudHover=()=>this.audio.ui("hover")}openSettings(t){this.hud.settingsForm(this.settings,(e,n)=>this.applySettings(e,n),{onRegenerate:()=>{this.state.world&&(this.state.world.rebuildAll?.(),this.chunkView?.rebuildAll())},onLowSpec:()=>{this.settings={...this.settings,renderScale:.65,ao:!1,clouds:.3,mobs:8},qn(this.settings),this.applySettings(null,!0),this.chunkView?.rebuildAll(),this.hud.toast("Слабое железо: рендер 65%, без AO, мобильно 8. Дальность прорисовки как была",""),this.openSettings(t)},onReset:()=>{this.settings={...Fa},qn(this.settings),this.applySettings(null,!0),this.openSettings(t)}}),this.settingsFrom=t,this.hud.show("settings")}applySettings(t,e){if(t==="creative"){this.setCreative(!!e);return}t&&e!==null&&(this.settings[t]=e,qn(this.settings));const n=this.settings;Ui.ao=n.ao,Ui.smoothLight=n.smoothLight,this.materials?.setQuality?.(n.shaders),this.hud?.setCinematic?.(n.shaders>=2),this.chunkView&&this.chunkView.setRenderDistance(n.renderDistance),this.audio.ready&&this.audio.setVolumes(n.sfx,n.music),this.audio.musicVolume=n.music,this.audio.sfxVolume=n.sfx,this.camera.fov=n.fov,this.camera.updateProjectionMatrix(),this.hud.hideDebug(!n.showDebug),(t==="ao"||t==="smoothLight")&&this.chunkView?.rebuildAll(),(t==="renderScale"||t===null)&&this.applyPixelRatio(),(t==="touch"||t===null)&&this.setupTouch()}openNet(){this.netPanelOpen=!0;const t=this.settings.netUrl||ic(this.settings.netRoom||"world");this.hud.netPrefill({name:this.settings.netName||"",url:t,room:this.settings.netRoom||"world",role:this.netRole,connected:!!this.net,text:this.net?`${this.netKind==="p2p"?"прямое соединение":`комната ${Jl(this.netRoomName??"")}`}: игроков ${this.net.peers.size+1}`:void 0,kind:this.net?"on":""}),this.hud.show("net"),document.exitPointerLock?.()}closeNet(){this.netPanelOpen=!1,this.hud.show(this.state.running?"pause":"menu"),this.state.running&&this.resume()}bindNet(){const t=this.hud.el;document.getElementById("settings-net").onclick=()=>this.openNet(),document.getElementById("menu-net").onclick=()=>this.openNet(),document.getElementById("net-close").onclick=()=>this.closeNet(),document.getElementById("net-connect").onclick=()=>this.netConnectRelay(),document.getElementById("net-stop").onclick=()=>this.netLeave("сеть выключена"),document.getElementById("net-offer").onclick=()=>this.netRtcOffer(),document.getElementById("net-answer").onclick=()=>this.netRtcExchange();for(const e of t.netRole?.children??[])e.onclick=()=>{this.netRole=e.dataset?.v==="guest"?"guest":"host",this.hud.netRole(this.netRole)};t.netChat.onkeydown=e=>{e.stopPropagation?.(),e.key==="Enter"&&this.netSendChat()}}netAttach(t,{kind:e,shareSeed:n,adopt:s}){const r=(this.state.seed??Ia)>>>0;this.netKind=e,this.netAdopt=!!s;const o=new Y_({id:`${e}-${Math.random().toString(36).slice(2,9)}`,name:this.hud.netState().name||"игрок",seed:r,blockCount:yt.length,shareSeed:n,send:a=>t.send(a),log:a=>this.hud.netStatus(String(a),"err"),onEdit:a=>this.netApplyEdit(a),onPeerJoin:(a,l)=>this.hud.toast(`${l.name??"игрок"} в сети`,""),onPeerLeave:a=>{this.hud.toast("игрок вышел из сети","warn"),this.avatars.remove(a)},onChat:(a,l)=>this.hud.toast(`${a}: ${l}`,""),onSeed:a=>this.netAdoptSeed(a)});return t.onMessage(a=>o.handle(a)),t.onOpen?.(()=>o.announce({role:this.netRole})),t.onClose?.(()=>{this.net===o&&(this.hud.netStatus("связь потеряна — «Выйти из сети» почистит состояние, потом можно подключиться заново","err"),this.hud.toast("сеть отвалилась","warn"))}),t.onError?.(a=>{this.net===o&&this.hud.netStatus(String(a??"ошибка соединения"),"err")}),this.netTransport=t,this.net=o,o.announce({role:this.netRole}),o}netConnectRelay(){this.net&&this.netLeave();const t=this.hud.netState(),e=Jl(t.room);this.netRoomName=e;let n=t.url||ic(e);if(!/^wss?:\/\//i.test(n)){this.hud.netStatus("адрес должен начинаться с ws:// или wss://","err");return}n=n.replace(/\/+$/,"");const s=`${n}/${e}`;this.settings.netUrl=n,this.settings.netRoom=e,this.settings.netName=t.name,qn(this.settings),this.hud.netStatus(`стучимся на ${s}…`,"");const r=j_(s);this.netAttach(r,{kind:"relay",shareSeed:t.role==="host",adopt:t.role==="guest"}),this.netEnsureWorld(),this._netPoll=setInterval(()=>{if(!this.net||this.netTransport!==r){clearInterval(this._netPoll),this._netPoll=0;return}r.ready&&(clearInterval(this._netPoll),this._netPoll=0,this.hud.netStatus(`в комнате ${e} · ждём игроков (до ${Oa})`,"on"))},400),this._netWait=setTimeout(()=>{this._netWait=0,this.net&&this.netTransport===r&&!r.ready&&this.hud.netStatus("реле не отвечает: запущен ли `npm run net`? совпадают ли адрес и комната?","err")},6e3)}async netRtcOffer(){this.net&&this.netLeave();const t=nc({});this.netAttach(t,{kind:"p2p",shareSeed:!0,adopt:!1}),this.netEnsureWorld(),this.netRtcWait="answer";try{const e=await t.hostStart();this.hud.netCode(e),this.hud.netStatus("код приглашения — в поле ниже: отправь его второму игроку, он вернёт свой код","on")}catch(e){this.hud.netStatus("не удалось создать приглашение: "+(e?.message??e),"err")}}async netRtcExchange(){const t=this.hud.netCodeValue();if(!t.trim()){this.hud.netStatus("вставьте код в поле ниже","err");return}try{if(this.netRtcWait==="answer"){await this.netTransport.guestFinish(t),this.netRtcWait=null,this.hud.netStatus("ответ принят. если второй игрок тоже закончил — вы видите друг друга","on");return}this.net?this.netAdopt=!0:this.netAttach(nc({}),{kind:"p2p",shareSeed:!1,adopt:!0}),this.netEnsureWorld();const e=await this.netTransport.guestAccept(t);this.netRtcWait="answer",this.hud.netCode(e),this.hud.netStatus("код ответа готов — скопируй его и верни первому игроку, он нажмёт ту же кнопку","on")}catch(e){this.hud.netStatus("код не принял: "+(e?.message??e),"err")}}netEnsureWorld(){this.state.running||this.state.loading||(this.hud.netStatus("готовлю мир для комнаты…",""),Promise.resolve(this.startFromMenu()).catch(t=>this.hud.netStatus("мир не поднялся: "+(t?.message??t),"err")))}netAdoptSeed(t){this.netAdopt&&((this.state.seed??-1)===t&&this.state.running||(this.hud.netStatus(`перестраиваю мир под сида ${t}…`,""),Promise.resolve(this.start(t)).then(()=>this.net&&(this.net.seed=t)).catch(e=>this.hud.netStatus("мир хоста не построился: "+(e?.message??e),"err"))))}netApplyEdit({x:t,y:e,z:n,id:s}){const r=this.state.world;r&&r.setBlock(t,e,n,s,!0)}netSendChat(){const t=this.hud.el.netChat,e=String(t?.value??"");!e.trim()||!this.net||(this.net.broadcastChat(e),t&&(t.value=""),this.hud.toast(`ты: ${e.slice(0,160)}`,""))}netBroadcast(t,e,n,s){this.net&&this.net.broadcastEdit(t,e,n,s)}netFrame(t){const e=this.net;if(!e)return;e.tick(t),this.player&&this.state.world&&!this.state.loading&&e.broadcastPosition({x:this.player.x,y:this.player.y,z:this.player.z,yaw:this.player.yaw,pitch:this.player.pitch},this.inv.sel);const n=e.peerList();this.avatars.update(n,t),this.avatars.setDayLight(this.sky.dayLight??1);const s=this.lastFrame??0;s-this._netHudT>500&&(this._netHudT=s,this.hud.netPeers(n))}netSync(){this.net&&(this.net.seed=(this.state.seed??0)>>>0,this.netKind==="relay"&&this.netRole==="host"&&this.net.announceSeed())}netLeave(t="сеть выключена"){clearInterval(this._netPoll),this._netPoll=0,clearTimeout(this._netWait),this._netWait=0;try{this.net?.leave()}catch{}try{this.netTransport?.close()}catch{}this.net=null,this.netTransport=null,this.netKind=null,this.netAdopt=!1,this.netRtcWait=null,this.avatars.clear(),this.hud.netStatus(t,""),this.hud.netPeers([])}setupTouch(){const t=matchMedia("(pointer: coarse)").matches,e=this.settings.touch||t,n=this.hud.el.touch;n&&(n.classList.toggle("hidden",!e),e&&!this.touchApi&&(this.touchApi=D_(n,{input:this.input,api:{toggleFly:()=>this.toggleFly(),toggleInv:()=>this.toggleInventory(),place:()=>this.tryPlace(),onMineStart:()=>{this.input.mine=1},onMineEnd:()=>{this.input.mine=0},tap:()=>{this.tryPlace()}}})))}refreshWorlds(){const t=y_().map(e=>({seed:e.seed,edits:e.edits?.length??e.edits??0,saved:e.saved}));this.hud.renderWorlds(t,e=>this.start(e),e=>{confirm(`Удалить мир «${e}»? Это сотрёт все изменения.`)&&(S_(e),this.refreshWorlds(),this.hud.toast("Мир удалён","warn"))})}startFromMenu(){const t=this.hud.el.seed.value.trim(),e=t===""?Math.random()*1e9|0:Pl(t);this.applyMenuMode(),this.start(e)}applyMenuMode(){const t=this.menuMode==="creative";return this.settings.creative!==t&&(this.settings.creative=t,qn(this.settings)),t}bindModeSeg(){const t=document.getElementById("mode");if(!(!t||this._modeBound)){this._modeBound=!0;for(const e of t.children??[])e.onclick=()=>{this.menuMode=e.dataset?.v==="creative"?"creative":"survival",this.syncModeSeg(),this.audio.ui("click")};this.syncModeSeg()}}syncModeSeg(){this.menuMode=this.menuMode==="creative"?"creative":"survival",this.hud.seg(document.getElementById("mode"),this.menuMode);const t=document.getElementById("mode-hint");t&&(t.textContent=this.menuMode==="creative"?"Творчество: полёт (двойной Пробел), все блоки и предметы из палитры, вещи не тратятся.":"Выживание: всё добывается руками и тратится, урон работает, полёт выключен.")}async start(t){const e=(typeof t=="string"||typeof t=="number")&&!Number.isNaN(Number(t))?Number(t)>>>0:Pl(String(t));E_(e);const n=new ha(e),s=M_(e);s?.edits&&n.loadEdits(s.edits),this.state.world=n,this.state.seed=e,this.state.time=s?.time??.28,this.player=new m_(n);const r=s?.spawn??n.findSpawn();this.player.spawn(r[0],r[1],r[2]),s?.yaw!==void 0&&(this.player.yaw=s.yaw,this.player.pitch=s.pitch),s?.hp!==void 0&&(this.state.hp=s.hp),this.mobs.world=n,this.mobs.clear(),this.chunkView?.dispose(),this.chunkView=new hs(n,this.scene,this.materials,this.atlas),this.chunkView.setRenderDistance(this.settings.renderDistance),this.setupInventory(s?s.creative:void 0,s?.inv??s?.hotbar),this.syncHotbar(),this.hud.setHealth(this.state.hp),this.state.running=!1,this.state.paused=!1,this.state.loading=!0,this.hud.show("loading"),await this.prepare(Math.min(this.settings.renderDistance,5)),this.state.loading=!1;const o=n.findOpenSpot(Math.floor(this.player.x),Math.floor(this.player.z));o?this.player.spawn(o[0],o[1],o[2]):this.settlePlayer(),this.inv.creative||this.hud.toast("Выживание: бей дерево ЛКМ, E — инвентарь и крафт",""),this.state.running=!0,this.state.hp=Math.max(1,this.state.hp),this.audio.resume(),this.audio.setVolumes(this.settings.sfx,this.settings.music),this.hud.show(null),this.hud.toast(`Мир ${e} готов · ${n.chunkCount} чанков`),this.net&&this.netSync(),this.lockPointer()}prepare(t){const e=this.state.world,n=Math.floor(this.player.x/st),s=Math.floor(this.player.z/st),r=[];for(let c=-t;c<=t;c++)for(let h=-t;h<=t;h++)r.push([n+h,s+c,h*h+c*c]);r.sort((c,h)=>c[2]-h[2]);const o=r.length,a=r.slice(),l=r.map(([c,h])=>[c,h]);return new Promise(c=>{const h=()=>{const d=performance.now();for(;a.length&&performance.now()-d<14;){const[p,g]=a.shift();e.ensureChunk(p,g)}this.hud.setLoading(.15+.5*(1-a.length/o),`генерация ландшафта: ${o-a.length}/${o} чанков`),a.length?requestAnimationFrame(h):requestAnimationFrame(u)},u=()=>{const d=performance.now();for(;l.length&&performance.now()-d<14;){const[p,g]=l.shift();for(const _ of[...e.dirtyLight]){const m=e.getChunk(...ha.decode(_));m&&e.recomputeLight(m)}e.dirtyLight.clear(),this.chunkView.remesh(p,g),e.dirtyMesh.delete(this.chunkView.constructor.key(p,g))}this.hud.setLoading(.65+.35*(1-l.length/o),`построение мешей: ${o-l.length}/${o}`),l.length?requestAnimationFrame(u):c()};h()})}bindInput(){const t=this.canvas;addEventListener("keydown",e=>this.onKey(e,!0)),addEventListener("keyup",e=>this.onKey(e,!1)),addEventListener("blur",()=>{this.keys.clear(),this.input.mine=0}),t.addEventListener("mousedown",e=>{this.state.running&&(e.button===0&&(this.input.mine=1),e.button===2&&(this.input.place=1),e.button===1&&this.pickBlock(),this.state.dragging=!0,this.audio.resume())}),addEventListener("mouseup",e=>{e.button===0&&(this.input.mine=0,this.state.breakProgress=0,this.target.setBreakProgress(0)),e.button===2&&(this.input.place=0),this.state.dragging=!1}),t.addEventListener("contextmenu",e=>e.preventDefault()),addEventListener("wheel",e=>{!this.state.running||this.inventoryOpen||this.selectSlot((this.state.sel+(e.deltaY>0?1:-1)+9)%9)},{passive:!0}),addEventListener("mousemove",e=>{if(!this.state.running||this.state.paused||this.inventoryOpen)return;const n=document.pointerLockElement===t;if(!n&&!this.state.dragging)return;const s=.0022*this.settings.sensitivity*(n?1:1.25);this.input.lookX+=(e.movementX??0)*s,this.input.lookY-=(e.movementY??0)*s}),document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&this.state.running&&!this.state.paused&&!this.inventoryOpen&&this.pause()})}onKey(t,e){const n=t.code,s=t.target;if(!!s&&(s.tagName==="INPUT"||s.tagName==="TEXTAREA"||s.isContentEditable===!0)&&n!=="Escape"){e||this.keys.delete(n);return}if(t.repeat)return;const o=["Tab","F1","F3","Space","KeyE","Slash","Backquote"].includes(n);if(e&&o&&t.preventDefault(),e?this.keys.add(n):this.keys.delete(n),!e)return;const a=this.state;if(n==="Escape"){this.netPanelOpen?this.closeNet():this.inventoryOpen?this.closeInventory():a.running&&!a.paused?this.pause():a.paused&&this.resume();return}if(a.running){if(n==="KeyE"){this.toggleInventory();return}if(n==="F3"){this.settings.showDebug=!this.settings.showDebug,this.hud.hideDebug(!this.settings.showDebug),qn(this.settings);return}if(n==="F1"){a.hudHidden=!a.hudHidden,this.hud.hideHud(a.hudHidden);return}if(n==="KeyF"){this.fullscreen();return}if(n==="KeyM"){const l=this.audio.toggleMusic();this.hud.toast(l?"Музыка: вкл":"Музыка: выкл");return}if(n==="KeyN"){a.time=(a.time+.25)%1,this.hud.toast("Время перемотано");return}if(n==="KeyR"){this.unstick();return}if(n==="KeyQ"){this.inv.creative?this.inv.set("hot",this.inv.sel,zi,0):this.inv.set("hot",this.inv.sel,this.inv.id("hot",this.inv.sel),Math.max(0,this.inv.n("hot",this.inv.sel)-1)),this.syncHotbar();return}if(n.startsWith("Digit")){const l=+n.slice(5);l>=1&&l<=9&&this.selectSlot(l-1);return}if(n==="Space"){const l=performance.now();this.lastSpace&&l-this.lastSpace<280&&this.toggleFly(),this.lastSpace=l}if(n==="KeyW"){const l=performance.now();this.lastW&&l-this.lastW<280&&this.keys.add("ControlLeft"),this.lastW=l}}}readKeys(){const t=this.keys,e=this.input,n=s=>t.has(s)?1:0;e.forward=n("KeyW")||n("ArrowUp")||e.tForward,e.back=n("KeyS")||n("ArrowDown")||e.tBack,e.left=n("KeyA")||n("ArrowLeft")||e.tLeft,e.right=n("KeyD")||n("ArrowRight")||e.tRight,e.jump=n("Space")||e.tJump,e.sneak=n("ShiftLeft")||n("ShiftRight")||e.tSneak,e.sprint=n("ControlLeft")||n("ControlRight")||e.tSprint,e.analog=e.tAnalog??1,e.autoJump=this.settings.autoJump}toggleFly(){if(!this.inv.creative){this.hud.toast("Полёт доступен в творчестве — режим выбирается при создании мира","warn"),this.audio.ui("deny");return}this.player.flying=!this.player.flying,this.player.flying?this.player.vy=0:this.player.fallDamage=0,this.hud.toast(this.player.flying?"Полёт: вкл":"Полёт: выкл"),this.audio.ui("click")}selectSlot(t){const e=((t|0)%9+9)%9;this.inv.sel=e,this.state.sel=e,this.hud.selectSlot(e),this.viewModel.setBlock(this.inv.hot[e]),this.hud.showBlockName(this.inv.hot[e]),this.state.breakProgress=0,this.target.setBreakProgress(0)}syncHotbar(){this.state.hotbar=this.inv.hot,this.state.counts=this.inv.hotN,this.state.sel=this.inv.sel,this.hud.buildHotbar(this.inv.hot,this.inv.sel,this.hud.onHotbarChange,this.inv.creative?null:this.inv.hotN),this.hud.selectSlot(this.inv.sel),this.viewModel.setBlock(this.inv.hot[this.inv.sel]),this.inventoryOpen&&this.refreshInventoryUI()}setCreative(t){if(this.inv.creative=!!t,this.state.creative=!!t,!t&&this.player&&(this.player.flying=!1,this.player.fallDamage=0),this.menuMode=t?"creative":"survival",this.syncModeSeg(),this.hud.setFlyAvailable(this.inv.creative),this.settings.creative=!!t,qn(this.settings),t){for(let e=0;e<9;e++)this.inv.hotN[e]=0;this.inv.hot.some(e=>e)||da.forEach((e,n)=>{this.inv.hot[n]=Dt(e)})}this.syncHotbar()}setupInventory(t,e){const n=typeof t=="boolean"?t:!!this.settings.creative;this.inv.creative=n,this.inv.hot.fill(0),this.inv.hotN.fill(0),this.inv.main.fill(0),this.inv.mainN.fill(0),e&&Array.isArray(e.hot)?this.inv.load(typeof e.hot=="object"&&!Array.isArray(e.hot)?e:{hot:e,hotN:[],main:[],mainN:[],creative:n}):n&&da.forEach((s,r)=>{this.inv.hot[r]=Dt(s)}),this.inv.sel=Math.max(0,Math.min(8,this.inv.sel)),this.state.creative=n,this.hud.setFlyAvailable(n)}pickup(t,e=1){if(!t)return;if(this.inv.add(t,e)>0){this.hud.toast("Инвентарь полон","warn");return}this.syncHotbar(),this.scheduleSave()}nearCraftingTable(){const t=this.state.world;if(!t)return!1;const e=this.player,n=Dt("crafting_table"),s=Math.floor(e.x)-4,r=Math.floor(e.x)+4,o=Math.floor(e.y)-2,a=Math.floor(e.y)+3,l=Math.floor(e.z)-4,c=Math.floor(e.z)+4;for(let h=o;h<=a;h++)for(let u=l;u<=c;u++)for(let d=s;d<=r;d++)if(t.getBlock(d,h,u)===n)return!0;return!1}refreshInventoryUI(){const t=this.nearCraftingTable(),e=this.inv.snapshot(),n=Kl.map(s=>({name:s.name,outId:s.outId,n:s.n,table:s.table,ok:jl(s,this.inv,t),need:s.need.map(r=>({id:r.id,n:r.n,have:Math.min(this.inv.count(r.id),999)}))}));this.hud.renderInventory({snap:e,recipes:n,nearTable:t,creative:this.inv.creative,icon:(s,r)=>this.atlas.icon(s,r),names:s=>yt[s]?.name??"—",onSlot:(s,r)=>this.inventorySlotClick(s,r),onPick:s=>this.inventoryPick(s),onCraft:s=>this.doCraft(s),onClose:()=>this.closeInventory(),onCreative:()=>{this.setCreative(!this.inv.creative),this.hud.toast(this.inv.creative?"Творчество: все блоки в палитре, вещи не тратятся":"Творчество выключено: блоки снова расходятся, включить — в Настройках","")}})}inventorySlotClick(t,e){const n=this.inv;if(n.cursor){const s=n.id(t,e);if(s===n.cursor){const r=n.creative?us:us-n.n(t,e),o=Math.min(r,n.cursorN);n.set(t,e,s,n.creative?0:n.n(t,e)+o),n.creative||(n.cursorN-=o),(n.cursorN<=0||n.creative)&&(n.cursor=0,n.cursorN=0)}else{const r=s,o=n.n(t,e);n.set(t,e,n.cursor,n.creative?0:n.cursorN),n.cursor=r,n.cursorN=n.creative?1:o,n.creative&&(n.cursor=0,n.cursorN=0)}}else{const s=n.id(t,e);if(!s)return;if(n.creative){this.inventoryPick(s);return}n.cursor=s,n.cursorN=n.n(t,e),n.set(t,e,0,0)}this.syncHotbar(),this.audio.ui("click")}inventoryPick(t){const e=this.invTarget??this.inv.sel;this.inv.set("hot",e,t,this.inv.creative?0:us),this.invTarget=e,this.syncHotbar(),this.hud.showBlockName(t),this.audio.ui("click"),this.scheduleSave()}doCraft(t){const e=Kl[t];if(!e)return;const n=this.nearCraftingTable();if(!jl(e,this.inv,n)){this.audio.deny(),this.hud.toast(e.table&&!n?"Нужен верстак рядом (поставь и подойди)":"Не хватает материалов","warn");return}F_(e,this.inv)&&(this.audio.place("wood"),this.hud.toast(`Скрафчено: ${yt[e.outId].name}`,""),this.syncHotbar(),this.scheduleSave())}toggleInventory(){if(this.inventoryOpen){this.closeInventory();return}this.inventoryOpen=!0,this.invTarget=this.inv.sel,this.hud.show("inventory"),this.hud.el.hud.dataset.keep="1",this.hud.el.hud.classList.remove("hidden"),this.keys.clear(),this.input.mine=0,this.input.place=0,document.exitPointerLock?.(),this.audio.openInv(),this.refreshInventoryUI()}closeInventory(){if(!this.inventoryOpen)return;this.inventoryOpen=!1;const t=this.inv;t.cursor&&(t.creative||t.add(t.cursor,t.cursorN),t.cursor=0,t.cursorN=0),this.invTarget=null,this.hud.el.hud.dataset.keep="0",this.hud.show(null),this.syncHotbar(),this.lockPointer(),this.audio.ui("click")}pause(){this.input.mine=0,this.input.place=0,this.keys.clear(),!(!this.state.running||this.state.paused)&&(this.state.paused=!0,document.exitPointerLock?.(),this.hud.el.pauseStats.textContent=this.statsLine(),this.hud.show("pause"),this.save())}resume(){this.state.paused=!1,this.inventoryOpen=!1,this.netPanelOpen=!1,this.hud.show(null),this.lockPointer(),this.audio.resume()}toMenu(){if(this.input.mine=0,this.input.place=0,this.keys.clear(),this.menuMode=this.inv?.creative?"creative":"survival",this.syncModeSeg(),this.netPanelOpen=!1,this.net&&this.netLeave("вы вышли из мира — комната покинута"),this.mobs.clear(),this.state.running=!1,this.state.paused=!1,this.inventoryOpen=!1,document.exitPointerLock?.(),this.chunkView)for(const[t,e]of this.chunkView.objects)this.chunkView.disposeObject(e),this.chunkView.objects.delete(t);if(this.state.world){for(const t of[...this.state.world.chunks.keys()]){const[e,n]=ha.decode(t);this.state.world.removeChunk(e,n)}this.state.world.chunks.clear()}this.refreshWorlds(),this.hud.show("menu")}lockPointer(){if(!this.settings.touch&&!(matchMedia("(hover: none)").matches&&!this.settings.touch)&&document.pointerLockElement!==this.canvas)try{const t=this.canvas.requestPointerLock?.();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}settlePlayer(){const t=this.player;if(!t||!this.state.world||!t.collides(t.x,t.y,t.z))return!1;const e=Math.floor(t.x),n=Math.floor(t.z);for(let r=Math.floor(t.y);r<jt;r++)if(!t.collides(e+.5,r+.02,n+.5))return t.x=e+.5,t.y=r+.02,t.z=n+.5,t.vy=0,this.hud.toast("Подняты над блоками","warn"),!0;const s=this.state.world.findSpawn();return t.spawn(s[0],s[1],s[2]),!0}unstick(){const t=this.state.world,e=Math.floor(this.player.x),n=Math.floor(this.player.z);for(let r=jt-2;r>0;r--)if(t.isOpaque(e,r,n)){this.player.x=e+.5,this.player.z=n+.5,this.player.y=r+1.05,this.player.vy=0,this.hud.toast("Вы вынесены на поверхность");return}const s=t.findSpawn();this.player.spawn(s[0],s[1],s[2]),this.hud.toast("Спавн сброшен")}pickBlock(){const t=this.state.lastHit;if(!t)return;const e=t.id;this.inv.set("hot",this.inv.sel,e,this.inv.creative?0:Math.max(1,this.inv.n("hot",this.inv.sel))),this.hud.buildHotbar(this.state.hotbar,this.state.sel,this.hud.onHotbarChange),this.hud.selectSlot(this.state.sel),this.viewModel.setBlock(e),this.hud.showBlockName(e),this.audio.ui("click")}tryPlace(){const t=this.state.lastHit,e=this.state;if(!t)return;const n=this.inv.hot[this.inv.sel];if(!n){this.audio.deny(),this.hud.toast("Пустой слот — E открывает инвентарь","warn");return}if(fg(n)){this.audio.deny(),this.hud.toast(`${yt[n].name} — предмет, его не поставить`,"warn");return}if(!this.inv.creative&&this.inv.hotN[this.inv.sel]<=0){this.audio.deny(),this.hud.toast("Блоки кончились","warn");return}const s=e.world;let r=t.x+t.nx,o=t.y+t.ny,a=t.z+t.nz;const l=s.getBlock(t.x,t.y,t.z);if((yt[l]?.replaceable||yt[l]?.liquid)&&(r=t.x,o=t.y,a=t.z),o<0||o>=jt)return;const h=s.getBlock(r,o,a);if(h!==0&&!yt[h].replaceable&&!yt[h].liquid)return;if(yt[n].solid&&this.player.intersectsBlock(r,o,a)){this.audio.deny(),this.hud.toast("Здесь стоит игрок","warn");return}if(!s.setBlock(r,o,a,n))return;this.netBroadcast(r,o,a,n),this.inv.creative||(this.inv.consumeSelected(1),this.syncHotbar()),this.audio.place(yt[n].sound),this.viewModel.triggerSwing();const u=this.blockTint.get(n)??[.8,.8,.8];this.particles.burst(r+.5,o+.2,a+.5,4,u,{speed:1.2,life:.35,spread:.5}),this.scheduleSave()}mineTick(t){const e=this.state,n=e.world,s=e.lastHit;if(e.mobTarget){e.breakProgress>0&&(e.breakProgress=0,this.target.setBreakProgress(0));return}if(!this.input.mine||!s){e.breakProgress>0&&(e.breakProgress=0,this.target.setBreakProgress(0)),this.hud.setMining(!1);return}const r=Aa(s.x,s.y,s.z);e.breakTarget!==r&&(e.breakTarget=r,e.breakProgress=0);const o=yt[s.id];if(!o.breakable){e.breakTarget!==r&&(e.breakTarget=r,this.audio.deny(),this.hud.toast(`${o.name}: можно только обставить со всех сторон`,"warn")),e.breakProgress=0,this.target.setBreakProgress(0);return}const a=this.inv.hot[this.inv.sel],l=Math.max(.08,o.hardness/Math.max(.34,mg(o,a))),c=this.player.flying?2.6:1;if(e.breakProgress+=t/l*c,this.hud.setMining(!0),performance.now()-(this.lastHitSound??0)>210){this.lastHitSound=performance.now(),this.audio.hit(o.sound,.8);const h=this.blockTint.get(s.id)??[.7,.7,.7];this.particles.burst(s.x+.5+s.nx*.5,s.y+.5+s.ny*.5,s.z+.5+s.nz*.5,3,h,{speed:1.6,life:.3,spread:.35,gravity:16})}if(this.target.setBreakProgress(Math.min(.999,e.breakProgress)),e.breakProgress>=1){e.breakProgress=0,e.breakTarget=null,this.target.setBreakProgress(0),this.hud.setMining(!1),n.setBlock(s.x,s.y,s.z,zi),this.netBroadcast(s.x,s.y,s.z,zi),this.inv.creative||this.pickup(pg(s.id),1),this.audio.breakBlock(o.sound);const h=this.blockTint.get(s.id)??[.7,.7,.7];this.particles.burst(s.x+.5,s.y+.5,s.z+.5,14,h,{speed:3.4,life:.8,spread:.8}),this.viewModel.triggerSwing(),this.scheduleSave()}}scheduleSave(){this.state.saveT=2.5}save(t=!1){if(!this.state.world)return;const e=this.state.world,n={seed:this.state.seed,saved:Date.now(),spawn:[this.player.x,this.player.y,this.player.z],yaw:this.player.yaw,pitch:this.player.pitch,time:this.state.time,hotbar:this.inv.hot.slice(),inv:this.inv.serialize(),creative:this.inv.creative,hp:this.state.hp,edits:e.serializeEdits()};x_(this.state.seed,n)&&this.hud.toast(`Сохранено · правок: ${e.editedCount}`,"")}statsLine(){const t=this.state.world;return t?`чанков в памяти: ${t.chunkCount} · правок: ${t.editedCount} · меши: ${this.chunkView?.chunkMeshCount??0}`:""}applyPixelRatio(){const t=Math.max(.5,Math.min(1,this.settings?.renderScale??1));this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,2)*t)}resize(){const t=innerWidth,e=innerHeight;this.renderer.setSize(t,e,!1),this.applyPixelRatio(),this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix()}frame(t){requestAnimationFrame(o=>this.frame(o));const e=(t-(this.lastFrame??t))/1e3,n=Number.isFinite(e)?Math.max(0,Math.min(.1,e)):1/60;this.lastFrame=t,this.state.fps=this.state.fps*.9+1/Math.max(5e-4,n)*.1;const s=performance.now(),r=this.inventoryOpen||this.netPanelOpen;this.state.running&&!this.state.paused&&!r&&!this.state.loading?this.step(n):this.state.world&&this.sky.update(this.state.time,this.settings.clouds,this.camera.position,this.materials.uniforms),this.net&&this.netFrame(n),this.renderer.render(this.scene,this.camera),this.state.ms=this.state.ms*.9+(performance.now()-s)*.1}step(t){const e=this.state,n=e.world,s=this.input;this.readKeys(),this.player.yaw-=s.lookX,this.player.pitch=Math.max(-1.5533,Math.min(1.5533,this.player.pitch+s.lookY)),s.lookX=0,s.lookY=0,e.acc=Math.min(e.acc+t,.2);let r=0,o={stepped:!1,splash:!1};for(;e.acc>=fa&&r<5;){e.acc-=fa,r++;const v=this.player.update(fa,s);o.stepped=o.stepped||v.stepped,o.splash=o.splash||v.splash}if(o.stepped&&!this.player.flying){const v=n.getBlock(Math.floor(this.player.x),Math.floor(this.player.y-.2),Math.floor(this.player.z));this.audio.step(yt[v]?.sound??"dirt")}if(o.splash&&this.audio.splash(),this.player.fallDamage>.05){const v=Math.floor(this.player.fallDamage);this.player.fallDamage=0,v>0&&!this.player.flying&&(e.hp=Math.max(0,e.hp-v),this.hud.setHealth(e.hp),this.hud.hurt(),this.audio.land(1.6),e.hp<=0&&this.respawn())}this.player.justLanded&&(this.audio.land(this.player.justLanded),this.player.justLanded=0),e.regenT+=t,e.regenT>6&&e.hp<20&&(e.regenT=0,e.hp=Math.min(20,e.hp+1),this.hud.setHealth(e.hp));const a=this.camera,l=this.settings.viewBob?1:0,c=Math.sin(this.player.bob)*.045*l*Math.min(1,Math.hypot(this.player.vx,this.player.vz)/4);a.position.set(this.player.x,this.player.eyeY+c,this.player.z),a.rotation.set(this.player.pitch,this.player.yaw,Math.sin(this.player.bob*.5)*.006*l);const h=this.settings.fov+(this.player.sprinting?5:0)+(this.player.inWater?-6:0)+(this.player.flying?3:0);a.fov+=(h-a.fov)*Math.min(1,t*8),a.updateProjectionMatrix();const u=this.player.forward({}),d={x:a.position.x,y:a.position.y,z:a.position.z};e.lastHit=g_(n,d.x,d.y,d.z,u.x,u.y,u.z,6.2),this.target.show(e.lastHit),e.lastHit||this.target.setBreakProgress(0),this.attackTick(t),this.mineTick(t),e.placeCd-=t,s.place&&e.placeCd<=0&&(this.tryPlace(),e.placeCd=.2),this.chunkView.update(this.player),this.particles.update(t),this.viewModel.update(t,{moving:Math.min(1,Math.hypot(this.player.vx,this.player.vz)/5),breaking:this.input.mine&&e.lastHit?1:0,breakProgress:e.breakProgress}),this.settings.freeTime||(e.time=(e.time+t/(this.settings.dayLength*60))%1);const p=this.sky.update(e.time,this.settings.clouds,a.position,this.materials.uniforms);this.viewModel.dayLight=p.day,this.target.setDayLight(p.day);const g=this.mobs;g.day=p.day,g.cap=this.settings.mobs|0,g.enabled=g.cap>0&&!e.paused,g.enabled?g.update(t,this.player):g.count&&g.clear();const _=this.materials.uniforms;_.uTime.value+=t;const m=this.settings.renderDistance*st,f=this.player.headInWater;if(f?(_.uFogDensity.value=.16,_.uFogStart.value=.5,_.uFogEnd.value=15):(_.uFogDensity.value=7e-4,_.uFogStart.value=m*.55,_.uFogEnd.value=m*1.02),f&&_.uFogColor.value.setRGB(.09*(.35+p.day),.26*(.35+p.day),.42*(.35+p.day)),this.renderer.setClearColor(p.fogColor,1),this.hud.setWater(f),this.camera.near=f?.05:.08,this.camera.updateProjectionMatrix(),this.villageT=(this.villageT??1)-t,this.villageT<=0){this.villageT=1.2;const v=this.player,S=!!v&&ih(this.state.world,v.x,v.z);S!==this.inVillage&&(this.inVillage=S,S&&this.hud.toast("Деревня: здесь светло, враги не спавнятся. Жители носят изумруды",""))}const x=this.chunkView?.streamDebug?.();x&&(x.genErr||x.meshErr)&&this._streamWarned!==x.msg&&(this._streamWarned=x.msg||"сбой",console.error("стриминг мира:",x),this.hud.toast(`Мир не достраивается: ген ${x.genErr}, меш ${x.meshErr}${x.msg?` · ${x.msg}`:""} — попробуй перезагрузку (Ctrl+Shift+R)`,"warn")),e.saveT>0&&(e.saveT-=t,e.saveT<=0&&this.debouncedSave()),this.dbgT=(this.dbgT??0)-t,this.dbgT<=0&&(this.dbgT=.25,this.updateDebug(p)),e.hp<=0&&this.respawn()}attackTick(t){this.attackCd-=t;const e=this.state,n=this.camera,s=this.player.forward({}),r=this.mobs.pick(n.position.x,n.position.y,n.position.z,s.x,s.y,s.z,4.4);if(e.mobTarget=r,r&&this.target.show(null),!r||!this.input.mine||this.attackCd>0||e.paused||this.inventoryOpen)return;this.attackCd=.42;const o=gg(this.inv.hot[this.inv.sel]);this.mobs.hurt(r,o,this.player.x,this.player.z,r.def.hostile?4.2:6.4),this.viewModel.triggerSwing()}hitByMob(t,e){const n=this.state;if(this.inv.creative||n.hp<=0||!n.running||n.paused)return;n.hp=Math.max(0,n.hp-t),this.hud.setHealth(n.hp),this.hud.hurt(),this.audio.land(1.3);const s=this.player.x-e.x,r=this.player.z-e.z,o=Math.hypot(s,r)||1;this.player.vx+=s/o*4.4,this.player.vz+=r/o*4.4,this.player.vy=Math.max(this.player.vy,4.6),n.hp<=0&&this.respawn()}respawn(){const t=this.state.world.findSpawn();this.player.spawn(t[0],t[1]+.2,t[2]),this.state.hp=20,this.hud.setHealth(20),this.hud.toast("Вы разбились. Воскрешение на спавне…","err")}updateDebug(t){if(!this.settings.showDebug)return;const e=this.player,n=this.state.world,s=Math.floor(e.x/st),r=Math.floor(e.z/st),o=Fg[n.terrain.biomeAt(Math.floor(e.x),Math.floor(e.z))];`${String(Math.floor((e.yaw*180/Math.PI%360+360)%360/360*24)).padStart(2,"0")}`;const a=Math.floor((this.state.time*24+6)%24),l=Math.floor((this.state.time*24+6)%24%1*60),c=this.chunkView;this.hud.setDebug([`LiteCraft · ${this.state.fps.toFixed(0)} FPS · ${this.state.ms.toFixed(1)} мс`,`XYZ ${e.x.toFixed(2)} / ${e.y.toFixed(2)} / ${e.z.toFixed(2)}  чанк ${s},${r}  блок ${Math.floor(e.x)},${Math.floor(e.y)},${Math.floor(e.z)}`,`биом: ${o}  ·  время ${String(a).padStart(2,"0")}:${String(l).padStart(2,"0")}  ·  свет ${t.day*15|0}/15`,`чанков: ${n.chunkCount} (мешей ${c?.chunkMeshCount??0}, в очереди ${c?.stats.pending??0}) · правок: ${n.editedCount} · стриминг ${c?.stats.ms?.toFixed(1)??0} мс/кадр (${c?.stats.frameMs?.toFixed(1)??"—"} мс кадр)${(()=>{const h=c?.streamDebug?.();return h&&(h.genErr||h.meshErr||h.light>64)?` · сбой: ген ${h.genErr}, меш ${h.meshErr}, свет ${h.light}`:""})()}${this.inVillage?" · деревня":""}`,`сеть: ${this.net?`${this.netKind==="p2p"?"напрямую":"через реле"}, игроков ${this.net.peers.size+1}/${Oa}, правок ${this.net.edits}`:"одиночная игра"} · режим: ${e.flying?"полёт":e.sprinting?"бег":"ходок"} · HP ${this.state.hp/2} · ${this.inv.creative?"творчество":"выживание"} · сид ${this.state.seed}`,`мобов вокруг: ${this.mobs.count} (видно ${this.mobs.nearCount(e,48)}) · убито: ${this.mobs.kills} · в руке: ${yt[this.inv.hot[this.inv.sel]]?.name??"—"} ×${this.inv.creative?"∞":this.inv.hotN[this.inv.sel]}`,`${e.headInWater?"под водой":e.inWater?"в воде":"на суше"}${e.onGround?" · на земле":""} · E — инвентарь, F3 — вкл/выкл панели`].join(`
`))}}function nv(i={}){const t=new ev(i);return window.game=t,window.addEventListener("beforeunload",()=>{t.state?.world&&t.state.running&&t.save()}),t}if(typeof window<"u"&&!window.__LITECRAFT_TEST__&&document.getElementById("gl"))try{nv()}catch(i){throw iv(i),i}function iv(i){const t=document.createElement("pre");t.style.cssText="position:fixed;inset:auto 12px 12px 12px;max-height:45vh;overflow:auto;background:#2b0e0e;color:#ffd9d3;padding:14px;font:12px/1.5 ui-monospace,monospace;border:1px solid #612;border-radius:4px;z-index:9999;white-space:pre-wrap",t.textContent=`Ошибка запуска LiteCraft:

`+(i?.stack??String(i)),document.body.appendChild(t)}
