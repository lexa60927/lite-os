var So=i=>{throw TypeError(i)};var ru=(i,t,e)=>t.has(i)||So("Cannot "+e);var Vr=(i,t,e)=>t.has(i)?So("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e);var Ke=(i,t,e)=>(ru(i,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const io="160",au=0,Eo=1,ou=2,kc=1,Fc=2,Cn=3,Un=0,We=1,Pe=2,Pn=0,Yi=1,wo=2,To=3,Ao=4,lu=5,ri=100,cu=101,hu=102,Ro=103,Co=104,uu=200,du=201,fu=202,pu=203,La=204,Pa=205,mu=206,gu=207,_u=208,vu=209,xu=210,yu=211,Mu=212,bu=213,Su=214,Eu=0,wu=1,Tu=2,vr=3,Au=4,Ru=5,Cu=6,Lu=7,Oc=0,Pu=1,Du=2,$n=0,Iu=1,Uu=2,Nu=3,ku=4,Fu=5,Ou=6,Bc=300,Ji=301,Qi=302,Da=303,Ia=304,Dr=306,xr=1e3,sn=1001,Ua=1002,pe=1003,Lo=1004,Wr=1005,He=1006,Bu=1007,ui=1008,Mn=1009,zu=1010,Hu=1011,so=1012,zc=1013,Xn=1014,qn=1015,ts=1016,Hc=1017,Gc=1018,li=1020,Gu=1021,Ve=1023,Vu=1024,Wu=1025,ci=1026,es=1027,Xu=1028,Vc=1029,qu=1030,Wc=1031,Xc=1033,Xr=33776,qr=33777,$r=33778,Yr=33779,Po=35840,Do=35841,Io=35842,Uo=35843,qc=36196,No=37492,ko=37496,Fo=37808,Oo=37809,Bo=37810,zo=37811,Ho=37812,Go=37813,Vo=37814,Wo=37815,Xo=37816,qo=37817,$o=37818,Yo=37819,jo=37820,Ko=37821,jr=36492,Zo=36494,Jo=36495,$u=36283,Qo=36284,tl=36285,el=36286,$c=3e3,hi=3001,Yu=3200,Yc=3201,ju=0,Ku=1,Ne="",Te="srgb",bn="srgb-linear",ro="display-p3",Ir="display-p3-linear",yr="linear",he="srgb",Mr="rec709",br="p3",pi=7680,nl=519,Zu=512,Ju=513,Qu=514,jc=515,td=516,ed=517,nd=518,id=519,Na=35044,il=35048,sl="300 es",ka=1035,Ln=2e3,Sr=2001;class is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rl=1234567;const ji=Math.PI/180,Es=180/Math.PI;function Dn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Ge(i,t,e){return Math.max(t,Math.min(e,i))}function ao(i,t){return(i%t+t)%t}function sd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function rd(i,t,e){return i!==t?(e-i)/(t-i):0}function Ms(i,t,e){return(1-e)*i+e*t}function ad(i,t,e,n){return Ms(i,t,1-Math.exp(-e*n))}function od(i,t=1){return t-Math.abs(ao(i,t*2)-t)}function ld(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function cd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ud(i,t){return i+Math.random()*(t-i)}function dd(i){return i*(.5-Math.random())}function fd(i){i!==void 0&&(rl=i);let t=rl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pd(i){return i*ji}function md(i){return i*Es}function Fa(i){return(i&i-1)===0&&i!==0}function gd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Er(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _d(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Cs={DEG2RAD:ji,RAD2DEG:Es,generateUUID:Dn,clamp:Ge,euclideanModulo:ao,mapLinear:sd,inverseLerp:rd,lerp:Ms,damp:ad,pingpong:od,smoothstep:ld,smootherstep:cd,randInt:hd,randFloat:ud,randFloatSpread:dd,seededRandom:fd,degToRad:pd,radToDeg:md,isPowerOfTwo:Fa,ceilPowerOfTwo:gd,floorPowerOfTwo:Er,setQuaternionFromProperEuler:_d,normalize:ae,denormalize:vn};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,s,r,o,a,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],x=s[1],v=s[4],b=s[7],R=s[2],w=s[5],S=s[8];return r[0]=o*_+a*x+l*R,r[3]=o*m+a*v+l*w,r[6]=o*p+a*b+l*S,r[1]=c*_+h*x+u*R,r[4]=c*m+h*v+u*w,r[7]=c*p+h*b+u*S,r[2]=d*_+f*x+g*R,r[5]=d*m+f*v+g*w,r[8]=d*p+f*b+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Kr.makeScale(t,e)),this}rotate(t){return this.premultiply(Kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kr=new Zt;function Kc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vd(){const i=wr("canvas");return i.style.display="block",i}const al={};function bs(i){i in al||(al[i]=!0,console.warn(i))}const ol=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ll=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ls={[bn]:{transfer:yr,primaries:Mr,toReference:i=>i,fromReference:i=>i},[Te]:{transfer:he,primaries:Mr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ir]:{transfer:yr,primaries:br,toReference:i=>i.applyMatrix3(ll),fromReference:i=>i.applyMatrix3(ol)},[ro]:{transfer:he,primaries:br,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ll),fromReference:i=>i.applyMatrix3(ol).convertLinearToSRGB()}},xd=new Set([bn,Ir]),oe={enabled:!0,_workingColorSpace:bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!xd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ls[t].toReference,s=Ls[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ls[i].primaries},getTransfer:function(i){return i===Ne?yr:Ls[i].transfer}};function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let mi;class Zc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{mi===void 0&&(mi=wr("canvas")),mi.width=t.width,mi.height=t.height;const n=mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ki(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ki(e[n]/255)*255):e[n]=Ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yd=0;class Jc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Dn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jr(s[o].image)):r.push(Jr(s[o]))}else r=Jr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Md=0;class Xe extends is{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=sn,s=sn,r=He,o=ui,a=Ve,l=Mn,c=Xe.DEFAULT_ANISOTROPY,h=Ne){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Dn(),this.name="",this.source=new Jc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===hi?Te:Ne),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xr:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case Ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xr:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case Ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?hi:$c}set encoding(t){bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===hi?Te:Ne}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Bc;Xe.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,n=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,b=(f+1)/2,R=(p+1)/2,w=(h+d)/4,S=(u+_)/4,I=(g+m)/4;return v>b&&v>R?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=S/n):b>R?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=S/r,s=I/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bd extends is{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(bs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===hi?Te:Ne),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Xe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends bd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qc extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pe,this.minFilter=pe,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sd extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pe,this.minFilter=pe,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ts{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const R=Math.sqrt(v),w=Math.atan2(R,p*x);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}const b=a*x;if(l=l*m+d*b,c=c*m+f*b,h=h*m+g*b,u=u*m+_*b,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qr.copy(this).projectOnVector(t),this.sub(Qr)}reflect(t){return this.sub(Qr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qr=new U,cl=new Ts;class ss{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ps.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox)),Ps.applyMatrix4(t.matrixWorld),this.union(Ps)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),Ds.subVectors(this.max,ls),gi.subVectors(t.a,ls),_i.subVectors(t.b,ls),vi.subVectors(t.c,ls),Fn.subVectors(_i,gi),On.subVectors(vi,_i),Zn.subVectors(gi,vi);let e=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-Zn.z,Zn.y,Fn.z,0,-Fn.x,On.z,0,-On.x,Zn.z,0,-Zn.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-Zn.y,Zn.x,0];return!ta(e,gi,_i,vi,Ds)||(e=[1,0,0,0,1,0,0,0,1],!ta(e,gi,_i,vi,Ds))?!1:(Is.crossVectors(Fn,On),e=[Is.x,Is.y,Is.z],ta(e,gi,_i,vi,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const En=[new U,new U,new U,new U,new U,new U,new U,new U],on=new U,Ps=new ss,gi=new U,_i=new U,vi=new U,Fn=new U,On=new U,Zn=new U,ls=new U,Ds=new U,Is=new U,Jn=new U;function ta(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Jn.fromArray(i,r);const a=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=t.dot(Jn),c=e.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ed=new ss,cs=new U,ea=new U;class rs{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ed.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);const e=cs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(ea)),this.expandByPoint(cs.copy(t.center).sub(ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new U,na=new U,Us=new U,Bn=new U,ia=new U,Ns=new U,sa=new U;class oo{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){na.copy(t).add(e).multiplyScalar(.5),Us.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(na);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Us),a=Bn.dot(this.direction),l=-Bn.dot(Us),c=Bn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(na).addScaledVector(Us,d),f}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,s,r){ia.subVectors(e,t),Ns.subVectors(n,t),sa.crossVectors(ia,Ns);let o=this.direction.dot(sa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,t);const l=a*this.direction.dot(Ns.crossVectors(Bn,Ns));if(l<0)return null;const c=a*this.direction.dot(ia.cross(Bn));if(c<0||l+c>o)return null;const h=-a*Bn.dot(sa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/xi.setFromMatrixColumn(t,0).length(),r=1/xi.setFromMatrixColumn(t,1).length(),o=1/xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wd,t,Td)}lookAt(t,e,n){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),zn.crossVectors(n,Ze),zn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),zn.crossVectors(n,Ze)),zn.normalize(),ks.crossVectors(Ze,zn),s[0]=zn.x,s[4]=ks.x,s[8]=Ze.x,s[1]=zn.y,s[5]=ks.y,s[9]=Ze.y,s[2]=zn.z,s[6]=ks.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],v=n[7],b=n[11],R=n[15],w=s[0],S=s[4],I=s[8],y=s[12],A=s[1],G=s[5],q=s[9],j=s[13],D=s[2],C=s[6],P=s[10],X=s[14],N=s[3],H=s[7],$=s[11],tt=s[15];return r[0]=o*w+a*A+l*D+c*N,r[4]=o*S+a*G+l*C+c*H,r[8]=o*I+a*q+l*P+c*$,r[12]=o*y+a*j+l*X+c*tt,r[1]=h*w+u*A+d*D+f*N,r[5]=h*S+u*G+d*C+f*H,r[9]=h*I+u*q+d*P+f*$,r[13]=h*y+u*j+d*X+f*tt,r[2]=g*w+_*A+m*D+p*N,r[6]=g*S+_*G+m*C+p*H,r[10]=g*I+_*q+m*P+p*$,r[14]=g*y+_*j+m*X+p*tt,r[3]=x*w+v*A+b*D+R*N,r[7]=x*S+v*G+b*C+R*H,r[11]=x*I+v*q+b*P+R*$,r[15]=x*y+v*j+b*X+R*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,v=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,b=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,R=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,w=e*x+n*v+s*b+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return t[0]=x*S,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*S,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*S,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*S,t[4]=v*S,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*S,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*S,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*S,t[8]=b*S,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*S,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*S,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*S,t[12]=R*S,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*S,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*S,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*S,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,x=l*c,v=l*h,b=l*u,R=n.x,w=n.y,S=n.z;return s[0]=(1-(_+p))*R,s[1]=(f+b)*R,s[2]=(g-v)*R,s[3]=0,s[4]=(f-b)*w,s[5]=(1-(d+p))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(g+v)*S,s[9]=(m-x)*S,s[10]=(1-(d+_))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=xi.set(s[0],s[1],s[2]).length();const o=xi.set(s[4],s[5],s[6]).length(),a=xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);const c=1/r,h=1/o,u=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,e.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Ln){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Ln)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Sr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ln){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h;let g,_;if(a===Ln)g=(o+r)*u,_=-2*u;else if(a===Sr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const xi=new U,ln=new ge,wd=new U(0,0,0),Td=new U(1,1,1),zn=new U,ks=new U,Ze=new U,hl=new ge,ul=new Ts;class Ur{constructor(t=0,e=0,n=0,s=Ur.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ul.setFromEuler(this),this.setFromQuaternion(ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ur.DEFAULT_ORDER="XYZ";class th{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ad=0;const dl=new U,yi=new Ts,Tn=new ge,Fs=new U,hs=new U,Rd=new U,Cd=new Ts,fl=new U(1,0,0),pl=new U(0,1,0),ml=new U(0,0,1),Ld={type:"added"},Pd={type:"removed"};class ye extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new U,e=new Ur,n=new Ts,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Zt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(fl,t)}rotateY(t){return this.rotateOnAxis(pl,t)}rotateZ(t){return this.rotateOnAxis(ml,t)}translateOnAxis(t,e){return dl.copy(t).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fl,t)}translateY(t){return this.translateOnAxis(pl,t)}translateZ(t){return this.translateOnAxis(ml,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fs.copy(t):Fs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(hs,Fs,this.up):Tn.lookAt(Fs,hs,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(Tn),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ld)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pd)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,Rd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Cd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ye.DEFAULT_UP=new U(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new U,An=new U,ra=new U,Rn=new U,Mi=new U,bi=new U,gl=new U,aa=new U,oa=new U,la=new U;let Os=!1;class Qe{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),An.subVectors(n,e),ra.subVectors(t,e);const o=cn.dot(cn),a=cn.dot(An),l=cn.dot(ra),c=An.dot(An),h=An.dot(ra),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(t,e,n,s,r,o,a,l){return Os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Os=!0),this.getInterpolation(t,e,n,s,r,o,a,l)}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l)}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),An.subVectors(t,e),cn.cross(An).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),cn.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Os=!0),Qe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Mi.subVectors(s,n),bi.subVectors(r,n),aa.subVectors(t,n);const l=Mi.dot(aa),c=bi.dot(aa);if(l<=0&&c<=0)return e.copy(n);oa.subVectors(t,s);const h=Mi.dot(oa),u=bi.dot(oa);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Mi,o);la.subVectors(t,r);const f=Mi.dot(la),g=bi.dot(la);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(bi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return gl.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(gl,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Mi,o).addScaledVector(bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function ca(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=ao(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ca(o,r,t+1/3),this.g=ca(o,r,t),this.b=ca(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const n=eh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=Zr(t.r),this.g=Zr(t.g),this.b=Zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return oe.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Ge(Ue.r*255,0,255))*65536+Math.round(Ge(Ue.g*255,0,255))*256+Math.round(Ge(Ue.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,s=Ue.g,r=Ue.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Te){oe.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,s=Ue.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Bs);const n=Ms(Hn.h,Bs.h,e),s=Ms(Hn.s,Bs.s,e),r=Ms(Hn.l,Bs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Ct;Ct.NAMES=eh;let Dd=0;class di extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=Yi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Pa,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Pa&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class rn extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new U,zs=new Xt;class me{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Na,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zs.fromBufferAttribute(this,e),zs.applyMatrix3(t),this.setXY(e,zs.x,zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Na&&(t.usage=this.usage),t}}class nh extends me{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ih extends me{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends me{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Id=0;const en=new ge,ha=new ye,Si=new U,Je=new ss,us=new ss,we=new U;class Le extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kc(t)?ih:nh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return ha.lookAt(t),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];us.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Je.min,us.min),Je.expandByPoint(we),we.addVectors(Je.max,us.max),Je.expandByPoint(we)):(Je.expandByPoint(us.min),Je.expandByPoint(us.max))}Je.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)we.fromBufferAttribute(a,c),l&&(Si.fromBufferAttribute(t,c),we.add(Si)),s=Math.max(s,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<a;A++)c[A]=new U,h[A]=new U;const u=new U,d=new U,f=new U,g=new Xt,_=new Xt,m=new Xt,p=new U,x=new U;function v(A,G,q){u.fromArray(s,A*3),d.fromArray(s,G*3),f.fromArray(s,q*3),g.fromArray(o,A*2),_.fromArray(o,G*2),m.fromArray(o,q*2),d.sub(u),f.sub(u),_.sub(g),m.sub(g);const j=1/(_.x*m.y-m.x*_.y);isFinite(j)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(j),x.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(j),c[A].add(p),c[G].add(p),c[q].add(p),h[A].add(x),h[G].add(x),h[q].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let A=0,G=b.length;A<G;++A){const q=b[A],j=q.start,D=q.count;for(let C=j,P=j+D;C<P;C+=3)v(n[C+0],n[C+1],n[C+2])}const R=new U,w=new U,S=new U,I=new U;function y(A){S.fromArray(r,A*3),I.copy(S);const G=c[A];R.copy(G),R.sub(S.multiplyScalar(S.dot(G))).normalize(),w.crossVectors(I,G);const j=w.dot(h[A])<0?-1:1;l[A*4]=R.x,l[A*4+1]=R.y,l[A*4+2]=R.z,l[A*4+3]=j}for(let A=0,G=b.length;A<G;++A){const q=b[A],j=q.start,D=q.count;for(let C=j,P=j+D;C<P;C+=3)y(n[C+0]),y(n[C+1]),y(n[C+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new me(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _l=new ge,Qn=new oo,Hs=new rs,vl=new U,Ei=new U,wi=new U,Ti=new U,ua=new U,Gs=new U,Vs=new Xt,Ws=new Xt,Xs=new Xt,xl=new U,yl=new U,Ml=new U,qs=new U,$s=new U;class xe extends ye{constructor(t=new Le,e=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Gs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(ua.fromBufferAttribute(u,t),o?Gs.addScaledVector(ua,h):Gs.addScaledVector(ua.sub(e),h))}e.add(Gs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(Hs.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Hs,vl)===null||Qn.origin.distanceToSquared(vl)>(t.far-t.near)**2))&&(_l.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(_l),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,R=v;b<R;b+=3){const w=a.getX(b),S=a.getX(b+1),I=a.getX(b+2);s=Ys(this,p,t,n,c,h,u,w,S,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),v=a.getX(m+1),b=a.getX(m+2);s=Ys(this,o,t,n,c,h,u,x,v,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,R=v;b<R;b+=3){const w=b,S=b+1,I=b+2;s=Ys(this,p,t,n,c,h,u,w,S,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,v=m+1,b=m+2;s=Ys(this,o,t,n,c,h,u,x,v,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ud(i,t,e,n,s,r,o,a){let l;if(t.side===We?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Un,a),l===null)return null;$s.copy(a),$s.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo($s);return c<e.near||c>e.far?null:{distance:c,point:$s.clone(),object:i}}function Ys(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ei),i.getVertexPosition(l,wi),i.getVertexPosition(c,Ti);const h=Ud(i,t,e,n,Ei,wi,Ti,qs);if(h){s&&(Vs.fromBufferAttribute(s,a),Ws.fromBufferAttribute(s,l),Xs.fromBufferAttribute(s,c),h.uv=Qe.getInterpolation(qs,Ei,wi,Ti,Vs,Ws,Xs,new Xt)),r&&(Vs.fromBufferAttribute(r,a),Ws.fromBufferAttribute(r,l),Xs.fromBufferAttribute(r,c),h.uv1=Qe.getInterpolation(qs,Ei,wi,Ti,Vs,Ws,Xs,new Xt),h.uv2=h.uv1),o&&(xl.fromBufferAttribute(o,a),yl.fromBufferAttribute(o,l),Ml.fromBufferAttribute(o,c),h.normal=Qe.getInterpolation(qs,Ei,wi,Ti,xl,yl,Ml,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new U,materialIndex:0};Qe.getNormal(Ei,wi,Ti,u.normal),h.face=u}return h}class kn extends Le{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2));function g(_,m,p,x,v,b,R,w,S,I,y){const A=b/S,G=R/I,q=b/2,j=R/2,D=w/2,C=S+1,P=I+1;let X=0,N=0;const H=new U;for(let $=0;$<P;$++){const tt=$*G-j;for(let et=0;et<C;et++){const V=et*A-q;H[_]=V*x,H[m]=tt*v,H[p]=D,c.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[p]=w>0?1:-1,h.push(H.x,H.y,H.z),u.push(et/S),u.push(1-$/I),X+=1}}for(let $=0;$<I;$++)for(let tt=0;tt<S;tt++){const et=d+tt+C*$,V=d+tt+C*($+1),K=d+(tt+1)+C*($+1),ht=d+(tt+1)+C*$;l.push(et,V,ht),l.push(V,K,ht),N+=6}a.addGroup(f,N,y),f+=N,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ns(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Be(i){const t={};for(let e=0;e<i.length;e++){const n=ns(i[e]);for(const s in n)t[s]=n[s]}return t}function Nd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sh(i){return i.getRenderTarget()===null?i.outputColorSpace:oe.workingColorSpace}const lo={clone:ns,merge:Be};var kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kd,this.fragmentShader=Fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=Nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rh extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nn extends rh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ji*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ji*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ai=-90,Ri=1;class ah extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Ai,Ri,t,e);s.layers=this.layers,this.add(s);const r=new nn(Ai,Ri,t,e);r.layers=this.layers,this.add(r);const o=new nn(Ai,Ri,t,e);o.layers=this.layers,this.add(o);const a=new nn(Ai,Ri,t,e);a.layers=this.layers,this.add(a);const l=new nn(Ai,Ri,t,e);l.layers=this.layers,this.add(l);const c=new nn(Ai,Ri,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class oh extends Xe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ji,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lh extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(bs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===hi?Te:Ne),this.texture=new oh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:He}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kn(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Pn});r.uniforms.tEquirect.value=e;const o=new xe(s,r),a=e.minFilter;return e.minFilter===ui&&(e.minFilter=He),new ah(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const da=new U,Od=new U,Bd=new Zt;class ni{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=da.subVectors(n,e).cross(Od.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(da),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Bd.getNormalMatrix(t),s=this.coplanarPoint(da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new rs,js=new U;class co{constructor(t=new ni,e=new ni,n=new ni,s=new ni,r=new ni,o=new ni){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],x=s[13],v=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,m-f,b-p).normalize(),n[1].setComponents(l+r,d+c,m+f,b+p).normalize(),n[2].setComponents(l+o,d+h,m+g,b+x).normalize(),n[3].setComponents(l-o,d-h,m-g,b-x).normalize(),n[4].setComponents(l-a,d-u,m-_,b-v).normalize(),e===Ln)n[5].setComponents(l+a,d+u,m+_,b+v).normalize();else if(e===Sr)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(js.x=s.normal.x>0?t.max.x:t.min.x,js.y=s.normal.y>0?t.max.y:t.min.y,js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ch(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zd(i,t){const e=t.isWebGL2,n=new WeakMap;function s(c,h){const u=c.array,d=c.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){const d=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),f.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];e?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class oi extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*d-o;for(let v=0;v<c;v++){const b=v*u-r;g.push(b,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const v=x+c*p,b=x+c*(p+1),R=x+1+c*(p+1),w=x+1+c*p;f.push(v,b,w),f.push(b,R,w)}this.setIndex(f),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gd=`#ifdef USE_ALPHAHASH
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
#endif`,Vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$d=`#ifdef USE_AOMAP
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
#endif`,Yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jd=`#ifdef USE_BATCHING
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
#endif`,Kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tf=`#ifdef USE_IRIDESCENCE
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
#endif`,ef=`#ifdef USE_BUMPMAP
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
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uf=`#define PI 3.141592653589793
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
} // validated`,df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ff=`vec3 transformedNormal = objectNormal;
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
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",xf=`
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
}`,yf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cf=`#ifdef USE_GRADIENTMAP
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
}`,Lf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uf=`uniform bool receiveShadow;
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
#endif`,Nf=`#ifdef USE_ENVMAP
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
#endif`,kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zf=`PhysicalMaterial material;
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
#endif`,Hf=`struct PhysicalMaterial {
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
}`,Gf=`
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
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$f=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jf=`#if defined( USE_POINTS_UV )
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
#endif`,Qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ep=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,np=`#ifdef USE_MORPHNORMALS
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
#endif`,ip=`#ifdef USE_MORPHTARGETS
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
#endif`,sp=`#ifdef USE_MORPHTARGETS
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
#endif`,rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hp=`#ifdef USE_NORMALMAP
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
#endif`,up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tp=`float getShadowMask() {
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
}`,Ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rp=`#ifdef USE_SKINNING
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
#endif`,Cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Up=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Np=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#ifdef USE_TRANSMISSION
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
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gp=`uniform sampler2D t2D;
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`#include <common>
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
}`,Yp=`#if DEPTH_PACKING == 3200
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
}`,jp=`#define DISTANCE
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
}`,Kp=`#define DISTANCE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`uniform float scale;
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
}`,tm=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#define LAMBERT
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
}`,sm=`#define LAMBERT
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
}`,rm=`#define MATCAP
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
}`,am=`#define MATCAP
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
}`,om=`#define NORMAL
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
}`,lm=`#define NORMAL
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
}`,cm=`#define PHONG
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
}`,hm=`#define PHONG
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
}`,um=`#define STANDARD
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
}`,dm=`#define STANDARD
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
}`,fm=`#define TOON
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
}`,pm=`#define TOON
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
}`,mm=`uniform float size;
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
}`,gm=`uniform vec3 diffuse;
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
}`,_m=`#include <common>
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
}`,vm=`uniform vec3 color;
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
}`,xm=`uniform float rotation;
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
}`,ym=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Hd,alphahash_pars_fragment:Gd,alphamap_fragment:Vd,alphamap_pars_fragment:Wd,alphatest_fragment:Xd,alphatest_pars_fragment:qd,aomap_fragment:$d,aomap_pars_fragment:Yd,batching_pars_vertex:jd,batching_vertex:Kd,begin_vertex:Zd,beginnormal_vertex:Jd,bsdfs:Qd,iridescence_fragment:tf,bumpmap_pars_fragment:ef,clipping_planes_fragment:nf,clipping_planes_pars_fragment:sf,clipping_planes_pars_vertex:rf,clipping_planes_vertex:af,color_fragment:of,color_pars_fragment:lf,color_pars_vertex:cf,color_vertex:hf,common:uf,cube_uv_reflection_fragment:df,defaultnormal_vertex:ff,displacementmap_pars_vertex:pf,displacementmap_vertex:mf,emissivemap_fragment:gf,emissivemap_pars_fragment:_f,colorspace_fragment:vf,colorspace_pars_fragment:xf,envmap_fragment:yf,envmap_common_pars_fragment:Mf,envmap_pars_fragment:bf,envmap_pars_vertex:Sf,envmap_physical_pars_fragment:Nf,envmap_vertex:Ef,fog_vertex:wf,fog_pars_vertex:Tf,fog_fragment:Af,fog_pars_fragment:Rf,gradientmap_pars_fragment:Cf,lightmap_fragment:Lf,lightmap_pars_fragment:Pf,lights_lambert_fragment:Df,lights_lambert_pars_fragment:If,lights_pars_begin:Uf,lights_toon_fragment:kf,lights_toon_pars_fragment:Ff,lights_phong_fragment:Of,lights_phong_pars_fragment:Bf,lights_physical_fragment:zf,lights_physical_pars_fragment:Hf,lights_fragment_begin:Gf,lights_fragment_maps:Vf,lights_fragment_end:Wf,logdepthbuf_fragment:Xf,logdepthbuf_pars_fragment:qf,logdepthbuf_pars_vertex:$f,logdepthbuf_vertex:Yf,map_fragment:jf,map_pars_fragment:Kf,map_particle_fragment:Zf,map_particle_pars_fragment:Jf,metalnessmap_fragment:Qf,metalnessmap_pars_fragment:tp,morphcolor_vertex:ep,morphnormal_vertex:np,morphtarget_pars_vertex:ip,morphtarget_vertex:sp,normal_fragment_begin:rp,normal_fragment_maps:ap,normal_pars_fragment:op,normal_pars_vertex:lp,normal_vertex:cp,normalmap_pars_fragment:hp,clearcoat_normal_fragment_begin:up,clearcoat_normal_fragment_maps:dp,clearcoat_pars_fragment:fp,iridescence_pars_fragment:pp,opaque_fragment:mp,packing:gp,premultiplied_alpha_fragment:_p,project_vertex:vp,dithering_fragment:xp,dithering_pars_fragment:yp,roughnessmap_fragment:Mp,roughnessmap_pars_fragment:bp,shadowmap_pars_fragment:Sp,shadowmap_pars_vertex:Ep,shadowmap_vertex:wp,shadowmask_pars_fragment:Tp,skinbase_vertex:Ap,skinning_pars_vertex:Rp,skinning_vertex:Cp,skinnormal_vertex:Lp,specularmap_fragment:Pp,specularmap_pars_fragment:Dp,tonemapping_fragment:Ip,tonemapping_pars_fragment:Up,transmission_fragment:Np,transmission_pars_fragment:kp,uv_pars_fragment:Fp,uv_pars_vertex:Op,uv_vertex:Bp,worldpos_vertex:zp,background_vert:Hp,background_frag:Gp,backgroundCube_vert:Vp,backgroundCube_frag:Wp,cube_vert:Xp,cube_frag:qp,depth_vert:$p,depth_frag:Yp,distanceRGBA_vert:jp,distanceRGBA_frag:Kp,equirect_vert:Zp,equirect_frag:Jp,linedashed_vert:Qp,linedashed_frag:tm,meshbasic_vert:em,meshbasic_frag:nm,meshlambert_vert:im,meshlambert_frag:sm,meshmatcap_vert:rm,meshmatcap_frag:am,meshnormal_vert:om,meshnormal_frag:lm,meshphong_vert:cm,meshphong_frag:hm,meshphysical_vert:um,meshphysical_frag:dm,meshtoon_vert:fm,meshtoon_frag:pm,points_vert:mm,points_frag:gm,shadow_vert:_m,shadow_frag:vm,sprite_vert:xm,sprite_frag:ym},rt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},gn={basic:{uniforms:Be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Be([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Be([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Be([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Be([rt.points,rt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Be([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Be([rt.common,rt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Be([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Be([rt.sprite,rt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Be([rt.common,rt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Be([rt.lights,rt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};gn.physical={uniforms:Be([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Ks={r:0,b:0,g:0};function Mm(i,t,e,n,s,r,o){const a=new Ct(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Dr)?(h===void 0&&(h=new xe(new kn(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:ns(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=oe.getTransfer(v.colorSpace)!==he,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new xe(new oi(2,2),new an({name:"BackgroundMaterial",uniforms:ns(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=oe.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Ks,sh(i)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function bm(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,h=!1;function u(D,C,P,X,N){let H=!1;if(o){const $=_(X,P,C);c!==$&&(c=$,f(c.object)),H=p(D,X,P,N),H&&x(D,X,P,N)}else{const $=C.wireframe===!0;(c.geometry!==X.id||c.program!==P.id||c.wireframe!==$)&&(c.geometry=X.id,c.program=P.id,c.wireframe=$,H=!0)}N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(H||h)&&(h=!1,I(D,C,P,X),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,C,P){const X=P.wireframe===!0;let N=a[D.id];N===void 0&&(N={},a[D.id]=N);let H=N[C.id];H===void 0&&(H={},N[C.id]=H);let $=H[X];return $===void 0&&($=m(d()),H[X]=$),$}function m(D){const C=[],P=[],X=[];for(let N=0;N<s;N++)C[N]=0,P[N]=0,X[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:X,object:D,attributes:{},index:null}}function p(D,C,P,X){const N=c.attributes,H=C.attributes;let $=0;const tt=P.getAttributes();for(const et in tt)if(tt[et].location>=0){const K=N[et];let ht=H[et];if(ht===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(ht=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(ht=D.instanceColor)),K===void 0||K.attribute!==ht||ht&&K.data!==ht.data)return!0;$++}return c.attributesNum!==$||c.index!==X}function x(D,C,P,X){const N={},H=C.attributes;let $=0;const tt=P.getAttributes();for(const et in tt)if(tt[et].location>=0){let K=H[et];K===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(K=D.instanceColor));const ht={};ht.attribute=K,K&&K.data&&(ht.data=K.data),N[et]=ht,$++}c.attributes=N,c.attributesNum=$,c.index=X}function v(){const D=c.newAttributes;for(let C=0,P=D.length;C<P;C++)D[C]=0}function b(D){R(D,0)}function R(D,C){const P=c.newAttributes,X=c.enabledAttributes,N=c.attributeDivisors;P[D]=1,X[D]===0&&(i.enableVertexAttribArray(D),X[D]=1),N[D]!==C&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,C),N[D]=C)}function w(){const D=c.newAttributes,C=c.enabledAttributes;for(let P=0,X=C.length;P<X;P++)C[P]!==D[P]&&(i.disableVertexAttribArray(P),C[P]=0)}function S(D,C,P,X,N,H,$){$===!0?i.vertexAttribIPointer(D,C,P,N,H):i.vertexAttribPointer(D,C,P,X,N,H)}function I(D,C,P,X){if(n.isWebGL2===!1&&(D.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const N=X.attributes,H=P.getAttributes(),$=C.defaultAttributeValues;for(const tt in H){const et=H[tt];if(et.location>=0){let V=N[tt];if(V===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(V=D.instanceColor)),V!==void 0){const K=V.normalized,ht=V.itemSize,xt=e.get(V);if(xt===void 0)continue;const _t=xt.buffer,Nt=xt.type,Ft=xt.bytesPerElement,Pt=n.isWebGL2===!0&&(Nt===i.INT||Nt===i.UNSIGNED_INT||V.gpuType===zc);if(V.isInterleavedBufferAttribute){const te=V.data,F=te.stride,ue=V.offset;if(te.isInstancedInterleavedBuffer){for(let At=0;At<et.locationSize;At++)R(et.location+At,te.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let At=0;At<et.locationSize;At++)b(et.location+At);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let At=0;At<et.locationSize;At++)S(et.location+At,ht/et.locationSize,Nt,K,F*Ft,(ue+ht/et.locationSize*At)*Ft,Pt)}else{if(V.isInstancedBufferAttribute){for(let te=0;te<et.locationSize;te++)R(et.location+te,V.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let te=0;te<et.locationSize;te++)b(et.location+te);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let te=0;te<et.locationSize;te++)S(et.location+te,ht/et.locationSize,Nt,K,ht*Ft,ht/et.locationSize*te*Ft,Pt)}}else if($!==void 0){const K=$[tt];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(et.location,K);break;case 3:i.vertexAttrib3fv(et.location,K);break;case 4:i.vertexAttrib4fv(et.location,K);break;default:i.vertexAttrib1fv(et.location,K)}}}}w()}function y(){q();for(const D in a){const C=a[D];for(const P in C){const X=C[P];for(const N in X)g(X[N].object),delete X[N];delete C[P]}delete a[D]}}function A(D){if(a[D.id]===void 0)return;const C=a[D.id];for(const P in C){const X=C[P];for(const N in X)g(X[N].object),delete X[N];delete C[P]}delete a[D.id]}function G(D){for(const C in a){const P=a[C];if(P[D.id]===void 0)continue;const X=P[D.id];for(const N in X)g(X[N].object),delete X[N];delete P[D.id]}}function q(){j(),h=!0,c!==l&&(c=l,f(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:q,resetDefaultState:j,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:b,disableUnusedAttributes:w}}function Sm(i,t,e,n){const s=n.isWebGL2;let r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Em(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,b=o||t.has("OES_texture_float"),R=v&&b,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:w}}function wm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ni,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,v=x*4;let b=p.clippingState||null;l.value=b,b=h(g,d,v,f);for(let R=0;R!==v;++R)b[R]=e[R];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,b=f;v!==_;++v,b+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Tm(i){let t=new WeakMap;function e(o,a){return a===Da?o.mapping=Ji:a===Ia&&(o.mapping=Qi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Da||a===Ia)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new lh(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ho extends rh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Hi=4,bl=[.125,.215,.35,.446,.526,.582],ai=20,fa=new ho,Sl=new Ct;let pa=null,ma=0,ga=0;const ii=(1+Math.sqrt(5))/2,Ci=1/ii,El=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,ii,Ci),new U(0,ii,-Ci),new U(Ci,0,ii),new U(-Ci,0,ii),new U(ii,Ci,0),new U(-ii,Ci,0)];class wl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pa,ma,ga),t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:ts,format:Ve,colorSpace:bn,depthBuffer:!1},s=Tl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Am(r)),this._blurMaterial=Rm(r,t,e)}return s}_compileMaterial(t){const e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,fa)}_sceneToCubeUV(t,e,n,s){const a=new nn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Sl),h.toneMapping=$n,h.autoClear=!1;const f=new rn({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new xe(new kn,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Sl),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Zs(s,x*v,p>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ji||t.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Al());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new xe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,fa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=El[(s-1)%El.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new xe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ai-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ai;m>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const p=[];let x=0;for(let S=0;S<ai;++S){const I=S/_,y=Math.exp(-I*I/2);p.push(y),S===0?x+=y:S<m&&(x+=2*y)}for(let S=0;S<p.length;S++)p[S]=p[S]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const b=this._sizeLods[s],R=3*b*(s>v-Hi?s-v+Hi:0),w=4*(this._cubeSize-b);Zs(e,R,w,3*b,2*b),l.setRenderTarget(e),l.render(u,fa)}}function Am(i){const t=[],e=[],n=[];let s=i;const r=i-Hi+1+bl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Hi?l=bl[o-i+Hi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),v=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let w=0;w<f;w++){const S=w%3*2/3-1,I=w>2?0:-1,y=[S,I,0,S+2/3,I,0,S+2/3,I+1,0,S,I,0,S+2/3,I+1,0,S,I+1,0];x.set(y,_*g*w),v.set(d,m*g*w);const A=[w,w,w,w,w,w];b.set(A,p*g*w)}const R=new Le;R.setAttribute("position",new me(x,_)),R.setAttribute("uv",new me(v,m)),R.setAttribute("faceIndex",new me(b,p)),t.push(R),s>Hi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Tl(i,t,e){const n=new Nn(i,t,e);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Rm(i,t,e){const n=new Float32Array(ai),s=new U(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Al(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Rl(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function uo(){return`

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
	`}function Cm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Da||l===Ia,h=l===Ji||l===Qi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new wl(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new wl(i));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Lm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Pm(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let v=0,b=x.length;v<b;v+=3){const R=x[v+0],w=x[v+1],S=x[v+2];d.push(R,w,w,S,S,R)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,b=x.length/3-1;v<b;v+=3){const R=v+0,w=v+1,S=v+2;d.push(R,w,w,S,S,R)}}else return;const m=new(Kc(d)?ih:nh)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Dm(i,t,e,n){const s=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,g){i.drawElements(r,g,a,f*l),e.update(g,r,1)}function u(f,g,_){if(_===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*l,_),e.update(g,r,_)}function d(f,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,_);let p=0;for(let x=0;x<_;x++)p+=g[x];e.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Im(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Um(i,t){return i[0]-t[0]}function Nm(i,t){return Math.abs(t[1])-Math.abs(i[1])}function km(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,o=new Ae,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let C=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var f=C;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let y=0;v===!0&&(y=1),b===!0&&(y=2),R===!0&&(y=3);let A=h.attributes.position.count*y,G=1;A>t.maxTextureSize&&(G=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const q=new Float32Array(A*G*4*_),j=new Qc(q,A,G,_);j.type=qn,j.needsUpdate=!0;const D=y*4;for(let P=0;P<_;P++){const X=w[P],N=S[P],H=I[P],$=A*G*4*P;for(let tt=0;tt<X.count;tt++){const et=tt*D;v===!0&&(o.fromBufferAttribute(X,tt),q[$+et+0]=o.x,q[$+et+1]=o.y,q[$+et+2]=o.z,q[$+et+3]=0),b===!0&&(o.fromBufferAttribute(N,tt),q[$+et+4]=o.x,q[$+et+5]=o.y,q[$+et+6]=o.z,q[$+et+7]=0),R===!0&&(o.fromBufferAttribute(H,tt),q[$+et+8]=o.x,q[$+et+9]=o.y,q[$+et+10]=o.z,q[$+et+11]=H.itemSize===4?o.w:1)}}m={count:_,texture:j,size:new Xt(A,G)},r.set(h,m),h.addEventListener("dispose",C)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];const x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let b=0;b<g;b++)_[b]=[b,0];n[h.id]=_}for(let b=0;b<g;b++){const R=_[b];R[0]=b,R[1]=d[b]}_.sort(Nm);for(let b=0;b<8;b++)b<g&&_[b][1]?(a[b][0]=_[b][0],a[b][1]=_[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Um);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let x=0;for(let b=0;b<8;b++){const R=a[b],w=R[0],S=R[1];w!==Number.MAX_SAFE_INTEGER&&S?(m&&h.getAttribute("morphTarget"+b)!==m[w]&&h.setAttribute("morphTarget"+b,m[w]),p&&h.getAttribute("morphNormal"+b)!==p[w]&&h.setAttribute("morphNormal"+b,p[w]),s[b]=S,x+=S):(m&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),p&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),s[b]=0)}const v=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Fm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class hh extends Xe{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:ci,h!==ci&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ci&&(n=Xn),n===void 0&&h===es&&(n=li),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:pe,this.minFilter=l!==void 0?l:pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const uh=new Xe,dh=new hh(1,1);dh.compareFunction=jc;const fh=new Qc,ph=new Sd,mh=new oh,Cl=[],Ll=[],Pl=new Float32Array(16),Dl=new Float32Array(9),Il=new Float32Array(4);function as(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Cl[s];if(r===void 0&&(r=new Float32Array(s),Cl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Nr(i,t){let e=Ll[t];e===void 0&&(e=new Int32Array(t),Ll[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Om(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function Hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function Gm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Il.set(n),i.uniformMatrix2fv(this.addr,!1,Il),be(e,n)}}function Vm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Dl.set(n),i.uniformMatrix3fv(this.addr,!1,Dl),be(e,n)}}function Wm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Pl.set(n),i.uniformMatrix4fv(this.addr,!1,Pl),be(e,n)}}function Xm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function Ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function Qm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?dh:uh;e.setTexture2D(t||r,s)}function t0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ph,s)}function e0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||mh,s)}function n0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fh,s)}function i0(i){switch(i){case 5126:return Om;case 35664:return Bm;case 35665:return zm;case 35666:return Hm;case 35674:return Gm;case 35675:return Vm;case 35676:return Wm;case 5124:case 35670:return Xm;case 35667:case 35671:return qm;case 35668:case 35672:return $m;case 35669:case 35673:return Ym;case 5125:return jm;case 36294:return Km;case 36295:return Zm;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Qm;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return n0}}function s0(i,t){i.uniform1fv(this.addr,t)}function r0(i,t){const e=as(t,this.size,2);i.uniform2fv(this.addr,e)}function a0(i,t){const e=as(t,this.size,3);i.uniform3fv(this.addr,e)}function o0(i,t){const e=as(t,this.size,4);i.uniform4fv(this.addr,e)}function l0(i,t){const e=as(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function c0(i,t){const e=as(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function h0(i,t){const e=as(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function u0(i,t){i.uniform1iv(this.addr,t)}function d0(i,t){i.uniform2iv(this.addr,t)}function f0(i,t){i.uniform3iv(this.addr,t)}function p0(i,t){i.uniform4iv(this.addr,t)}function m0(i,t){i.uniform1uiv(this.addr,t)}function g0(i,t){i.uniform2uiv(this.addr,t)}function _0(i,t){i.uniform3uiv(this.addr,t)}function v0(i,t){i.uniform4uiv(this.addr,t)}function x0(i,t,e){const n=this.cache,s=t.length,r=Nr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||uh,r[o])}function y0(i,t,e){const n=this.cache,s=t.length,r=Nr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ph,r[o])}function M0(i,t,e){const n=this.cache,s=t.length,r=Nr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||mh,r[o])}function b0(i,t,e){const n=this.cache,s=t.length,r=Nr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||fh,r[o])}function S0(i){switch(i){case 5126:return s0;case 35664:return r0;case 35665:return a0;case 35666:return o0;case 35674:return l0;case 35675:return c0;case 35676:return h0;case 5124:case 35670:return u0;case 35667:case 35671:return d0;case 35668:case 35672:return f0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return _0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return b0}}class E0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=i0(e.type)}}class w0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=S0(e.type)}}class T0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function Ul(i,t){i.seq.push(t),i.map[t.id]=t}function A0(i,t,e){const n=i.name,s=n.length;for(_a.lastIndex=0;;){const r=_a.exec(n),o=_a.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ul(e,c===void 0?new E0(a,i,t):new w0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new T0(a),Ul(e,u)),e=u}}}class dr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);A0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Nl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const R0=37297;let C0=0;function L0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function P0(i){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i);let n;switch(t===e?n="":t===br&&e===Mr?n="LinearDisplayP3ToLinearSRGB":t===Mr&&e===br&&(n="LinearSRGBToLinearDisplayP3"),i){case bn:case Ir:return[n,"LinearTransferOETF"];case Te:case ro:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function kl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+L0(i.getShaderSource(t),o)}else return s}function D0(i,t){const e=P0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function I0(i,t){let e;switch(t){case Iu:e="Linear";break;case Uu:e="Reinhard";break;case Nu:e="OptimizedCineon";break;case ku:e="ACESFilmic";break;case Ou:e="AgX";break;case Fu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function U0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gi).join(`
`)}function N0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Gi).join(`
`)}function k0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function F0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Gi(i){return i!==""}function Fl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ol(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oa(i){return i.replace(O0,z0)}const B0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function z0(i,t){let e=Yt[t];if(e===void 0){const n=B0.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oa(e)}const H0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bl(i){return i.replace(H0,G0)}function G0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zl(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function V0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function W0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case Qi:t="ENVMAP_TYPE_CUBE";break;case Dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function X0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qi:t="ENVMAP_MODE_REFRACTION";break}return t}function q0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Oc:t="ENVMAP_BLENDING_MULTIPLY";break;case Pu:t="ENVMAP_BLENDING_MIX";break;case Du:t="ENVMAP_BLENDING_ADD";break}return t}function $0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Y0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=V0(e),c=W0(e),h=X0(e),u=q0(e),d=$0(e),f=e.isWebGL2?"":U0(e),g=N0(e),_=k0(r),m=s.createProgram();let p,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Gi).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Gi).join(`
`),x.length>0&&(x+=`
`)):(p=[zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),x=[f,zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?Yt.tonemapping_pars_fragment:"",e.toneMapping!==$n?I0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,D0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gi).join(`
`)),o=Oa(o),o=Fl(o,e),o=Ol(o,e),a=Oa(a),a=Fl(a,e),a=Ol(a,e),o=Bl(o),a=Bl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=v+p+o,R=v+x+a,w=Nl(s,s.VERTEX_SHADER,b),S=Nl(s,s.FRAGMENT_SHADER,R);s.attachShader(m,w),s.attachShader(m,S),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function I(q){if(i.debug.checkShaderErrors){const j=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(w).trim(),C=s.getShaderInfoLog(S).trim();let P=!0,X=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(P=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,w,S);else{const N=kl(s,w,"vertex"),H=kl(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+N+`
`+H)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(D===""||C==="")&&(X=!1);X&&(q.diagnostics={runnable:P,programLog:j,vertexShader:{log:D,prefix:p},fragmentShader:{log:C,prefix:x}})}s.deleteShader(w),s.deleteShader(S),y=new dr(s,m),A=F0(s,m)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(m,R0)),G},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=C0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=S,this}let j0=0;class K0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Z0(t),e.set(t,n)),n}}class Z0{constructor(t){this.id=j0++,this.code=t,this.usedTimes=0}}function J0(i,t,e,n,s,r,o){const a=new th,l=new K0,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,A,G,q,j){const D=q.fog,C=j.geometry,P=y.isMeshStandardMaterial?q.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||P),N=X&&X.mapping===Dr?X.image.height:null,H=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const $=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,tt=$!==void 0?$.length:0;let et=0;C.morphAttributes.position!==void 0&&(et=1),C.morphAttributes.normal!==void 0&&(et=2),C.morphAttributes.color!==void 0&&(et=3);let V,K,ht,xt;if(H){const ke=gn[H];V=ke.vertexShader,K=ke.fragmentShader}else V=y.vertexShader,K=y.fragmentShader,l.update(y),ht=l.getVertexShaderID(y),xt=l.getFragmentShaderID(y);const _t=i.getRenderTarget(),Nt=j.isInstancedMesh===!0,Ft=j.isBatchedMesh===!0,Pt=!!y.map,te=!!y.matcap,F=!!X,ue=!!y.aoMap,At=!!y.lightMap,yt=!!y.bumpMap,ut=!!y.normalMap,qt=!!y.displacementMap,Dt=!!y.emissiveMap,T=!!y.metalnessMap,M=!!y.roughnessMap,O=y.anisotropy>0,J=y.clearcoat>0,Y=y.iridescence>0,Q=y.sheen>0,mt=y.transmission>0,ot=O&&!!y.anisotropyMap,gt=J&&!!y.clearcoatMap,Tt=J&&!!y.clearcoatNormalMap,Ot=J&&!!y.clearcoatRoughnessMap,Z=Y&&!!y.iridescenceMap,ee=Y&&!!y.iridescenceThicknessMap,St=Q&&!!y.sheenColorMap,Mt=Q&&!!y.sheenRoughnessMap,Et=!!y.specularMap,pt=!!y.specularColorMap,kt=!!y.specularIntensityMap,ne=mt&&!!y.transmissionMap,ce=mt&&!!y.thicknessMap,Vt=!!y.gradientMap,st=!!y.alphaMap,L=y.alphaTest>0,lt=!!y.alphaHash,ct=!!y.extensions,Rt=!!C.attributes.uv1,wt=!!C.attributes.uv2,re=!!C.attributes.uv3;let ie=$n;return y.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ie=i.toneMapping),{isWebGL2:h,shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:K,defines:y.defines,customVertexShaderID:ht,customFragmentShaderID:xt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ft,instancing:Nt,instancingColor:Nt&&j.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:bn,map:Pt,matcap:te,envMap:F,envMapMode:F&&X.mapping,envMapCubeUVHeight:N,aoMap:ue,lightMap:At,bumpMap:yt,normalMap:ut,displacementMap:d&&qt,emissiveMap:Dt,normalMapObjectSpace:ut&&y.normalMapType===Ku,normalMapTangentSpace:ut&&y.normalMapType===ju,metalnessMap:T,roughnessMap:M,anisotropy:O,anisotropyMap:ot,clearcoat:J,clearcoatMap:gt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Ot,iridescence:Y,iridescenceMap:Z,iridescenceThicknessMap:ee,sheen:Q,sheenColorMap:St,sheenRoughnessMap:Mt,specularMap:Et,specularColorMap:pt,specularIntensityMap:kt,transmission:mt,transmissionMap:ne,thicknessMap:ce,gradientMap:Vt,opaque:y.transparent===!1&&y.blending===Yi,alphaMap:st,alphaTest:L,alphaHash:lt,combine:y.combine,mapUv:Pt&&_(y.map.channel),aoMapUv:ue&&_(y.aoMap.channel),lightMapUv:At&&_(y.lightMap.channel),bumpMapUv:yt&&_(y.bumpMap.channel),normalMapUv:ut&&_(y.normalMap.channel),displacementMapUv:qt&&_(y.displacementMap.channel),emissiveMapUv:Dt&&_(y.emissiveMap.channel),metalnessMapUv:T&&_(y.metalnessMap.channel),roughnessMapUv:M&&_(y.roughnessMap.channel),anisotropyMapUv:ot&&_(y.anisotropyMap.channel),clearcoatMapUv:gt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:St&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(y.sheenRoughnessMap.channel),specularMapUv:Et&&_(y.specularMap.channel),specularColorMapUv:pt&&_(y.specularColorMap.channel),specularIntensityMapUv:kt&&_(y.specularIntensityMap.channel),transmissionMapUv:ne&&_(y.transmissionMap.channel),thicknessMapUv:ce&&_(y.thicknessMap.channel),alphaMapUv:st&&_(y.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(ut||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,vertexUv1s:Rt,vertexUv2s:wt,vertexUv3s:re,pointsUvs:j.isPoints===!0&&!!C.attributes.uv&&(Pt||st),fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:j.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:et,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Pt&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===he,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Pe,flipSided:y.side===We,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ct&&y.extensions.derivatives===!0,extensionFragDepth:ct&&y.extensions.fragDepth===!0,extensionDrawBuffers:ct&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ct&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ct&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const G in y.defines)A.push(G),A.push(y.defines[G]);return y.isRawShaderMaterial===!1&&(x(A,y),v(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function x(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function v(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function b(y){const A=g[y.type];let G;if(A){const q=gn[A];G=lo.clone(q.uniforms)}else G=y.uniforms;return G}function R(y,A){let G;for(let q=0,j=c.length;q<j;q++){const D=c[q];if(D.cacheKey===A){G=D,++G.usedTimes;break}}return G===void 0&&(G=new Y0(i,A,y,r),c.push(G)),G}function w(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),y.destroy()}}function S(y){l.remove(y)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:R,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:I}}function Q0(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function tg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Hl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||tg),n.length>1&&n.sort(d||Hl),s.length>1&&s.sort(d||Hl)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function eg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Gl,i.set(n,[o])):s>=r.length?(o=new Gl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ng(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ct};break;case"SpotLight":e={position:new U,direction:new U,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function ig(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let sg=0;function rg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ag(i,t){const e=new ng,n=ig(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);const r=new U,o=new ge,a=new ge;function l(h,u){let d=0,f=0,g=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let _=0,m=0,p=0,x=0,v=0,b=0,R=0,w=0,S=0,I=0,y=0;h.sort(rg);const A=u===!0?Math.PI:1;for(let q=0,j=h.length;q<j;q++){const D=h[q],C=D.color,P=D.intensity,X=D.distance,N=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=C.r*P*A,f+=C.g*P*A,g+=C.b*P*A;else if(D.isLightProbe){for(let H=0;H<9;H++)s.probe[H].addScaledVector(D.sh.coefficients[H],P);y++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const $=D.shadow,tt=n.get(D);tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,s.directionalShadow[_]=tt,s.directionalShadowMap[_]=N,s.directionalShadowMatrix[_]=D.shadow.matrix,b++}s.directional[_]=H,_++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(C).multiplyScalar(P*A),H.distance=X,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,s.spot[p]=H;const $=D.shadow;if(D.map&&(s.spotLightMap[S]=D.map,S++,$.updateMatrices(D),D.castShadow&&I++),s.spotLightMatrix[p]=$.matrix,D.castShadow){const tt=n.get(D);tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,s.spotShadow[p]=tt,s.spotShadowMap[p]=N,w++}p++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(C).multiplyScalar(P),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),s.rectArea[x]=H,x++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*A),H.distance=D.distance,H.decay=D.decay,D.castShadow){const $=D.shadow,tt=n.get(D);tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,tt.shadowCameraNear=$.camera.near,tt.shadowCameraFar=$.camera.far,s.pointShadow[m]=tt,s.pointShadowMap[m]=N,s.pointShadowMatrix[m]=D.shadow.matrix,R++}s.point[m]=H,m++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(P*A),H.groundColor.copy(D.groundColor).multiplyScalar(P*A),s.hemi[v]=H,v++}}x>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=rt.LTC_FLOAT_1,s.rectAreaLTC2=rt.LTC_FLOAT_2):(s.rectAreaLTC1=rt.LTC_HALF_1,s.rectAreaLTC2=rt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=rt.LTC_FLOAT_1,s.rectAreaLTC2=rt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=rt.LTC_HALF_1,s.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;const G=s.hash;(G.directionalLength!==_||G.pointLength!==m||G.spotLength!==p||G.rectAreaLength!==x||G.hemiLength!==v||G.numDirectionalShadows!==b||G.numPointShadows!==R||G.numSpotShadows!==w||G.numSpotMaps!==S||G.numLightProbes!==y)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=x,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=w+S-I,s.spotLightMap.length=S,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=y,G.directionalLength=_,G.pointLength=m,G.spotLength=p,G.rectAreaLength=x,G.hemiLength=v,G.numDirectionalShadows=b,G.numPointShadows=R,G.numSpotShadows=w,G.numSpotMaps=S,G.numLightProbes=y,s.version=sg++)}function c(h,u){let d=0,f=0,g=0,_=0,m=0;const p=u.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const b=h[x];if(b.isDirectionalLight){const R=s.directional[d];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),d++}else if(b.isSpotLight){const R=s.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(b.isRectAreaLight){const R=s.rectArea[_];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(b.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const R=s.point[f];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const R=s.hemi[m];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Vl(i,t){const e=new ag(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function og(i,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new Vl(i,t),e.set(r,[l])):o>=a.length?(l=new Vl(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}class gh extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lg extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hg=`uniform sampler2D shadow_pass;
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
}`;function ug(i,t,e){let n=new co;const s=new Xt,r=new Xt,o=new Ae,a=new gh({depthPacking:Yc}),l=new lg,c={},h=e.maxTextureSize,u={[Un]:We,[We]:Un,[Pe]:Pe},d=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:cg,fragmentShader:hg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Le;g.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc;let p=this.type;this.render=function(w,S,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=i.getRenderTarget(),A=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Pn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const j=p!==Cn&&this.type===Cn,D=p===Cn&&this.type!==Cn;for(let C=0,P=w.length;C<P;C++){const X=w[C],N=X.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const H=N.getFrameExtents();if(s.multiply(H),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,N.mapSize.y=r.y)),N.map===null||j===!0||D===!0){const tt=this.type!==Cn?{minFilter:pe,magFilter:pe}:{};N.map!==null&&N.map.dispose(),N.map=new Nn(s.x,s.y,tt),N.map.texture.name=X.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const $=N.getViewportCount();for(let tt=0;tt<$;tt++){const et=N.getViewport(tt);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),q.viewport(o),N.updateMatrices(X,tt),n=N.getFrustum(),b(S,I,N.camera,X,this.type)}N.isPointLightShadow!==!0&&this.type===Cn&&x(N,I),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,A,G)};function x(w,S){const I=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Nn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(S,null,I,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(S,null,I,f,_,null)}function v(w,S,I,y){let A=null;const G=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(G!==void 0)A=G;else if(A=I.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const q=A.uuid,j=S.uuid;let D=c[q];D===void 0&&(D={},c[q]=D);let C=D[j];C===void 0&&(C=A.clone(),D[j]=C,S.addEventListener("dispose",R)),A=C}if(A.visible=S.visible,A.wireframe=S.wireframe,y===Cn?A.side=S.shadowSide!==null?S.shadowSide:S.side:A.side=S.shadowSide!==null?S.shadowSide:u[S.side],A.alphaMap=S.alphaMap,A.alphaTest=S.alphaTest,A.map=S.map,A.clipShadows=S.clipShadows,A.clippingPlanes=S.clippingPlanes,A.clipIntersection=S.clipIntersection,A.displacementMap=S.displacementMap,A.displacementScale=S.displacementScale,A.displacementBias=S.displacementBias,A.wireframeLinewidth=S.wireframeLinewidth,A.linewidth=S.linewidth,I.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const q=i.properties.get(A);q.light=I}return A}function b(w,S,I,y,A){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===Cn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const j=t.update(w),D=w.material;if(Array.isArray(D)){const C=j.groups;for(let P=0,X=C.length;P<X;P++){const N=C[P],H=D[N.materialIndex];if(H&&H.visible){const $=v(w,H,y,A);w.onBeforeShadow(i,w,S,I,j,$,N),i.renderBufferDirect(I,null,j,$,w,N),w.onAfterShadow(i,w,S,I,j,$,N)}}}else if(D.visible){const C=v(w,D,y,A);w.onBeforeShadow(i,w,S,I,j,C,null),i.renderBufferDirect(I,null,j,C,w,null),w.onAfterShadow(i,w,S,I,j,C,null)}}const q=w.children;for(let j=0,D=q.length;j<D;j++)b(q[j],S,I,y,A)}function R(w){w.target.removeEventListener("dispose",R);for(const I in c){const y=c[I],A=w.target.uuid;A in y&&(y[A].dispose(),delete y[A])}}}function dg(i,t,e){const n=e.isWebGL2;function s(){let L=!1;const lt=new Ae;let ct=null;const Rt=new Ae(0,0,0,0);return{setMask:function(wt){ct!==wt&&!L&&(i.colorMask(wt,wt,wt,wt),ct=wt)},setLocked:function(wt){L=wt},setClear:function(wt,re,ie,Se,ke){ke===!0&&(wt*=Se,re*=Se,ie*=Se),lt.set(wt,re,ie,Se),Rt.equals(lt)===!1&&(i.clearColor(wt,re,ie,Se),Rt.copy(lt))},reset:function(){L=!1,ct=null,Rt.set(-1,0,0,0)}}}function r(){let L=!1,lt=null,ct=null,Rt=null;return{setTest:function(wt){wt?Ft(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(wt){lt!==wt&&!L&&(i.depthMask(wt),lt=wt)},setFunc:function(wt){if(ct!==wt){switch(wt){case Eu:i.depthFunc(i.NEVER);break;case wu:i.depthFunc(i.ALWAYS);break;case Tu:i.depthFunc(i.LESS);break;case vr:i.depthFunc(i.LEQUAL);break;case Au:i.depthFunc(i.EQUAL);break;case Ru:i.depthFunc(i.GEQUAL);break;case Cu:i.depthFunc(i.GREATER);break;case Lu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=wt}},setLocked:function(wt){L=wt},setClear:function(wt){Rt!==wt&&(i.clearDepth(wt),Rt=wt)},reset:function(){L=!1,lt=null,ct=null,Rt=null}}}function o(){let L=!1,lt=null,ct=null,Rt=null,wt=null,re=null,ie=null,Se=null,ke=null;return{setTest:function(le){L||(le?Ft(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(le){lt!==le&&!L&&(i.stencilMask(le),lt=le)},setFunc:function(le,Fe,fn){(ct!==le||Rt!==Fe||wt!==fn)&&(i.stencilFunc(le,Fe,fn),ct=le,Rt=Fe,wt=fn)},setOp:function(le,Fe,fn){(re!==le||ie!==Fe||Se!==fn)&&(i.stencilOp(le,Fe,fn),re=le,ie=Fe,Se=fn)},setLocked:function(le){L=le},setClear:function(le){ke!==le&&(i.clearStencil(le),ke=le)},reset:function(){L=!1,lt=null,ct=null,Rt=null,wt=null,re=null,ie=null,Se=null,ke=null}}}const a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,v=null,b=null,R=null,w=null,S=null,I=null,y=new Ct(0,0,0),A=0,G=!1,q=null,j=null,D=null,C=null,P=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,H=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),N=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),N=H>=2);let tt=null,et={};const V=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),ht=new Ae().fromArray(V),xt=new Ae().fromArray(K);function _t(L,lt,ct,Rt){const wt=new Uint8Array(4),re=i.createTexture();i.bindTexture(L,re),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ie=0;ie<ct;ie++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(lt,0,i.RGBA,1,1,Rt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(lt+ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return re}const Nt={};Nt[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),Nt[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Nt[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Nt[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ft(i.DEPTH_TEST),l.setFunc(vr),Dt(!1),T(Eo),Ft(i.CULL_FACE),ut(Pn);function Ft(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function Pt(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function te(L,lt){return f[L]!==lt?(i.bindFramebuffer(L,lt),f[L]=lt,n&&(L===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=lt),L===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=lt)),!0):!1}function F(L,lt){let ct=_,Rt=!1;if(L)if(ct=g.get(lt),ct===void 0&&(ct=[],g.set(lt,ct)),L.isWebGLMultipleRenderTargets){const wt=L.texture;if(ct.length!==wt.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let re=0,ie=wt.length;re<ie;re++)ct[re]=i.COLOR_ATTACHMENT0+re;ct.length=wt.length,Rt=!0}}else ct[0]!==i.COLOR_ATTACHMENT0&&(ct[0]=i.COLOR_ATTACHMENT0,Rt=!0);else ct[0]!==i.BACK&&(ct[0]=i.BACK,Rt=!0);Rt&&(e.isWebGL2?i.drawBuffers(ct):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ct))}function ue(L){return m!==L?(i.useProgram(L),m=L,!0):!1}const At={[ri]:i.FUNC_ADD,[cu]:i.FUNC_SUBTRACT,[hu]:i.FUNC_REVERSE_SUBTRACT};if(n)At[Ro]=i.MIN,At[Co]=i.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(At[Ro]=L.MIN_EXT,At[Co]=L.MAX_EXT)}const yt={[uu]:i.ZERO,[du]:i.ONE,[fu]:i.SRC_COLOR,[La]:i.SRC_ALPHA,[xu]:i.SRC_ALPHA_SATURATE,[_u]:i.DST_COLOR,[mu]:i.DST_ALPHA,[pu]:i.ONE_MINUS_SRC_COLOR,[Pa]:i.ONE_MINUS_SRC_ALPHA,[vu]:i.ONE_MINUS_DST_COLOR,[gu]:i.ONE_MINUS_DST_ALPHA,[yu]:i.CONSTANT_COLOR,[Mu]:i.ONE_MINUS_CONSTANT_COLOR,[bu]:i.CONSTANT_ALPHA,[Su]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(L,lt,ct,Rt,wt,re,ie,Se,ke,le){if(L===Pn){p===!0&&(Pt(i.BLEND),p=!1);return}if(p===!1&&(Ft(i.BLEND),p=!0),L!==lu){if(L!==x||le!==G){if((v!==ri||w!==ri)&&(i.blendEquation(i.FUNC_ADD),v=ri,w=ri),le)switch(L){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wo:i.blendFunc(i.ONE,i.ONE);break;case To:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ao:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case To:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ao:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,R=null,S=null,I=null,y.set(0,0,0),A=0,x=L,G=le}return}wt=wt||lt,re=re||ct,ie=ie||Rt,(lt!==v||wt!==w)&&(i.blendEquationSeparate(At[lt],At[wt]),v=lt,w=wt),(ct!==b||Rt!==R||re!==S||ie!==I)&&(i.blendFuncSeparate(yt[ct],yt[Rt],yt[re],yt[ie]),b=ct,R=Rt,S=re,I=ie),(Se.equals(y)===!1||ke!==A)&&(i.blendColor(Se.r,Se.g,Se.b,ke),y.copy(Se),A=ke),x=L,G=!1}function qt(L,lt){L.side===Pe?Pt(i.CULL_FACE):Ft(i.CULL_FACE);let ct=L.side===We;lt&&(ct=!ct),Dt(ct),L.blending===Yi&&L.transparent===!1?ut(Pn):ut(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Rt=L.stencilWrite;c.setTest(Rt),Rt&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),O(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ft(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(L){q!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),q=L)}function T(L){L!==au?(Ft(i.CULL_FACE),L!==j&&(L===Eo?i.cullFace(i.BACK):L===ou?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),j=L}function M(L){L!==D&&(N&&i.lineWidth(L),D=L)}function O(L,lt,ct){L?(Ft(i.POLYGON_OFFSET_FILL),(C!==lt||P!==ct)&&(i.polygonOffset(lt,ct),C=lt,P=ct)):Pt(i.POLYGON_OFFSET_FILL)}function J(L){L?Ft(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function Y(L){L===void 0&&(L=i.TEXTURE0+X-1),tt!==L&&(i.activeTexture(L),tt=L)}function Q(L,lt,ct){ct===void 0&&(tt===null?ct=i.TEXTURE0+X-1:ct=tt);let Rt=et[ct];Rt===void 0&&(Rt={type:void 0,texture:void 0},et[ct]=Rt),(Rt.type!==L||Rt.texture!==lt)&&(tt!==ct&&(i.activeTexture(ct),tt=ct),i.bindTexture(L,lt||Nt[L]),Rt.type=L,Rt.texture=lt)}function mt(){const L=et[tt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ot(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ot(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function kt(L){ht.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ht.copy(L))}function ne(L){xt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),xt.copy(L))}function ce(L,lt){let ct=u.get(lt);ct===void 0&&(ct=new WeakMap,u.set(lt,ct));let Rt=ct.get(L);Rt===void 0&&(Rt=i.getUniformBlockIndex(lt,L.name),ct.set(L,Rt))}function Vt(L,lt){const Rt=u.get(lt).get(L);h.get(lt)!==Rt&&(i.uniformBlockBinding(lt,Rt,L.__bindingPointIndex),h.set(lt,Rt))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},tt=null,et={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,v=null,b=null,R=null,w=null,S=null,I=null,y=new Ct(0,0,0),A=0,G=!1,q=null,j=null,D=null,C=null,P=null,ht.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ft,disable:Pt,bindFramebuffer:te,drawBuffers:F,useProgram:ue,setBlending:ut,setMaterial:qt,setFlipSided:Dt,setCullFace:T,setLineWidth:M,setPolygonOffset:O,setScissorTest:J,activeTexture:Y,bindTexture:Q,unbindTexture:mt,compressedTexImage2D:ot,compressedTexImage3D:gt,texImage2D:Et,texImage3D:pt,updateUBOMapping:ce,uniformBlockBinding:Vt,texStorage2D:St,texStorage3D:Mt,texSubImage2D:Tt,texSubImage3D:Ot,compressedTexSubImage2D:Z,compressedTexSubImage3D:ee,scissor:kt,viewport:ne,reset:st}}function fg(i,t,e,n,s,r,o){const a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):wr("canvas")}function _(T,M,O,J){let Y=1;if((T.width>J||T.height>J)&&(Y=J/Math.max(T.width,T.height)),Y<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const Q=M?Er:Math.floor,mt=Q(Y*T.width),ot=Q(Y*T.height);u===void 0&&(u=g(mt,ot));const gt=O?g(mt,ot):u;return gt.width=mt,gt.height=ot,gt.getContext("2d").drawImage(T,0,0,mt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+mt+"x"+ot+")."),gt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return Fa(T.width)&&Fa(T.height)}function p(T){return a?!1:T.wrapS!==sn||T.wrapT!==sn||T.minFilter!==pe&&T.minFilter!==He}function x(T,M){return T.generateMipmaps&&M&&T.minFilter!==pe&&T.minFilter!==He}function v(T){i.generateMipmap(T)}function b(T,M,O,J,Y=!1){if(a===!1)return M;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=M;if(M===i.RED&&(O===i.FLOAT&&(Q=i.R32F),O===i.HALF_FLOAT&&(Q=i.R16F),O===i.UNSIGNED_BYTE&&(Q=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.R8UI),O===i.UNSIGNED_SHORT&&(Q=i.R16UI),O===i.UNSIGNED_INT&&(Q=i.R32UI),O===i.BYTE&&(Q=i.R8I),O===i.SHORT&&(Q=i.R16I),O===i.INT&&(Q=i.R32I)),M===i.RG&&(O===i.FLOAT&&(Q=i.RG32F),O===i.HALF_FLOAT&&(Q=i.RG16F),O===i.UNSIGNED_BYTE&&(Q=i.RG8)),M===i.RGBA){const mt=Y?yr:oe.getTransfer(J);O===i.FLOAT&&(Q=i.RGBA32F),O===i.HALF_FLOAT&&(Q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Q=mt===he?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function R(T,M,O){return x(T,O)===!0||T.isFramebufferTexture&&T.minFilter!==pe&&T.minFilter!==He?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function w(T){return T===pe||T===Lo||T===Wr?i.NEAREST:i.LINEAR}function S(T){const M=T.target;M.removeEventListener("dispose",S),y(M),M.isVideoTexture&&h.delete(M)}function I(T){const M=T.target;M.removeEventListener("dispose",I),G(M)}function y(T){const M=n.get(T);if(M.__webglInit===void 0)return;const O=T.source,J=d.get(O);if(J){const Y=J[M.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&A(T),Object.keys(J).length===0&&d.delete(O)}n.remove(T)}function A(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const O=T.source,J=d.get(O);delete J[M.__cacheKey],o.memory.textures--}function G(T){const M=T.texture,O=n.get(T),J=n.get(M);if(J.__webglTexture!==void 0&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(O.__webglFramebuffer[Y]))for(let Q=0;Q<O.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(O.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(O.__webglFramebuffer[Y]);O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer[Y])}else{if(Array.isArray(O.__webglFramebuffer))for(let Y=0;Y<O.__webglFramebuffer.length;Y++)i.deleteFramebuffer(O.__webglFramebuffer[Y]);else i.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&i.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Y=0;Y<O.__webglColorRenderbuffer.length;Y++)O.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(O.__webglColorRenderbuffer[Y]);O.__webglDepthRenderbuffer&&i.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Y=0,Q=M.length;Y<Q;Y++){const mt=n.get(M[Y]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(M[Y])}n.remove(M),n.remove(T)}let q=0;function j(){q=0}function D(){const T=q;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),q+=1,T}function C(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function P(T,M){const O=n.get(T);if(T.isVideoTexture&&qt(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(O,T,M);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function X(T,M){const O=n.get(T);if(T.version>0&&O.__version!==T.version){ht(O,T,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function N(T,M){const O=n.get(T);if(T.version>0&&O.__version!==T.version){ht(O,T,M);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function H(T,M){const O=n.get(T);if(T.version>0&&O.__version!==T.version){xt(O,T,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}const $={[xr]:i.REPEAT,[sn]:i.CLAMP_TO_EDGE,[Ua]:i.MIRRORED_REPEAT},tt={[pe]:i.NEAREST,[Lo]:i.NEAREST_MIPMAP_NEAREST,[Wr]:i.NEAREST_MIPMAP_LINEAR,[He]:i.LINEAR,[Bu]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},et={[Zu]:i.NEVER,[id]:i.ALWAYS,[Ju]:i.LESS,[jc]:i.LEQUAL,[Qu]:i.EQUAL,[nd]:i.GEQUAL,[td]:i.GREATER,[ed]:i.NOTEQUAL};function V(T,M,O){if(O?(i.texParameteri(T,i.TEXTURE_WRAP_S,$[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,$[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,$[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,tt[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,tt[M.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==sn||M.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,w(M.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==pe&&M.minFilter!==He&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,et[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const J=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===pe||M.minFilter!==Wr&&M.minFilter!==ui||M.type===qn&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===ts&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(T,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function K(T,M){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",S));const J=M.source;let Y=d.get(J);Y===void 0&&(Y={},d.set(J,Y));const Q=C(M);if(Q!==T.__cacheKey){Y[Q]===void 0&&(Y[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Y[Q].usedTimes++;const mt=Y[T.__cacheKey];mt!==void 0&&(Y[T.__cacheKey].usedTimes--,mt.usedTimes===0&&A(M)),T.__cacheKey=Q,T.__webglTexture=Y[Q].texture}return O}function ht(T,M,O){let J=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=i.TEXTURE_3D);const Y=K(T,M),Q=M.source;e.bindTexture(J,T.__webglTexture,i.TEXTURE0+O);const mt=n.get(Q);if(Q.version!==mt.__version||Y===!0){e.activeTexture(i.TEXTURE0+O);const ot=oe.getPrimaries(oe.workingColorSpace),gt=M.colorSpace===Ne?null:oe.getPrimaries(M.colorSpace),Tt=M.colorSpace===Ne||ot===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Ot=p(M)&&m(M.image)===!1;let Z=_(M.image,Ot,!1,s.maxTextureSize);Z=Dt(M,Z);const ee=m(Z)||a,St=r.convert(M.format,M.colorSpace);let Mt=r.convert(M.type),Et=b(M.internalFormat,St,Mt,M.colorSpace,M.isVideoTexture);V(J,M,ee);let pt;const kt=M.mipmaps,ne=a&&M.isVideoTexture!==!0&&Et!==qc,ce=mt.__version===void 0||Y===!0,Vt=R(M,Z,ee);if(M.isDepthTexture)Et=i.DEPTH_COMPONENT,a?M.type===qn?Et=i.DEPTH_COMPONENT32F:M.type===Xn?Et=i.DEPTH_COMPONENT24:M.type===li?Et=i.DEPTH24_STENCIL8:Et=i.DEPTH_COMPONENT16:M.type===qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ci&&Et===i.DEPTH_COMPONENT&&M.type!==so&&M.type!==Xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Xn,Mt=r.convert(M.type)),M.format===es&&Et===i.DEPTH_COMPONENT&&(Et=i.DEPTH_STENCIL,M.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=li,Mt=r.convert(M.type))),ce&&(ne?e.texStorage2D(i.TEXTURE_2D,1,Et,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,Et,Z.width,Z.height,0,St,Mt,null));else if(M.isDataTexture)if(kt.length>0&&ee){ne&&ce&&e.texStorage2D(i.TEXTURE_2D,Vt,Et,kt[0].width,kt[0].height);for(let st=0,L=kt.length;st<L;st++)pt=kt[st],ne?e.texSubImage2D(i.TEXTURE_2D,st,0,0,pt.width,pt.height,St,Mt,pt.data):e.texImage2D(i.TEXTURE_2D,st,Et,pt.width,pt.height,0,St,Mt,pt.data);M.generateMipmaps=!1}else ne?(ce&&e.texStorage2D(i.TEXTURE_2D,Vt,Et,Z.width,Z.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,St,Mt,Z.data)):e.texImage2D(i.TEXTURE_2D,0,Et,Z.width,Z.height,0,St,Mt,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ne&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,Et,kt[0].width,kt[0].height,Z.depth);for(let st=0,L=kt.length;st<L;st++)pt=kt[st],M.format!==Ve?St!==null?ne?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,pt.width,pt.height,Z.depth,St,pt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Et,pt.width,pt.height,Z.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,pt.width,pt.height,Z.depth,St,Mt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Et,pt.width,pt.height,Z.depth,0,St,Mt,pt.data)}else{ne&&ce&&e.texStorage2D(i.TEXTURE_2D,Vt,Et,kt[0].width,kt[0].height);for(let st=0,L=kt.length;st<L;st++)pt=kt[st],M.format!==Ve?St!==null?ne?e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,pt.width,pt.height,St,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Et,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?e.texSubImage2D(i.TEXTURE_2D,st,0,0,pt.width,pt.height,St,Mt,pt.data):e.texImage2D(i.TEXTURE_2D,st,Et,pt.width,pt.height,0,St,Mt,pt.data)}else if(M.isDataArrayTexture)ne?(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,Et,Z.width,Z.height,Z.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,St,Mt,Z.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,Z.width,Z.height,Z.depth,0,St,Mt,Z.data);else if(M.isData3DTexture)ne?(ce&&e.texStorage3D(i.TEXTURE_3D,Vt,Et,Z.width,Z.height,Z.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,St,Mt,Z.data)):e.texImage3D(i.TEXTURE_3D,0,Et,Z.width,Z.height,Z.depth,0,St,Mt,Z.data);else if(M.isFramebufferTexture){if(ce)if(ne)e.texStorage2D(i.TEXTURE_2D,Vt,Et,Z.width,Z.height);else{let st=Z.width,L=Z.height;for(let lt=0;lt<Vt;lt++)e.texImage2D(i.TEXTURE_2D,lt,Et,st,L,0,St,Mt,null),st>>=1,L>>=1}}else if(kt.length>0&&ee){ne&&ce&&e.texStorage2D(i.TEXTURE_2D,Vt,Et,kt[0].width,kt[0].height);for(let st=0,L=kt.length;st<L;st++)pt=kt[st],ne?e.texSubImage2D(i.TEXTURE_2D,st,0,0,St,Mt,pt):e.texImage2D(i.TEXTURE_2D,st,Et,St,Mt,pt);M.generateMipmaps=!1}else ne?(ce&&e.texStorage2D(i.TEXTURE_2D,Vt,Et,Z.width,Z.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Mt,Z)):e.texImage2D(i.TEXTURE_2D,0,Et,St,Mt,Z);x(M,ee)&&v(J),mt.__version=Q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function xt(T,M,O){if(M.image.length!==6)return;const J=K(T,M),Y=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const Q=n.get(Y);if(Y.version!==Q.__version||J===!0){e.activeTexture(i.TEXTURE0+O);const mt=oe.getPrimaries(oe.workingColorSpace),ot=M.colorSpace===Ne?null:oe.getPrimaries(M.colorSpace),gt=M.colorSpace===Ne||mt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Tt=M.isCompressedTexture||M.image[0].isCompressedTexture,Ot=M.image[0]&&M.image[0].isDataTexture,Z=[];for(let st=0;st<6;st++)!Tt&&!Ot?Z[st]=_(M.image[st],!1,!0,s.maxCubemapSize):Z[st]=Ot?M.image[st].image:M.image[st],Z[st]=Dt(M,Z[st]);const ee=Z[0],St=m(ee)||a,Mt=r.convert(M.format,M.colorSpace),Et=r.convert(M.type),pt=b(M.internalFormat,Mt,Et,M.colorSpace),kt=a&&M.isVideoTexture!==!0,ne=Q.__version===void 0||J===!0;let ce=R(M,ee,St);V(i.TEXTURE_CUBE_MAP,M,St);let Vt;if(Tt){kt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ce,pt,ee.width,ee.height);for(let st=0;st<6;st++){Vt=Z[st].mipmaps;for(let L=0;L<Vt.length;L++){const lt=Vt[L];M.format!==Ve?Mt!==null?kt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,L,0,0,lt.width,lt.height,Mt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,L,pt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,L,0,0,lt.width,lt.height,Mt,Et,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,L,pt,lt.width,lt.height,0,Mt,Et,lt.data)}}}else{Vt=M.mipmaps,kt&&ne&&(Vt.length>0&&ce++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ce,pt,Z[0].width,Z[0].height));for(let st=0;st<6;st++)if(Ot){kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Z[st].width,Z[st].height,Mt,Et,Z[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,pt,Z[st].width,Z[st].height,0,Mt,Et,Z[st].data);for(let L=0;L<Vt.length;L++){const ct=Vt[L].image[st].image;kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,L+1,0,0,ct.width,ct.height,Mt,Et,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,L+1,pt,ct.width,ct.height,0,Mt,Et,ct.data)}}else{kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Mt,Et,Z[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,pt,Mt,Et,Z[st]);for(let L=0;L<Vt.length;L++){const lt=Vt[L];kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,L+1,0,0,Mt,Et,lt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,L+1,pt,Mt,Et,lt.image[st])}}}x(M,St)&&v(i.TEXTURE_CUBE_MAP),Q.__version=Y.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function _t(T,M,O,J,Y,Q){const mt=r.convert(O.format,O.colorSpace),ot=r.convert(O.type),gt=b(O.internalFormat,mt,ot,O.colorSpace);if(!n.get(M).__hasExternalTextures){const Ot=Math.max(1,M.width>>Q),Z=Math.max(1,M.height>>Q);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,Q,gt,Ot,Z,M.depth,0,mt,ot,null):e.texImage2D(Y,Q,gt,Ot,Z,0,mt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),ut(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Y,n.get(O).__webglTexture,0,yt(M)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Y,n.get(O).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(T,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let J=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(O||ut(M)){const Y=M.depthTexture;Y&&Y.isDepthTexture&&(Y.type===qn?J=i.DEPTH_COMPONENT32F:Y.type===Xn&&(J=i.DEPTH_COMPONENT24));const Q=yt(M);ut(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,J,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,J,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,J,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){const J=yt(M);O&&ut(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,M.width,M.height):ut(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const J=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Y=0;Y<J.length;Y++){const Q=J[Y],mt=r.convert(Q.format,Q.colorSpace),ot=r.convert(Q.type),gt=b(Q.internalFormat,mt,ot,Q.colorSpace),Tt=yt(M);O&&ut(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,gt,M.width,M.height):ut(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,gt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,gt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),P(M.depthTexture,0);const J=n.get(M.depthTexture).__webglTexture,Y=yt(M);if(M.depthTexture.format===ci)ut(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(M.depthTexture.format===es)ut(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Pt(T){const M=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ft(M.__webglFramebuffer,T)}else if(O){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]=i.createRenderbuffer(),Nt(M.__webglDepthbuffer[J],T,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Nt(M.__webglDepthbuffer,T,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(T,M,O){const J=n.get(T);M!==void 0&&_t(J.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Pt(T)}function F(T){const M=T.texture,O=n.get(T),J=n.get(M);T.addEventListener("dispose",I),T.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=M.version,o.memory.textures++);const Y=T.isWebGLCubeRenderTarget===!0,Q=T.isWebGLMultipleRenderTargets===!0,mt=m(T)||a;if(Y){O.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(a&&M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[ot]=[];for(let gt=0;gt<M.mipmaps.length;gt++)O.__webglFramebuffer[ot][gt]=i.createFramebuffer()}else O.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let ot=0;ot<M.mipmaps.length;ot++)O.__webglFramebuffer[ot]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Q)if(s.drawBuffers){const ot=T.texture;for(let gt=0,Tt=ot.length;gt<Tt;gt++){const Ot=n.get(ot[gt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&ut(T)===!1){const ot=Q?M:[M];O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let gt=0;gt<ot.length;gt++){const Tt=ot[gt];O.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[gt]);const Ot=r.convert(Tt.format,Tt.colorSpace),Z=r.convert(Tt.type),ee=b(Tt.internalFormat,Ot,Z,Tt.colorSpace,T.isXRRenderTarget===!0),St=yt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,ee,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,O.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Nt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),V(i.TEXTURE_CUBE_MAP,M,mt);for(let ot=0;ot<6;ot++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)_t(O.__webglFramebuffer[ot][gt],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,gt);else _t(O.__webglFramebuffer[ot],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);x(M,mt)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){const ot=T.texture;for(let gt=0,Tt=ot.length;gt<Tt;gt++){const Ot=ot[gt],Z=n.get(Ot);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture),V(i.TEXTURE_2D,Ot,mt),_t(O.__webglFramebuffer,T,Ot,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),x(Ot,mt)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ot=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,J.__webglTexture),V(ot,M,mt),a&&M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)_t(O.__webglFramebuffer[gt],T,M,i.COLOR_ATTACHMENT0,ot,gt);else _t(O.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,ot,0);x(M,mt)&&v(ot),e.unbindTexture()}T.depthBuffer&&Pt(T)}function ue(T){const M=m(T)||a,O=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let J=0,Y=O.length;J<Y;J++){const Q=O[J];if(x(Q,M)){const mt=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ot=n.get(Q).__webglTexture;e.bindTexture(mt,ot),v(mt),e.unbindTexture()}}}function At(T){if(a&&T.samples>0&&ut(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],O=T.width,J=T.height;let Y=i.COLOR_BUFFER_BIT;const Q=[],mt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=n.get(T),gt=T.isWebGLMultipleRenderTargets===!0;if(gt)for(let Tt=0;Tt<M.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let Tt=0;Tt<M.length;Tt++){Q.push(i.COLOR_ATTACHMENT0+Tt),T.depthBuffer&&Q.push(mt);const Ot=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(Ot===!1&&(T.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),gt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ot.__webglColorRenderbuffer[Tt]),Ot===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[mt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[mt])),gt){const Z=n.get(M[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,O,J,0,0,O,J,Y,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Tt=0;Tt<M.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,ot.__webglColorRenderbuffer[Tt]);const Ot=n.get(M[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function yt(T){return Math.min(s.maxSamples,T.samples)}function ut(T){const M=n.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function qt(T){const M=o.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function Dt(T,M){const O=T.colorSpace,J=T.format,Y=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ka||O!==bn&&O!==Ne&&(oe.getTransfer(O)===he?a===!1?t.has("EXT_sRGB")===!0&&J===Ve?(T.format=ka,T.minFilter=He,T.generateMipmaps=!1):M=Zc.sRGBToLinear(M):(J!==Ve||Y!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}this.allocateTextureUnit=D,this.resetTextureUnits=j,this.setTexture2D=P,this.setTexture2DArray=X,this.setTexture3D=N,this.setTextureCube=H,this.rebindTextures=te,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=ut}function pg(i,t,e){const n=e.isWebGL2;function s(r,o=Ne){let a;const l=oe.getTransfer(o);if(r===Mn)return i.UNSIGNED_BYTE;if(r===Hc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Gc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===zu)return i.BYTE;if(r===Hu)return i.SHORT;if(r===so)return i.UNSIGNED_SHORT;if(r===zc)return i.INT;if(r===Xn)return i.UNSIGNED_INT;if(r===qn)return i.FLOAT;if(r===ts)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Gu)return i.ALPHA;if(r===Ve)return i.RGBA;if(r===Vu)return i.LUMINANCE;if(r===Wu)return i.LUMINANCE_ALPHA;if(r===ci)return i.DEPTH_COMPONENT;if(r===es)return i.DEPTH_STENCIL;if(r===ka)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Xu)return i.RED;if(r===Vc)return i.RED_INTEGER;if(r===qu)return i.RG;if(r===Wc)return i.RG_INTEGER;if(r===Xc)return i.RGBA_INTEGER;if(r===Xr||r===qr||r===$r||r===Yr)if(l===he)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Xr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Xr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$r)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Po||r===Do||r===Io||r===Uo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Po)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Do)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Io)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Uo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===No||r===ko)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===No)return l===he?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ko)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fo||r===Oo||r===Bo||r===zo||r===Ho||r===Go||r===Vo||r===Wo||r===Xo||r===qo||r===$o||r===Yo||r===jo||r===Ko)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Fo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Oo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ho)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Go)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$o)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ko)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jr||r===Zo||r===Jo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===jr)return l===he?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$u||r===Qo||r===tl||r===el)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===jr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Qo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===el)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===li?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class mg extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class yn extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gg={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new yn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class _g extends is{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=e.getContextAttributes();let m=null,p=null;const x=[],v=[],b=new Xt;let R=null;const w=new nn;w.layers.enable(1),w.viewport=new Ae;const S=new nn;S.layers.enable(2),S.viewport=new Ae;const I=[w,S],y=new mg;y.layers.enable(1),y.layers.enable(2);let A=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=x[V];return K===void 0&&(K=new va,x[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=x[V];return K===void 0&&(K=new va,x[V]=K),K.getGripSpace()},this.getHand=function(V){let K=x[V];return K===void 0&&(K=new va,x[V]=K),K.getHandSpace()};function q(V){const K=v.indexOf(V.inputSource);if(K===-1)return;const ht=x[K];ht!==void 0&&(ht.update(V.inputSource,V.frame,c||o),ht.dispatchEvent({type:V.type,data:V.inputSource}))}function j(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",D);for(let V=0;V<x.length;V++){const K=v[V];K!==null&&(v[V]=null,x[V].disconnect(K))}A=null,G=null,t.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",j),s.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(b),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Nn(f.framebufferWidth,f.framebufferHeight,{format:Ve,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,ht=null,xt=null;_.depth&&(xt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=_.stencil?es:ci,ht=_.stencil?li:Xn);const _t={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(_t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new Nn(d.textureWidth,d.textureHeight,{format:Ve,type:Mn,depthTexture:new hh(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Nt=t.properties.get(p);Nt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(V){for(let K=0;K<V.removed.length;K++){const ht=V.removed[K],xt=v.indexOf(ht);xt>=0&&(v[xt]=null,x[xt].disconnect(ht))}for(let K=0;K<V.added.length;K++){const ht=V.added[K];let xt=v.indexOf(ht);if(xt===-1){for(let Nt=0;Nt<x.length;Nt++)if(Nt>=v.length){v.push(ht),xt=Nt;break}else if(v[Nt]===null){v[Nt]=ht,xt=Nt;break}if(xt===-1)break}const _t=x[xt];_t&&_t.connect(ht)}}const C=new U,P=new U;function X(V,K,ht){C.setFromMatrixPosition(K.matrixWorld),P.setFromMatrixPosition(ht.matrixWorld);const xt=C.distanceTo(P),_t=K.projectionMatrix.elements,Nt=ht.projectionMatrix.elements,Ft=_t[14]/(_t[10]-1),Pt=_t[14]/(_t[10]+1),te=(_t[9]+1)/_t[5],F=(_t[9]-1)/_t[5],ue=(_t[8]-1)/_t[0],At=(Nt[8]+1)/Nt[0],yt=Ft*ue,ut=Ft*At,qt=xt/(-ue+At),Dt=qt*-ue;K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Dt),V.translateZ(qt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const T=Ft+qt,M=Pt+qt,O=yt-Dt,J=ut+(xt-Dt),Y=te*Pt/M*T,Q=F*Pt/M*T;V.projectionMatrix.makePerspective(O,J,Y,Q,T,M),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function N(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;y.near=S.near=w.near=V.near,y.far=S.far=w.far=V.far,(A!==y.near||G!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,G=y.far);const K=V.parent,ht=y.cameras;N(y,K);for(let xt=0;xt<ht.length;xt++)N(ht[xt],K);ht.length===2?X(y,w,S):y.projectionMatrix.copy(w.projectionMatrix),H(V,y,K)};function H(V,K,ht){ht===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(ht.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Es*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)};let $=null;function tt(V,K){if(h=K.getViewerPose(c||o),g=K,h!==null){const ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let xt=!1;ht.length!==y.cameras.length&&(y.cameras.length=0,xt=!0);for(let _t=0;_t<ht.length;_t++){const Nt=ht[_t];let Ft=null;if(f!==null)Ft=f.getViewport(Nt);else{const te=u.getViewSubImage(d,Nt);Ft=te.viewport,_t===0&&(t.setRenderTargetTextures(p,te.colorTexture,d.ignoreDepthValues?void 0:te.depthStencilTexture),t.setRenderTarget(p))}let Pt=I[_t];Pt===void 0&&(Pt=new nn,Pt.layers.enable(_t),Pt.viewport=new Ae,I[_t]=Pt),Pt.matrix.fromArray(Nt.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Nt.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),_t===0&&(y.matrix.copy(Pt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),xt===!0&&y.cameras.push(Pt)}}for(let ht=0;ht<x.length;ht++){const xt=v[ht],_t=x[ht];xt!==null&&_t!==void 0&&_t.update(xt,K,c||o)}$&&$(V,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const et=new ch;et.setAnimationLoop(tt),this.setAnimationLoop=function(V){$=V},this.dispose=function(){}}}function vg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,v,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xg(i,t,e,n){let s={},r={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const b=v.program;n.uniformBlockBinding(x,b)}function c(x,v){let b=s[x.id];b===void 0&&(g(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",m));const R=v.program;n.updateUBOMapping(x,R);const w=t.render.frame;r[x.id]!==w&&(d(x),r[x.id]=w)}function h(x){const v=u();x.__bindingPointIndex=v;const b=i.createBuffer(),R=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,b),b}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=s[x.id],b=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,S=b.length;w<S;w++){const I=Array.isArray(b[w])?b[w]:[b[w]];for(let y=0,A=I.length;y<A;y++){const G=I[y];if(f(G,w,y,R)===!0){const q=G.__offset,j=Array.isArray(G.value)?G.value:[G.value];let D=0;for(let C=0;C<j.length;C++){const P=j[C],X=_(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,q+D,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,D),D+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,G.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,v,b,R){const w=x.value,S=v+"_"+b;if(R[S]===void 0)return typeof w=="number"||typeof w=="boolean"?R[S]=w:R[S]=w.clone(),!0;{const I=R[S];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return R[S]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(x){const v=x.uniforms;let b=0;const R=16;for(let S=0,I=v.length;S<I;S++){const y=Array.isArray(v[S])?v[S]:[v[S]];for(let A=0,G=y.length;A<G;A++){const q=y[A],j=Array.isArray(q.value)?q.value:[q.value];for(let D=0,C=j.length;D<C;D++){const P=j[D],X=_(P),N=b%R;N!==0&&R-N<X.boundary&&(b+=R-N),q.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=b,b+=X.storage}}}const w=b%R;return w>0&&(b+=R-w),x.__size=b,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class _h{constructor(t={}){const{canvas:e=vd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this._useLegacyLights=!1,this.toneMapping=$n,this.toneMappingExposure=1;const v=this;let b=!1,R=0,w=0,S=null,I=-1,y=null;const A=new Ae,G=new Ae;let q=null;const j=new Ct(0);let D=0,C=e.width,P=e.height,X=1,N=null,H=null;const $=new Ae(0,0,C,P),tt=new Ae(0,0,C,P);let et=!1;const V=new co;let K=!1,ht=!1,xt=null;const _t=new ge,Nt=new Xt,Ft=new U,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return S===null?X:1}let F=n;function ue(E,k){for(let z=0;z<E.length;z++){const W=E[z],B=e.getContext(W,k);if(B!==null)return B}return null}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${io}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",lt,!1),F===null){const k=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&k.shift(),F=ue(k,E),F===null)throw ue(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let At,yt,ut,qt,Dt,T,M,O,J,Y,Q,mt,ot,gt,Tt,Ot,Z,ee,St,Mt,Et,pt,kt,ne;function ce(){At=new Lm(F),yt=new Em(F,At,t),At.init(yt),pt=new pg(F,At,yt),ut=new dg(F,At,yt),qt=new Im(F),Dt=new Q0,T=new fg(F,At,ut,Dt,yt,pt,qt),M=new Tm(v),O=new Cm(v),J=new zd(F,yt),kt=new bm(F,At,J,yt),Y=new Pm(F,J,qt,kt),Q=new Fm(F,Y,J,qt),St=new km(F,yt,T),Ot=new wm(Dt),mt=new J0(v,M,O,At,yt,kt,Ot),ot=new vg(v,Dt),gt=new eg,Tt=new og(At,yt),ee=new Mm(v,M,O,ut,Q,d,l),Z=new ug(v,Q,yt),ne=new xg(F,qt,yt,ut),Mt=new Sm(F,At,qt,yt),Et=new Dm(F,At,qt,yt),qt.programs=mt.programs,v.capabilities=yt,v.extensions=At,v.properties=Dt,v.renderLists=gt,v.shadowMap=Z,v.state=ut,v.info=qt}ce();const Vt=new _g(v,F);this.xr=Vt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=At.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=At.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(C,P,!1))},this.getSize=function(E){return E.set(C,P)},this.setSize=function(E,k,z=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,P=k,e.width=Math.floor(E*X),e.height=Math.floor(k*X),z===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(C*X,P*X).floor()},this.setDrawingBufferSize=function(E,k,z){C=E,P=k,X=z,e.width=Math.floor(E*z),e.height=Math.floor(k*z),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,k,z,W){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,k,z,W),ut.viewport(A.copy($).multiplyScalar(X).floor())},this.getScissor=function(E){return E.copy(tt)},this.setScissor=function(E,k,z,W){E.isVector4?tt.set(E.x,E.y,E.z,E.w):tt.set(E,k,z,W),ut.scissor(G.copy(tt).multiplyScalar(X).floor())},this.getScissorTest=function(){return et},this.setScissorTest=function(E){ut.setScissorTest(et=E)},this.setOpaqueSort=function(E){N=E},this.setTransparentSort=function(E){H=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,k=!0,z=!0){let W=0;if(E){let B=!1;if(S!==null){const ft=S.texture.format;B=ft===Xc||ft===Wc||ft===Vc}if(B){const ft=S.texture.type,bt=ft===Mn||ft===Xn||ft===so||ft===li||ft===Hc||ft===Gc,It=ee.getClearColor(),Ut=ee.getClearAlpha(),jt=It.r,Ht=It.g,Wt=It.b;bt?(f[0]=jt,f[1]=Ht,f[2]=Wt,f[3]=Ut,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=jt,g[1]=Ht,g[2]=Wt,g[3]=Ut,F.clearBufferiv(F.COLOR,0,g))}else W|=F.COLOR_BUFFER_BIT}k&&(W|=F.DEPTH_BUFFER_BIT),z&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),gt.dispose(),Tt.dispose(),Dt.dispose(),M.dispose(),O.dispose(),Q.dispose(),kt.dispose(),ne.dispose(),mt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",ke),Vt.removeEventListener("sessionend",le),xt&&(xt.dispose(),xt=null),Fe.stop()};function st(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=qt.autoReset,k=Z.enabled,z=Z.autoUpdate,W=Z.needsUpdate,B=Z.type;ce(),qt.autoReset=E,Z.enabled=k,Z.autoUpdate=z,Z.needsUpdate=W,Z.type=B}function lt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ct(E){const k=E.target;k.removeEventListener("dispose",ct),Rt(k)}function Rt(E){wt(E),Dt.remove(E)}function wt(E){const k=Dt.get(E).programs;k!==void 0&&(k.forEach(function(z){mt.releaseProgram(z)}),E.isShaderMaterial&&mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,z,W,B,ft){k===null&&(k=Pt);const bt=B.isMesh&&B.matrixWorld.determinant()<0,It=eu(E,k,z,W,B);ut.setMaterial(W,bt);let Ut=z.index,jt=1;if(W.wireframe===!0){if(Ut=Y.getWireframeAttribute(z),Ut===void 0)return;jt=2}const Ht=z.drawRange,Wt=z.attributes.position;let _e=Ht.start*jt,je=(Ht.start+Ht.count)*jt;ft!==null&&(_e=Math.max(_e,ft.start*jt),je=Math.min(je,(ft.start+ft.count)*jt)),Ut!==null?(_e=Math.max(_e,0),je=Math.min(je,Ut.count)):Wt!=null&&(_e=Math.max(_e,0),je=Math.min(je,Wt.count));const Ee=je-_e;if(Ee<0||Ee===1/0)return;kt.setup(B,W,It,z,Ut);let Sn,de=Mt;if(Ut!==null&&(Sn=J.get(Ut),de=Et,de.setIndex(Sn)),B.isMesh)W.wireframe===!0?(ut.setLineWidth(W.wireframeLinewidth*te()),de.setMode(F.LINES)):de.setMode(F.TRIANGLES);else if(B.isLine){let Kt=W.linewidth;Kt===void 0&&(Kt=1),ut.setLineWidth(Kt*te()),B.isLineSegments?de.setMode(F.LINES):B.isLineLoop?de.setMode(F.LINE_LOOP):de.setMode(F.LINE_STRIP)}else B.isPoints?de.setMode(F.POINTS):B.isSprite&&de.setMode(F.TRIANGLES);if(B.isBatchedMesh)de.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)de.renderInstances(_e,Ee,B.count);else if(z.isInstancedBufferGeometry){const Kt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Br=Math.min(z.instanceCount,Kt);de.renderInstances(_e,Ee,Br)}else de.render(_e,Ee)};function re(E,k,z){E.transparent===!0&&E.side===Pe&&E.forceSinglePass===!1?(E.side=We,E.needsUpdate=!0,Rs(E,k,z),E.side=Un,E.needsUpdate=!0,Rs(E,k,z),E.side=Pe):Rs(E,k,z)}this.compile=function(E,k,z=null){z===null&&(z=E),m=Tt.get(z),m.init(),x.push(m),z.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),E!==z&&E.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(v._useLegacyLights);const W=new Set;return E.traverse(function(B){const ft=B.material;if(ft)if(Array.isArray(ft))for(let bt=0;bt<ft.length;bt++){const It=ft[bt];re(It,z,B),W.add(It)}else re(ft,z,B),W.add(ft)}),x.pop(),m=null,W},this.compileAsync=function(E,k,z=null){const W=this.compile(E,k,z);return new Promise(B=>{function ft(){if(W.forEach(function(bt){Dt.get(bt).currentProgram.isReady()&&W.delete(bt)}),W.size===0){B(E);return}setTimeout(ft,10)}At.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let ie=null;function Se(E){ie&&ie(E)}function ke(){Fe.stop()}function le(){Fe.start()}const Fe=new ch;Fe.setAnimationLoop(Se),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(E){ie=E,Vt.setAnimationLoop(E),E===null?Fe.stop():Fe.start()},Vt.addEventListener("sessionstart",ke),Vt.addEventListener("sessionend",le),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(k),k=Vt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,k,S),m=Tt.get(E,x.length),m.init(),x.push(m),_t.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),V.setFromProjectionMatrix(_t),ht=this.localClippingEnabled,K=Ot.init(this.clippingPlanes,ht),_=gt.get(E,p.length),_.init(),p.push(_),fn(E,k,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(N,H),this.info.render.frame++,K===!0&&Ot.beginShadows();const z=m.state.shadowsArray;if(Z.render(z,E,k),K===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(_,E),m.setupLights(v._useLegacyLights),k.isArrayCamera){const W=k.cameras;for(let B=0,ft=W.length;B<ft;B++){const bt=W[B];_o(_,E,bt,bt.viewport)}}else _o(_,E,k);S!==null&&(T.updateMultisampleRenderTarget(S),T.updateRenderTargetMipmap(S)),E.isScene===!0&&E.onAfterRender(v,E,k),kt.resetDefaultState(),I=-1,y=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function fn(E,k,z,W){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){W&&Ft.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);const bt=Q.update(E),It=E.material;It.visible&&_.push(E,bt,It,z,Ft.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||V.intersectsObject(E))){const bt=Q.update(E),It=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ft.copy(E.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ft.copy(bt.boundingSphere.center)),Ft.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(It)){const Ut=bt.groups;for(let jt=0,Ht=Ut.length;jt<Ht;jt++){const Wt=Ut[jt],_e=It[Wt.materialIndex];_e&&_e.visible&&_.push(E,bt,_e,z,Ft.z,Wt)}}else It.visible&&_.push(E,bt,It,z,Ft.z,null)}}const ft=E.children;for(let bt=0,It=ft.length;bt<It;bt++)fn(ft[bt],k,z,W)}function _o(E,k,z,W){const B=E.opaque,ft=E.transmissive,bt=E.transparent;m.setupLightsView(z),K===!0&&Ot.setGlobalState(v.clippingPlanes,z),ft.length>0&&tu(B,ft,k,z),W&&ut.viewport(A.copy(W)),B.length>0&&As(B,k,z),ft.length>0&&As(ft,k,z),bt.length>0&&As(bt,k,z),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function tu(E,k,z,W){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const ft=yt.isWebGL2;xt===null&&(xt=new Nn(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")?ts:Mn,minFilter:ui,samples:ft?4:0})),v.getDrawingBufferSize(Nt),ft?xt.setSize(Nt.x,Nt.y):xt.setSize(Er(Nt.x),Er(Nt.y));const bt=v.getRenderTarget();v.setRenderTarget(xt),v.getClearColor(j),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const It=v.toneMapping;v.toneMapping=$n,As(E,z,W),T.updateMultisampleRenderTarget(xt),T.updateRenderTargetMipmap(xt);let Ut=!1;for(let jt=0,Ht=k.length;jt<Ht;jt++){const Wt=k[jt],_e=Wt.object,je=Wt.geometry,Ee=Wt.material,Sn=Wt.group;if(Ee.side===Pe&&_e.layers.test(W.layers)){const de=Ee.side;Ee.side=We,Ee.needsUpdate=!0,vo(_e,z,W,je,Ee,Sn),Ee.side=de,Ee.needsUpdate=!0,Ut=!0}}Ut===!0&&(T.updateMultisampleRenderTarget(xt),T.updateRenderTargetMipmap(xt)),v.setRenderTarget(bt),v.setClearColor(j,D),v.toneMapping=It}function As(E,k,z){const W=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ft=E.length;B<ft;B++){const bt=E[B],It=bt.object,Ut=bt.geometry,jt=W===null?bt.material:W,Ht=bt.group;It.layers.test(z.layers)&&vo(It,k,z,Ut,jt,Ht)}}function vo(E,k,z,W,B,ft){E.onBeforeRender(v,k,z,W,B,ft),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(v,k,z,W,E,ft),B.transparent===!0&&B.side===Pe&&B.forceSinglePass===!1?(B.side=We,B.needsUpdate=!0,v.renderBufferDirect(z,k,W,B,E,ft),B.side=Un,B.needsUpdate=!0,v.renderBufferDirect(z,k,W,B,E,ft),B.side=Pe):v.renderBufferDirect(z,k,W,B,E,ft),E.onAfterRender(v,k,z,W,B,ft)}function Rs(E,k,z){k.isScene!==!0&&(k=Pt);const W=Dt.get(E),B=m.state.lights,ft=m.state.shadowsArray,bt=B.state.version,It=mt.getParameters(E,B.state,ft,k,z),Ut=mt.getProgramCacheKey(It);let jt=W.programs;W.environment=E.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(E.isMeshStandardMaterial?O:M).get(E.envMap||W.environment),jt===void 0&&(E.addEventListener("dispose",ct),jt=new Map,W.programs=jt);let Ht=jt.get(Ut);if(Ht!==void 0){if(W.currentProgram===Ht&&W.lightsStateVersion===bt)return yo(E,It),Ht}else It.uniforms=mt.getUniforms(E),E.onBuild(z,It,v),E.onBeforeCompile(It,v),Ht=mt.acquireProgram(It,Ut),jt.set(Ut,Ht),W.uniforms=It.uniforms;const Wt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Wt.clippingPlanes=Ot.uniform),yo(E,It),W.needsLights=iu(E),W.lightsStateVersion=bt,W.needsLights&&(Wt.ambientLightColor.value=B.state.ambient,Wt.lightProbe.value=B.state.probe,Wt.directionalLights.value=B.state.directional,Wt.directionalLightShadows.value=B.state.directionalShadow,Wt.spotLights.value=B.state.spot,Wt.spotLightShadows.value=B.state.spotShadow,Wt.rectAreaLights.value=B.state.rectArea,Wt.ltc_1.value=B.state.rectAreaLTC1,Wt.ltc_2.value=B.state.rectAreaLTC2,Wt.pointLights.value=B.state.point,Wt.pointLightShadows.value=B.state.pointShadow,Wt.hemisphereLights.value=B.state.hemi,Wt.directionalShadowMap.value=B.state.directionalShadowMap,Wt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Wt.spotShadowMap.value=B.state.spotShadowMap,Wt.spotLightMatrix.value=B.state.spotLightMatrix,Wt.spotLightMap.value=B.state.spotLightMap,Wt.pointShadowMap.value=B.state.pointShadowMap,Wt.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Ht,W.uniformsList=null,Ht}function xo(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=dr.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function yo(E,k){const z=Dt.get(E);z.outputColorSpace=k.outputColorSpace,z.batching=k.batching,z.instancing=k.instancing,z.instancingColor=k.instancingColor,z.skinning=k.skinning,z.morphTargets=k.morphTargets,z.morphNormals=k.morphNormals,z.morphColors=k.morphColors,z.morphTargetsCount=k.morphTargetsCount,z.numClippingPlanes=k.numClippingPlanes,z.numIntersection=k.numClipIntersection,z.vertexAlphas=k.vertexAlphas,z.vertexTangents=k.vertexTangents,z.toneMapping=k.toneMapping}function eu(E,k,z,W,B){k.isScene!==!0&&(k=Pt),T.resetTextureUnits();const ft=k.fog,bt=W.isMeshStandardMaterial?k.environment:null,It=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:bn,Ut=(W.isMeshStandardMaterial?O:M).get(W.envMap||bt),jt=W.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ht=!!z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Wt=!!z.morphAttributes.position,_e=!!z.morphAttributes.normal,je=!!z.morphAttributes.color;let Ee=$n;W.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Ee=v.toneMapping);const Sn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,de=Sn!==void 0?Sn.length:0,Kt=Dt.get(W),Br=m.state.lights;if(K===!0&&(ht===!0||E!==y)){const tn=E===y&&W.id===I;Ot.setState(W,E,tn)}let fe=!1;W.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Br.state.version||Kt.outputColorSpace!==It||B.isBatchedMesh&&Kt.batching===!1||!B.isBatchedMesh&&Kt.batching===!0||B.isInstancedMesh&&Kt.instancing===!1||!B.isInstancedMesh&&Kt.instancing===!0||B.isSkinnedMesh&&Kt.skinning===!1||!B.isSkinnedMesh&&Kt.skinning===!0||B.isInstancedMesh&&Kt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Kt.instancingColor===!1&&B.instanceColor!==null||Kt.envMap!==Ut||W.fog===!0&&Kt.fog!==ft||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Ot.numPlanes||Kt.numIntersection!==Ot.numIntersection)||Kt.vertexAlphas!==jt||Kt.vertexTangents!==Ht||Kt.morphTargets!==Wt||Kt.morphNormals!==_e||Kt.morphColors!==je||Kt.toneMapping!==Ee||yt.isWebGL2===!0&&Kt.morphTargetsCount!==de)&&(fe=!0):(fe=!0,Kt.__version=W.version);let jn=Kt.currentProgram;fe===!0&&(jn=Rs(W,k,B));let Mo=!1,os=!1,zr=!1;const De=jn.getUniforms(),Kn=Kt.uniforms;if(ut.useProgram(jn.program)&&(Mo=!0,os=!0,zr=!0),W.id!==I&&(I=W.id,os=!0),Mo||y!==E){De.setValue(F,"projectionMatrix",E.projectionMatrix),De.setValue(F,"viewMatrix",E.matrixWorldInverse);const tn=De.map.cameraPosition;tn!==void 0&&tn.setValue(F,Ft.setFromMatrixPosition(E.matrixWorld)),yt.logarithmicDepthBuffer&&De.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&De.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,os=!0,zr=!0)}if(B.isSkinnedMesh){De.setOptional(F,B,"bindMatrix"),De.setOptional(F,B,"bindMatrixInverse");const tn=B.skeleton;tn&&(yt.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),De.setValue(F,"boneTexture",tn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(De.setOptional(F,B,"batchingTexture"),De.setValue(F,"batchingTexture",B._matricesTexture,T));const Hr=z.morphAttributes;if((Hr.position!==void 0||Hr.normal!==void 0||Hr.color!==void 0&&yt.isWebGL2===!0)&&St.update(B,z,jn),(os||Kt.receiveShadow!==B.receiveShadow)&&(Kt.receiveShadow=B.receiveShadow,De.setValue(F,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Kn.envMap.value=Ut,Kn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),os&&(De.setValue(F,"toneMappingExposure",v.toneMappingExposure),Kt.needsLights&&nu(Kn,zr),ft&&W.fog===!0&&ot.refreshFogUniforms(Kn,ft),ot.refreshMaterialUniforms(Kn,W,X,P,xt),dr.upload(F,xo(Kt),Kn,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(dr.upload(F,xo(Kt),Kn,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&De.setValue(F,"center",B.center),De.setValue(F,"modelViewMatrix",B.modelViewMatrix),De.setValue(F,"normalMatrix",B.normalMatrix),De.setValue(F,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const tn=W.uniformsGroups;for(let Gr=0,su=tn.length;Gr<su;Gr++)if(yt.isWebGL2){const bo=tn[Gr];ne.update(bo,jn),ne.bind(bo,jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jn}function nu(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function iu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,k,z){Dt.get(E.texture).__webglTexture=k,Dt.get(E.depthTexture).__webglTexture=z;const W=Dt.get(E);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=z===void 0,W.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){const z=Dt.get(E);z.__webglFramebuffer=k,z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,z=0){S=E,R=k,w=z;let W=!0,B=null,ft=!1,bt=!1;if(E){const Ut=Dt.get(E);Ut.__useDefaultFramebuffer!==void 0?(ut.bindFramebuffer(F.FRAMEBUFFER,null),W=!1):Ut.__webglFramebuffer===void 0?T.setupRenderTarget(E):Ut.__hasExternalTextures&&T.rebindTextures(E,Dt.get(E.texture).__webglTexture,Dt.get(E.depthTexture).__webglTexture);const jt=E.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(bt=!0);const Ht=Dt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ht[k])?B=Ht[k][z]:B=Ht[k],ft=!0):yt.isWebGL2&&E.samples>0&&T.useMultisampledRTT(E)===!1?B=Dt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ht)?B=Ht[z]:B=Ht,A.copy(E.viewport),G.copy(E.scissor),q=E.scissorTest}else A.copy($).multiplyScalar(X).floor(),G.copy(tt).multiplyScalar(X).floor(),q=et;if(ut.bindFramebuffer(F.FRAMEBUFFER,B)&&yt.drawBuffers&&W&&ut.drawBuffers(E,B),ut.viewport(A),ut.scissor(G),ut.setScissorTest(q),ft){const Ut=Dt.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ut.__webglTexture,z)}else if(bt){const Ut=Dt.get(E.texture),jt=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.__webglTexture,z||0,jt)}I=-1},this.readRenderTargetPixels=function(E,k,z,W,B,ft,bt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&bt!==void 0&&(It=It[bt]),It){ut.bindFramebuffer(F.FRAMEBUFFER,It);try{const Ut=E.texture,jt=Ut.format,Ht=Ut.type;if(jt!==Ve&&pt.convert(jt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=Ht===ts&&(At.has("EXT_color_buffer_half_float")||yt.isWebGL2&&At.has("EXT_color_buffer_float"));if(Ht!==Mn&&pt.convert(Ht)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===qn&&(yt.isWebGL2||At.has("OES_texture_float")||At.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-W&&z>=0&&z<=E.height-B&&F.readPixels(k,z,W,B,pt.convert(jt),pt.convert(Ht),ft)}finally{const Ut=S!==null?Dt.get(S).__webglFramebuffer:null;ut.bindFramebuffer(F.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(E,k,z=0){const W=Math.pow(2,-z),B=Math.floor(k.image.width*W),ft=Math.floor(k.image.height*W);T.setTexture2D(k,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,E.x,E.y,B,ft),ut.unbindTexture()},this.copyTextureToTexture=function(E,k,z,W=0){const B=k.image.width,ft=k.image.height,bt=pt.convert(z.format),It=pt.convert(z.type);T.setTexture2D(z,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment),k.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,W,E.x,E.y,B,ft,bt,It,k.image.data):k.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,W,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,bt,k.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,W,E.x,E.y,bt,It,k.image),W===0&&z.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ut.unbindTexture()},this.copyTextureToTexture3D=function(E,k,z,W,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ft=E.max.x-E.min.x+1,bt=E.max.y-E.min.y+1,It=E.max.z-E.min.z+1,Ut=pt.convert(W.format),jt=pt.convert(W.type);let Ht;if(W.isData3DTexture)T.setTexture3D(W,0),Ht=F.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)T.setTexture2DArray(W,0),Ht=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Wt=F.getParameter(F.UNPACK_ROW_LENGTH),_e=F.getParameter(F.UNPACK_IMAGE_HEIGHT),je=F.getParameter(F.UNPACK_SKIP_PIXELS),Ee=F.getParameter(F.UNPACK_SKIP_ROWS),Sn=F.getParameter(F.UNPACK_SKIP_IMAGES),de=z.isCompressedTexture?z.mipmaps[B]:z.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,de.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,de.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),z.isDataTexture||z.isData3DTexture?F.texSubImage3D(Ht,B,k.x,k.y,k.z,ft,bt,It,Ut,jt,de.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ht,B,k.x,k.y,k.z,ft,bt,It,Ut,de.data)):F.texSubImage3D(Ht,B,k.x,k.y,k.z,ft,bt,It,Ut,jt,de),F.pixelStorei(F.UNPACK_ROW_LENGTH,Wt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_e),F.pixelStorei(F.UNPACK_SKIP_PIXELS,je),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ee),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Sn),B===0&&W.generateMipmaps&&F.generateMipmap(Ht),ut.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),ut.unbindTexture()},this.resetState=function(){R=0,w=0,S=null,ut.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ro?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===Ir?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?hi:$c}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===hi?Te:bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class yg extends _h{}yg.prototype.isWebGL1Renderer=!0;class Mg extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class bg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Na,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Oe=new U;class Tr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Tr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vh extends di{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Li;const ds=new U,Pi=new U,Di=new U,Ii=new Xt,fs=new Xt,xh=new ge,Js=new U,ps=new U,Qs=new U,Wl=new Xt,xa=new Xt,Xl=new Xt;class Sg extends ye{constructor(t=new vh){if(super(),this.isSprite=!0,this.type="Sprite",Li===void 0){Li=new Le;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bg(e,5);Li.setIndex([0,1,2,0,2,3]),Li.setAttribute("position",new Tr(n,3,0,!1)),Li.setAttribute("uv",new Tr(n,2,3,!1))}this.geometry=Li,this.material=t,this.center=new Xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pi.setFromMatrixScale(this.matrixWorld),xh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Di.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pi.multiplyScalar(-Di.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;tr(Js.set(-.5,-.5,0),Di,o,Pi,s,r),tr(ps.set(.5,-.5,0),Di,o,Pi,s,r),tr(Qs.set(.5,.5,0),Di,o,Pi,s,r),Wl.set(0,0),xa.set(1,0),Xl.set(1,1);let a=t.ray.intersectTriangle(Js,ps,Qs,!1,ds);if(a===null&&(tr(ps.set(-.5,.5,0),Di,o,Pi,s,r),xa.set(0,1),a=t.ray.intersectTriangle(Js,Qs,ps,!1,ds),a===null))return;const l=t.ray.origin.distanceTo(ds);l<t.near||l>t.far||e.push({distance:l,point:ds.clone(),uv:Qe.getInterpolation(ds,Js,ps,Qs,Wl,xa,Xl,new Xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function tr(i,t,e,n,s,r){Ii.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(fs.x=r*Ii.x-s*Ii.y,fs.y=s*Ii.x+r*Ii.y):fs.copy(Ii),i.copy(t),i.x+=fs.x,i.y+=fs.y,i.applyMatrix4(xh)}class kr extends Xe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=pe,h=pe,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yh extends di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ql=new U,$l=new U,Yl=new ge,ya=new oo,er=new rs;class Eg extends ye{constructor(t=new Le,e=new yh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ql.fromBufferAttribute(e,s-1),$l.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ql.distanceTo($l);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(s),er.radius+=r,t.ray.intersectsSphere(er)===!1)return;Yl.copy(s).invert(),ya.copy(t.ray).applyMatrix4(Yl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,h=new U,u=new U,d=new U,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=p,b=x-1;v<b;v+=f){const R=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(m,R),h.fromBufferAttribute(m,w),ya.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const I=t.ray.origin.distanceTo(d);I<t.near||I>t.far||e.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=p,b=x-1;v<b;v+=f){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),ya.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(d);w<t.near||w>t.far||e.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const jl=new U,Kl=new U;class wg extends Eg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)jl.fromBufferAttribute(e,s),Kl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+jl.distanceTo(Kl);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fo extends di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Zl=new ge,Ba=new oo,nr=new rs,ir=new U;class Mh extends ye{constructor(t=new Le,e=new fo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(s),nr.radius+=r,t.ray.intersectsSphere(nr)===!1)return;Zl.copy(s).invert(),Ba.copy(t.ray).applyMatrix4(Zl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);ir.fromBufferAttribute(u,m),Jl(ir,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)ir.fromBufferAttribute(u,g),Jl(ir,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jl(i,t,e,n,s,r,o){const a=Ba.distanceSqToPoint(i);if(a<e){const l=new U;Ba.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Tg extends Xe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const sr=new U,rr=new U,Ma=new U,ar=new Qe;class Ag extends Le{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(ji*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=ar;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),ar.getNormal(Ma),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const v=(x+1)%3,b=u[x],R=u[v],w=ar[h[x]],S=ar[h[v]],I=`${b}_${R}`,y=`${R}_${b}`;y in d&&d[y]?(Ma.dot(d[y].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(S.x,S.y,S.z)),d[y]=null):I in d||(d[I]={index0:c[x],index1:c[v],normal:Ma.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];sr.fromBufferAttribute(a,_),rr.fromBufferAttribute(a,m),f.push(sr.x,sr.y,sr.z),f.push(rr.x,rr.y,rr.z)}this.setAttribute("position",new Ce(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class po extends Le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new U,d=new U,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let b=0;p===0&&o===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let R=0;R<=e;R++){const w=R/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+b,1-v),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const v=h[p][x+1],b=h[p][x],R=h[p+1][x],w=h[p+1][x+1];(p!==0||o>0)&&f.push(v,b,w),(p!==n-1||l<Math.PI)&&f.push(b,R,w)}this.setIndex(f),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Rg extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ba=new ge,Ql=new U,tc=new U;class Cg{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new co,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ql.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ql),tc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tc),e.updateMatrixWorld(),ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Lg extends Cg{constructor(){super(new ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pg extends Rg{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Lg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Dg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ec(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ec();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ec(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=io);function Ig(i){const t=new _h({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!1});return t.outputColorSpace=bn,t.setClearColor(8900331,1),t.shadowMap.enabled=!1,t}function Ug(i){let t=i>>>0||2654435769;return function(){return t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296}}const Sa=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];function ms(i){return i*i*i*(i*(i*6-15)+10)}function pn(i,t,e){return i+(t-i)*e}class Vi{constructor(t=1337){const e=Ug(t),n=new Uint8Array(256);for(let s=0;s<256;s++)n[s]=s;for(let s=255;s>0;s--){const r=e()*(s+1)|0,o=n[s];n[s]=n[r],n[r]=o}this.perm=new Uint8Array(512);for(let s=0;s<512;s++)this.perm[s]=n[s&255]}perlin2(t,e){const n=Math.floor(t)&255,s=Math.floor(e)&255,r=t-Math.floor(t),o=e-Math.floor(e),a=ms(r),l=ms(o),c=this.perm,h=c[c[n]+s]%12,u=c[c[n]+s+1]%12,d=c[c[n+1]+s]%12,f=c[c[n+1]+s+1]%12,g=(p,x,v)=>Sa[p][0]*x+Sa[p][1]*v,_=pn(g(h,r,o),g(d,r-1,o),a),m=pn(g(u,r,o-1),g(f,r-1,o-1),a);return pn(_,m,l)}perlin3(t,e,n){const s=Math.floor(t)&255,r=Math.floor(e)&255,o=Math.floor(n)&255,a=t-Math.floor(t),l=e-Math.floor(e),c=n-Math.floor(n),h=ms(a),u=ms(l),d=ms(c),f=this.perm,g=f[s]+r,_=f[g]+o,m=f[g+1]+o,p=f[s+1]+r,x=f[p]+o,v=f[p+1]+o,b=j=>Sa[f[j]%12],R=(j,D,C,P)=>j[0]*D+j[1]*C+j[2]*P,w=(j,D,C,P)=>R(b(j),D,C,P),S=pn(w(_,a,l,c),w(x,a-1,l,c),h),I=pn(w(m,a,l-1,c),w(v,a-1,l-1,c),h),y=pn(S,I,u),A=pn(w(_+1,a,l,c-1),w(x+1,a-1,l,c-1),h),G=pn(w(m+1,a,l-1,c-1),w(v+1,a-1,l-1,c-1),h),q=pn(A,G,u);return pn(y,q,d)}fbm2(t,e,n=4,s=2,r=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<n;h++)l+=o*this.perlin2(t*a,e*a),c+=o,o*=r,a*=s;return l/c}fbm3(t,e,n,s=3,r=2,o=.5){let a=1,l=1,c=0,h=0;for(let u=0;u<s;u++)c+=a*this.perlin3(t*l,e*l,n*l),h+=a,a*=o,l*=r;return c/h}ridged2(t,e,n=4){let s=1,r=1,o=0,a=0;for(let l=0;l<n;l++){const c=1-Math.abs(this.perlin2(t*r,e*r));o+=s*c*c,a+=s,s*=.5,r*=2}return o/a}}function at(i,t,e=0){let n=i*374761393+t*668265263+e*1274126177;return n=(n^n>>>13)*1274126177,n=(n^n>>>16)>>>0,n/4294967296}function Ng(i,t,e,n=0){let s=i*374761393+t*1103515245+e*668265263+n*1274126177;return s=(s^s>>>13)*1274126177,s=(s^s>>>16)>>>0,s/4294967296}function nc(i){const t=String(i).trim();if(t!==""&&!Number.isNaN(Number(t)))return Math.abs(Math.trunc(Number(t)))>>>0;let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}const vt=16,si=8,fr=vt+si*2,Zi=16,Ui=i=>i<0?0:i>255?255:i|0,ic=new Map;function bh(i){let t=ic.get(i);if(t)return t;const e=parseInt(i.slice(1),16);return t=[e>>16&255,e>>8&255,e&255],ic.set(i,t),t}function xn(i,t=0){const e=typeof i=="string"?bh(i):i;return[e[0]+t,e[1]+t,e[2]+t]}class Sh{constructor(){this.data=new Uint8ClampedArray(vt*vt*4)}set(t,e,n,s=255){if(t=t|0,e=e|0,t<0||e<0||t>=vt||e>=vt)return;const r=typeof n=="string"?bh(n):n,o=(e*vt+t)*4;this.data[o]=Ui(r[0]),this.data[o+1]=Ui(r[1]),this.data[o+2]=Ui(r[2]),this.data[o+3]=s}shade(t,e,n){if(t=t|0,e=e|0,t<0||e<0||t>=vt||e>=vt)return;const s=(e*vt+t)*4;this.data[s]=Ui(this.data[s]+n),this.data[s+1]=Ui(this.data[s+1]+n),this.data[s+2]=Ui(this.data[s+2]+n)}rect(t,e,n,s,r,o=255){for(let a=e;a<e+s;a++)for(let l=t;l<t+n;l++)this.set(l,a,r,o);return this}get(t,e){const n=((e|0)*vt+(t|0))*4;return[this.data[n],this.data[n+1],this.data[n+2],this.data[n+3]]}fill(t,e=255){for(let n=0;n<vt;n++)for(let s=0;s<vt;s++)this.set(s,n,t,e);return this}noise(t,e=0,n=8){for(let s=0;s<vt;s++)for(let r=0;r<vt;r++){const o=at(r,s,e),a=t[o*t.length|0]??t[0],l=(at(r+7,s*3+1,e+99)-.5)*n;this.set(r,s,xn(a,l))}return this}soft(t,e=0,n=8,s=5){const r=a=>a*a*(3-2*a),o=(a,l)=>at(a,l,e);for(let a=0;a<vt;a++)for(let l=0;l<vt;l++){const c=l/s,h=a/s,u=Math.floor(c),d=Math.floor(h),f=r(c-u),g=r(h-d),_=o(u,d),m=o(u+1,d),p=o(u,d+1),x=o(u+1,d+1),v=(_*(1-f)+m*f)*(1-g)+(p*(1-f)+x*f)*g,b=t[v*t.length|0]??t[0];this.set(l,a,xn(b,(v-.5)*n))}return this}grain(t=5,e=0){for(let n=0;n<vt;n++)for(let s=0;s<vt;s++)this.shade(s,n,(at(s*5+1,n*7+3,e)-.5)*t);return this}pebbles(t,e,n=0,s=2,r=16,o=-14){for(let a=0;a<e;a++){const l=1+(at(a*7+3,a*5+11,n)*(vt-2)|0),c=1+(at(a*13+5,a*3+7,n+21)*(vt-2)|0),h=1+(at(a,a+9,n+3)*s|0),u=1+(at(a+4,a*2+1,n+5)*s|0);for(let d=c;d<c+u;d++)for(let f=l;f<l+h;f++)this.set(f,d,xn(t,d===c||f===l?r:d===c+u-1||f===l+h-1?o:0))}return this}speckles(t,e,n=0,s=10){for(let r=0;r<e;r++){const o=at(r*3+1,r*7+5,n),a=at(r*13+2,r*5+9,n+1),l=(at(r,r+3,n+2)-.5)*s;this.set(o*vt|0,a*vt|0,xn(t,l))}return this}mottle(t,e=0,n=5,s=1.5,r=3.4,o=2.5){this.fill(t[0]);for(let a=1;a<t.length;a++)for(let l=0;l<n;l++){const c=e+a*97+l*13>>>0,h=at(a*7+l,l*31+a,c)*vt,u=at(l*17+a,a*13+l,c+5)*vt,d=s+at(a,l,c+9)*(r-s);for(let f=Math.floor(u-d);f<=u+d;f++)for(let g=Math.floor(h-d);g<=h+d;g++){const _=g+.5-h,m=f+.5-u,p=_*_+m*m;p>d*d||p<(d-.7)**2&&at(g*5+a,f*3+l,c+21)>.8||this.set((g%vt+vt)%vt,(f%vt+vt)%vt,t[a])}}return o&&this.grain(o,e+1009),this}blobs(t,e,n=0,s=2.6){for(let r=0;r<e;r++){const o=at(r*5+3,r*11+7,n)*vt,a=at(r*17+1,r*23+4,n+40)*vt,l=s*(.6+at(r,r*2+1,n+7)*.8);for(let c=Math.floor(a-l);c<=a+l;c++)for(let h=Math.floor(o-l);h<=o+l;h++){const u=h+.5-o,d=c+.5-a;if(u*u+d*d>l*l)continue;const f=(at(h*3,c*5,n+11)-.5)*14;this.set(h,c,xn(t,f))}}return this}border(t,e=255){for(let n=0;n<vt;n++)this.set(n,0,t,e),this.set(n,vt-1,t,e),this.set(0,n,t,e),this.set(vt-1,n,t,e);return this}clear(){return this.data.fill(0),this}}function kg(i){const t=fr*Zi,e={data:new Uint8ClampedArray(t*t*4),width:t,height:t},n=e.data;for(const s of i){const r=s.index%Zi,o=s.index/Zi|0,a=r*fr+si,l=o*fr+si;for(let c=0;c<vt;c++)for(let h=0;h<vt;h++){const u=(c*vt+h)*4,d=((l+c)*t+(a+h))*4;n[d]=s.tile.data[u],n[d+1]=s.tile.data[u+1],n[d+2]=s.tile.data[u+2],n[d+3]=s.tile.data[u+3]}for(let c=-si;c<vt+si;c++)for(let h=-si;h<vt+si;h++){if(h>=0&&h<vt&&c>=0&&c<vt)continue;const u=Math.max(0,Math.min(vt-1,h)),f=(Math.max(0,Math.min(vt-1,c))*vt+u)*4,g=((l+c)*t+(a+h))*4;if(s.tile.data[f+3]===0&&s.transparentPadding){n[g+3]=0;continue}n[g]=s.tile.data[f],n[g+1]=s.tile.data[f+1],n[g+2]=s.tile.data[f+2],n[g+3]=Math.max(n[g+3],s.tile.data[f+3])}}return e}function Fg(i,t=1){const e=document.createElement("canvas");e.width=vt*t,e.height=vt*t;const n=e.getContext("2d"),s=new ImageData(i.data,vt,vt),r=document.createElement("canvas");return r.width=vt,r.height=vt,r.getContext("2d").putImageData(s,0,0),n.imageSmoothingEnabled=!1,n.drawImage(r,0,0,e.width,e.height),e}const Bt={dirt:["#8a6647","#7f5c3e","#93704f","#75543a"],grass:["#63ad3c","#59a133","#6cba45","#4f952c"],grassDark:["#3f8327","#357021"],stone:["#8e8e8e","#878787","#949494","#7e7e7e"],cobble:["#9a9a9a","#8d8d8d","#a4a4a4","#828282"],sand:["#e2d1a4","#dbca9c","#e8d8ae","#d4c293"],sandstone:["#ddcd97","#d5c48c","#e4d6a5","#cdbd83"],gravel:["#8b8681","#827d78","#949088","#797471"],log:["#6d5335","#63492c","#77593a","#573f26"],logRing:["#a9884f","#9c7b45","#b4955c"],leaves:["#43832a","#3a7624","#4c9231","#316920","#57a238"],planks:["#bb8f56","#b0854d","#c49860","#a5793f"],water:["#3b6ecc","#3465c0","#457ad4","#2e5db8"],bedrock:["#414141","#383838","#4b4b4b","#2f2f2f"],snow:["#f6fcff","#eef7fd","#ffffff","#e4f1f9"],brick:["#a2554a","#954b41","#ac5f54"],mortar:["#c3bcb3","#cec7bf"],obsidian:["#20172f","#2a1f3d","#180f24","#3a2a55"],cactus:["#4d8f3a","#447f31","#569c42"],woolW:["#e9e9e9","#dedede","#f2f2f2"],woolR:["#b02e2e","#9c2727","#c13a3a"],woolB:["#2f4ecb","#2741b3","#3a5cdb"],woolY:["#e0c02f","#c9a926","#f0d346"],woolL:["#a6d434","#94c02a","#b6e246"],woolK:["#242424","#1b1b1b","#313131"],glow:["#f2d488","#e6c069","#f8e0a0","#d3a95d"],stoneBrick:["#949494","#8b8b8b","#9d9d9d","#7f7f7f"],podzol:["#6d5130","#634829","#785a38","#55712c"]};function Og(i){const t=new Sh;return i(t),t}function Ni(i,t=0){return i.mottle(Bt.stone,7+t,5,1.4,3,2.4).speckles("#7c7c7c",4,21+t,6)}function za(i,t,e,n,s=3,r=3){i.mottle(n,t,5,1.3,2.8,2.2),i.pebbles("#6f4f33",5,t+5,2,8,-10);for(let o=0;o<16;o++){const a=s+(at(o/2|0,1,t)*r|0);for(let l=0;l<a;l++)i.set(o,l,e[at(o/2|0,l/2|0,t+3)*e.length|0]);at(o,5,t+8)>.35&&i.set(o,a,Bt.grassDark[at(o/2|0,6,t)*2|0])}return i}const Qt={grass_top:i=>i.mottle(Bt.grass,11,5,1.6,3.4,1.8),grass_side:i=>za(i,21,Bt.grass,Bt.dirt,3,3),podzol_side:i=>za(i,62,Bt.podzol,Bt.dirt,2,2),dirt:i=>i.mottle(Bt.dirt,3,5,1.3,2.8,2.4).pebbles("#6f4f33",5,5,2,8,-12),podzol:i=>{i.mottle(Bt.podzol,61,5,1.4,3,2.2);for(let t=0;t<16;t++)t%3&&i.set(t,0,Bt.grassDark[at(t,1,63)*2|0]);return i},stone:i=>Ni(i),cobblestone:i=>{i.fill("#616161");const t=[-1,5,11,17],e=[-1,6,12,17];for(let n=0;n<e.length-1;n++)for(let s=0;s<t.length-1;s++){const r=Math.max(0,t[s]+1),o=Math.min(16,t[s+1]-1),a=Math.max(0,e[n]+1),l=Math.min(16,e[n+1]-1);for(let c=a;c<l;c++)for(let h=r;h<o;h++){let u=Bt.cobble[at(h,c,92)*Bt.cobble.length|0];(c===a||h===r)&&(u=xn(u,18)),(c===l-1||h===o-1)&&(u=xn(u,-16)),i.set(h,c,u)}}return i.grain(4,93)},stone_bricks:i=>{i.soft(Bt.stoneBrick,33,6,4).grain(3,34);for(let t=0;t<16;t++)for(let e=0;e<16;e++){const s=(t/8|0)%2?4:0;t%8===0||(e+s)%8===7?i.set(e,t,["#6f6f6f","#676767"][at(e,t,4)*2|0]):(t%8===1||(e+s)%8===6)&&i.set(e,t,"#a0a0a0")}return i},sand:i=>i.mottle(Bt.sand,18,4,1.8,3.6,1.5),sandstone_side:i=>{i.mottle(Bt.sandstone,23,4,1.8,3.6,1.6);for(let t=0;t<16;t++)for(let e=0;e<16;e++)t===0||t===15?i.set(e,t,"#c2b078"):(t===7||t===8)&&i.set(e,t,"#cbb983");return i},sandstone_top:i=>i.fill("#dbcb94").grain(5,30).border("#c2b078"),gravel:i=>{i.mottle(Bt.gravel,37,4,1.6,3.2,1.6);for(let t=0;t<15;t++){const e=at(t,3,41)*15|0,n=at(t,7,42)*15|0,s=1+(at(t,11,43)*2|0),r=1+(at(t,13,44)*2|0),o=Bt.gravel[at(t,17,45)*Bt.gravel.length|0];for(let a=0;a<r;a++)for(let l=0;l<s;l++){const c=l===0&&a===0?14:l===s-1&&a===r-1?-16:0;i.set(e+l,n+a,xn(o,c))}}return i.grain(3,46)},log_side:i=>{i.soft(Bt.log,43,6,4).grain(3,44);for(let t=0;t<16;t++){const e=at(t,0,47)>.62;for(let n=0;n<16;n++)!e&&at(t*2,n,51)<=.9||i.set(t,n,xn(["#4e3a22","#573f26"][at(t,n,5)*2|0],(at(t,n,52)-.5)*7))}return i},log_top:i=>{i.soft(Bt.logRing,53,5,4);for(let t=0;t<16;t++)for(let e=0;e<16;e++){const n=Math.hypot(e-7.5,t-7.5),s=Math.sin(n*2.1)>.2;i.set(e,t,xn(s?"#8a6a3a":"#a8874f",(at(e,t,54)-.5)*6)),n>7.2&&i.set(e,t,Bt.log[at(e,t,61)*Bt.log.length|0])}return i},leaves:i=>{i.clear(),i.mottle(Bt.leaves,66,5,1.6,3.4,2),i.blobs("#316920",5,81,2.3),i.blobs("#57a238",3,97,1.7);for(let t=0;t<16;t++)for(let e=0;e<16;e++)(e===0||t===0||e===15||t===15?at(e,t,67)>.55:at(e,t,68)>.972)&&i.set(e,t,[0,0,0],0);return i},planks:i=>{i.mottle([Bt.planks[0],Bt.planks[1]],71,4,2.2,4.2,1.6);for(let t=0;t<16;t++)for(let e=0;e<16;e++)t%4===3&&i.set(e,t,"#8a6a35");for(let t=0;t<6;t++){const e=at(t,3,73)*16|0,n=at(t,5,74)*12|0,s=2+(at(t,7,75)*3|0);if(e%4!==3)for(let r=0;r<s;r++)i.set(n+r,e,"#c69a61")}for(const t of[5,12])for(let e=0;e<16;e++)e%4!==3&&i.set(t,e,"#9c7640");return i},glass:i=>{i.clear();for(let t=0;t<16;t++)for(let e=0;e<16;e++)e===0||t===0||e===15||t===15?i.set(e,t,"#cfe9f2",255):(e-t===2||e-t===3||e-t===-8)&&(e+t)%4!==0&&i.set(e,t,"#eaf7ff",110);return i},water:i=>{i.soft(Bt.water,79,6,5).grain(3,80);for(let t=0;t<16;t++)for(let e=0;e<16;e++)Math.sin((e+t*.6)*.9)>.72&&i.set(e,t,"#5890e2");return i},bedrock:i=>i.soft(Bt.bedrock,83,10,3).grain(5,84).pebbles("#262626",8,89,2,-10,12),snow:i=>i.mottle(Bt.snow,98,4,1.8,3.4,1.2),coal_ore:i=>(Ni(i,1),i.pebbles("#242424",4,103,2,-6,-22)),iron_ore:i=>(Ni(i,2),i.pebbles("#c9915f",4,107,2,18,-16)),gold_ore:i=>(Ni(i,3),i.pebbles("#f5d33c",4,109,2,20,-16)),diamond_ore:i=>(Ni(i,4),i.pebbles("#4fe3dd",4,113,2,22,-14)),redstone_ore:i=>(Ni(i,5),i.pebbles("#c02b2b",5,127,2,16,-18)),bricks:i=>{i.soft(Bt.brick,131,6,4).grain(3,132);for(let t=0;t<16;t++)for(let e=0;e<16;e++){const s=(t/4|0)%2?4:0;(t%4===0||(e+s)%8===0)&&i.set(e,t,Bt.mortar[at(e,t,13)*2|0])}return i},obsidian:i=>i.soft(Bt.obsidian,137,9,4).grain(4,138).speckles("#6b4aa8",6,139,12),glowstone:i=>i.soft(Bt.glow,149,8,4).grain(4,150).pebbles("#fff3c4",6,151,2,16,-18),torch:i=>{i.clear();for(let t=6;t<16;t++)for(let e=6;e<10;e++)i.set(e,t,t%3===0?"#6b4a24":"#8a6234");for(let t=2;t<7;t++)for(let e=5;e<11;e++){const n=Math.hypot(e-7.5,t-4);n<3&&i.set(e,t,n<1.3?"#fff6c0":n<2.2?"#ffc23c":"#e07a1e")}return i},tall_grass:i=>{i.clear();for(let t=0;t<5;t++){const e=1+t*2+(at(t,3,157)*2|0),n=5+(at(t,7,163)*4|0),s=(at(t,11,167)-.5)*3;for(let r=0;r<n;r++){const o=15-r,a=Math.round(e+s*r/n),l=r>n-2?"#69a440":r>n*.45?"#4f8a2c":"#3c6a21";i.set(a,o,l),r%4===0&&at(a,o,179)>.55&&i.set(a+1,o,"#3f7024")}}for(let t=0;t<3;t++){const e=2+(at(t,23,181)*12|0);i.set(e,15-(4+(at(t,29,183)*3|0)),"#7c8a3c")}return i},fern:i=>{i.clear();for(let t=0;t<11;t++){const e=15-t,n=1+((10-t)*.45|0);for(let s=8-n;s<=8+n;s++){const r=Math.abs(s-8);r===n&&t%2||r===0&&t>4&&t%3===0||i.set(s,e,t>7?"#548c2e":r===n?"#356a1f":"#3f7d24")}}return i},flower_red:i=>{i.clear();for(let e=8;e<16;e++)i.set(7,e,"#3f7d24");for(let e=9;e<12;e++)i.set(e%2?8:6,e,"#4f9a2c");const t=[[6,5],[7,4],[8,5],[9,6],[8,7],[7,8],[6,7],[5,6]];for(const[e,n]of t)i.set(e,n,"#d93b3b");return i.set(7,6,"#ffe27a"),i.set(8,6,"#ffd63c"),i},flower_yellow:i=>{i.clear();for(let e=8;e<16;e++)i.set(8,e,"#3f7d24");const t=[[7,5],[8,4],[9,5],[10,6],[9,7],[8,8],[7,7],[6,6]];for(const[e,n]of t)i.set(e,n,"#f5d33c");return i.set(8,6,"#a06b1e"),i.set(8,5,"#c9911e"),i},cactus_side:i=>{i.noise(Bt.cactus,171,6);for(let t=0;t<16;t++)i.set(0,t,"#2f5f22"),i.set(15,t,"#2f5f22"),t%4===1&&(i.set(4,t,"#dfeee0"),i.set(11,t,"#dfeee0"));return i},cactus_top:i=>i.noise(["#4d8f3a","#5aa145","#3f7d2f"],173,6).border("#2f5f22"),wool_white:i=>i.noise(Bt.woolW,181,6),wool_red:i=>i.noise(Bt.woolR,183,6),wool_blue:i=>i.noise(Bt.woolB,185,6),wool_yellow:i=>i.noise(Bt.woolY,187,6),wool_lime:i=>i.noise(Bt.woolL,189,6),wool_black:i=>i.noise(Bt.woolK,191,6),crafting_top:i=>{i.noise(Bt.planks,193,6);for(let t=1;t<15;t++)for(let e=1;e<15;e++)(e%7===0||t%7===0)&&i.set(e,t,"#7a5a2f");return i},crafting_side:i=>{i.noise(Bt.planks,197,6);for(let t=2;t<7;t++)for(let e=2;e<14;e++)(e+t)%3===0&&i.set(e,t,"#8a6a35");return i}},Bg={wood:["#a97f4a","#8a6134"],stone:["#9a9a9a","#7d7d7d"],iron:["#e2e2e2","#b9bcc2"],diamond:["#57e6e0","#31b9c2"]},zg=["pickaxe","axe","shovel","sword"];function Hg(i,t,e,n){const s="#8a6134",r="#6d4c28";if(t==="sword"){for(let l=0;l<9;l++)i.set(5+l,12-l,l>5?n:e);for(let l=0;l<8;l++)i.set(4+l,13-l,l>5?n:e);return i.set(4,11,s),i.set(5,12,s),i.set(3,12,r),i.set(4,13,r),i.set(2,13,r),i.set(3,14,s),i.set(2,14,r),i.set(5,10,n),i.set(6,9,n),i.set(7,8,n),i.set(8,7,n),i.set(2,11,r),i.set(3,10,s),i.set(1,12,r),i}for(let l=0;l<10;l++){const c=3+l,h=14-l;i.set(c,h,s),i.set(c,h+1,r)}const o=12,a=5;if(t==="pickaxe"){for(let l=-4;l<=4;l++)i.set(o+l,a-1+Math.abs(l)>>1,e);for(let l=-3;l<=3;l++)i.set(o+l,a+Math.abs(l)>>1,e);i.set(o-4,a+1,n),i.set(o+4,a+1,n),i.set(o-5,a+2,n),i.set(o+5,a+2,n),i.set(o,a,n),i.set(o-1,a,n)}else if(t==="axe"){for(let l=-2;l<=3;l++)for(let c=-1;c<=3;c++)i.set(o+c,a+l,e);for(let l=-2;l<=3;l++)i.set(o+3,a+l,n);i.set(o-1,a-2,n),i.set(o-1,a+3,n)}else{for(let l=-1;l<=3;l++)for(let c=-2;c<=2;c++)i.set(o+c,a+l,e);for(let l=0;l<=2;l++)i.set(o,a+l,n);i.set(o-2,a+3,r),i.set(o+2,a+3,r)}return i}function fi(i,t){if(i.fill("#e8e8e8"),i.noise(["#e2e2e2","#efefef","#d9d9d9"],313,10),t)for(const[e,n]of t)i.rect(e,n,2,2,"#f2f2f2");return i}Qt.snow_side=i=>za(i,201,Bt.snow,Bt.dirt,4,3);for(const[i,[t,e]]of Object.entries(Bg))for(const n of zg)Qt[`tool_${n}_${i}`]=s=>Hg(s,n,t,e);Qt.mob_pig=i=>fi(i,null);Qt.mob_face=i=>(fi(i,null),i.set(3,6,"#241a1a"),i.set(4,6,"#241a1a"),i.set(11,6,"#241a1a"),i.set(12,6,"#241a1a"),i.rect(6,10,4,2,"#3a2a2a"),i);Qt.mob_snout=i=>(fi(i,null),i.rect(4,4,8,6,"#d9a6a0"),i.set(5,6,"#5a3a38"),i.set(10,6,"#5a3a38"),i);Qt.mob_cow=i=>(fi(i,null),i.rect(0,0,16,5,"#4a3a34"),i.rect(3,9,6,5,"#3a2c28"),i);Qt.mob_sheep=i=>(fi(i,[[2,2],[9,5],[4,10]]),i);Qt.mob_husk=i=>(fi(i,null),i.rect(0,0,16,16,"#6f7d5f"),i.noise(["#5d6b52","#7c8a68"],77,12),i.set(3,6,"#0e1408"),i.set(4,6,"#0e1408"),i.set(11,6,"#0e1408"),i.set(12,6,"#0e1408"),i);Qt.mob_crawler=i=>(fi(i,null),i.rect(0,0,16,16,"#39424f"),i.noise(["#2e3742","#48525f"],91,14),i.rect(4,4,3,2,"#d8e6ff"),i.rect(10,4,3,2,"#d8e6ff"),i);Qt.sapling=i=>{i.rect(6,11,4,4,"#6b4a2a");for(const[t,e]of[[5,7],[6,6],[7,5],[8,4],[9,5],[10,6],[11,7],[6,8],[9,8],[7,7],[8,7],[8,6]])i.set(t,e,"#4f9a2c");for(const[t,e]of[[7,6],[9,6],[8,8],[6,7],[10,7]])i.set(t,e,"#5aa832");return i};Qt.item_stick=i=>{for(let t=0;t<9;t++)i.set(4+t,12-t,"#8a6134"),i.set(4+t,13-t,"#6d4c28");return i};Qt.item_coal=i=>(i.blobs("#232323",7,12,3.4),i.blobs("#3b3b3b",5,44,2.2),i);Qt.item_leather=i=>{i.rect(3,3,10,10,"#9c6b45"),i.rect(4,4,8,8,"#ab7850");for(let t=0;t<4;t++)i.set(4+t*2,4,"#8a5b3a"),i.set(11,5+t*2,"#8a5b3a");return i};Qt.item_pork=i=>(i.rect(3,5,10,7,"#e08f8a"),i.rect(4,6,8,5,"#f0a8a2"),i.rect(5,7,3,2,"#f8c6c2"),i.set(12,5,"#c96f6c"),i.set(12,11,"#c96f6c"),i);Qt.farmland=i=>{i.fill("#4b3520"),i.grain("#3f2b19","#57401f",.55);for(let t=1;t<15;t+=3)i.rect(0,t,16,2,"#33220f"),i.rect(0,t+2,16,1,"#5c4525");return i.speckles("#6d5230",16,7),i.border("#2b1c0c",.5),i};Qt.wheat=i=>{i.clear();const t=[[2,5],[6,3],[10,6],[13,4],[4,11],[8,12],[12,10]];for(const[e,n]of t){for(let s=15;s>=n;s--)i.set(e,s,"#8aa63c",255);for(let s=0;s<4;s++)i.rect(e-1,n+s,3,1,"#dcb955"),i.set(e,n+s,"#f0d67e",255);i.set(e+1,n+3,"#6f8a2e",255)}return i};Qt.hay_side=i=>{i.fill("#c2a03c"),i.grain("#b28f2f","#d3b254",.5);for(let t=0;t<16;t+=2)i.rect(0,t,16,1,"#ad8b2c");return i.rect(3,0,2,16,"#6d5318"),i.rect(11,0,2,16,"#6d5318"),i.rect(0,0,16,1,"#8f7220"),i.rect(0,15,16,1,"#7e6318"),i};Qt.hay_top=i=>{i.fill("#d3b254"),i.grain("#c4a344","#e0c266",.5);for(const[t,e,n]of[[2,2,12],[4,4,8],[6,6,4]])i.rect(t,e,n,1,"#a98731"),i.rect(t,e+n-1,n,1,"#a98731"),i.rect(t,e,1,n,"#a98731"),i.rect(t+n-1,e,1,n,"#a98731");return i.rect(7,7,2,2,"#8a6c28"),i};Qt.item_emerald=i=>{i.clear();for(let t=0;t<16;t++){const e=Math.round(2+(6-Math.abs(t-7.5))*1.1);i.rect(8-e,t,e*2,1,"#1f9c58")}return i.rect(5,5,4,4,"#43d47f"),i.rect(4,4,2,2,"#a6f2c4"),i.rect(9,9,3,3,"#146c3c"),i.set(8,3,"#8be9b6"),i.set(3,8,"#8be9b6"),i};Qt.mob_villager=i=>{i.fill("#6d4b2c"),i.grain("#5f4025","#7d5a37",.5);for(let t=1;t<16;t+=4)i.rect(0,t,16,1,"#57381f");return i.rect(0,6,16,3,"#8a6a44"),i.rect(0,7,16,1,"#a3855c"),i.rect(2,10,12,1,"#57381f"),i};Qt.mob_villager_face=i=>(i.fill("#c39a6b"),i.grain("#b8905f","#cba876",.4),i.rect(0,0,16,4,"#4a3520"),i.rect(0,3,16,1,"#5d452a"),i.rect(3,7,2,2,"#2f2a3a"),i.rect(11,7,2,2,"#2f2a3a"),i.rect(2,6,4,1,"#8a6a44"),i.rect(10,6,4,1,"#8a6a44"),i.rect(7,8,2,4,"#ab7f52"),i.rect(6,11,4,2,"#b98d5d"),i.rect(4,13,8,1,"#4a3520"),i);Qt.mossy_cobblestone=i=>{Qt.cobblestone(i),i.blobs("#3d7a2a",12,331,2.7),i.blobs("#4f9433",9,332,1.9);for(let t=0;t<16;t++)for(let e=0;e<16;e++)i.get(e,t)[1]>120&&at(e,t,333)>.82&&i.set(e,t,"#2f6a24");return i.grain(3,334)};Qt.ice=i=>{i.fill("#a6d3ec"),i.soft(["#bcdff4","#a9d6ef","#cbe9f8","#96c8e6"],241,6,4);for(let t=0;t<24;t++){const e=at(t,3,242)*12|0,n=at(t,7,243)*12|0,s=3+(at(t,11,244)*5|0),r=at(t,13,245)>.5?1:-1;for(let o=0;o<s;o++)i.set(Math.min(15,e+o),Math.min(15,n+o*r),"#e8f7ff",235)}return i.border("#c9e6f6"),i.grain(2,246)};Qt.lantern=i=>{i.clear(),i.rect(6,0,4,1,"#5d5d64"),i.rect(7,1,2,1,"#494950"),i.rect(4,2,8,1,"#565660"),i.rect(3,3,10,1,"#3f3f47"),i.rect(4,4,8,8,"#2f2f36");for(let t=5;t<11;t++)for(let e=5;e<11;e++){const n=Math.hypot(e-7.5,t-8);i.set(e,t,n<1.6?"#fff6c8":n<3?"#ffd167":"#e8973a")}i.rect(3,12,10,1,"#3f3f47"),i.rect(4,13,8,1,"#565660");for(let t=5;t<11;t+=2)i.set(4,t,"#6b6b76"),i.set(11,t,"#6b6b76");return i};Qt.item_flint=i=>{i.clear();for(let t=3;t<14;t++){const e=1+Math.round(5*Math.sin((t-2)*.55)),n=3+(at(t,5,251)*3|0);for(let s=n;s<n+5+e;s++){if(s>15||s<0)continue;const r=t===3||t===13||s===n||s===n+4+e;i.set(s,t,r?"#3b3b44":at(s,t,252)>.6?"#2a2a31":"#494954")}}return i.rect(6,6,3,1,"#8f8fa3"),i.rect(7,7,2,1,"#c6c6d6"),i};Qt.item_apple=i=>{i.clear();for(let t=4;t<15;t++)for(let e=2;e<14;e++){const n=(e-7.5)/5.4,s=(t-9.6)/4.8,r=n*n+s*s;if(r>1.05)continue;let o=r<.62?"#d8352f":"#b1241f";e<5&&t<9&&(o="#f0625a"),at(e,t,253)>.9&&(o="#c92b26"),i.set(e,t,o)}return i.rect(7,2,1,3,"#6b4326"),i.rect(8,1,1,2,"#7d5230"),i.rect(9,2,3,2,"#4f9a35"),i.rect(10,1,2,1,"#63b844"),i.set(5,6,"#ffd9d3"),i.set(6,5,"#ffe9e4"),i};Qt.item_bread=i=>{i.clear();for(let t=5;t<12;t++){const e=t===5||t===11?3:1;for(let n=e;n<16-e;n++){let r=t<8?at(n,t,254)>.5?"#c98a3f":"#b87a33":"#8f5d26";t===6&&n%4===1&&(r="#e0ab5c"),i.set(n,t,r)}}for(const t of[3,7,11])i.set(t,7,"#f0c877"),i.set(t+1,8,"#dcae5e");return i.rect(1,11,14,1,"#6f4620")};Qt.item_compass=i=>{i.clear();for(let t=0;t<16;t++)for(let e=0;e<16;e++){const n=Math.hypot(e-7.5,t-7.5);n>7||(n>5.9?i.set(e,t,at(e,t,255)>.6?"#9a8542":"#c4ad5c"):i.set(e,t,n<1?"#efe7d2":"#dcd3bb"))}for(let t=0;t<6;t++)i.set(7,2+t,"#c0392b"),i.set(8,2+t,"#e74c3c");for(let t=0;t<5;t++)i.set(8-t,9+t,"#4a4a52"),i.set(7-t,9+t,"#6b6b73");return i.rect(7,7,2,2,"#2b2b31"),i.set(7,1,"#f4ead0"),i.set(8,1,"#f4ead0"),i.set(1,7,"#f4ead0"),i.set(14,8,"#f4ead0"),i};Qt.item_clock=i=>{i.clear();for(let t=0;t<16;t++)for(let e=0;e<16;e++){const n=Math.hypot(e-7.5,t-7.5);n>7.2||(n>6?i.set(e,t,at(e,t,256)>.55?"#b98f26":"#e8c96a"):i.set(e,t,n<.9?"#3a3a42":"#f4efe0"))}for(let t=0;t<4;t++)i.set(8,4+t,"#3a3a42");for(let t=0;t<3;t++)i.set(5+t,8,"#6b5a2a");for(const[t,e]of[[7,1],[14,7],[7,14],[1,7]])i.set(t,e,"#7a5c18");return i.rect(6,0,4,1,"#c9a33c")};Qt.item_shears=i=>{i.clear();for(let t=0;t<7;t++)i.set(3+t,3+t,"#cfd4dc"),i.set(4+t,3+t,"#9aa1ad"),i.set(10-t,3+t,"#cfd4dc"),i.set(9-t,3+t,"#9aa1ad");i.set(7,7,"#7b8290"),i.set(8,7,"#7b8290");for(const[t,e]of[[4,11],[11,11]])for(let n=0;n<12;n++){const s=n/12*Math.PI*2;i.set(Math.round(t+Math.cos(s)*2.4),Math.round(e+Math.sin(s)*2.4),"#b8422f")}return i};const hn=Object.keys(Qt).filter(i=>Qt[i]);function sc(i,t){const e=String(i),n=hn.indexOf(e);if(!t)return n>=0&&hn.splice(n,1),delete Qt[e],!1;if(typeof t!="function")throw new Error(`тайл «${e}»: painter должен быть функцией`);return Qt[e]=t,n<0&&hn.push(e),!0}function Gg(){const i=[],t={};if(hn.forEach((e,n)=>{const s=Og(Qt[e]);t[e]=n,i.push({name:e,index:n,tile:s,transparentPadding:e!=="water"})}),i.length>Zi*Zi)throw new Error("Слишком много тайлов для атласа");return{tiles:i,index:t}}const Ha=8;function Vg(i){const t=new Sh;t.clear();const e=2+i,n=i*7+3;for(let s=0;s<e;s++){let r=1+(at(s,i,n)*(vt-2)|0),o=1+(at(s+5,i,n+1)*(vt-2)|0);const a=at(s,0,n+2)>.5?1:-1,l=3+(i*.9+at(s,1,n)*4|0);for(let c=0;c<l;c++){const h=i>=4?1:0;t.set(r,o,[12,12,12],225),h&&(t.set(r+a,o,[30,30,30],150),t.set(r,o+1,[20,20,20],120)),r+=a*(at(c,s,n+3)>.45?1:0),o+=at(c,s+2,n+4)>.35?1:-1,r=Math.max(0,Math.min(vt-1,r)),o=Math.max(0,Math.min(vt-1,o))}}return i>=6&&t.speckles([0,0,0],14,i,0),t}function Wg(){const i=[];for(let t=0;t<Ha;t++){const e=Vg(t),n=new kr(e.data,vt,vt,Ve);n.magFilter=pe,n.minFilter=pe,n.generateMipmaps=!1,n.colorSpace=Ne,n.needsUpdate=!0,i.push(n)}return i}const In=0,Xg=[{id:38,name:"Саженец",key:"sapling",tiles:{all:"sapling",tinted:!0},render:"cross",cutout:!0,breakable:!0,hardness:.15,sound:"grass",plantH:.4},{id:39,name:"Кожа",key:"leather",tiles:{all:"item_leather"},render:"item",sound:"soft"},{id:40,name:"Мясо",key:"pork",tiles:{all:"item_pork"},render:"item",sound:"soft"},{id:41,name:"Палка",key:"stick",tiles:{all:"item_stick"},render:"item",sound:"wood"},{id:42,name:"Уголь",key:"coal_item",tiles:{all:"item_coal"},render:"item",sound:"soft"}],qg=[{kind:"pickaxe",label:"кирка",fem:!0,mine:["stone","glass"]},{kind:"axe",label:"топор",mine:["wood"]},{kind:"shovel",label:"лопата",fem:!0,mine:["dirt","sand","grass"]},{kind:"sword",label:"меч",mine:["plant","wool","grass"]}],$g=[{tier:"wood",fem:"деревянная",masc:"деревянный",speed:2.4,damage:2,uses:60},{tier:"stone",fem:"каменная",masc:"каменный",speed:3.6,damage:3,uses:132},{tier:"iron",fem:"железная",masc:"железный",speed:5.6,damage:5,uses:251},{tier:"diamond",fem:"алмазная",masc:"алмазный",speed:8.2,damage:7,uses:601}],Yg=[{id:59,name:"Грядка",key:"farmland",tiles:{top:"farmland",bottom:"dirt",side:"dirt"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.4,sound:"sand",drops:"dirt"},{id:60,name:"Пшеница",key:"wheat",tiles:{all:"wheat"},render:"cross",solid:!1,opaque:!1,cutout:!0,breakable:!0,hardness:.05,sound:"grass",replaceable:!0,plantH:.62},{id:61,name:"Стог сена",key:"hay_block",tiles:{top:"hay_top",bottom:"hay_top",side:"hay_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.5,sound:"grass"},{id:62,name:"Изумруд",key:"emerald",tiles:{all:"item_emerald"},render:"item",sound:"soft"}],Eh=[];{let i=43;for(const t of $g)for(const e of qg)Eh.push({id:i++,name:`${(e.fem?t.fem:t.masc)[0].toUpperCase()}${(e.fem?t.fem:t.masc).slice(1)} ${e.label}`,key:`${t.tier}_${e.kind}`,tiles:{all:`tool_${e.kind}_${t.tier}`},render:"item",sound:"wood",tool:{kind:e.kind,mine:e.mine,speed:t.speed,damage:t.damage,uses:t.uses}})}const wh=[{id:63,name:"Замшелый булыжник",key:"mossy_cobblestone",tiles:{all:"mossy_cobblestone"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.3,sound:"stone"},{id:64,name:"Лёд",key:"ice",tiles:{all:"ice"},render:"cube",solid:!0,opaque:!1,cutout:!0,hideSame:!0,breakable:!0,hardness:.6,sound:"stone",drops:"ice"},{id:65,name:"Фонарь",key:"lantern",tiles:{all:"lantern"},render:"torch",solid:!1,opaque:!1,cutout:!0,breakable:!0,hardness:.4,sound:"stone",light:1,fullBright:!0,slim:!0},{id:66,name:"Кремень",key:"flint",tiles:{all:"item_flint"},render:"item",sound:"soft",bonusOf:"gravel",bonus:.16},{id:67,name:"Яблоко",key:"apple",tiles:{all:"item_apple"},render:"item",sound:"soft",food:4,bonusOf:"leaves",bonus:.14},{id:68,name:"Хлеб",key:"bread",tiles:{all:"item_bread"},render:"item",sound:"soft",food:8},{id:69,name:"Компас",key:"compass",tiles:{all:"item_compass"},render:"item",sound:"soft",info:"spawn"},{id:70,name:"Часы",key:"clock",tiles:{all:"item_clock"},render:"item",sound:"soft",info:"time"},{id:71,name:"Ножницы",key:"shears",tiles:{all:"item_shears"},render:"item",sound:"wood",tool:{kind:"shears",mine:["grass","plant","wool"],speed:4.2,damage:2,uses:118}}],dt=[{id:0,name:"Воздух",key:"air",tiles:null,render:"none",solid:!1,opaque:!1,breakable:!1,replaceable:!0,hardness:0,sound:"soft"},{id:1,name:"Камень",key:"stone",tiles:{all:"stone"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.1,sound:"stone",drops:"cobblestone"},{id:2,name:"Дёрн",key:"grass",tiles:{top:"grass_top",bottom:"dirt",side:"grass_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.6,sound:"grass",drops:"dirt",tinted:!0},{id:3,name:"Земля",key:"dirt",tiles:{all:"dirt"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.5,sound:"dirt"},{id:4,name:"Булыжник",key:"cobblestone",tiles:{all:"cobblestone"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.3,sound:"stone"},{id:5,name:"Доски",key:"planks",tiles:{all:"planks"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1,sound:"wood"},{id:6,name:"Песок",key:"sand",tiles:{all:"sand"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.5,sound:"sand"},{id:7,name:"Песчаник",key:"sandstone",tiles:{top:"sandstone_top",bottom:"sandstone_top",side:"sandstone_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.9,sound:"stone"},{id:8,name:"Гравий",key:"gravel",tiles:{all:"gravel"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.6,sound:"sand"},{id:9,name:"Бревно",key:"log",tiles:{top:"log_top",bottom:"log_top",side:"log_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.2,sound:"wood"},{id:10,name:"Листва",key:"leaves",tiles:{all:"leaves"},render:"cube",solid:!0,opaque:!1,cutout:!0,breakable:!0,hardness:.3,sound:"grass",tinted:!0,drops:"sapling"},{id:11,name:"Вода",key:"water",tiles:{all:"water"},render:"liquid",solid:!1,opaque:!1,liquid:!0,hideSame:!0,breakable:!1,hardness:0,sound:"splash"},{id:12,name:"Стекло",key:"glass",tiles:{all:"glass"},render:"cube",solid:!0,opaque:!1,cutout:!0,hideSame:!0,breakable:!0,hardness:.4,sound:"glass"},{id:13,name:"Кирпичи",key:"bricks",tiles:{all:"bricks"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.4,sound:"stone"},{id:14,name:"Каменный кирпич",key:"stone_bricks",tiles:{all:"stone_bricks"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.3,sound:"stone"},{id:15,name:"Снег",key:"snow",tiles:{top:"snow",bottom:"dirt",side:"snow_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.3,sound:"grass"},{id:16,name:"Уголь",key:"coal_ore",tiles:{all:"coal_ore"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.6,sound:"stone"},{id:17,name:"Железо",key:"iron_ore",tiles:{all:"iron_ore"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:2,sound:"stone"},{id:18,name:"Золото",key:"gold_ore",tiles:{all:"gold_ore"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:2.2,sound:"stone"},{id:19,name:"Алмазы",key:"diamond_ore",tiles:{all:"diamond_ore"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:2.6,sound:"stone"},{id:20,name:"Редстоун",key:"redstone_ore",tiles:{all:"redstone_ore"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:2,sound:"stone",light:.25},{id:21,name:"Обсидиан",key:"obsidian",tiles:{all:"obsidian"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:5,sound:"stone"},{id:22,name:"Бедрок",key:"bedrock",tiles:{all:"bedrock"},render:"cube",solid:!0,opaque:!0,breakable:!1,hardness:0,sound:"stone"},{id:23,name:"Светокамень",key:"glowstone",tiles:{all:"glowstone"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.5,sound:"glass",light:1,fullBright:!0},{id:24,name:"Факел",key:"torch",tiles:{all:"torch"},render:"torch",solid:!1,opaque:!1,cutout:!0,breakable:!0,hardness:.05,sound:"wood",light:1,fullBright:!0,noSelect:!1,slim:!0},{id:25,name:"Высокая трава",key:"tall_grass",tiles:{all:"tall_grass",tinted:!0},render:"cross",solid:!1,opaque:!1,cutout:!0,breakable:!0,hardness:.05,sound:"grass",replaceable:!0,plantH:.5},{id:26,name:"Папоротник",key:"fern",tiles:{all:"fern",tinted:!0},render:"cross",solid:!1,opaque:!1,cutout:!0,breakable:!0,hardness:.05,sound:"grass",replaceable:!0,plantH:.46},{id:27,name:"Красный цветок",key:"flower_red",tiles:{all:"flower_red"},render:"cross",solid:!1,opaque:!1,cutout:!0,breakable:!0,hardness:.05,sound:"grass",replaceable:!0,plantH:.38},{id:28,name:"Жёлтый цветок",key:"flower_yellow",tiles:{all:"flower_yellow"},render:"cross",solid:!1,opaque:!1,cutable:!0,cutout:!0,replaceable:!0,hardness:.05,sound:"grass",plantH:.38},{id:29,name:"Кактус",key:"cactus",tiles:{top:"cactus_top",bottom:"cactus_top",side:"cactus_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.5,sound:"grass",inset:.06},{id:30,name:"Белая шерсть",key:"wool_white",tiles:{all:"wool_white"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.7,sound:"wool"},{id:31,name:"Красная шерсть",key:"wool_red",tiles:{all:"wool_red"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.7,sound:"wool"},{id:32,name:"Синяя шерсть",key:"wool_blue",tiles:{all:"wool_blue"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.7,sound:"wool"},{id:33,name:"Жёлтая шерсть",key:"wool_yellow",tiles:{all:"wool_yellow"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.7,sound:"wool"},{id:34,name:"Зелёная шерсть",key:"wool_lime",tiles:{all:"wool_lime"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.7,sound:"wool"},{id:35,name:"Чёрная шерсть",key:"wool_black",tiles:{all:"wool_black"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.7,sound:"wool"},{id:36,name:"Верстак",key:"crafting_table",tiles:{top:"crafting_top",bottom:"planks",side:"crafting_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1,sound:"wood"},{id:37,name:"Подзол",key:"podzol",tiles:{top:"podzol",bottom:"dirt",side:"podzol_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.5,sound:"dirt"},...Xg,...Eh,...Yg,...wh],$e=new Map(dt.map(i=>[i.key,i])),Lt=i=>i==null?In:$e.get(i)?.id??In,rc=i=>dt[i]?.liquid===!0,jg=i=>dt[i]?.render==="item",Kg=i=>{const t=dt[i];return t?t.drops?Lt(t.drops):t.item||t.replaceable?0:i:0};function Zg(i,t,e,n){for(const s of wh){if(!s.bonusOf||s.bonusOf!==dt[i]?.key)continue;if(((t*73856093^e*19349663^n*83492791)>>>0)%1e3/1e3<(s.bonus??.15))return s.id}return 0}function Jg(i,t){if(!i||!t)return 1;const e=dt[t]?.tool;return e?e.mine.includes(i.sound)?e.speed:i.sound==="stone"||i.sound==="glass"?.45:1:1}const Qg=i=>dt[i]?.tool?.damage??1,t_=Zi,e_=fr;class n_{constructor(){const{tiles:t,index:e}=Gg(),n=kg(t),s=new kr(n.data,n.width,n.height,Ve);s.magFilter=pe,s.minFilter=ui,s.generateMipmaps=!0,s.wrapS=s.wrapT=sn,s.colorSpace=Ne,s.needsUpdate=!0,this.texture=s,this.index=e,this.tile=vt,this.cell=e_,this.grid=t_,this.canvases={};for(const r of t)this.canvases[r.name]=Fg(r.tile,1);this.cracks=Wg(),this.iconCache=new Map}setMaxAnisotropy(t){const e=Math.max(1,Math.min(8,t|0));return this.texture.anisotropy=e,this.texture.needsUpdate=!0,e}icon(t,e=48){const n=t+":"+e,s=this.iconCache.get(n);if(s)return s;const r=document.createElement("canvas");r.width=r.height=e;const o=r.getContext("2d");o.imageSmoothingEnabled=!1;const a=dt[t]??dt[In];if(a&&a.tiles){const c=a.render==="cross"||a.render==="torch"||a.render==="item",h=this.canvases[a.tiles.top??a.tiles.all],u=this.canvases[a.tiles.side??a.tiles.all];if(c||!h||!u){const d=this.canvases[a.tiles.all]??h;if(d){const f=e*.8;o.drawImage(d,(e-f)/2,(e-f)/2,f,f)}}else i_(o,e,h,u)}const l=r.toDataURL();return this.iconCache.set(n,l),l}}function i_(i,t,e,n){const s=t*.46,r=t*.42,o=t*.08;i.save(),i.translate(0,o),i.save(),i.setTransform(s,s*.5,-s,s*.5,t/2,0),i.drawImage(e,0,0,1,1),i.restore(),i.save(),i.setTransform(s,s*.5,0,r,t/2-s,s*.5),i.drawImage(n,0,0,1,1),i.fillStyle="rgba(0,0,0,0.28)",i.fillRect(0,0,1,1),i.restore(),i.save(),i.setTransform(s,-s*.5,0,r,t/2,s*.5),i.drawImage(n,0,0,1,1),i.fillStyle="rgba(0,0,0,0.12)",i.fillRect(0,0,1,1),i.restore(),i.restore()}const it=16,Jt=96,ze=34,Th=ze+4,se=(i,t,e)=>(t*it+e)*it+i,Ar=32768,Ga=65536,Ah=(i,t)=>(i+Ar)*Ga+(t+Ar);function vs(i){const t=Math.floor(i/Ga)-Ar,e=i%Ga-Ar;return[t,e]}const Va=(i,t,e)=>i+","+t+","+e,s_=`
attribute vec4 light;
attribute vec3 tint;
varying vec4 vLight;
varying vec3 vTint;
varying vec2 vUv;
varying float vFog;
varying vec3 vWorld;
uniform float uTime;
uniform float uWave;
uniform float uQuality;
uniform float uDay;      // доля дня (1 = полдень, 0 = ночь) — нужны модам
uniform float uDusk;     // закат 0..1
uniform float uNight;    // 1 - день: «ночные» мод-эффекты
uniform float uFogDensity;
uniform float uFogStart;
uniform float uFogEnd;
// Чанки three для карты теней: имена переменных (worldPosition, transformedNormal)
// заданы самим <shadowmap_vertex>, поэтому их не «выбираем», а исполняем.
#include <common>
#include <shadowmap_pars_vertex>
/*MOD_DECL*/

void main() {
  vUv = uv;
  vLight = light;
  vTint = tint;
  // Имена локалов main() зарезервированы за нами (см. GLSL_RESERVED в game/mods.js):
  // мод вставляется в этот же scope, и его float p = ... сломало бы компиляцию
  // всего материала — мир пропал бы целиком. Поэтому имена несклоняемые.
  vec3 wpos = position;
  vec4 world = modelMatrix * vec4(wpos, 1.0);
  if (uWave > 0.5 && light.w > 0.5) {
    // «Ультра» (уровень 3): амплитуда волн крупнее и фазы совпадают с
    // waterSlope() во фрагментном шейдере — иначе блик скользил бы не по гребню,
    // а мимо него, и вода выглядела нарисованной поверх другой воды.
    if (uQuality > 2.5) {
      // Покачивание намеренно маленькое: 2-4 см. Крупнее — и вода начинает
      // «кипеть» на каждом кадре, а на скриншотах-примерах как раз спокойная
      // поверхность с мягкой дорожкой света.
      float t = uTime;
      world.y += sin(world.x * 0.62 + t * 1.3) * 0.022
               + cos(world.z * 0.62 - t * 1.1) * 0.018
               + sin((world.x + world.z) * 1.35 + t * 2.1) * 0.008;
    } else {
      world.y += sin(world.x * 0.8 + uTime * 1.6) * 0.035 + cos(world.z * 1.1 - uTime * 1.2) * 0.03;
    }
  }
  vWorld = world.xyz;
  // Сюда вставляет код мод (см. mods.js): world уже посчитан, mv — ещё нет,
  // поэтому модель может двигать вершину и её успевает увидеть туман и тени.
  /*MOD_VERT*/
  vec4 mv = viewMatrix * world;
  float fogD = length(mv.xyz);
  // Поздний линейный туман: до uFogStart мир абсолютно чистый, плотнеет только
  // к границе прокрутки — так мир читается большим, а край чанков не виден.
  float lin = clamp((fogD - uFogStart) / max(1.0, uFogEnd - uFogStart), 0.0, 1.0);
  float expf = 1.0 - exp(-uFogDensity * uFogDensity * fogD * fogD);
  vFog = clamp(max(lin * lin, expf), 0.0, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = 1.0;

  // Тени: нормалей у нашей геометрии нет, для смещения выборки (normalBias)
  // берём «вверх» — на верхних гранях (именно они читаются как рельеф) этого
  // достаточно, а на вертикальных normalBias выключен уменьшением (см. sunShadow).
  vec4 worldPosition = world;
  vec3 transformedNormal = normalize(normalMatrix * vec3(0.0, 1.0, 0.0));
  #include <shadowmap_vertex>
}
`,r_=`
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
/*MOD_DECL*/
/**
 * Номер тайла атласа под пикселем. Нужен модам: id блока в геометрии не лежит
 * (меш — просто квады), а тайл — единственная подсказка о том, ЧТО это за блок.
 * UV лежит внутри 16px тайла в 32px ячейке (tileRect), поэтому floor(vUv*16)
 * и есть номер ячейки = номер тайла.
 */
float tileIndex() {
  float gx = floor(clamp(vUv.x, 0.0, 0.9999) * 16.0);
  float gy = floor(clamp(vUv.y, 0.0, 0.9999) * 16.0);
  return gy * 16.0 + gx;
}
uniform vec3 uZenithC;
uniform float uSea;
uniform float uWave;
uniform float uTime;
uniform float uShadow;        // сила теней 0..1 (0 — даже при включённой карте)
uniform samplerCube uProbe;   // отражение мира в воде (куб-проба)
uniform float uRefl;          // 0 — только небо, 1 — проба мира полностью
varying vec4 vLight;
varying vec3 vTint;
varying vec2 vUv;
varying float vFog;
varying vec3 vWorld;

#include <common>
#include <packing>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

vec3 aces(vec3 x) {
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}

/**
 * Наклон поверхности воды аналитически: высота — сумма трёх волн, нормаль — её
 * градиент. Дешевле и устойчивее, чем «шумовые» нормали: блик всегда лежит ровно
 * там, где геометрия поднялась (см. вершинный шейдер), и вода не расползается.
 */
vec2 waterSlope(vec2 p, float t) {
  const float k1 = 0.62;   // долгая зыбь
  const float k2 = 1.35;   // волна по диагонали
  const float k3 = 2.9;    // рябь
  float a1 = k1 * cos(p.x * k1 + t * 1.3) * 0.022 + k2 * cos((p.x + p.y) * k2 + t * 2.1) * 0.008 + k3 * cos(p.x * k3 - t * 3.7) * 0.0025;
  float a2 = k1 * cos(p.y * k1 - t * 1.1) * 0.018 + k2 * cos((p.x + p.y) * k2 + t * 2.1) * 0.008 + k3 * cos(p.y * k3 + t * 3.1) * 0.0025;
  return vec2(a1, a2);
}

/** Цвет неба по направлению — то же приближение, что и в куполе неба. Нужно,
 *  чтобы вода отражала закат, а не просто синий цвет. */
vec3 skyLike(vec3 dir, vec3 horizon, vec3 zenith, float day) {
  float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
  return mix(horizon, zenith, pow(h, 0.62)) * (0.94 + 0.12 * h) * (0.22 + 0.78 * day);
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

  // getShadowMask() = 1 без активной карты теней, поэтому вызов безопасен всегда.
  float shade = mix(1.0, clamp(getShadowMask(), 0.0, 1.0), uShadow);
  // Тень не должна быть чёрной дырой: в тени остаётся свет неба (и потому она
  // чуть холоднее — как на нормальных шейдерах, а не «выключенный пиксель»).
  vec3 sunTerm = uSunColor * (uSun * sky) * shade;
  vec3 skyLight = (uAmbient * mix(vec3(1.08, 1.12, 1.2), vec3(1.0), shade)) + sunTerm;
  vec3 lit = skyLight * occ * lit0 + uTorch * blk * (0.25 + 0.75 * occ);
  vec3 col = tex.rgb * vTint * lit;
  // Альфа — в локаль, чтобы ультра-вода могла сделать её зависимой от угла
  // взгляда. Имя с префиксом lc: мод объявляет у себя «alpha» рефлекторно, а две
  // одноимённые локальные переменные в одном scope — это непрокомпелированный
  // материал, то есть пустой мир вместо мира. Кавычки, а не бэктики: комментарий
  // лежит внутри шаблонной строки, обратный кавычки её и закрывают.
  float lcAlpha = uAlpha;
  float sunGate = shade;                        // блики под деревом не нужны

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
    col += uSunColor * sp * 0.26 * sunGate;
    float rim = pow(1.0 - clamp(dot(nrm, V), 0.0, 1.0), 3.0);
    col += uFogColor * rim * 0.09 * sky;
    if (uWave > 0.5 && uQuality < 2.5) {
      // Этот приём — подделка отражения для уровня «красивые»; в «ультре» ниже
      // лежит настоящий, и держать оба нельзя: они гасят друг друга.
      vec3 V2 = normalize(cameraPosition - vWorld);
      float fr = pow(1.0 - clamp(dot(nrm, V2), 0.0, 1.0), 3.0);
      col = mix(col, uFogColor * (0.72 + 0.5 * uSun * sky), fr * 0.5);
      col += uSunColor * pow(max(dot(nrm, normalize(uSunDirW + V2)), 0.0), 120.0) * uSun * 0.45 * sunGate;
    }
  }

  if (uQuality > 2.5) {
    // ————— ВОДА: отражение (небо + мир), узкая солнечная дорожка, лёгкая рябь.
    // Ориентир — спокойная вода с мягким бликом, а не зеркало и не «стиральная
    // доска»: амплитуды маленькие, fresnel ограничен снизу и сверху.
    if (uWave > 0.5) {
      vec2 sl = waterSlope(vWorld.xz, uTime);
      vec3 nw = normalize(vec3(-sl.x, 1.0, -sl.y));
      vec3 V = normalize(cameraPosition - vWorld);
      float facing = clamp(dot(V, nw), 0.0, 1.0);     // 1 — смотрим сверху вниз
      vec3 R = reflect(-V, nw);
      // Небо в отражении считаем аналитически: оно резкое, живое и бесплатное
      // (никакого bloom — только законное отражение солнца на волне). Куб-проба
      // мира подключается вниз по лучу и у горизонта: вверху она лишь размывала
      // небо в мутное пятно, из-за чего вода выглядела нарисованной.
      float up = clamp(R.y * 2.2, 0.0, 1.0);
      vec3 refl = skyLike(R, uFogColor, uZenithC, clamp(uSun, 0.0, 1.2));
      float rs = max(dot(R, uSunDirW), 0.0);
      refl += uSunColor * (pow(rs, 420.0) * 1.3 + pow(rs, 16.0) * 0.3) * clamp(uSun, 0.05, 1.0);
      if (uRefl > 0.01) refl = mix(refl, textureCube(uProbe, R).rgb, clamp(uRefl * (1.0 - up * 0.8), 0.0, 0.92));
      float fr = pow(1.0 - facing, 4.2);
      col = mix(col, refl, clamp(0.14 + fr * 0.72, 0.0, 0.86));
      // дорожка солнца: узкий пик + широкий лепесток; под тенью дерева гаснет
      vec3 H = normalize(uSunDirW + V);
      float sd = max(dot(uSunDirW, nw), 0.0) * sunGate;
      float spk = pow(max(dot(nw, H), 0.0), 220.0) * 1.15 + pow(max(dot(nw, H), 0.0), 24.0) * 0.12;
      col += uSunColor * spk * sd * clamp(uSun, 0.0, 1.0);
      // ночная вода не чёрная: в ней живёт лунный свет и звёздное небо
      col += uZenithC * 0.05 * (1.0 - clamp(uSun, 0.0, 1.0));
      // И главное — прозрачность: сверху вниз вода почти невидима (виден грунт и
      // песок у берега), вскользь — зеркало. Из-под воды поверхность плотная,
      // иначе вид сквозь неё вверх выглядел бы дырой в мире.
      float clear = 1.0 - smoothstep(0.12, 0.92, facing);
      lcAlpha = mix(0.92, mix(0.30, 0.92, clear), step(uSea, cameraPosition.y));
    } else {
      // ————— ЗЕМЛЯ: тёплый ободок против солнца и лёгкий подсвет неба сверху
      vec3 V = normalize(cameraPosition - vWorld);
      float back = pow(max(dot(-V, uSunDirW), 0.0), 3.0);
      col += uSunColor * back * 0.075 * sky * clamp(uSun, 0.0, 1.0) * sunGate;
      col += uZenithC * 0.045 * max(nrm.y, 0.0) * (0.25 + clamp(uSun, 0.0, 1.0) * 0.6);
    }
  }

  // Вставка мода над тонмаппингом: тут col — «албедо × свет», то, что правят
  // обычно (оттенок, свечение руды, тон по тайлу).
  /*MOD_FRAG*/
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
  if (uQuality > 2.5) {
    // Воздушная перспектива: глядя против солнца, дымку видим тёплой и яркой —
    // ровно то, что отличает «закат по-настоящему» от серой пелены на горизонте.
    vec3 fwd = normalize(vWorld - cameraPosition);
    float toSun = pow(max(dot(fwd, uSunDirW), 0.0), 3.0) * clamp(uSun, 0.0, 1.0);
    vec3 fogc = uFogColor + uSunColor * toSun * 0.42;
    col = mix(col, fogc, fg);
  } else {
    col = mix(col, uFogColor, fg);
  }
  // Вторая точка: уже после дымки — для «экранного» вида (скан-линии, плёнка).
  /*MOD_FINAL*/
  gl_FragColor = vec4(col, lcAlpha);
}
`;function Rh(i){return Array.isArray(i)?i.length>=4?"vec4":i.length===3?"vec3":i.length===2?"vec2":"":i&&typeof i=="object"?i.w!==void 0?"vec4":i.z!==void 0?"vec3":i.y!==void 0?"vec2":"":typeof i=="number"||typeof i=="boolean"?"float":""}const ac="    nrm = normalize(cross(dFdx(vWorld), dFdy(vWorld)));",a_=`    // nrm остаётся «вверх»: производных на этом драйвере нет
    lit0 = 0.72 + 0.5 * clamp(sky * 1.15, 0.0, 1.0) * clamp(uSun, 0.0, 1.0);`;function o_(i={},t={}){const e=t.derivatives!==!1,n=u=>Array.isArray(u)?u:[],s=u=>u.map(d=>`
  // ——— шейдер мода «${d.mod}»
${d.code}`).join(""),r=i.uniforms?Object.entries(i.uniforms).map(([u,d])=>Rh(d)).filter(Boolean).map((u,d)=>`uniform ${u} ${Object.keys(i.uniforms)[d]};`).join(`
`):"",o=u=>{if(e||!u.includes(ac))return u;const d=u.indexOf(ac),f="lit0 = 0.72 + 0.5 * max(dot(nrm, uSunDirW), 0.0);",g=u.indexOf(f,d);return g<0?u:u.slice(0,d)+a_+u.slice(g+f.length)},a=(u,d,f)=>{const g=new RegExp(`[ \\t]*/\\*${d}\\*/[ \\t]*\\n?`);return f?u.replace(g,()=>`${f.trim()}
`):u.replace(g,"")},l=u=>u.length?s(u.map(d=>({mod:d.mod,code:`{
    ${d.code}
  }`}))):"";let c=a(s_,"MOD_DECL",r);c=a(c,"MOD_VERT",l(n(i.vert)));let h=a(o(r_),"MOD_DECL",r);return h=a(h,"MOD_FRAG",l(n(i.frag))),h=a(h,"MOD_FINAL",l(n(i.fragFinal))),{vertexShader:c,fragmentShader:h}}function Ea(i,t={},e={}){const n=e.derivatives!==!1,s=o_(t,{derivatives:n}),o={...t.uniforms?Object.fromEntries(Object.entries(t.uniforms).map(([l,c])=>[l,{value:c}])):{},...lo.clone(rt.lights),uMap:{value:i.texture},uTime:{value:0},uSun:{value:1},uSunColor:{value:new Ct(1,.97,.9)},uAmbient:{value:new Ct(.36,.42,.55)},uTorch:{value:new Ct(1,.58,.22)},uFogColor:{value:new Ct(.72,.85,.98)},uFogDensity:{value:.008},uFogStart:{value:70},uFogEnd:{value:110},uExposure:{value:1},uQuality:{value:0},uSunDirW:{value:new U(0,1,0)},uSea:{value:Th},uZenithC:{value:new Ct(.19,.4,.86)},uDay:{value:1},uDusk:{value:0},uNight:{value:0},uShadow:{value:0},uRefl:{value:0},uProbe:{value:null}},a=l=>{const c=new an({uniforms:{...o,uWave:{value:l.wave?1:0},uAlpha:{value:l.alpha},uAlphaTest:{value:l.alphaTest}},vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,transparent:l.transparent,side:Pe,depthWrite:!0,lights:!0});c.extensions={derivatives:n};for(const h of Object.keys(o))c.uniforms[h]=o[h];return c};return{uniforms:o,setQuality(l){o.uQuality.value=Math.max(0,Math.min(3,l|0))},setShadow(l){o.uShadow.value=Math.max(0,Math.min(1,l))},setReflection(l,c=0){o.uProbe.value=l??null,o.uRefl.value=l?Math.max(0,Math.min(1,c)):0},quality(){return o.uQuality.value},solid:a({wave:!1,alpha:1,alphaTest:.15,transparent:!1}),water:a({wave:!0,alpha:.76,alphaTest:.02,transparent:!0})}}const l_=`
precision mediump float;
attribute vec3 tint;
attribute vec4 light;
uniform float uTime;
uniform float uWave;
uniform float uFogDensity;
uniform float uFogStart;
uniform float uFogEnd;
varying vec2 vUv;
varying vec4 vLight;
varying vec3 vTint;
varying float vFog;

void main() {
  vUv = uv;
  vLight = light;
  vTint = tint;
  vec4 world = modelMatrix * vec4(position, 1.0);
  if (uWave > 0.5) {
    // покачивание воды то же по смыслу, но одной строкой: без него вода стояла бы
    // мёртвым стеклом, а это уже «сломанная графика», а не «упрощённая»
    world.y += sin(world.x * 0.8 + uTime * 1.6) * 0.03 + cos(world.z * 1.1 - uTime * 1.2) * 0.03;
  }
  vec4 mv = viewMatrix * world;
  float d = length(mv.xyz);
  float lin = clamp((d - uFogStart) / max(1.0, uFogEnd - uFogStart), 0.0, 1.0);
  float expf = 1.0 - exp(-uFogDensity * uFogDensity * d * d);
  vFog = clamp(max(lin * lin, expf), 0.0, 1.0);
  gl_Position = projectionMatrix * mv;
}
`,c_=`
precision mediump float;
uniform sampler2D uMap;
uniform float uAlpha;
uniform float uAlphaTest;
uniform float uSun;
uniform vec3 uSunColor;
uniform vec3 uAmbient;
uniform vec3 uTorch;
uniform vec3 uFogColor;
varying vec2 vUv;
varying vec4 vLight;
varying vec3 vTint;
varying float vFog;

void main() {
  vec4 tex = texture2D(uMap, vUv);
  if (tex.a < uAlphaTest) discard;
  float occ = vLight.x;      // затенение углами (AO)
  float sky = vLight.y;      // сколько неба видит грань
  float blk = vLight.z;      // свет от факелов и лавы
  vec3 day = uSunColor * (0.34 + 0.66 * sky) * clamp(uSun, 0.05, 1.25);
  vec3 lit = (uAmbient * (0.5 + 0.5 * sky) + day) * (0.4 + 0.6 * occ) + uTorch * blk * (0.3 + 0.7 * occ);
  vec3 col = tex.rgb * vTint * lit;
  col = clamp(col, 0.0, 1.4);
  col = mix(col, uFogColor, clamp(vFog, 0.0, 1.0));
  gl_FragColor = vec4(col, uAlpha);
}
`;function h_(i,t){const e=(o,a)=>{const l={};for(const[h,u]of Object.entries(t||{}))l[h]=h==="uAlpha"||h==="uAlphaTest"||h==="uWave"?{value:a[h]}:u;return{mat:new an({uniforms:l,vertexShader:l_,fragmentShader:c_,transparent:!!a.transparent,depthWrite:a.depthWrite!==!1,side:Pe}),u:l}},n=e("solid",{uAlpha:1,uAlphaTest:.15,uWave:0}),s=e("water",{uAlpha:.76,uAlphaTest:.02,uWave:1,transparent:!0}),r=Object.assign({},t,{uAlpha:n.u.uAlpha,uAlphaTest:n.u.uAlphaTest,uWave:n.u.uWave});return{solid:n.mat,water:s.mat,uniforms:r,lite:!0,setQuality(){},setShadow(){},setReflection(){},quality(){return 0},dispose(){n.mat.dispose(),s.mat.dispose()}}}function u_(i,t){const e=i?.texture??null,n=new rn({map:e,alphaTest:.1,side:Pe}),s=new rn({map:e,alphaTest:.02,transparent:!0,opacity:.72,side:Pe,depthWrite:!1});return{solid:n,water:s,uniforms:t??{},setQuality(){},setShadow(){},setReflection(){},quality(){return 0},dispose(){n.dispose(),s.dispose()}}}const or={stone:"камень",iron:"железо",diamond:"алмаз"},lr={stone:"cobblestone",iron:"iron_ore",diamond:"diamond_ore"},Ch=[{out:"planks",n:4,need:[["log",1]],name:"Доски"},{out:"stick",n:4,need:[["planks",2]],name:"Палки"},{out:"crafting_table",n:1,need:[["planks",4]],name:"Верстак"},{out:"torch",n:4,need:[["stick",1],["coal_item",1]],name:"Факелы"},{out:"cobblestone",n:1,need:[["stone",1]],name:"Булыжник"},{out:"glass",n:1,need:[["sand",1],["coal_item",1]],table:!0,name:"Стекло"},{out:"stone_bricks",n:4,need:[["stone",2],["coal_item",1]],table:!0,name:"Каменный кирпич"},{out:"bricks",n:4,need:[["clay",2],["coal_item",1]],table:!0,name:"Кирпичи"},{out:"mossy_cobblestone",n:1,need:[["cobblestone",1],["sapling",1]],name:"Замшелый булыжник"},{out:"ice",n:1,need:[["snow",4]],table:!0,name:"Лёд"},{out:"lantern",n:2,need:[["glass",1],["flint",1],["coal_item",1]],name:"Фонарь"},{out:"flint",n:1,need:[["gravel",1]],name:"Кремень из гравия"},{out:"bread",n:1,need:[["wheat",3]],table:!0,name:"Хлеб"},{out:"compass",n:1,need:[["iron_ore",4],["emerald",1]],table:!0,name:"Компас"},{out:"clock",n:1,need:[["gold_ore",4],["redstone_ore",1]],table:!0,name:"Часы"},{out:"shears",n:1,need:[["iron_ore",2]],name:"Ножницы"},{out:"wood_pickaxe",n:1,need:[["planks",3],["stick",1]],name:"Кирка (дерево)"},{out:"wood_axe",n:1,need:[["planks",3],["stick",2]],name:"Топор (дерево)"},{out:"wood_shovel",n:1,need:[["planks",1],["stick",1]],name:"Лопата (дерево)"},{out:"wood_sword",n:1,need:[["planks",2],["stick",1]],name:"Меч (дерево)"},...["stone","iron","diamond"].flatMap(i=>[{out:`${i}_pickaxe`,n:1,need:[[lr[i],3],["stick",2]],table:!0,name:`Кирка (${or[i]})`},{out:`${i}_axe`,n:1,need:[[lr[i],3],["stick",2]],table:!0,name:`Топор (${or[i]})`},{out:`${i}_shovel`,n:1,need:[[lr[i],1],["stick",1]],table:!0,name:`Лопата (${or[i]})`},{out:`${i}_sword`,n:1,need:[[lr[i],2],["stick",1]],table:!0,name:`Меч (${or[i]})`}])],Wa=Ch.filter(i=>{if(!Lt(i.out))return!1;for(const[t]of i.need)if(!Lt(t))return!1;return!0}).map(i=>({outId:Lt(i.out),n:i.n,table:!!i.table,name:i.name,need:i.need.map(([t,e])=>({id:Lt(t),n:e}))}));function d_(i,t=null){const e=[];for(const n of i||[]){if(!n||!n.out||!Array.isArray(n.need)||!n.need.length)continue;const s={...n,mod:t},r={outId:Lt(n.out),n:Math.max(1,n.n|0||1),table:!!n.table,name:n.name,mod:t,need:n.need.map(([o,a])=>({id:Lt(o),n:Math.max(1,a|0||1)}))};Ch.push(s),Wa.push(r),e.push({src:s,clean:r})}return e}function oc(i,t,e){if(i.table&&!e)return!1;for(const n of i.need)if(t.count(n.id)<n.n)return!1;return!0}function f_(i,t){for(const n of i.need)if(t.take(n.id,n.n)!==n.n)return!1;if(t.add(i.outId,i.n)>0){for(const n of i.need)t.add(n.id,n.n);return!1}return!0}const p_=0,Lh=1,pr=2,Ph=3,Xa=4,Ye=dt.length,ki=(i,t,e,n=0)=>t[e]?1:n,mr=new Uint8Array(Ye),m_=new Uint8Array(Ye),qa=new Uint8Array(Ye),Dh=new Uint8Array(Ye),Ih=new Uint8Array(Ye),$a=new Uint8Array(Ye),g_=new Uint8Array(Ye),Uh=new Float32Array(Ye),Nh=new Float32Array(Ye),Ya=new Float32Array(Ye),__=new Uint8Array(Ye),kh=new Uint8Array(Ye),ja=new Uint8Array(Ye);for(let i=0;i<Ye;i++){const t=dt[i];mr[i]=ki(i,t,"opaque"),m_[i]=ki(i,t,"solid"),Ih[i]=ki(i,t,"cutout"),Dh[i]=ki(i,t,"hideSame"),$a[i]=ki(i,t,"fullBright"),g_[i]=ki(i,t,"replaceable"),Uh[i]=t.light||0,Nh[i]=t.inset||0,Ya[i]=t.render==="cross"?t.plantH??.62:1,__[i]=t.render==="item"?1:0,kh[i]=t.tinted?1:0,ja[i]=t.liquid?1:0,qa[i]=t.render==="cube"?Lh:t.render==="liquid"?pr:t.render==="cross"?Ph:t.render==="torch"?Xa:p_}const v_=56,lc=70,x_=61,nt={stone:Lt("stone"),dirt:Lt("dirt"),grass:Lt("grass"),sand:Lt("sand"),sandstone:Lt("sandstone"),gravel:Lt("gravel"),bedrock:Lt("bedrock"),water:Lt("water"),snow:Lt("snow"),podzol:Lt("podzol"),log:Lt("log"),leaves:Lt("leaves"),coal:Lt("coal_ore"),iron:Lt("iron_ore"),gold:Lt("gold_ore"),diamond:Lt("diamond_ore"),redstone:Lt("redstone_ore"),cactus:Lt("cactus"),tall_grass:Lt("tall_grass"),fern:Lt("fern"),flower_red:Lt("flower_red"),flower_yellow:Lt("flower_yellow"),planks:Lt("planks"),glass:Lt("glass"),torch:Lt("torch"),glowstone:Lt("glowstone"),cobblestone:Lt("cobblestone"),stone_bricks:Lt("stone_bricks"),farmland:Lt("farmland"),wheat:Lt("wheat"),hay_block:Lt("hay_block")},Gt={OCEAN:0,BEACH:1,PLAINS:2,FOREST:3,DESERT:4,SNOWY:5,MOUNTAIN:6,SAVANNA:7,SWAMP:8,TAIGA:9},un=32,Rr=un*1.5,cc=12,hc=[Gt.PLAINS,Gt.SAVANNA,Gt.DESERT,Gt.TAIGA,Gt.SNOWY],y_=[[0,0],[38,0],[-38,0],[0,38],[0,-38],[26,26],[-26,-26],[26,-26],[-26,26]],Ka=42,M_=[[.62,.78,1],[.72,.86,1],[.8,.9,1],[.76,.9,1],[.95,.92,.82],[.86,.94,1],[.88,.94,1],[.86,.92,.96],[.52,.72,.56],[.78,.9,.98]],b_=["Океан","Пляж","Равнины","Лес","Пустыня","Снега","Горы","Саванна","Болото","Тайга"],uc=[[.62,.84,.44],[.74,.86,.56],[.62,.84,.44],[.45,.76,.32],[.9,.86,.56],[.76,.88,.82],[.7,.8,.64],[.84,.82,.44],[.5,.64,.3],[.52,.78,.42]];var Pr,Fh;class S_{constructor(t=1){Vr(this,Pr);this.seed=t>>>0,this.h=new Vi(this.seed^1374496513),this.bi=new Vi(this.seed^2654435769),this.cv=new Vi(this.seed^625341585),this.or=new Vi(this.seed^2146121005),this.cache=new Map,this._villages=new Map}climate(t,e){const n=this.bi.fbm2(t/470+13.7,e/470-4.2,3)*.5+.5,s=this.bi.fbm2(t/380-31.3,e/380+57.1,3)*.5+.5;return[n,s]}rawHeight(t,e){const n=this.h.fbm2(t/420,e/420,4)*.5+.5,s=this.h.fbm2(t/118,e/118,3),r=this.h.ridged2(t/260,e/260,3),o=this.h.fbm2(t/46,e/46,1),a=Math.max(0,this.h.fbm2(t/700+220,e/700-120,2)*1.5),l=Math.pow(r,1.9)*(8+a*78);let c=24+n*21+s*10.5+l+o*1.3;return n<.5&&(c-=(.5-n)*58),Math.max(3,Math.min(Jt-8,Math.round(c)))}col(t,e){const n=t*4194304+e;let s=this.cache.get(n);if(s)return s;const r=this.rawHeight(t,e),[o,a]=this.climate(t,e);let l;return r<ze-2?l=Gt.OCEAN:r>=v_?l=Gt.MOUNTAIN:r<=ze+1?l=Gt.BEACH:o>.55&&a<.46?l=Gt.DESERT:o<.36?l=Gt.SNOWY:r<=ze+7&&a>.6?l=Gt.SWAMP:a>.55?l=Gt.FOREST:o>.5&&a>.4?l=Gt.SAVANNA:o<.46&&a>.44?l=Gt.TAIGA:l=Gt.PLAINS,s={h:r,temp:o,humid:a,biome:l},this.cache.set(n,s),s}height(t,e){return this.col(t,e).h}biomeAt(t,e){return this.col(t,e).biome}climateAt(t,e){const n=this.col(t,e);return[n.temp,n.humid]}isCave(t,e,n){const s=Math.abs(this.cv.perlin3(t/52,e/64,n/52));return s<.06&&Math.abs(this.cv.perlin3(t/46+90,e/57+40,n/46-70))<.08||e<24&&s<.16&&this.cv.fbm3(t/26,e/20,n/26,3)>.62}oreCellType(t,e,n){const s=this.or.perlin3(t*.26,e*1.05,n*.26);if(s<.58)return 0;const r=e*4;return r<13&&s>.855?nt.diamond:r<23&&s>.8?nt.redstone:r<31&&s>.755?nt.gold:r<57&&s>.685?nt.iron:s>.625?nt.coal:0}villageSite(t,e){const n=t+","+e;if(this._villages.has(n))return this._villages.get(n);const s=Ke(this,Pr,Fh).call(this,t,e);return this._villages.size>8192&&this._villages.clear(),this._villages.set(n,s),s}villageAt(t,e){const n=Math.floor(t/(un*3)),s=Math.floor(e/(un*3));for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){const a=this.villageSite(n+r,s+o);if(!a)continue;const l=t-a.cx,c=e-a.cz;if(Math.abs(l)<=Rr&&Math.abs(c)<=Rr)return a}return null}villageColumn(t){const{site:e,cell:n,ci:s,cj:r,lx:o,lz:a}=t,l=e.h,c=[],h=Math.abs(o)>cc||Math.abs(a)>cc,u=n.kind==="plaza",d=(_,m)=>{_>=0&&_<Jt&&c.push([_,m])};if(h)return d(l,e.desert?nt.sandstone:nt.gravel),c;if(u){const _=Math.max(Math.abs(o),Math.abs(a));if(_<=1)d(l,nt.cobblestone),d(l+1,nt.water);else if(_===2)d(l,nt.cobblestone),d(l+1,nt.stone_bricks);else if(Math.abs(o)===9&&Math.abs(a)===9){for(let m=l+1;m<=l+3;m++)d(m,nt.log);d(l+4,nt.glowstone),d(l,nt.cobblestone)}else _<=7&&d(l,nt.stone_bricks);return c}const f=n.w>>1,g=n.l>>1;if(n.kind==="house"){const _=o+f,m=a+g,p=_>=0&&m>=0&&_<n.w&&m<n.l,x=n.tall?5:4,v=l+2+x,b=v-1;if(!p)return Math.abs(o)<=f+1&&Math.abs(a)<=g+1&&d(b,nt.planks),c;const R=_===0||m===0||_===n.w-1||m===n.l-1,w=e.desert?nt.sandstone:e.cold?nt.cobblestone:nt.planks,S=nt.log;if(R){const I=(_===0||_===n.w-1)&&(m===0||m===n.l-1),y=_===f,A=m===g,q=(s<1&&_===n.w-1||s>1&&_===0||r<1&&m===n.l-1||r>1&&m===0)&&(s!==1?A:y);for(let j=l+1;j<=l+x;j++){if(q&&(j===l+1||j===l+2)){d(j,0);continue}d(j,I||j===l+x?S:w)}!q&&(s!==1?A:y)&&(d(l+3,nt.glass),d(l+2,nt.glass)),d(l,e.desert?nt.sand:nt.cobblestone),q&&d(l+3,nt.log)}else{d(l,nt.planks);const I=_===0||m===0||_===n.w-1||m===n.l-1;for(let y=l+1;y<b;y++)d(y,0);if(d(b,nt.planks),d(v,I?nt.planks:0),_===f&&m===g&&d(v,nt.log),_===1&&m===1)for(let y=l+1;y<=v+1;y++)d(y,nt.cobblestone);_===f&&m===g&&n.tall&&d(v+1,nt.glowstone)}return c}if(n.kind==="farm"){const _=Math.abs(o)<=8&&Math.abs(a)<=6;if(Math.abs(o-9)<=1&&Math.abs(a+5)<=1)return d(l,nt.water),c;if(Math.abs(o)===10||Math.abs(a)===8)return d(l+1,nt.log),c;if(!_)return c;const p=(a+6)%2===0;return d(l,p?nt.farmland:nt.dirt),p&&d(l+1,nt.wheat),Math.abs(o+9)<=1&&Math.abs(a-6)<=1&&(d(l+1,nt.hay_block),o===-9&&a===6&&d(l+2,nt.hay_block)),c}return Math.abs(o)===4&&Math.abs(a)===4&&!(o+a&2)&&d(l+1,nt.hay_block),Math.abs(o)===7&&Math.abs(a)===1&&(d(l+1,nt.log),d(l+2,nt.log)),c}treeAt(t,e){if(E_(this,t,e))return null;const n=at(t,e,this.seed^1540483477),s=this.col(t,e),r=s.biome;if(s.h>x_)return null;const o=r===Gt.FOREST?.055:r===Gt.TAIGA?.042:r===Gt.PLAINS?.008:r===Gt.SAVANNA?.006:r===Gt.SWAMP?.03:r===Gt.SNOWY?.02:r===Gt.MOUNTAIN?.004:0;if(r===Gt.DESERT)return n>.006||s.h<=ze+1?null:{kind:"cactus",trunk:2+(at(t,e,7)*3|0),h:s.h};if(o===0||n>o)return null;const a=s.h;if(a<=ze+1||Math.max(Math.abs(a-this.col(t+1,e).h),Math.abs(a-this.col(t,e-1).h),Math.abs(a-this.col(t-1,e).h),Math.abs(a-this.col(t,e+1).h))>4)return null;const c=r===Gt.SNOWY||r===Gt.MOUNTAIN||r===Gt.TAIGA||r===Gt.SWAMP,h=c?6+(at(t,e,11)*5|0):4+(at(t,e,13)*3|0);return{kind:c?"spruce":"oak",trunk:h,h:a}}treeBlocks(t,e){const n=this.treeAt(t,e);if(!n)return null;const s=[],r=n.h;if(n.kind==="cactus"){for(let a=1;a<=n.trunk;a++)s.push([0,r+a,0,nt.cactus]);return s}if(n.kind==="spruce"){for(let l=1;l<=n.trunk;l++)s.push([0,r+l,0,nt.log]);const a=r+n.trunk;for(let l=0;l<3;l++){const c=l===0?2:l===1?1:0;for(let h=-c;h<=c;h++)for(let u=-c;u<=c;u++)Math.abs(h)+Math.abs(u)>c+1||h===0&&u===0||s.push([h,a-1-l,u,nt.leaves])}return s.push([0,a+1,0,nt.leaves]),s}for(let a=1;a<=n.trunk;a++)s.push([0,r+a,0,nt.log]);const o=r+n.trunk;for(let a=-2;a<=1;a++){const l=a<=-1?2:1;for(let c=-l;c<=l;c++)for(let h=-l;h<=l;h++){const u=Math.abs(c)+Math.abs(h);if(u>l+1||c===0&&h===0&&a<1||u===l+1&&at(t+c,e+h+a*3,this.seed+31)>.6)continue;const d=o+a;d>=Jt||s.push([c,d,h,nt.leaves])}}return s.push([0,o+1,0,nt.leaves]),s}generate(t){this.cache.clear();const{cx:e,cz:n}=t,s=t.blocks,r=new Uint8Array(it*it);(!t.biomes||t.biomes.length!==it*it)&&(t.biomes=new Uint8Array(it*it));const o=t.biomes;s.fill(0);let a=0,l=0;for(let c=0;c<it;c++)for(let h=0;h<it;h++){const u=e*it+h,d=n*it+c,f=this.col(u,d),g=f.h,_=f.biome,m=f.temp;r[c*it+h]=g,g>l&&(l=g),o[c*it+h]=_;let p=-1,x=0;const v=_===Gt.DESERT||_===Gt.BEACH,b=_===Gt.SNOWY||_===Gt.TAIGA||g>=lc&&m<.45,R=_===Gt.SWAMP;for(let S=0;S<=g;S++){let I;S===0?I=nt.bedrock:S===g?g<=ze+1?I=at(u,d,91)>.86?nt.gravel:nt.sand:R?I=g<=ze+2?nt.podzol:nt.grass:v?I=nt.sand:b?I=nt.snow:_===Gt.MOUNTAIN?I=nt.stone:_===Gt.SNOWY?I=nt.podzol:I=nt.grass:S>g-4?(I=v||g<=ze+1?nt.dirt:b||_===Gt.MOUNTAIN?nt.stone:nt.dirt,v&&S<g-1&&(I=nt.sandstone)):(I=nt.stone,S>1&&this.isCave(u,S,d)?I=0:S<g-3&&(S>>2!==p&&(p=S>>2,x=this.oreCellType(u,p,d)),x&&Ng(u,S,d,this.seed+x*17)<T_[x]&&(I=x)),S===1&&at(u*3,d*5,this.seed+5)>.55&&(I=nt.bedrock)),I&&(s[se(h,S,c)]=I,a++)}const w=R?ze+1:ze;for(let S=g+1;S<=w;S++)s[se(h,S,c)]=nt.water;w>l&&(l=w)}try{for(let c=0;c<it;c++)for(let h=0;h<it;h++){const u=e*it+h,d=n*it+c,f=Oh(this,u,d);if(!f)continue;const g=w_(f,u-f.cx,d-f.cz);if(!g)continue;const _=this.villageColumn(g),m=r[c*it+h];let p=f.h;if(!s[se(h,f.h,c)]){let x=f.h;for(;x>0&&!s[se(h,x-1,c)]&&f.h-x<10;)x--;for(let v=f.h;v>=x;v--)s[se(h,v,c)]=v===f.h?f.top:nt.dirt}if(m<f.h)for(let x=m+1;x<=f.h;x++)s[se(h,x,c)]=x===f.h?f.top:nt.dirt;else if(m>f.h){for(let x=f.h+1;x<=m;x++)s[se(h,x,c)]=0;s[se(h,f.h,c)]=f.top}for(const[x,v]of _)s[se(h,x,c)]=v,v!==0&&x>p&&(p=x),x+1>l&&(l=x+1);r[c*it+h]=Math.min(Jt-1,p)}for(let c=-3;c<it+3;c++)for(let h=-3;h<it+3;h++){const u=e*it+h,d=n*it+c,f=this.treeBlocks(u,d);if(f)for(const[g,_,m,p]of f){const x=h+g,v=c+m;if(x<0||v<0||x>=it||v>=it)continue;const b=_;if(b<0||b>=Jt)continue;const R=se(x,b,v),w=s[R];(p!==nt.leaves||w===0||w===nt.tall_grass)&&(p===nt.log?s[R]=p:w===0&&(s[R]=p,a++),b+1>l&&(l=b+1))}}}catch(c){Bh(this,c)}for(let c=0;c<it;c++)for(let h=0;h<it;h++){const u=e*it+h,d=n*it+c,f=r[c*it+h];if(f<=ze||f>=lc)continue;const g=se(h,f,c);if(s[g]!==nt.grass&&s[g]!==nt.podzol)continue;const _=at(u,d,this.seed^668265263),m=se(h,f+1,c);if(s[m]!==0)continue;const p=this.col(u,d).biome,x=p===Gt.FOREST||p===Gt.SWAMP,v=p===Gt.SAVANNA;f+1>l&&(l=f+1);const b=at(u>>2,d>>2,this.seed+23601>>>0),R=b>.72?.2:b>.46?.6:1,w=(x?.115:v?.062:.085)*R,S=w+(x?.05:.026)*R;_<w?s[m]=nt.tall_grass:_<S?s[m]=nt.fern:_>.968?s[m]=nt.flower_red:_>.95&&(s[m]=nt.flower_yellow)}return t.hmax=Math.min(Jt-1,l),a}}Pr=new WeakSet,Fh=function(t,e){if(at(t*3+1,e*7+5,(this.seed^5350175)>>>0)<.72)return null;const n=Math.round((at(t+11,e-3,this.seed+91>>>0)-.5)*14),s=Math.round((at(t-7,e+17,this.seed+441>>>0)-.5)*14),r=t*un*3+un*1.5+n,o=e*un*3+un*1.5+s,a=this.col(r,o);if(!hc.includes(a.biome))return null;let l=255,c=0;for(const[g,_]of y_){const m=this.col(r+g,o+_);if(!hc.includes(m.biome))return null;m.h<l&&(l=m.h),m.h>c&&(c=m.h)}if(c-l>6||l<=ze+1)return null;const h=Math.max(ze+2,Math.round((l+c)/2)),u=a.biome===Gt.DESERT,d=a.biome===Gt.SNOWY||a.biome===Gt.TAIGA,f=[];for(let g=0;g<3;g++)for(let _=0;_<3;_++){if(_===1&&g===1){f.push({kind:"plaza"});continue}const m=at(t*97+_*13+5,e*61+g*29+7,this.seed+_*31+g*733>>>0),p=m<.56?"house":m<.78?"farm":"yard",x=at(_*7+e,g*11+t,this.seed+17>>>0);f.push({kind:p,w:9+(x>.55?3:0)+(x>.86?2:0),l:9+(x>.35&&x<=.6?3:0),tall:x>.72})}return f.some(g=>g.kind==="house")||(f[0]={...f[0],kind:"house",w:9,l:9,tall:!1}),{cx:r,cz:o,h,biome:a.biome,desert:u,cold:d,cells:f,top:u?nt.sand:d&&a.biome===Gt.SNOWY?nt.snow:nt.grass}};function Oh(i,t,e){try{return typeof i.villageAt=="function"?i.villageAt(t,e):null}catch(n){return Bh(i,n),null}}const E_=(i,t,e)=>!!Oh(i,t,e);function w_(i,t,e){const n=Math.floor((t+Rr)/un),s=Math.floor((e+Rr)/un);return n<0||s<0||n>2||s>2?null:{site:i,ci:n,cj:s,lx:t-(n-1)*un,lz:e-(s-1)*un,cell:i.cells[s*3+n]}}function Bh(i,t){i&&i._villageWarned||(i&&(i._villageWarned=!0),console.warn("застройка деревень пропущена (мир генерируется без неё):",t?.message??t))}function zh(i,t,e){const n=i?.terrain;return typeof n?.villageAt=="function"?!!n.villageAt(Math.floor(t),Math.floor(e)):!1}const T_={[nt.coal]:.42,[nt.iron]:.34,[nt.gold]:.26,[nt.diamond]:.22,[nt.redstone]:.32},dc=2,A_=3,mo=[{dir:[1,0,0],shade:.76,verts:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],uv:[[0,1],[0,0],[1,0],[1,1]]},{dir:[-1,0,0],shade:.76,verts:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],uv:[[0,1],[0,0],[1,0],[1,1]]},{dir:[0,1,0],shade:1,verts:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]},{dir:[0,-1,0],shade:.52,verts:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{dir:[0,0,1],shade:.9,verts:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],uv:[[0,1],[0,0],[1,0],[1,1]]},{dir:[0,0,-1],shade:.9,verts:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],uv:[[0,1],[0,0],[1,0],[1,1]]}],fc=1024,R_=10,C_=8192,Wi=[];function pc(){for(let i=0;i<Wi.length;i++)if(Wi[i].cap>=fc){const t=Wi[i];return Wi.splice(i,1),t.reset(),t}return new Hh(fc)}function mc(i){i&&Wi.length<R_&&i.cap<=C_&&(i.reset(),Wi.push(i))}const Xi={ao:!0,smoothLight:!0},L_=[.4,.6,.8,1],P_=.125;class Hh{constructor(t=4096){this.cap=t,this.pos=new Float32Array(t*12),this.uv=new Float32Array(t*8),this.light=new Float32Array(t*16),this.tint=new Float32Array(t*12),this.index=new Uint32Array(t*6),this.tr=1,this.tg=1,this.tb=1,this.q=0}setTint(t,e,n){this.tr=t,this.tg=e,this.tb=n}ensure(){if(this.q<this.cap)return;this.cap=Math.max(64,this.cap*2);const t=(e,n)=>{const s=new e.constructor(this.cap*n);return s.set(e),s};this.pos=t(this.pos,12),this.uv=t(this.uv,8),this.light=t(this.light,16),this.tint=t(this.tint,12),this.index=t(this.index,6)}push(t,e,n,s){this.ensure();const r=this.q*12,o=this.q*12,a=this.q*16,l=this.q*8,c=this.q*6;for(let d=0;d<4;d++){const f=t[d],g=n[d],_=r+d*3;this.pos[_]=f[0],this.pos[_+1]=f[1],this.pos[_+2]=f[2];const m=a+d*4;this.light[m]=g[0],this.light[m+1]=g[1],this.light[m+2]=g[2],this.light[m+3]=g[3]||0;const p=o+d*3;this.tint[p]=this.tr,this.tint[p+1]=this.tg,this.tint[p+2]=this.tb,this.uv[l+d*2]=e[d][0],this.uv[l+d*2+1]=e[d][1]}const h=this.q*4,u=this.index;s?(u[c]=h+1,u[c+1]=h+2,u[c+2]=h+3,u[c+3]=h+1,u[c+4]=h+3,u[c+5]=h):(u[c]=h,u[c+1]=h+1,u[c+2]=h+2,u[c+3]=h,u[c+4]=h+2,u[c+5]=h+3),this.q++}take(){return this.q===0?null:{position:this.pos.slice(0,this.q*12),uv:this.uv.slice(0,this.q*8),light:this.light.slice(0,this.q*16),tint:this.tint.slice(0,this.q*12),index:this.index.slice(0,this.q*6),quads:this.q,vertices:this.q*4}}reset(){this.q=0,this.tr=1,this.tg=1,this.tb=1}slice(){return this.q===0?null:{position:this.pos.subarray(0,this.q*12),uv:this.uv.subarray(0,this.q*8),light:this.light.subarray(0,this.q*16),tint:this.tint.subarray(0,this.q*12),index:this.index.subarray(0,this.q*6),quads:this.q,vertices:this.q*4}}}function Cr(i,t,e,n){const s=t*n,r=i%n,o=i/n|0,a=(t-e)/2;return{u0:(r*t+a)/s,v0:(o*t+a)/s,s:e/s}}const Za=21,Ja=Za*Za;let gs=null;function D_(i){const t=i*Ja;return!gs||gs.length<t?gs=new Uint8Array(t):gs.fill(0,0,t),gs}class I_{constructor(t,e,n){const s=[];for(let r=0;r<9;r++)s.push(null);this.at=(r,o)=>{var a;return s[a=(r+1)*3+(o+1)]??(s[a]=t.getChunk(e+r,n+o)??void 0)},this.world=t,this.cx=e,this.cz=n}}function U_(i,t,e){const n=pc();let s=null;const r=t.cx,o=t.cz,a=t.blocks,l=t.biomes,c=new I_(i,r,o),h=it,u=(C,P,X)=>{if(P<0)return 1;if(P>=Jt)return 0;if(C>=0&&C<h&&X>=0&&X<h)return a[se(C,P,X)];const N=C<0?-1:C>=h?1:0,H=X<0?-1:X>=h?1:0,$=c.at(N,H);return $?$.blocks[se(C+(N?-N*h:0),P,X+(H?-H*h:0))]:0},d=(C,P,X)=>{if(C>=0&&C<h&&X>=0&&X<h)return mr[a[se(C,P,X)]]===1;const N=C<0?-1:C>=h?1:0,H=X<0?-1:X>=h?1:0,$=c.at(N,H);return $?mr[$.blocks[se(C+(N?-N*h:0),P,X+(H?-H*h:0))]]===1:!1},f=(C,P,X)=>{if(P>=Jt)return 1;const N=C<0?-1:C>=h?1:0,H=X<0?-1:X>=h?1:0,$=N||H?c.at(N,H):t,tt=C+(N?-N*h:0),et=X+(H?-H*h:0);let V;return $?V=$.skyH[(et&15)*h+(tt&15)]:V=i.terrain.col(r*h+C,o*h+X).h+1,V===255||P>=V?1:Math.max(.13,1-(V-P)*.055)},g=(C,P,X)=>{if(P<0||P>=Jt)return 0;const N=C<0?-1:C>=h?1:0,H=X<0?-1:X>=h?1:0,$=N||H?c.at(N,H):t;return!$||!$.light?0:$.light[se(C+(N?-N*h:0),P,X+(H?-H*h:0))]},_=[0,0,0],m=[0,0,0],p=[0,0,0],x=[0,0,0],v=[0,0],b=[0,0],R=[0,0],w=[0,0],S=[0,0,0],I=[0,0,0],y=[0,0,0],A=[0,0,0],G=t.hmax?Math.min(Jt,Math.max(t.hmax+2,Th)):Jt,q=D_(Math.min(Jt,G+2)+1),j=(C,P,X)=>{if(P<0)return!0;if(P>=Jt)return!1;if(C<-2||C>h+1||X<-2||X>h+1||(P+1)*Ja>=q.length)return d(C,P,X);const N=(P+1)*Ja+(X+2)*Za+(C+2),H=q[N];if(H)return H===2;const $=d(C,P,X)?2:1;return q[N]=$,$===2};for(let C=0;C<G;C++)for(let P=0;P<h;P++){const X=(C*h+P)*h;for(let N=0;N<h;N++){const H=a[X+N];if(H===0)continue;const $=qa[H],tt=dt[H];let et=1,V=1,K=1;if(kh[H]||ja[H]){const yt=l?l[P*h+N]:2,ut=(ja[H]?M_:uc)[yt]??uc[2];et=ut[0],V=ut[1],K=ut[2]}if(n.setTint(et,V,K),s&&s.setTint(et,V,K),$===Ph||$===Xa){const yt=Cr(e.index[tt.tiles.all],e.cell,e.tile,e.grid),ut=$a[H]?1:g(N,C,P),qt=(Q,mt)=>[yt.u0+Q*yt.s,yt.v0+mt*yt.s];v[0]=qt(0,1)[0],v[1]=qt(0,1)[1],b[0]=qt(0,0)[0],b[1]=qt(0,0)[1],R[0]=qt(1,0)[0],R[1]=qt(1,0)[1],w[0]=qt(1,1)[0],w[1]=qt(1,1)[1],S[0]=I[0]=y[0]=A[0]=1,S[1]=I[1]=y[1]=A[1]=1,S[2]=I[2]=y[2]=A[2]=ut,S[3]=I[3]=y[3]=A[3]=0;const J=[v,b,R,w],Y=[S,I,y,A];if($===Xa)n.push([[N+.6,C,P+.6],[N+.6,C+.625,P+.6],[N+.4,C+.625,P+.6],[N+.4,C,P+.6]],J,Y),n.push([[N+.4,C,P+.4],[N+.4,C+.625,P+.4],[N+.6,C+.625,P+.4],[N+.6,C,P+.4]],J,Y),n.push([[N+.6,C,P+.4],[N+.6,C+.625,P+.4],[N+.6,C+.625,P+.6],[N+.6,C,P+.6]],J,Y),n.push([[N+.4,C,P+.6],[N+.4,C+.625,P+.6],[N+.4,C+.625,P+.4],[N+.4,C,P+.4]],J,Y),n.push([[N+.4,C+.625,P+.6],[N+.6,C+.625,P+.6],[N+.6,C+.625,P+.4],[N+.4,C+.625,P+.4]],[v,b,R,w],Y);else{const ot=Ya[H]>0?Ya[H]:1;n.push([[N+.146,C,P+.146],[N+.146,C+ot,P+.146],[N+.854,C+ot,P+.854],[N+.854,C,P+.854]],J,Y),n.push([[N+.854,C,P+.146],[N+.854,C+ot,P+.146],[N+.146,C+ot,P+.854],[N+.146,C,P+.854]],J,Y)}continue}if($!==Lh&&$!==pr)continue;const ht=$===pr;let xt=n;ht&&(s||(s=pc(),s.setTint(et,V,K)),xt=s);const _t=Nh[H],Nt=$a[H]===1,Ft=Uh[H],Pt=Ih[H]===1,te=Dh[H]===1,F=ht&&u(N,C+1,P)!==H?P_:0,ue=tt.tiles,At=Xi.ao&&!ht&&!Nt&&!Pt;for(let yt=0;yt<6;yt++){const ut=mo[yt],qt=N+ut.dir[0],Dt=C+ut.dir[1],T=P+ut.dir[2],M=u(qt,Dt,T);if(M===H&&te||M!==0&&(mr[M]===1||ht&&qa[M]===pr))continue;const O=yt===dc?ue.top??ue.all:yt===A_?ue.bottom??ue.all:ue.side??ue.all,J=e.index[O]??e.index[ue.all],Y=Cr(J,e.cell,e.tile,e.grid),Q=ht&&F>0&&yt===dc?1:0;let mt=f(qt,Dt,T);Xi.smoothLight||(mt=mt>=1?1:.28);const ot=Nt?1:Ft>0?Math.max(Ft,g(qt,Dt,T)):g(qt,Dt,T),gt=ut.shade,Tt=[_,m,p,x],Ot=[v,b,R,w],Z=[S,I,y,A],ee=[0,0,0,0];for(let St=0;St<4;St++){const Mt=ut.verts[St];Tt[St][0]=_t?N+(Mt[0]?1-_t:_t):N+Mt[0],Tt[St][1]=C+Mt[1]-(Mt[1]===1?F:0),Tt[St][2]=_t?P+(Mt[2]?1-_t:_t):P+Mt[2];let Et=gt;if(At){const kt=ut.verts[St+1&3],ne=ut.verts[St+3&3],ce=kt[0]-Mt[0],Vt=kt[1]-Mt[1],st=kt[2]-Mt[2],L=ne[0]-Mt[0],lt=ne[1]-Mt[1],ct=ne[2]-Mt[2],Rt=j(qt+ce,Dt+Vt,T+st)?1:0,wt=j(qt+L,Dt+lt,T+ct)?1:0,re=Rt&&wt?0:j(qt+ce+L,Dt+Vt+lt,T+st+ct)?1:0,ie=Rt&&wt?0:3-(Rt+wt+re);Et*=L_[ie],ee[St]=ie}Z[St][0]=Et,Z[St][1]=mt,Z[St][2]=ot,Z[St][3]=Q;const pt=ut.uv[St];Ot[St][0]=Y.u0+pt[0]*Y.s,Ot[St][1]=Y.v0+pt[1]*Y.s}xt.push(Tt,Ot,Z,ee[0]+ee[2]>ee[1]+ee[3])}}}const D={solid:n.take(),water:s?s.take():null};return mc(n),mc(s),D}const Yn={pig:{name:"Свинья",hp:10,w:.85,h:.9,speed:1.5,passive:!0,aggro:0,drops:()=>[{id:Lt("pork"),n:2}],parts:[{p:[0,.05,.28],s:[.75,.6,.9],tile:"mob_pig",shade:1},{p:[0,.32,-.5],s:[.42,.42,.34],tile:"mob_face",shade:.95},{p:[0,.18,-.68],s:[.28,.2,.1],tile:"mob_snout",shade:.9},{p:[-.24,-.3,.28],s:[.2,.42,.2],tile:"mob_pig",shade:.72,limb:1},{p:[.24,-.3,.28],s:[.2,.42,.2],tile:"mob_pig",shade:.72,limb:1},{p:[-.24,-.3,-.22],s:[.2,.42,.2],tile:"mob_pig",shade:.72,limb:1},{p:[.24,-.3,-.22],s:[.2,.42,.2],tile:"mob_pig",shade:.72,limb:1}]},cow:{name:"Корова",hp:14,w:1.1,h:1.25,speed:1.4,passive:!0,aggro:0,drops:()=>[{id:Lt("leather"),n:2},{id:Lt("pork"),n:1}],parts:[{p:[0,.1,.25],s:[.95,.8,1.15],tile:"mob_cow",shade:1},{p:[0,.38,-.62],s:[.55,.52,.42],tile:"mob_face",shade:.96},{p:[-.36,.62,-.55],s:[.14,.16,.14],tile:"mob_cow",shade:1.05},{p:[.36,.62,-.55],s:[.14,.16,.14],tile:"mob_cow",shade:1.05},{p:[-.3,-.35,.45],s:[.24,.5,.24],tile:"mob_cow",shade:.7,limb:1},{p:[.3,-.35,.45],s:[.24,.5,.24],tile:"mob_cow",shade:.7,limb:1},{p:[-.3,-.35,-.1],s:[.24,.5,.24],tile:"mob_cow",shade:.7,limb:1},{p:[.3,-.35,-.1],s:[.24,.5,.24],tile:"mob_cow",shade:.7,limb:1}]},sheep:{name:"Овца",hp:8,w:.9,h:1.15,speed:1.5,passive:!0,aggro:0,drops:()=>[{id:Lt("wool_white"),n:2}],parts:[{p:[0,.1,.2],s:[.8,.75,1],tile:"mob_sheep",shade:1},{p:[0,.45,-.45],s:[.45,.42,.36],tile:"mob_face",shade:.9},{p:[-.26,-.32,.3],s:[.2,.45,.2],tile:"mob_sheep",shade:.72,limb:1},{p:[.26,-.32,.3],s:[.2,.45,.2],tile:"mob_sheep",shade:.72,limb:1},{p:[-.26,-.32,-.05],s:[.2,.45,.2],tile:"mob_sheep",shade:.72,limb:1},{p:[.26,-.32,-.05],s:[.2,.45,.2],tile:"mob_sheep",shade:.72,limb:1}]},husk:{name:"Сумеречник",hp:18,w:.6,h:1.85,speed:2.5,hostile:!0,damage:3,reach:1.8,aggro:20,burnsInSun:!0,drops:()=>[{id:Lt("coal_item"),n:1}],parts:[{p:[0,.35,0],s:[.55,.7,.32],tile:"mob_husk",shade:1},{p:[0,.82,0],s:[.44,.44,.44],tile:"mob_husk",shade:1.06},{p:[-.36,.4,.16],s:[.18,.62,.18],tile:"mob_husk",shade:.8,limb:1},{p:[.36,.4,.16],s:[.18,.62,.18],tile:"mob_husk",shade:.8,limb:1},{p:[-.14,-.42,0],s:[.2,.7,.2],tile:"mob_husk",shade:.72,limb:1},{p:[.14,-.42,0],s:[.2,.7,.2],tile:"mob_husk",shade:.72,limb:1}]},villager:{name:"Житель",hp:20,w:.7,h:1.9,speed:1,passive:!0,aggro:0,villageOnly:!0,drops:()=>[{id:Lt("emerald"),n:1}],parts:[{p:[0,.05,.02],s:[.66,1.1,.46],tile:"mob_villager",shade:1},{p:[0,.62,0],s:[.52,.5,.52],tile:"mob_villager_face",shade:.98},{p:[0,.58,-.3],s:[.2,.22,.16],tile:"mob_villager_face",shade:1.12},{p:[-.4,.12,.02],s:[.16,.74,.22],tile:"mob_villager",shade:.78,limb:1},{p:[.4,.12,.02],s:[.16,.74,.22],tile:"mob_villager",shade:.78,limb:1},{p:[-.16,-.62,.02],s:[.24,.55,.26],tile:"mob_villager",shade:.64,limb:1},{p:[.16,-.62,.02],s:[.24,.55,.26],tile:"mob_villager",shade:.64,limb:1}]},crawler:{name:"Пещерник",hp:12,w:.95,h:.75,speed:3.1,hostile:!0,damage:2,reach:1.6,aggro:13,jumps:!0,darkOnly:!0,drops:()=>[{id:Lt("glowstone"),n:1}],parts:[{p:[0,.05,0],s:[.8,.5,.8],tile:"mob_crawler",shade:1},{p:[0,.2,-.42],s:[.4,.34,.34],tile:"mob_crawler",shade:1.08},{p:[-.4,-.15,.24],s:[.16,.34,.16],tile:"mob_crawler",shade:.7,limb:1},{p:[.4,-.15,.24],s:[.16,.34,.16],tile:"mob_crawler",shade:.7,limb:1},{p:[-.4,-.15,-.24],s:[.16,.34,.16],tile:"mob_crawler",shade:.7,limb:1},{p:[.4,-.15,-.24],s:[.16,.34,.16],tile:"mob_crawler",shade:.7,limb:1}]}},N_=24,k_=96,F_=16,gc=44;function Fi(i,t,e,n,s,r){const a=Math.floor(t-s/2+.001),l=Math.floor(t+s/2-.001),c=Math.floor(e+.001),h=Math.floor(e+r-.001),u=Math.floor(n-s/2+.001),d=Math.floor(n+s/2-.001);for(let f=c;f<=h;f++){if(f<0)return!0;for(let g=u;g<=d;g++)for(let _=a;_<=l;_++)if(i.isSolid(_,f,g))return!0}return!1}function O_(i,t,e){const n=new Hh(6),s=Cr(t.index[i.tile]??0,t.cell,t.tile,t.grid),r=i.shade??1,[o,a,l]=i.s,c=i.p[1]+e,h=[[0,0,0],[0,0,0],[0,0,0],[0,0,0]],u=[[0,0],[0,0],[0,0],[0,0]],d=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];for(const m of mo){for(let p=0;p<4;p++){const x=m.verts[p];h[p][0]=i.p[0]+(x[0]-.5)*o,h[p][1]=c+(x[1]-.5)*a,h[p][2]=i.p[2]+(x[2]-.5)*l;const v=m.uv[p];u[p][0]=s.u0+v[0]*s.s,u[p][1]=s.v0+v[1]*s.s,d[p][0]=r*m.shade,d[p][1]=1,d[p][2]=0,d[p][3]=0}n.push([[h[0][0],h[0][1],h[0][2]],[h[1][0],h[1][1],h[1][2]],[h[2][0],h[2][1],h[2][2]],[h[3][0],h[3][1],h[3][2]]],[[u[0][0],u[0][1]],[u[1][0],u[1][1]],[u[2][0],u[2][1]],[u[3][0],u[3][1]]],[[d[0][0],d[0][1],d[0][2],d[0][3]],[d[1][0],d[1][1],d[1][2],d[1][3]],[d[2][0],d[2][1],d[2][2],d[2][3]],[d[3][0],d[3][1],d[3][2],d[3][3]]],!1)}const f=n.slice(),g=new Le;g.setAttribute("position",new me(f.position,3)),g.setAttribute("uv",new me(f.uv,2)),g.setAttribute("light",new me(f.light,4));const _=new Float32Array(f.tint.length);return _.fill(1),g.setAttribute("tint",new me(_,3)),g.setIndex(new me(f.index,1)),g.computeBoundingSphere(),g}class B_{constructor(t,e,n,s,r){const o=Yn[t];this.type=t,this.def=o,this.id=r,this.x=e,this.y=n,this.z=s,this.vx=0,this.vy=0,this.vz=0,this.yaw=Math.random()*Math.PI*2,this.hp=o.hp,this.onGround=!1,this.think=Math.random()*2,this.walkPhase=Math.random()*6,this.hurtT=0,this.attackCd=0,this.fleeT=0,this.burnT=0,this.lightKey=-1,this.parts=[],this.group=new yn}}var Re,Gh,Vh,xs,ys,Wh;class z_{constructor({world:t,scene:e,material:n,atlas:s,onPlayerHit:r,onDrop:o,particles:a,audio:l,rng:c=Math.random}){Vr(this,Re);this.world=t,this.scene=e,this.material=n,this.atlas=s,this.onPlayerHit=r??(()=>{}),this.onDrop=o??(()=>{}),this.particles=a,this.audio=l,this.rng=c,this.list=[],this.cap=14,this.enabled=!0,this.spawnT=1,this.day=1,this.nextId=1,this.kills=0}get count(){return this.list.length}clear(){for(const t of this.list){this.scene.remove(t.group);for(const e of t.parts)e.geo.dispose()}this.list.length=0}dispose(){this.clear()}trySpawn(t){if(!this.enabled||this.list.length>=this.cap)return!1;const e=this.world,n=this.day<.3,s=Object.keys(Yn),r=[];for(const o of e.chunks.values()){if(!o?.blocks)continue;const a=o.cx*16+8-t.x,l=o.cz*16+8-t.z,c=Math.hypot(a,l);(c>6||c<gc)&&r.push(o)}for(let o=0;o<14&&r.length;o++){const a=r[this.rng()*r.length|0],l=this.rng()*16|0,c=this.rng()*16|0,h=a.cx*16+l,u=a.cz*16+c,d=h-t.x,f=u-t.z,g=Math.hypot(d,f);if(g<F_*.55||g>gc)continue;let _=e.terrain.col(h,u).h;for(let y=0;y<10&&e.isSolid(h,_+1,u);y++)_++;if(_<3)continue;const m=e.getBlock(h,_,u);if(!m||rc(m))continue;const p=_+1,x=e.skyAt(h,p,u),v=Math.max(x*15*(n?.22:1),e.lightAt(h,p,u)*15),b=zh(e,h,u),R=s.filter(y=>Ke(this,Re,Vh).call(this,Yn[y],n,v,p,b));if(!R.length)continue;const w=R[this.rng()*R.length|0],S=Yn[w];if(Fi(e,h+.5,p,u+.5,S.w,S.h))continue;const I=new B_(w,h+.5,p,u+.5,this.nextId++);return Ke(this,Re,Gh).call(this,I),I.lightKey=-1,Ke(this,Re,ys).call(this,I,!0),this.list.push(I),!0}return!1}pick(t,e,n,s,r,o,a){let l=null,c=a;for(const h of this.list){const u=h.def.w/2+.14,d=h.def.h,f=[h.x-u,h.y,h.z-u],g=[h.x+u,h.y+d,h.z+u],_=[t,e,n],m=[s,r,o];let p=0,x=c,v=!0;for(let b=0;b<3;b++){if(Math.abs(m[b])<1e-6){if(_[b]<f[b]||_[b]>g[b]){v=!1;break}continue}let R=(f[b]-_[b])/m[b],w=(g[b]-_[b])/m[b];if(R>w){const S=R;R=w,w=S}if(p=Math.max(p,R),x=Math.min(x,w),p>x){v=!1;break}}v&&x>=0&&p<=c&&(c=p,l=h)}return l}hurt(t,e,n,s,r=5.5){if(!t||t.hp<=0)return!1;t.hp-=e,t.hurtT=.3,t.def.passive&&(t.fleeT=5);const o=t.x-n,a=t.z-s,l=Math.hypot(o,a)||1;return t.vx+=o/l*r,t.vz+=a/l*r,t.vy=Math.max(t.vy,4),this.particles?.burst(t.x,t.y+t.def.h*.6,t.z,8,t.def.hostile?[.5,.75,.45]:[.9,.4,.4],{speed:2.6,life:.5,spread:.5}),this.audio?.hit?.("soft",1.5),Ke(this,Re,ys).call(this,t,!0),t.hp<=0&&(this.kills++,Ke(this,Re,xs).call(this,t,!0)),!0}update(t,e){if(!(!this.world||!e)){if(!this.enabled||this.cap<=0){this.list.length&&this.clear();return}this.spawnT-=t,this.spawnT<=0&&(this.spawnT=.8,this.trySpawn(e));for(let n=this.list.length-1;n>=0;n--){const s=this.list[n];if(Math.hypot(s.x-e.x,s.z-e.z)>k_||Math.abs(s.y-e.y)>48){Ke(this,Re,xs).call(this,s,!1);continue}Ke(this,Re,Wh).call(this,s,t,e)}}}nearCount(t,e=40){let n=0;for(const s of this.list)Math.hypot(s.x-t.x,s.z-t.z)<e&&n++;return n}}Re=new WeakSet,Gh=function(t){const e=t.def.h/2;for(const n of t.def.parts){const s=O_(n,this.atlas,e),r=new xe(s,this.material);r.position.set(0,0,0),t.parts.push({mesh:r,geo:s,base:n.p,limb:!!n.limb}),t.group.add(r)}t.group.position.set(t.x,t.y,t.z),t.group.rotation.y=t.yaw,this.scene.add(t.group)},Vh=function(t,e,n,s,r=!1){return t.villageOnly?r:t.hostile&&r||t.darkOnly&&n>7||s<6?!1:e||n>7},xs=function(t,e){const n=this.list.indexOf(t);n>=0&&this.list.splice(n,1),this.scene.remove(t.group);for(const s of t.parts)s.geo.dispose();if(e){this.particles?.burst(t.x,t.y+t.def.h*.5,t.z,18,[.85,.85,.85],{speed:3.4,life:.7,spread:.6});for(const s of t.def.drops?t.def.drops():[])s.id&&this.onDrop(s.id,s.n);this.audio?.breakBlock?.("wool")}},ys=function(t,e=!1){const n=this.world,s=Math.floor(t.x),r=Math.floor(t.y+t.def.h*.7),o=Math.floor(t.z),a=n.skyAt(s,r,o),l=n.lightAt(s,r,o),c=Math.round(a*16)*32+Math.round(l*16),h=t.hurtT>0;if(!h&&!e&&c===t.lightKey)return;t.lightKey=c;const u=Math.min(1.3,.18+a*(.2+.85*this.day)+l*.95),d=h?Math.min(1.7,u+.8):u,f=h?u*.4:u,g=h?u*.35:u;for(const _ of t.parts){const m=_.geo.getAttribute("tint"),p=m.array;for(let x=0;x<p.length;x+=3)p[x]=d,p[x+1]=f,p[x+2]=g;m.needsUpdate=!0}},Wh=function(t,e,n){const s=this.world,r=t.def;t.hurtT>0&&(t.hurtT-=e),t.fleeT>0&&(t.fleeT-=e),t.attackCd-=e,t.think-=e;const o=n.x-t.x,a=n.z-t.z,l=n.y-t.y,c=Math.hypot(o,a);let h=0,u=0,d=r.speed;const f=r.aggro||16;if(r.hostile&&c<f&&Math.abs(l)<5){const y=c||1;h=o/y,u=a/y,t.yaw=Math.atan2(h,u),c<r.reach&&Math.abs(l)<2.2&&t.attackCd<=0&&(t.attackCd=1.15,this.onPlayerHit(r.damage,t),r.jumps&&(t.vy=Math.max(t.vy,6.4)))}else if(t.fleeT>0){const y=c||1;h=-o/y,u=-a/y,t.yaw=Math.atan2(h,u),d*=1.7}else if(t.think<=0)if(t.think=1.8+this.rng()*4,this.rng()<.4)h=0,u=0;else{const y=this.rng()*Math.PI*2;t.yaw=y,h=Math.sin(y),u=Math.cos(y)}else t.think>.7&&(h=Math.sin(t.yaw),u=Math.cos(t.yaw));const _=h*d,m=u*d,p=Math.min(1,e*(r.hostile?9:5));if(t.vx+=(_-t.vx)*p,t.vz+=(m-t.vz)*p,t.vy-=N_*e,t.vy<-52&&(t.vy=-52),r.burnsInSun&&this.day>.5)if(s.skyAt(Math.floor(t.x),Math.floor(t.y+1),Math.floor(t.z))>=.97){if(t.burnT+=e,t.burnT>1&&(t.burnT=0,t.hp-=1.8,this.particles?.burst(t.x,t.y+r.h*.8,t.z,5,[1,.6,.2],{speed:1.4,life:.45,spread:.3}),Ke(this,Re,ys).call(this,t,!0),t.hp<=0)){Ke(this,Re,xs).call(this,t,!0);return}}else t.burnT=0;const x=r.w,v=r.h,b=(y,A)=>{if(!A)return;const G=y==="x"?t.x+A:t.x,q=y==="z"?t.z+A:t.z;if(!Fi(s,G,t.y,q,x,v)){t.x=G,t.z=q;return}const j=!Fi(s,G,t.y+1.02,q,x,v)&&!Fi(s,t.x,t.y+1.02,t.z,x,v);if(t.onGround&&j){t.y+=1.02,t.x=G,t.z=q,t.vy=0;return}r.jumps&&t.onGround&&(t.vy=7.2),y==="x"?t.vx=0:t.vz=0};b("x",t.vx*e),b("z",t.vz*e);const R=rc(s.getBlock(Math.floor(t.x),Math.floor(t.y+.3),Math.floor(t.z)));R&&(t.vy=Math.max(t.vy,1.6));const w=t.y+t.vy*e;if(t.vy<=0?(Fi(s,t.x,w,t.z,x,v)?(t.y=Math.floor(w)+1,t.y<w&&(t.y=w),t.vy=0,t.onGround=!0):(t.y=w,t.onGround=(R||t.onGround)&&!1),R&&(t.onGround=!1)):(Fi(s,t.x,w,t.z,x,v)?t.vy=0:t.y=w,t.onGround=!1),t.y<-4){Ke(this,Re,xs).call(this,t,!1);return}const S=Math.hypot(t.vx,t.vz);t.walkPhase+=e*(3.4+S*2.2);const I=Math.sin(t.walkPhase)*Math.min(.75,S*.3);for(let y=0;y<t.parts.length;y++){const A=t.parts[y];A.limb&&(A.mesh.rotation.x=(y%2?I:-I)*.85)}t.group.position.set(t.x,t.y+Math.abs(Math.sin(t.walkPhase))*.03*Math.min(1,S),t.z),t.group.rotation.y=t.yaw,Ke(this,Re,ys).call(this,t)};const H_=Object.fromEntries(Object.entries(Yn).map(([i,t])=>[i,t.name]));function G_(i,t,e=()=>{}){const n=[];for(const[s,r]of Object.entries(t||{})){if(!r||Yn[s]||!/^[a-z][a-z0-9_]*$/.test(s))continue;const o=r.tile||`mob_${s}`,a=+(r.h??r.size??1)||1,l=+(r.w??r.size??.8)||.8;let c=r.parts;if(!c){e(o,{base:r.color||"#8a7f6a",grain:3,seed:s.length*31+5});const u=Math.max(.16,a*.34);c=[{p:[0,a*.26,0],s:[l*.9,a*.52,l*.95],tile:o,shade:1},{p:[0,a*.3,-l*.6],s:[l*.56,l*.56,l*.4],tile:o,shade:.96},{p:[-l*.3,-u,l*.2],s:[l*.24,u,l*.24],tile:o,shade:.7,limb:1},{p:[l*.3,-u,l*.2],s:[l*.24,u,l*.24],tile:o,shade:.7,limb:1},{p:[-l*.3,-u,-l*.22],s:[l*.24,u,l*.24],tile:o,shade:.7,limb:1},{p:[l*.3,-u,-l*.22],s:[l*.24,u,l*.24],tile:o,shade:.7,limb:1}]}const h={name:String(r.name||s),hp:+r.hp||10,w:l,h:a,speed:+r.speed||1.6,passive:r.hostile?!1:r.passive!==!1,aggro:+r.aggro||(r.hostile?14:0),hostile:!!r.hostile,damage:+r.damage||(r.hostile?2:0),reach:+r.reach||1.7,burnsInSun:!!r.burnsInSun,jumps:!!r.jumps,darkOnly:!!r.darkOnly,villageOnly:!!r.villageOnly,mod:i,parts:c,drops:()=>(r.drops||[]).map(u=>({id:Lt(typeof u=="string"?u:u.block||u.item||u.key)||0,n:Math.max(1,(u&&u.n)|0||1)})).filter(u=>u.id)};Yn[s]=h,H_[s]=h.name,n.push(s)}return n}const _n={ids:256,tiles:256,shader:6e3,mods:64},zt={loaded:!1,list:[],tiles:[],blockIds:[],modOfKey:new Map,recipes:[],mobs:[],ore:[],uniforms:{},shader:{vert:[],frag:[],fragFinal:[],post:[],names:[]}},Oi=/^[a-z][a-z0-9_-]{1,23}$/,Xh=i=>String(i||"user").toLowerCase().replace(/[^a-z0-9_-]/g,"").slice(0,24)||"user";function V_(i,t,e="код",n=!1){const s={id:Xh(i),name:String(t?.name||i),source:e,ok:!1,off:!!n,error:"",applied:null};if(n)return s.error="выключен",zt.list.push(s),s;try{if(zt.list.filter(o=>o.ok).length>=_n.mods)throw new Error(`слишком много модов (максимум ${_n.mods})`);const r=W_(s.id,t);if(r.length)throw new Error(r.join("; "));s.applied=X_(s.id,t),s.ok=!0}catch(r){s.error=String(r?.message||r)}return zt.list.push(s),s}function W_(i,t){const e=[];if(!t||typeof t!="object")return["мод должен быть объектом с описаниями"];Oi.test(i)||e.push(`id «${i}»: 2…24 символа, строчные латинские, цифры, _ или -`),t.tiles||t.blocks||t.recipes||t.ore||t.mobs||t.shader||e.push("мод не делает ничего: нужна хотя бы одна секция — tiles, blocks, recipes, ore, mobs или shader");const n=t.tiles?Object.keys(t.tiles):[];for(const l of n){Oi.test(l)||e.push(`имя тайла «${l}»: только строчные латинские, цифры, _ или -`),hn.includes(l)&&e.push(`тайл «${l}» уже есть в атласе — придумай своё имя`);const c=t.tiles[l],h=["base","colors","speck","blobs","density","seed","grid","border","icon","grain","soft","shade","light","dark","paint"];for(const d of Object.keys(c||{}))h.includes(d)||e.push(`тайл «${l}»: не знаю поле «${d}» (есть ${h.join(", ")})`);const u=d=>typeof d=="string"&&(/^#[0-9a-fA-F]{3,8}$/.test(d.trim())||/^[a-z]+$/.test(d.trim()));for(const[d,f]of Object.entries(c||{}))["base","speck","blobs","light","dark"].includes(d)&&(u(f)||e.push(`тайл «${l}»: ${d} — цвет строкой «#rrggbb» или именем («red»), а не «${f}»`));for(const[d,f]of[].concat(c?.colors||[]).entries())u(f)||e.push(`тайл «${l}»: colors[${d}] — не цвет («${f}»)`)}hn.length+n.length>_n.tiles&&e.push(`атлас вмещает ${_n.tiles} тайлов, с этим модом будет ${hn.length+n.length}`);const s=(t.blocks||[]).map(l=>String(l?.key||"")).filter(l=>Oi.test(l)),r=new Set(s);r.size!==s.length&&e.push("в блоках два блока с одним key — второй движок пропустит молча, убери дубль");let o=0;for(const l of t.blocks||[]){const c=String(l?.key||"");if(!Oi.test(c)){e.push(`блок без корректного key: ${JSON.stringify(l?.key)}`);continue}if($e.has(c)){l.patch||e.push(`блок «${c}» уже существует — меняй через patch: { key: '${c}', patch: { … } }`);continue}o++;const h=l.tile?[l.tile]:Object.values(l.tiles||{});!h.length&&!l.item&&!l.patch&&e.push(`у блока «${c}» нет ни tile, ни tiles`);for(const u of h)!hn.includes(u)&&!n.includes(u)&&e.push(`блок «${c}» ссылается на тайл «${u}», которого нет в атласе`);for(const[u,d]of Object.entries({drops:l.drops,bonusOf:l.bonusOf}))d!=null&&!$e.has(String(d))&&!r.has(String(d))&&e.push(`блок «${c}»: ${u} «${d}» — такого блока нет`);if(l.tool){const u=["axe","pickaxe","shovel","sword","shears"],d=String(l.tool.kind||"");u.includes(d)||e.push(`блок «${c}»: tool.kind «${d}» — движок умеет ${u.join(", ")}`),l.tool.speed!=null&&!(+l.tool.speed>0&&+l.tool.speed<=20)&&e.push(`блок «${c}»: tool.speed 0…20`),l.tool.damage!=null&&!(+l.tool.damage>=0&&+l.tool.damage<=60)&&e.push(`блок «${c}»: tool.damage 0…60`)}l.light!=null&&!(+l.light>=0&&+l.light<=1)&&e.push(`у блока «${c}» light должен быть 0…1`),l.glow!=null&&!(+l.glow>=0&&+l.glow<=1)&&e.push(`у блока «${c}» glow должен быть 0…1`),l.food!=null&&!(+l.food>0&&+l.food<=20)&&e.push(`у блока «${c}» food — пол-единицы сердца, 1…20`),l.tool&&!/^[a-z]+$/.test(String(l.tool.kind||""))&&e.push(`у блока «${c}» tool.kind — слово из строчных букв`)}dt.length+o>_n.ids&&e.push(`id блока — байт: сейчас ${dt.length}, с этим модом будет ${dt.length+o}, максимум ${_n.ids}`);for(const l of t.recipes||[]){if(!l||!l.out||!Array.isArray(l.need)||!l.need.length){e.push("рецепт = { out: key, n, need: [[key, число], …], name, table?, shape? }");continue}const c=h=>$e.has(h)||r.has(h);c(l.out)||e.push(`рецепт «${l.name||l.out}»: результат «${l.out}» неизвестен`),Number(l.n??1)>0&&Number(l.n??1)<=64||e.push(`рецепт «${l.name||l.out}»: n должно быть 1…64`);for(const h of l.need)(!Array.isArray(h)||h.length!==2||!c(h[0])||!(Number(h[1])>0))&&e.push(`рецепт «${l.name||l.out}»: ингредиент ${JSON.stringify(h)} — нужно [ключ существующего блока, число]`)}for(const l of[].concat(t.ore||[]))l&&((!l.block||!($e.has(l.block)||r.has(l.block)))&&e.push(`руда ссылается на неизвестный блок «${l?.block}»`),l.into&&!($e.has(l.into)||r.has(l.into))&&e.push(`руда: заменять «${l.into}» — такого блока нет`),(l.min??0)>(l.max??255)&&e.push("руда: min больше max"),l.chance!=null&&!(+l.chance>0&&+l.chance<=1)&&e.push("руда: chance — доля 0…1"));for(const[l,c]of Object.entries(t.mobs||{})){Oi.test(l)||e.push(`моб: ключ «${l}» не подходит под ${Oi}`),Yn[l]&&e.push(`моб «${l}» уже существует`),(!c||!c.color&&!c.parts)&&e.push(`моб «${l}»: нужен color (тогда части соберутся сами) или parts`);for(const h of c&&c.parts||[]){!hn.includes(h?.tile)&&!n.includes(h?.tile)&&e.push(`моб «${l}»: часть ссылается на тайл «${h?.tile}», которого нет`);for(const[u,d]of[["p",3],["s",3]])(!Array.isArray(h?.[u])||h[u].length!==d||h[u].some(f=>!Number.isFinite(+f)))&&e.push(`моб «${l}»: у части поля ${u} должны быть ${d} числа`)}for(const h of c&&c.drops||[]){const u=typeof h=="string"?h:h?.block||h?.item||h?.key;(!u||!$e.has(String(u))&&!r.has(String(u)))&&e.push(`моб «${l}»: дроп «${u}» — такого блока нет`)}c&&c.hp!=null&&!(+c.hp>0&&+c.hp<=200)&&e.push(`моб «${l}»: hp 1…200`)}if(t.shader){(!t.shader||typeof t.shader!="object"||Array.isArray(t.shader))&&e.push("shader должен быть объектом с vert/frag/fragFinal/post");const l=t.shader&&typeof t.shader=="object"?t.shader:{};["vert","frag","fragFinal","post"].some(d=>l[d]!=null)||e.push("в shader нет ни одной вставки: нужна vert, frag, fragFinal или post");const c=d=>typeof d=="function"?String(d({tileIndex:f=>hn.indexOf(String(f))})):d==null?null:String(d);for(const d of["vert","frag","fragFinal","post"]){if(l[d]==null)continue;if(typeof l[d]!="function"&&typeof l[d]!="string"){e.push(`шейдер ${d}: строка или функция`);continue}const f=c(l[d]);f.length>_n.shader&&e.push(`шейдер ${d}: ${f.length} символов, максимум ${_n.shader}`),Lr=new Set(Object.keys(l.uniforms||{}));const g=Y_(f,d==="vert"?"vert":"frag");Lr=null,g&&e.push(`шейдер ${d}: ${g}`)}const h=new Set(Object.keys(l.uniforms||{}));for(const d of h)/^u[A-Z0-9][A-Za-z0-9_]*$/.test(d)||e.push(`униформу мода надо назвать uSomething, а не «${d}»`);for(const[d,f]of Object.entries(l.uniforms||{}))if(!/^u[A-Z0-9][A-Za-z0-9_]*$/.test(d))e.push(`униформу мода надо назвать uSomething, а не «${d}»`);else if(Qa.has(d))e.push(`униформа «${d}» уже униформа игры — своё назови, например, ${d}Mod`);else if(d in zt.uniforms)e.push(`униформа «${d}» уже занята другим модом`);else if(!(typeof f=="number"||typeof f=="boolean"||Array.isArray(f)))e.push(`униформу «${d}» задают числом или массивом [r, g, b]`);else{const g=["vert","frag","fragFinal","post"].map(_=>c(l[_])).join(`
`);g&&!g.includes(d)&&e.push(`униформа «${d}» объявлена, но не используется ни в одной вставке`)}const u=Object.keys(l).filter(d=>!["name","vert","frag","fragFinal","post","uniforms"].includes(d));for(const d of u)e.push(`в shader нет поля «${d}» (есть name, vert, frag, fragFinal, post, uniforms)`)}const a=Object.keys(t).filter(l=>!["id","name","version","author","description","enabledByDefault","tiles","blocks","recipes","ore","mobs","shader"].includes(l));for(const l of a)e.push(`не знаю секцию «${l}» (умею tiles, blocks, recipes, ore, mobs, shader, enabledByDefault)`);return e}function X_(i,t){const e={tiles:[],blocks:[],patches:[],recipes:[],mobs:[],ore:0,shader:null,uniforms:[]};for(const[n,s]of Object.entries(t.tiles||{}))sc(n,vc(s,n)),zt.tiles.push(n),e.tiles.push(n);for(const n of t.blocks||[]){if(n.patch&&$e.has(n.key)){Object.assign($e.get(n.key),_c(n.patch,n.key,$e.get(n.key))),zt.modOfKey.set(n.key,i),e.patches.push(n.key);continue}if($e.has(n.key))continue;const s=_c(n,n.key,null);s.mod=i,dt.push(s),$e.set(n.key,s),zt.blockIds.push(s.id),zt.modOfKey.set(n.key,i),e.blocks.push(s.key)}if(t.recipes?.length){const n=d_(t.recipes,i);for(const s of n)zt.recipes.push(s);e.recipes=n.map(s=>s.clean.name||s.clean.outId)}if(t.mobs){const n=G_(i,t.mobs,(s,r)=>{sc(s,vc(r,s)),zt.tiles.push(s),e.tiles.push(s)});for(const s of n)zt.mobs.push(s);e.mobs=n}for(const n of[].concat(t.ore||[])){const s=$e.get(n.block)?.id??In;s&&(zt.ore.push({mod:i,block:s,into:n.into?$e.get(n.into)?.id??In:In,y0:Math.max(1,Math.min(126,n.min??2)),y1:Math.max(2,Math.min(127,n.max??24)),chance:Math.max(.02,Math.min(1,n.chance??.35)),veins:Math.max(1,Math.min(48,n.veins??8)),size:Math.max(1,Math.min(12,n.size??4)),salt:(to(i)^to(String(n.block)))>>>0}),e.ore++)}if(t.shader){const n=t.shader,s=r=>String(typeof r=="function"?r({tileIndex:o=>hn.indexOf(String(o))}):r);n.vert&&zt.shader.vert.push({mod:i,code:s(n.vert)}),n.frag&&zt.shader.frag.push({mod:i,code:s(n.frag)}),n.fragFinal&&zt.shader.fragFinal.push({mod:i,code:s(n.fragFinal)}),n.post&&zt.shader.post.push({mod:i,code:s(n.post)}),zt.shader.names.push(n.name||`шейдер ${i}`);for(const[r,o]of Object.entries(n.uniforms||{}))zt.uniforms[r]={value:qh(o)},e.uniforms.push(r);e.shader=n.name||i}return e}function _c(i,t,e){const n=e?{}:{id:dt.length,key:t,name:String(i.name??t),tiles:null,render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1,sound:"stone"},s=(r,o,a)=>{a!==void 0&&(r[o]=a)};s(n,"name",i.name!=null?String(i.name):void 0),i.tile!=null&&(n.tiles={all:String(i.tile)}),i.tiles&&(n.tiles={...n.tiles||{},...q_(i.tiles)}),s(n,"hardness",i.hardness!=null?+i.hardness:i.hard!=null?+i.hard:void 0),i.item&&(n.render="item",n.solid=!1,n.opaque=!1,n.breakable=!1),i.plant&&(n.render="cross",n.solid=!1,n.opaque=!1,n.cutout=!0,n.replaceable=!0,n.plantH=+i.plant||.5,n.hardness=.05,n.sound="grass"),i.torch&&(n.render="torch",n.solid=!1,n.opaque=!1,n.cutout=!0,n.slim=!0,n.fullBright=!0,n.hardness=.3),i.liquid&&(n.render="liquid",n.liquid=!0,n.solid=!1,n.opaque=!1,n.hideSame=!0,n.breakable=!1),i.transparent&&(n.opaque=!1,n.cutout=!0),i.glow!=null&&(n.light=+i.glow,n.fullBright=!0),s(n,"light",i.light!=null?+i.light:void 0),i.food!=null&&!i.plant&&!i.liquid&&!i.torch&&(n.render="item",n.solid=!1,n.opaque=!1,n.breakable=!1),s(n,"food",i.food!=null?+i.food:void 0),s(n,"info",i.info!=null?String(i.info):void 0),s(n,"drops",i.drops!=null?String(i.drops):void 0),i.bonusOf!=null&&(n.bonusOf=String(i.bonusOf),n.bonus=i.bonus!=null?+i.bonus:.15),i.tool&&(n.tool={kind:String(i.tool.kind),mine:i.tool.mine||[],speed:+(i.tool.speed??3),damage:+(i.tool.damage??2),uses:+(i.tool.uses??150)},n.render="item",n.solid=!1,n.opaque=!1,n.breakable=!1);for(const r of["solid","opaque","cutout","breakable","fullBright","slim","hideSame","replaceable","tinted","inset","sound","render","hardness"])i[r]!==void 0&&(n[r]=i[r]);return e||(!n.tiles&&n.render!=="none"?n.tiles={all:"stone"}:n.tiles&&(n.tiles={all:n.tiles.all??n.tiles.side??n.tiles.top,...n.tiles})),n}function q_(i){const t={};for(const[e,n]of Object.entries(i))t[["top","bottom","side","all"].includes(e)?e:"all"]=String(n);return t}function qh(i){if(typeof i=="boolean")return i?1:0;if(Array.isArray(i)){const t=i.map(e=>{const n=Number(e);return Number.isFinite(n)?n:0});return t.length>=3?{x:t[0],y:t[1],z:t[2]??0}:t.length===2?{x:t[0],y:t[1]}:t[0]}return Number(i)||0}function vc(i,t){const e=i&&typeof i=="object"?i:{base:String(i||"#888888")};if(typeof e.paint=="function")return e.paint;const n=to(t)^(e.seed|0)*7919,s=e.base??"#7f7f7f",r=e.colors??[s,qi(s,-.1),qi(s,.08),qi(s,-.18)];return o=>{if(e.soft===!1?o.noise(r,n,e.grain??6):o.mottle(r,n,5,1.4,3.2,e.grain??2.2),e.grid){const a=Math.max(2,e.grid|0);for(let l=0;l<16;l++)for(let c=0;c<16;c++)(c%a===0||l%a===0)&&o.set(c,l,qi(s,-(e.shade??.22)))}if(e.speck){const a=Math.max(1,Math.round((e.density??.2)*40));o.speckles(e.speck,a,n+13,8),e.density>.3&&o.blobs(e.speck,2,n+29,2.2)}return e.blobs&&o.blobs(e.blobs,4,n+41,2.8),e.icon&&$_(o,e.icon,e.base??"#e91e63",e),e.border&&o.border(e.border),o}}function $_(i,t,e,n){const s=n.light??qi(e,.25),r=n.dark??qi(e,-.3);i.clear();const o=(a,l,c,h=255)=>i.set(a,l,c,h);if(t==="gem")for(let a=0;a<16;a++){const l=Math.round(7-Math.abs(a-7.5)*1.6);if(!(l<=0))for(let c=8-l;c<8+l;c++)o(c,a,c+a<12?s:c+a>18?r:e)}else if(t==="rod"||t==="ingot"||t==="dust")for(let a=3;a<13;a++)if(t==="rod")o(a,12-a,e),o(a+1,12-a,r);else if(t==="ingot")for(let l=3;l<13;l++)for(let c=6;c<11;c++)l+c>9&&l+c<20&&o(l,c,c<8?s:e);else o(6+a%4,8+a%3,e),o(4+a%6,6+a%5,r);else if(t==="ball")for(let a=0;a<16;a++)for(let l=0;l<16;l++){const c=l-7.5,h=a-7.5,u=c*c+h*h;u<30&&o(l,a,u<12?s:e)}else for(let a=4;a<12;a++)for(let l=4;l<12;l++)o(l,a,(l+a)%4===0?r:e);return i}function qi(i,t){const e=String(i).replace("#",""),n=e.length===3?e.split("").map(l=>l+l).join(""):e.slice(0,6),s=parseInt(n.slice(0,2),16)||0,r=parseInt(n.slice(2,4),16)||0,o=parseInt(n.slice(4,6),16)||0,a=l=>Math.max(0,Math.min(255,Math.round(l+(t>0?(255-l)*t:l*t))));return`#${[a(s),a(r),a(o)].map(l=>l.toString(16).padStart(2,"0")).join("")}`}let Lr=null;function Y_(i,t="frag"){const e=String(i||"");if(!e.trim())return"пустая вставка";if(e.length>_n.shader)return`слишком длинно: ${e.length} символов, длиннее лимита ${_n.shader}`;if(/#\s*(include|define|undef|if|ifdef|version|pragma)/.test(e))return"препроцессор ( #include/#define/#if/#version ) во вставке запрещён — им нечем управлять";if(/\bvoid\s+main\b/.test(e))return"свой main запрещён: вставка выполняется внутри нашего шейдера";if(/^\s*(uniform|attribute|varying|in|out)\b/m.test(e))return"объявлять uniform/varying здесь не надо — свои значения пиши в shader.uniforms, они уже объявлены";let n=0;for(const o of e)if(o==="{"||o==="("||o==="["?n++:(o==="}"||o===")"||o==="]")&&n--,n<0)return"лишняя закрывающая скобка";if(n!==0)return`скобки не сбалансированы (разница ${n})`;for(const o of e.matchAll(/\b([A-Za-z_][A-Za-z0-9_]*)\s*\(/g)){const a=o[1];if(!j_.has(a)&&!/^(if|for|while|return)$/.test(a))return`не знаю функцию «${a}» — доступны только те, что есть в GLSL и в нашем материале`}for(const o of e.matchAll(/\b(u[A-Z][A-Za-z0-9_]*)\b/g)){const a=o[1];if(!Qa.has(a)&&!(a in zt.uniforms)&&!(Lr&&Lr.has(a)))return`униформа «${a}» не существует; есть ${[...Qa].join(", ")} и свои из shader.uniforms`}const s=/\b(?:const\s+)?(float|int|bool|vec[234]|mat[234])(\s+[A-Za-z_][A-Za-z0-9_]*(?:\s*,\s*[A-Za-z_][A-Za-z0-9_]*)*)\s*(?:=|;|\))/g,r=t==="decl"?Z_:J_;for(const o of e.matchAll(s))for(const a of o[2].split(",")){const l=a.trim().replace(/\(.*$/,"").trim();if(r.has(l))return`имя «${l}» занято нашим шейдером (оно уже объявлено в том же scope) — переопределение не компилируется, мир исчезнет целиком; выбери другое, например «m${l}»`}for(const[o,a]of[[/\btexture\s*\(/,"texture() есть только в WebGL2, а игра собирается на GLSL ES 1.00 — пиши texture2D()/textureCube()"],[/\btextureLod\s*\(/,"textureLod() — тоже WebGL2, в ES 1.00 его нет"],[/\bgl_(FragDepth|FragCoord|PointCoord|VertexID)\b/,"системные gl_* в этом шейдере недоступны: цвет только через col"],[/\bprecision\s+(low|medium|high)p?\s+/,"precision уже задан нашим материалом — не переопределяй его"]])if(o.test(e))return a;for(const o of["gl_FragColor","discard"])if(e.includes(o))return`«${o}» во вставке не нужен: результат берётся из col (в post — из c), а discard вырезал бы грань целиком`;return t==="vert"&&/\bcol\b/.test(e)?"в вершинном шейдере нет col — цвет правь во frag":(t==="frag"||t==="fragFinal")&&/\bworld\b/.test(e)?"во фрагментном нет world — геометрию правь в vert":t==="post"&&/\bcol\b/.test(e)?"в пост-проходе нет col — правь c (цвет кадра)":""}const j_=new Set(["tileIndex","sin","cos","tan","asin","acos","atan","pow","exp","log","exp2","log2","sqrt","inversesqrt","abs","sign","floor","ceil","fract","mod","min","max","clamp","mix","step","smoothstep","length","distance","dot","cross","normalize","faceforward","reflect","refract","texture2D","textureCube","vec2","vec3","vec4","float","int","bool","mat2","mat3","mat4"]),Qa=new Set(["uTime","uMap","uQuality","uShadow","uRefl","uProbe","uSun","uSunColor","uSunDirW","uAmbient","uTorch","uFogColor","uFogDensity","uFogStart","uFogEnd","uExposure","uSea","uZenithC","uWave","uAlpha","uAlphaTest","uDay","uDusk","uNight"]),K_=new Set(["tex","occ","sky","blk","nrm","lit0","shade","sunTerm","skyLight","lit","col","lcAlpha","sunGate","fg","wpos","world","mv","fogD","lin","expf","worldPosition","transformedNormal","c","vUv","vWorld","vTint","vFog","vLight","position","normal","uv","light","tint","main","tileIndex","aces","waterSlope","skyLike","wave","waveAmp","PI","saturate","luminance","rand","pow2","max3","average","getShadowMask","packDepthToRGBA","unpackRGBAToDepth","getViewMatrix"].map(i=>i.trim())),Z_=new Set(["main","vUv","vWorld","vTint","vFog","vLight","position","normal","uv","light","tint","tileIndex","aces","waterSlope","skyLike","wave","waveAmp","PI","saturate","luminance","rand","pow2","max3","average","getShadowMask","packDepthToRGBA","unpackRGBAToDepth","getViewMatrix"]),J_=K_;function to(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function Q_(i,t){if(!zt.ore.length||!t?.blocks)return!1;const e=t.blocks,n=16,s=e.length/(n*n)|0,r=i.seed>>>0||1;for(const o of zt.ore)for(let a=0;a<o.veins;a++){if(Bi(o.salt+a,t.cx,t.cz,r)%1e4/1e4>o.chance)continue;let l=Bi(o.salt+a*3+1,t.cx,t.cz,r)%n,c=Bi(o.salt+a*5+2,t.cz,t.cx+7,r)%n,h=o.y0+Bi(o.salt+a*7+3,l,c,r)%Math.max(1,o.y1-o.y0+1),u=1+Bi(o.salt+a*11+4,h,l*3+c,r)%o.size;for(;u-- >0;){if(l>=0&&l<n&&c>=0&&c<n&&h>=1&&h<s){const f=(h*n+c)*n+l,g=e[f],_=o.into||0;(_?g===_:g&&dt[g]?.sound==="stone")&&(e[f]=o.block)}const d=Bi(o.salt+u,l,h+c*5,r)%6;l+=d===0?1:d===1?-1:0,c+=d===2?1:d===3?-1:0,h+=d===4?1:d===5?-1:0}}return!0}function Bi(i,t,e,n){let s=(i^2654435769)>>>0;return s=Math.imul(s^t+n+2246822507,3266489909)>>>0,s=Math.imul(s^e+668265263,374761393)>>>0,s^=s>>>15,s>>>0}function gr(){return{mods:zt.list.map(i=>({id:i.id,name:i.name,source:i.source,ok:i.ok,off:!!i.off,error:i.error||"",applied:i.applied})),blockIds:zt.blockIds.slice(),tiles:zt.tiles.slice(),uniforms:Object.keys(zt.uniforms),oreCount:zt.ore.length,shaderNames:zt.shader.names.slice()}}function tv(){return!!(zt.shader.vert.length||zt.shader.frag.length||zt.shader.fragFinal.length||zt.shader.post.length)}function ev(){return zt.ore.length>0}function wa(){return{vert:zt.shader.vert.slice(),frag:zt.shader.frag.slice(),fragFinal:zt.shader.fragFinal.slice(),post:zt.shader.post.slice(),names:zt.shader.names.slice(),uniforms:nv()||void 0}}function nv(){const i={};for(const[t,e]of Object.entries(zt.uniforms))i[t]=e.value;return Object.keys(i).length?i:null}function iv(){return zt.blockIds.slice()}function sv(i){return zt.modOfKey.get(i)??null}function rv(i,t,e){return i in zt.uniforms?(zt.uniforms[i].value=qh(t),e?.uniforms?.[i]&&(e.uniforms[i].value=zt.uniforms[i].value),!0):!1}const av=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,ov=`
precision highp float;
uniform vec3 uZenith, uHorizon, uNight, uSunDir, uSunTint;
uniform float uDay, uNightF, uDusk, uUltra;
varying vec3 vDir;
void main() {
  vec3 dir = normalize(vDir);
  float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
  vec3 sky = mix(uHorizon, uZenith, pow(h, 0.75));
  sky = mix(uNight, sky, uDay);
  // тёплое зарево вокруг солнца
  float sun = max(dot(dir, normalize(uSunDir)), 0.0);
  sky += uSunTint * pow(sun, 26.0) * 0.9 * uDay;
  sky += uSunTint * pow(sun, 3.0) * 0.14 * uDay;
  // лёгкая полоса на горизонте ночью
  sky += vec3(0.02, 0.03, 0.06) * uNightF * (1.0 - h);

  if (uUltra > 0.5) {
    // «Ультра» — физика цвета вместо одного градиента (без bloom: гало делаем
    // намеренно слабым, чтобы солнце не расползалось белым пятном):
    // 1) Рэлей: чем выше смотрим, тем синее; у горизонта атмосфера толще, и там
    //    же живёт тёплая дымка, поэтому переход делаем не линейным.
    sky = mix(uHorizon, uZenith, pow(h, 0.62)) * (0.94 + 0.12 * h);
    sky = mix(uNight * 1.25, sky, uDay);
    vec3 sdir = normalize(uSunDir);
    float az = max(dot(normalize(vec3(dir.x, 0.0, dir.z) + vec3(1e-4)),
                       normalize(vec3(sdir.x, 0.0, sdir.z))), 0.0);
    float band = exp(-abs(dir.y) * 5.5);
    // 2) Закат греет горизонт с солнечной стороны и оставляет послесвечение с
    //    противоположной — та самая «вторая полоса», которой все добиваются.
    sky += uSunTint * band * (pow(az, 2.0) + 0.45 * pow(1.0 - az, 3.0)) * (0.4 + 0.9 * uDusk);
    // 3) Ми-рассеяние: плотное гало у диска. Значения заведомо > 1 — их подхватывает
    //    bloom, и солнце начинает светиться, а не быть белым квадратом.
    float mie = pow(sun, 14.0) * 0.30 + pow(sun, 90.0) * 0.55 + pow(sun, 900.0) * 0.9;
    sky += uSunTint * mie * (0.1 + uDay * 0.9);
    // 4) Ночью — Млечный Путь полосой вдоль наклонной плоскости: без него звёздное
    //    небо выглядит «нарисованным», а не объёмным.
    vec3 axis = normalize(vec3(0.42, 0.26, 1.0));
    float mw = exp(-pow(dot(dir, axis), 2.0) * 9.0);
    sky += vec3(0.055, 0.06, 0.11) * mw * uNightF * 1.35;
    sky += vec3(0.02, 0.026, 0.05) * pow(max(dir.y, 0.0), 0.6) * uNightF;
  }
  gl_FragColor = vec4(sky, 1.0);
}
`;function xc(i=1,t=.06){const e=new Vi(9137),n=128,s=new Uint8ClampedArray(n*n*4);for(let l=0;l<n;l++)for(let c=0;c<n;c++){const h=e.fbm2(c*i/26,l*i/26,4)*1.5,u=h>t?1:0,d=u?h>.28?255:232:0,f=(l*n+c)*4;s[f]=d,s[f+1]=d,s[f+2]=255,s[f+3]=u?235:0}const r=new Uint8ClampedArray(n*n*4),o=4;for(let l=0;l<n;l++)for(let c=0;c<n;c++){const h=(c/o|0)*o+(l/o|0)%2,u=(l/o|0)*o,d=(Math.min(n-1,u)*n+Math.min(n-1,h))*4,f=(l*n+c)*4;r[f]=s[d],r[f+1]=s[d+1],r[f+2]=s[d+2],r[f+3]=s[d+3]}const a=new kr(r,n,n,Ve);return a.wrapS=a.wrapT=xr,a.magFilter=pe,a.minFilter=ui,a.generateMipmaps=!0,a.colorSpace=Ne,a.needsUpdate=!0,a}function yc(i){const e=new Uint8ClampedArray(4096),n=new Vi(i==="moon"?4242:111);for(let r=0;r<32;r++)for(let o=0;o<32;o++){const a=o-16+.5,l=r-32/2+.5,c=Math.hypot(a,l),h=(r*32+o)*4;let u=255;i==="moon"?u=226-(n.perlin2(o*.35,r*.35)>.18?42:0)-(c>13.5?226:0):c>15&&(u=0);const d=c>15.5?0:255;e[h]=u,e[h+1]=i==="moon"?u:Math.min(255,u*.94),e[h+2]=i==="moon"?u*.98:u*.7,e[h+3]=d}const s=new kr(e,32,32,Ve);return s.magFilter=pe,s.minFilter=He,s.generateMipmaps=!1,s.colorSpace=Ne,s.needsUpdate=!0,s}class lv{constructor(t){this.group=new yn,t.add(this.group),this.uniforms={uZenith:{value:new Ct(.36,.62,.98)},uHorizon:{value:new Ct(.72,.85,.98)},uNight:{value:new Ct(.02,.03,.07)},uNightF:{value:0},uSunDir:{value:new U(0,1,0)},uSunTint:{value:new Ct(1,.85,.6)},uDay:{value:1},uDusk:{value:0},uUltra:{value:0}};const e=new xe(new po(1,24,16),new an({uniforms:this.uniforms,vertexShader:av,fragmentShader:ov,side:We,depthWrite:!1,fog:!1}));e.scale.setScalar(600),e.renderOrder=-10,this.dome=e,this.group.add(e);const n=new rn({map:yc("sun"),transparent:!0,depthWrite:!1,color:16777215});this.sun=new xe(new oi(1,1),n),this.sun.scale.setScalar(46),this.sun.renderOrder=-9,this.group.add(this.sun),this.moon=new xe(new oi(1,1),new rn({map:yc("moon"),transparent:!0,depthWrite:!1})),this.moon.scale.setScalar(30),this.moon.renderOrder=-9,this.group.add(this.moon);const s=900,r=new Float32Array(s*3);for(let c=0;c<s;c++){const h=Math.random()*Math.PI*2,u=Math.random()*.9+.05,d=Math.sqrt(Math.max(0,1-u*u));r[c*3]=Math.cos(h)*d*560,r[c*3+1]=u*560,r[c*3+2]=Math.sin(h)*d*560}const o=new Le;o.setAttribute("position",new me(r,3)),this.stars=new Mh(o,new fo({color:16777215,size:2.4,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1})),this.stars.renderOrder=-9,this.group.add(this.stars);const a=xc();a.repeat.set(9,9),this.cloudTex=a,this.clouds=new xe(new oi(2400,2400),new rn({map:a,transparent:!0,opacity:.85,depthWrite:!1,side:Pe,color:16777215})),this.clouds.rotation.x=-Math.PI/2,this.clouds.position.y=118,this.clouds.renderOrder=-8,this.group.add(this.clouds),this.dayLight=1,this.sunElevation=1,this.dusk=0,this.ultra=!1;const l=xc(1.9,.55);l.repeat.set(5,5),this.cirrusTex=l,this.cirrus=new xe(new oi(3200,3200),new rn({map:l,transparent:!0,opacity:.34,depthWrite:!1,side:Pe,color:16777215})),this.cirrus.rotation.x=-Math.PI/2,this.cirrus.position.y=168,this.cirrus.renderOrder=-8,this.cirrus.visible=!1,this.group.add(this.cirrus)}update(t,e,n,s){const r=(t-.25)*Math.PI*2+Math.PI/2,o=new U(Math.cos(r),Math.sin(r),.34).normalize(),a=o.y,l=Cs.clamp(a*2.1+.18,0,1),c=Cs.clamp(1-Math.abs(a)*4.5,0,1),h=1-l;this.sunElevation=a,this.dayLight=l,this.uniforms.uSunDir.value.copy(o),this.uniforms.uDay.value=l,this.uniforms.uNightF.value=h,this.uniforms.uSunTint.value.setRGB(1,.62+.3*(1-c),.35+.5*(1-c)),this.uniforms.uDusk.value=c,this.dusk=c;const u=this.uniforms.uZenith.value,d=this.uniforms.uHorizon.value;u.setRGB(.19,.4,.86).lerp(new Ct(.02,.03,.08),h),d.setRGB(.72,.85,.98).lerp(new Ct(.05,.07,.14),h),c>.02&&(d.lerp(new Ct(.98,.46,.22),c*.75),u.lerp(new Ct(.42,.3,.6),c*.4)),this.ultra&&(u.lerp(new Ct(.07,.16,.46),.45),d.lerp(new Ct(1,.5,.24),c*.55)),this.dome.position.copy(n),this.stars.position.copy(n),this.clouds.position.x=n.x+t*900,this.clouds.position.z=n.z,this.cloudTex.offset.x=t*.9;const f=this.clouds.material.color,g=.3+this.dayLight*.7;this.ultra?f.setRGB(1.02*g,(.97-c*.13)*g,(.95-c*.34)*g):f.setRGB(g,g,g),this.ultra&&(this.cirrus.position.x=n.x-t*1500,this.cirrus.position.z=n.z+140,this.cirrusTex.offset.x=-t*1.7,this.cirrus.material.opacity=.08+e*.3,this.cirrus.material.color.setRGB(1.05*g,(.99-c*.1)*g,(1-c*.28)*g)),this.stars.material.opacity=Math.pow(h,1.4)*.95,this.clouds.material.opacity=.25+e*.7;const _=1;if(this.sun.position.copy(n).addScaledVector(o,480),this.sun.lookAt(n),this.sun.material.color.setRGB(1,.95-c*.16,this.ultra?.84-c*.3:.78-c*.35),this.sun.material.opacity=Cs.clamp(l*1.6,0,1),this.moon.position.copy(n).addScaledVector(o,-480),this.moon.lookAt(n),this.moon.material.opacity=Cs.clamp(h*1.4,0,1),this.ultra&&this.moon.material.color.setRGB(.9,.95,1),s){const m=.18+l*.92;s.uSun.value=m*_,s.uAmbient.value.setRGB(.3,.34,.44).multiplyScalar(.32+l*.75),s.uSunColor.value.setRGB(1,.93-c*.2,.82-c*.3),s.uFogColor.value.copy(d).lerp(u,.25),s.uZenithC&&s.uZenithC.value.copy(u),s.uSunDirW&&s.uSunDirW.value.set(o.x,Math.max(o.y,.05),o.z).normalize()}return{day:l,night:h,dusk:c,horizonColor:d.clone(),fogColor:s?s.uFogColor.value.clone():d.clone()}}setUltra(t){this.ultra=!!t,this.uniforms.uUltra.value=this.ultra?1:0,this.cirrus&&(this.cirrus.visible=this.ultra),this.sun.scale.setScalar(this.ultra?34:46),this.moon.scale.setScalar(this.ultra?23:30)}dispose(){this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose())})}}const Mc=(i,t,e)=>!!i.getChunk(t+1,e)&&!!i.getChunk(t-1,e)&&!!i.getChunk(t,e+1)&&!!i.getChunk(t,e-1),cv=3.4,hv=16,uv=1.2;function dv(i,t,e=6){const n=t>60;let s=e;return n?s=hv:i>20&&t<32?s=s*.4:i<13&&t>8&&(s=e*1.4),{pool:Math.max(cv,s),gen:n?.8:t>24?.35:.5}}class $i{constructor(t,e,n,s){this.world=t,this.scene=e,this.materials=n,this.atlas=s,this.objects=new Map,this.renderDistance=10,this.streamBudget=6,this._frameMs=16.7,this._last=0,this._candidates=[],this.stats={gen:0,mesh:0,quads:0,pending:0,ms:0}}static key(t,e){return Ah(t,e)}setRenderDistance(t){this.renderDistance=Math.max(2,Math.min(64,t|0));const e=this.renderDistance;this.streamBudget=e<=12?6:Math.min(24,6+(e-12)*.35),this._cullEvery=e>16?40:0}cullFarChunks(t,e=3){const n=this.world;if(!n?.chunks?.size)return 0;const s=Math.floor(t.x/it),r=Math.floor(t.z/it),o=this.renderDistance+e,a=o*o;let l=0;for(const c of[...n.chunks.keys()]){const[h,u]=vs(c);if(!Number.isFinite(h)||!Number.isFinite(u))continue;const d=h-s,f=u-r;if(d*d+f*f<=a)continue;const g=this.objects.get(c);g&&(this.disposeObject(g),this.objects.delete(c)),n.removeChunk(h,u),l++}return l}streamDebug(){const t=this.world;return{gen:this.stats.gen,mesh:this.stats.mesh,pending:t.dirtyMesh.size,light:t.dirtyLight.size,genErr:this._genErrCount??0,meshErr:this._meshErrCount??0,msg:t.lastGenError??this._meshErrMsg??""}}update(t){const e=this.world,n=Math.floor(t.x/it),s=Math.floor(t.z/it),r=this.renderDistance,o=t.vx??0,a=t.vz??0,l=Math.max(-2,Math.min(2,Math.round(o*1.1/it))),c=Math.max(-2,Math.min(2,Math.round(a*1.1/it))),h=n+l,u=s+c,d=e.dirtyMesh.size,f=performance.now();if(this._last){const S=Math.min(250,f-this._last);this._frameMs+=(S-this._frameMs)*.15}this._last=f;const g=dv(this._frameMs,d,this.streamBudget),_=g.pool,m=f+_,p=f+Math.max(uv,_*g.gen);let x=0;t:for(let S=0;S<=r+1;S++)for(let I=-S;I<=S;I++)for(let y=-S;y<=S;y++){if(Math.max(Math.abs(y),Math.abs(I))!==S)continue;const A=h+y,G=u+I,q=e.getChunk(A,G);if(q&&q.needsMesh&&Mc(e,A,G)&&e.dirtyMesh.add($i.key(A,G)),!q){try{e.ensureChunk(A,G)}catch(j){this._genErrCount=(this._genErrCount??0)+1,this._genErr||(this._genErr=1,console.error("чанк не сгенерирован:",A,G,j));continue}if(x++,performance.now()>=p)break t}}const v=Math.min(m,performance.now()+_*.2);if(e.dirtyLight.size)for(const S of[...e.dirtyLight]){const[I,y]=vs(S),A=e.getChunk(I,y);if(A&&e.recomputeLight(A),e.dirtyLight.delete(S),performance.now()>=v)break}let b=0;const R=[];for(const S of e.dirtyMesh){const[I,y]=vs(S);if(Math.max(Math.abs(I-n),Math.abs(y-s))>r+1){e.dirtyMesh.delete(S);continue}if(!e.getChunk(I,y)){e.dirtyMesh.delete(S);continue}if(!Mc(e,I,y)){e.dirtyMesh.delete(S);continue}R.push([(I-h)**2+(y-u)**2,I,y])}R.sort((S,I)=>S[0]-I[0]);for(const[,S,I]of R){try{this.remesh(S,I)}catch(y){this._meshErrCount=(this._meshErrCount??0)+1,this._meshErrMsg=String(y?.message??y),this._meshErr||(this._meshErr=1,console.error("меширование чанка не удалось:",S,I,y))}if(e.dirtyMesh.delete($i.key(S,I)),b++,performance.now()>=m)break}this.stats.gen=x,this.stats.mesh=b,this.stats.pending=e.dirtyMesh.size,this.stats.ms=performance.now()-f,this.stats.frameMs=this._frameMs,this._cullEvery&&(this._cullT=(this._cullT??0)+1,this._cullT>=this._cullEvery&&(this._cullT=0,this.stats.culled=this.cullFarChunks(t)));const w=r+3;for(const[S,I]of this.objects){const[y,A]=vs(S);Math.max(Math.abs(y-n),Math.abs(A-s))>w&&(this.disposeObject(I),this.objects.delete(S),e.removeChunk(y,A))}}remesh(t,e){const n=this.world,s=n.getChunk(t,e);if(!s)return;const r=$i.key(t,e);let o=this.objects.get(r);const a=U_(n,s,this.atlas);if(!a.solid&&!a.water){o&&(this.disposeObject(o),this.objects.delete(r)),s.needsMesh=!1;return}o||(o={solid:null,water:null},this.objects.set(r,o)),o.solid=this.applyMesh(o.solid,a.solid,this.materials.solid,t,e),o.water=this.applyMesh(o.water,a.water,this.materials.water,t,e),s.needsMesh=!1,this.stats.quads=(a.solid?.quads??0)+(a.water?.quads??0)}hasMesh(t,e){return this.objects.has($i.key(t,e))}setMaterials(t){this.materials=t;for(const e of this.objects.values())e.solid&&(e.solid.material=t.solid),e.water&&(e.water.material=t.water);return this.objects.size}applyMesh(t,e,n,s,r){if(!e)return t&&(this.scene.remove(t),t.geometry.dispose()),null;let o=t?t.geometry:null;o||(o=new Le,o.boundingSphere=new rs(new U(it/2,Jt/2,it/2),Math.sqrt((it/2)**2*2+(Jt/2)**2)),o.boundingBox=new ss(new U(0,0,0),new U(it,Jt,it)));const a=(h,u,d)=>{const f=o.getAttribute(h);if(f&&f.array.length>=u.length&&f.array.constructor===u.constructor){f.array.set(u),f.needsUpdate=!0;return}const g=new me(u,d);g.setUsage(il),o.setAttribute(h,g)};a("position",e.position,3),a("uv",e.uv,2),a("light",e.light,4),a("tint",e.tint,3);const l=o.getIndex();if(l&&l.array.length>=e.index.length&&l.array.constructor===e.index.constructor)l.array.set(e.index),l.needsUpdate=!0;else{const h=new me(e.index,1);h.setUsage(il),o.setIndex(h)}if(o.setDrawRange(0,e.index.length),t)return t.geometry=o,t;const c=new xe(o,n);return c.position.set(s*it,0,r*it),c.matrixAutoUpdate=!1,c.updateMatrix(),c.renderOrder=n===this.materials.water?2:0,c.frustumCulled=!0,this._shadowFlags(c,n===this.materials.water),this.scene.add(c),c}_shadowFlags(t,e){if(!t)return t;const n=!!this.shadows;return t.castShadow=n&&!e,t.receiveShadow=n,e||(t.customDepthMaterial=n?this.depthMaterial??null:null),t}setShadows(t,e=null){this.shadows=!!t,this.depthMaterial=e??this.depthMaterial??null;for(const n of this.objects.values())this._shadowFlags(n.solid,!1),this._shadowFlags(n.water,!0)}get waterMeshes(){const t=[];for(const e of this.objects.values())e.water&&t.push(e.water);return t}disposeObject(t){for(const e of[t.solid,t.water])e&&(this.scene.remove(e),e.geometry.dispose())}dispose(){for(const[t,e]of[...this.objects])this.disposeObject(e),this.objects.delete(t)}rebuildAll(){for(const t of this.world.chunks.keys())this.world.dirtyMesh.add(t)}setVisible(t){for(const e of this.objects.values())e.solid&&(e.solid.visible=t),e.water&&(e.water.visible=t)}get chunkMeshCount(){return this.objects.size}}class fv{constructor(t,e=700){this.max=e,this.count=0,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e);const n=new Le;n.setAttribute("position",new me(this.pos,3)),n.setAttribute("color",new me(this.col,3)),n.setDrawRange(0,0),this.geo=n,this.points=new Mh(n,new fo({size:.12,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!0})),this.points.frustumCulled=!1,t.add(this.points)}burst(t,e,n,s,r,o={}){const a=o.speed??3.2,l=o.life??.75,c=o.gravity??22;for(let h=0;h<s;h++){this.count>=this.max&&this.swap(0,--this.count);const u=this.count++;this.pos[u*3]=t+(Math.random()-.5)*(o.spread??.7),this.pos[u*3+1]=e+(Math.random()-.5)*(o.spread??.7),this.pos[u*3+2]=n+(Math.random()-.5)*(o.spread??.7),this.vel[u*3]=(Math.random()-.5)*a,this.vel[u*3+1]=Math.random()*a*.7+1.2,this.vel[u*3+2]=(Math.random()-.5)*a,this.col[u*3]=r[0]*(.75+Math.random()*.4),this.col[u*3+1]=r[1]*(.75+Math.random()*.4),this.col[u*3+2]=r[2]*(.75+Math.random()*.4),this.life[u]=l*(.6+Math.random()*.6),this.maxLife[u]=this.life[u],this.gravity=c}}swap(t,e){for(let n=0;n<3;n++)[this.pos[t*3+n],this.pos[e*3+n]]=[this.pos[e*3+n],this.pos[t*3+n]],[this.col[t*3+n],this.col[e*3+n]]=[this.col[e*3+n],this.col[t*3+n]],[this.vel[t*3+n],this.vel[e*3+n]]=[this.vel[e*3+n],this.vel[t*3+n]];[this.life[t],this.life[e]]=[this.life[e],this.life[t]],[this.maxLife[t],this.maxLife[e]]=[this.maxLife[e],this.maxLife[t]]}update(t){const e=this.gravity??22;let n=0;for(;n<this.count;){if(this.life[n]-=t,this.life[n]<=0){this.swap(n,--this.count);continue}this.vel[n*3+1]-=e*t;for(let s=0;s<3;s++)this.pos[n*3+s]+=this.vel[n*3+s]*t;n++}this.geo.setDrawRange(0,this.count),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}}const pv=[.76,.76,1,.55,.9,.9],mn={fov:70,block:{fx:.4406,fy:.7372,size:.7833,depth:.62},arm:{fx:.3212,fy:.857,depth:.6}},mv=i=>Math.tan((i||mn.fov)*Math.PI/360);function gv(i,t,e=1){const n=[],s=[],r=[],o=[],a=i.tiles??{};for(let c=0;c<6;c++){const h=mo[c],u=c===0?a.top??a.all:c===1?a.bottom??a.all:a.side??a.all,d=Cr(t.index[u]??t.index[a.all]??0,t.cell,t.tile,t.grid),f=n.length/3;for(let g=0;g<4;g++){const _=h.verts[g];n.push(_[0]*e-e/2,_[1]*e-e/2,_[2]*e-e/2);const m=h.uv[g];s.push(d.u0+m[0]*d.s,d.v0+m[1]*d.s);const p=pv[c];r.push(p,p,p)}o.push(f,f+1,f+2,f,f+2,f+3)}const l=new Le;return l.setAttribute("position",new Ce(n,3)),l.setAttribute("uv",new Ce(s,2)),l.setAttribute("color",new Ce(r,3)),l.setIndex(o),l}class _v{constructor(t){this.atlas=t,this.group=new yn,this.blockMesh=null,this.blockId=-1,this.arm=new xe(new kn(.16,.5,.14),new rn({color:14262378,depthTest:!1,depthWrite:!1}));const e=this.arm.geometry,n=new Float32Array(e.attributes.position.count/4*4*3);let s=0;for(let r=0;r<6;r++)for(let o=0;o<4;o++){const a=.62+(r===2?.38:r===3?.05:.2);n[s++]=a,n[s++]=a,n[s++]=a}e.setAttribute("color",new me(n,3)),this.arm.material.vertexColors=!0,this.arm.position.set(.24,-.36,-.6),this.arm.rotation.set(.5,0,.1),this.arm.renderOrder=999,this.group.add(this.arm),this.baseBlock=new U(.34,-.32,-.62),this.baseArm=this.arm.position.clone(),this.blockSize=.34,this.fov=mn.fov,this.aspect=16/9,this.swing=0,this.swingActive=0,this.bobPhase=0,this.dayLight=1}setBlock(t){if(t===this.blockId)return;this.blockId=t,this.blockMesh&&(this.group.remove(this.blockMesh),this.blockMesh.geometry.dispose(),this.blockMesh=null);const e=dt[t];if(!e||!e.tiles){this.arm.visible=!0;return}const n=gv(e,this.atlas,1),s=new rn({map:this.atlas.texture,vertexColors:!0,side:Pe,depthTest:!1,depthWrite:!1});this.blockMesh=new xe(n,s),this.blockMesh.position.copy(this.baseBlock),this.blockMesh.scale.setScalar(this.blockSize),this.blockMesh.rotation.set(.1,-.72,.12),this.blockMesh.renderOrder=999,this.group.add(this.blockMesh),this.arm.visible=!1}layout(t=this.fov,e=this.aspect){const n=Number.isFinite(t)&&t>1?t:mn.fov,s=Number.isFinite(e)&&e>.2?e:16/9;if(n===this.fov&&Math.abs(s-this.aspect)<1e-4)return!1;this.fov=n,this.aspect=s;const r=mv(n),o=d=>({h:r*d,w:r*d*s}),a=o(mn.block.depth),l=Math.min(mn.block.size*a.h,.62*a.w),c=l*.9;this.blockSize=l,this.baseBlock.set(Math.min(mn.block.fx*a.w,a.w-c),-Math.min(mn.block.fy*a.h,a.h+l*.55),-.62);const h=o(mn.arm.depth),u=l/.34;return this.arm.scale.setScalar(u),this.baseArm.set(Math.min(mn.arm.fx*h.w,h.w-.15*u),-Math.min(mn.arm.fy*h.h,h.h+.6*u),-.6),!0}triggerSwing(){this.swingActive=1}update(t,{moving:e=0,breaking:n=0,breakProgress:s=0,fov:r=0,aspect:o=0}={}){(r||o)&&this.layout(r||this.fov,o||this.aspect),this.blockMesh&&this.blockMesh.scale.setScalar(this.blockSize),this.bobPhase+=t*(2+e*7),this.swingActive=Math.max(0,this.swingActive-t*3.4);const a=this.swingActive,l=Math.sin((1-a)*Math.PI)*.9,c=Math.cos(this.bobPhase)*.012*e,h=Math.abs(Math.sin(this.bobPhase))*.016*e,u=n?Math.sin(performance.now()*.04)*.01*(.4+s):0;if(this.blockMesh??this.arm,this.blockMesh){const g=this.blockSize/.34;this.blockMesh.position.set(this.baseBlock.x+(c+u)*g,this.baseBlock.y-h*g,this.baseBlock.z+l*.12*g),this.blockMesh.rotation.set(.1-l*.7,-.72,.12+l*.25)}this.arm.position.set(this.baseArm.x+c+u,this.baseArm.y-h,this.baseArm.z+l*.14),this.arm.rotation.set(.5-l*.9,0,.1);const d=.46+.54*this.dayLight,f=new Ct(d,d,d*1.02);this.blockMesh&&this.blockMesh.material.color.copy(f),this.arm.material.color.copy(f)}}class vv{constructor(t){this.atlas=t;const e=new kn(1.004,1.004,1.004);this.outline=new wg(new Ag(new kn(1.002,1.002,1.002)),new yh({color:0,transparent:!0,opacity:.5,depthWrite:!1})),this.outline.visible=!1,this.crack=new xe(e,new rn({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,side:Pe})),this.crack.visible=!1,this.stage=-1,this.group=new yn,this.group.add(this.outline,this.crack)}show(t){if(!t){this.outline.visible=this.crack.visible=!1;return}this.outline.position.set(t.x+.5,t.y+.5,t.z+.5),this.crack.position.copy(this.outline.position),this.outline.visible=!0}hide(){this.show(null)}setBreakProgress(t){if(t<=0){this.crack.visible=!1,this.stage=-1;return}const e=Math.min(Ha-1,Math.floor(t*Ha));e!==this.stage&&(this.stage=e,this.crack.material.map=this.atlas.cracks[e],this.crack.material.needsUpdate=!0),this.crack.visible=!0}setDayLight(t){const e=.35+.65*t;this.crack.material.color.setRGB(e,e,e),this.outline.material.opacity=.25+.3*t}}const Gn=7;class xv{constructor(t,e){this.cx=t,this.cz=e,this.blocks=new Uint8Array(it*it*Jt),this.skyH=new Uint8Array(it*it),this.light=null,this.emitters=[],this.generated=!1,this.needsMesh=!0,this.hmax=0}}const yv=[[1,0],[-1,0],[0,1],[0,-1]];class Ta{constructor(t=Ka){this.seed=t>>>0,this.terrain=new S_(this.seed),this.chunks=new Map,this.edits=new Map,this._original=new Map,this.dirtyMesh=new Set,this.dirtyLight=new Set,this._cacheKey=-1,this._cacheChunk=null,this.stats={generated:0}}key(t,e){return Ah(t,e)}static decode(t){return vs(t)}getChunk(t,e){const n=this.key(t,e);if(n===this._cacheKey)return this._cacheChunk;const s=this.chunks.get(n)??null;return s?(this._cacheKey=n,this._cacheChunk=s,s):null}ensureChunk(t,e){const n=this.key(t,e);let s=this.chunks.get(n);if(s)return s;const r=this._genFail?.get(n)??0;if(r>=3)throw new Error(`чанк ${t},${e} не генерируется (3 попытки): ${this.lastGenError??"см. консоль"}`);s=new xv(t,e);try{this.terrain.generate(s),this.modPass&&this.modPass(this,s),this.applyEdits(s),this.finalize(s)}catch(o){throw this.chunks.delete(n),this._cacheKey===n&&(this._cacheKey=-1),this._genFail=(this._genFail??new Map).set(n,r+1),this.lastGenError=String(o?.message??o),o}this._genFail?.delete(n),this.chunks.set(n,s),this._cacheKey=-1,s.generated=!0,s.needsMesh=!0,this.stats.generated++,this.dirtyLight.add(n),this.dirtyMesh.add(n);for(const[o,a]of yv){const l=this.key(t+o,e+a),c=this.chunks.get(l);c&&(c.needsMesh=!0,this.dirtyMesh.add(l))}return s}applyEdits(t){if(this.edits.size===0)return;const e=t.cx*it,n=t.cz*it;if(this.edits.size<6e3){for(const[s,r]of this.edits){const o=s.indexOf(","),a=s.indexOf(",",o+1),l=+s.slice(0,o),c=+s.slice(o+1,a),h=+s.slice(a+1),u=l-e,d=h-n;u<0||d<0||u>=it||d>=it||c<0||c>=Jt||(t.blocks[se(u,c,d)]=r,c+1>t.hmax&&(t.hmax=c+1))}return}for(let s=0;s<it;s++)for(let r=0;r<it;r++)for(let o=0;o<Jt;o++){const a=this.edits.get(Va(e+r,o,n+s));a!==void 0&&(t.blocks[se(r,o,s)]=a,o+1>t.hmax&&(t.hmax=o+1))}}finalize(t){const e=t.blocks;t.emitters.length=0;for(let n=0;n<it;n++)for(let s=0;s<it;s++){let r=255;for(let o=Jt-1;o>=0;o--){const a=e[se(s,o,n)];if(a===0)continue;const l=dt[a];if(l.light&&t.emitters.length<512&&t.emitters.push([s,o,n,l.light]),l.opaque){r=o+1;break}}t.skyH[n*it+s]=r}}getBlock(t,e,n){if(e<0||e>=Jt)return 0;const s=t>>4,r=n>>4,o=this.getChunk(s,r);return o?o.blocks[se(t-s*it,e,n-r*it)]:0}isOpaque(t,e,n){return dt[this.getBlock(t,e,n)].opaque}isSolid(t,e,n){return dt[this.getBlock(t,e,n)].solid}isReplaceable(t,e,n){const s=this.getBlock(t,e,n);return s===0||dt[s].replaceable===!0}skyAt(t,e,n){if(e>=Jt)return 1;const s=t>>4,r=n>>4,o=this.getChunk(s,r);let a;return o?a=o.skyH[(n-r*it)*it+(t-s*it)]:a=this.terrain.col(t,n).h+1,a===255||e>=a?1:Math.max(.13,1-(a-e)*.055)}lightAt(t,e,n){if(e<0||e>=Jt)return 0;const s=t>>4,r=n>>4,o=this.getChunk(s,r);return!o||!o.light?0:o.light[se(t-s*it,e,n-r*it)]}setBlock(t,e,n,s,r=!0){if(e<0||e>=Jt)return!1;const o=t>>4,a=n>>4,l=this.ensureChunk(o,a),c=t-o*it,h=n-a*it,u=se(c,e,h),d=l.blocks[u];if(d===s)return!1;if(l.blocks[u]=s,this.postEdit(l,c,e,h,d,s),r){const f=Va(t,e,n);this._original.has(f)||this._original.set(f,d),this._original.get(f)===s?this.edits.delete(f):this.edits.set(f,s)}return this.touch(l,c,h,e),!0}postEdit(t,e,n,s,r,o){if(dt[r].light){const h=t.emitters;for(let u=h.length-1;u>=0;u--){const d=h[u];d[0]===e&&d[1]===n&&d[2]===s&&h.splice(u,1)}}dt[o].light&&t.emitters.length<512&&t.emitters.push([e,n,s,dt[o].light]);const a=s*it+e,l=dt[r].opaque,c=dt[o].opaque;c&&!l?(n+1>t.skyH[a]||t.skyH[a]===255)&&(t.skyH[a]=Math.min(255,n+1)):l&&!c&&this.recomputeColumn(t,e,s)}recomputeColumn(t,e,n){let s=255;for(let r=Jt-1;r>=0;r--){const o=t.blocks[se(e,r,n)];if(o!==0&&dt[o].opaque){s=r+1;break}}t.skyH[n*it+e]=s}touch(t,e,n,s){const r=this.key(t.cx,t.cz);s!==void 0&&s+1>t.hmax&&(t.hmax=s+1),this.dirtyMesh.add(r),this.dirtyLight.add(r),e===0&&this.markNeighbor(t.cx-1,t.cz),e===it-1&&this.markNeighbor(t.cx+1,t.cz),n===0&&this.markNeighbor(t.cx,t.cz-1),n===it-1&&this.markNeighbor(t.cx,t.cz+1)}markNeighbor(t,e){const n=this.key(t,e),s=this.chunks.get(n);s&&(s.needsMesh=!0),this.dirtyMesh.add(n),this.dirtyLight.add(n)}recomputeLight(t){const e=[];for(let n=-1;n<=1;n++)for(let s=-1;s<=1;s++){const r=this.getChunk(t.cx+n,t.cz+s);if(r)for(const[o,a,l,c]of r.emitters)e.push([o+n*it,a,l+s*it,c])}if(e.length===0)return t.light&&t.light.fill(0),!1;t.light||(t.light=new Float32Array(it*it*Jt)),t.light.fill(0);for(const[n,s,r,o]of e){const a=Math.max(0,s-Gn),l=Math.min(Jt-1,s+Gn);for(let c=a;c<=l;c++){const h=(c-s)*(c-s)*1.45;for(let u=Math.max(0,r-Gn);u<=Math.min(it-1,r+Gn);u++){const d=(u-r)*(u-r);for(let f=Math.max(0,n-Gn);f<=Math.min(it-1,n+Gn);f++){const g=Math.sqrt((f-n)*(f-n)+h+d);if(g>Gn)continue;const _=o*Math.pow(1-g/Gn,1.7),m=se(f,c,u);_>t.light[m]&&(t.light[m]=_)}}}}return!0}findSpawn(){let t=null;for(let n=0;n<72;n++)for(let s=0;s<12;s++){const r=s/12*Math.PI*2+n*.31,o=Math.round(Math.cos(r)*n*5),a=Math.round(Math.sin(r)*n*5),l=this.terrain.col(o,a);if(!(l.h<=ze+1||l.h>64||Math.max(Math.abs(l.h-this.terrain.col(o+1,a).h),Math.abs(l.h-this.terrain.col(o-1,a).h),Math.abs(l.h-this.terrain.col(o,a+1).h),Math.abs(l.h-this.terrain.col(o,a-1).h))>3)&&(t||(t=[o+.5,l.h+1.05,a+.5]),!this.terrain.treeAt(o,a)))return[o+.5,l.h+1.05,a+.5]}return t||[.5,this.terrain.col(0,0).h+1.05,.5]}findOpenSpot(t,e,n=56){const s=new Set([dt.findIndex(r=>r.key==="grass"),dt.findIndex(r=>r.key==="dirt"),dt.findIndex(r=>r.key==="sand"),dt.findIndex(r=>r.key==="snow"),dt.findIndex(r=>r.key==="podzol"),dt.findIndex(r=>r.key==="gravel")]);for(let r=0;r<=n;r+=2)for(let o=0;o<12;o++){const a=o/12*Math.PI*2+r*.37,l=Math.round(t+Math.cos(a)*r),c=Math.round(e+Math.sin(a)*r),h=l>>4,u=c>>4,d=this.getChunk(h,u);if(!d)continue;const f=l-h*it,g=c-u*it;for(let _=Jt-3;_>1;_--){const m=d.blocks[se(f,_-1,g)];if(s.has(m)&&d.blocks[se(f,_,g)]===0&&d.blocks[se(f,_+1,g)]===0&&d.blocks[se(f,_+2,g)]===0)return[l+.5,_+.02,c+.5]}}return null}removeChunk(t,e){const n=this.key(t,e);this.chunks.delete(n),this._genFail?.delete(n),this.dirtyMesh.delete(n),this.dirtyLight.delete(n),this._cacheKey===n&&(this._cacheKey=-1)}serializeEdits(){const t=[];for(const[e,n]of this.edits)t.push(e+":"+n);return t}loadEdits(t){if(this.edits.clear(),this._original.clear(),!!Array.isArray(t))for(const e of t){const n=e.lastIndexOf(":");if(n<0)continue;const s=e.slice(0,n),r=+e.slice(n+1);if(!Number.isInteger(r)||r<0||r>=dt.length)continue;this.edits.set(s,r);const o=s.indexOf(",");s.indexOf(",",o+1),this._original.set(s,-1)}}get editedCount(){return this.edits.size}get chunkCount(){return this.chunks.size}}const Mv=.6,bc=1.8,bv=1.62,Vn=Mv/2,Sv=28,Sc=8.6,Ec=4.317,Ev=5.9,wv=1.5,Tv=11,Av=26,Rv=7.5,wc=4,Cv=.5,$h=new Uint8Array(dt.length);for(let i=0;i<dt.length;i++)$h[i]=dt[i].solid?1:0;const _r=new Uint8Array(dt.length);for(let i=0;i<dt.length;i++)_r[i]=dt[i].liquid?1:0;function Tc(i){return i>wc?(i-wc)*Cv:0}class Lv{constructor(t){this.world=t,this.x=0,this.y=80,this.z=0,this.vx=0,this.vy=0,this.vz=0,this.yaw=0,this.pitch=0,this.onGround=!1,this.inWater=!1,this.headInWater=!1,this.flying=!1,this.sprinting=!1,this.sneaking=!1,this.walkDistance=0,this.bob=0,this.stepAcc=0,this.bumped=!1,this._airMax=null,this.fallDamage=0,this.justLanded=0,this._wasInWater=!1,this._wasHead=!1}spawn(t,e,n){this.x=t,this.y=e,this.z=n,this.vx=this.vy=this.vz=0,this._airMax=null,this.fallDamage=0,this.justLanded=0;for(let s=0;s<24&&this.collides(this.x,this.y,this.z);s++)this.y+=1;this.onGround=!1}get eyeY(){return this.y+bv-(this.sneaking?.18:0)}eye(t={}){return t.x=this.x,t.y=this.eyeY,t.z=this.z,t}forward(t={}){const e=Math.cos(this.pitch);return t.x=-Math.sin(this.yaw)*e,t.y=Math.sin(this.pitch),t.z=-Math.cos(this.yaw)*e,t}collides(t,e,n){const s=this.world,r=Math.floor(t-Vn),o=Math.floor(t+Vn),a=Math.floor(e),l=Math.floor(e+bc-.001),c=Math.floor(n-Vn),h=Math.floor(n+Vn);for(let u=a;u<=l;u++){if(u<0)return!0;if(!(u>=Jt)){for(let d=c;d<=h;d++)for(let f=r;f<=o;f++)if($h[s.getBlock(f,u,d)])return!0}}return!1}moveAxis(t,e){if(e===0)return!1;const n=e,s=this[t];if(this[t]=s+n,!this.collides(this.x,this.y,this.z))return!1;let r=!1;for(let o=0;o<24;o++){const a=n*(1-o/24),l=s+a,c={x:this.x,y:this.y,z:this.z};if(c[t]=l,!this.collides(c.x,c.y,c.z)){this.x=c.x,this.y=c.y,this.z=c.z,r=!0;break}}return r||(this[t]=s,r=!0),r&&t!=="y"&&(this.bumped=!0),r}blockAtFeet(){return this.world.getBlock(Math.floor(this.x),Math.floor(this.y-.1),Math.floor(this.z))}update(t,e){const n=this.world;t=Math.min(t,1/20);const s=n.getBlock(Math.floor(this.x),Math.floor(this.y+.2),Math.floor(this.z)),r=n.getBlock(Math.floor(this.x),Math.floor(this.y+1),Math.floor(this.z));this.inWater=_r[s]===1||_r[r]===1,this.headInWater=_r[n.getBlock(Math.floor(this.x),Math.floor(this.eyeY),Math.floor(this.z))]===1;const o=Math.sin(this.yaw),a=Math.cos(this.yaw);let l=0,c=0;e.forward&&(l-=o,c-=a),e.back&&(l+=o,c+=a),e.left&&(l-=a,c+=o),e.right&&(l+=a,c-=o);const h=Math.hypot(l,c);h>0&&(l/=h,c/=h),this.sneaking=!!e.sneak&&!this.flying,this.sprinting=!!e.sprint&&!this.sneaking&&e.forward&&!this.inWater;let u=this.flying?e.sprint?Av:Tv:this.inWater?Ec*.55:this.sneaking?wv:this.sprinting?Ev:Ec;const d=this.flying?34:this.onGround?62:this.inWater?24:22,f=e.analog??1,g=l*u*f,_=c*u*f;if(this.vx+=(g-this.vx)*Math.min(1,d*t),this.vz+=(_-this.vz)*Math.min(1,d*t),h===0&&(this.onGround||this.inWater)){const w=(this.flying?9:this.onGround?12:3.4)*t;this.vx-=this.vx*Math.min(1,w),this.vz-=this.vz*Math.min(1,w)}if(this.flying){let w=0;e.jump&&(w+=u*.75),e.sneak&&(w-=u*.75),this.vy+=(w-this.vy)*Math.min(1,22*t)}else this.inWater?(this.vy-=Rv*t,e.jump&&(this.vy=Math.min(this.vy+26*t,3.4)),this.vy=Math.max(this.vy,-3.4),this.vy*=1-Math.min(.6,3.4*t)):(this.vy-=Sv*t,this.vy=Math.max(this.vy,-58),e.jump&&this.onGround&&(this.vy=Sc,this.onGround=!1,this._airMax=this.y));const m=this.vx,p=this.vz,x=this.onGround;if(this.onGround=!1,this.moveAxis("x",this.vx*t)&&(this.vx=0),this.moveAxis("z",this.vz*t)&&(this.vz=0),this.moveAxis("y",this.vy*t)&&(this.vy<0?(this.onGround=!0,!this.flying&&!x&&this.fallStart!==null&&(this.fallDamage=Tc(this.fallStart-this.y)),this.fallStart=this.inWater?null:this.y):this.vy>0&&(this.vy=Math.min(0,this.vy))),this.onGround){if(this.vy=0,!x&&this._airMax!==null){const w=this._airMax-this.y;this.fallDamage=this.flying||this.inWater?0:Tc(w),this.justLanded=w>.7?Math.min(2,w/7):0}this._airMax=null}else this._airMax=this._airMax===null?this.y:Math.max(this._airMax,this.y);if(this.bumped){this.bumped=!1;const w=e.forward||e.back||e.left||e.right;if(this.onGround&&!this.inWater&&!this.flying&&!this.sneaking&&w&&e.autoJump!==!1){const I=this.x+Math.sign(m)*.46,y=this.z+Math.sign(p)*.46;this.collides(I,this.y+1.12,y)||(this.vy=Sc*.94,this.onGround=!1,m!==0&&(this.vx=m),p!==0&&(this.vz=p))}}const v=Math.hypot(this.vx,this.vz);this.walkDistance+=v*t,this.onGround&&v>.6?(this.stepAcc+=v*t,this.bob+=t*(6+v*.8)):this.bob+=(Math.round(this.bob/Math.PI)*Math.PI-this.bob)*Math.min(1,t*6);const b=this.stepAcc>1.9;b&&(this.stepAcc=0);const R=this.inWater&&!this._wasInWater;return this._wasInWater=this.inWater,this.y<-8&&(this.y=Jt-4,this.vy=0),this.y>Jt+40&&(this.y=Jt+40),{stepped:b,splash:R,submerge:this.headInWater!==this._wasHead}}intersectsBlock(t,e,n){return!(t+1<=this.x-Vn||t>=this.x+Vn||e+1<=this.y||e>=this.y+bc||n+1<=this.z-Vn||n>=this.z+Vn)}}function Pv(i,t,e,n,s,r,o,a=6,l={}){const c=l.liquids===!0;let h=Math.floor(t),u=Math.floor(e),d=Math.floor(n);const f=s>0?1:-1,g=r>0?1:-1,_=o>0?1:-1,m=s!==0?Math.abs(1/s):1/0,p=r!==0?Math.abs(1/r):1/0,x=o!==0?Math.abs(1/o):1/0;let v=s!==0?(f>0?h+1-t:t-h)*m:1/0,b=r!==0?(g>0?u+1-e:e-u)*p:1/0,R=o!==0?(_>0?d+1-n:n-d)*x:1/0,w=0,S=0,I=0,y=0;for(let A=0;A<256&&w<=a;A++){const G=u<0?1:i.getBlock(h,u,d),q=dt[G];if(G!==0&&q.replaceable!==!0&&(c||!q.liquid))return{x:h,y:u,z:d,nx:S,ny:I,nz:y,id:G,dist:w,replaceable:!1};const j=Dv(v,b,R);if(j==="a"?(h+=f,w=v,v+=m,S=-f,I=0,y=0):j==="b"?(u+=g,w=b,b+=p,S=0,I=-g,y=0):(d+=_,w=R,R+=x,S=0,I=0,y=-_),u<-1||u>Jt+1)return null}return null}const Dv=(i,t,e)=>i<=t&&i<=e?"a":t<=e?"b":"c",Wn={stone:{freq:720,q:1.1,decay:.09,gain:.55},dirt:{freq:380,q:.8,decay:.1,gain:.5},grass:{freq:1500,q:.7,decay:.07,gain:.32},wood:{freq:520,q:2.2,decay:.12,gain:.5},sand:{freq:2600,q:.5,decay:.08,gain:.3},glass:{freq:3200,q:3.5,decay:.16,gain:.45},wool:{freq:260,q:.6,decay:.09,gain:.35},splash:{freq:900,q:.4,decay:.35,gain:.6},soft:{freq:1200,q:.5,decay:.06,gain:.3}};class Iv{constructor(){this.ctx=null,this.sfxVolume=.6,this.musicVolume=.28,this.musicOn=!0,this._musicTimer=null,this._noise=null,this._muted=!1}resume(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=1,this.master.connect(this.ctx.destination),this.sfx=this.ctx.createGain(),this.sfx.gain.value=this.sfxVolume,this.sfx.connect(this.master),this.music=this.ctx.createGain(),this.music.gain.value=1e-4,this.musicBus=this.ctx.createGain(),this.musicBus.connect(this.music);const e=this.ctx.createDelay(1);e.delayTime.value=.19;const n=this.ctx.createDelay(1);n.delayTime.value=.37;const s=this.ctx.createGain();s.gain.value=.34,this.musicBus.connect(e),this.musicBus.connect(n),e.connect(s),n.connect(s),s.connect(n),e.connect(this.music),n.connect(this.music);const r=this.ctx.sampleRate*1.2,o=this.ctx.createBuffer(1,r,this.ctx.sampleRate),a=o.getChannelData(0);for(let l=0;l<r;l++)a[l]=Math.random()*2-1;this._noise=o,this.musicOn&&this.startMusic()}return this.ctx.state==="suspended"&&this.ctx.resume(),!0}setVolumes(t,e){this.sfxVolume=t,this.musicVolume=e,this.sfx&&(this.sfx.gain.value=t),this.music&&(this.music.gain.cancelScheduledValues(this.ctx.currentTime),this.music.gain.linearRampToValueAtTime(e>0?e:1e-4,this.ctx.currentTime+.4))}get ready(){return!!this.ctx&&this.ctx.state==="running"}_noiseHit({freq:t=800,q:e=1,decay:n=.1,gain:s=.5,sweep:r=0,when:o=0}){const a=this.ctx,l=a.createBufferSource();l.buffer=this._noise,l.playbackRate.value=1+(Math.random()-.5)*.2;const c=a.createBiquadFilter();c.type="bandpass",c.frequency.value=t,c.Q.value=e;const h=a.createGain(),u=a.currentTime+o;h.gain.setValueAtTime(0,u),h.gain.linearRampToValueAtTime(s,u+.004),h.gain.exponentialRampToValueAtTime(8e-4,u+n),r&&c.frequency.exponentialRampToValueAtTime(Math.max(60,t*r),u+n),l.connect(c).connect(h).connect(this.sfx),l.start(u),l.stop(u+n+.05)}_tone({freq:t=440,dur:e=.12,gain:n=.2,type:s="sine",when:r=0,glide:o=0,detune:a=0}){const l=this.ctx,c=l.createOscillator();c.type=s;const h=l.currentTime+r;c.frequency.setValueAtTime(t,h),o&&c.frequency.exponentialRampToValueAtTime(Math.max(40,t*o),h+e),c.detune.value=a;const u=l.createGain();u.gain.setValueAtTime(1e-4,h),u.gain.linearRampToValueAtTime(n,h+.01),u.gain.exponentialRampToValueAtTime(5e-4,h+e),c.connect(u).connect(this.sfx),c.start(h),c.stop(h+e+.05)}hit(t,e=1){if(!this.ready)return;const n=Wn[t]??Wn.stone;this._noiseHit({freq:n.freq*(.9+Math.random()*.25),q:n.q,decay:n.decay*.7,gain:n.gain*.5*e})}breakBlock(t){if(!this.ready)return;const e=Wn[t]??Wn.stone;this._noiseHit({freq:e.freq,q:e.q,decay:e.decay*1.7,gain:e.gain,sweep:.45}),this._tone({freq:e.freq/6,dur:.1,gain:.06,type:"triangle",glide:.6})}place(t){if(!this.ready)return;const e=Wn[t]??Wn.stone;this._noiseHit({freq:e.freq*.7,q:1.4,decay:.07,gain:e.gain*.7}),this._tone({freq:180,dur:.07,gain:.09,type:"sine",glide:.6})}step(t){if(!this.ready)return;const e=Wn[t]??Wn.dirt;this._noiseHit({freq:e.freq*(.85+Math.random()*.3),q:e.q*.8,decay:e.decay*.5,gain:e.gain*.22})}jump(){this.ready&&this._tone({freq:300,dur:.07,gain:.05,type:"sine",glide:1.6})}land(t=1){this.ready&&this._noiseHit({freq:220,q:.7,decay:.1+t*.08,gain:.22*Math.min(1.6,t)})}splash(){this.ready&&this._noiseHit({freq:900,q:.4,decay:.35,gain:.5,sweep:.3})}ui(t="click"){this.ready&&(t==="hover"?this._tone({freq:900,dur:.04,gain:.03,type:"sine"}):t==="back"?this._tone({freq:320,dur:.1,gain:.08,type:"triangle",glide:.6}):this._tone({freq:640,dur:.07,gain:.09,type:"square"}))}deny(){this.ready&&this._tone({freq:180,dur:.12,gain:.08,type:"sawtooth",glide:.7})}openInv(){this.ready&&(this._tone({freq:520,dur:.09,gain:.06,type:"triangle"}),this._tone({freq:780,dur:.12,gain:.05,type:"triangle",when:.05}))}startMusic(){if(!this.ctx||this._musicTimer)return;const t=[0,2,4,7,9,12,14,16,19,21],e=[174.61,196,146.83,164.81];let n=0;const s=()=>{if(!this.ctx||this.ctx.state!=="running")return;const l=this.ctx,c=e[n%e.length];n++,l.currentTime;const h=[0,4,7].map((d,f)=>({freq:c*Math.pow(2,d/12)*(f===2?2:1),when:f*.12}));for(const d of h)this._pad(d.freq,5.2,.035,d.when);const u=1+(Math.random()*3|0);for(let d=0;d<u;d++){const f=t[Math.random()*t.length|0],g=c*2*Math.pow(2,f/12);this._bell(g,1.6+Math.random(),.055,.3+d*.75+Math.random()*.3)}Math.random()>.75&&this._bell(c*4*Math.pow(2,t[Math.random()*5|0]/12),2.4,.03,2.2)},r=(l,c,h,u)=>{const d=this.ctx;if(!d)return;const f=d.currentTime+u,g=d.createOscillator();g.type="sine",g.frequency.value=l;const _=d.createOscillator();_.type="triangle",_.frequency.value=l*1.004;const m=d.createGain();m.gain.setValueAtTime(1e-4,f),m.gain.linearRampToValueAtTime(h,f+c*.35),m.gain.linearRampToValueAtTime(1e-4,f+c),g.connect(m),_.connect(m),m.connect(this.musicBus),g.start(f),_.start(f),g.stop(f+c+.1),_.stop(f+c+.1)},o=(l,c,h,u)=>{const d=this.ctx;if(!d)return;const f=d.currentTime+u,g=d.createOscillator();g.type="sine",g.frequency.value=l;const _=d.createGain();_.gain.setValueAtTime(1e-4,f),_.gain.exponentialRampToValueAtTime(h,f+.02),_.gain.exponentialRampToValueAtTime(1e-4,f+c);const m=d.createBiquadFilter();m.type="lowpass",m.frequency.value=2400,g.connect(m).connect(_).connect(this.musicBus),g.start(f),g.stop(f+c+.1)};this._pad=r,this._bell=o;const a=()=>{try{s()}catch(l){console.warn("музыка выключена:",l?.message??l),this.stopMusic()}};a(),this._musicTimer=setInterval(a,5400)}stopMusic(){this._musicTimer&&clearInterval(this._musicTimer),this._musicTimer=null}toggleMusic(){return this.musicOn=!this.musicOn,this.musicOn?this.ctx&&this.startMusic():this.stopMusic(),this.musicOn}}const ws="litecraft:";function go(i){return`${ws}world:${i}`}const Yh=ws+"settings",jh=2,Kh=ws+"lastSeed";function Uv(i,t){try{return localStorage.setItem(go(i),JSON.stringify(t)),!0}catch(e){return console.warn("Не удалось сохранить мир:",e),!1}}function Nv(i){try{const t=localStorage.getItem(go(i));return t?JSON.parse(t):null}catch(t){return console.warn("Чтение сохранения не удалось:",t),null}}function kv(){const i=[];try{for(let t=0;t<localStorage.length;t++){const e=localStorage.key(t);if(!e?.startsWith(ws+"world:"))continue;const n=localStorage.getItem(e);if(!n)continue;const s=JSON.parse(n);i.push({key:e,seed:e.slice((ws+"world:").length),size:n.length,...s})}}catch{}return i.sort((t,e)=>(e.saved??0)-(t.saved??0))}function Fv(i){try{return localStorage.removeItem(go(i)),!0}catch{return!1}}function ei(i){try{localStorage.setItem(Yh,JSON.stringify({...i,v:jh}))}catch{}}function Ov(){try{const i=JSON.parse(localStorage.getItem(Yh)??"{}")??{};return i.v!==jh&&(delete i.renderDistance,delete i.mobs,delete i.creative),i}catch{return{}}}function Bv(i){try{localStorage.setItem(Kh,String(i))}catch{}}function zv(){try{return localStorage.getItem(Kh)}catch{return null}}function Hv(i,t=1200){let e=null;const n=(...s)=>{e&&clearTimeout(e),e=setTimeout(()=>{e=null,i(...s)},t)};return n.flush=(...s)=>{e&&(clearTimeout(e),e=null,i(...s))},n.cancel=()=>{e&&(clearTimeout(e),e=null)},n}const $t=i=>document.getElementById(i),eo={renderDistance:10,fov:74,mobs:14,creative:!1,sensitivity:1,sfx:.55,music:.22,dayLength:8,freeTime:!1,clouds:.75,shaders:1,netName:"",netUrl:"",netRoom:"world",renderScale:1,fpsLimit:120,shadows:1,waterRefl:2,ao:!0,smoothLight:!0,viewBob:!0,autoJump:!0,showDebug:!0,touch:!1},Gv=[["Стройка",null],["Природа",null],["Руды и свет",null],["Растения и ферма",null],["Инструменты",null],["Предметы",null],["Прочее",null]],Vv={Стройка:["stone","cobblestone","mossy_cobblestone","stone_bricks","bricks","planks","log","glass","ice","lantern","sandstone","obsidian","crafting_table","wool_white","wool_red","wool_blue","wool_yellow","wool_lime","wool_black"],Природа:["grass","dirt","sand","gravel","leaves","snow","podzol","bedrock","cactus","water"],"Руды и свет":["coal_ore","iron_ore","gold_ore","diamond_ore","redstone_ore","glowstone"],"Растения и ферма":["tall_grass","fern","flower_red","flower_yellow","sapling","wheat","farmland","hay_block"]};function Wv(i){for(const[t,e]of Object.entries(Vv))if(e.includes(i))return t;return/_pickaxe|_axe|_shovel|_sword/.test(i)||i==="shears"?"Инструменты":i==="emerald"||i.endsWith(":item")||["leather","pork","stick","coal_item","flint","apple","bread","compass","clock"].includes(i)?"Предметы":"Прочее"}const Xv=[["WASD / ←↑↓→","движение"],["Мышь","осмотр"],["ЛКМ (держать)","копать блок · атака по мобу"],["ПКМ","поставить блок"],["СКМ","выбрать блок под курсором"],["Пробел","прыжок · двойной — полёт"],["Shift (в полёте)","вниз"],["Ctrl / 2×W","бег"],["1…9 · колесо","слот хотбара"],["E","инвентарь"],["Q","выбросить (сброс слота)"],["R","наверх, если застрял"],["N","промотать время"],["M","музыка вкл/выкл"],["F","полный экран"],["F1","спрятать интерфейс"],["F3","отладка"],["Esc","пауза"]];class qv{constructor(t){this.atlas=t,this.el={hud:$t("hud"),hotbar:$t("hotbar"),blockname:$t("blockname"),debug:$t("debug"),toasts:$t("toasts"),menu:$t("menu"),pause:$t("pause"),settings:$t("settings"),inventory:$t("inventory"),loading:$t("loading"),loadFill:$t("load-fill"),loadText:$t("load-text"),water:$t("water-tint"),vignette:$t("vignette"),hp:$t("hp"),crosshair:$t("crosshair"),seed:$t("seed"),worlds:$t("worlds"),touch:$t("touch-ui"),invGrid:$t("inv-grid"),invHotbar:$t("inv-hotbar"),settingsBody:$t("settings-body"),pauseStats:$t("pause-stats"),controls:$t("controls-list"),invCursor:$t("inv-cursor"),invCraft:$t("inv-craft"),invCraftTitle:$t("inv-craft-title"),invPalette:$t("inv-palette"),invPaletteTitle:$t("inv-palette-title"),invHint:$t("inv-hint"),net:$t("net"),netStatus:$t("net-status"),netPeers:$t("net-peers"),netRole:$t("net-role"),netName:$t("net-name"),netUrl:$t("net-url"),netRoom:$t("net-room"),netCode:$t("net-code"),netChat:$t("net-chat"),netChatRow:$t("net-chat-row")},this.slots=[],this.settings={...eo},this.el.controls.innerHTML=Xv.map(([e,n])=>`<div><kbd>${e}</kbd><span class="muted">${n}</span></div>`).join("")}show(t){for(const e of["menu","pause","settings","inventory","loading","net"])this.el[e].classList.toggle("hidden",e!==t);this.el.hud.classList.toggle("hidden",t!==null),this.el.hud.dataset.keep==="1"&&this.el.hud.classList.remove("hidden")}setLoading(t,e){this.el.loadFill.style.width=`${Math.round(t*100)}%`,e&&(this.el.loadText.textContent=e)}netState(){return{role:this._netRole??"host",name:(this.el.netName?.value??"").trim(),url:(this.el.netUrl?.value??"").trim(),room:(this.el.netRoom?.value??"").trim()}}netPrefill(t){this.el.netName&&(this.el.netName.value=t.name??""),this.el.netUrl&&(this.el.netUrl.value=t.url??""),this.el.netRoom&&(this.el.netRoom.value=t.room??""),this.netRole(t.role??"host"),this.el.netChatRow&&this.el.netChatRow.classList.toggle("hidden",!t.connected),t.text!==void 0&&this.netStatus(t.text??"",t.kind??"")}netRole(t){this._netRole=t==="guest"?"guest":"host";for(const e of this.el.netRole?.children??[])e&&e.classList&&e.classList.toggle("on",(e.dataset?.v??"")===this._netRole)}netStatus(t,e=""){const n=this.el.netStatus;n&&(n.textContent=t,n.classList?.toggle("on",e==="on"),n.classList?.toggle("err",e==="err"))}netCode(t){this.el.netCode&&(this.el.netCode.value=t??"")}netCodeValue(){return String(this.el.netCode?.value??"")}netPeers(t){const e=this.el.netPeers;if(!e)return;const n=t.length?"в комнате: "+t.map(s=>`${s.name} (${Math.round(s.x??0)}; ${Math.round(s.z??0)})`).join(", "):"пока никого — правки и шаги видят только тебя";e.textContent!==n&&(e.textContent=n)}toast(t,e=""){const n=this.el.toasts;if(!n)return;const s=String(t);for(const o of n.children??[])if(o.__toastKey===s){this._toastArm(o);return}const r=document.createElement("div");for(r.className=`toast ${e}`,r.textContent=t,r.__toastKey=s,n.appendChild(r);(n.children?.length??0)>6;)n.removeChild(n.children[0]);this._toastArm(r)}_toastArm(t){clearTimeout(t.__t),t.style.opacity="",t.__t=setTimeout(()=>{t.style.transition="opacity .4s",t.style.opacity="0",t.__t=setTimeout(()=>t.remove(),420)},2400)}setFlyAvailable(t){const e=document.getElementById("t-fly");e?.classList&&e.classList.toggle("dim",!t)}seg(t,e){for(const n of t?.children??[])n.classList?.toggle("on",(n.dataset?.v??n.__v)===e)}buildHotbar(t,e,n,s=null){this.hotbar=t,this.sel=e,this.hotCounts=s,this.onHotbarChange=n??this.onHotbarChange;const r=(o,a,l)=>{o.innerHTML="";const c=[];return t.forEach((h,u)=>{const d=document.createElement("div");if(d.className="slot"+(u===e?" sel":""),!a){const f=document.createElement("span");f.className="num",f.textContent=String(u+1),d.appendChild(f)}if(h){const f=document.createElement("img");f.src=this.atlas.icon(h,48),f.alt=dt[h].name,d.appendChild(f);const g=s?s[u]|0:0;if(g>1){const _=document.createElement("span");_.className="cnt",_.textContent=String(g),d.appendChild(_)}}d.title=h?dt[h].name:"пусто",d.addEventListener("click",f=>{f.stopPropagation(),l==="inv"?this.onInvSlot?.("hot",u):this.onHotbarChange?.(u,"click")}),o.appendChild(d),c.push(d)}),c};this.slots=r(this.el.hotbar,!1,"hud"),this.el.invHotbar&&(this.invSlots=r(this.el.invHotbar,!0,"inv"))}markInventorySelection(t){(this.invSlots??[]).forEach((e,n)=>e.classList.toggle("sel",n===t)),(this.slots??[]).forEach((e,n)=>e.classList.toggle("sel",n===t))}renderInventory(t){const{snap:e,recipes:n,creative:s,icon:r,names:o,onSlot:a,onPick:l,onCraft:c,nearTable:h,onCreative:u}=t;this.onInvSlot=a;const d=(p,x,v,b)=>{const R=document.createElement("div");if(R.className="slot",p){const w=document.createElement("img");if(w.src=r(p,44),w.alt=o(p),R.appendChild(w),x>1){const S=document.createElement("span");S.className="cnt",S.textContent=String(x),R.appendChild(S)}}return R.title=p?`${o(p)}${x?" ×"+x:""}`:"пусто",R.onclick=()=>a(v,b),R},f=this.el.invGrid;f.innerHTML="",e.main.forEach((p,x)=>f.appendChild(d(p.id,p.n,"main",x))),this.buildHotbar(e.hot.map(p=>p.id),e.sel,this.onHotbarSelect,s?null:e.hot.map(p=>p.n)),this.el.invCursor.textContent=e.cursor.id?`В руке: ${o(e.cursor.id)}${e.cursor.n>1?" ×"+e.cursor.n:""} — кликни по клетке, чтобы положить`:s?"Творчество: клик по палитре кладёт блок в выбранный слот":"Клик по клетке — взять стек, по другой — положить/обменять";const g=this.el.invCraft;g.innerHTML="",this.el.invCraftTitle&&(this.el.invCraftTitle.textContent=h?"Крафт · верстак рядом — доступны все рецепты":"Крафт · у верстака (в 4 блоках) открываются инструменты из камня и железа"),n.forEach((p,x)=>{const v=document.createElement("div");v.className="craft-row"+(p.ok?" ok":" locked");const b=document.createElement("img");b.src=r(p.outId,32),v.appendChild(b);const R=document.createElement("span");R.className="cname",R.textContent=`${o(p.outId)}${p.n>1?" ×"+p.n:""}`,v.appendChild(R);const w=document.createElement("span");w.className="cneed",w.textContent=p.need.map(I=>`${o(I.id)} ${I.have}/${I.n}`).join(" · ")+(p.table?" · верстак":""),v.appendChild(w);const S=document.createElement("button");S.textContent=p.ok?"Скрафтить":"—",S.disabled=!p.ok,S.onclick=()=>c(x),v.appendChild(S),g.appendChild(v)});const _=this.el.invPalette,m=this.el.invPaletteTitle;if(_&&(_.innerHTML="",m&&(m.style.display=s?"":"none"),s)){if(m){m.innerHTML="";const b=document.createElement("span");b.textContent="Все блоки ("+dt.filter(S=>S&&S.id&&S.render!=="none").length+")";const R=document.createElement("input");R.type="search",R.className="pal-search",R.placeholder="Поиск: стекло, кирка, шерсть…",R.value=this.palQuery??"",R.oninput=()=>{this.palQuery=R.value,this.renderInventory(t)};const w=document.createElement("button");w.className="btn ghost mini",w.textContent="Творчество: вкл",w.title="Выключить — инвентарь снова становится обычным, а блоки начинают тратиться",w.onclick=()=>{u?.(),this.renderInventory(t)},m.append(b,R,w)}const p=(this.palQuery??"").trim().toLowerCase(),x=new Map(Gv.map(b=>[b[0],[]]));for(const b of dt)!b.id||b.render==="none"||p&&!(b.name.toLowerCase().includes(p)||b.key.includes(p))||(x.get(Wv(b.key))??x.get("Прочее")).push(b);let v=0;for(const[b,R]of x){if(!R.length)continue;v+=R.length;const w=document.createElement("div");w.className="pal-cat",w.textContent=b,_.appendChild(w);for(const S of R){const I=document.createElement("div");I.className="slot";const y=document.createElement("img");y.src=r(S.id,36),y.alt=S.name,I.appendChild(y),I.title=S.name,I.onclick=()=>l(S.id),_.appendChild(I)}}if(p&&!v){const b=document.createElement("div");b.className="muted pal-empty",b.textContent=`По запросу «${p}» в палитре ничего нет — попробуй «кирка», «шерсть», «песч»`,_.appendChild(b)}}}selectSlot(t){this.sel=t,[...this.slots,...this.invSlots??[]].forEach((e,n)=>e.classList.toggle("sel",n%9===t))}setCinematic(t){const e=this.el.vignette;!e||!e.classList||e.classList.toggle("cine",!!t)}showBlockName(t,e=""){const n=this.el.blockname;n.textContent=(t?dt[t].name:"Пусто")+(e||""),n.classList.add("show"),clearTimeout(this._nameT),this._nameT=setTimeout(()=>n.classList.remove("show"),1400)}setDebug(t){this.el.debug&&(this.el.debug.textContent=t)}hideDebug(t){this.el.debug.classList.toggle("hidden",t)}hideHud(t){this.el.hud.classList.toggle("hidden",t),this.el.crosshair.style.opacity=t?"0":""}setWater(t){this.el.water.classList.toggle("on",t)}setMining(t){this.el.crosshair.classList.toggle("mine",t)}hurt(){this.el.vignette.classList.add("hurt"),setTimeout(()=>this.el.vignette.classList.remove("hurt"),550)}setHealthVisible(t){const e=this.el.hp;e&&(e.style.display=t?"":"none")}setHealth(t,e=20){const n=[];for(let s=0;s<e/2;s++){const r=Math.max(0,Math.min(1,t-s*2))/2;n.push(r>=.99?"❤️":r>=.4?"🧡":"🖤")}this.el.hp.textContent=n.join("")}renderWorlds(t,e,n){const s=this.el.worlds;if(s.innerHTML="",!t.length){s.innerHTML='<div class="muted small">Сохранённых миров пока нет.</div>';return}for(const r of t){const o=document.createElement("div");o.className="world-item",o.innerHTML=`<div class="grow">Сид <b>${r.seed}</b> · правок: ${r.edits??0}
        <div class="muted small">${r.saved?new Date(r.saved).toLocaleString("ru-RU"):""}</div></div>`;const a=document.createElement("button");a.className="btn",a.textContent="Продолжить",a.onclick=()=>e(r.seed);const l=document.createElement("button");l.className="btn ghost danger",l.textContent="Удалить",l.onclick=()=>n(r.seed),o.append(a,l),s.appendChild(o)}}settingsForm(t,e,n={}){const s=[{key:"renderDistance",label:"Дальность прорисовки",min:2,max:64,step:1,fmt:l=>`${l} чанк · ~${l*16} блоков${l>=32?" · прогреть мир займёт время":l>=24?" · нужно много памяти":""}`},{key:"fov",label:"Поле зрения",min:55,max:110,step:1,fmt:l=>`${l}°`},{key:"sensitivity",label:"Чувствительность мыши",min:.2,max:3,step:.05,fmt:l=>l.toFixed(2)},{key:"sfx",label:"Громкость эффектов",min:0,max:1,step:.05,fmt:l=>`${Math.round(l*100)}%`},{key:"music",label:"Громкость музыки",min:0,max:1,step:.05,fmt:l=>`${Math.round(l*100)}%`},{key:"clouds",label:"Облачность",min:0,max:1,step:.05,fmt:l=>`${Math.round(l*100)}%`},{key:"renderScale",label:"Разрешение рендера",min:.5,max:1,step:.05,fmt:l=>`${Math.round(l*100)}%${l>=.98?" · пиксель в пиксель":l>=.8?" · мягко":" · экономно"}`},{key:"dayLength",label:"Длина суток, мин",min:2,max:40,step:1,fmt:l=>`${l}`},{key:"mobs",label:"Мобов вокруг",min:0,max:32,step:1,fmt:l=>l?`${l}`:"выкл"}],r=[{key:"shaders",label:"Шейдеры",options:[[0,"Выкл — базовая картинка"],[1,"Мягкие — блики, дымка, живая вода"],[2,"Красивые — тонмаппинг, небо в отражениях, виньетка"],[3,"Ультра — тени от солнца, отражающая вода, закаты (нужна мощная видеокарта)"]]},{key:"shadows",label:"Тени от солнца (нужны «Красивые» или «Ультра»)",options:[[0,"выкл — быстрее всего"],[1,"рядом — зона 128 блоков"],[2,"широко — зона 192 блока"]]},{key:"waterRefl",label:"Отражения воды (только «Ультра»)",options:[[0,"нет — только блики"],[1,"небо"],[2,"небо + мир (куб-проба)"]]},{key:"fpsLimit",label:"Лимит кадров, FPS",options:[[20,"20"],[30,"30"],[45,"45"],[60,"60"],[75,"75"],[90,"90"],[120,"120 — по умолчанию"],[144,"144"],[165,"165"],[240,"240"],[0,"без лимита"]]}],o=[{key:"ao",label:"Мягкое затенение (AO)"},{key:"smoothLight",label:"Плавный свет"},{key:"viewBob",label:"Покачивание камеры"},{key:"autoJump",label:"Автопрыжок через уступы"},{key:"creative",label:"Творчество: блоки не тратятся, урон не страшен, полёт доступен"},{key:"freeTime",label:"Заморозить время"},{key:"showDebug",label:"Панель отладки (F3)"},{key:"touch",label:"Сенсорное управление"}],a=this.el.settingsBody;a.innerHTML="";for(const l of s){const c=document.createElement("div");c.className="setting";const h=document.createElement("label");h.textContent=l.label;const u=document.createElement("input");u.type="range",u.min=l.min,u.max=l.max,u.step=l.step,u.value=t[l.key];const d=document.createElement("span");d.className="val",d.textContent=l.fmt(+u.value),u.oninput=()=>{const f=+u.value;d.textContent=l.fmt(f),t[l.key]=f,e(l.key,f)},c.append(h,u,d),a.appendChild(c)}for(const l of r){const c=document.createElement("div");c.className="setting";const h=document.createElement("label");h.textContent=l.label;const u=document.createElement("select");for(const[d,f]of l.options){const g=document.createElement("option");g.value=String(d),g.textContent=f,Number(t[l.key])===d&&(g.selected=!0),u.appendChild(g)}u.onchange=()=>{const d=+u.value;t[l.key]=d,e(l.key,d)},c.append(h,u),a.appendChild(c)}for(const l of o){const c=document.createElement("div");c.className="setting";const h=document.createElement("label");h.className="check";const u=document.createElement("input");u.type="checkbox",u.checked=!!t[l.key],u.onchange=()=>{t[l.key]=u.checked,e(l.key,u.checked)},h.append(u,document.createTextNode(l.label)),c.appendChild(h),a.appendChild(c)}if(n.onRegenerate){const l=document.createElement("div");l.className="row buttons";const c=document.createElement("button");c.className="btn ghost",c.textContent="Пересобрать чанки",c.onclick=n.onRegenerate;const h=document.createElement("button");h.className="btn ghost",h.textContent="Сбросить настройки",h.onclick=n.onReset;const u=[c,h];if(n.onLowSpec){const d=document.createElement("button");d.className="btn ghost",d.textContent="Слабое железо",d.title="Меньше пикселей, без AO, реже свет и облака · дальность прорисовки не трогаем",d.onclick=n.onLowSpec,u.push(d)}l.append(...u),a.appendChild(l)}this.modsSection(a,n.mods)}modsSection(t,e){if(!e)return;const n=document.createElement("div");n.className="setting";const s=document.createElement("label");s.textContent="Моды и свои шейдеры";const r=document.createElement("div");r.style.cssText="opacity:.65;font-size:12px;line-height:1.45;margin:2px 0 6px",r.textContent="Файлы из каталога mods/ подхватываются сборкой. Ниже — свой мод одним объектом (секции tiles, blocks, recipes, ore, mobs, shader) и шейдерная вставка в материал мира. Справочник: mods/README.md.",n.append(s,r),t.appendChild(n);const o=document.createElement("div");o.className="setting";const a=typeof e.list=="function"?e.list():[];if(!a.length){const g=document.createElement("div");g.style.cssText="opacity:.6;font-size:12px",g.textContent="Модов нет: положи файл mods/<имя>.js или напиши свой ниже.",o.appendChild(g)}for(const g of a){const _=document.createElement("div");_.style.cssText="display:flex;gap:8px;align-items:baseline;margin:3px 0";const m=document.createElement("input");m.type="checkbox",m.checked=!g.off,m.onchange=()=>e.onToggle?.(g.id,m.checked);const p=document.createElement("label");p.style.cssText="font-size:13px";const x=g.ok?g.off?"выключен":g.applied?"применён":"без изменений":g.error||"ошибка";p.textContent=`${g.name} — ${g.source} — ${x}`,g.ok||(p.style.color="#f0a2a2"),_.append(m,p),o.appendChild(_)}t.appendChild(o);const l=document.createElement("textarea");l.value=typeof e.source=="function"?e.source():"",l.rows=9,l.spellcheck=!1,l.placeholder="{ id: 'moy', name: 'Мой мод', blocks: […], shader: { frag: 'col.rgb *= 1.1;' } }",l.style.cssText="width:100%;box-sizing:border-box;background:#0d1117;color:#d6e4f0;border:1px solid #2b3a4a;border-radius:6px;padding:8px;font:12px/1.5 ui-monospace,Menlo,Consolas,monospace;white-space:pre",t.appendChild(l);const c=document.createElement("div");c.className="row buttons";const h=document.createElement("button");h.className="btn ghost",h.textContent="Сохранить мод",h.onclick=()=>e.onSave?.(l.value);const u=document.createElement("button");u.className="btn ghost",u.textContent="Применить шейдеры сейчас",u.title="Работает, если мод трогает только shader: материал пересобирается на живых мешах. Блоки и текстуры требуют F5.",u.onclick=()=>e.onApplyShaders?.();const d=document.createElement("button");d.className="btn ghost",d.textContent="Сбросить поле",d.onclick=()=>{l.value=typeof e.source=="function"?e.source():""},c.append(h,u,d),t.appendChild(c);const f=typeof e.uniforms=="function"?e.uniforms():[];for(const g of f){const _=document.createElement("div");_.className="setting";const m=document.createElement("label");m.textContent=`${g} (мод)`;const p=document.createElement("input");p.type="range",p.min="0",p.max="1",p.step="0.01",p.value="0.5",p.oninput=()=>e.onSetUniform?.(g,+p.value),m.append(p,document.createTextNode(` ${p.value}`)),_.appendChild(m),t.appendChild(_)}if(typeof e.stats=="function"){const g=document.createElement("div");g.style.cssText="opacity:.6;font-size:12px;margin-top:4px",g.textContent="Активно: "+e.stats(),t.appendChild(g)}}buildInventory(t){const e=this.el.invGrid;e.innerHTML="";for(const n of dt){if(n.id===0)continue;const s=document.createElement("div");s.className="inv-cell";const r=document.createElement("img");r.src=this.atlas.icon(n.id,48);const o=document.createElement("span");o.textContent=n.name,s.append(r,o),s.onclick=()=>t(n.id),s.onmouseenter=()=>{window.__hudHover?.()},e.appendChild(s)}}}function $v(i,{input:t,api:e}){const n=i.querySelector("#stick"),s=i.querySelector("#stick-knob"),r={active:!1,id:-1,cx:0,cy:0},o=46,a=m=>{const p=n.getBoundingClientRect();r.cx=p.left+p.width/2,r.cy=p.top+p.height/2,r.active=!0,r.id=m.changedTouches?m.changedTouches[0].identifier:"m",l(m),m.preventDefault()},l=m=>{if(!r.active)return;const p=m.changedTouches?Yv(m.changedTouches,r.id):m;if(!p)return;let x=p.clientX-r.cx,v=p.clientY-r.cy;const b=Math.hypot(x,v);b>o&&(x=x/b*o,v=v/b*o),s.style.transform=`translate(${x}px, ${v}px)`,t.tForward=v<-6?1:0,t.tBack=v>6?1:0,t.tLeft=x<-6?1:0,t.tRight=x>6?1:0,t.tAnalog=Math.min(1,b/o),m.preventDefault()},c=m=>{r.active=!1,s.style.transform="",t.tForward=t.tBack=t.tLeft=t.tRight=0,t.tAnalog=1};n.addEventListener("touchstart",a,{passive:!1}),n.addEventListener("touchmove",l,{passive:!1}),n.addEventListener("touchend",c),n.addEventListener("touchcancel",c);const h=(m,p,x)=>{const v=i.querySelector(m);if(!v)return;const b=R=>{v.classList.toggle("active",R),R?p():x?.()};v.addEventListener("touchstart",R=>{R.preventDefault(),b(!0)},{passive:!1}),v.addEventListener("touchend",R=>{R.preventDefault(),b(!1)},{passive:!1}),v.addEventListener("click",R=>{R.preventDefault()})};h("#t-jump",()=>{t.tJump=1},()=>{t.tJump=0}),h("#t-sneak",()=>{t.tSneak=1,t.tSprint=0},()=>{t.tSneak=0}),h("#t-mine",()=>{t.mine=1,e.onMineStart?.()},()=>{t.mine=0,e.onMineEnd?.()}),h("#t-place",()=>{e.place?.()},()=>{}),i.querySelector("#t-fly")?.addEventListener("click",()=>{e.toggleFly?.()}),i.querySelector("#t-inv")?.addEventListener("click",m=>{m.preventDefault(),e.toggleInv?.()});const u={id:-1,x:0,y:0},d=document.getElementById("gl");d.addEventListener("touchstart",m=>{const p=m.changedTouches[0];p.clientX<window.innerWidth*.32&&p.clientY>window.innerHeight*.6||p.target===d&&(u.id=p.identifier,u.x=p.clientX,u.y=p.clientY,f=!0)},{passive:!0});let f=!1;d.addEventListener("touchmove",m=>{const p=[...m.changedTouches].find(x=>x.identifier===u.id);p&&(t.lookX+=(p.clientX-u.x)*.0045,t.lookY+=(p.clientY-u.y)*.0045,u.x=p.clientX,u.y=p.clientY,m.preventDefault())},{passive:!1});const g=m=>{[...m.changedTouches].find(x=>x.identifier===u.id)&&(u.id=-1,f&&performance.now()-_<250&&e.tap?.(),f=!1)};let _=0;return d.addEventListener("touchstart",()=>{_=performance.now()},{passive:!0}),d.addEventListener("touchend",g,{passive:!0}),d.addEventListener("touchcancel",g,{passive:!0}),{uninstall(){n.replaceWith(n.cloneNode(!0))}}}function Yv(i,t){for(let e=0;e<i.length;e++)if(i[e].identifier===t)return i[e];return null}const Ss=64,_s=9,cr=27;class jv{constructor(){this.hot=new Array(_s).fill(0),this.hotN=new Array(_s).fill(0),this.main=new Array(cr).fill(0),this.mainN=new Array(cr).fill(0),this.sel=0,this.creative=!0,this.cursor=0,this.cursorN=0}kind(t){return t==="hot"?[this.hot,this.hotN]:[this.main,this.mainN]}id(t,e){return this.kind(t)[0][e]|0}n(t,e){return this.kind(t)[1][e]|0}set(t,e,n,s){const[r,o]=this.kind(t);r[e]=n|0,o[e]=Math.max(0,s|0)}swap(t,e,n,s){const[r,o]=this.kind(t),[a,l]=this.kind(n),c=r[e],h=o[e];r[e]=a[s],o[e]=l[s],a[s]=c,l[s]=h}selectedId(){return this.hot[this.sel]|0}selectedCount(){return this.creative?1/0:this.hotN[this.sel]|0}count(t){let e=0;if(this.creative)return this.hot.includes(t)?1/0:0;for(let n=0;n<_s;n++)this.hot[n]===t&&(e+=this.hotN[n]);for(let n=0;n<cr;n++)this.main[n]===t&&(e+=this.mainN[n]);return e}add(t,e=1){if(t|=0,!t||e<=0)return 0;if(this.creative){for(let o=0;o<_s;o++)if(this.hot[o]===t)return 0;for(let o=0;o<_s;o++)if(!this.hot[o])return this.hot[o]=t,this.hotN[o]=0,0;for(let o=0;o<cr;o++)if(!this.main[o])return this.main[o]=t,this.mainN[o]=0,0;return 0}let n=e;const s=(o,a,l)=>{for(let c=0;c<o.length&&n>0;c++){if(o[c]!==t)continue;const h=Ss-a[c];if(h<=0)continue;const u=Math.min(h,n);a[c]+=u,n-=u}};s(this.hot,this.hotN),s(this.main,this.mainN);const r=(o,a)=>{for(let l=0;l<o.length&&n>0;l++){if(o[l])continue;const c=Math.min(Ss,n);o[l]=t,a[l]=c,n-=c}};return r(this.hot,this.hotN),r(this.main,this.mainN),n}take(t,e=1){if(this.creative)return e;let n=e;const s=(r,o)=>{for(let a=r.length-1;a>=0&&n>0;a--){if(r[a]!==t)continue;const l=Math.min(o[a],n);o[a]-=l,n-=l,o[a]<=0&&(r[a]=0,o[a]=0)}};return s(this.main,this.mainN),s(this.hot,this.hotN),e-n}consumeSelected(t=1){if(this.creative)return!0;const e=this.sel;return this.hot[e]?(this.hotN[e]-=t,this.hotN[e]<=0&&(this.hot[e]=0,this.hotN[e]=0),!0):!1}snapshot(){return{hot:this.hot.map((t,e)=>({id:t,n:this.creative?0:this.hotN[e]})),main:this.main.map((t,e)=>({id:t,n:this.creative?0:this.mainN[e]})),sel:this.sel,cursor:{id:this.cursor,n:this.cursorN},creative:this.creative}}serialize(){return{hot:this.hot.slice(),hotN:this.hotN.slice(),main:this.main.slice(),mainN:this.mainN.slice(),sel:this.sel,creative:this.creative}}load(t){if(!t)return!1;const e=(n,s)=>{if(Array.isArray(n))for(let r=0;r<s.length&&r<n.length;r++)s[r]=n[r]|0};return e(t.hot,this.hot),e(t.hotN,this.hotN),e(t.main,this.main),e(t.mainN,this.mainN),this.sel=t.sel|0,typeof t.creative=="boolean"&&(this.creative=t.creative),!0}}const Zh=1,Kv=12,Zv=15e3,no=16,hr=1e7,dn=(i,t=0)=>typeof i=="number"&&Number.isFinite(i)?i:t,ur=(i,t,e)=>i<t?t:i>e?e:i;function Jv(i){return JSON.stringify(i)}function Qv(i){if(typeof i!="string"||i.length>64*1024)return null;let t;try{t=JSON.parse(i)}catch{return null}return!t||typeof t!="object"||t.v!==Zh||typeof t.t!="string"?null:t}function Aa(i){return String(i??"").replace(/[\u0000-\u001f<>]/g,"").trim().slice(0,24)||"игрок"}function Ac(i){return String(i??"").toLowerCase().replace(/[^a-z0-9_-]/g,"").slice(0,32)||"world"}function Rc(i){const t=ur(dn(i?.x),-hr,hr),e=ur(dn(i?.y,64),-8,Jt+8),n=ur(dn(i?.z),-hr,hr),s=dn(i?.yaw)%(Math.PI*2),r=ur(dn(i?.pitch),-1.5708,1.5708);return{x:t,y:e,z:n,yaw:s,pitch:r}}class tx{constructor(t={}){this.id=String(t.id??"me"),this.name=Aa(t.name),this.seed=t.seed>>>0,this.blockCount=t.blockCount??256,this.send=typeof t.send=="function"?t.send:()=>{},this.onEdit=t.onEdit??null,this.onPeerJoin=t.onPeerJoin??null,this.onPeerLeave=t.onPeerLeave??null,this.onChat=t.onChat??null,this.onSeed=t.onSeed??null,this.log=t.log??(()=>{}),this.clock=t.clock??null,this.shareSeed=!!t.shareSeed,this.peers=new Map,this.edits=0,this.dropped=0,this.stats={in:0,out:0,bad:0},this._lastPos=0,this.closed=!1}announce(t={}){this._raw({t:"hello",n:this.name,s:this.seed,...t})}_raw(t){if(!this.closed){this.stats.out++;try{this.send(Jv({v:Zh,from:this.id,...t}))}catch(e){this.log("отправка не удалась: "+(e?.message??e))}}}announceSeed(){this._raw({t:"seed",s:this.seed>>>0})}broadcastEdit(t,e,n,s){this._raw({t:"e",x:t|0,y:e|0,z:n|0,id:s|0}),this.edits++}broadcastPosition(t,e=0){const n=this.now();if(n-this._lastPos<1e3/Kv)return;this._lastPos=n;const s=Rc({...t});this._raw({t:"p",x:+s.x.toFixed(3),y:+s.y.toFixed(3),z:+s.z.toFixed(3),yaw:+s.yaw.toFixed(4),pitch:+s.pitch.toFixed(4),h:e|0})}broadcastChat(t){const e=String(t??"").slice(0,160);e.trim()&&this._raw({t:"c",x:e})}now(){return this.clock?this.clock():Date.now()}handle(t){if(this.closed)return;this.stats.in++;const e=Qv(t);if(!e){this.stats.bad++;return}const n=String(e.from??"").slice(0,64);if(!n||n===this.id)return;const s=this.now();switch(e.t){case"hello":{const r=!this.peers.has(n),o=this._touch(n,s);if(o.name=Aa(e.n),typeof e.s=="number"&&Number.isFinite(e.s)&&(o.seed=e.s>>>0),r&&this.peers.size>no){this.log("слишком много игроков, лишний отключён"),this.peers.delete(n);return}r&&(this._raw({t:"hello",n:this.name,s:this.seed}),this.shareSeed&&this._raw({t:"seed",s:this.seed}),this.onPeerJoin?.(n,o));return}case"seed":{const r=dn(e.s,NaN);Number.isFinite(r)&&this.onSeed?.(r>>>0);return}case"p":{const r=this._touch(n,s),o=Rc(e);r.tx=o.x,r.ty=o.y,r.tz=o.z,r.tyaw=o.yaw,r.tpitch=o.pitch,r.x===void 0&&(r.x=o.x,r.y=o.y,r.z=o.z,r.yaw=o.yaw,r.pitch=o.pitch),r.held=dn(e.h,0)|0,r.seen=s;return}case"e":{const r=dn(e.x,NaN),o=dn(e.y,NaN),a=dn(e.z,NaN),l=dn(e.id,NaN)|0;if(![r,o,a].every(Number.isFinite)){this.stats.bad++;return}if(o<0||o>=Jt||l<0||l>=this.blockCount){this.dropped++;return}this.onEdit?.({x:r|0,y:o|0,z:a|0,id:l,from:n}),this.edits++;return}case"c":{const r=this._touch(n,s);this.onChat?.(Aa(r.name??e.n),String(e.x??"").slice(0,160));return}case"bye":{this.peers.delete(n)&&this.onPeerLeave?.(n);return}default:this.stats.bad++}}_touch(t,e){let n=this.peers.get(t);return n||(n={id:t,name:"игрок",x:0,y:0,z:0,yaw:0,pitch:0,seen:e},this.peers.set(t,n)),n.seen=e,n}tick(t){const e=this.now();for(const[n,s]of this.peers){if(e-(s.seen??0)>Zv){this.peers.delete(n),this.onPeerLeave?.(n);continue}const r=Math.max(0,Math.min(1,t*9));s.tx!==void 0&&(s.x+=(s.tx-s.x)*r,s.y+=(s.ty-s.y)*r,s.z+=(s.tz-s.z)*r,s.yaw+=(s.tyaw-s.yaw)*r,s.pitch+=(s.tpitch-s.pitch)*r)}}leave(){this._raw({t:"bye"}),this.closed=!0}peerList(){return[...this.peers.values()].map(t=>({id:t.id,name:t.name,x:t.x,y:t.y,z:t.z}))}}const ex=i=>typeof globalThis.btoa=="function"?globalThis.btoa(unescape(encodeURIComponent(i))):Buffer.from(i,"utf8").toString("base64"),nx=i=>typeof globalThis.atob=="function"?decodeURIComponent(escape(globalThis.atob(i))):Buffer.from(i,"base64").toString("utf8");function Cc(i){return ex(JSON.stringify(i))}function Lc(i){try{const t=JSON.parse(nx(String(i).trim().replace(/\s+/g,"")));return t&&t.type&&t.sdp?t:null}catch{return null}}function Jh(){const i={message:[],open:[],close:[],error:[]},t=(n,s)=>(typeof s=="function"&&i[n].push(s),e),e={onMessage:n=>t("message",n),onOpen:n=>t("open",n),onClose:n=>t("close",n),onError:n=>t("error",n),emit(n,s){for(const r of i[n])try{r(s)}catch{}}};return e}function ix(i){const t=Jh();let e=null,n=[],s=!1;return(()=>{if(s)return;const o=globalThis.WebSocket;if(typeof o!="function"){t.emit("error","браузер не поддерживает WebSocket");return}try{e=new o(i)}catch(a){t.emit("error",String(a?.message??a));return}e.onopen=()=>{for(const a of n)try{e.send(a)}catch{break}n=[],t.emit("open")},e.onmessage=a=>{typeof a.data=="string"&&t.emit("message",a.data)},e.onclose=()=>{e=null,t.emit("close")},e.onerror=()=>{t.emit("error","нет соединения с сервером")}})(),{...t,get ready(){return!!e&&e.readyState===1},send(o){if(e&&e.readyState===1)try{e.send(o);return}catch{}n.length<256&&n.push(o)},close(){s=!0;try{e?.close()}catch{}e=null}}}function Pc({label:i="lite",ice:t=!0}={}){const e=globalThis.RTCPeerConnection,n=Jh();if(!e)return n.emit("error","браузер не поддерживает WebRTC"),{...n,ready:!1,send(){},close(){}};const s=new e({iceServers:t?[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302"]}]:[]});let r=null,o=!1;const a=()=>new Promise(c=>{if(s.iceGatheringState==="complete")return c();const h=setTimeout(c,2500);s.addEventListener("icegatheringstatechange",()=>{s.iceGatheringState==="complete"&&(clearTimeout(h),c())})}),l=c=>{r=c,r.binaryType="arraybuffer",r.onmessage=h=>{typeof h.data=="string"&&n.emit("message",h.data)},r.onopen=()=>n.emit("open"),r.onclose=()=>{o||n.emit("close")}};return s.ondatachannel=c=>l(c.channel),s.onconnectionstatechange=()=>{(s.connectionState==="failed"||s.connectionState==="disconnected")&&n.emit("close")},{...n,get ready(){return!!r&&r.readyState==="open"},send(c){if(r&&r.readyState==="open")try{r.send(c)}catch{}},async hostStart(){l(s.createDataChannel(i,{ordered:!0}));const c=await s.createOffer();return await s.setLocalDescription(c),await a(),Cc(s.localDescription)},async guestAccept(c){const h=Lc(c);if(!h)throw new Error("код приглашения не читается");await s.setRemoteDescription(h);const u=await s.createAnswer();return await s.setLocalDescription(u),await a(),Cc(s.localDescription)},async guestFinish(c){const h=Lc(c);if(!h)throw new Error("ответ не читается");await s.setRemoteDescription(h)},close(){o=!0;try{r?.close()}catch{}try{s.close()}catch{}}}}function Dc(i,t=8790){const e=globalThis.location,n=sx(i);if(!e||!e.protocol)return`ws://127.0.0.1:${t}/${n}`;const s=e.protocol==="https:"?"wss:":"ws:",r=/^(\d+)-(.+)$/.exec(e.hostname??"");return r?`${s}//${t}-${r[2]}/${n}`:`${s}//${e.hostname}:${t}/${n}`}function sx(i){return String(i??"").toLowerCase().replace(/[^a-z0-9_-]/g,"").slice(0,32)||"world"}const Ic=[5227511,16758605,8505220,12216520,15037299,5093036,15753874,16773494],Uc=13208675;function rx(i){let t=2166136261;for(let e=0;e<i.length;e++)t=(t^i.charCodeAt(e))*16777619;return t>>>0}const zi=(i,t,e,n)=>({geo:new kn(i,t,e),color:n});class ax{constructor(t){this.scene=t,this.group=new yn,this.group.name="peers",this.scene.add(this.group),this.items=new Map,this.day=1,this.parts=[zi(.5,.5,.5,Uc),zi(.55,.7,.3,0),zi(.22,.75,.22,0),zi(.22,.75,.22,0),zi(.25,.8,.25,0),zi(.25,.8,.25,0)],this.offs=[[0,1.45,0],[0,.85,0],[-.4,.85,0],[.4,.85,0],[-.15,.4,0],[.15,.4,0]],this.mats=[]}_label(t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n.fillStyle="rgba(12,16,20,0.68)",n.fillRect(0,0,e.width,e.height),n.font="600 34px ui-monospace, monospace",n.fillStyle="#eaf2f7",n.textAlign="center",n.textBaseline="middle",n.fillText(t.slice(0,18),e.width/2,e.height/2+2);const s=new Tg(e);s.colorSpace=Te;const r=new Sg(new vh({map:s,transparent:!0,depthTest:!0}));return r.scale.set(1.6,.4,1),r.position.set(0,2.15,0),r.renderOrder=3,r.userData.tex=s,r}ensure(t,e){let n=this.items.get(t);if(n)return n.name!==e&&(n.name=e,n.group.remove(n.label),n.label.material.map.dispose(),n.label.material.dispose(),n.label=this._label(e),n.group.add(n.label)),n;const s=Ic[rx(String(e||t))%Ic.length],r=new yn,o=[];this.parts.forEach((l,c)=>{const h=new rn({color:c===0?Uc:c===1?s:ox(s)}),u=new xe(l.geo,h),d=this.offs[c];u.position.set(d[0],d[1],d[2]),r.add(u),o.push(u)});const a=this._label(e||"игрок");return r.add(a),this.group.add(r),n={id:t,name:e||"игрок",group:r,meshes:o,label:a,t:0,px:0,pz:0,base:o.map(l=>l.material.color.clone())},this.items.set(t,n),this.day!==1&&this._apply(n),n}update(t,e){const n=new Set;for(const s of t){n.add(s.id);const r=this.ensure(s.id,s.name);r.group.position.set(s.x??0,(s.y??0)-.02,s.z??0),r.group.rotation.y=-(s.yaw??0);const o=Math.hypot((s.x??0)-r.px,(s.z??0)-r.pz);r.px=s.x??0,r.pz=s.z??0,r.t+=e*(1.5+o*9);const a=Math.sin(r.t*3.4)*Math.min(.7,o*4);r.meshes[4]&&(r.meshes[4].rotation.x=a),r.meshes[5]&&(r.meshes[5].rotation.x=-a),r.meshes[2]&&(r.meshes[2].rotation.x=-a*.7),r.meshes[3]&&(r.meshes[3].rotation.x=a*.7)}for(const s of[...this.items.keys()])n.has(s)||this.remove(s);return this.items.size}remove(t){const e=this.items.get(t);if(e){this.group.remove(e.group);for(const n of e.meshes)n.material.dispose();e.label.material.map?.dispose?.(),e.label.material.dispose(),this.items.delete(t)}}clear(){for(const t of[...this.items.keys()])this.remove(t)}setDayLight(t){const e=Math.max(.28,Math.min(1,t));if(!(Math.abs(e-this.day)<.01)){this.day=e;for(const n of this.items.values())this._apply(n)}}_apply(t){t.meshes.forEach((e,n)=>{t.base[n]&&e.material.color.copy(t.base[n]).multiplyScalar(this.day)})}}function ox(i){const t=new Ct(i);return t.multiplyScalar(.72),t.getHex()}const lx={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Fr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const cx=new ho(-1,1,1,-1,0,1);class hx extends Le{constructor(){super(),this.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ce([0,2,0,0,2,0],2))}}const ux=new hx;class dx{constructor(t){this._mesh=new xe(ux,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,cx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Qh extends Fr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof an?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=lo.clone(t.uniforms),this.material=new an({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new dx(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Nc extends Fr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class fx extends Fr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class px{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Xt);this._width=n.width,this._height=n.height,e=new Nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ts}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qh(lx),this.copyPass.material.blending=Pn,this.clock=new Dg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Nc!==void 0&&(o instanceof Nc?n=!0:o instanceof fx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class mx extends Fr{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ct}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const gx=`
precision highp float;
uniform sampler2D tDiffuse;
uniform float uTime;
uniform float uUnder;      // камера в воде
uniform float uDusk;       // 0..1 — закат/рассвет (греет кадр)
uniform float uNight;      // 0..1 — ночь (холодит и приглушает)
uniform float uVignette;   // кинематографичная виньетка (настройка)
/*MOD_DECL*/
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  // Под водой свет ходит волнами: искажение крошечное, но именно оно даёт ощущение
  // «я внутри воды», а не «на экран наклеили синий фильтр».
  if (uUnder > 0.5) {
    uv.x += sin(uv.y * 26.0 + uTime * 1.7) * 0.0016;
    uv.y += cos(uv.x * 22.0 - uTime * 1.3) * 0.0012;
  }
  vec4 c = texture2D(tDiffuse, uv);
  if (uUnder > 0.5) {
    c.rgb = mix(c.rgb, c.rgb * vec3(0.52, 0.92, 1.02) + vec3(0.0, 0.02, 0.05), 0.55);
  }
  // Закат греет тени, ночь холодит всё; уклон маленький, иначе цвет травы
  // уезжает в грязь на первом же вечернем кадре.
  c.rgb *= mix(vec3(1.0), vec3(1.06, 0.98, 0.9), uDusk * 0.55);
  c.rgb *= mix(vec3(1.0), vec3(0.92, 0.96, 1.06), uNight * 0.5);
  float l = dot(c.rgb, vec3(0.299, 0.587, 0.114));
  c.rgb = mix(vec3(l), c.rgb, 1.07);
  if (uVignette > 0.5) {
    float d = length(vUv - 0.5);
    c.rgb *= 1.0 - 0.26 * pow(clamp(d * 1.42, 0.0, 1.0), 2.2);
  }
  /*MOD_POST*/
  gl_FragColor = vec4(c.rgb, 1.0);
}
`,_x=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;class vx{setUniform(t,e){const n=this.grade?.uniforms?.[t];return n?(n.value=e,!0):!1}constructor(t,e,n,s={}){this.renderer=t,this.enabled=!1,this.ok=!1,this.composer=null,this.grade=null;try{const r=t.capabilities?.isWebGL2!==!1,o=t.getDrawingBufferSize(new Xt),a=new Nn(Math.max(2,o.x),Math.max(2,o.y),{type:Mn,samples:r?4:0,depthBuffer:!0,stencilBuffer:!1});this.composer=new px(t,a),this.composer.addPass(new mx(e,n));const l=Array.isArray(s.post)?s.post:[],c=s.uniforms&&typeof s.uniforms=="object"?s.uniforms:null,h=c?Object.entries(c).map(([f,g])=>[f,Rh(g)]).filter(([,f])=>f).map(([f,g])=>`uniform ${g} ${f};`).join(`
`):"",u=(f,g,_)=>{const m=new RegExp(`[ \\t]*/\\*${g}\\*/[ \\t]*\\n?`);return _?f.replace(m,()=>`${_.trim()}
`):f.replace(m,"")};let d=u(gx,"MOD_DECL",h);d=u(d,"MOD_POST",l.length?l.map(f=>`{
    // ——— пост-обработка мода «${f.mod}»
${f.code}
  }`).join(`
  `):""),this.fragSource=d,this.grade=new Qh({uniforms:{tDiffuse:{value:null},uTime:{value:0},uUnder:{value:0},uDusk:{value:0},uNight:{value:0},uVignette:{value:0},...c?Object.fromEntries(Object.entries(c).map(([f,g])=>[f,{value:g}])):{}},vertexShader:_x,fragmentShader:this.fragSource}),this.grade.renderToScreen=!0,this.composer.addPass(this.grade),this.ok=!0,this.setSize()}catch(r){console.warn("постобработка недоступна:",r?.message??r),this.ok=!1,this.enabled=!1,this.composer=null}}get active(){return this.ok&&this.enabled}setEnabled(t){if(!this.ok){this.enabled=!1;return}this.enabled=!!t}setSize(){if(!this.ok||!this.composer)return;const t=this.renderer.getDrawingBufferSize(new Xt);this.composer.setSize(Math.max(2,t.x),Math.max(2,t.y))}render(t,e){if(e){const n=this.grade.uniforms;n.uTime.value=(n.uTime.value??0)+(t||0),n.uUnder.value=e.under?1:0,n.uDusk.value=Math.max(0,Math.min(1,e.dusk??0)),n.uNight.value=Math.max(0,Math.min(1,e.night??0)),n.uVignette.value=e.vignette?1:0}try{this.composer.render(t||1/60)}catch(n){console.warn("постобработка выключена из-за сбоя:",n?.message??n),this.ok=!1,this.enabled=!1,this.renderer.setRenderTarget(null)}}dispose(){try{this.grade?.dispose?.(),this.composer?.renderTarget1?.dispose(),this.composer?.renderTarget2?.dispose()}catch{}this.composer=null,this.ok=!1,this.enabled=!1}}const qe={mapSize:2048,radius:64,normalBias:.14,bias:-6e-4,height:150};class xx{constructor(t){this.light=new Pg(16777215,1),this.light.castShadow=!0,this.light.intensity=1;const e=this.light.shadow;e.mapSize.set(qe.mapSize,qe.mapSize),e.bias=qe.bias,e.normalBias=qe.normalBias,e.camera.left=-64,e.camera.right=qe.radius,e.camera.top=qe.radius,e.camera.bottom=-64,e.camera.near=1,e.camera.far=qe.height*3,e.camera.updateProjectionMatrix(),e.autoUpdate=!1,this.light.target.position.set(0,0,0),t.add(this.light),t.add(this.light.target),this.scene=t,this.enabled=!1,this._texel=qe.radius*2/qe.mapSize,this._last={x:NaN,z:NaN,sun:NaN,t:-1,mesh:-1},this._frame=0,this._interval=2,this.stats={radius:qe.radius,updated:0,interval:0}}setEnabled(t,e=qe.radius){this.enabled=!!t,this.light.castShadow=this.enabled;const n=Math.max(24,Math.min(160,e|0));if(n!==this.stats.radius){this.stats.radius=n;const s=this.light.shadow.camera;s.left=s.bottom=-n,s.right=s.top=n,s.updateProjectionMatrix(),this._texel=n*2/qe.mapSize}this.enabled&&(this.light.shadow.needsUpdate=!0),this.light.shadow.autoUpdate=!1}update(t,e,n,s=0){if(this._frame++,!this.enabled)return this.stats.interval=0,!1;const r=Math.max(0,e.y);if(n<.04||r<.02)return this._last.t=-1,!1;const o=this._focus??(this._focus=new U);o.set(t.x,t.y+qe.height*.12,t.z),o.x=Math.round(o.x/this._texel)*this._texel,o.z=Math.round(o.z/this._texel)*this._texel,o.y=Math.round(o.y/this._texel)*this._texel;const a=qe.height*1.35;this.light.position.set(o.x+e.x*a,o.y+r*a+8,o.z+e.z*a),this.light.target.position.copy(o),this.light.target.updateMatrixWorld(),this.light.position.add(new U(0,0,0)),this.light.updateMatrixWorld(),this.light.shadow.camera.updateProjectionMatrix();const l=Math.abs(t.x-this._last.x)>.6||Math.abs(t.z-this._last.z)>.6,c=Math.abs(r-this._last.sun)>.002,h=s!==this._last.mesh,u=l||c||h;this._interval=l||h?1:n>.6?4:8;const d=this._frame%this._interval===0;let f=!1;return(this._last.t<0||u||d)&&(this.light.shadow.needsUpdate=!0,this._last={x:t.x,z:t.z,sun:r,t:this._frame,mesh:s},this.stats.updated++,f=!0),f}setSoftness(t){this.light.shadow.radius=Math.max(1,Math.min(8,t|0))}dispose(){this.light.shadow.map?.dispose(),this.light.shadow.map=null,this.scene.remove(this.light),this.scene.remove(this.light.target)}}class yx{constructor(t,e,n={}){const s=n.size??128;this.enabled=!1,this.every=n.every??12,this.renderer=t,this.scene=e,this._frame=0,this._last={x:NaN,y:NaN,z:NaN,mesh:-1},this.ok=!1,this.rt=null,this.camera=null,this.stats={updates:0,size:s,every:this.every};try{this.rt=new lh(s,{type:Mn,generateMipmaps:!1,minFilter:He,magFilter:He}),this.camera=new ah(.6,n.far??190,this.rt),this.ok=!0}catch(r){console.warn("отражения воды недоступны:",r?.message??r),this.enabled=!1}}setEnabled(t){this.enabled=this.ok&&!!t}update(t,e=0,n=[]){if(!this.ok||!this.enabled)return!1;this._frame++;const s=Math.abs(t.x-this._last.x)>1.2||Math.abs(t.z-this._last.z)>1.2||Math.abs(t.y-this._last.y)>1.2,r=e!==this._last.mesh,o=this._frame%Math.max(1,this.every)===0;if(!(s||r||o))return!1;this._last={x:t.x,y:t.y,z:t.z,mesh:e};const a=n.map(l=>l.visible);for(const l of n)l.visible=!1;try{return this.camera.position.set(t.x,t.y,t.z),this.camera.updateMatrixWorld(),this.camera.update(this.renderer,this.scene),this.stats.updates++,!0}catch(l){return console.warn("съёмка отражения не удалась, выключаем:",l?.message??l),this.enabled=!1,!1}finally{n.forEach((l,c)=>{l.visible=a[c]})}}get texture(){return this.rt?.texture??null}dispose(){try{this.rt?.dispose()}catch{}this.rt=null,this.enabled=!1}}const Ra=["grass","dirt","stone","cobblestone","planks","log","glass","torch","glowstone"],Ca=1/60;class Or{constructor(t={}){this.canvas=document.getElementById("gl"),this.renderer=t.renderer??Ig(this.canvas),t.renderer||this.applyPixelRatio(),this.scene=new Mg,this.camera=new nn(74,1,.08,1800),this.camera.rotation.order="YXZ",this.scene.add(this.camera),this.atlas=new n_;try{this.atlasAniso=this.atlas.setMaxAnisotropy(this.renderer.capabilities?.getMaxAnisotropy?.()??1)}catch{this.atlasAniso=1}this._canDeriv=Or.supportsDerivatives(this.renderer),this.materials=Ea(this.atlas,wa(),{derivatives:this._canDeriv}),this.watchVoxelProgram(),this._shaderTier=0,this.installShaderLadder(),this.sky=new lv(this.scene),this.sunShadow=new xx(this.scene),this.renderer.shadowMap&&(this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=Fc),this.particles=new fv(this.scene),this.target=new vv(this.atlas),this.scene.add(this.target.group),this.viewModel=new _v(this.atlas),this.camera.add(this.viewModel.group),this.settings={...eo,...Ov()},Xi.ao=this.settings.ao,Xi.smoothLight=this.settings.smoothLight,this.audio=new Iv,this.hud=new qv(this.atlas),this.input={forward:0,back:0,left:0,right:0,jump:0,sneak:0,sprint:0,mine:0,place:0,lookX:0,lookY:0,analog:1},this.keys=new Set,this.state={running:!1,paused:!1,loading:!1,hudHidden:!1,time:.28,seed:Ka,world:null,hotbar:Ra.map(e=>dt.find(n=>n.key===e)?.id??0),sel:0,breakProgress:0,breakTarget:null,lastHit:null,dragging:!1,hp:20,regenT:0,saveT:0,placeCd:0,stepT:0,fps:0,ms:0,acc:0,flyTapT:0,sprintTapT:0},this.blockTint=this.computeTints(),this.inv=new jv,this.state.hotbar=this.inv.hot,this.state.counts=this.inv.hotN,this.state.sel=this.inv.sel,this.attackCd=0,this.state.mobTarget=null,this.mobs=new z_({world:null,scene:this.scene,material:this.materials.solid,atlas:this.atlas,particles:this.particles,audio:this.audio,onPlayerHit:(e,n)=>this.hitByMob(e,n),onDrop:(e,n)=>this.pickup(e,n)}),this.debouncedSave=Hv(()=>this.save(),1500),this.net=null,this.netTransport=null,this.netKind=null,this.netRole="host",this.netAdopt=!1,this.netRtcWait=null,this.netPanelOpen=!1,this._netHudT=0,this.menuMode=this.settings.creative?"creative":"survival",this.avatars=new ax(this.scene),this.applySettings(null,!0),this.bindUI(),this.bindNet(),this.bindInput(),this.resize(),addEventListener("resize",()=>{this.resize(),this.post?.setSize()}),this.hud.show("menu"),this.refreshWorlds(),this.bindModeSeg(),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state.running&&this.pause()}),requestAnimationFrame(e=>this.frame(e))}computeTints(){const t=new Map;for(const e of dt){if(!e.tiles)continue;const n=e.tiles.side??e.tiles.all,s=this.atlas.canvases[n];if(!s)continue;const o=s.getContext("2d").getImageData(0,0,s.width,s.height).data;let a=0,l=0,c=0,h=0;for(let u=0;u<o.length;u+=4)o[u+3]<40||(a+=o[u],l+=o[u+1],c+=o[u+2],h++);h&&t.set(e.id,[a/h/255,l/h/255,c/h/255])}return t}bindUI(){const{el:t}=this.hud;t.seed.value=zv()??"",document.getElementById("play").onclick=()=>this.startFromMenu(),document.getElementById("rnd-seed").onclick=()=>{t.seed.value=String(Math.random()*1e9|0),this.audio.ui("click")},t.seed.onkeydown=e=>{e.key==="Enter"&&this.startFromMenu()},document.getElementById("open-settings").onclick=()=>this.openSettings("settings"),document.getElementById("pause-settings").onclick=()=>this.openSettings("settings"),document.getElementById("settings-close").onclick=()=>{this.hud.show(this.state.running?"pause":"menu"),this.state.running&&this.resume()},document.getElementById("resume").onclick=()=>this.resume(),document.getElementById("save-now").onclick=()=>{this.save(!0)},document.getElementById("pause-quit").onclick=()=>{this.save(),this.toMenu()},this.hud.onHotbarSelect=(e,n)=>{this.inventoryOpen?(this.invTarget=e,this.hud.markInventorySelection(e)):(this.selectSlot(e),n==="click"&&this.resume())},this.hud.buildHotbar(this.inv.hot,this.inv.sel,this.hud.onHotbarSelect,null),window.__hudHover=()=>this.audio.ui("hover")}openSettings(t){this.hud.settingsForm(this.settings,(e,n)=>this.applySettings(e,n),{onRegenerate:()=>{this.state.world&&(this.state.world.rebuildAll?.(),this.chunkView?.rebuildAll())},mods:null,onLowSpec:()=>{this.settings={...this.settings,renderScale:.65,ao:!1,clouds:.3,mobs:8},ei(this.settings),this.applySettings(null,!0),this.chunkView?.rebuildAll(),this.hud.toast("Слабое железо: рендер 65%, без AO, мобильно 8. Дальность прорисовки как была",""),this.openSettings(t)},onReset:()=>{this.settings={...eo},ei(this.settings),this.applySettings(null,!0),this.openSettings(t)}}),this.settingsFrom=t,this.hud.show("settings")}applySettings(t,e){if(t==="creative"){this.setCreative(!!e);return}t&&e!==null&&(this.settings[t]=e,ei(this.settings));const n=this.settings;Xi.ao=n.ao,Xi.smoothLight=n.smoothLight,this.materials?.setQuality?.(n.shaders),this.sky?.setUltra?.(n.shaders>=3),this.post?this.post.setEnabled(n.shaders>=3):n.shaders>=3&&this.initPost(),this.applyLighting(n),this.hud?.setCinematic?.(n.shaders>=2&&!this.post?.active),this.chunkView&&this.chunkView.setRenderDistance(n.renderDistance),this.audio.ready&&this.audio.setVolumes(n.sfx,n.music),this.audio.musicVolume=n.music,this.audio.sfxVolume=n.sfx,this.camera.fov=n.fov,this.camera.updateProjectionMatrix(),this.hud.hideDebug(!n.showDebug),(t==="ao"||t==="smoothLight")&&this.chunkView?.rebuildAll(),(t==="renderScale"||t===null)&&this.applyPixelRatio(),(t==="touch"||t===null)&&this.setupTouch()}openNet(){this.netPanelOpen=!0;const t=this.settings.netUrl||Dc(this.settings.netRoom||"world");this.hud.netPrefill({name:this.settings.netName||"",url:t,room:this.settings.netRoom||"world",role:this.netRole,connected:!!this.net,text:this.net?`${this.netKind==="p2p"?"прямое соединение":`комната ${Ac(this.netRoomName??"")}`}: игроков ${this.net.peers.size+1}`:void 0,kind:this.net?"on":""}),this.hud.show("net"),document.exitPointerLock?.()}closeNet(){this.netPanelOpen=!1,this.hud.show(this.state.running?"pause":"menu"),this.state.running&&this.resume()}bindNet(){const t=this.hud.el;document.getElementById("settings-net").onclick=()=>this.openNet(),document.getElementById("menu-net").onclick=()=>this.openNet(),document.getElementById("net-close").onclick=()=>this.closeNet(),document.getElementById("net-connect").onclick=()=>this.netConnectRelay(),document.getElementById("net-stop").onclick=()=>this.netLeave("сеть выключена"),document.getElementById("net-offer").onclick=()=>this.netRtcOffer(),document.getElementById("net-answer").onclick=()=>this.netRtcExchange();for(const e of t.netRole?.children??[])e.onclick=()=>{this.netRole=e.dataset?.v==="guest"?"guest":"host",this.hud.netRole(this.netRole)};t.netChat.onkeydown=e=>{e.stopPropagation?.(),e.key==="Enter"&&this.netSendChat()}}netAttach(t,{kind:e,shareSeed:n,adopt:s}){const r=(this.state.seed??Ka)>>>0;this.netKind=e,this.netAdopt=!!s;const o=new tx({id:`${e}-${Math.random().toString(36).slice(2,9)}`,name:this.hud.netState().name||"игрок",seed:r,blockCount:dt.length,shareSeed:n,send:a=>t.send(a),log:a=>this.hud.netStatus(String(a),"err"),onEdit:a=>this.netApplyEdit(a),onPeerJoin:(a,l)=>this.hud.toast(`${l.name??"игрок"} в сети`,""),onPeerLeave:a=>{this.hud.toast("игрок вышел из сети","warn"),this.avatars.remove(a)},onChat:(a,l)=>this.hud.toast(`${a}: ${l}`,""),onSeed:a=>this.netAdoptSeed(a)});return t.onMessage(a=>o.handle(a)),t.onOpen?.(()=>o.announce({role:this.netRole})),t.onClose?.(()=>{this.net===o&&(this.hud.netStatus("связь потеряна — «Выйти из сети» почистит состояние, потом можно подключиться заново","err"),this.hud.toast("сеть отвалилась","warn"))}),t.onError?.(a=>{this.net===o&&this.hud.netStatus(String(a??"ошибка соединения"),"err")}),this.netTransport=t,this.net=o,o.announce({role:this.netRole}),o}netConnectRelay(){this.net&&this.netLeave();const t=this.hud.netState(),e=Ac(t.room);this.netRoomName=e;let n=t.url||Dc(e);if(!/^wss?:\/\//i.test(n)){this.hud.netStatus("адрес должен начинаться с ws:// или wss://","err");return}n=n.replace(/\/+$/,"");const s=`${n}/${e}`;this.settings.netUrl=n,this.settings.netRoom=e,this.settings.netName=t.name,ei(this.settings),this.hud.netStatus(`стучимся на ${s}…`,"");const r=ix(s);this.netAttach(r,{kind:"relay",shareSeed:t.role==="host",adopt:t.role==="guest"}),this.netEnsureWorld(),this._netPoll=setInterval(()=>{if(!this.net||this.netTransport!==r){clearInterval(this._netPoll),this._netPoll=0;return}r.ready&&(clearInterval(this._netPoll),this._netPoll=0,this.hud.netStatus(`в комнате ${e} · ждём игроков (до ${no})`,"on"))},400),this._netWait=setTimeout(()=>{this._netWait=0,this.net&&this.netTransport===r&&!r.ready&&this.hud.netStatus("реле не отвечает: запущен ли `npm run net`? совпадают ли адрес и комната?","err")},6e3)}async netRtcOffer(){this.net&&this.netLeave();const t=Pc({});this.netAttach(t,{kind:"p2p",shareSeed:!0,adopt:!1}),this.netEnsureWorld(),this.netRtcWait="answer";try{const e=await t.hostStart();this.hud.netCode(e),this.hud.netStatus("код приглашения — в поле ниже: отправь его второму игроку, он вернёт свой код","on")}catch(e){this.hud.netStatus("не удалось создать приглашение: "+(e?.message??e),"err")}}async netRtcExchange(){const t=this.hud.netCodeValue();if(!t.trim()){this.hud.netStatus("вставьте код в поле ниже","err");return}try{if(this.netRtcWait==="answer"){await this.netTransport.guestFinish(t),this.netRtcWait=null,this.hud.netStatus("ответ принят. если второй игрок тоже закончил — вы видите друг друга","on");return}this.net?this.netAdopt=!0:this.netAttach(Pc({}),{kind:"p2p",shareSeed:!1,adopt:!0}),this.netEnsureWorld();const e=await this.netTransport.guestAccept(t);this.netRtcWait="answer",this.hud.netCode(e),this.hud.netStatus("код ответа готов — скопируй его и верни первому игроку, он нажмёт ту же кнопку","on")}catch(e){this.hud.netStatus("код не принял: "+(e?.message??e),"err")}}netEnsureWorld(){this.state.running||this.state.loading||(this.hud.netStatus("готовлю мир для комнаты…",""),Promise.resolve(this.startFromMenu()).catch(t=>this.hud.netStatus("мир не поднялся: "+(t?.message??t),"err")))}netAdoptSeed(t){this.netAdopt&&((this.state.seed??-1)===t&&this.state.running||(this.hud.netStatus(`перестраиваю мир под сида ${t}…`,""),Promise.resolve(this.start(t)).then(()=>this.net&&(this.net.seed=t)).catch(e=>this.hud.netStatus("мир хоста не построился: "+(e?.message??e),"err"))))}netApplyEdit({x:t,y:e,z:n,id:s}){const r=this.state.world;r&&r.setBlock(t,e,n,s,!0)}netSendChat(){const t=this.hud.el.netChat,e=String(t?.value??"");!e.trim()||!this.net||(this.net.broadcastChat(e),t&&(t.value=""),this.hud.toast(`ты: ${e.slice(0,160)}`,""))}netBroadcast(t,e,n,s){this.net&&this.net.broadcastEdit(t,e,n,s)}netFrame(t){const e=this.net;if(!e)return;e.tick(t),this.player&&this.state.world&&!this.state.loading&&e.broadcastPosition({x:this.player.x,y:this.player.y,z:this.player.z,yaw:this.player.yaw,pitch:this.player.pitch},this.inv.sel);const n=e.peerList();this.avatars.update(n,t),this.avatars.setDayLight(this.sky.dayLight??1);const s=this.lastFrame??0;s-this._netHudT>500&&(this._netHudT=s,this.hud.netPeers(n))}netSync(){this.net&&(this.net.seed=(this.state.seed??0)>>>0,this.netKind==="relay"&&this.netRole==="host"&&this.net.announceSeed())}netLeave(t="сеть выключена"){clearInterval(this._netPoll),this._netPoll=0,clearTimeout(this._netWait),this._netWait=0;try{this.net?.leave()}catch{}try{this.netTransport?.close()}catch{}this.net=null,this.netTransport=null,this.netKind=null,this.netAdopt=!1,this.netRtcWait=null,this.avatars.clear(),this.hud.netStatus(t,""),this.hud.netPeers([])}setupTouch(){const t=matchMedia("(pointer: coarse)").matches,e=this.settings.touch||t,n=this.hud.el.touch;n&&(n.classList.toggle("hidden",!e),e&&!this.touchApi&&(this.touchApi=$v(n,{input:this.input,api:{toggleFly:()=>this.toggleFly(),toggleInv:()=>this.toggleInventory(),place:()=>this.tryPlace(),onMineStart:()=>{this.input.mine=1},onMineEnd:()=>{this.input.mine=0},tap:()=>{this.tryPlace()}}})))}refreshWorlds(){const t=kv().map(e=>({seed:e.seed,edits:e.edits?.length??e.edits??0,saved:e.saved}));this.hud.renderWorlds(t,e=>this.start(e),e=>{confirm(`Удалить мир «${e}»? Это сотрёт все изменения.`)&&(Fv(e),this.refreshWorlds(),this.hud.toast("Мир удалён","warn"))})}startFromMenu(){const t=this.hud.el.seed.value.trim(),e=t===""?Math.random()*1e9|0:nc(t);this.applyMenuMode(),this.start(e)}applyMenuMode(){const t=this.menuMode==="creative";return this.settings.creative!==t&&(this.settings.creative=t,ei(this.settings)),t}bindModeSeg(){const t=document.getElementById("mode");if(!(!t||this._modeBound)){this._modeBound=!0;for(const e of t.children??[])e.onclick=()=>{this.menuMode=e.dataset?.v==="creative"?"creative":"survival",this.syncModeSeg(),this.audio.ui("click")};this.syncModeSeg()}}syncModeSeg(){this.menuMode=this.menuMode==="creative"?"creative":"survival",this.hud.seg(document.getElementById("mode"),this.menuMode);const t=document.getElementById("mode-hint");t&&(t.textContent=this.menuMode==="creative"?"Творчество: полёт (двойной Пробел), все блоки и предметы из палитры, вещи не тратятся.":"Выживание: всё добывается руками и тратится, урон работает, полёт выключен.")}async start(t){const e=(typeof t=="string"||typeof t=="number")&&!Number.isNaN(Number(t))?Number(t)>>>0:nc(String(t));Bv(e);const n=new Ta(e);ev()&&(n.modPass=Q_);const s=Nv(e);s?.edits&&n.loadEdits(s.edits),this.state.world=n,this.state.seed=e,this.state.time=s?.time??.28,this.player=new Lv(n);const r=s?.spawn??n.findSpawn();this.player.spawn(r[0],r[1],r[2]),this.state.worldSpawn=Array.isArray(s?.worldSpawn)?[s.worldSpawn[0],s.worldSpawn[1]]:[r[0],r[2]],s?.yaw!==void 0&&(this.player.yaw=s.yaw,this.player.pitch=s.pitch),s?.hp!==void 0&&(this.state.hp=s.hp),this.mobs.world=n,this.mobs.clear(),this.chunkView?.dispose(),this.chunkView=new $i(n,this.scene,this.materials,this.atlas),this.chunkView.setRenderDistance(this.settings.renderDistance),this.applyLighting(),this.setupInventory(s?s.creative:void 0,s?.inv??s?.hotbar),this.syncHotbar(),this.hud.setHealth(this.state.hp),this.state.running=!1,this.state.paused=!1,this.state.loading=!0,this.hud.show("loading"),await this.prepare(Math.min(this.settings.renderDistance,5)),this.state.loading=!1;const o=n.findOpenSpot(Math.floor(this.player.x),Math.floor(this.player.z));o?this.player.spawn(o[0],o[1],o[2]):this.settlePlayer(),this.inv.creative||this.hud.toast("Выживание: бей дерево ЛКМ, E — инвентарь и крафт",""),this.state.running=!0,this.state.hp=Math.max(1,this.state.hp),this.audio.resume(),this.audio.setVolumes(this.settings.sfx,this.settings.music),this.hud.show(null),this.hud.toast(`Мир ${e} готов · ${n.chunkCount} чанков`),this.net&&this.netSync(),this.lockPointer()}prepare(t){const e=this.state.world,n=Math.floor(this.player.x/it),s=Math.floor(this.player.z/it),r=[];for(let c=-t;c<=t;c++)for(let h=-t;h<=t;h++)r.push([n+h,s+c,h*h+c*c]);r.sort((c,h)=>c[2]-h[2]);const o=r.length,a=r.slice(),l=r.map(([c,h])=>[c,h]);return new Promise(c=>{const h=()=>{const d=performance.now();for(;a.length&&performance.now()-d<14;){const[f,g]=a.shift();e.ensureChunk(f,g)}this.hud.setLoading(.15+.5*(1-a.length/o),`генерация ландшафта: ${o-a.length}/${o} чанков`),a.length?requestAnimationFrame(h):requestAnimationFrame(u)},u=()=>{const d=performance.now();for(;l.length&&performance.now()-d<14;){const[f,g]=l.shift();for(const _ of[...e.dirtyLight]){const m=e.getChunk(...Ta.decode(_));m&&e.recomputeLight(m)}e.dirtyLight.clear(),this.chunkView.remesh(f,g),e.dirtyMesh.delete(this.chunkView.constructor.key(f,g))}this.hud.setLoading(.65+.35*(1-l.length/o),`построение мешей: ${o-l.length}/${o}`),l.length?requestAnimationFrame(u):c()};h()})}bindInput(){const t=this.canvas;addEventListener("keydown",e=>this.onKey(e,!0)),addEventListener("keyup",e=>this.onKey(e,!1)),addEventListener("blur",()=>{this.keys.clear(),this.input.mine=0}),t.addEventListener("mousedown",e=>{this.state.running&&(e.button===0&&(this.input.mine=1),e.button===2&&(this.input.place=1),e.button===1&&this.pickBlock(),this.state.dragging=!0,this.audio.resume())}),addEventListener("mouseup",e=>{e.button===0&&(this.input.mine=0,this.state.breakProgress=0,this.target.setBreakProgress(0)),e.button===2&&(this.input.place=0),this.state.dragging=!1}),t.addEventListener("contextmenu",e=>e.preventDefault()),addEventListener("wheel",e=>{!this.state.running||this.inventoryOpen||this.selectSlot((this.state.sel+(e.deltaY>0?1:-1)+9)%9)},{passive:!0}),addEventListener("mousemove",e=>{if(!this.state.running||this.state.paused||this.inventoryOpen)return;const n=document.pointerLockElement===t;if(!n&&!this.state.dragging)return;const s=.0022*this.settings.sensitivity*(n?1:1.25);this.input.lookX+=(e.movementX??0)*s,this.input.lookY-=(e.movementY??0)*s}),document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&this.state.running&&!this.state.paused&&!this.inventoryOpen&&this.pause()})}onKey(t,e){const n=t.code,s=t.target;if(!!s&&(s.tagName==="INPUT"||s.tagName==="TEXTAREA"||s.isContentEditable===!0)&&n!=="Escape"){e||this.keys.delete(n);return}if(t.repeat)return;const o=["Tab","F1","F3","Space","KeyE","Slash","Backquote"].includes(n);if(e&&o&&t.preventDefault(),e?this.keys.add(n):this.keys.delete(n),!e)return;const a=this.state;if(n==="Escape"){this.netPanelOpen?this.closeNet():this.inventoryOpen?this.closeInventory():a.running&&!a.paused?this.pause():a.paused&&this.resume();return}if(a.running){if(n==="KeyE"){this.toggleInventory();return}if(n==="F3"){this.settings.showDebug=!this.settings.showDebug,this.hud.hideDebug(!this.settings.showDebug),ei(this.settings);return}if(n==="F1"){a.hudHidden=!a.hudHidden,this.hud.hideHud(a.hudHidden);return}if(n==="KeyF"){this.fullscreen();return}if(n==="KeyM"){const l=this.audio.toggleMusic();this.hud.toast(l?"Музыка: вкл":"Музыка: выкл");return}if(n==="KeyN"){a.time=(a.time+.25)%1,this.hud.toast("Время перемотано");return}if(n==="KeyR"){this.unstick();return}if(n==="KeyQ"){this.inv.creative?this.inv.set("hot",this.inv.sel,In,0):this.inv.set("hot",this.inv.sel,this.inv.id("hot",this.inv.sel),Math.max(0,this.inv.n("hot",this.inv.sel)-1)),this.syncHotbar();return}if(n.startsWith("Digit")){const l=+n.slice(5);l>=1&&l<=9&&this.selectSlot(l-1);return}if(n==="Space"){const l=performance.now();this.lastSpace&&l-this.lastSpace<280&&this.toggleFly(),this.lastSpace=l}if(n==="KeyW"){const l=performance.now();this.lastW&&l-this.lastW<280&&this.keys.add("ControlLeft"),this.lastW=l}}}readKeys(){const t=this.keys,e=this.input,n=s=>t.has(s)?1:0;e.forward=n("KeyW")||n("ArrowUp")||e.tForward,e.back=n("KeyS")||n("ArrowDown")||e.tBack,e.left=n("KeyA")||n("ArrowLeft")||e.tLeft,e.right=n("KeyD")||n("ArrowRight")||e.tRight,e.jump=n("Space")||e.tJump,e.sneak=n("ShiftLeft")||n("ShiftRight")||e.tSneak,e.sprint=n("ControlLeft")||n("ControlRight")||e.tSprint,e.analog=e.tAnalog??1,e.autoJump=this.settings.autoJump}toggleFly(){if(!this.inv.creative){this.hud.toast("Полёт доступен в творчестве — режим выбирается при создании мира","warn"),this.audio.ui("deny");return}this.player.flying=!this.player.flying,this.player.flying?this.player.vy=0:this.player.fallDamage=0,this.hud.toast(this.player.flying?"Полёт: вкл":"Полёт: выкл"),this.audio.ui("click")}selectSlot(t){const e=((t|0)%9+9)%9;this.inv.sel=e,this.state.sel=e,this.hud.selectSlot(e),this.viewModel.setBlock(this.inv.hot[e]),this.hud.showBlockName(this.inv.hot[e],this.handInfo(this.inv.hot[e])+this.modTag(this.inv.hot[e])),this.state.breakProgress=0,this.target.setBreakProgress(0)}syncHotbar(){this.state.hotbar=this.inv.hot,this.state.counts=this.inv.hotN,this.state.sel=this.inv.sel,this.hud.buildHotbar(this.inv.hot,this.inv.sel,this.hud.onHotbarChange,this.inv.creative?null:this.inv.hotN),this.hud.selectSlot(this.inv.sel),this.viewModel.setBlock(this.inv.hot[this.inv.sel]),this.inventoryOpen&&this.refreshInventoryUI()}setCreative(t){if(this.inv.creative=!!t,this.state.creative=!!t,!t&&this.player&&(this.player.flying=!1,this.player.fallDamage=0),this.menuMode=t?"creative":"survival",this.syncModeSeg(),this.hud.setFlyAvailable(this.inv.creative),this.hud.setHealthVisible(!t),this.settings.creative=!!t,ei(this.settings),t){for(let e=0;e<9;e++)this.inv.hotN[e]=0;this.inv.hot.some(e=>e)||Ra.forEach((e,n)=>{this.inv.hot[n]=Lt(e)})}this.syncHotbar()}setupInventory(t,e){const n=typeof t=="boolean"?t:!!this.settings.creative;this.inv.creative=n,this.inv.hot.fill(0),this.inv.hotN.fill(0),this.inv.main.fill(0),this.inv.mainN.fill(0),e&&Array.isArray(e.hot)?this.inv.load(typeof e.hot=="object"&&!Array.isArray(e.hot)?e:{hot:e,hotN:[],main:[],mainN:[],creative:n}):n&&Ra.forEach((s,r)=>{this.inv.hot[r]=Lt(s)}),this.inv.sel=Math.max(0,Math.min(8,this.inv.sel)),this.state.creative=n,this.hud.setFlyAvailable(n),this.hud.setHealthVisible(!n)}pickup(t,e=1){if(!t)return;if(this.inv.add(t,e)>0){this.hud.toast("Инвентарь полон","warn");return}this.syncHotbar(),this.scheduleSave()}nearCraftingTable(){const t=this.state.world;if(!t)return!1;const e=this.player,n=Lt("crafting_table"),s=Math.floor(e.x)-4,r=Math.floor(e.x)+4,o=Math.floor(e.y)-2,a=Math.floor(e.y)+3,l=Math.floor(e.z)-4,c=Math.floor(e.z)+4;for(let h=o;h<=a;h++)for(let u=l;u<=c;u++)for(let d=s;d<=r;d++)if(t.getBlock(d,h,u)===n)return!0;return!1}refreshInventoryUI(){const t=this.nearCraftingTable(),e=this.inv.snapshot(),n=Wa.map(s=>({name:s.name,outId:s.outId,n:s.n,table:s.table,ok:oc(s,this.inv,t),need:s.need.map(r=>({id:r.id,n:r.n,have:Math.min(this.inv.count(r.id),999)}))}));this.hud.renderInventory({snap:e,recipes:n,nearTable:t,creative:this.inv.creative,icon:(s,r)=>this.atlas.icon(s,r),names:s=>dt[s]?.name??"—",onSlot:(s,r)=>this.inventorySlotClick(s,r),onPick:s=>this.inventoryPick(s),onCraft:s=>this.doCraft(s),onClose:()=>this.closeInventory(),onCreative:()=>{this.setCreative(!this.inv.creative),this.hud.toast(this.inv.creative?"Творчество: все блоки в палитре, вещи не тратятся":"Творчество выключено: блоки снова расходятся, включить — в Настройках","")}})}inventorySlotClick(t,e){const n=this.inv;if(n.cursor){const s=n.id(t,e);if(s===n.cursor){const r=n.creative?Ss:Ss-n.n(t,e),o=Math.min(r,n.cursorN);n.set(t,e,s,n.creative?0:n.n(t,e)+o),n.creative||(n.cursorN-=o),(n.cursorN<=0||n.creative)&&(n.cursor=0,n.cursorN=0)}else{const r=s,o=n.n(t,e);n.set(t,e,n.cursor,n.creative?0:n.cursorN),n.cursor=r,n.cursorN=n.creative?1:o,n.creative&&(n.cursor=0,n.cursorN=0)}}else{const s=n.id(t,e);if(!s)return;if(n.creative){this.inventoryPick(s);return}n.cursor=s,n.cursorN=n.n(t,e),n.set(t,e,0,0)}this.syncHotbar(),this.audio.ui("click")}inventoryPick(t){const e=this.invTarget??this.inv.sel;this.inv.set("hot",e,t,this.inv.creative?0:Ss),this.invTarget=e,this.syncHotbar(),this.hud.showBlockName(t),this.audio.ui("click"),this.scheduleSave()}doCraft(t){const e=Wa[t];if(!e)return;const n=this.nearCraftingTable();if(!oc(e,this.inv,n)){this.audio.deny(),this.hud.toast(e.table&&!n?"Нужен верстак рядом (поставь и подойди)":"Не хватает материалов","warn");return}f_(e,this.inv)&&(this.audio.place("wood"),this.hud.toast(`Скрафчено: ${dt[e.outId].name}`,""),this.syncHotbar(),this.scheduleSave())}toggleInventory(){if(this.inventoryOpen){this.closeInventory();return}this.inventoryOpen=!0,this.invTarget=this.inv.sel,this.hud.show("inventory"),this.hud.el.hud.dataset.keep="1",this.hud.el.hud.classList.remove("hidden"),this.keys.clear(),this.input.mine=0,this.input.place=0,document.exitPointerLock?.(),this.audio.openInv(),this.refreshInventoryUI()}closeInventory(){if(!this.inventoryOpen)return;this.inventoryOpen=!1;const t=this.inv;t.cursor&&(t.creative||t.add(t.cursor,t.cursorN),t.cursor=0,t.cursorN=0),this.invTarget=null,this.hud.el.hud.dataset.keep="0",this.hud.show(null),this.syncHotbar(),this.lockPointer(),this.audio.ui("click")}pause(){this.input.mine=0,this.input.place=0,this.keys.clear(),!(!this.state.running||this.state.paused)&&(this.state.paused=!0,document.exitPointerLock?.(),this.hud.el.pauseStats.textContent=this.statsLine(),this.hud.show("pause"),this.save())}resume(){this.state.paused=!1,this.inventoryOpen=!1,this.netPanelOpen=!1,this.hud.show(null),this.lockPointer(),this.audio.resume()}toMenu(){if(this.input.mine=0,this.input.place=0,this.keys.clear(),this.menuMode=this.inv?.creative?"creative":"survival",this.syncModeSeg(),this.netPanelOpen=!1,this.net&&this.netLeave("вы вышли из мира — комната покинута"),this.mobs.clear(),this.state.running=!1,this.state.paused=!1,this.inventoryOpen=!1,document.exitPointerLock?.(),this.chunkView)for(const[t,e]of this.chunkView.objects)this.chunkView.disposeObject(e),this.chunkView.objects.delete(t);if(this.state.world){for(const t of[...this.state.world.chunks.keys()]){const[e,n]=Ta.decode(t);this.state.world.removeChunk(e,n)}this.state.world.chunks.clear()}this.refreshWorlds(),this.hud.show("menu")}lockPointer(){if(!this.settings.touch&&!(matchMedia("(hover: none)").matches&&!this.settings.touch)&&document.pointerLockElement!==this.canvas)try{const t=this.canvas.requestPointerLock?.();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}settlePlayer(){const t=this.player;if(!t||!this.state.world||!t.collides(t.x,t.y,t.z))return!1;const e=Math.floor(t.x),n=Math.floor(t.z);for(let r=Math.floor(t.y);r<Jt;r++)if(!t.collides(e+.5,r+.02,n+.5))return t.x=e+.5,t.y=r+.02,t.z=n+.5,t.vy=0,this.hud.toast("Подняты над блоками","warn"),!0;const s=this.state.world.findSpawn();return t.spawn(s[0],s[1],s[2]),!0}unstick(){const t=this.state.world,e=Math.floor(this.player.x),n=Math.floor(this.player.z);for(let r=Jt-2;r>0;r--)if(t.isOpaque(e,r,n)){this.player.x=e+.5,this.player.z=n+.5,this.player.y=r+1.05,this.player.vy=0,this.hud.toast("Вы вынесены на поверхность");return}const s=t.findSpawn();this.player.spawn(s[0],s[1],s[2]),this.hud.toast("Спавн сброшен")}pickBlock(){const t=this.state.lastHit;if(!t)return;const e=t.id;this.inv.set("hot",this.inv.sel,e,this.inv.creative?0:Math.max(1,this.inv.n("hot",this.inv.sel))),this.hud.buildHotbar(this.state.hotbar,this.state.sel,this.hud.onHotbarChange),this.hud.selectSlot(this.state.sel),this.viewModel.setBlock(e),this.hud.showBlockName(e,this.modTag(e)),this.audio.ui("click")}dropFor(t){return Zg(t.id,t.x,t.y,t.z)||Kg(t.id)}eat(t){const e=this.state;if(this.inv.creative)return this.hud.toast("В творчестве есть не нужно — здоровье и так полное",""),!1;if(e.hp>=20)return this.hud.toast("Ты сыт: здоровье полное",""),!1;e.placeCd=.9;const n=this.inv.hot[this.inv.sel];return this.inv.set("hot",this.inv.sel,n,Math.max(0,this.inv.n("hot",this.inv.sel)-1)),this.syncHotbar(),e.hp=Math.min(20,e.hp+(t.food|0)),this.hud.setHealth(e.hp),this.audio.step("grass"),this.hud.toast(`Съедено ${t.name.toLowerCase()} · +${(t.food/2).toFixed(t.food%2?"1":"0")} сердца`,""),this.scheduleSave(),!0}handInfo(t){const e=dt[t];if(!e?.info)return"";if(e.info==="time"){const c=((this.state.time??.25)+.25)%1,h=Math.floor(c*24*60),u=String(Math.floor(h/60)).padStart(2,"0"),d=String(h%60).padStart(2,"0");return` · ${u}:${d} по миру`}const n=this.state.worldSpawn;if(!n)return"";const s=n[0]-this.player.x,r=n[1]-this.player.z,o=Math.hypot(s,r);if(o<1.5)return" · ты на спавне";const a=(Math.atan2(s,-r)*180/Math.PI+360)%360,l=["С","СВ","В","ЮВ","Ю","ЮЗ","З","СЗ"][Math.round(a/45)%8];return` · спавн ${o.toFixed(0)} бл, ${l} (${a.toFixed(0)}°)`}tryPlace(){const t=this.state.lastHit,e=this.state,n=dt[this.inv.hot[this.inv.sel]];if(n?.food){this.eat(n);return}if(!t)return;const s=this.inv.hot[this.inv.sel];if(!s){this.audio.deny(),this.hud.toast("Пустой слот — E открывает инвентарь","warn");return}if(jg(s)){this.audio.deny(),this.hud.toast(`${dt[s].name} — предмет, его не поставить`,"warn");return}if(!this.inv.creative&&this.inv.hotN[this.inv.sel]<=0){this.audio.deny(),this.hud.toast("Блоки кончились","warn");return}const r=e.world;let o=t.x+t.nx,a=t.y+t.ny,l=t.z+t.nz;const c=r.getBlock(t.x,t.y,t.z);if((dt[c]?.replaceable||dt[c]?.liquid)&&(o=t.x,a=t.y,l=t.z),a<0||a>=Jt)return;const u=r.getBlock(o,a,l);if(u!==0&&!dt[u].replaceable&&!dt[u].liquid)return;if(dt[s].solid&&this.player.intersectsBlock(o,a,l)){this.audio.deny(),this.hud.toast("Здесь стоит игрок","warn");return}if(!r.setBlock(o,a,l,s))return;this.netBroadcast(o,a,l,s),this.inv.creative||(this.inv.consumeSelected(1),this.syncHotbar()),this.audio.place(dt[s].sound),this.viewModel.triggerSwing();const d=this.blockTint.get(s)??[.8,.8,.8];this.particles.burst(o+.5,a+.2,l+.5,4,d,{speed:1.2,life:.35,spread:.5}),this.scheduleSave()}mineTick(t){const e=this.state,n=e.world,s=e.lastHit;if(e.mobTarget){e.breakProgress>0&&(e.breakProgress=0,this.target.setBreakProgress(0));return}if(!this.input.mine||!s){e.breakProgress>0&&(e.breakProgress=0,this.target.setBreakProgress(0)),this.hud.setMining(!1);return}const r=Va(s.x,s.y,s.z);e.breakTarget!==r&&(e.breakTarget=r,e.breakProgress=0);const o=dt[s.id];if(!o.breakable){e.breakTarget!==r&&(e.breakTarget=r,this.audio.deny(),this.hud.toast(`${o.name}: можно только обставить со всех сторон`,"warn")),e.breakProgress=0,this.target.setBreakProgress(0);return}const a=this.inv.hot[this.inv.sel],l=Math.max(.08,o.hardness/Math.max(.34,Jg(o,a))),c=this.player.flying?2.6:1;if(e.breakProgress+=t/l*c,this.hud.setMining(!0),performance.now()-(this.lastHitSound??0)>210){this.lastHitSound=performance.now(),this.audio.hit(o.sound,.8);const h=this.blockTint.get(s.id)??[.7,.7,.7];this.particles.burst(s.x+.5+s.nx*.5,s.y+.5+s.ny*.5,s.z+.5+s.nz*.5,3,h,{speed:1.6,life:.3,spread:.35,gravity:16})}if(this.target.setBreakProgress(Math.min(.999,e.breakProgress)),e.breakProgress>=1){if(e.breakProgress=0,e.breakTarget=null,this.target.setBreakProgress(0),this.hud.setMining(!1),n.setBlock(s.x,s.y,s.z,In),this.netBroadcast(s.x,s.y,s.z,In),!this.inv.creative){const u=this.dropFor(s);u&&this.pickup(u,1)}this.audio.breakBlock(o.sound);const h=this.blockTint.get(s.id)??[.7,.7,.7];this.particles.burst(s.x+.5,s.y+.5,s.z+.5,14,h,{speed:3.4,life:.8,spread:.8}),this.viewModel.triggerSwing(),this.scheduleSave()}}scheduleSave(){this.state.saveT=2.5}save(t=!1){if(!this.state.world)return;const e=this.state.world,n={seed:this.state.seed,saved:Date.now(),spawn:[this.player.x,this.player.y,this.player.z],worldSpawn:this.state.worldSpawn??null,yaw:this.player.yaw,pitch:this.player.pitch,time:this.state.time,hotbar:this.inv.hot.slice(),inv:this.inv.serialize(),creative:this.inv.creative,hp:this.state.hp,edits:e.serializeEdits()};Uv(this.state.seed,n)&&this.hud.toast(`Сохранено · правок: ${e.editedCount}`,"")}statsLine(){const t=this.state.world;return t?`чанков в памяти: ${t.chunkCount} · правок: ${t.editedCount} · меши: ${this.chunkView?.chunkMeshCount??0}`:""}applyPixelRatio(){const t=Math.max(.5,Math.min(1,this.settings?.renderScale??1));this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,2)*t)}applyLighting(t=this.settings){const e=(this._shaderTier??0)>0,n=(t.shaders|0)>=3&&!e,s=(t.shaders|0)>=2&&(t.shadows|0)>0&&!e,r=(t.shadows|0)>=2?96:64;this.renderer.shadowMap&&(this.renderer.shadowMap.enabled=s),this.sunShadow?.setEnabled(s,r),this.materials.setShadow(s?n?.92:.8:0),this.sunShadow?.setSoftness(n?2:1),this.chunkView?.setShadows(s,s?this.shadowDepthMaterial():null),this._shadowBase=s?n?.92:.8:0,this.materials.uniforms.uShadow.value=0;const o=n&&(t.waterRefl|0)>=2;if(o&&!this.probe){try{this.probe=new yx(this.renderer,this.scene,{size:128,far:200,every:12})}catch{this.probe=null}this.probe&&!this.probe.ok&&(this.probe=null)}return this.probe?(this.probe.setEnabled(o),this.materials.setReflection(o?this.probe.texture:null,o?.85:0)):this.materials.setReflection(null,0),this._reflOn=o&&!!this.probe,{shadowOn:s,ultra:n,refl:!!o}}shadowDepthMaterial(){return this._depthMat||(this._depthMat=new gh({depthPacking:Yc,map:this.atlas.texture,alphaTest:.5,side:Un})),this._depthMat}initPost(){if(this.post){this.post.setEnabled(this.settings.shaders>=3);return}try{const t=new vx(this.renderer,this.scene,this.camera,wa());if(!t.ok){this.post=null,this.hud.toast("Постобработка недоступна на этом железе — играем без теней и отражений","warn");return}t.setEnabled(this.settings.shaders>=3),t.setSize(),this.post=t}catch{this.post=null}}applyModShaders(){const t=gr();if(t.blockIds.length||t.tiles.length)return this.hud.toast("Мод меняет блоки или текстуры — нужна перезагрузка страницы (F5)","warn"),!1;const e=Ea(this.atlas,wa(),{derivatives:this._canDeriv!==!1});this.materials.solid.dispose(),this.materials.water.dispose(),this.materials=e;const n=this.chunkView?.setMaterials?.(e)??0;return this.watchVoxelProgram(),this.post&&(this.post.dispose?.(),this.post=null),this.initPost(),this.hud.toast(`Шейдеры модов применены: ${n} мешей, ${t.shaderNames.length?t.shaderNames.join(", "):"без мода"}`,"ok"),!0}watchVoxelProgram(){if(this._progHook)return;this._progHook=!0;const t=console.error;console.error=(...e)=>{if(t.apply(console,e),this._progFixed)return;const n=e.map(s=>String(s?.message??s??"")).join(" ");/THREE\.WebGLProgram|Shader Error|Program Info Log/i.test(n)&&(this._progFixed=!0,this.revertModShaders())}}revertModShaders(){if(this._reverted||!this.atlas)return!1;this._reverted=!0;const t=gr().shaderNames||[];let e;try{e=Ea(this.atlas,{}),this.materials.solid.dispose(),this.materials.water.dispose()}catch{return!1}this.materials=e,e.setQuality?.(this.settings.shaders|0),this.chunkView?.setMaterials?.(e),this.applyLighting();const n=`Шейдеры модов${t.length?` «${t.join("», «")}»`:""} не скомпилировались — включены базовые. Починь код в Настройки → Моды`;return this.hud?.toast(n,"warn"),console.warn("LiteCraft:",n),!0}installShaderLadder(){const t=this.renderer?.debug;!t||t.onShaderError||(t.onShaderError=(e,n,s,r)=>{let o="",a=!0;try{o=[e.getShaderInfoLog(s),e.getShaderInfoLog(r)].filter(Boolean).join(" / ").trim();const l=e.getShaderSource(r)||"";l&&(a=/uAlphaTest|vTint|tileIndex/.test(l))}catch{}this._shaderLog=o.slice(0,320),a?this.degradeVoxelShader():console.warn("LiteCraft: программа не собралась (не материал мира):",o.slice(0,200))})}degradeVoxelShader(){const t=(this._shaderTier??0)+1;if(t>2||!this.atlas)return!1;let e=null;try{e=t===1?h_(this.atlas,this.materials?.uniforms):u_(this.atlas,this.materials?.uniforms)}catch(s){return console.warn("LiteCraft: запасной материал не собрался:",s?.message??s),!1}if(!e||!e.solid)return!1;this._shaderTier=t;try{this.materials.solid.dispose(),this.materials.water.dispose()}catch{}this.materials=e,this._reverted=!0,this._progHook=!0,e.setQuality?.(0);try{this.renderer?.shadowMap&&(this.renderer.shadowMap.enabled=!1),this.sunShadow?.setEnabled(!1),this.probe?.setEnabled?.(!1)}catch{}this._reflOn=!1,this.chunkView?.setShadows?.(!1,null),this.chunkView?.setMaterials?.(e);const n=t===1?"Видеокарта не собрала шейдер мира — включён лёгкий материал (без теней и отражений). Мир виден.":"Даже лёгкий шейдер не собрался — плоский режим: мир виден, но без света. Причина в F3.";return this.hud?.toast(n,"warn"),console.warn("LiteCraft:",n,this._shaderLog||""),!0}registerMod(t,e=String(t?.id||"console")){const n=V_(Xh(e),t,"консоль");return this.hud.toast(n.ok?`Мод «${n.name}» применён${n.applied?.blocks?.length?" — для блоков нужна перезагрузка":""}`:`Мод не принят: ${n.error}`,n.ok?"ok":"warn"),n.ok&&!n.applied?.blocks?.length&&!n.applied?.tiles?.length&&this.applyModShaders(),n}modTag(t){const e=dt[t]?.key,n=e?sv(e):null;return n?` · мод ${n}`:""}resize(){const t=innerWidth,e=innerHeight;this.renderer.setSize(t,e,!1),this.applyPixelRatio(),this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix(),this.post?.setSize()}frame(t){requestAnimationFrame(a=>this.frame(a));const e=this.settings.fpsLimit|0;if(e>0){if(this._nextDraw===void 0&&(this._nextDraw=0),t<this._nextDraw)return;this._nextDraw=t+1e3/Math.max(1,e)-1.2}else this._nextDraw=0;const n=(t-(this.lastFrame??t))/1e3,s=Number.isFinite(n)?Math.max(0,Math.min(.1,n)):1/60;this.lastFrame=t,this.state.fps=this.state.fps*.9+1/Math.max(5e-4,s)*.1;const r=performance.now(),o=this.inventoryOpen||this.netPanelOpen;this.state.running&&!this.state.paused&&!o&&!this.state.loading?this.step(s):this.state.world&&this.sky.update(this.state.time,this.settings.clouds,this.camera.position,this.materials.uniforms),this.net&&this.netFrame(s),this.probe?.enabled&&this.camera?this.probe.update(this.camera.position,this.chunkView?.chunkMeshCount??0,this.chunkView?.waterMeshes??[]):this.probe&&this._reflOn&&(this._reflOn=!1,this.materials.setReflection(null,0)),this.post?.active?this.post.render(s,{under:!!this.player?.headInWater,dusk:this.sky?.dusk??0,night:1-(this.sky?.day??1),vignette:this.settings.shaders>=2&&!this.inventoryOpen}):this.renderer.render(this.scene,this.camera),this.state.ms=this.state.ms*.9+(performance.now()-r)*.1}step(t){const e=this.state,n=e.world,s=this.input;this.readKeys(),this.player.yaw-=s.lookX,this.player.pitch=Math.max(-1.5533,Math.min(1.5533,this.player.pitch+s.lookY)),s.lookX=0,s.lookY=0,e.acc=Math.min(e.acc+t,.2);let r=0,o={stepped:!1,splash:!1};for(;e.acc>=Ca&&r<5;){e.acc-=Ca,r++;const v=this.player.update(Ca,s);o.stepped=o.stepped||v.stepped,o.splash=o.splash||v.splash}if(o.stepped&&!this.player.flying){const v=n.getBlock(Math.floor(this.player.x),Math.floor(this.player.y-.2),Math.floor(this.player.z));this.audio.step(dt[v]?.sound??"dirt")}if(o.splash&&this.audio.splash(),this.player.fallDamage>.05){const v=Math.floor(this.player.fallDamage);this.player.fallDamage=0,v>0&&!this.player.flying&&(e.hp=Math.max(0,e.hp-v),this.hud.setHealth(e.hp),this.hud.hurt(),this.audio.land(1.6),e.hp<=0&&this.respawn())}this.player.justLanded&&(this.audio.land(this.player.justLanded),this.player.justLanded=0),e.regenT+=t,e.regenT>6&&e.hp<20&&(e.regenT=0,e.hp=Math.min(20,e.hp+1),this.hud.setHealth(e.hp));const a=this.camera,l=this.settings.viewBob?1:0,c=Math.sin(this.player.bob)*.045*l*Math.min(1,Math.hypot(this.player.vx,this.player.vz)/4);a.position.set(this.player.x,this.player.eyeY+c,this.player.z),a.rotation.set(this.player.pitch,this.player.yaw,Math.sin(this.player.bob*.5)*.006*l);const h=this.settings.fov+(this.player.sprinting?5:0)+(this.player.inWater?-6:0)+(this.player.flying?3:0);a.fov+=(h-a.fov)*Math.min(1,t*8),a.updateProjectionMatrix();const u=this.player.forward({}),d={x:a.position.x,y:a.position.y,z:a.position.z};e.lastHit=Pv(n,d.x,d.y,d.z,u.x,u.y,u.z,6.2),this.target.show(e.lastHit&&this.chunkView.hasMesh(e.lastHit.x>>4,e.lastHit.z>>4)?e.lastHit:null),e.lastHit||this.target.setBreakProgress(0),this.attackTick(t),this.mineTick(t),e.placeCd-=t,s.place&&e.placeCd<=0&&(this.tryPlace(),e.placeCd=.2),this.chunkView.update(this.player),this.particles.update(t),this.viewModel.update(t,{moving:Math.min(1,Math.hypot(this.player.vx,this.player.vz)/5),breaking:this.input.mine&&e.lastHit?1:0,breakProgress:e.breakProgress,fov:a.fov,aspect:a.aspect}),this.settings.freeTime||(e.time=(e.time+t/(this.settings.dayLength*60))%1);const f=this.sky.update(e.time,this.settings.clouds,a.position,this.materials.uniforms);this.viewModel.dayLight=f.day,this.target.setDayLight(f.day);const g=this.mobs;g.day=f.day,g.cap=this.settings.mobs|0,g.enabled=g.cap>0&&!e.paused,g.enabled?g.update(t,this.player):g.count&&g.clear();const _=this.materials.uniforms;_.uTime.value+=t,this.sunShadow?.enabled?(this.sunShadow.update(a.position,this.sky.uniforms.uSunDir.value,f.day,this.chunkView?.chunkMeshCount??0)&&(this._shadowFrames=(this._shadowFrames??0)+1),_.uShadow.value=(this._shadowBase??.9)*Math.max(0,Math.min(1,f.day*1.5-.05))):_.uShadow.value!==0&&(_.uShadow.value=0),_.uDay.value=f.day,_.uDusk.value=f.dusk??0,_.uNight.value=1-f.day;const m=this.settings.renderDistance*it,p=this.player.headInWater;if(p?(_.uFogDensity.value=.16,_.uFogStart.value=.5,_.uFogEnd.value=15):(_.uFogDensity.value=7e-4,_.uFogStart.value=m*.55,_.uFogEnd.value=m*1.02),p&&_.uFogColor.value.setRGB(.09*(.35+f.day),.26*(.35+f.day),.42*(.35+f.day)),this.renderer.setClearColor(f.fogColor,1),this.hud.setWater(!!p&&!this.post?.active),this.camera.near=p?.05:.08,this.camera.updateProjectionMatrix(),this.villageT=(this.villageT??1)-t,this.villageT<=0){this.villageT=1.2;const v=this.player,b=!!v&&zh(this.state.world,v.x,v.z);b!==this.inVillage&&(this.inVillage=b,b&&this.hud.toast("Деревня: здесь светло, враги не спавнятся. Жители носят изумруды",""))}const x=this.chunkView?.streamDebug?.();x&&(x.genErr||x.meshErr)&&this._streamWarned!==x.msg&&(this._streamWarned=x.msg||"сбой",console.error("стриминг мира:",x),this.hud.toast(`Мир не достраивается: ген ${x.genErr}, меш ${x.meshErr}${x.msg?` · ${x.msg}`:""} — попробуй перезагрузку (Ctrl+Shift+R)`,"warn")),e.saveT>0&&(e.saveT-=t,e.saveT<=0&&this.debouncedSave()),this.dbgT=(this.dbgT??0)-t,this.dbgT<=0&&(this.dbgT=.25,this.updateDebug(f)),e.hp<=0&&this.respawn()}attackTick(t){this.attackCd-=t;const e=this.state,n=this.camera,s=this.player.forward({}),r=this.mobs.pick(n.position.x,n.position.y,n.position.z,s.x,s.y,s.z,4.4);if(e.mobTarget=r,r&&this.target.show(null),!r||!this.input.mine||this.attackCd>0||e.paused||this.inventoryOpen)return;this.attackCd=.42;const o=Qg(this.inv.hot[this.inv.sel]);this.mobs.hurt(r,o,this.player.x,this.player.z,r.def.hostile?4.2:6.4),this.viewModel.triggerSwing()}hitByMob(t,e){const n=this.state;if(this.inv.creative||n.hp<=0||!n.running||n.paused)return;n.hp=Math.max(0,n.hp-t),this.hud.setHealth(n.hp),this.hud.hurt(),this.audio.land(1.3);const s=this.player.x-e.x,r=this.player.z-e.z,o=Math.hypot(s,r)||1;this.player.vx+=s/o*4.4,this.player.vz+=r/o*4.4,this.player.vy=Math.max(this.player.vy,4.6),n.hp<=0&&this.respawn()}respawn(){const t=this.state.world.findSpawn();this.player.spawn(t[0],t[1]+.2,t[2]),this.state.hp=20,this.hud.setHealth(20),this.hud.toast("Вы разбились. Воскрешение на спавне…","err")}updateDebug(t){if(!this.settings.showDebug)return;const e=this.player,n=this.state.world,s=Math.floor(e.x/it),r=Math.floor(e.z/it),o=b_[n.terrain.biomeAt(Math.floor(e.x),Math.floor(e.z))];`${String(Math.floor((e.yaw*180/Math.PI%360+360)%360/360*24)).padStart(2,"0")}`;const a=Math.floor((this.state.time*24+6)%24),l=Math.floor((this.state.time*24+6)%24%1*60),c=this.chunkView;this.hud.setDebug([`LiteCraft · ${this.state.fps.toFixed(0)} FPS${this.settings.fpsLimit>0?` (лимит ${this.settings.fpsLimit})`:" (лимит выключен)"} · ${this.state.ms.toFixed(1)} мс · шейдеры: ${["базовые","мягкие","красивые","ультра"][Math.max(0,Math.min(3,this.settings.shaders|0))]}${this.post?.active?" · грейд":""}${tv()?` · шейдеров мода: ${(gr().shaderNames||[]).length}`:""}${this._reverted?" · шейдеры мода выключены: не собрались":""} · рендер: ${["полный","лёгкий","базовый"][this._shaderTier??0]}${this._shaderLog?` — ${this._shaderLog.slice(0,120)}`:""}`,`XYZ ${e.x.toFixed(2)} / ${e.y.toFixed(2)} / ${e.z.toFixed(2)}  чанк ${s},${r}  блок ${Math.floor(e.x)},${Math.floor(e.y)},${Math.floor(e.z)}`,`биом: ${o}  ·  время ${String(a).padStart(2,"0")}:${String(l).padStart(2,"0")}  ·  свет ${t.day*15|0}/15`,`чанков: ${n.chunkCount} (мешей ${c?.chunkMeshCount??0}, в очереди ${c?.stats.pending??0}) · правок: ${n.editedCount} · стриминг ${c?.stats.ms?.toFixed(1)??0} мс/кадр (${c?.stats.frameMs?.toFixed(1)??"—"} мс кадр)${(()=>{const h=c?.streamDebug?.();return h&&(h.genErr||h.meshErr||h.light>64)?` · сбой: ген ${h.genErr}, меш ${h.meshErr}, свет ${h.light}`:""})()}${this.inVillage?" · деревня":""}`,`сеть: ${this.net?`${this.netKind==="p2p"?"напрямую":"через реле"}, игроков ${this.net.peers.size+1}/${no}, правок ${this.net.edits}`:"одиночная игра"} · режим: ${e.flying?"полёт":e.sprinting?"бег":"ходок"} · HP ${this.state.hp/2} · ${this.inv.creative?"творчество":"выживание"} · сид ${this.state.seed}`,`${(()=>{const h=this.handInfo(this.inv.hot[this.inv.sel]);return h?`в руке: ${dt[this.inv.hot[this.inv.sel]]?.name}${h}`:""})()}`,`мобов вокруг: ${this.mobs.count} (видно ${this.mobs.nearCount(e,48)}) · убито: ${this.mobs.kills} · в руке: ${dt[this.inv.hot[this.inv.sel]]?.name??"—"} ×${this.inv.creative?"∞":this.inv.hotN[this.inv.sel]}`,`${e.headInWater?"под водой":e.inWater?"в воде":"на суше"}${e.onGround?" · на земле":""} · E — инвентарь, F3 — вкл/выкл панели`].join(`
`))}}Or.supportsDerivatives=function(t){try{if(t?.capabilities?.isWebGL2)return!0;const e=t?.getContext?.();return!e||typeof e.getExtension!="function"?!0:!!e.getExtension("OES_standard_derivatives")}catch{return!0}};function Mx(i={}){const t=new Or(i);return window.game=t,t.mods={snapshot:()=>gr(),blockIds:()=>iv(),setUniform:(e,n)=>{const s=rv(String(e),Number(n),t.materials);return t.post?.setUniform?.(String(e),Number(n)),s},applyShaders:()=>t.applyModShaders(),register:e=>t.registerMod(e)},window.addEventListener("beforeunload",()=>{t.state?.world&&t.state.running&&t.save()}),t}if(typeof window<"u"&&!window.__LITECRAFT_TEST__&&document.getElementById("gl"))try{Mx()}catch(i){throw bx(i),i}function bx(i){const t=document.createElement("pre");t.style.cssText="position:fixed;inset:auto 12px 12px 12px;max-height:45vh;overflow:auto;background:#2b0e0e;color:#ffd9d3;padding:14px;font:12px/1.5 ui-monospace,monospace;border:1px solid #612;border-radius:4px;z-index:9999;white-space:pre-wrap",t.textContent=`Ошибка запуска LiteCraft:

`+(i?.stack??String(i)),document.body.appendChild(t)}
