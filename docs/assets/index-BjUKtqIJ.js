var Ao=i=>{throw TypeError(i)};var uu=(i,t,e)=>t.has(i)||Ao("Cannot "+e);var qr=(i,t,e)=>t.has(i)?Ao("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e);var Ke=(i,t,e)=>(uu(i,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oo="160",du=0,Ro=1,fu=2,zc=1,Hc=2,Cn=3,kn=0,We=1,$e=2,Dn=0,ji=1,Co=2,Lo=3,Po=4,pu=5,ai=100,mu=101,gu=102,Do=103,Io=104,_u=200,vu=201,xu=202,yu=203,Ia=204,Ua=205,Mu=206,bu=207,Su=208,Eu=209,wu=210,Tu=211,Au=212,Ru=213,Cu=214,Lu=0,Pu=1,Du=2,xr=3,Iu=4,Uu=5,Nu=6,ku=7,Gc=0,Fu=1,Ou=2,jn=0,Bu=1,zu=2,Hu=3,Gu=4,Vu=5,Wu=6,Vc=300,Qi=301,ts=302,Na=303,ka=304,Nr=306,yr=1e3,sn=1001,Fa=1002,pe=1003,Uo=1004,$r=1005,He=1006,Xu=1007,di=1008,Mn=1009,qu=1010,$u=1011,lo=1012,Wc=1013,$n=1014,Yn=1015,es=1016,Xc=1017,qc=1018,ci=1020,Yu=1021,Ve=1023,ju=1024,Ku=1025,hi=1026,ns=1027,Zu=1028,$c=1029,Ju=1030,Yc=1031,jc=1033,Yr=33776,jr=33777,Kr=33778,Zr=33779,No=35840,ko=35841,Fo=35842,Oo=35843,Kc=36196,Bo=37492,zo=37496,Ho=37808,Go=37809,Vo=37810,Wo=37811,Xo=37812,qo=37813,$o=37814,Yo=37815,jo=37816,Ko=37817,Zo=37818,Jo=37819,Qo=37820,tl=37821,Jr=36492,el=36494,nl=36495,Qu=36283,il=36284,sl=36285,rl=36286,Zc=3e3,ui=3001,td=3200,Jc=3201,ed=0,nd=1,Ue="",Te="srgb",bn="srgb-linear",co="display-p3",kr="display-p3-linear",Mr="linear",he="srgb",br="rec709",Sr="p3",mi=7680,al=519,id=512,sd=513,rd=514,Qc=515,ad=516,od=517,ld=518,cd=519,Oa=35044,ol=35048,ll="300 es",Ba=1035,Pn=2e3,Er=2001;class ss{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cl=1234567;const Ki=Math.PI/180,ws=180/Math.PI;function In(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Ge(i,t,e){return Math.max(t,Math.min(e,i))}function ho(i,t){return(i%t+t)%t}function hd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ud(i,t,e){return i!==t?(e-i)/(t-i):0}function bs(i,t,e){return(1-e)*i+e*t}function dd(i,t,e,n){return bs(i,t,1-Math.exp(-e*n))}function fd(i,t=1){return t-Math.abs(ho(i,t*2)-t)}function pd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function md(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function gd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function _d(i,t){return i+Math.random()*(t-i)}function vd(i){return i*(.5-Math.random())}function xd(i){i!==void 0&&(cl=i);let t=cl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yd(i){return i*Ki}function Md(i){return i*ws}function za(i){return(i&i-1)===0&&i!==0}function bd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ps={DEG2RAD:Ki,RAD2DEG:ws,generateUUID:In,clamp:Ge,euclideanModulo:ho,mapLinear:hd,inverseLerp:ud,lerp:bs,damp:dd,pingpong:fd,smoothstep:pd,smootherstep:md,randInt:gd,randFloat:_d,randFloatSpread:vd,seededRandom:xd,degToRad:yd,radToDeg:Md,isPowerOfTwo:za,ceilPowerOfTwo:bd,floorPowerOfTwo:wr,setQuaternionFromProperEuler:Sd,normalize:ae,denormalize:_n};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,s,r,o,a,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],x=s[1],v=s[4],b=s[7],R=s[2],w=s[5],S=s[8];return r[0]=o*_+a*x+l*R,r[3]=o*m+a*v+l*w,r[6]=o*f+a*b+l*S,r[1]=c*_+h*x+u*R,r[4]=c*m+h*v+u*w,r[7]=c*f+h*b+u*S,r[2]=d*_+p*x+g*R,r[5]=d*m+p*v+g*w,r[8]=d*f+p*b+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qr.makeScale(t,e)),this}rotate(t){return this.premultiply(Qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qr=new Zt;function th(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ed(){const i=Tr("canvas");return i.style.display="block",i}const hl={};function Ss(i){i in hl||(hl[i]=!0,console.warn(i))}const ul=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dl=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ds={[bn]:{transfer:Mr,primaries:br,toReference:i=>i,fromReference:i=>i},[Te]:{transfer:he,primaries:br,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[kr]:{transfer:Mr,primaries:Sr,toReference:i=>i.applyMatrix3(dl),fromReference:i=>i.applyMatrix3(ul)},[co]:{transfer:he,primaries:Sr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(dl),fromReference:i=>i.applyMatrix3(ul).convertLinearToSRGB()}},wd=new Set([bn,kr]),oe={enabled:!0,_workingColorSpace:bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!wd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ds[t].toReference,s=Ds[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ds[i].primaries},getTransfer:function(i){return i===Ue?Mr:Ds[i].transfer}};function Zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ta(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let gi;class eh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gi===void 0&&(gi=Tr("canvas")),gi.width=t.width,gi.height=t.height;const n=gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zi(e[n]/255)*255):e[n]=Zi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Td=0;class nh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=In(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ea(s[o].image)):r.push(ea(s[o]))}else r=ea(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?eh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ad=0;class Xe extends ss{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=sn,s=sn,r=He,o=di,a=Ve,l=Mn,c=Xe.DEFAULT_ANISOTROPY,h=Ue){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=In(),this.name="",this.source=new nh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ui?Te:Ue),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yr:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case Fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yr:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case Fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?ui:Zc}set encoding(t){Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ui?Te:Ue}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Vc;Xe.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,n=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,b=(p+1)/2,R=(f+1)/2,w=(h+d)/4,S=(u+_)/4,I=(g+m)/4;return v>b&&v>R?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=S/n):b>R?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=S/r,s=I/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rd extends ss{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(Ss("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ui?Te:Ue),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Xe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends Rd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ih extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pe,this.minFilter=pe,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cd extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pe,this.minFilter=pe,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const R=Math.sqrt(v),w=Math.atan2(R,f*x);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}const b=a*x;if(l=l*m+d*b,c=c*m+p*b,h=h*m+g*b,u=u*m+_*b,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return na.copy(this).projectOnVector(t),this.sub(na)}reflect(t){return this.sub(na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new U,fl=new Rs;class rs{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(t.matrixWorld),this.union(Is)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cs),Us.subVectors(this.max,cs),_i.subVectors(t.a,cs),vi.subVectors(t.b,cs),xi.subVectors(t.c,cs),Bn.subVectors(vi,_i),zn.subVectors(xi,vi),Jn.subVectors(_i,xi);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-Jn.z,Jn.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,Jn.z,0,-Jn.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-Jn.y,Jn.x,0];return!ia(e,_i,vi,xi,Us)||(e=[1,0,0,0,1,0,0,0,1],!ia(e,_i,vi,xi,Us))?!1:(Ns.crossVectors(Bn,zn),e=[Ns.x,Ns.y,Ns.z],ia(e,_i,vi,xi,Us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const En=[new U,new U,new U,new U,new U,new U,new U,new U],rn=new U,Is=new rs,_i=new U,vi=new U,xi=new U,Bn=new U,zn=new U,Jn=new U,cs=new U,Us=new U,Ns=new U,Qn=new U;function ia(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qn.fromArray(i,r);const a=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),h=n.dot(Qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ld=new rs,hs=new U,sa=new U;class as{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ld.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hs.subVectors(t,this.center);const e=hs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hs.copy(t.center).add(sa)),this.expandByPoint(hs.copy(t.center).sub(sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new U,ra=new U,ks=new U,Hn=new U,aa=new U,Fs=new U,oa=new U;class uo{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ra.copy(t).add(e).multiplyScalar(.5),ks.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(ra);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ks),a=Hn.dot(this.direction),l=-Hn.dot(ks),c=Hn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ra).addScaledVector(ks,d),p}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,s,r){aa.subVectors(e,t),Fs.subVectors(n,t),oa.crossVectors(aa,Fs);let o=this.direction.dot(oa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hn.subVectors(this.origin,t);const l=a*this.direction.dot(Fs.crossVectors(Hn,Fs));if(l<0)return null;const c=a*this.direction.dot(aa.cross(Hn));if(c<0||l+c>o)return null;const h=-a*Hn.dot(oa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/yi.setFromMatrixColumn(t,0).length(),r=1/yi.setFromMatrixColumn(t,1).length(),o=1/yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pd,t,Dd)}lookAt(t,e,n){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Gn.crossVectors(n,Ze),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Gn.crossVectors(n,Ze)),Gn.normalize(),Os.crossVectors(Ze,Gn),s[0]=Gn.x,s[4]=Os.x,s[8]=Ze.x,s[1]=Gn.y,s[5]=Os.y,s[9]=Ze.y,s[2]=Gn.z,s[6]=Os.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],x=n[3],v=n[7],b=n[11],R=n[15],w=s[0],S=s[4],I=s[8],y=s[12],A=s[1],G=s[5],q=s[9],j=s[13],D=s[2],C=s[6],P=s[10],X=s[14],N=s[3],H=s[7],$=s[11],tt=s[15];return r[0]=o*w+a*A+l*D+c*N,r[4]=o*S+a*G+l*C+c*H,r[8]=o*I+a*q+l*P+c*$,r[12]=o*y+a*j+l*X+c*tt,r[1]=h*w+u*A+d*D+p*N,r[5]=h*S+u*G+d*C+p*H,r[9]=h*I+u*q+d*P+p*$,r[13]=h*y+u*j+d*X+p*tt,r[2]=g*w+_*A+m*D+f*N,r[6]=g*S+_*G+m*C+f*H,r[10]=g*I+_*q+m*P+f*$,r[14]=g*y+_*j+m*X+f*tt,r[3]=x*w+v*A+b*D+R*N,r[7]=x*S+v*G+b*C+R*H,r[11]=x*I+v*q+b*P+R*$,r[15]=x*y+v*j+b*X+R*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+_*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],x=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,v=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,b=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,R=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,w=e*x+n*v+s*b+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return t[0]=x*S,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*S,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*S,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*S,t[4]=v*S,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*S,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*S,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*S,t[8]=b*S,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*S,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*S,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*S,t[12]=R*S,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*S,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*S,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*S,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,x=l*c,v=l*h,b=l*u,R=n.x,w=n.y,S=n.z;return s[0]=(1-(_+f))*R,s[1]=(p+b)*R,s[2]=(g-v)*R,s[3]=0,s[4]=(p-b)*w,s[5]=(1-(d+f))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(g+v)*S,s[9]=(m-x)*S,s[10]=(1-(d+_))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=yi.set(s[0],s[1],s[2]).length();const o=yi.set(s[4],s[5],s[6]).length(),a=yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],an.copy(this);const c=1/r,h=1/o,u=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,e.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Pn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===Pn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Er)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Pn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,p=(n+s)*h;let g,_;if(a===Pn)g=(o+r)*u,_=-2*u;else if(a===Er)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const yi=new U,an=new ge,Pd=new U(0,0,0),Dd=new U(1,1,1),Gn=new U,Os=new U,Ze=new U,pl=new ge,ml=new Rs;class Fr{constructor(t=0,e=0,n=0,s=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ml.setFromEuler(this),this.setFromQuaternion(ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Id=0;const gl=new U,Mi=new Rs,Tn=new ge,Bs=new U,us=new U,Ud=new U,Nd=new Rs,_l=new U(1,0,0),vl=new U(0,1,0),xl=new U(0,0,1),kd={type:"added"},Fd={type:"removed"};class ye extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new U,e=new Fr,n=new Rs,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Zt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.premultiply(Mi),this}rotateX(t){return this.rotateOnAxis(_l,t)}rotateY(t){return this.rotateOnAxis(vl,t)}rotateZ(t){return this.rotateOnAxis(xl,t)}translateOnAxis(t,e){return gl.copy(t).applyQuaternion(this.quaternion),this.position.add(gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_l,t)}translateY(t){return this.translateOnAxis(vl,t)}translateZ(t){return this.translateOnAxis(xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bs.copy(t):Bs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(us,Bs,this.up):Tn.lookAt(Bs,us,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Mi.setFromRotationMatrix(Tn),this.quaternion.premultiply(Mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(kd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fd)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,Ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ye.DEFAULT_UP=new U(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new U,An=new U,la=new U,Rn=new U,bi=new U,Si=new U,yl=new U,ca=new U,ha=new U,ua=new U;let zs=!1;class Qe{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),An.subVectors(n,e),la.subVectors(t,e);const o=on.dot(on),a=on.dot(An),l=on.dot(la),c=An.dot(An),h=An.dot(la),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(t,e,n,s,r,o,a,l){return zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zs=!0),this.getInterpolation(t,e,n,s,r,o,a,l)}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l)}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),An.subVectors(t,e),on.cross(An).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),An.subVectors(this.a,this.b),on.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zs=!0),Qe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;bi.subVectors(s,n),Si.subVectors(r,n),ca.subVectors(t,n);const l=bi.dot(ca),c=Si.dot(ca);if(l<=0&&c<=0)return e.copy(n);ha.subVectors(t,s);const h=bi.dot(ha),u=Si.dot(ha);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(bi,o);ua.subVectors(t,r);const p=bi.dot(ua),g=Si.dot(ua);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Si,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return yl.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(yl,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(bi,o).addScaledVector(Si,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=ho(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=da(o,r,t+1/3),this.g=da(o,r,t),this.b=da(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const n=rh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=ta(t.r),this.g=ta(t.g),this.b=ta(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return oe.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Ge(Ie.r*255,0,255))*65536+Math.round(Ge(Ie.g*255,0,255))*256+Math.round(Ge(Ie.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,s=Ie.g,r=Ie.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Te){oe.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,s=Ie.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(Hs);const n=bs(Vn.h,Hs.h,e),s=bs(Vn.s,Hs.s,e),r=bs(Vn.l,Hs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Lt;Lt.NAMES=rh;let Od=0;class fi extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=In(),this.name="",this.type="Material",this.blending=ji,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Ua,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ia&&(n.blendSrc=this.blendSrc),this.blendDst!==Ua&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class xn extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new U,Gs=new Xt;class me{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gs.fromBufferAttribute(this,e),Gs.applyMatrix3(t),this.setXY(e,Gs.x,Gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_n(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_n(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_n(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oa&&(t.usage=this.usage),t}}class ah extends me{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class oh extends me{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends me{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bd=0;const en=new ge,fa=new ye,Ei=new U,Je=new rs,ds=new rs,we=new U;class Le extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(th(t)?oh:ah)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ds.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Je.min,ds.min),Je.expandByPoint(we),we.addVectors(Je.max,ds.max),Je.expandByPoint(we)):(Je.expandByPoint(ds.min),Je.expandByPoint(ds.max))}Je.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)we.fromBufferAttribute(a,c),l&&(Ei.fromBufferAttribute(t,c),we.add(Ei)),s=Math.max(s,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<a;A++)c[A]=new U,h[A]=new U;const u=new U,d=new U,p=new U,g=new Xt,_=new Xt,m=new Xt,f=new U,x=new U;function v(A,G,q){u.fromArray(s,A*3),d.fromArray(s,G*3),p.fromArray(s,q*3),g.fromArray(o,A*2),_.fromArray(o,G*2),m.fromArray(o,q*2),d.sub(u),p.sub(u),_.sub(g),m.sub(g);const j=1/(_.x*m.y-m.x*_.y);isFinite(j)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(j),x.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(j),c[A].add(f),c[G].add(f),c[q].add(f),h[A].add(x),h[G].add(x),h[q].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let A=0,G=b.length;A<G;++A){const q=b[A],j=q.start,D=q.count;for(let C=j,P=j+D;C<P;C+=3)v(n[C+0],n[C+1],n[C+2])}const R=new U,w=new U,S=new U,I=new U;function y(A){S.fromArray(r,A*3),I.copy(S);const G=c[A];R.copy(G),R.sub(S.multiplyScalar(S.dot(G))).normalize(),w.crossVectors(I,G);const j=w.dot(h[A])<0?-1:1;l[A*4]=R.x,l[A*4+1]=R.y,l[A*4+2]=R.z,l[A*4+3]=j}for(let A=0,G=b.length;A<G;++A){const q=b[A],j=q.start,D=q.count;for(let C=j,P=j+D;C<P;C+=3)y(n[C+0]),y(n[C+1]),y(n[C+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new me(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ml=new ge,ti=new uo,Vs=new as,bl=new U,wi=new U,Ti=new U,Ai=new U,pa=new U,Ws=new U,Xs=new Xt,qs=new Xt,$s=new Xt,Sl=new U,El=new U,wl=new U,Ys=new U,js=new U;class xe extends ye{constructor(t=new Le,e=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ws.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(pa.fromBufferAttribute(u,t),o?Ws.addScaledVector(pa,h):Ws.addScaledVector(pa.sub(e),h))}e.add(Ws)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(Vs.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Vs,bl)===null||ti.origin.distanceToSquared(bl)>(t.far-t.near)**2))&&(Ml.copy(r).invert(),ti.copy(t.ray).applyMatrix4(Ml),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=x,R=v;b<R;b+=3){const w=a.getX(b),S=a.getX(b+1),I=a.getX(b+2);s=Ks(this,f,t,n,c,h,u,w,S,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=a.getX(m),v=a.getX(m+1),b=a.getX(m+2);s=Ks(this,o,t,n,c,h,u,x,v,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=x,R=v;b<R;b+=3){const w=b,S=b+1,I=b+2;s=Ks(this,f,t,n,c,h,u,w,S,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=m,v=m+1,b=m+2;s=Ks(this,o,t,n,c,h,u,x,v,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function zd(i,t,e,n,s,r,o,a){let l;if(t.side===We?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===kn,a),l===null)return null;js.copy(a),js.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(js);return c<e.near||c>e.far?null:{distance:c,point:js.clone(),object:i}}function Ks(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,wi),i.getVertexPosition(l,Ti),i.getVertexPosition(c,Ai);const h=zd(i,t,e,n,wi,Ti,Ai,Ys);if(h){s&&(Xs.fromBufferAttribute(s,a),qs.fromBufferAttribute(s,l),$s.fromBufferAttribute(s,c),h.uv=Qe.getInterpolation(Ys,wi,Ti,Ai,Xs,qs,$s,new Xt)),r&&(Xs.fromBufferAttribute(r,a),qs.fromBufferAttribute(r,l),$s.fromBufferAttribute(r,c),h.uv1=Qe.getInterpolation(Ys,wi,Ti,Ai,Xs,qs,$s,new Xt),h.uv2=h.uv1),o&&(Sl.fromBufferAttribute(o,a),El.fromBufferAttribute(o,l),wl.fromBufferAttribute(o,c),h.normal=Qe.getInterpolation(Ys,wi,Ti,Ai,Sl,El,wl,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new U,materialIndex:0};Qe.getNormal(wi,Ti,Ai,u.normal),h.face=u}return h}class On extends Le{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2));function g(_,m,f,x,v,b,R,w,S,I,y){const A=b/S,G=R/I,q=b/2,j=R/2,D=w/2,C=S+1,P=I+1;let X=0,N=0;const H=new U;for(let $=0;$<P;$++){const tt=$*G-j;for(let et=0;et<C;et++){const V=et*A-q;H[_]=V*x,H[m]=tt*v,H[f]=D,c.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[f]=w>0?1:-1,h.push(H.x,H.y,H.z),u.push(et/S),u.push(1-$/I),X+=1}}for(let $=0;$<I;$++)for(let tt=0;tt<S;tt++){const et=d+tt+C*$,V=d+tt+C*($+1),K=d+(tt+1)+C*($+1),ht=d+(tt+1)+C*$;l.push(et,V,ht),l.push(V,K,ht),N+=6}a.addGroup(p,N,y),p+=N,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function is(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=is(i[e]);for(const s in n)t[s]=n[s]}return t}function Hd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function lh(i){return i.getRenderTarget()===null?i.outputColorSpace:oe.workingColorSpace}const fo={clone:is,merge:Oe};var Gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gd,this.fragmentShader=Vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=Hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ch extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nn extends ch{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ki*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(Ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ki*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ri=-90,Ci=1;class hh extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Ri,Ci,t,e);s.layers=this.layers,this.add(s);const r=new nn(Ri,Ci,t,e);r.layers=this.layers,this.add(r);const o=new nn(Ri,Ci,t,e);o.layers=this.layers,this.add(o);const a=new nn(Ri,Ci,t,e);a.layers=this.layers,this.add(a);const l=new nn(Ri,Ci,t,e);l.layers=this.layers,this.add(l);const c=new nn(Ri,Ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class uh extends Xe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dh extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Ss("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ui?Te:Ue),this.texture=new uh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:He}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new On(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Dn});r.uniforms.tEquirect.value=e;const o=new xe(s,r),a=e.minFilter;return e.minFilter===di&&(e.minFilter=He),new hh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ma=new U,Wd=new U,Xd=new Zt;class ii{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ma.subVectors(n,e).cross(Wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xd.getNormalMatrix(t),s=this.coplanarPoint(ma).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new as,Zs=new U;class po{constructor(t=new ii,e=new ii,n=new ii,s=new ii,r=new ii,o=new ii){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],x=s[13],v=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,m-p,b-f).normalize(),n[1].setComponents(l+r,d+c,m+p,b+f).normalize(),n[2].setComponents(l+o,d+h,m+g,b+x).normalize(),n[3].setComponents(l-o,d-h,m-g,b-x).normalize(),n[4].setComponents(l-a,d-u,m-_,b-v).normalize(),e===Pn)n[5].setComponents(l+a,d+u,m+_,b+v).normalize();else if(e===Er)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Zs.x=s.normal.x>0?t.max.x:t.min.x,Zs.y=s.normal.y>0?t.max.y:t.min.y,Zs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function qd(i,t){const e=t.isWebGL2,n=new WeakMap;function s(c,h){const u=c.array,d=c.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){const d=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),p.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];e?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class li extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const x=f*d-o;for(let v=0;v<c;v++){const b=v*u-r;g.push(b,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const v=x+c*f,b=x+c*(f+1),R=x+1+c*(f+1),w=x+1+c*f;p.push(v,b,w),p.push(b,R,w)}this.setIndex(p),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.width,t.height,t.widthSegments,t.heightSegments)}}var $d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yd=`#ifdef USE_ALPHAHASH
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
#endif`,jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
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
#endif`,tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ef=`#ifdef USE_BATCHING
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
#endif`,nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,of=`#ifdef USE_IRIDESCENCE
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
#endif`,lf=`#ifdef USE_BUMPMAP
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_f=`#define PI 3.141592653589793
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
} // validated`,vf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xf=`vec3 transformedNormal = objectNormal;
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
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",wf=`
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
}`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,If=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
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
}`,kf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zf=`uniform bool receiveShadow;
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
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qf=`PhysicalMaterial material;
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
#endif`,$f=`struct PhysicalMaterial {
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
}`,Yf=`
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
#endif`,jf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,np=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ip=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sp=`#if defined( USE_POINTS_UV )
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
#endif`,rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,op=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lp=`#ifdef USE_MORPHNORMALS
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
#endif`,cp=`#ifdef USE_MORPHTARGETS
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
#endif`,hp=`#ifdef USE_MORPHTARGETS
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
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
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
#endif`,_p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dp=`float getShadowMask() {
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
}`,Ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,Fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#ifdef USE_TRANSMISSION
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yp=`uniform sampler2D t2D;
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
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
}`,tm=`#if DEPTH_PACKING == 3200
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
}`,em=`#define DISTANCE
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
}`,nm=`#define DISTANCE
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#include <common>
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#define LAMBERT
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
}`,hm=`#define LAMBERT
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
}`,um=`#define MATCAP
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
}`,dm=`#define MATCAP
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
}`,fm=`#define NORMAL
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
}`,pm=`#define NORMAL
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
}`,mm=`#define PHONG
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
}`,gm=`#define PHONG
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
}`,_m=`#define STANDARD
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
}`,vm=`#define STANDARD
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
}`,xm=`#define TOON
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
}`,ym=`#define TOON
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
}`,Mm=`uniform float size;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,Em=`uniform vec3 color;
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
}`,wm=`uniform float rotation;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:$d,alphahash_pars_fragment:Yd,alphamap_fragment:jd,alphamap_pars_fragment:Kd,alphatest_fragment:Zd,alphatest_pars_fragment:Jd,aomap_fragment:Qd,aomap_pars_fragment:tf,batching_pars_vertex:ef,batching_vertex:nf,begin_vertex:sf,beginnormal_vertex:rf,bsdfs:af,iridescence_fragment:of,bumpmap_pars_fragment:lf,clipping_planes_fragment:cf,clipping_planes_pars_fragment:hf,clipping_planes_pars_vertex:uf,clipping_planes_vertex:df,color_fragment:ff,color_pars_fragment:pf,color_pars_vertex:mf,color_vertex:gf,common:_f,cube_uv_reflection_fragment:vf,defaultnormal_vertex:xf,displacementmap_pars_vertex:yf,displacementmap_vertex:Mf,emissivemap_fragment:bf,emissivemap_pars_fragment:Sf,colorspace_fragment:Ef,colorspace_pars_fragment:wf,envmap_fragment:Tf,envmap_common_pars_fragment:Af,envmap_pars_fragment:Rf,envmap_pars_vertex:Cf,envmap_physical_pars_fragment:Hf,envmap_vertex:Lf,fog_vertex:Pf,fog_pars_vertex:Df,fog_fragment:If,fog_pars_fragment:Uf,gradientmap_pars_fragment:Nf,lightmap_fragment:kf,lightmap_pars_fragment:Ff,lights_lambert_fragment:Of,lights_lambert_pars_fragment:Bf,lights_pars_begin:zf,lights_toon_fragment:Gf,lights_toon_pars_fragment:Vf,lights_phong_fragment:Wf,lights_phong_pars_fragment:Xf,lights_physical_fragment:qf,lights_physical_pars_fragment:$f,lights_fragment_begin:Yf,lights_fragment_maps:jf,lights_fragment_end:Kf,logdepthbuf_fragment:Zf,logdepthbuf_pars_fragment:Jf,logdepthbuf_pars_vertex:Qf,logdepthbuf_vertex:tp,map_fragment:ep,map_pars_fragment:np,map_particle_fragment:ip,map_particle_pars_fragment:sp,metalnessmap_fragment:rp,metalnessmap_pars_fragment:ap,morphcolor_vertex:op,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:_p,clearcoat_normal_fragment_maps:vp,clearcoat_pars_fragment:xp,iridescence_pars_fragment:yp,opaque_fragment:Mp,packing:bp,premultiplied_alpha_fragment:Sp,project_vertex:Ep,dithering_fragment:wp,dithering_pars_fragment:Tp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Lp,shadowmap_vertex:Pp,shadowmask_pars_fragment:Dp,skinbase_vertex:Ip,skinning_pars_vertex:Up,skinning_vertex:Np,skinnormal_vertex:kp,specularmap_fragment:Fp,specularmap_pars_fragment:Op,tonemapping_fragment:Bp,tonemapping_pars_fragment:zp,transmission_fragment:Hp,transmission_pars_fragment:Gp,uv_pars_fragment:Vp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:qp,background_vert:$p,background_frag:Yp,backgroundCube_vert:jp,backgroundCube_frag:Kp,cube_vert:Zp,cube_frag:Jp,depth_vert:Qp,depth_frag:tm,distanceRGBA_vert:em,distanceRGBA_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:am,meshbasic_vert:om,meshbasic_frag:lm,meshlambert_vert:cm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:_m,meshphysical_frag:vm,meshtoon_vert:xm,meshtoon_frag:ym,points_vert:Mm,points_frag:bm,shadow_vert:Sm,shadow_frag:Em,sprite_vert:wm,sprite_frag:Tm},rt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},mn={basic:{uniforms:Oe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Oe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Oe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Oe([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Oe([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Oe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Oe([rt.points,rt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Oe([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Oe([rt.common,rt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Oe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Oe([rt.sprite,rt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Oe([rt.common,rt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Oe([rt.lights,rt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};mn.physical={uniforms:Oe([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Js={r:0,b:0,g:0};function Am(i,t,e,n,s,r,o){const a=new Lt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let x=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Nr)?(h===void 0&&(h=new xe(new On(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:is(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=oe.getTransfer(v.colorSpace)!==he,(u!==v||d!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new xe(new li(2,2),new un({name:"BackgroundMaterial",uniforms:is(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=oe.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(Js,lh(i)),n.buffers.color.setClear(Js.r,Js.g,Js.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Rm(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,h=!1;function u(D,C,P,X,N){let H=!1;if(o){const $=_(X,P,C);c!==$&&(c=$,p(c.object)),H=f(D,X,P,N),H&&x(D,X,P,N)}else{const $=C.wireframe===!0;(c.geometry!==X.id||c.program!==P.id||c.wireframe!==$)&&(c.geometry=X.id,c.program=P.id,c.wireframe=$,H=!0)}N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(H||h)&&(h=!1,I(D,C,P,X),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,C,P){const X=P.wireframe===!0;let N=a[D.id];N===void 0&&(N={},a[D.id]=N);let H=N[C.id];H===void 0&&(H={},N[C.id]=H);let $=H[X];return $===void 0&&($=m(d()),H[X]=$),$}function m(D){const C=[],P=[],X=[];for(let N=0;N<s;N++)C[N]=0,P[N]=0,X[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:X,object:D,attributes:{},index:null}}function f(D,C,P,X){const N=c.attributes,H=C.attributes;let $=0;const tt=P.getAttributes();for(const et in tt)if(tt[et].location>=0){const K=N[et];let ht=H[et];if(ht===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(ht=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(ht=D.instanceColor)),K===void 0||K.attribute!==ht||ht&&K.data!==ht.data)return!0;$++}return c.attributesNum!==$||c.index!==X}function x(D,C,P,X){const N={},H=C.attributes;let $=0;const tt=P.getAttributes();for(const et in tt)if(tt[et].location>=0){let K=H[et];K===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(K=D.instanceColor));const ht={};ht.attribute=K,K&&K.data&&(ht.data=K.data),N[et]=ht,$++}c.attributes=N,c.attributesNum=$,c.index=X}function v(){const D=c.newAttributes;for(let C=0,P=D.length;C<P;C++)D[C]=0}function b(D){R(D,0)}function R(D,C){const P=c.newAttributes,X=c.enabledAttributes,N=c.attributeDivisors;P[D]=1,X[D]===0&&(i.enableVertexAttribArray(D),X[D]=1),N[D]!==C&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,C),N[D]=C)}function w(){const D=c.newAttributes,C=c.enabledAttributes;for(let P=0,X=C.length;P<X;P++)C[P]!==D[P]&&(i.disableVertexAttribArray(P),C[P]=0)}function S(D,C,P,X,N,H,$){$===!0?i.vertexAttribIPointer(D,C,P,N,H):i.vertexAttribPointer(D,C,P,X,N,H)}function I(D,C,P,X){if(n.isWebGL2===!1&&(D.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const N=X.attributes,H=P.getAttributes(),$=C.defaultAttributeValues;for(const tt in H){const et=H[tt];if(et.location>=0){let V=N[tt];if(V===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(V=D.instanceColor)),V!==void 0){const K=V.normalized,ht=V.itemSize,yt=e.get(V);if(yt===void 0)continue;const vt=yt.buffer,kt=yt.type,Ot=yt.bytesPerElement,Dt=n.isWebGL2===!0&&(kt===i.INT||kt===i.UNSIGNED_INT||V.gpuType===Wc);if(V.isInterleavedBufferAttribute){const te=V.data,F=te.stride,ue=V.offset;if(te.isInstancedInterleavedBuffer){for(let Rt=0;Rt<et.locationSize;Rt++)R(et.location+Rt,te.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Rt=0;Rt<et.locationSize;Rt++)b(et.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let Rt=0;Rt<et.locationSize;Rt++)S(et.location+Rt,ht/et.locationSize,kt,K,F*Ot,(ue+ht/et.locationSize*Rt)*Ot,Dt)}else{if(V.isInstancedBufferAttribute){for(let te=0;te<et.locationSize;te++)R(et.location+te,V.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let te=0;te<et.locationSize;te++)b(et.location+te);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let te=0;te<et.locationSize;te++)S(et.location+te,ht/et.locationSize,kt,K,ht*Ot,ht/et.locationSize*te*Ot,Dt)}}else if($!==void 0){const K=$[tt];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(et.location,K);break;case 3:i.vertexAttrib3fv(et.location,K);break;case 4:i.vertexAttrib4fv(et.location,K);break;default:i.vertexAttrib1fv(et.location,K)}}}}w()}function y(){q();for(const D in a){const C=a[D];for(const P in C){const X=C[P];for(const N in X)g(X[N].object),delete X[N];delete C[P]}delete a[D]}}function A(D){if(a[D.id]===void 0)return;const C=a[D.id];for(const P in C){const X=C[P];for(const N in X)g(X[N].object),delete X[N];delete C[P]}delete a[D.id]}function G(D){for(const C in a){const P=a[C];if(P[D.id]===void 0)continue;const X=P[D.id];for(const N in X)g(X[N].object),delete X[N];delete P[D.id]}}function q(){j(),h=!0,c!==l&&(c=l,p(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:q,resetDefaultState:j,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:b,disableUnusedAttributes:w}}function Cm(i,t,e,n){const s=n.isWebGL2;let r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Lm(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,b=o||t.has("OES_texture_float"),R=v&&b,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:w}}function Pm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ii,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,v=x*4;let b=f.clippingState||null;l.value=b,b=h(g,d,v,p);for(let R=0;R!==v;++R)b[R]=e[R];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,b=p;v!==_;++v,b+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Dm(i){let t=new WeakMap;function e(o,a){return a===Na?o.mapping=Qi:a===ka&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Na||a===ka)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new dh(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class mo extends ch{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Gi=4,Tl=[.125,.215,.35,.446,.526,.582],oi=20,ga=new mo,Al=new Lt;let _a=null,va=0,xa=0;const si=(1+Math.sqrt(5))/2,Li=1/si,Rl=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,si,Li),new U(0,si,-Li),new U(Li,0,si),new U(-Li,0,si),new U(si,Li,0),new U(-si,Li,0)];class Cl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_a,va,xa),t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:es,format:Ve,colorSpace:bn,depthBuffer:!1},s=Ll(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ll(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Im(r)),this._blurMaterial=Um(r,t,e)}return s}_compileMaterial(t){const e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,ga)}_sceneToCubeUV(t,e,n,s){const a=new nn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Al),h.toneMapping=jn,h.autoClear=!1;const p=new xn({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new xe(new On,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Al),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;Qs(s,x*v,f>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Qi||t.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new xe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ga)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Rl[(s-1)%Rl.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new xe(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*oi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):oi;m>oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${oi}`);const f=[];let x=0;for(let S=0;S<oi;++S){const I=S/_,y=Math.exp(-I*I/2);f.push(y),S===0?x+=y:S<m&&(x+=2*y)}for(let S=0;S<f.length;S++)f[S]=f[S]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const b=this._sizeLods[s],R=3*b*(s>v-Gi?s-v+Gi:0),w=4*(this._cubeSize-b);Qs(e,R,w,3*b,2*b),l.setRenderTarget(e),l.render(u,ga)}}function Im(i){const t=[],e=[],n=[];let s=i;const r=i-Gi+1+Tl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Gi?l=Tl[o-i+Gi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*p),v=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let w=0;w<p;w++){const S=w%3*2/3-1,I=w>2?0:-1,y=[S,I,0,S+2/3,I,0,S+2/3,I+1,0,S,I,0,S+2/3,I+1,0,S,I+1,0];x.set(y,_*g*w),v.set(d,m*g*w);const A=[w,w,w,w,w,w];b.set(A,f*g*w)}const R=new Le;R.setAttribute("position",new me(x,_)),R.setAttribute("uv",new me(v,m)),R.setAttribute("faceIndex",new me(b,f)),t.push(R),s>Gi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ll(i,t,e){const n=new Fn(i,t,e);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Um(i,t,e){const n=new Float32Array(oi),s=new U(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:go(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Pl(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Dl(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function go(){return`

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
	`}function Nm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Na||l===ka,h=l===Qi||l===ts;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Cl(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Cl(i));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function km(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fm(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,b=x.length;v<b;v+=3){const R=x[v+0],w=x[v+1],S=x[v+2];d.push(R,w,w,S,S,R)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,b=x.length/3-1;v<b;v+=3){const R=v+0,w=v+1,S=v+2;d.push(R,w,w,S,S,R)}}else return;const m=new(th(d)?oh:ah)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Om(i,t,e,n){const s=n.isWebGL2;let r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){i.drawElements(r,g,a,p*l),e.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,a,p*l,_),e.update(g,r,_)}function d(p,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,_);let f=0;for(let x=0;x<_;x++)f+=g[x];e.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Bm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zm(i,t){return i[0]-t[0]}function Hm(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Gm(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,o=new Ae,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let C=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var p=C;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let y=0;v===!0&&(y=1),b===!0&&(y=2),R===!0&&(y=3);let A=h.attributes.position.count*y,G=1;A>t.maxTextureSize&&(G=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const q=new Float32Array(A*G*4*_),j=new ih(q,A,G,_);j.type=Yn,j.needsUpdate=!0;const D=y*4;for(let P=0;P<_;P++){const X=w[P],N=S[P],H=I[P],$=A*G*4*P;for(let tt=0;tt<X.count;tt++){const et=tt*D;v===!0&&(o.fromBufferAttribute(X,tt),q[$+et+0]=o.x,q[$+et+1]=o.y,q[$+et+2]=o.z,q[$+et+3]=0),b===!0&&(o.fromBufferAttribute(N,tt),q[$+et+4]=o.x,q[$+et+5]=o.y,q[$+et+6]=o.z,q[$+et+7]=0),R===!0&&(o.fromBufferAttribute(H,tt),q[$+et+8]=o.x,q[$+et+9]=o.y,q[$+et+10]=o.z,q[$+et+11]=H.itemSize===4?o.w:1)}}m={count:_,texture:j,size:new Xt(A,G)},r.set(h,m),h.addEventListener("dispose",C)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const x=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let b=0;b<g;b++)_[b]=[b,0];n[h.id]=_}for(let b=0;b<g;b++){const R=_[b];R[0]=b,R[1]=d[b]}_.sort(Hm);for(let b=0;b<8;b++)b<g&&_[b][1]?(a[b][0]=_[b][0],a[b][1]=_[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(zm);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let x=0;for(let b=0;b<8;b++){const R=a[b],w=R[0],S=R[1];w!==Number.MAX_SAFE_INTEGER&&S?(m&&h.getAttribute("morphTarget"+b)!==m[w]&&h.setAttribute("morphTarget"+b,m[w]),f&&h.getAttribute("morphNormal"+b)!==f[w]&&h.setAttribute("morphNormal"+b,f[w]),s[b]=S,x+=S):(m&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),f&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),s[b]=0)}const v=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Vm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class ph extends Xe{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:hi,h!==hi&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hi&&(n=$n),n===void 0&&h===ns&&(n=ci),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:pe,this.minFilter=l!==void 0?l:pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const mh=new Xe,gh=new ph(1,1);gh.compareFunction=Qc;const _h=new ih,vh=new Cd,xh=new uh,Il=[],Ul=[],Nl=new Float32Array(16),kl=new Float32Array(9),Fl=new Float32Array(4);function os(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Il[s];if(r===void 0&&(r=new Float32Array(s),Il[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Or(i,t){let e=Ul[t];e===void 0&&(e=new Int32Array(t),Ul[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function Ym(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Fl.set(n),i.uniformMatrix2fv(this.addr,!1,Fl),be(e,n)}}function jm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;kl.set(n),i.uniformMatrix3fv(this.addr,!1,kl),be(e,n)}}function Km(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Nl.set(n),i.uniformMatrix4fv(this.addr,!1,Nl),be(e,n)}}function Zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function e0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function n0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function r0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?gh:mh;e.setTexture2D(t||r,s)}function a0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vh,s)}function o0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xh,s)}function l0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_h,s)}function c0(i){switch(i){case 5126:return Wm;case 35664:return Xm;case 35665:return qm;case 35666:return $m;case 35674:return Ym;case 35675:return jm;case 35676:return Km;case 5124:case 35670:return Zm;case 35667:case 35671:return Jm;case 35668:case 35672:return Qm;case 35669:case 35673:return t0;case 5125:return e0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return l0}}function h0(i,t){i.uniform1fv(this.addr,t)}function u0(i,t){const e=os(t,this.size,2);i.uniform2fv(this.addr,e)}function d0(i,t){const e=os(t,this.size,3);i.uniform3fv(this.addr,e)}function f0(i,t){const e=os(t,this.size,4);i.uniform4fv(this.addr,e)}function p0(i,t){const e=os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function m0(i,t){const e=os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function g0(i,t){const e=os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _0(i,t){i.uniform1iv(this.addr,t)}function v0(i,t){i.uniform2iv(this.addr,t)}function x0(i,t){i.uniform3iv(this.addr,t)}function y0(i,t){i.uniform4iv(this.addr,t)}function M0(i,t){i.uniform1uiv(this.addr,t)}function b0(i,t){i.uniform2uiv(this.addr,t)}function S0(i,t){i.uniform3uiv(this.addr,t)}function E0(i,t){i.uniform4uiv(this.addr,t)}function w0(i,t,e){const n=this.cache,s=t.length,r=Or(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||mh,r[o])}function T0(i,t,e){const n=this.cache,s=t.length,r=Or(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vh,r[o])}function A0(i,t,e){const n=this.cache,s=t.length,r=Or(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||xh,r[o])}function R0(i,t,e){const n=this.cache,s=t.length,r=Or(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||_h,r[o])}function C0(i){switch(i){case 5126:return h0;case 35664:return u0;case 35665:return d0;case 35666:return f0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return _0;case 35667:case 35671:return v0;case 35668:case 35672:return x0;case 35669:case 35673:return y0;case 5125:return M0;case 36294:return b0;case 36295:return S0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}class L0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=c0(e.type)}}class P0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=C0(e.type)}}class D0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function Ol(i,t){i.seq.push(t),i.map[t.id]=t}function I0(i,t,e){const n=i.name,s=n.length;for(ya.lastIndex=0;;){const r=ya.exec(n),o=ya.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ol(e,c===void 0?new L0(a,i,t):new P0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new D0(a),Ol(e,u)),e=u}}}class pr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);I0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Bl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const U0=37297;let N0=0;function k0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function F0(i){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i);let n;switch(t===e?n="":t===Sr&&e===br?n="LinearDisplayP3ToLinearSRGB":t===br&&e===Sr&&(n="LinearSRGBToLinearDisplayP3"),i){case bn:case kr:return[n,"LinearTransferOETF"];case Te:case co:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function zl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+k0(i.getShaderSource(t),o)}else return s}function O0(i,t){const e=F0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function B0(i,t){let e;switch(t){case Bu:e="Linear";break;case zu:e="Reinhard";break;case Hu:e="OptimizedCineon";break;case Gu:e="ACESFilmic";break;case Wu:e="AgX";break;case Vu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function z0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vi).join(`
`)}function H0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Vi).join(`
`)}function G0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function V0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Vi(i){return i!==""}function Hl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const W0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(i){return i.replace(W0,q0)}const X0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function q0(i,t){let e=Yt[t];if(e===void 0){const n=X0.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ha(e)}const $0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(i){return i.replace($0,Y0)}function Y0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wl(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function j0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function K0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case ts:t="ENVMAP_TYPE_CUBE";break;case Nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Z0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ts:t="ENVMAP_MODE_REFRACTION";break}return t}function J0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gc:t="ENVMAP_BLENDING_MULTIPLY";break;case Fu:t="ENVMAP_BLENDING_MIX";break;case Ou:t="ENVMAP_BLENDING_ADD";break}return t}function Q0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function tg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=j0(e),c=K0(e),h=Z0(e),u=J0(e),d=Q0(e),p=e.isWebGL2?"":z0(e),g=H0(e),_=G0(r),m=s.createProgram();let f,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Vi).join(`
`),f.length>0&&(f+=`
`),x=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Vi).join(`
`),x.length>0&&(x+=`
`)):(f=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),x=[p,Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==jn?B0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,O0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vi).join(`
`)),o=Ha(o),o=Hl(o,e),o=Gl(o,e),a=Ha(a),a=Hl(a,e),a=Gl(a,e),o=Vl(o),a=Vl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=v+f+o,R=v+x+a,w=Bl(s,s.VERTEX_SHADER,b),S=Bl(s,s.FRAGMENT_SHADER,R);s.attachShader(m,w),s.attachShader(m,S),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function I(q){if(i.debug.checkShaderErrors){const j=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(w).trim(),C=s.getShaderInfoLog(S).trim();let P=!0,X=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(P=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,w,S);else{const N=zl(s,w,"vertex"),H=zl(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+N+`
`+H)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(D===""||C==="")&&(X=!1);X&&(q.diagnostics={runnable:P,programLog:j,vertexShader:{log:D,prefix:f},fragmentShader:{log:C,prefix:x}})}s.deleteShader(w),s.deleteShader(S),y=new pr(s,m),A=V0(s,m)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(m,U0)),G},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=N0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=S,this}let eg=0;class ng{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ig(t),e.set(t,n)),n}}class ig{constructor(t){this.id=eg++,this.code=t,this.usedTimes=0}}function sg(i,t,e,n,s,r,o){const a=new sh,l=new ng,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,A,G,q,j){const D=q.fog,C=j.geometry,P=y.isMeshStandardMaterial?q.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||P),N=X&&X.mapping===Nr?X.image.height:null,H=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const $=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,tt=$!==void 0?$.length:0;let et=0;C.morphAttributes.position!==void 0&&(et=1),C.morphAttributes.normal!==void 0&&(et=2),C.morphAttributes.color!==void 0&&(et=3);let V,K,ht,yt;if(H){const Ne=mn[H];V=Ne.vertexShader,K=Ne.fragmentShader}else V=y.vertexShader,K=y.fragmentShader,l.update(y),ht=l.getVertexShaderID(y),yt=l.getFragmentShaderID(y);const vt=i.getRenderTarget(),kt=j.isInstancedMesh===!0,Ot=j.isBatchedMesh===!0,Dt=!!y.map,te=!!y.matcap,F=!!X,ue=!!y.aoMap,Rt=!!y.lightMap,Mt=!!y.bumpMap,ut=!!y.normalMap,qt=!!y.displacementMap,It=!!y.emissiveMap,T=!!y.metalnessMap,M=!!y.roughnessMap,O=y.anisotropy>0,J=y.clearcoat>0,Y=y.iridescence>0,Q=y.sheen>0,gt=y.transmission>0,ot=O&&!!y.anisotropyMap,_t=J&&!!y.clearcoatMap,At=J&&!!y.clearcoatNormalMap,Bt=J&&!!y.clearcoatRoughnessMap,Z=Y&&!!y.iridescenceMap,ee=Y&&!!y.iridescenceThicknessMap,Et=Q&&!!y.sheenColorMap,bt=Q&&!!y.sheenRoughnessMap,wt=!!y.specularMap,mt=!!y.specularColorMap,Ft=!!y.specularIntensityMap,ne=gt&&!!y.transmissionMap,ce=gt&&!!y.thicknessMap,Vt=!!y.gradientMap,st=!!y.alphaMap,L=y.alphaTest>0,lt=!!y.alphaHash,ct=!!y.extensions,Ct=!!C.attributes.uv1,Tt=!!C.attributes.uv2,re=!!C.attributes.uv3;let ie=jn;return y.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ie=i.toneMapping),{isWebGL2:h,shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:K,defines:y.defines,customVertexShaderID:ht,customFragmentShaderID:yt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ot,instancing:kt,instancingColor:kt&&j.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:bn,map:Dt,matcap:te,envMap:F,envMapMode:F&&X.mapping,envMapCubeUVHeight:N,aoMap:ue,lightMap:Rt,bumpMap:Mt,normalMap:ut,displacementMap:d&&qt,emissiveMap:It,normalMapObjectSpace:ut&&y.normalMapType===nd,normalMapTangentSpace:ut&&y.normalMapType===ed,metalnessMap:T,roughnessMap:M,anisotropy:O,anisotropyMap:ot,clearcoat:J,clearcoatMap:_t,clearcoatNormalMap:At,clearcoatRoughnessMap:Bt,iridescence:Y,iridescenceMap:Z,iridescenceThicknessMap:ee,sheen:Q,sheenColorMap:Et,sheenRoughnessMap:bt,specularMap:wt,specularColorMap:mt,specularIntensityMap:Ft,transmission:gt,transmissionMap:ne,thicknessMap:ce,gradientMap:Vt,opaque:y.transparent===!1&&y.blending===ji,alphaMap:st,alphaTest:L,alphaHash:lt,combine:y.combine,mapUv:Dt&&_(y.map.channel),aoMapUv:ue&&_(y.aoMap.channel),lightMapUv:Rt&&_(y.lightMap.channel),bumpMapUv:Mt&&_(y.bumpMap.channel),normalMapUv:ut&&_(y.normalMap.channel),displacementMapUv:qt&&_(y.displacementMap.channel),emissiveMapUv:It&&_(y.emissiveMap.channel),metalnessMapUv:T&&_(y.metalnessMap.channel),roughnessMapUv:M&&_(y.roughnessMap.channel),anisotropyMapUv:ot&&_(y.anisotropyMap.channel),clearcoatMapUv:_t&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:At&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Bt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(y.sheenRoughnessMap.channel),specularMapUv:wt&&_(y.specularMap.channel),specularColorMapUv:mt&&_(y.specularColorMap.channel),specularIntensityMapUv:Ft&&_(y.specularIntensityMap.channel),transmissionMapUv:ne&&_(y.transmissionMap.channel),thicknessMapUv:ce&&_(y.thicknessMap.channel),alphaMapUv:st&&_(y.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(ut||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,vertexUv1s:Ct,vertexUv2s:Tt,vertexUv3s:re,pointsUvs:j.isPoints===!0&&!!C.attributes.uv&&(Dt||st),fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:j.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:et,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Dt&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===he,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===$e,flipSided:y.side===We,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ct&&y.extensions.derivatives===!0,extensionFragDepth:ct&&y.extensions.fragDepth===!0,extensionDrawBuffers:ct&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ct&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ct&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const G in y.defines)A.push(G),A.push(y.defines[G]);return y.isRawShaderMaterial===!1&&(x(A,y),v(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function x(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function v(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function b(y){const A=g[y.type];let G;if(A){const q=mn[A];G=fo.clone(q.uniforms)}else G=y.uniforms;return G}function R(y,A){let G;for(let q=0,j=c.length;q<j;q++){const D=c[q];if(D.cacheKey===A){G=D,++G.usedTimes;break}}return G===void 0&&(G=new tg(i,A,y,r),c.push(G)),G}function w(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),y.destroy()}}function S(y){l.remove(y)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:R,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:I}}function rg(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function ag(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ql(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||ag),n.length>1&&n.sort(d||Xl),s.length>1&&s.sort(d||Xl)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function og(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ql,i.set(n,[o])):s>=r.length?(o=new ql,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function lg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Lt};break;case"SpotLight":e={position:new U,direction:new U,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function cg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let hg=0;function ug(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dg(i,t){const e=new lg,n=cg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);const r=new U,o=new ge,a=new ge;function l(h,u){let d=0,p=0,g=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let _=0,m=0,f=0,x=0,v=0,b=0,R=0,w=0,S=0,I=0,y=0;h.sort(ug);const A=u===!0?Math.PI:1;for(let q=0,j=h.length;q<j;q++){const D=h[q],C=D.color,P=D.intensity,X=D.distance,N=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=C.r*P*A,p+=C.g*P*A,g+=C.b*P*A;else if(D.isLightProbe){for(let H=0;H<9;H++)s.probe[H].addScaledVector(D.sh.coefficients[H],P);y++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const $=D.shadow,tt=n.get(D);tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,s.directionalShadow[_]=tt,s.directionalShadowMap[_]=N,s.directionalShadowMatrix[_]=D.shadow.matrix,b++}s.directional[_]=H,_++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(C).multiplyScalar(P*A),H.distance=X,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,s.spot[f]=H;const $=D.shadow;if(D.map&&(s.spotLightMap[S]=D.map,S++,$.updateMatrices(D),D.castShadow&&I++),s.spotLightMatrix[f]=$.matrix,D.castShadow){const tt=n.get(D);tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,s.spotShadow[f]=tt,s.spotShadowMap[f]=N,w++}f++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(C).multiplyScalar(P),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),s.rectArea[x]=H,x++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*A),H.distance=D.distance,H.decay=D.decay,D.castShadow){const $=D.shadow,tt=n.get(D);tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,tt.shadowCameraNear=$.camera.near,tt.shadowCameraFar=$.camera.far,s.pointShadow[m]=tt,s.pointShadowMap[m]=N,s.pointShadowMatrix[m]=D.shadow.matrix,R++}s.point[m]=H,m++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(P*A),H.groundColor.copy(D.groundColor).multiplyScalar(P*A),s.hemi[v]=H,v++}}x>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=rt.LTC_FLOAT_1,s.rectAreaLTC2=rt.LTC_FLOAT_2):(s.rectAreaLTC1=rt.LTC_HALF_1,s.rectAreaLTC2=rt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=rt.LTC_FLOAT_1,s.rectAreaLTC2=rt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=rt.LTC_HALF_1,s.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;const G=s.hash;(G.directionalLength!==_||G.pointLength!==m||G.spotLength!==f||G.rectAreaLength!==x||G.hemiLength!==v||G.numDirectionalShadows!==b||G.numPointShadows!==R||G.numSpotShadows!==w||G.numSpotMaps!==S||G.numLightProbes!==y)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=x,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=w+S-I,s.spotLightMap.length=S,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=y,G.directionalLength=_,G.pointLength=m,G.spotLength=f,G.rectAreaLength=x,G.hemiLength=v,G.numDirectionalShadows=b,G.numPointShadows=R,G.numSpotShadows=w,G.numSpotMaps=S,G.numLightProbes=y,s.version=hg++)}function c(h,u){let d=0,p=0,g=0,_=0,m=0;const f=u.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const b=h[x];if(b.isDirectionalLight){const R=s.directional[d];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),d++}else if(b.isSpotLight){const R=s.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),g++}else if(b.isRectAreaLight){const R=s.rectArea[_];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(f),a.identity(),o.copy(b.matrixWorld),o.premultiply(f),a.extractRotation(o),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const R=s.point[p];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){const R=s.hemi[m];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function $l(i,t){const e=new dg(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function fg(i,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new $l(i,t),e.set(r,[l])):o>=a.length?(l=new $l(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}class yh extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pg extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gg=`uniform sampler2D shadow_pass;
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
}`;function _g(i,t,e){let n=new po;const s=new Xt,r=new Xt,o=new Ae,a=new yh({depthPacking:Jc}),l=new pg,c={},h=e.maxTextureSize,u={[kn]:We,[We]:kn,[$e]:$e},d=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:mg,fragmentShader:gg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Le;g.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let f=this.type;this.render=function(w,S,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=i.getRenderTarget(),A=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Dn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const j=f!==Cn&&this.type===Cn,D=f===Cn&&this.type!==Cn;for(let C=0,P=w.length;C<P;C++){const X=w[C],N=X.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const H=N.getFrameExtents();if(s.multiply(H),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,N.mapSize.y=r.y)),N.map===null||j===!0||D===!0){const tt=this.type!==Cn?{minFilter:pe,magFilter:pe}:{};N.map!==null&&N.map.dispose(),N.map=new Fn(s.x,s.y,tt),N.map.texture.name=X.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const $=N.getViewportCount();for(let tt=0;tt<$;tt++){const et=N.getViewport(tt);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),q.viewport(o),N.updateMatrices(X,tt),n=N.getFrustum(),b(S,I,N.camera,X,this.type)}N.isPointLightShadow!==!0&&this.type===Cn&&x(N,I),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,A,G)};function x(w,S){const I=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Fn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(S,null,I,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(S,null,I,p,_,null)}function v(w,S,I,y){let A=null;const G=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(G!==void 0)A=G;else if(A=I.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const q=A.uuid,j=S.uuid;let D=c[q];D===void 0&&(D={},c[q]=D);let C=D[j];C===void 0&&(C=A.clone(),D[j]=C,S.addEventListener("dispose",R)),A=C}if(A.visible=S.visible,A.wireframe=S.wireframe,y===Cn?A.side=S.shadowSide!==null?S.shadowSide:S.side:A.side=S.shadowSide!==null?S.shadowSide:u[S.side],A.alphaMap=S.alphaMap,A.alphaTest=S.alphaTest,A.map=S.map,A.clipShadows=S.clipShadows,A.clippingPlanes=S.clippingPlanes,A.clipIntersection=S.clipIntersection,A.displacementMap=S.displacementMap,A.displacementScale=S.displacementScale,A.displacementBias=S.displacementBias,A.wireframeLinewidth=S.wireframeLinewidth,A.linewidth=S.linewidth,I.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const q=i.properties.get(A);q.light=I}return A}function b(w,S,I,y,A){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===Cn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const j=t.update(w),D=w.material;if(Array.isArray(D)){const C=j.groups;for(let P=0,X=C.length;P<X;P++){const N=C[P],H=D[N.materialIndex];if(H&&H.visible){const $=v(w,H,y,A);w.onBeforeShadow(i,w,S,I,j,$,N),i.renderBufferDirect(I,null,j,$,w,N),w.onAfterShadow(i,w,S,I,j,$,N)}}}else if(D.visible){const C=v(w,D,y,A);w.onBeforeShadow(i,w,S,I,j,C,null),i.renderBufferDirect(I,null,j,C,w,null),w.onAfterShadow(i,w,S,I,j,C,null)}}const q=w.children;for(let j=0,D=q.length;j<D;j++)b(q[j],S,I,y,A)}function R(w){w.target.removeEventListener("dispose",R);for(const I in c){const y=c[I],A=w.target.uuid;A in y&&(y[A].dispose(),delete y[A])}}}function vg(i,t,e){const n=e.isWebGL2;function s(){let L=!1;const lt=new Ae;let ct=null;const Ct=new Ae(0,0,0,0);return{setMask:function(Tt){ct!==Tt&&!L&&(i.colorMask(Tt,Tt,Tt,Tt),ct=Tt)},setLocked:function(Tt){L=Tt},setClear:function(Tt,re,ie,Se,Ne){Ne===!0&&(Tt*=Se,re*=Se,ie*=Se),lt.set(Tt,re,ie,Se),Ct.equals(lt)===!1&&(i.clearColor(Tt,re,ie,Se),Ct.copy(lt))},reset:function(){L=!1,ct=null,Ct.set(-1,0,0,0)}}}function r(){let L=!1,lt=null,ct=null,Ct=null;return{setTest:function(Tt){Tt?Ot(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(Tt){lt!==Tt&&!L&&(i.depthMask(Tt),lt=Tt)},setFunc:function(Tt){if(ct!==Tt){switch(Tt){case Lu:i.depthFunc(i.NEVER);break;case Pu:i.depthFunc(i.ALWAYS);break;case Du:i.depthFunc(i.LESS);break;case xr:i.depthFunc(i.LEQUAL);break;case Iu:i.depthFunc(i.EQUAL);break;case Uu:i.depthFunc(i.GEQUAL);break;case Nu:i.depthFunc(i.GREATER);break;case ku:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=Tt}},setLocked:function(Tt){L=Tt},setClear:function(Tt){Ct!==Tt&&(i.clearDepth(Tt),Ct=Tt)},reset:function(){L=!1,lt=null,ct=null,Ct=null}}}function o(){let L=!1,lt=null,ct=null,Ct=null,Tt=null,re=null,ie=null,Se=null,Ne=null;return{setTest:function(le){L||(le?Ot(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(le){lt!==le&&!L&&(i.stencilMask(le),lt=le)},setFunc:function(le,ke,dn){(ct!==le||Ct!==ke||Tt!==dn)&&(i.stencilFunc(le,ke,dn),ct=le,Ct=ke,Tt=dn)},setOp:function(le,ke,dn){(re!==le||ie!==ke||Se!==dn)&&(i.stencilOp(le,ke,dn),re=le,ie=ke,Se=dn)},setLocked:function(le){L=le},setClear:function(le){Ne!==le&&(i.clearStencil(le),Ne=le)},reset:function(){L=!1,lt=null,ct=null,Ct=null,Tt=null,re=null,ie=null,Se=null,Ne=null}}}const a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,b=null,R=null,w=null,S=null,I=null,y=new Lt(0,0,0),A=0,G=!1,q=null,j=null,D=null,C=null,P=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,H=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),N=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),N=H>=2);let tt=null,et={};const V=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),ht=new Ae().fromArray(V),yt=new Ae().fromArray(K);function vt(L,lt,ct,Ct){const Tt=new Uint8Array(4),re=i.createTexture();i.bindTexture(L,re),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ie=0;ie<ct;ie++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(lt,0,i.RGBA,1,1,Ct,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(lt+ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return re}const kt={};kt[i.TEXTURE_2D]=vt(i.TEXTURE_2D,i.TEXTURE_2D,1),kt[i.TEXTURE_CUBE_MAP]=vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(kt[i.TEXTURE_2D_ARRAY]=vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),kt[i.TEXTURE_3D]=vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ot(i.DEPTH_TEST),l.setFunc(xr),It(!1),T(Ro),Ot(i.CULL_FACE),ut(Dn);function Ot(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function Dt(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function te(L,lt){return p[L]!==lt?(i.bindFramebuffer(L,lt),p[L]=lt,n&&(L===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=lt),L===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=lt)),!0):!1}function F(L,lt){let ct=_,Ct=!1;if(L)if(ct=g.get(lt),ct===void 0&&(ct=[],g.set(lt,ct)),L.isWebGLMultipleRenderTargets){const Tt=L.texture;if(ct.length!==Tt.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let re=0,ie=Tt.length;re<ie;re++)ct[re]=i.COLOR_ATTACHMENT0+re;ct.length=Tt.length,Ct=!0}}else ct[0]!==i.COLOR_ATTACHMENT0&&(ct[0]=i.COLOR_ATTACHMENT0,Ct=!0);else ct[0]!==i.BACK&&(ct[0]=i.BACK,Ct=!0);Ct&&(e.isWebGL2?i.drawBuffers(ct):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ct))}function ue(L){return m!==L?(i.useProgram(L),m=L,!0):!1}const Rt={[ai]:i.FUNC_ADD,[mu]:i.FUNC_SUBTRACT,[gu]:i.FUNC_REVERSE_SUBTRACT};if(n)Rt[Do]=i.MIN,Rt[Io]=i.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(Rt[Do]=L.MIN_EXT,Rt[Io]=L.MAX_EXT)}const Mt={[_u]:i.ZERO,[vu]:i.ONE,[xu]:i.SRC_COLOR,[Ia]:i.SRC_ALPHA,[wu]:i.SRC_ALPHA_SATURATE,[Su]:i.DST_COLOR,[Mu]:i.DST_ALPHA,[yu]:i.ONE_MINUS_SRC_COLOR,[Ua]:i.ONE_MINUS_SRC_ALPHA,[Eu]:i.ONE_MINUS_DST_COLOR,[bu]:i.ONE_MINUS_DST_ALPHA,[Tu]:i.CONSTANT_COLOR,[Au]:i.ONE_MINUS_CONSTANT_COLOR,[Ru]:i.CONSTANT_ALPHA,[Cu]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(L,lt,ct,Ct,Tt,re,ie,Se,Ne,le){if(L===Dn){f===!0&&(Dt(i.BLEND),f=!1);return}if(f===!1&&(Ot(i.BLEND),f=!0),L!==pu){if(L!==x||le!==G){if((v!==ai||w!==ai)&&(i.blendEquation(i.FUNC_ADD),v=ai,w=ai),le)switch(L){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFunc(i.ONE,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Po:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,R=null,S=null,I=null,y.set(0,0,0),A=0,x=L,G=le}return}Tt=Tt||lt,re=re||ct,ie=ie||Ct,(lt!==v||Tt!==w)&&(i.blendEquationSeparate(Rt[lt],Rt[Tt]),v=lt,w=Tt),(ct!==b||Ct!==R||re!==S||ie!==I)&&(i.blendFuncSeparate(Mt[ct],Mt[Ct],Mt[re],Mt[ie]),b=ct,R=Ct,S=re,I=ie),(Se.equals(y)===!1||Ne!==A)&&(i.blendColor(Se.r,Se.g,Se.b,Ne),y.copy(Se),A=Ne),x=L,G=!1}function qt(L,lt){L.side===$e?Dt(i.CULL_FACE):Ot(i.CULL_FACE);let ct=L.side===We;lt&&(ct=!ct),It(ct),L.blending===ji&&L.transparent===!1?ut(Dn):ut(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Ct=L.stencilWrite;c.setTest(Ct),Ct&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),O(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ot(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function It(L){q!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),q=L)}function T(L){L!==du?(Ot(i.CULL_FACE),L!==j&&(L===Ro?i.cullFace(i.BACK):L===fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),j=L}function M(L){L!==D&&(N&&i.lineWidth(L),D=L)}function O(L,lt,ct){L?(Ot(i.POLYGON_OFFSET_FILL),(C!==lt||P!==ct)&&(i.polygonOffset(lt,ct),C=lt,P=ct)):Dt(i.POLYGON_OFFSET_FILL)}function J(L){L?Ot(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function Y(L){L===void 0&&(L=i.TEXTURE0+X-1),tt!==L&&(i.activeTexture(L),tt=L)}function Q(L,lt,ct){ct===void 0&&(tt===null?ct=i.TEXTURE0+X-1:ct=tt);let Ct=et[ct];Ct===void 0&&(Ct={type:void 0,texture:void 0},et[ct]=Ct),(Ct.type!==L||Ct.texture!==lt)&&(tt!==ct&&(i.activeTexture(ct),tt=ct),i.bindTexture(L,lt||kt[L]),Ct.type=L,Ct.texture=lt)}function gt(){const L=et[tt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ot(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Bt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ft(L){ht.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ht.copy(L))}function ne(L){yt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),yt.copy(L))}function ce(L,lt){let ct=u.get(lt);ct===void 0&&(ct=new WeakMap,u.set(lt,ct));let Ct=ct.get(L);Ct===void 0&&(Ct=i.getUniformBlockIndex(lt,L.name),ct.set(L,Ct))}function Vt(L,lt){const Ct=u.get(lt).get(L);h.get(lt)!==Ct&&(i.uniformBlockBinding(lt,Ct,L.__bindingPointIndex),h.set(lt,Ct))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},tt=null,et={},p={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,b=null,R=null,w=null,S=null,I=null,y=new Lt(0,0,0),A=0,G=!1,q=null,j=null,D=null,C=null,P=null,ht.set(0,0,i.canvas.width,i.canvas.height),yt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ot,disable:Dt,bindFramebuffer:te,drawBuffers:F,useProgram:ue,setBlending:ut,setMaterial:qt,setFlipSided:It,setCullFace:T,setLineWidth:M,setPolygonOffset:O,setScissorTest:J,activeTexture:Y,bindTexture:Q,unbindTexture:gt,compressedTexImage2D:ot,compressedTexImage3D:_t,texImage2D:wt,texImage3D:mt,updateUBOMapping:ce,uniformBlockBinding:Vt,texStorage2D:Et,texStorage3D:bt,texSubImage2D:At,texSubImage3D:Bt,compressedTexSubImage2D:Z,compressedTexSubImage3D:ee,scissor:Ft,viewport:ne,reset:st}}function xg(i,t,e,n,s,r,o){const a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return p?new OffscreenCanvas(T,M):Tr("canvas")}function _(T,M,O,J){let Y=1;if((T.width>J||T.height>J)&&(Y=J/Math.max(T.width,T.height)),Y<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const Q=M?wr:Math.floor,gt=Q(Y*T.width),ot=Q(Y*T.height);u===void 0&&(u=g(gt,ot));const _t=O?g(gt,ot):u;return _t.width=gt,_t.height=ot,_t.getContext("2d").drawImage(T,0,0,gt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+gt+"x"+ot+")."),_t}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return za(T.width)&&za(T.height)}function f(T){return a?!1:T.wrapS!==sn||T.wrapT!==sn||T.minFilter!==pe&&T.minFilter!==He}function x(T,M){return T.generateMipmaps&&M&&T.minFilter!==pe&&T.minFilter!==He}function v(T){i.generateMipmap(T)}function b(T,M,O,J,Y=!1){if(a===!1)return M;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=M;if(M===i.RED&&(O===i.FLOAT&&(Q=i.R32F),O===i.HALF_FLOAT&&(Q=i.R16F),O===i.UNSIGNED_BYTE&&(Q=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.R8UI),O===i.UNSIGNED_SHORT&&(Q=i.R16UI),O===i.UNSIGNED_INT&&(Q=i.R32UI),O===i.BYTE&&(Q=i.R8I),O===i.SHORT&&(Q=i.R16I),O===i.INT&&(Q=i.R32I)),M===i.RG&&(O===i.FLOAT&&(Q=i.RG32F),O===i.HALF_FLOAT&&(Q=i.RG16F),O===i.UNSIGNED_BYTE&&(Q=i.RG8)),M===i.RGBA){const gt=Y?Mr:oe.getTransfer(J);O===i.FLOAT&&(Q=i.RGBA32F),O===i.HALF_FLOAT&&(Q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Q=gt===he?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function R(T,M,O){return x(T,O)===!0||T.isFramebufferTexture&&T.minFilter!==pe&&T.minFilter!==He?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function w(T){return T===pe||T===Uo||T===$r?i.NEAREST:i.LINEAR}function S(T){const M=T.target;M.removeEventListener("dispose",S),y(M),M.isVideoTexture&&h.delete(M)}function I(T){const M=T.target;M.removeEventListener("dispose",I),G(M)}function y(T){const M=n.get(T);if(M.__webglInit===void 0)return;const O=T.source,J=d.get(O);if(J){const Y=J[M.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&A(T),Object.keys(J).length===0&&d.delete(O)}n.remove(T)}function A(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const O=T.source,J=d.get(O);delete J[M.__cacheKey],o.memory.textures--}function G(T){const M=T.texture,O=n.get(T),J=n.get(M);if(J.__webglTexture!==void 0&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(O.__webglFramebuffer[Y]))for(let Q=0;Q<O.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(O.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(O.__webglFramebuffer[Y]);O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer[Y])}else{if(Array.isArray(O.__webglFramebuffer))for(let Y=0;Y<O.__webglFramebuffer.length;Y++)i.deleteFramebuffer(O.__webglFramebuffer[Y]);else i.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&i.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Y=0;Y<O.__webglColorRenderbuffer.length;Y++)O.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(O.__webglColorRenderbuffer[Y]);O.__webglDepthRenderbuffer&&i.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Y=0,Q=M.length;Y<Q;Y++){const gt=n.get(M[Y]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(M[Y])}n.remove(M),n.remove(T)}let q=0;function j(){q=0}function D(){const T=q;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),q+=1,T}function C(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function P(T,M){const O=n.get(T);if(T.isVideoTexture&&qt(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(O,T,M);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function X(T,M){const O=n.get(T);if(T.version>0&&O.__version!==T.version){ht(O,T,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function N(T,M){const O=n.get(T);if(T.version>0&&O.__version!==T.version){ht(O,T,M);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function H(T,M){const O=n.get(T);if(T.version>0&&O.__version!==T.version){yt(O,T,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}const $={[yr]:i.REPEAT,[sn]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},tt={[pe]:i.NEAREST,[Uo]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[He]:i.LINEAR,[Xu]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},et={[id]:i.NEVER,[cd]:i.ALWAYS,[sd]:i.LESS,[Qc]:i.LEQUAL,[rd]:i.EQUAL,[ld]:i.GEQUAL,[ad]:i.GREATER,[od]:i.NOTEQUAL};function V(T,M,O){if(O?(i.texParameteri(T,i.TEXTURE_WRAP_S,$[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,$[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,$[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,tt[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,tt[M.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==sn||M.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,w(M.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==pe&&M.minFilter!==He&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,et[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const J=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===pe||M.minFilter!==$r&&M.minFilter!==di||M.type===Yn&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===es&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(T,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function K(T,M){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",S));const J=M.source;let Y=d.get(J);Y===void 0&&(Y={},d.set(J,Y));const Q=C(M);if(Q!==T.__cacheKey){Y[Q]===void 0&&(Y[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Y[Q].usedTimes++;const gt=Y[T.__cacheKey];gt!==void 0&&(Y[T.__cacheKey].usedTimes--,gt.usedTimes===0&&A(M)),T.__cacheKey=Q,T.__webglTexture=Y[Q].texture}return O}function ht(T,M,O){let J=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=i.TEXTURE_3D);const Y=K(T,M),Q=M.source;e.bindTexture(J,T.__webglTexture,i.TEXTURE0+O);const gt=n.get(Q);if(Q.version!==gt.__version||Y===!0){e.activeTexture(i.TEXTURE0+O);const ot=oe.getPrimaries(oe.workingColorSpace),_t=M.colorSpace===Ue?null:oe.getPrimaries(M.colorSpace),At=M.colorSpace===Ue||ot===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Bt=f(M)&&m(M.image)===!1;let Z=_(M.image,Bt,!1,s.maxTextureSize);Z=It(M,Z);const ee=m(Z)||a,Et=r.convert(M.format,M.colorSpace);let bt=r.convert(M.type),wt=b(M.internalFormat,Et,bt,M.colorSpace,M.isVideoTexture);V(J,M,ee);let mt;const Ft=M.mipmaps,ne=a&&M.isVideoTexture!==!0&&wt!==Kc,ce=gt.__version===void 0||Y===!0,Vt=R(M,Z,ee);if(M.isDepthTexture)wt=i.DEPTH_COMPONENT,a?M.type===Yn?wt=i.DEPTH_COMPONENT32F:M.type===$n?wt=i.DEPTH_COMPONENT24:M.type===ci?wt=i.DEPTH24_STENCIL8:wt=i.DEPTH_COMPONENT16:M.type===Yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===hi&&wt===i.DEPTH_COMPONENT&&M.type!==lo&&M.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=$n,bt=r.convert(M.type)),M.format===ns&&wt===i.DEPTH_COMPONENT&&(wt=i.DEPTH_STENCIL,M.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ci,bt=r.convert(M.type))),ce&&(ne?e.texStorage2D(i.TEXTURE_2D,1,wt,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,wt,Z.width,Z.height,0,Et,bt,null));else if(M.isDataTexture)if(Ft.length>0&&ee){ne&&ce&&e.texStorage2D(i.TEXTURE_2D,Vt,wt,Ft[0].width,Ft[0].height);for(let st=0,L=Ft.length;st<L;st++)mt=Ft[st],ne?e.texSubImage2D(i.TEXTURE_2D,st,0,0,mt.width,mt.height,Et,bt,mt.data):e.texImage2D(i.TEXTURE_2D,st,wt,mt.width,mt.height,0,Et,bt,mt.data);M.generateMipmaps=!1}else ne?(ce&&e.texStorage2D(i.TEXTURE_2D,Vt,wt,Z.width,Z.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,Et,bt,Z.data)):e.texImage2D(i.TEXTURE_2D,0,wt,Z.width,Z.height,0,Et,bt,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ne&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,wt,Ft[0].width,Ft[0].height,Z.depth);for(let st=0,L=Ft.length;st<L;st++)mt=Ft[st],M.format!==Ve?Et!==null?ne?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,mt.width,mt.height,Z.depth,Et,mt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,wt,mt.width,mt.height,Z.depth,0,mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,mt.width,mt.height,Z.depth,Et,bt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,wt,mt.width,mt.height,Z.depth,0,Et,bt,mt.data)}else{ne&&ce&&e.texStorage2D(i.TEXTURE_2D,Vt,wt,Ft[0].width,Ft[0].height);for(let st=0,L=Ft.length;st<L;st++)mt=Ft[st],M.format!==Ve?Et!==null?ne?e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,mt.width,mt.height,Et,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,wt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?e.texSubImage2D(i.TEXTURE_2D,st,0,0,mt.width,mt.height,Et,bt,mt.data):e.texImage2D(i.TEXTURE_2D,st,wt,mt.width,mt.height,0,Et,bt,mt.data)}else if(M.isDataArrayTexture)ne?(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,wt,Z.width,Z.height,Z.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Et,bt,Z.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,Z.width,Z.height,Z.depth,0,Et,bt,Z.data);else if(M.isData3DTexture)ne?(ce&&e.texStorage3D(i.TEXTURE_3D,Vt,wt,Z.width,Z.height,Z.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Et,bt,Z.data)):e.texImage3D(i.TEXTURE_3D,0,wt,Z.width,Z.height,Z.depth,0,Et,bt,Z.data);else if(M.isFramebufferTexture){if(ce)if(ne)e.texStorage2D(i.TEXTURE_2D,Vt,wt,Z.width,Z.height);else{let st=Z.width,L=Z.height;for(let lt=0;lt<Vt;lt++)e.texImage2D(i.TEXTURE_2D,lt,wt,st,L,0,Et,bt,null),st>>=1,L>>=1}}else if(Ft.length>0&&ee){ne&&ce&&e.texStorage2D(i.TEXTURE_2D,Vt,wt,Ft[0].width,Ft[0].height);for(let st=0,L=Ft.length;st<L;st++)mt=Ft[st],ne?e.texSubImage2D(i.TEXTURE_2D,st,0,0,Et,bt,mt):e.texImage2D(i.TEXTURE_2D,st,wt,Et,bt,mt);M.generateMipmaps=!1}else ne?(ce&&e.texStorage2D(i.TEXTURE_2D,Vt,wt,Z.width,Z.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,bt,Z)):e.texImage2D(i.TEXTURE_2D,0,wt,Et,bt,Z);x(M,ee)&&v(J),gt.__version=Q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function yt(T,M,O){if(M.image.length!==6)return;const J=K(T,M),Y=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const Q=n.get(Y);if(Y.version!==Q.__version||J===!0){e.activeTexture(i.TEXTURE0+O);const gt=oe.getPrimaries(oe.workingColorSpace),ot=M.colorSpace===Ue?null:oe.getPrimaries(M.colorSpace),_t=M.colorSpace===Ue||gt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const At=M.isCompressedTexture||M.image[0].isCompressedTexture,Bt=M.image[0]&&M.image[0].isDataTexture,Z=[];for(let st=0;st<6;st++)!At&&!Bt?Z[st]=_(M.image[st],!1,!0,s.maxCubemapSize):Z[st]=Bt?M.image[st].image:M.image[st],Z[st]=It(M,Z[st]);const ee=Z[0],Et=m(ee)||a,bt=r.convert(M.format,M.colorSpace),wt=r.convert(M.type),mt=b(M.internalFormat,bt,wt,M.colorSpace),Ft=a&&M.isVideoTexture!==!0,ne=Q.__version===void 0||J===!0;let ce=R(M,ee,Et);V(i.TEXTURE_CUBE_MAP,M,Et);let Vt;if(At){Ft&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ce,mt,ee.width,ee.height);for(let st=0;st<6;st++){Vt=Z[st].mipmaps;for(let L=0;L<Vt.length;L++){const lt=Vt[L];M.format!==Ve?bt!==null?Ft?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,L,0,0,lt.width,lt.height,bt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,L,mt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,L,0,0,lt.width,lt.height,bt,wt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,L,mt,lt.width,lt.height,0,bt,wt,lt.data)}}}else{Vt=M.mipmaps,Ft&&ne&&(Vt.length>0&&ce++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ce,mt,Z[0].width,Z[0].height));for(let st=0;st<6;st++)if(Bt){Ft?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Z[st].width,Z[st].height,bt,wt,Z[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,mt,Z[st].width,Z[st].height,0,bt,wt,Z[st].data);for(let L=0;L<Vt.length;L++){const ct=Vt[L].image[st].image;Ft?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,L+1,0,0,ct.width,ct.height,bt,wt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,L+1,mt,ct.width,ct.height,0,bt,wt,ct.data)}}else{Ft?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,bt,wt,Z[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,mt,bt,wt,Z[st]);for(let L=0;L<Vt.length;L++){const lt=Vt[L];Ft?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,L+1,0,0,bt,wt,lt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,L+1,mt,bt,wt,lt.image[st])}}}x(M,Et)&&v(i.TEXTURE_CUBE_MAP),Q.__version=Y.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function vt(T,M,O,J,Y,Q){const gt=r.convert(O.format,O.colorSpace),ot=r.convert(O.type),_t=b(O.internalFormat,gt,ot,O.colorSpace);if(!n.get(M).__hasExternalTextures){const Bt=Math.max(1,M.width>>Q),Z=Math.max(1,M.height>>Q);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,Q,_t,Bt,Z,M.depth,0,gt,ot,null):e.texImage2D(Y,Q,_t,Bt,Z,0,gt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),ut(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Y,n.get(O).__webglTexture,0,Mt(M)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Y,n.get(O).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(T,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let J=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(O||ut(M)){const Y=M.depthTexture;Y&&Y.isDepthTexture&&(Y.type===Yn?J=i.DEPTH_COMPONENT32F:Y.type===$n&&(J=i.DEPTH_COMPONENT24));const Q=Mt(M);ut(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,J,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,J,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,J,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){const J=Mt(M);O&&ut(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,M.width,M.height):ut(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const J=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Y=0;Y<J.length;Y++){const Q=J[Y],gt=r.convert(Q.format,Q.colorSpace),ot=r.convert(Q.type),_t=b(Q.internalFormat,gt,ot,Q.colorSpace),At=Mt(M);O&&ut(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,_t,M.width,M.height):ut(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,_t,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,_t,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),P(M.depthTexture,0);const J=n.get(M.depthTexture).__webglTexture,Y=Mt(M);if(M.depthTexture.format===hi)ut(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(M.depthTexture.format===ns)ut(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Dt(T){const M=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ot(M.__webglFramebuffer,T)}else if(O){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]=i.createRenderbuffer(),kt(M.__webglDepthbuffer[J],T,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),kt(M.__webglDepthbuffer,T,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(T,M,O){const J=n.get(T);M!==void 0&&vt(J.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Dt(T)}function F(T){const M=T.texture,O=n.get(T),J=n.get(M);T.addEventListener("dispose",I),T.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=M.version,o.memory.textures++);const Y=T.isWebGLCubeRenderTarget===!0,Q=T.isWebGLMultipleRenderTargets===!0,gt=m(T)||a;if(Y){O.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(a&&M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[ot]=[];for(let _t=0;_t<M.mipmaps.length;_t++)O.__webglFramebuffer[ot][_t]=i.createFramebuffer()}else O.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let ot=0;ot<M.mipmaps.length;ot++)O.__webglFramebuffer[ot]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Q)if(s.drawBuffers){const ot=T.texture;for(let _t=0,At=ot.length;_t<At;_t++){const Bt=n.get(ot[_t]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&ut(T)===!1){const ot=Q?M:[M];O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let _t=0;_t<ot.length;_t++){const At=ot[_t];O.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[_t]);const Bt=r.convert(At.format,At.colorSpace),Z=r.convert(At.type),ee=b(At.internalFormat,Bt,Z,At.colorSpace,T.isXRRenderTarget===!0),Et=Mt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,ee,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,O.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),kt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),V(i.TEXTURE_CUBE_MAP,M,gt);for(let ot=0;ot<6;ot++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)vt(O.__webglFramebuffer[ot][_t],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,_t);else vt(O.__webglFramebuffer[ot],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);x(M,gt)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){const ot=T.texture;for(let _t=0,At=ot.length;_t<At;_t++){const Bt=ot[_t],Z=n.get(Bt);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture),V(i.TEXTURE_2D,Bt,gt),vt(O.__webglFramebuffer,T,Bt,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),x(Bt,gt)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ot=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,J.__webglTexture),V(ot,M,gt),a&&M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)vt(O.__webglFramebuffer[_t],T,M,i.COLOR_ATTACHMENT0,ot,_t);else vt(O.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,ot,0);x(M,gt)&&v(ot),e.unbindTexture()}T.depthBuffer&&Dt(T)}function ue(T){const M=m(T)||a,O=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let J=0,Y=O.length;J<Y;J++){const Q=O[J];if(x(Q,M)){const gt=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ot=n.get(Q).__webglTexture;e.bindTexture(gt,ot),v(gt),e.unbindTexture()}}}function Rt(T){if(a&&T.samples>0&&ut(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],O=T.width,J=T.height;let Y=i.COLOR_BUFFER_BIT;const Q=[],gt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=n.get(T),_t=T.isWebGLMultipleRenderTargets===!0;if(_t)for(let At=0;At<M.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let At=0;At<M.length;At++){Q.push(i.COLOR_ATTACHMENT0+At),T.depthBuffer&&Q.push(gt);const Bt=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(Bt===!1&&(T.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),_t&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ot.__webglColorRenderbuffer[At]),Bt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[gt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[gt])),_t){const Z=n.get(M[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,O,J,0,0,O,J,Y,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let At=0;At<M.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,ot.__webglColorRenderbuffer[At]);const Bt=n.get(M[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function Mt(T){return Math.min(s.maxSamples,T.samples)}function ut(T){const M=n.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function qt(T){const M=o.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function It(T,M){const O=T.colorSpace,J=T.format,Y=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Ba||O!==bn&&O!==Ue&&(oe.getTransfer(O)===he?a===!1?t.has("EXT_sRGB")===!0&&J===Ve?(T.format=Ba,T.minFilter=He,T.generateMipmaps=!1):M=eh.sRGBToLinear(M):(J!==Ve||Y!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}this.allocateTextureUnit=D,this.resetTextureUnits=j,this.setTexture2D=P,this.setTexture2DArray=X,this.setTexture3D=N,this.setTextureCube=H,this.rebindTextures=te,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=ut}function yg(i,t,e){const n=e.isWebGL2;function s(r,o=Ue){let a;const l=oe.getTransfer(o);if(r===Mn)return i.UNSIGNED_BYTE;if(r===Xc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===qc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===qu)return i.BYTE;if(r===$u)return i.SHORT;if(r===lo)return i.UNSIGNED_SHORT;if(r===Wc)return i.INT;if(r===$n)return i.UNSIGNED_INT;if(r===Yn)return i.FLOAT;if(r===es)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Yu)return i.ALPHA;if(r===Ve)return i.RGBA;if(r===ju)return i.LUMINANCE;if(r===Ku)return i.LUMINANCE_ALPHA;if(r===hi)return i.DEPTH_COMPONENT;if(r===ns)return i.DEPTH_STENCIL;if(r===Ba)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Zu)return i.RED;if(r===$c)return i.RED_INTEGER;if(r===Ju)return i.RG;if(r===Yc)return i.RG_INTEGER;if(r===jc)return i.RGBA_INTEGER;if(r===Yr||r===jr||r===Kr||r===Zr)if(l===he)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Yr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Yr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Kr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===No||r===ko||r===Fo||r===Oo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===No)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ko)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Oo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Bo||r===zo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Bo)return l===he?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===zo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ho||r===Go||r===Vo||r===Wo||r===Xo||r===qo||r===$o||r===Yo||r===jo||r===Ko||r===Zo||r===Jo||r===Qo||r===tl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ho)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Go)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$o)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ko)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===tl)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jr||r===el||r===nl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Jr)return l===he?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===el)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qu||r===il||r===sl||r===rl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Jr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===il)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ci?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Mg extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class yn extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bg={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new yn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Sg extends ss{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=e.getContextAttributes();let m=null,f=null;const x=[],v=[],b=new Xt;let R=null;const w=new nn;w.layers.enable(1),w.viewport=new Ae;const S=new nn;S.layers.enable(2),S.viewport=new Ae;const I=[w,S],y=new Mg;y.layers.enable(1),y.layers.enable(2);let A=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=x[V];return K===void 0&&(K=new Ma,x[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=x[V];return K===void 0&&(K=new Ma,x[V]=K),K.getGripSpace()},this.getHand=function(V){let K=x[V];return K===void 0&&(K=new Ma,x[V]=K),K.getHandSpace()};function q(V){const K=v.indexOf(V.inputSource);if(K===-1)return;const ht=x[K];ht!==void 0&&(ht.update(V.inputSource,V.frame,c||o),ht.dispatchEvent({type:V.type,data:V.inputSource}))}function j(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",D);for(let V=0;V<x.length;V++){const K=v[V];K!==null&&(v[V]=null,x[V].disconnect(K))}A=null,G=null,t.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",j),s.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(b),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Fn(p.framebufferWidth,p.framebufferHeight,{format:Ve,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,ht=null,yt=null;_.depth&&(yt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=_.stencil?ns:hi,ht=_.stencil?ci:$n);const vt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new Fn(d.textureWidth,d.textureHeight,{format:Ve,type:Mn,depthTexture:new ph(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const kt=t.properties.get(f);kt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(V){for(let K=0;K<V.removed.length;K++){const ht=V.removed[K],yt=v.indexOf(ht);yt>=0&&(v[yt]=null,x[yt].disconnect(ht))}for(let K=0;K<V.added.length;K++){const ht=V.added[K];let yt=v.indexOf(ht);if(yt===-1){for(let kt=0;kt<x.length;kt++)if(kt>=v.length){v.push(ht),yt=kt;break}else if(v[kt]===null){v[kt]=ht,yt=kt;break}if(yt===-1)break}const vt=x[yt];vt&&vt.connect(ht)}}const C=new U,P=new U;function X(V,K,ht){C.setFromMatrixPosition(K.matrixWorld),P.setFromMatrixPosition(ht.matrixWorld);const yt=C.distanceTo(P),vt=K.projectionMatrix.elements,kt=ht.projectionMatrix.elements,Ot=vt[14]/(vt[10]-1),Dt=vt[14]/(vt[10]+1),te=(vt[9]+1)/vt[5],F=(vt[9]-1)/vt[5],ue=(vt[8]-1)/vt[0],Rt=(kt[8]+1)/kt[0],Mt=Ot*ue,ut=Ot*Rt,qt=yt/(-ue+Rt),It=qt*-ue;K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(It),V.translateZ(qt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const T=Ot+qt,M=Dt+qt,O=Mt-It,J=ut+(yt-It),Y=te*Dt/M*T,Q=F*Dt/M*T;V.projectionMatrix.makePerspective(O,J,Y,Q,T,M),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function N(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;y.near=S.near=w.near=V.near,y.far=S.far=w.far=V.far,(A!==y.near||G!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,G=y.far);const K=V.parent,ht=y.cameras;N(y,K);for(let yt=0;yt<ht.length;yt++)N(ht[yt],K);ht.length===2?X(y,w,S):y.projectionMatrix.copy(w.projectionMatrix),H(V,y,K)};function H(V,K,ht){ht===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(ht.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ws*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let $=null;function tt(V,K){if(h=K.getViewerPose(c||o),g=K,h!==null){const ht=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let yt=!1;ht.length!==y.cameras.length&&(y.cameras.length=0,yt=!0);for(let vt=0;vt<ht.length;vt++){const kt=ht[vt];let Ot=null;if(p!==null)Ot=p.getViewport(kt);else{const te=u.getViewSubImage(d,kt);Ot=te.viewport,vt===0&&(t.setRenderTargetTextures(f,te.colorTexture,d.ignoreDepthValues?void 0:te.depthStencilTexture),t.setRenderTarget(f))}let Dt=I[vt];Dt===void 0&&(Dt=new nn,Dt.layers.enable(vt),Dt.viewport=new Ae,I[vt]=Dt),Dt.matrix.fromArray(kt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(kt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),vt===0&&(y.matrix.copy(Dt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),yt===!0&&y.cameras.push(Dt)}}for(let ht=0;ht<x.length;ht++){const yt=v[ht],vt=x[ht];yt!==null&&vt!==void 0&&vt.update(yt,K,c||o)}$&&$(V,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const et=new fh;et.setAnimationLoop(tt),this.setAnimationLoop=function(V){$=V},this.dispose=function(){}}}function Eg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,lh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,x,v,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,x,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===We&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===We&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===We&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wg(i,t,e,n){let s={},r={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const b=v.program;n.uniformBlockBinding(x,b)}function c(x,v){let b=s[x.id];b===void 0&&(g(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",m));const R=v.program;n.updateUBOMapping(x,R);const w=t.render.frame;r[x.id]!==w&&(d(x),r[x.id]=w)}function h(x){const v=u();x.__bindingPointIndex=v;const b=i.createBuffer(),R=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,b),b}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=s[x.id],b=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,S=b.length;w<S;w++){const I=Array.isArray(b[w])?b[w]:[b[w]];for(let y=0,A=I.length;y<A;y++){const G=I[y];if(p(G,w,y,R)===!0){const q=G.__offset,j=Array.isArray(G.value)?G.value:[G.value];let D=0;for(let C=0;C<j.length;C++){const P=j[C],X=_(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,q+D,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,D),D+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,G.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,v,b,R){const w=x.value,S=v+"_"+b;if(R[S]===void 0)return typeof w=="number"||typeof w=="boolean"?R[S]=w:R[S]=w.clone(),!0;{const I=R[S];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return R[S]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(x){const v=x.uniforms;let b=0;const R=16;for(let S=0,I=v.length;S<I;S++){const y=Array.isArray(v[S])?v[S]:[v[S]];for(let A=0,G=y.length;A<G;A++){const q=y[A],j=Array.isArray(q.value)?q.value:[q.value];for(let D=0,C=j.length;D<C;D++){const P=j[D],X=_(P),N=b%R;N!==0&&R-N<X.boundary&&(b+=R-N),q.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=b,b+=X.storage}}}const w=b%R;return w>0&&(b+=R-w),x.__size=b,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Mh{constructor(t={}){const{canvas:e=Ed(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this._useLegacyLights=!1,this.toneMapping=jn,this.toneMappingExposure=1;const v=this;let b=!1,R=0,w=0,S=null,I=-1,y=null;const A=new Ae,G=new Ae;let q=null;const j=new Lt(0);let D=0,C=e.width,P=e.height,X=1,N=null,H=null;const $=new Ae(0,0,C,P),tt=new Ae(0,0,C,P);let et=!1;const V=new po;let K=!1,ht=!1,yt=null;const vt=new ge,kt=new Xt,Ot=new U,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return S===null?X:1}let F=n;function ue(E,k){for(let z=0;z<E.length;z++){const W=E[z],B=e.getContext(W,k);if(B!==null)return B}return null}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oo}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",lt,!1),F===null){const k=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&k.shift(),F=ue(k,E),F===null)throw ue(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Rt,Mt,ut,qt,It,T,M,O,J,Y,Q,gt,ot,_t,At,Bt,Z,ee,Et,bt,wt,mt,Ft,ne;function ce(){Rt=new km(F),Mt=new Lm(F,Rt,t),Rt.init(Mt),mt=new yg(F,Rt,Mt),ut=new vg(F,Rt,Mt),qt=new Bm(F),It=new rg,T=new xg(F,Rt,ut,It,Mt,mt,qt),M=new Dm(v),O=new Nm(v),J=new qd(F,Mt),Ft=new Rm(F,Rt,J,Mt),Y=new Fm(F,J,qt,Ft),Q=new Vm(F,Y,J,qt),Et=new Gm(F,Mt,T),Bt=new Pm(It),gt=new sg(v,M,O,Rt,Mt,Ft,Bt),ot=new Eg(v,It),_t=new og,At=new fg(Rt,Mt),ee=new Am(v,M,O,ut,Q,d,l),Z=new _g(v,Q,Mt),ne=new wg(F,qt,Mt,ut),bt=new Cm(F,Rt,qt,Mt),wt=new Om(F,Rt,qt,Mt),qt.programs=gt.programs,v.capabilities=Mt,v.extensions=Rt,v.properties=It,v.renderLists=_t,v.shadowMap=Z,v.state=ut,v.info=qt}ce();const Vt=new Sg(v,F);this.xr=Vt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(C,P,!1))},this.getSize=function(E){return E.set(C,P)},this.setSize=function(E,k,z=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,P=k,e.width=Math.floor(E*X),e.height=Math.floor(k*X),z===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(C*X,P*X).floor()},this.setDrawingBufferSize=function(E,k,z){C=E,P=k,X=z,e.width=Math.floor(E*z),e.height=Math.floor(k*z),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,k,z,W){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,k,z,W),ut.viewport(A.copy($).multiplyScalar(X).floor())},this.getScissor=function(E){return E.copy(tt)},this.setScissor=function(E,k,z,W){E.isVector4?tt.set(E.x,E.y,E.z,E.w):tt.set(E,k,z,W),ut.scissor(G.copy(tt).multiplyScalar(X).floor())},this.getScissorTest=function(){return et},this.setScissorTest=function(E){ut.setScissorTest(et=E)},this.setOpaqueSort=function(E){N=E},this.setTransparentSort=function(E){H=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,k=!0,z=!0){let W=0;if(E){let B=!1;if(S!==null){const ft=S.texture.format;B=ft===jc||ft===Yc||ft===$c}if(B){const ft=S.texture.type,St=ft===Mn||ft===$n||ft===lo||ft===ci||ft===Xc||ft===qc,Ut=ee.getClearColor(),Nt=ee.getClearAlpha(),jt=Ut.r,Ht=Ut.g,Wt=Ut.b;St?(p[0]=jt,p[1]=Ht,p[2]=Wt,p[3]=Nt,F.clearBufferuiv(F.COLOR,0,p)):(g[0]=jt,g[1]=Ht,g[2]=Wt,g[3]=Nt,F.clearBufferiv(F.COLOR,0,g))}else W|=F.COLOR_BUFFER_BIT}k&&(W|=F.DEPTH_BUFFER_BIT),z&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),_t.dispose(),At.dispose(),It.dispose(),M.dispose(),O.dispose(),Q.dispose(),Ft.dispose(),ne.dispose(),gt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Ne),Vt.removeEventListener("sessionend",le),yt&&(yt.dispose(),yt=null),ke.stop()};function st(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=qt.autoReset,k=Z.enabled,z=Z.autoUpdate,W=Z.needsUpdate,B=Z.type;ce(),qt.autoReset=E,Z.enabled=k,Z.autoUpdate=z,Z.needsUpdate=W,Z.type=B}function lt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ct(E){const k=E.target;k.removeEventListener("dispose",ct),Ct(k)}function Ct(E){Tt(E),It.remove(E)}function Tt(E){const k=It.get(E).programs;k!==void 0&&(k.forEach(function(z){gt.releaseProgram(z)}),E.isShaderMaterial&&gt.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,z,W,B,ft){k===null&&(k=Dt);const St=B.isMesh&&B.matrixWorld.determinant()<0,Ut=ou(E,k,z,W,B);ut.setMaterial(W,St);let Nt=z.index,jt=1;if(W.wireframe===!0){if(Nt=Y.getWireframeAttribute(z),Nt===void 0)return;jt=2}const Ht=z.drawRange,Wt=z.attributes.position;let _e=Ht.start*jt,je=(Ht.start+Ht.count)*jt;ft!==null&&(_e=Math.max(_e,ft.start*jt),je=Math.min(je,(ft.start+ft.count)*jt)),Nt!==null?(_e=Math.max(_e,0),je=Math.min(je,Nt.count)):Wt!=null&&(_e=Math.max(_e,0),je=Math.min(je,Wt.count));const Ee=je-_e;if(Ee<0||Ee===1/0)return;Ft.setup(B,W,Ut,z,Nt);let Sn,de=bt;if(Nt!==null&&(Sn=J.get(Nt),de=wt,de.setIndex(Sn)),B.isMesh)W.wireframe===!0?(ut.setLineWidth(W.wireframeLinewidth*te()),de.setMode(F.LINES)):de.setMode(F.TRIANGLES);else if(B.isLine){let Kt=W.linewidth;Kt===void 0&&(Kt=1),ut.setLineWidth(Kt*te()),B.isLineSegments?de.setMode(F.LINES):B.isLineLoop?de.setMode(F.LINE_LOOP):de.setMode(F.LINE_STRIP)}else B.isPoints?de.setMode(F.POINTS):B.isSprite&&de.setMode(F.TRIANGLES);if(B.isBatchedMesh)de.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)de.renderInstances(_e,Ee,B.count);else if(z.isInstancedBufferGeometry){const Kt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Gr=Math.min(z.instanceCount,Kt);de.renderInstances(_e,Ee,Gr)}else de.render(_e,Ee)};function re(E,k,z){E.transparent===!0&&E.side===$e&&E.forceSinglePass===!1?(E.side=We,E.needsUpdate=!0,Ls(E,k,z),E.side=kn,E.needsUpdate=!0,Ls(E,k,z),E.side=$e):Ls(E,k,z)}this.compile=function(E,k,z=null){z===null&&(z=E),m=At.get(z),m.init(),x.push(m),z.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),E!==z&&E.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(v._useLegacyLights);const W=new Set;return E.traverse(function(B){const ft=B.material;if(ft)if(Array.isArray(ft))for(let St=0;St<ft.length;St++){const Ut=ft[St];re(Ut,z,B),W.add(Ut)}else re(ft,z,B),W.add(ft)}),x.pop(),m=null,W},this.compileAsync=function(E,k,z=null){const W=this.compile(E,k,z);return new Promise(B=>{function ft(){if(W.forEach(function(St){It.get(St).currentProgram.isReady()&&W.delete(St)}),W.size===0){B(E);return}setTimeout(ft,10)}Rt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let ie=null;function Se(E){ie&&ie(E)}function Ne(){ke.stop()}function le(){ke.start()}const ke=new fh;ke.setAnimationLoop(Se),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(E){ie=E,Vt.setAnimationLoop(E),E===null?ke.stop():ke.start()},Vt.addEventListener("sessionstart",Ne),Vt.addEventListener("sessionend",le),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(k),k=Vt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,k,S),m=At.get(E,x.length),m.init(),x.push(m),vt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),V.setFromProjectionMatrix(vt),ht=this.localClippingEnabled,K=Bt.init(this.clippingPlanes,ht),_=_t.get(E,f.length),_.init(),f.push(_),dn(E,k,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(N,H),this.info.render.frame++,K===!0&&Bt.beginShadows();const z=m.state.shadowsArray;if(Z.render(z,E,k),K===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(_,E),m.setupLights(v._useLegacyLights),k.isArrayCamera){const W=k.cameras;for(let B=0,ft=W.length;B<ft;B++){const St=W[B];Mo(_,E,St,St.viewport)}}else Mo(_,E,k);S!==null&&(T.updateMultisampleRenderTarget(S),T.updateRenderTargetMipmap(S)),E.isScene===!0&&E.onAfterRender(v,E,k),Ft.resetDefaultState(),I=-1,y=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function dn(E,k,z,W){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){W&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(vt);const St=Q.update(E),Ut=E.material;Ut.visible&&_.push(E,St,Ut,z,Ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||V.intersectsObject(E))){const St=Q.update(E),Ut=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ot.copy(St.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(vt)),Array.isArray(Ut)){const Nt=St.groups;for(let jt=0,Ht=Nt.length;jt<Ht;jt++){const Wt=Nt[jt],_e=Ut[Wt.materialIndex];_e&&_e.visible&&_.push(E,St,_e,z,Ot.z,Wt)}}else Ut.visible&&_.push(E,St,Ut,z,Ot.z,null)}}const ft=E.children;for(let St=0,Ut=ft.length;St<Ut;St++)dn(ft[St],k,z,W)}function Mo(E,k,z,W){const B=E.opaque,ft=E.transmissive,St=E.transparent;m.setupLightsView(z),K===!0&&Bt.setGlobalState(v.clippingPlanes,z),ft.length>0&&au(B,ft,k,z),W&&ut.viewport(A.copy(W)),B.length>0&&Cs(B,k,z),ft.length>0&&Cs(ft,k,z),St.length>0&&Cs(St,k,z),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function au(E,k,z,W){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const ft=Mt.isWebGL2;yt===null&&(yt=new Fn(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")?es:Mn,minFilter:di,samples:ft?4:0})),v.getDrawingBufferSize(kt),ft?yt.setSize(kt.x,kt.y):yt.setSize(wr(kt.x),wr(kt.y));const St=v.getRenderTarget();v.setRenderTarget(yt),v.getClearColor(j),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Ut=v.toneMapping;v.toneMapping=jn,Cs(E,z,W),T.updateMultisampleRenderTarget(yt),T.updateRenderTargetMipmap(yt);let Nt=!1;for(let jt=0,Ht=k.length;jt<Ht;jt++){const Wt=k[jt],_e=Wt.object,je=Wt.geometry,Ee=Wt.material,Sn=Wt.group;if(Ee.side===$e&&_e.layers.test(W.layers)){const de=Ee.side;Ee.side=We,Ee.needsUpdate=!0,bo(_e,z,W,je,Ee,Sn),Ee.side=de,Ee.needsUpdate=!0,Nt=!0}}Nt===!0&&(T.updateMultisampleRenderTarget(yt),T.updateRenderTargetMipmap(yt)),v.setRenderTarget(St),v.setClearColor(j,D),v.toneMapping=Ut}function Cs(E,k,z){const W=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ft=E.length;B<ft;B++){const St=E[B],Ut=St.object,Nt=St.geometry,jt=W===null?St.material:W,Ht=St.group;Ut.layers.test(z.layers)&&bo(Ut,k,z,Nt,jt,Ht)}}function bo(E,k,z,W,B,ft){E.onBeforeRender(v,k,z,W,B,ft),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(v,k,z,W,E,ft),B.transparent===!0&&B.side===$e&&B.forceSinglePass===!1?(B.side=We,B.needsUpdate=!0,v.renderBufferDirect(z,k,W,B,E,ft),B.side=kn,B.needsUpdate=!0,v.renderBufferDirect(z,k,W,B,E,ft),B.side=$e):v.renderBufferDirect(z,k,W,B,E,ft),E.onAfterRender(v,k,z,W,B,ft)}function Ls(E,k,z){k.isScene!==!0&&(k=Dt);const W=It.get(E),B=m.state.lights,ft=m.state.shadowsArray,St=B.state.version,Ut=gt.getParameters(E,B.state,ft,k,z),Nt=gt.getProgramCacheKey(Ut);let jt=W.programs;W.environment=E.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(E.isMeshStandardMaterial?O:M).get(E.envMap||W.environment),jt===void 0&&(E.addEventListener("dispose",ct),jt=new Map,W.programs=jt);let Ht=jt.get(Nt);if(Ht!==void 0){if(W.currentProgram===Ht&&W.lightsStateVersion===St)return Eo(E,Ut),Ht}else Ut.uniforms=gt.getUniforms(E),E.onBuild(z,Ut,v),E.onBeforeCompile(Ut,v),Ht=gt.acquireProgram(Ut,Nt),jt.set(Nt,Ht),W.uniforms=Ut.uniforms;const Wt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Wt.clippingPlanes=Bt.uniform),Eo(E,Ut),W.needsLights=cu(E),W.lightsStateVersion=St,W.needsLights&&(Wt.ambientLightColor.value=B.state.ambient,Wt.lightProbe.value=B.state.probe,Wt.directionalLights.value=B.state.directional,Wt.directionalLightShadows.value=B.state.directionalShadow,Wt.spotLights.value=B.state.spot,Wt.spotLightShadows.value=B.state.spotShadow,Wt.rectAreaLights.value=B.state.rectArea,Wt.ltc_1.value=B.state.rectAreaLTC1,Wt.ltc_2.value=B.state.rectAreaLTC2,Wt.pointLights.value=B.state.point,Wt.pointLightShadows.value=B.state.pointShadow,Wt.hemisphereLights.value=B.state.hemi,Wt.directionalShadowMap.value=B.state.directionalShadowMap,Wt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Wt.spotShadowMap.value=B.state.spotShadowMap,Wt.spotLightMatrix.value=B.state.spotLightMatrix,Wt.spotLightMap.value=B.state.spotLightMap,Wt.pointShadowMap.value=B.state.pointShadowMap,Wt.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Ht,W.uniformsList=null,Ht}function So(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=pr.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Eo(E,k){const z=It.get(E);z.outputColorSpace=k.outputColorSpace,z.batching=k.batching,z.instancing=k.instancing,z.instancingColor=k.instancingColor,z.skinning=k.skinning,z.morphTargets=k.morphTargets,z.morphNormals=k.morphNormals,z.morphColors=k.morphColors,z.morphTargetsCount=k.morphTargetsCount,z.numClippingPlanes=k.numClippingPlanes,z.numIntersection=k.numClipIntersection,z.vertexAlphas=k.vertexAlphas,z.vertexTangents=k.vertexTangents,z.toneMapping=k.toneMapping}function ou(E,k,z,W,B){k.isScene!==!0&&(k=Dt),T.resetTextureUnits();const ft=k.fog,St=W.isMeshStandardMaterial?k.environment:null,Ut=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:bn,Nt=(W.isMeshStandardMaterial?O:M).get(W.envMap||St),jt=W.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ht=!!z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Wt=!!z.morphAttributes.position,_e=!!z.morphAttributes.normal,je=!!z.morphAttributes.color;let Ee=jn;W.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Ee=v.toneMapping);const Sn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,de=Sn!==void 0?Sn.length:0,Kt=It.get(W),Gr=m.state.lights;if(K===!0&&(ht===!0||E!==y)){const tn=E===y&&W.id===I;Bt.setState(W,E,tn)}let fe=!1;W.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Gr.state.version||Kt.outputColorSpace!==Ut||B.isBatchedMesh&&Kt.batching===!1||!B.isBatchedMesh&&Kt.batching===!0||B.isInstancedMesh&&Kt.instancing===!1||!B.isInstancedMesh&&Kt.instancing===!0||B.isSkinnedMesh&&Kt.skinning===!1||!B.isSkinnedMesh&&Kt.skinning===!0||B.isInstancedMesh&&Kt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Kt.instancingColor===!1&&B.instanceColor!==null||Kt.envMap!==Nt||W.fog===!0&&Kt.fog!==ft||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Bt.numPlanes||Kt.numIntersection!==Bt.numIntersection)||Kt.vertexAlphas!==jt||Kt.vertexTangents!==Ht||Kt.morphTargets!==Wt||Kt.morphNormals!==_e||Kt.morphColors!==je||Kt.toneMapping!==Ee||Mt.isWebGL2===!0&&Kt.morphTargetsCount!==de)&&(fe=!0):(fe=!0,Kt.__version=W.version);let Kn=Kt.currentProgram;fe===!0&&(Kn=Ls(W,k,B));let wo=!1,ls=!1,Vr=!1;const Pe=Kn.getUniforms(),Zn=Kt.uniforms;if(ut.useProgram(Kn.program)&&(wo=!0,ls=!0,Vr=!0),W.id!==I&&(I=W.id,ls=!0),wo||y!==E){Pe.setValue(F,"projectionMatrix",E.projectionMatrix),Pe.setValue(F,"viewMatrix",E.matrixWorldInverse);const tn=Pe.map.cameraPosition;tn!==void 0&&tn.setValue(F,Ot.setFromMatrixPosition(E.matrixWorld)),Mt.logarithmicDepthBuffer&&Pe.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Pe.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,ls=!0,Vr=!0)}if(B.isSkinnedMesh){Pe.setOptional(F,B,"bindMatrix"),Pe.setOptional(F,B,"bindMatrixInverse");const tn=B.skeleton;tn&&(Mt.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),Pe.setValue(F,"boneTexture",tn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Pe.setOptional(F,B,"batchingTexture"),Pe.setValue(F,"batchingTexture",B._matricesTexture,T));const Wr=z.morphAttributes;if((Wr.position!==void 0||Wr.normal!==void 0||Wr.color!==void 0&&Mt.isWebGL2===!0)&&Et.update(B,z,Kn),(ls||Kt.receiveShadow!==B.receiveShadow)&&(Kt.receiveShadow=B.receiveShadow,Pe.setValue(F,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Zn.envMap.value=Nt,Zn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),ls&&(Pe.setValue(F,"toneMappingExposure",v.toneMappingExposure),Kt.needsLights&&lu(Zn,Vr),ft&&W.fog===!0&&ot.refreshFogUniforms(Zn,ft),ot.refreshMaterialUniforms(Zn,W,X,P,yt),pr.upload(F,So(Kt),Zn,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(pr.upload(F,So(Kt),Zn,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Pe.setValue(F,"center",B.center),Pe.setValue(F,"modelViewMatrix",B.modelViewMatrix),Pe.setValue(F,"normalMatrix",B.normalMatrix),Pe.setValue(F,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const tn=W.uniformsGroups;for(let Xr=0,hu=tn.length;Xr<hu;Xr++)if(Mt.isWebGL2){const To=tn[Xr];ne.update(To,Kn),ne.bind(To,Kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kn}function lu(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function cu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,k,z){It.get(E.texture).__webglTexture=k,It.get(E.depthTexture).__webglTexture=z;const W=It.get(E);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=z===void 0,W.__autoAllocateDepthBuffer||Rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){const z=It.get(E);z.__webglFramebuffer=k,z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,z=0){S=E,R=k,w=z;let W=!0,B=null,ft=!1,St=!1;if(E){const Nt=It.get(E);Nt.__useDefaultFramebuffer!==void 0?(ut.bindFramebuffer(F.FRAMEBUFFER,null),W=!1):Nt.__webglFramebuffer===void 0?T.setupRenderTarget(E):Nt.__hasExternalTextures&&T.rebindTextures(E,It.get(E.texture).__webglTexture,It.get(E.depthTexture).__webglTexture);const jt=E.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(St=!0);const Ht=It.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ht[k])?B=Ht[k][z]:B=Ht[k],ft=!0):Mt.isWebGL2&&E.samples>0&&T.useMultisampledRTT(E)===!1?B=It.get(E).__webglMultisampledFramebuffer:Array.isArray(Ht)?B=Ht[z]:B=Ht,A.copy(E.viewport),G.copy(E.scissor),q=E.scissorTest}else A.copy($).multiplyScalar(X).floor(),G.copy(tt).multiplyScalar(X).floor(),q=et;if(ut.bindFramebuffer(F.FRAMEBUFFER,B)&&Mt.drawBuffers&&W&&ut.drawBuffers(E,B),ut.viewport(A),ut.scissor(G),ut.setScissorTest(q),ft){const Nt=It.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Nt.__webglTexture,z)}else if(St){const Nt=It.get(E.texture),jt=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.__webglTexture,z||0,jt)}I=-1},this.readRenderTargetPixels=function(E,k,z,W,B,ft,St){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=It.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(Ut=Ut[St]),Ut){ut.bindFramebuffer(F.FRAMEBUFFER,Ut);try{const Nt=E.texture,jt=Nt.format,Ht=Nt.type;if(jt!==Ve&&mt.convert(jt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=Ht===es&&(Rt.has("EXT_color_buffer_half_float")||Mt.isWebGL2&&Rt.has("EXT_color_buffer_float"));if(Ht!==Mn&&mt.convert(Ht)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===Yn&&(Mt.isWebGL2||Rt.has("OES_texture_float")||Rt.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-W&&z>=0&&z<=E.height-B&&F.readPixels(k,z,W,B,mt.convert(jt),mt.convert(Ht),ft)}finally{const Nt=S!==null?It.get(S).__webglFramebuffer:null;ut.bindFramebuffer(F.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(E,k,z=0){const W=Math.pow(2,-z),B=Math.floor(k.image.width*W),ft=Math.floor(k.image.height*W);T.setTexture2D(k,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,E.x,E.y,B,ft),ut.unbindTexture()},this.copyTextureToTexture=function(E,k,z,W=0){const B=k.image.width,ft=k.image.height,St=mt.convert(z.format),Ut=mt.convert(z.type);T.setTexture2D(z,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment),k.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,W,E.x,E.y,B,ft,St,Ut,k.image.data):k.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,W,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,St,k.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,W,E.x,E.y,St,Ut,k.image),W===0&&z.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ut.unbindTexture()},this.copyTextureToTexture3D=function(E,k,z,W,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ft=E.max.x-E.min.x+1,St=E.max.y-E.min.y+1,Ut=E.max.z-E.min.z+1,Nt=mt.convert(W.format),jt=mt.convert(W.type);let Ht;if(W.isData3DTexture)T.setTexture3D(W,0),Ht=F.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)T.setTexture2DArray(W,0),Ht=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Wt=F.getParameter(F.UNPACK_ROW_LENGTH),_e=F.getParameter(F.UNPACK_IMAGE_HEIGHT),je=F.getParameter(F.UNPACK_SKIP_PIXELS),Ee=F.getParameter(F.UNPACK_SKIP_ROWS),Sn=F.getParameter(F.UNPACK_SKIP_IMAGES),de=z.isCompressedTexture?z.mipmaps[B]:z.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,de.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,de.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),z.isDataTexture||z.isData3DTexture?F.texSubImage3D(Ht,B,k.x,k.y,k.z,ft,St,Ut,Nt,jt,de.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ht,B,k.x,k.y,k.z,ft,St,Ut,Nt,de.data)):F.texSubImage3D(Ht,B,k.x,k.y,k.z,ft,St,Ut,Nt,jt,de),F.pixelStorei(F.UNPACK_ROW_LENGTH,Wt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_e),F.pixelStorei(F.UNPACK_SKIP_PIXELS,je),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ee),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Sn),B===0&&W.generateMipmaps&&F.generateMipmap(Ht),ut.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),ut.unbindTexture()},this.resetState=function(){R=0,w=0,S=null,ut.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===co?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===kr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?ui:Zc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ui?Te:bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Tg extends Mh{}Tg.prototype.isWebGL1Renderer=!0;class Ag extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Rg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Oa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fe=new U;class Ar{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ar(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bh extends fi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Pi;const fs=new U,Di=new U,Ii=new U,Ui=new Xt,ps=new Xt,Sh=new ge,tr=new U,ms=new U,er=new U,Yl=new Xt,ba=new Xt,jl=new Xt;class Cg extends ye{constructor(t=new bh){if(super(),this.isSprite=!0,this.type="Sprite",Pi===void 0){Pi=new Le;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rg(e,5);Pi.setIndex([0,1,2,0,2,3]),Pi.setAttribute("position",new Ar(n,3,0,!1)),Pi.setAttribute("uv",new Ar(n,2,3,!1))}this.geometry=Pi,this.material=t,this.center=new Xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Di.setFromMatrixScale(this.matrixWorld),Sh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ii.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Di.multiplyScalar(-Ii.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;nr(tr.set(-.5,-.5,0),Ii,o,Di,s,r),nr(ms.set(.5,-.5,0),Ii,o,Di,s,r),nr(er.set(.5,.5,0),Ii,o,Di,s,r),Yl.set(0,0),ba.set(1,0),jl.set(1,1);let a=t.ray.intersectTriangle(tr,ms,er,!1,fs);if(a===null&&(nr(ms.set(-.5,.5,0),Ii,o,Di,s,r),ba.set(0,1),a=t.ray.intersectTriangle(tr,er,ms,!1,fs),a===null))return;const l=t.ray.origin.distanceTo(fs);l<t.near||l>t.far||e.push({distance:l,point:fs.clone(),uv:Qe.getInterpolation(fs,tr,ms,er,Yl,ba,jl,new Xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function nr(i,t,e,n,s,r){Ui.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ps.x=r*Ui.x-s*Ui.y,ps.y=s*Ui.x+r*Ui.y):ps.copy(Ui),i.copy(t),i.x+=ps.x,i.y+=ps.y,i.applyMatrix4(Sh)}class Br extends Xe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=pe,h=pe,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eh extends fi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Kl=new U,Zl=new U,Jl=new ge,Sa=new uo,ir=new as;class Lg extends ye{constructor(t=new Le,e=new Eh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Kl.fromBufferAttribute(e,s-1),Zl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Kl.distanceTo(Zl);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(s),ir.radius+=r,t.ray.intersectsSphere(ir)===!1)return;Jl.copy(s).invert(),Sa.copy(t.ray).applyMatrix4(Jl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,h=new U,u=new U,d=new U,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=f,b=x-1;v<b;v+=p){const R=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(m,R),h.fromBufferAttribute(m,w),Sa.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const I=t.ray.origin.distanceTo(d);I<t.near||I>t.far||e.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=f,b=x-1;v<b;v+=p){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),Sa.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(d);w<t.near||w>t.far||e.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Ql=new U,tc=new U;class Pg extends Lg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ql.fromBufferAttribute(e,s),tc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ql.distanceTo(tc);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _o extends fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ec=new ge,Ga=new uo,sr=new as,rr=new U;class wh extends ye{constructor(t=new Le,e=new _o){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(s),sr.radius+=r,t.ray.intersectsSphere(sr)===!1)return;ec.copy(s).invert(),Ga.copy(t.ray).applyMatrix4(ec);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);rr.fromBufferAttribute(u,m),nc(rr,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)rr.fromBufferAttribute(u,g),nc(rr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function nc(i,t,e,n,s,r,o){const a=Ga.distanceSqToPoint(i);if(a<e){const l=new U;Ga.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Dg extends Xe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const ar=new U,or=new U,Ea=new U,lr=new Qe;class Ig extends Le{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Ki*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:f}=lr;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),lr.getNormal(Ea),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const v=(x+1)%3,b=u[x],R=u[v],w=lr[h[x]],S=lr[h[v]],I=`${b}_${R}`,y=`${R}_${b}`;y in d&&d[y]?(Ea.dot(d[y].normal)<=r&&(p.push(w.x,w.y,w.z),p.push(S.x,S.y,S.z)),d[y]=null):I in d||(d[I]={index0:c[x],index1:c[v],normal:Ea.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];ar.fromBufferAttribute(a,_),or.fromBufferAttribute(a,m),p.push(ar.x,ar.y,ar.z),p.push(or.x,or.y,or.z)}this.setAttribute("position",new Ce(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class vo extends Le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new U,d=new U,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const x=[],v=f/n;let b=0;f===0&&o===0?b=.5/e:f===n&&l===Math.PI&&(b=-.5/e);for(let R=0;R<=e;R++){const w=R/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+b,1-v),x.push(c++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const v=h[f][x+1],b=h[f][x],R=h[f+1][x],w=h[f+1][x+1];(f!==0||o>0)&&p.push(v,b,w),(f!==n-1||l<Math.PI)&&p.push(b,R,w)}this.setIndex(p),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ug extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const wa=new ge,ic=new U,sc=new U;class Ng{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(ic),sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sc),e.updateMatrixWorld(),wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class kg extends Ng{constructor(){super(new mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fg extends Ug{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new kg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Og{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=rc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function rc(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oo);function Bg(i){const t=new Mh({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!1});return t.outputColorSpace=bn,t.setClearColor(8900331,1),t.shadowMap.enabled=!1,t}function zg(i){let t=i>>>0||2654435769;return function(){return t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296}}const Ta=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];function gs(i){return i*i*i*(i*(i*6-15)+10)}function fn(i,t,e){return i+(t-i)*e}class Wi{constructor(t=1337){const e=zg(t),n=new Uint8Array(256);for(let s=0;s<256;s++)n[s]=s;for(let s=255;s>0;s--){const r=e()*(s+1)|0,o=n[s];n[s]=n[r],n[r]=o}this.perm=new Uint8Array(512);for(let s=0;s<512;s++)this.perm[s]=n[s&255]}perlin2(t,e){const n=Math.floor(t)&255,s=Math.floor(e)&255,r=t-Math.floor(t),o=e-Math.floor(e),a=gs(r),l=gs(o),c=this.perm,h=c[c[n]+s]%12,u=c[c[n]+s+1]%12,d=c[c[n+1]+s]%12,p=c[c[n+1]+s+1]%12,g=(f,x,v)=>Ta[f][0]*x+Ta[f][1]*v,_=fn(g(h,r,o),g(d,r-1,o),a),m=fn(g(u,r,o-1),g(p,r-1,o-1),a);return fn(_,m,l)}perlin3(t,e,n){const s=Math.floor(t)&255,r=Math.floor(e)&255,o=Math.floor(n)&255,a=t-Math.floor(t),l=e-Math.floor(e),c=n-Math.floor(n),h=gs(a),u=gs(l),d=gs(c),p=this.perm,g=p[s]+r,_=p[g]+o,m=p[g+1]+o,f=p[s+1]+r,x=p[f]+o,v=p[f+1]+o,b=j=>Ta[p[j]%12],R=(j,D,C,P)=>j[0]*D+j[1]*C+j[2]*P,w=(j,D,C,P)=>R(b(j),D,C,P),S=fn(w(_,a,l,c),w(x,a-1,l,c),h),I=fn(w(m,a,l-1,c),w(v,a-1,l-1,c),h),y=fn(S,I,u),A=fn(w(_+1,a,l,c-1),w(x+1,a-1,l,c-1),h),G=fn(w(m+1,a,l-1,c-1),w(v+1,a-1,l-1,c-1),h),q=fn(A,G,u);return fn(y,q,d)}fbm2(t,e,n=4,s=2,r=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<n;h++)l+=o*this.perlin2(t*a,e*a),c+=o,o*=r,a*=s;return l/c}fbm3(t,e,n,s=3,r=2,o=.5){let a=1,l=1,c=0,h=0;for(let u=0;u<s;u++)c+=a*this.perlin3(t*l,e*l,n*l),h+=a,a*=o,l*=r;return c/h}ridged2(t,e,n=4){let s=1,r=1,o=0,a=0;for(let l=0;l<n;l++){const c=1-Math.abs(this.perlin2(t*r,e*r));o+=s*c*c,a+=s,s*=.5,r*=2}return o/a}}function at(i,t,e=0){let n=i*374761393+t*668265263+e*1274126177;return n=(n^n>>>13)*1274126177,n=(n^n>>>16)>>>0,n/4294967296}function Hg(i,t,e,n=0){let s=i*374761393+t*1103515245+e*668265263+n*1274126177;return s=(s^s>>>13)*1274126177,s=(s^s>>>16)>>>0,s/4294967296}function ac(i){const t=String(i).trim();if(t!==""&&!Number.isNaN(Number(t)))return Math.abs(Math.trunc(Number(t)))>>>0;let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}const xt=16,ri=8,mr=xt+ri*2,Ji=16,Ni=i=>i<0?0:i>255?255:i|0,oc=new Map;function Th(i){let t=oc.get(i);if(t)return t;const e=parseInt(i.slice(1),16);return t=[e>>16&255,e>>8&255,e&255],oc.set(i,t),t}function vn(i,t=0){const e=typeof i=="string"?Th(i):i;return[e[0]+t,e[1]+t,e[2]+t]}class Ah{constructor(){this.data=new Uint8ClampedArray(xt*xt*4)}set(t,e,n,s=255){if(t=t|0,e=e|0,t<0||e<0||t>=xt||e>=xt)return;const r=typeof n=="string"?Th(n):n,o=(e*xt+t)*4;this.data[o]=Ni(r[0]),this.data[o+1]=Ni(r[1]),this.data[o+2]=Ni(r[2]),this.data[o+3]=s}shade(t,e,n){if(t=t|0,e=e|0,t<0||e<0||t>=xt||e>=xt)return;const s=(e*xt+t)*4;this.data[s]=Ni(this.data[s]+n),this.data[s+1]=Ni(this.data[s+1]+n),this.data[s+2]=Ni(this.data[s+2]+n)}rect(t,e,n,s,r,o=255){for(let a=e;a<e+s;a++)for(let l=t;l<t+n;l++)this.set(l,a,r,o);return this}get(t,e){const n=((e|0)*xt+(t|0))*4;return[this.data[n],this.data[n+1],this.data[n+2],this.data[n+3]]}fill(t,e=255){for(let n=0;n<xt;n++)for(let s=0;s<xt;s++)this.set(s,n,t,e);return this}noise(t,e=0,n=8){for(let s=0;s<xt;s++)for(let r=0;r<xt;r++){const o=at(r,s,e),a=t[o*t.length|0]??t[0],l=(at(r+7,s*3+1,e+99)-.5)*n;this.set(r,s,vn(a,l))}return this}soft(t,e=0,n=8,s=5){const r=a=>a*a*(3-2*a),o=(a,l)=>at(a,l,e);for(let a=0;a<xt;a++)for(let l=0;l<xt;l++){const c=l/s,h=a/s,u=Math.floor(c),d=Math.floor(h),p=r(c-u),g=r(h-d),_=o(u,d),m=o(u+1,d),f=o(u,d+1),x=o(u+1,d+1),v=(_*(1-p)+m*p)*(1-g)+(f*(1-p)+x*p)*g,b=t[v*t.length|0]??t[0];this.set(l,a,vn(b,(v-.5)*n))}return this}grain(t=5,e=0){for(let n=0;n<xt;n++)for(let s=0;s<xt;s++)this.shade(s,n,(at(s*5+1,n*7+3,e)-.5)*t);return this}pebbles(t,e,n=0,s=2,r=16,o=-14){for(let a=0;a<e;a++){const l=1+(at(a*7+3,a*5+11,n)*(xt-2)|0),c=1+(at(a*13+5,a*3+7,n+21)*(xt-2)|0),h=1+(at(a,a+9,n+3)*s|0),u=1+(at(a+4,a*2+1,n+5)*s|0);for(let d=c;d<c+u;d++)for(let p=l;p<l+h;p++)this.set(p,d,vn(t,d===c||p===l?r:d===c+u-1||p===l+h-1?o:0))}return this}speckles(t,e,n=0,s=10){for(let r=0;r<e;r++){const o=at(r*3+1,r*7+5,n),a=at(r*13+2,r*5+9,n+1),l=(at(r,r+3,n+2)-.5)*s;this.set(o*xt|0,a*xt|0,vn(t,l))}return this}mottle(t,e=0,n=5,s=1.5,r=3.4,o=2.5){this.fill(t[0]);for(let a=1;a<t.length;a++)for(let l=0;l<n;l++){const c=e+a*97+l*13>>>0,h=at(a*7+l,l*31+a,c)*xt,u=at(l*17+a,a*13+l,c+5)*xt,d=s+at(a,l,c+9)*(r-s);for(let p=Math.floor(u-d);p<=u+d;p++)for(let g=Math.floor(h-d);g<=h+d;g++){const _=g+.5-h,m=p+.5-u,f=_*_+m*m;f>d*d||f<(d-.7)**2&&at(g*5+a,p*3+l,c+21)>.8||this.set((g%xt+xt)%xt,(p%xt+xt)%xt,t[a])}}return o&&this.grain(o,e+1009),this}blobs(t,e,n=0,s=2.6){for(let r=0;r<e;r++){const o=at(r*5+3,r*11+7,n)*xt,a=at(r*17+1,r*23+4,n+40)*xt,l=s*(.6+at(r,r*2+1,n+7)*.8);for(let c=Math.floor(a-l);c<=a+l;c++)for(let h=Math.floor(o-l);h<=o+l;h++){const u=h+.5-o,d=c+.5-a;if(u*u+d*d>l*l)continue;const p=(at(h*3,c*5,n+11)-.5)*14;this.set(h,c,vn(t,p))}}return this}border(t,e=255){for(let n=0;n<xt;n++)this.set(n,0,t,e),this.set(n,xt-1,t,e),this.set(0,n,t,e),this.set(xt-1,n,t,e);return this}clear(){return this.data.fill(0),this}}function Gg(i){const t=mr*Ji,e={data:new Uint8ClampedArray(t*t*4),width:t,height:t},n=e.data;for(const s of i){const r=s.index%Ji,o=s.index/Ji|0,a=r*mr+ri,l=o*mr+ri;for(let c=0;c<xt;c++)for(let h=0;h<xt;h++){const u=(c*xt+h)*4,d=((l+c)*t+(a+h))*4;n[d]=s.tile.data[u],n[d+1]=s.tile.data[u+1],n[d+2]=s.tile.data[u+2],n[d+3]=s.tile.data[u+3]}for(let c=-ri;c<xt+ri;c++)for(let h=-ri;h<xt+ri;h++){if(h>=0&&h<xt&&c>=0&&c<xt)continue;const u=Math.max(0,Math.min(xt-1,h)),p=(Math.max(0,Math.min(xt-1,c))*xt+u)*4,g=((l+c)*t+(a+h))*4;if(s.tile.data[p+3]===0&&s.transparentPadding){n[g+3]=0;continue}n[g]=s.tile.data[p],n[g+1]=s.tile.data[p+1],n[g+2]=s.tile.data[p+2],n[g+3]=Math.max(n[g+3],s.tile.data[p+3])}}return e}function Vg(i,t=1){const e=document.createElement("canvas");e.width=xt*t,e.height=xt*t;const n=e.getContext("2d"),s=new ImageData(i.data,xt,xt),r=document.createElement("canvas");return r.width=xt,r.height=xt,r.getContext("2d").putImageData(s,0,0),n.imageSmoothingEnabled=!1,n.drawImage(r,0,0,e.width,e.height),e}const zt={dirt:["#8a6647","#7f5c3e","#93704f","#75543a"],grass:["#63ad3c","#59a133","#6cba45","#4f952c"],grassDark:["#3f8327","#357021"],stone:["#8e8e8e","#878787","#949494","#7e7e7e"],cobble:["#9a9a9a","#8d8d8d","#a4a4a4","#828282"],sand:["#e2d1a4","#dbca9c","#e8d8ae","#d4c293"],sandstone:["#ddcd97","#d5c48c","#e4d6a5","#cdbd83"],gravel:["#8b8681","#827d78","#949088","#797471"],log:["#6d5335","#63492c","#77593a","#573f26"],logRing:["#a9884f","#9c7b45","#b4955c"],leaves:["#43832a","#3a7624","#4c9231","#316920","#57a238"],planks:["#bb8f56","#b0854d","#c49860","#a5793f"],water:["#3b6ecc","#3465c0","#457ad4","#2e5db8"],bedrock:["#414141","#383838","#4b4b4b","#2f2f2f"],snow:["#f6fcff","#eef7fd","#ffffff","#e4f1f9"],brick:["#a2554a","#954b41","#ac5f54"],mortar:["#c3bcb3","#cec7bf"],obsidian:["#20172f","#2a1f3d","#180f24","#3a2a55"],cactus:["#4d8f3a","#447f31","#569c42"],woolW:["#e9e9e9","#dedede","#f2f2f2"],woolR:["#b02e2e","#9c2727","#c13a3a"],woolB:["#2f4ecb","#2741b3","#3a5cdb"],woolY:["#e0c02f","#c9a926","#f0d346"],woolL:["#a6d434","#94c02a","#b6e246"],woolK:["#242424","#1b1b1b","#313131"],glow:["#f2d488","#e6c069","#f8e0a0","#d3a95d"],stoneBrick:["#949494","#8b8b8b","#9d9d9d","#7f7f7f"],podzol:["#6d5130","#634829","#785a38","#55712c"]};function Wg(i){const t=new Ah;return i(t),t}function ki(i,t=0){return i.mottle(zt.stone,7+t,5,1.4,3,2.4).speckles("#7c7c7c",4,21+t,6)}function Va(i,t,e,n,s=3,r=3){i.mottle(n,t,5,1.3,2.8,2.2),i.pebbles("#6f4f33",5,t+5,2,8,-10);for(let o=0;o<16;o++){const a=s+(at(o/2|0,1,t)*r|0);for(let l=0;l<a;l++)i.set(o,l,e[at(o/2|0,l/2|0,t+3)*e.length|0]);at(o,5,t+8)>.35&&i.set(o,a,zt.grassDark[at(o/2|0,6,t)*2|0])}return i}const Qt={grass_top:i=>i.mottle(zt.grass,11,5,1.6,3.4,1.8),grass_side:i=>Va(i,21,zt.grass,zt.dirt,3,3),podzol_side:i=>Va(i,62,zt.podzol,zt.dirt,2,2),dirt:i=>i.mottle(zt.dirt,3,5,1.3,2.8,2.4).pebbles("#6f4f33",5,5,2,8,-12),podzol:i=>{i.mottle(zt.podzol,61,5,1.4,3,2.2);for(let t=0;t<16;t++)t%3&&i.set(t,0,zt.grassDark[at(t,1,63)*2|0]);return i},stone:i=>ki(i),cobblestone:i=>{i.fill("#616161");const t=[-1,5,11,17],e=[-1,6,12,17];for(let n=0;n<e.length-1;n++)for(let s=0;s<t.length-1;s++){const r=Math.max(0,t[s]+1),o=Math.min(16,t[s+1]-1),a=Math.max(0,e[n]+1),l=Math.min(16,e[n+1]-1);for(let c=a;c<l;c++)for(let h=r;h<o;h++){let u=zt.cobble[at(h,c,92)*zt.cobble.length|0];(c===a||h===r)&&(u=vn(u,18)),(c===l-1||h===o-1)&&(u=vn(u,-16)),i.set(h,c,u)}}return i.grain(4,93)},stone_bricks:i=>{i.soft(zt.stoneBrick,33,6,4).grain(3,34);for(let t=0;t<16;t++)for(let e=0;e<16;e++){const s=(t/8|0)%2?4:0;t%8===0||(e+s)%8===7?i.set(e,t,["#6f6f6f","#676767"][at(e,t,4)*2|0]):(t%8===1||(e+s)%8===6)&&i.set(e,t,"#a0a0a0")}return i},sand:i=>i.mottle(zt.sand,18,4,1.8,3.6,1.5),sandstone_side:i=>{i.mottle(zt.sandstone,23,4,1.8,3.6,1.6);for(let t=0;t<16;t++)for(let e=0;e<16;e++)t===0||t===15?i.set(e,t,"#c2b078"):(t===7||t===8)&&i.set(e,t,"#cbb983");return i},sandstone_top:i=>i.fill("#dbcb94").grain(5,30).border("#c2b078"),gravel:i=>{i.mottle(zt.gravel,37,4,1.6,3.2,1.6);for(let t=0;t<15;t++){const e=at(t,3,41)*15|0,n=at(t,7,42)*15|0,s=1+(at(t,11,43)*2|0),r=1+(at(t,13,44)*2|0),o=zt.gravel[at(t,17,45)*zt.gravel.length|0];for(let a=0;a<r;a++)for(let l=0;l<s;l++){const c=l===0&&a===0?14:l===s-1&&a===r-1?-16:0;i.set(e+l,n+a,vn(o,c))}}return i.grain(3,46)},log_side:i=>{i.soft(zt.log,43,6,4).grain(3,44);for(let t=0;t<16;t++){const e=at(t,0,47)>.62;for(let n=0;n<16;n++)!e&&at(t*2,n,51)<=.9||i.set(t,n,vn(["#4e3a22","#573f26"][at(t,n,5)*2|0],(at(t,n,52)-.5)*7))}return i},log_top:i=>{i.soft(zt.logRing,53,5,4);for(let t=0;t<16;t++)for(let e=0;e<16;e++){const n=Math.hypot(e-7.5,t-7.5),s=Math.sin(n*2.1)>.2;i.set(e,t,vn(s?"#8a6a3a":"#a8874f",(at(e,t,54)-.5)*6)),n>7.2&&i.set(e,t,zt.log[at(e,t,61)*zt.log.length|0])}return i},leaves:i=>{i.clear(),i.mottle(zt.leaves,66,5,1.6,3.4,2),i.blobs("#316920",5,81,2.3),i.blobs("#57a238",3,97,1.7);for(let t=0;t<16;t++)for(let e=0;e<16;e++)(e===0||t===0||e===15||t===15?at(e,t,67)>.55:at(e,t,68)>.972)&&i.set(e,t,[0,0,0],0);return i},planks:i=>{i.mottle([zt.planks[0],zt.planks[1]],71,4,2.2,4.2,1.6);for(let t=0;t<16;t++)for(let e=0;e<16;e++)t%4===3&&i.set(e,t,"#8a6a35");for(let t=0;t<6;t++){const e=at(t,3,73)*16|0,n=at(t,5,74)*12|0,s=2+(at(t,7,75)*3|0);if(e%4!==3)for(let r=0;r<s;r++)i.set(n+r,e,"#c69a61")}for(const t of[5,12])for(let e=0;e<16;e++)e%4!==3&&i.set(t,e,"#9c7640");return i},glass:i=>{i.clear();for(let t=0;t<16;t++)for(let e=0;e<16;e++)e===0||t===0||e===15||t===15?i.set(e,t,"#cfe9f2",255):(e-t===2||e-t===3||e-t===-8)&&(e+t)%4!==0&&i.set(e,t,"#eaf7ff",110);return i},water:i=>{i.soft(zt.water,79,6,5).grain(3,80);for(let t=0;t<16;t++)for(let e=0;e<16;e++)Math.sin((e+t*.6)*.9)>.72&&i.set(e,t,"#5890e2");return i},bedrock:i=>i.soft(zt.bedrock,83,10,3).grain(5,84).pebbles("#262626",8,89,2,-10,12),snow:i=>i.mottle(zt.snow,98,4,1.8,3.4,1.2),coal_ore:i=>(ki(i,1),i.pebbles("#242424",4,103,2,-6,-22)),iron_ore:i=>(ki(i,2),i.pebbles("#c9915f",4,107,2,18,-16)),gold_ore:i=>(ki(i,3),i.pebbles("#f5d33c",4,109,2,20,-16)),diamond_ore:i=>(ki(i,4),i.pebbles("#4fe3dd",4,113,2,22,-14)),redstone_ore:i=>(ki(i,5),i.pebbles("#c02b2b",5,127,2,16,-18)),bricks:i=>{i.soft(zt.brick,131,6,4).grain(3,132);for(let t=0;t<16;t++)for(let e=0;e<16;e++){const s=(t/4|0)%2?4:0;(t%4===0||(e+s)%8===0)&&i.set(e,t,zt.mortar[at(e,t,13)*2|0])}return i},obsidian:i=>i.soft(zt.obsidian,137,9,4).grain(4,138).speckles("#6b4aa8",6,139,12),glowstone:i=>i.soft(zt.glow,149,8,4).grain(4,150).pebbles("#fff3c4",6,151,2,16,-18),torch:i=>{i.clear();for(let t=6;t<16;t++)for(let e=6;e<10;e++)i.set(e,t,t%3===0?"#6b4a24":"#8a6234");for(let t=2;t<7;t++)for(let e=5;e<11;e++){const n=Math.hypot(e-7.5,t-4);n<3&&i.set(e,t,n<1.3?"#fff6c0":n<2.2?"#ffc23c":"#e07a1e")}return i},tall_grass:i=>{i.clear();for(let t=0;t<5;t++){const e=1+t*2+(at(t,3,157)*2|0),n=5+(at(t,7,163)*4|0),s=(at(t,11,167)-.5)*3;for(let r=0;r<n;r++){const o=15-r,a=Math.round(e+s*r/n),l=r>n-2?"#69a440":r>n*.45?"#4f8a2c":"#3c6a21";i.set(a,o,l),r%4===0&&at(a,o,179)>.55&&i.set(a+1,o,"#3f7024")}}for(let t=0;t<3;t++){const e=2+(at(t,23,181)*12|0);i.set(e,15-(4+(at(t,29,183)*3|0)),"#7c8a3c")}return i},fern:i=>{i.clear();for(let t=0;t<11;t++){const e=15-t,n=1+((10-t)*.45|0);for(let s=8-n;s<=8+n;s++){const r=Math.abs(s-8);r===n&&t%2||r===0&&t>4&&t%3===0||i.set(s,e,t>7?"#548c2e":r===n?"#356a1f":"#3f7d24")}}return i},flower_red:i=>{i.clear();for(let e=8;e<16;e++)i.set(7,e,"#3f7d24");for(let e=9;e<12;e++)i.set(e%2?8:6,e,"#4f9a2c");const t=[[6,5],[7,4],[8,5],[9,6],[8,7],[7,8],[6,7],[5,6]];for(const[e,n]of t)i.set(e,n,"#d93b3b");return i.set(7,6,"#ffe27a"),i.set(8,6,"#ffd63c"),i},flower_yellow:i=>{i.clear();for(let e=8;e<16;e++)i.set(8,e,"#3f7d24");const t=[[7,5],[8,4],[9,5],[10,6],[9,7],[8,8],[7,7],[6,6]];for(const[e,n]of t)i.set(e,n,"#f5d33c");return i.set(8,6,"#a06b1e"),i.set(8,5,"#c9911e"),i},cactus_side:i=>{i.noise(zt.cactus,171,6);for(let t=0;t<16;t++)i.set(0,t,"#2f5f22"),i.set(15,t,"#2f5f22"),t%4===1&&(i.set(4,t,"#dfeee0"),i.set(11,t,"#dfeee0"));return i},cactus_top:i=>i.noise(["#4d8f3a","#5aa145","#3f7d2f"],173,6).border("#2f5f22"),wool_white:i=>i.noise(zt.woolW,181,6),wool_red:i=>i.noise(zt.woolR,183,6),wool_blue:i=>i.noise(zt.woolB,185,6),wool_yellow:i=>i.noise(zt.woolY,187,6),wool_lime:i=>i.noise(zt.woolL,189,6),wool_black:i=>i.noise(zt.woolK,191,6),crafting_top:i=>{i.noise(zt.planks,193,6);for(let t=1;t<15;t++)for(let e=1;e<15;e++)(e%7===0||t%7===0)&&i.set(e,t,"#7a5a2f");return i},crafting_side:i=>{i.noise(zt.planks,197,6);for(let t=2;t<7;t++)for(let e=2;e<14;e++)(e+t)%3===0&&i.set(e,t,"#8a6a35");return i}},Xg={wood:["#a97f4a","#8a6134"],stone:["#9a9a9a","#7d7d7d"],iron:["#e2e2e2","#b9bcc2"],diamond:["#57e6e0","#31b9c2"]},qg=["pickaxe","axe","shovel","sword"];function $g(i,t,e,n){const s="#8a6134",r="#6d4c28";if(t==="sword"){for(let l=0;l<9;l++)i.set(5+l,12-l,l>5?n:e);for(let l=0;l<8;l++)i.set(4+l,13-l,l>5?n:e);return i.set(4,11,s),i.set(5,12,s),i.set(3,12,r),i.set(4,13,r),i.set(2,13,r),i.set(3,14,s),i.set(2,14,r),i.set(5,10,n),i.set(6,9,n),i.set(7,8,n),i.set(8,7,n),i.set(2,11,r),i.set(3,10,s),i.set(1,12,r),i}for(let l=0;l<10;l++){const c=3+l,h=14-l;i.set(c,h,s),i.set(c,h+1,r)}const o=12,a=5;if(t==="pickaxe"){for(let l=-4;l<=4;l++)i.set(o+l,a-1+Math.abs(l)>>1,e);for(let l=-3;l<=3;l++)i.set(o+l,a+Math.abs(l)>>1,e);i.set(o-4,a+1,n),i.set(o+4,a+1,n),i.set(o-5,a+2,n),i.set(o+5,a+2,n),i.set(o,a,n),i.set(o-1,a,n)}else if(t==="axe"){for(let l=-2;l<=3;l++)for(let c=-1;c<=3;c++)i.set(o+c,a+l,e);for(let l=-2;l<=3;l++)i.set(o+3,a+l,n);i.set(o-1,a-2,n),i.set(o-1,a+3,n)}else{for(let l=-1;l<=3;l++)for(let c=-2;c<=2;c++)i.set(o+c,a+l,e);for(let l=0;l<=2;l++)i.set(o,a+l,n);i.set(o-2,a+3,r),i.set(o+2,a+3,r)}return i}function pi(i,t){if(i.fill("#e8e8e8"),i.noise(["#e2e2e2","#efefef","#d9d9d9"],313,10),t)for(const[e,n]of t)i.rect(e,n,2,2,"#f2f2f2");return i}Qt.snow_side=i=>Va(i,201,zt.snow,zt.dirt,4,3);for(const[i,[t,e]]of Object.entries(Xg))for(const n of qg)Qt[`tool_${n}_${i}`]=s=>$g(s,n,t,e);Qt.mob_pig=i=>pi(i,null);Qt.mob_face=i=>(pi(i,null),i.set(3,6,"#241a1a"),i.set(4,6,"#241a1a"),i.set(11,6,"#241a1a"),i.set(12,6,"#241a1a"),i.rect(6,10,4,2,"#3a2a2a"),i);Qt.mob_snout=i=>(pi(i,null),i.rect(4,4,8,6,"#d9a6a0"),i.set(5,6,"#5a3a38"),i.set(10,6,"#5a3a38"),i);Qt.mob_cow=i=>(pi(i,null),i.rect(0,0,16,5,"#4a3a34"),i.rect(3,9,6,5,"#3a2c28"),i);Qt.mob_sheep=i=>(pi(i,[[2,2],[9,5],[4,10]]),i);Qt.mob_husk=i=>(pi(i,null),i.rect(0,0,16,16,"#6f7d5f"),i.noise(["#5d6b52","#7c8a68"],77,12),i.set(3,6,"#0e1408"),i.set(4,6,"#0e1408"),i.set(11,6,"#0e1408"),i.set(12,6,"#0e1408"),i);Qt.mob_crawler=i=>(pi(i,null),i.rect(0,0,16,16,"#39424f"),i.noise(["#2e3742","#48525f"],91,14),i.rect(4,4,3,2,"#d8e6ff"),i.rect(10,4,3,2,"#d8e6ff"),i);Qt.sapling=i=>{i.rect(6,11,4,4,"#6b4a2a");for(const[t,e]of[[5,7],[6,6],[7,5],[8,4],[9,5],[10,6],[11,7],[6,8],[9,8],[7,7],[8,7],[8,6]])i.set(t,e,"#4f9a2c");for(const[t,e]of[[7,6],[9,6],[8,8],[6,7],[10,7]])i.set(t,e,"#5aa832");return i};Qt.item_stick=i=>{for(let t=0;t<9;t++)i.set(4+t,12-t,"#8a6134"),i.set(4+t,13-t,"#6d4c28");return i};Qt.item_coal=i=>(i.blobs("#232323",7,12,3.4),i.blobs("#3b3b3b",5,44,2.2),i);Qt.item_leather=i=>{i.rect(3,3,10,10,"#9c6b45"),i.rect(4,4,8,8,"#ab7850");for(let t=0;t<4;t++)i.set(4+t*2,4,"#8a5b3a"),i.set(11,5+t*2,"#8a5b3a");return i};Qt.item_pork=i=>(i.rect(3,5,10,7,"#e08f8a"),i.rect(4,6,8,5,"#f0a8a2"),i.rect(5,7,3,2,"#f8c6c2"),i.set(12,5,"#c96f6c"),i.set(12,11,"#c96f6c"),i);Qt.farmland=i=>{i.fill("#4b3520"),i.grain("#3f2b19","#57401f",.55);for(let t=1;t<15;t+=3)i.rect(0,t,16,2,"#33220f"),i.rect(0,t+2,16,1,"#5c4525");return i.speckles("#6d5230",16,7),i.border("#2b1c0c",.5),i};Qt.wheat=i=>{i.clear();const t=[[2,5],[6,3],[10,6],[13,4],[4,11],[8,12],[12,10]];for(const[e,n]of t){for(let s=15;s>=n;s--)i.set(e,s,"#8aa63c",255);for(let s=0;s<4;s++)i.rect(e-1,n+s,3,1,"#dcb955"),i.set(e,n+s,"#f0d67e",255);i.set(e+1,n+3,"#6f8a2e",255)}return i};Qt.hay_side=i=>{i.fill("#c2a03c"),i.grain("#b28f2f","#d3b254",.5);for(let t=0;t<16;t+=2)i.rect(0,t,16,1,"#ad8b2c");return i.rect(3,0,2,16,"#6d5318"),i.rect(11,0,2,16,"#6d5318"),i.rect(0,0,16,1,"#8f7220"),i.rect(0,15,16,1,"#7e6318"),i};Qt.hay_top=i=>{i.fill("#d3b254"),i.grain("#c4a344","#e0c266",.5);for(const[t,e,n]of[[2,2,12],[4,4,8],[6,6,4]])i.rect(t,e,n,1,"#a98731"),i.rect(t,e+n-1,n,1,"#a98731"),i.rect(t,e,1,n,"#a98731"),i.rect(t+n-1,e,1,n,"#a98731");return i.rect(7,7,2,2,"#8a6c28"),i};Qt.item_emerald=i=>{i.clear();for(let t=0;t<16;t++){const e=Math.round(2+(6-Math.abs(t-7.5))*1.1);i.rect(8-e,t,e*2,1,"#1f9c58")}return i.rect(5,5,4,4,"#43d47f"),i.rect(4,4,2,2,"#a6f2c4"),i.rect(9,9,3,3,"#146c3c"),i.set(8,3,"#8be9b6"),i.set(3,8,"#8be9b6"),i};Qt.mob_villager=i=>{i.fill("#6d4b2c"),i.grain("#5f4025","#7d5a37",.5);for(let t=1;t<16;t+=4)i.rect(0,t,16,1,"#57381f");return i.rect(0,6,16,3,"#8a6a44"),i.rect(0,7,16,1,"#a3855c"),i.rect(2,10,12,1,"#57381f"),i};Qt.mob_villager_face=i=>(i.fill("#c39a6b"),i.grain("#b8905f","#cba876",.4),i.rect(0,0,16,4,"#4a3520"),i.rect(0,3,16,1,"#5d452a"),i.rect(3,7,2,2,"#2f2a3a"),i.rect(11,7,2,2,"#2f2a3a"),i.rect(2,6,4,1,"#8a6a44"),i.rect(10,6,4,1,"#8a6a44"),i.rect(7,8,2,4,"#ab7f52"),i.rect(6,11,4,2,"#b98d5d"),i.rect(4,13,8,1,"#4a3520"),i);Qt.mossy_cobblestone=i=>{Qt.cobblestone(i),i.blobs("#3d7a2a",12,331,2.7),i.blobs("#4f9433",9,332,1.9);for(let t=0;t<16;t++)for(let e=0;e<16;e++)i.get(e,t)[1]>120&&at(e,t,333)>.82&&i.set(e,t,"#2f6a24");return i.grain(3,334)};Qt.ice=i=>{i.fill("#a6d3ec"),i.soft(["#bcdff4","#a9d6ef","#cbe9f8","#96c8e6"],241,6,4);for(let t=0;t<24;t++){const e=at(t,3,242)*12|0,n=at(t,7,243)*12|0,s=3+(at(t,11,244)*5|0),r=at(t,13,245)>.5?1:-1;for(let o=0;o<s;o++)i.set(Math.min(15,e+o),Math.min(15,n+o*r),"#e8f7ff",235)}return i.border("#c9e6f6"),i.grain(2,246)};Qt.lantern=i=>{i.clear(),i.rect(6,0,4,1,"#5d5d64"),i.rect(7,1,2,1,"#494950"),i.rect(4,2,8,1,"#565660"),i.rect(3,3,10,1,"#3f3f47"),i.rect(4,4,8,8,"#2f2f36");for(let t=5;t<11;t++)for(let e=5;e<11;e++){const n=Math.hypot(e-7.5,t-8);i.set(e,t,n<1.6?"#fff6c8":n<3?"#ffd167":"#e8973a")}i.rect(3,12,10,1,"#3f3f47"),i.rect(4,13,8,1,"#565660");for(let t=5;t<11;t+=2)i.set(4,t,"#6b6b76"),i.set(11,t,"#6b6b76");return i};Qt.item_flint=i=>{i.clear();for(let t=3;t<14;t++){const e=1+Math.round(5*Math.sin((t-2)*.55)),n=3+(at(t,5,251)*3|0);for(let s=n;s<n+5+e;s++){if(s>15||s<0)continue;const r=t===3||t===13||s===n||s===n+4+e;i.set(s,t,r?"#3b3b44":at(s,t,252)>.6?"#2a2a31":"#494954")}}return i.rect(6,6,3,1,"#8f8fa3"),i.rect(7,7,2,1,"#c6c6d6"),i};Qt.item_apple=i=>{i.clear();for(let t=4;t<15;t++)for(let e=2;e<14;e++){const n=(e-7.5)/5.4,s=(t-9.6)/4.8,r=n*n+s*s;if(r>1.05)continue;let o=r<.62?"#d8352f":"#b1241f";e<5&&t<9&&(o="#f0625a"),at(e,t,253)>.9&&(o="#c92b26"),i.set(e,t,o)}return i.rect(7,2,1,3,"#6b4326"),i.rect(8,1,1,2,"#7d5230"),i.rect(9,2,3,2,"#4f9a35"),i.rect(10,1,2,1,"#63b844"),i.set(5,6,"#ffd9d3"),i.set(6,5,"#ffe9e4"),i};Qt.item_bread=i=>{i.clear();for(let t=5;t<12;t++){const e=t===5||t===11?3:1;for(let n=e;n<16-e;n++){let r=t<8?at(n,t,254)>.5?"#c98a3f":"#b87a33":"#8f5d26";t===6&&n%4===1&&(r="#e0ab5c"),i.set(n,t,r)}}for(const t of[3,7,11])i.set(t,7,"#f0c877"),i.set(t+1,8,"#dcae5e");return i.rect(1,11,14,1,"#6f4620")};Qt.item_compass=i=>{i.clear();for(let t=0;t<16;t++)for(let e=0;e<16;e++){const n=Math.hypot(e-7.5,t-7.5);n>7||(n>5.9?i.set(e,t,at(e,t,255)>.6?"#9a8542":"#c4ad5c"):i.set(e,t,n<1?"#efe7d2":"#dcd3bb"))}for(let t=0;t<6;t++)i.set(7,2+t,"#c0392b"),i.set(8,2+t,"#e74c3c");for(let t=0;t<5;t++)i.set(8-t,9+t,"#4a4a52"),i.set(7-t,9+t,"#6b6b73");return i.rect(7,7,2,2,"#2b2b31"),i.set(7,1,"#f4ead0"),i.set(8,1,"#f4ead0"),i.set(1,7,"#f4ead0"),i.set(14,8,"#f4ead0"),i};Qt.item_clock=i=>{i.clear();for(let t=0;t<16;t++)for(let e=0;e<16;e++){const n=Math.hypot(e-7.5,t-7.5);n>7.2||(n>6?i.set(e,t,at(e,t,256)>.55?"#b98f26":"#e8c96a"):i.set(e,t,n<.9?"#3a3a42":"#f4efe0"))}for(let t=0;t<4;t++)i.set(8,4+t,"#3a3a42");for(let t=0;t<3;t++)i.set(5+t,8,"#6b5a2a");for(const[t,e]of[[7,1],[14,7],[7,14],[1,7]])i.set(t,e,"#7a5c18");return i.rect(6,0,4,1,"#c9a33c")};Qt.item_shears=i=>{i.clear();for(let t=0;t<7;t++)i.set(3+t,3+t,"#cfd4dc"),i.set(4+t,3+t,"#9aa1ad"),i.set(10-t,3+t,"#cfd4dc"),i.set(9-t,3+t,"#9aa1ad");i.set(7,7,"#7b8290"),i.set(8,7,"#7b8290");for(const[t,e]of[[4,11],[11,11]])for(let n=0;n<12;n++){const s=n/12*Math.PI*2;i.set(Math.round(t+Math.cos(s)*2.4),Math.round(e+Math.sin(s)*2.4),"#b8422f")}return i};const ln=Object.keys(Qt).filter(i=>Qt[i]);function Wa(i,t){const e=String(i),n=ln.indexOf(e);if(!t)return n>=0&&ln.splice(n,1),delete Qt[e],!1;if(typeof t!="function")throw new Error(`тайл «${e}»: painter должен быть функцией`);return Qt[e]=t,n<0&&ln.push(e),!0}function Yg(){const i=[],t={};if(ln.forEach((e,n)=>{const s=Wg(Qt[e]);t[e]=n,i.push({name:e,index:n,tile:s,transparentPadding:e!=="water"})}),i.length>Ji*Ji)throw new Error("Слишком много тайлов для атласа");return{tiles:i,index:t}}const Xa=8;function jg(i){const t=new Ah;t.clear();const e=2+i,n=i*7+3;for(let s=0;s<e;s++){let r=1+(at(s,i,n)*(xt-2)|0),o=1+(at(s+5,i,n+1)*(xt-2)|0);const a=at(s,0,n+2)>.5?1:-1,l=3+(i*.9+at(s,1,n)*4|0);for(let c=0;c<l;c++){const h=i>=4?1:0;t.set(r,o,[12,12,12],225),h&&(t.set(r+a,o,[30,30,30],150),t.set(r,o+1,[20,20,20],120)),r+=a*(at(c,s,n+3)>.45?1:0),o+=at(c,s+2,n+4)>.35?1:-1,r=Math.max(0,Math.min(xt-1,r)),o=Math.max(0,Math.min(xt-1,o))}}return i>=6&&t.speckles([0,0,0],14,i,0),t}function Kg(){const i=[];for(let t=0;t<Xa;t++){const e=jg(t),n=new Br(e.data,xt,xt,Ve);n.magFilter=pe,n.minFilter=pe,n.generateMipmaps=!1,n.colorSpace=Ue,n.needsUpdate=!0,i.push(n)}return i}const Un=0,Zg=[{id:38,name:"Саженец",key:"sapling",tiles:{all:"sapling",tinted:!0},render:"cross",cutout:!0,breakable:!0,hardness:.15,sound:"grass",plantH:.4},{id:39,name:"Кожа",key:"leather",tiles:{all:"item_leather"},render:"item",sound:"soft"},{id:40,name:"Мясо",key:"pork",tiles:{all:"item_pork"},render:"item",sound:"soft"},{id:41,name:"Палка",key:"stick",tiles:{all:"item_stick"},render:"item",sound:"wood"},{id:42,name:"Уголь",key:"coal_item",tiles:{all:"item_coal"},render:"item",sound:"soft"}],Jg=[{kind:"pickaxe",label:"кирка",fem:!0,mine:["stone","glass"]},{kind:"axe",label:"топор",mine:["wood"]},{kind:"shovel",label:"лопата",fem:!0,mine:["dirt","sand","grass"]},{kind:"sword",label:"меч",mine:["plant","wool","grass"]}],Qg=[{tier:"wood",fem:"деревянная",masc:"деревянный",speed:2.4,damage:2,uses:60},{tier:"stone",fem:"каменная",masc:"каменный",speed:3.6,damage:3,uses:132},{tier:"iron",fem:"железная",masc:"железный",speed:5.6,damage:5,uses:251},{tier:"diamond",fem:"алмазная",masc:"алмазный",speed:8.2,damage:7,uses:601}],t_=[{id:59,name:"Грядка",key:"farmland",tiles:{top:"farmland",bottom:"dirt",side:"dirt"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.4,sound:"sand",drops:"dirt"},{id:60,name:"Пшеница",key:"wheat",tiles:{all:"wheat"},render:"cross",solid:!1,opaque:!1,cutout:!0,breakable:!0,hardness:.05,sound:"grass",replaceable:!0,plantH:.62},{id:61,name:"Стог сена",key:"hay_block",tiles:{top:"hay_top",bottom:"hay_top",side:"hay_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.5,sound:"grass"},{id:62,name:"Изумруд",key:"emerald",tiles:{all:"item_emerald"},render:"item",sound:"soft"}],Rh=[];{let i=43;for(const t of Qg)for(const e of Jg)Rh.push({id:i++,name:`${(e.fem?t.fem:t.masc)[0].toUpperCase()}${(e.fem?t.fem:t.masc).slice(1)} ${e.label}`,key:`${t.tier}_${e.kind}`,tiles:{all:`tool_${e.kind}_${t.tier}`},render:"item",sound:"wood",tool:{kind:e.kind,mine:e.mine,speed:t.speed,damage:t.damage,uses:t.uses}})}const Ch=[{id:63,name:"Замшелый булыжник",key:"mossy_cobblestone",tiles:{all:"mossy_cobblestone"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.3,sound:"stone"},{id:64,name:"Лёд",key:"ice",tiles:{all:"ice"},render:"cube",solid:!0,opaque:!1,cutout:!0,hideSame:!0,breakable:!0,hardness:.6,sound:"stone",drops:"ice"},{id:65,name:"Фонарь",key:"lantern",tiles:{all:"lantern"},render:"torch",solid:!1,opaque:!1,cutout:!0,breakable:!0,hardness:.4,sound:"stone",light:1,fullBright:!0,slim:!0},{id:66,name:"Кремень",key:"flint",tiles:{all:"item_flint"},render:"item",sound:"soft",bonusOf:"gravel",bonus:.16},{id:67,name:"Яблоко",key:"apple",tiles:{all:"item_apple"},render:"item",sound:"soft",food:4,bonusOf:"leaves",bonus:.14},{id:68,name:"Хлеб",key:"bread",tiles:{all:"item_bread"},render:"item",sound:"soft",food:8},{id:69,name:"Компас",key:"compass",tiles:{all:"item_compass"},render:"item",sound:"soft",info:"spawn"},{id:70,name:"Часы",key:"clock",tiles:{all:"item_clock"},render:"item",sound:"soft",info:"time"},{id:71,name:"Ножницы",key:"shears",tiles:{all:"item_shears"},render:"item",sound:"wood",tool:{kind:"shears",mine:["grass","plant","wool"],speed:4.2,damage:2,uses:118}}],dt=[{id:0,name:"Воздух",key:"air",tiles:null,render:"none",solid:!1,opaque:!1,breakable:!1,replaceable:!0,hardness:0,sound:"soft"},{id:1,name:"Камень",key:"stone",tiles:{all:"stone"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.1,sound:"stone",drops:"cobblestone"},{id:2,name:"Дёрн",key:"grass",tiles:{top:"grass_top",bottom:"dirt",side:"grass_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.6,sound:"grass",drops:"dirt",tinted:!0},{id:3,name:"Земля",key:"dirt",tiles:{all:"dirt"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.5,sound:"dirt"},{id:4,name:"Булыжник",key:"cobblestone",tiles:{all:"cobblestone"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.3,sound:"stone"},{id:5,name:"Доски",key:"planks",tiles:{all:"planks"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1,sound:"wood"},{id:6,name:"Песок",key:"sand",tiles:{all:"sand"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.5,sound:"sand"},{id:7,name:"Песчаник",key:"sandstone",tiles:{top:"sandstone_top",bottom:"sandstone_top",side:"sandstone_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.9,sound:"stone"},{id:8,name:"Гравий",key:"gravel",tiles:{all:"gravel"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.6,sound:"sand"},{id:9,name:"Бревно",key:"log",tiles:{top:"log_top",bottom:"log_top",side:"log_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.2,sound:"wood"},{id:10,name:"Листва",key:"leaves",tiles:{all:"leaves"},render:"cube",solid:!0,opaque:!1,cutout:!0,breakable:!0,hardness:.3,sound:"grass",tinted:!0,drops:"sapling"},{id:11,name:"Вода",key:"water",tiles:{all:"water"},render:"liquid",solid:!1,opaque:!1,liquid:!0,hideSame:!0,breakable:!1,hardness:0,sound:"splash"},{id:12,name:"Стекло",key:"glass",tiles:{all:"glass"},render:"cube",solid:!0,opaque:!1,cutout:!0,hideSame:!0,breakable:!0,hardness:.4,sound:"glass"},{id:13,name:"Кирпичи",key:"bricks",tiles:{all:"bricks"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.4,sound:"stone"},{id:14,name:"Каменный кирпич",key:"stone_bricks",tiles:{all:"stone_bricks"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.3,sound:"stone"},{id:15,name:"Снег",key:"snow",tiles:{top:"snow",bottom:"dirt",side:"snow_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.3,sound:"grass"},{id:16,name:"Уголь",key:"coal_ore",tiles:{all:"coal_ore"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1.6,sound:"stone"},{id:17,name:"Железо",key:"iron_ore",tiles:{all:"iron_ore"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:2,sound:"stone"},{id:18,name:"Золото",key:"gold_ore",tiles:{all:"gold_ore"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:2.2,sound:"stone"},{id:19,name:"Алмазы",key:"diamond_ore",tiles:{all:"diamond_ore"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:2.6,sound:"stone"},{id:20,name:"Редстоун",key:"redstone_ore",tiles:{all:"redstone_ore"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:2,sound:"stone",light:.25},{id:21,name:"Обсидиан",key:"obsidian",tiles:{all:"obsidian"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:5,sound:"stone"},{id:22,name:"Бедрок",key:"bedrock",tiles:{all:"bedrock"},render:"cube",solid:!0,opaque:!0,breakable:!1,hardness:0,sound:"stone"},{id:23,name:"Светокамень",key:"glowstone",tiles:{all:"glowstone"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.5,sound:"glass",light:1,fullBright:!0},{id:24,name:"Факел",key:"torch",tiles:{all:"torch"},render:"torch",solid:!1,opaque:!1,cutout:!0,breakable:!0,hardness:.05,sound:"wood",light:1,fullBright:!0,noSelect:!1,slim:!0},{id:25,name:"Высокая трава",key:"tall_grass",tiles:{all:"tall_grass",tinted:!0},render:"cross",solid:!1,opaque:!1,cutout:!0,breakable:!0,hardness:.05,sound:"grass",replaceable:!0,plantH:.5},{id:26,name:"Папоротник",key:"fern",tiles:{all:"fern",tinted:!0},render:"cross",solid:!1,opaque:!1,cutout:!0,breakable:!0,hardness:.05,sound:"grass",replaceable:!0,plantH:.46},{id:27,name:"Красный цветок",key:"flower_red",tiles:{all:"flower_red"},render:"cross",solid:!1,opaque:!1,cutout:!0,breakable:!0,hardness:.05,sound:"grass",replaceable:!0,plantH:.38},{id:28,name:"Жёлтый цветок",key:"flower_yellow",tiles:{all:"flower_yellow"},render:"cross",solid:!1,opaque:!1,cutable:!0,cutout:!0,replaceable:!0,hardness:.05,sound:"grass",plantH:.38},{id:29,name:"Кактус",key:"cactus",tiles:{top:"cactus_top",bottom:"cactus_top",side:"cactus_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.5,sound:"grass",inset:.06},{id:30,name:"Белая шерсть",key:"wool_white",tiles:{all:"wool_white"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.7,sound:"wool"},{id:31,name:"Красная шерсть",key:"wool_red",tiles:{all:"wool_red"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.7,sound:"wool"},{id:32,name:"Синяя шерсть",key:"wool_blue",tiles:{all:"wool_blue"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.7,sound:"wool"},{id:33,name:"Жёлтая шерсть",key:"wool_yellow",tiles:{all:"wool_yellow"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.7,sound:"wool"},{id:34,name:"Зелёная шерсть",key:"wool_lime",tiles:{all:"wool_lime"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.7,sound:"wool"},{id:35,name:"Чёрная шерсть",key:"wool_black",tiles:{all:"wool_black"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.7,sound:"wool"},{id:36,name:"Верстак",key:"crafting_table",tiles:{top:"crafting_top",bottom:"planks",side:"crafting_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1,sound:"wood"},{id:37,name:"Подзол",key:"podzol",tiles:{top:"podzol",bottom:"dirt",side:"podzol_side"},render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:.5,sound:"dirt"},...Zg,...Rh,...t_,...Ch],ze=new Map(dt.map(i=>[i.key,i])),Pt=i=>i==null?Un:ze.get(i)?.id??Un,lc=i=>dt[i]?.liquid===!0,e_=i=>dt[i]?.render==="item",n_=i=>{const t=dt[i];return t?t.drops?Pt(t.drops):t.item||t.replaceable?0:i:0};function i_(i,t,e,n){for(const s of Ch){if(!s.bonusOf||s.bonusOf!==dt[i]?.key)continue;if(((t*73856093^e*19349663^n*83492791)>>>0)%1e3/1e3<(s.bonus??.15))return s.id}return 0}function s_(i,t){if(!i||!t)return 1;const e=dt[t]?.tool;return e?e.mine.includes(i.sound)?e.speed:i.sound==="stone"||i.sound==="glass"?.45:1:1}const r_=i=>dt[i]?.tool?.damage??1,a_=Ji,o_=mr;class l_{constructor(){const{tiles:t,index:e}=Yg(),n=Gg(t),s=new Br(n.data,n.width,n.height,Ve);s.magFilter=pe,s.minFilter=di,s.generateMipmaps=!0,s.wrapS=s.wrapT=sn,s.colorSpace=Ue,s.needsUpdate=!0,this.texture=s,this.index=e,this.tile=xt,this.cell=o_,this.grid=a_,this.canvases={};for(const r of t)this.canvases[r.name]=Vg(r.tile,1);this.cracks=Kg(),this.iconCache=new Map}setMaxAnisotropy(t){const e=Math.max(1,Math.min(8,t|0));return this.texture.anisotropy=e,this.texture.needsUpdate=!0,e}icon(t,e=48){const n=t+":"+e,s=this.iconCache.get(n);if(s)return s;const r=document.createElement("canvas");r.width=r.height=e;const o=r.getContext("2d");o.imageSmoothingEnabled=!1;const a=dt[t]??dt[Un];if(a&&a.tiles){const c=a.render==="cross"||a.render==="torch"||a.render==="item",h=this.canvases[a.tiles.top??a.tiles.all],u=this.canvases[a.tiles.side??a.tiles.all];if(c||!h||!u){const d=this.canvases[a.tiles.all]??h;if(d){const p=e*.8;o.drawImage(d,(e-p)/2,(e-p)/2,p,p)}}else c_(o,e,h,u)}const l=r.toDataURL();return this.iconCache.set(n,l),l}}function c_(i,t,e,n){const s=t*.46,r=t*.42,o=t*.08;i.save(),i.translate(0,o),i.save(),i.setTransform(s,s*.5,-s,s*.5,t/2,0),i.drawImage(e,0,0,1,1),i.restore(),i.save(),i.setTransform(s,s*.5,0,r,t/2-s,s*.5),i.drawImage(n,0,0,1,1),i.fillStyle="rgba(0,0,0,0.28)",i.fillRect(0,0,1,1),i.restore(),i.save(),i.setTransform(s,-s*.5,0,r,t/2,s*.5),i.drawImage(n,0,0,1,1),i.fillStyle="rgba(0,0,0,0.12)",i.fillRect(0,0,1,1),i.restore(),i.restore()}const it=16,Jt=96,Be=34,Lh=Be+4,se=(i,t,e)=>(t*it+e)*it+i,Rr=32768,qa=65536,Ph=(i,t)=>(i+Rr)*qa+(t+Rr);function xs(i){const t=Math.floor(i/qa)-Rr,e=i%qa-Rr;return[t,e]}const $a=(i,t,e)=>i+","+t+","+e,h_=`
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
`,u_=`
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
`;function Dh(i){return Array.isArray(i)?i.length>=4?"vec4":i.length===3?"vec3":i.length===2?"vec2":"":i&&typeof i=="object"?i.w!==void 0?"vec4":i.z!==void 0?"vec3":i.y!==void 0?"vec2":"":typeof i=="number"||typeof i=="boolean"?"float":""}function d_(i={}){const t=l=>Array.isArray(l)?l:[],e=l=>l.map(c=>`
  // ——— шейдер мода «${c.mod}»
${c.code}`).join(""),n=i.uniforms?Object.entries(i.uniforms).map(([l,c])=>Dh(c)).filter(Boolean).map((l,c)=>`uniform ${l} ${Object.keys(i.uniforms)[c]};`).join(`
`):"",s=(l,c,h)=>{const u=new RegExp(`[ \\t]*/\\*${c}\\*/[ \\t]*\\n?`);return h?l.replace(u,()=>`${h.trim()}
`):l.replace(u,"")},r=l=>l.length?e(l.map(c=>({mod:c.mod,code:`{
    ${c.code}
  }`}))):"";let o=s(h_,"MOD_DECL",n);o=s(o,"MOD_VERT",r(t(i.vert)));let a=s(u_,"MOD_DECL",n);return a=s(a,"MOD_FRAG",r(t(i.frag))),a=s(a,"MOD_FINAL",r(t(i.fragFinal))),{vertexShader:o,fragmentShader:a}}function Aa(i,t={}){const e=d_(t),s={...t.uniforms?Object.fromEntries(Object.entries(t.uniforms).map(([o,a])=>[o,{value:a}])):{},...fo.clone(rt.lights),uMap:{value:i.texture},uTime:{value:0},uSun:{value:1},uSunColor:{value:new Lt(1,.97,.9)},uAmbient:{value:new Lt(.36,.42,.55)},uTorch:{value:new Lt(1,.58,.22)},uFogColor:{value:new Lt(.72,.85,.98)},uFogDensity:{value:.008},uFogStart:{value:70},uFogEnd:{value:110},uExposure:{value:1},uQuality:{value:0},uSunDirW:{value:new U(0,1,0)},uSea:{value:Lh},uZenithC:{value:new Lt(.19,.4,.86)},uDay:{value:1},uDusk:{value:0},uNight:{value:0},uShadow:{value:0},uRefl:{value:0},uProbe:{value:null}},r=o=>{const a=new un({uniforms:{...s,uWave:{value:o.wave?1:0},uAlpha:{value:o.alpha},uAlphaTest:{value:o.alphaTest}},vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,transparent:o.transparent,side:$e,depthWrite:!0,lights:!0});a.extensions={derivatives:!0};for(const l of Object.keys(s))a.uniforms[l]=s[l];return a};return{uniforms:s,setQuality(o){s.uQuality.value=Math.max(0,Math.min(3,o|0))},setShadow(o){s.uShadow.value=Math.max(0,Math.min(1,o))},setReflection(o,a=0){s.uProbe.value=o??null,s.uRefl.value=o?Math.max(0,Math.min(1,a)):0},quality(){return s.uQuality.value},solid:r({wave:!1,alpha:1,alphaTest:.15,transparent:!1}),water:r({wave:!0,alpha:.76,alphaTest:.02,transparent:!0})}}const f_={id:"crt",name:"ЭЛТ-монитор",version:"1.0",author:"пример",description:"Скан-линии, лёгкое обесцвечивание и зерно. Шейдер + пост-проход",enabledByDefault:!1,shader:{name:"ЭЛТ-монитор",uniforms:{uScan:.4},fragFinal:`
      // зерно по координатам тайлы: без него flat-поверхности выглядят пластмассовыми
      float n = fract(sin(dot(vUv * vec2(431.7, 927.3), vec2(12.9898, 78.233))) * 43758.5453);
      col += (n - 0.5) * 0.02 * uScan;
    `,post:`
      float lines = 0.5 + 0.5 * sin(vUv.y * 780.0);
      c.rgb *= 1.0 - uScan * 0.2 * lines;
      float lum = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb = mix(c.rgb, vec3(lum), uScan * 0.16);
      // по краям кадра чуть холоднее и темнее — линза, а не виньетка из меню
      float r = length(vUv - 0.5);
      c.rgb *= 1.0 - uScan * 0.1 * smoothstep(0.25, 0.72, r);
    `}},p_=Object.freeze(Object.defineProperty({__proto__:null,default:f_},Symbol.toStringTag,{value:"Module"})),m_={id:"ruby",name:"Рубины",version:"1.0",author:"пример",description:"Рубиновая руда в камне, блок и самоцвет, два рецепта, голем из рубина",enabledByDefault:!1,tiles:{ruby_ore:{base:"#6f6f73",speck:"#d81b52",density:.34,seed:12},ruby_block:{base:"#b3154c",grid:4,shade:.2,seed:3},item_ruby:{base:"#e2386a",icon:"gem",light:"#ff8fb0",dark:"#8d0f36"}},blocks:[{key:"ruby_ore",name:"Рубиновая руда",tile:"ruby_ore",hard:2.4,sound:"stone",drops:"ruby"},{key:"ruby_block",name:"Рубиновый блок",tile:"ruby_block",hard:2,sound:"stone",drops:"ruby_block"},{key:"ruby",name:"Рубин",tile:"item_ruby",item:!0},{key:"ruby_lantern",name:"Рубиновый фонарь",tile:"ruby_block",torch:!0,glow:.85,drops:"ruby_lantern"},{key:"ruby_pickaxe",name:"Рубиновая кирка",tile:"item_ruby",tool:{kind:"pickaxe",mine:["stone","glass"],speed:6.8,damage:6,uses:300}},{key:"ruby_dust",name:"Рубиновая пыль",tile:"item_ruby",item:!0,bonusOf:"ruby_ore",bonus:.2}],recipes:[{out:"ruby_block",n:1,need:[["ruby",4]],name:"Рубиновый блок",table:!0},{out:"ruby",n:4,need:[["ruby_block",1]],name:"Рубины из блока"},{out:"ruby_lantern",n:2,need:[["ruby",1],["glass",1]],name:"Рубиновый фонарь"}],ore:{block:"ruby_ore",into:"stone",min:2,max:18,chance:.5,veins:9,size:5},mobs:{rubygolem:{name:"Рубиновый голем",color:"#c2185b",hp:24,size:1.25,speed:1.9,hostile:!0,damage:4,jumps:!0,darkOnly:!0,drops:[{block:"ruby",n:2},{block:"ruby_dust",n:1}]}}},g_=Object.freeze(Object.defineProperty({__proto__:null,default:m_},Symbol.toStringTag,{value:"Module"})),__={id:"warmdusk",name:"Тёплый закат",version:"1.0",author:"пример",description:"Последние минуты дня становятся золотистыми; яркость не растёт",enabledByDefault:!1,shader:{name:"Тёплый закат",uniforms:{uAmount:.55},frag:`
      float k = clamp(uDusk * uAmount, 0.0, 1.0);
      col = mix(col, col * vec3(1.16, 1.0, 0.84) + vec3(0.022, 0.004, 0.0), k);
      // нижняя половина кадра холоднее: закат сверху, тень земли снизу
      col = mix(col, col * vec3(0.94, 0.98, 1.06), k * clamp(1.0 - vWorld.y / 48.0, 0.0, 1.0) * 0.5);
    `}},v_=Object.freeze(Object.defineProperty({__proto__:null,default:__},Symbol.toStringTag,{value:"Module"})),cr={stone:"камень",iron:"железо",diamond:"алмаз"},hr={stone:"cobblestone",iron:"iron_ore",diamond:"diamond_ore"},Cr=[{out:"planks",n:4,need:[["log",1]],name:"Доски"},{out:"stick",n:4,need:[["planks",2]],name:"Палки"},{out:"crafting_table",n:1,need:[["planks",4]],name:"Верстак"},{out:"torch",n:4,need:[["stick",1],["coal_item",1]],name:"Факелы"},{out:"cobblestone",n:1,need:[["stone",1]],name:"Булыжник"},{out:"glass",n:1,need:[["sand",1],["coal_item",1]],table:!0,name:"Стекло"},{out:"stone_bricks",n:4,need:[["stone",2],["coal_item",1]],table:!0,name:"Каменный кирпич"},{out:"bricks",n:4,need:[["clay",2],["coal_item",1]],table:!0,name:"Кирпичи"},{out:"mossy_cobblestone",n:1,need:[["cobblestone",1],["sapling",1]],name:"Замшелый булыжник"},{out:"ice",n:1,need:[["snow",4]],table:!0,name:"Лёд"},{out:"lantern",n:2,need:[["glass",1],["flint",1],["coal_item",1]],name:"Фонарь"},{out:"flint",n:1,need:[["gravel",1]],name:"Кремень из гравия"},{out:"bread",n:1,need:[["wheat",3]],table:!0,name:"Хлеб"},{out:"compass",n:1,need:[["iron_ore",4],["emerald",1]],table:!0,name:"Компас"},{out:"clock",n:1,need:[["gold_ore",4],["redstone_ore",1]],table:!0,name:"Часы"},{out:"shears",n:1,need:[["iron_ore",2]],name:"Ножницы"},{out:"wood_pickaxe",n:1,need:[["planks",3],["stick",1]],name:"Кирка (дерево)"},{out:"wood_axe",n:1,need:[["planks",3],["stick",2]],name:"Топор (дерево)"},{out:"wood_shovel",n:1,need:[["planks",1],["stick",1]],name:"Лопата (дерево)"},{out:"wood_sword",n:1,need:[["planks",2],["stick",1]],name:"Меч (дерево)"},...["stone","iron","diamond"].flatMap(i=>[{out:`${i}_pickaxe`,n:1,need:[[hr[i],3],["stick",2]],table:!0,name:`Кирка (${cr[i]})`},{out:`${i}_axe`,n:1,need:[[hr[i],3],["stick",2]],table:!0,name:`Топор (${cr[i]})`},{out:`${i}_shovel`,n:1,need:[[hr[i],1],["stick",1]],table:!0,name:`Лопата (${cr[i]})`},{out:`${i}_sword`,n:1,need:[[hr[i],2],["stick",1]],table:!0,name:`Меч (${cr[i]})`}])],Ts=Cr.filter(i=>{if(!Pt(i.out))return!1;for(const[t]of i.need)if(!Pt(t))return!1;return!0}).map(i=>({outId:Pt(i.out),n:i.n,table:!!i.table,name:i.name,need:i.need.map(([t,e])=>({id:Pt(t),n:e}))}));function x_(i,t=null){const e=[];for(const n of i||[]){if(!n||!n.out||!Array.isArray(n.need)||!n.need.length)continue;const s={...n,mod:t},r={outId:Pt(n.out),n:Math.max(1,n.n|0||1),table:!!n.table,name:n.name,mod:t,need:n.need.map(([o,a])=>({id:Pt(o),n:Math.max(1,a|0||1)}))};Cr.push(s),Ts.push(r),e.push({src:s,clean:r})}return e}function cc(i,t,e){if(i.table&&!e)return!1;for(const n of i.need)if(t.count(n.id)<n.n)return!1;return!0}function y_(i,t){for(const n of i.need)if(t.take(n.id,n.n)!==n.n)return!1;if(t.add(i.outId,i.n)>0){for(const n of i.need)t.add(n.id,n.n);return!1}return!0}const M_=0,Ih=1,gr=2,Uh=3,Ya=4,Ye=dt.length,Fi=(i,t,e,n=0)=>t[e]?1:n,_r=new Uint8Array(Ye),b_=new Uint8Array(Ye),ja=new Uint8Array(Ye),Nh=new Uint8Array(Ye),kh=new Uint8Array(Ye),Ka=new Uint8Array(Ye),S_=new Uint8Array(Ye),Fh=new Float32Array(Ye),Oh=new Float32Array(Ye),Za=new Float32Array(Ye),E_=new Uint8Array(Ye),Bh=new Uint8Array(Ye),Ja=new Uint8Array(Ye);for(let i=0;i<Ye;i++){const t=dt[i];_r[i]=Fi(i,t,"opaque"),b_[i]=Fi(i,t,"solid"),kh[i]=Fi(i,t,"cutout"),Nh[i]=Fi(i,t,"hideSame"),Ka[i]=Fi(i,t,"fullBright"),S_[i]=Fi(i,t,"replaceable"),Fh[i]=t.light||0,Oh[i]=t.inset||0,Za[i]=t.render==="cross"?t.plantH??.62:1,E_[i]=t.render==="item"?1:0,Bh[i]=t.tinted?1:0,Ja[i]=t.liquid?1:0,ja[i]=t.render==="cube"?Ih:t.render==="liquid"?gr:t.render==="cross"?Uh:t.render==="torch"?Ya:M_}const w_=56,hc=70,T_=61,nt={stone:Pt("stone"),dirt:Pt("dirt"),grass:Pt("grass"),sand:Pt("sand"),sandstone:Pt("sandstone"),gravel:Pt("gravel"),bedrock:Pt("bedrock"),water:Pt("water"),snow:Pt("snow"),podzol:Pt("podzol"),log:Pt("log"),leaves:Pt("leaves"),coal:Pt("coal_ore"),iron:Pt("iron_ore"),gold:Pt("gold_ore"),diamond:Pt("diamond_ore"),redstone:Pt("redstone_ore"),cactus:Pt("cactus"),tall_grass:Pt("tall_grass"),fern:Pt("fern"),flower_red:Pt("flower_red"),flower_yellow:Pt("flower_yellow"),planks:Pt("planks"),glass:Pt("glass"),torch:Pt("torch"),glowstone:Pt("glowstone"),cobblestone:Pt("cobblestone"),stone_bricks:Pt("stone_bricks"),farmland:Pt("farmland"),wheat:Pt("wheat"),hay_block:Pt("hay_block")},Gt={OCEAN:0,BEACH:1,PLAINS:2,FOREST:3,DESERT:4,SNOWY:5,MOUNTAIN:6,SAVANNA:7,SWAMP:8,TAIGA:9},cn=32,Lr=cn*1.5,uc=12,dc=[Gt.PLAINS,Gt.SAVANNA,Gt.DESERT,Gt.TAIGA,Gt.SNOWY],A_=[[0,0],[38,0],[-38,0],[0,38],[0,-38],[26,26],[-26,-26],[26,-26],[-26,26]],Qa=42,R_=[[.62,.78,1],[.72,.86,1],[.8,.9,1],[.76,.9,1],[.95,.92,.82],[.86,.94,1],[.88,.94,1],[.86,.92,.96],[.52,.72,.56],[.78,.9,.98]],C_=["Океан","Пляж","Равнины","Лес","Пустыня","Снега","Горы","Саванна","Болото","Тайга"],fc=[[.62,.84,.44],[.74,.86,.56],[.62,.84,.44],[.45,.76,.32],[.9,.86,.56],[.76,.88,.82],[.7,.8,.64],[.84,.82,.44],[.5,.64,.3],[.52,.78,.42]];var Ur,zh;class L_{constructor(t=1){qr(this,Ur);this.seed=t>>>0,this.h=new Wi(this.seed^1374496513),this.bi=new Wi(this.seed^2654435769),this.cv=new Wi(this.seed^625341585),this.or=new Wi(this.seed^2146121005),this.cache=new Map,this._villages=new Map}climate(t,e){const n=this.bi.fbm2(t/470+13.7,e/470-4.2,3)*.5+.5,s=this.bi.fbm2(t/380-31.3,e/380+57.1,3)*.5+.5;return[n,s]}rawHeight(t,e){const n=this.h.fbm2(t/420,e/420,4)*.5+.5,s=this.h.fbm2(t/118,e/118,3),r=this.h.ridged2(t/260,e/260,3),o=this.h.fbm2(t/46,e/46,1),a=Math.max(0,this.h.fbm2(t/700+220,e/700-120,2)*1.5),l=Math.pow(r,1.9)*(8+a*78);let c=24+n*21+s*10.5+l+o*1.3;return n<.5&&(c-=(.5-n)*58),Math.max(3,Math.min(Jt-8,Math.round(c)))}col(t,e){const n=t*4194304+e;let s=this.cache.get(n);if(s)return s;const r=this.rawHeight(t,e),[o,a]=this.climate(t,e);let l;return r<Be-2?l=Gt.OCEAN:r>=w_?l=Gt.MOUNTAIN:r<=Be+1?l=Gt.BEACH:o>.55&&a<.46?l=Gt.DESERT:o<.36?l=Gt.SNOWY:r<=Be+7&&a>.6?l=Gt.SWAMP:a>.55?l=Gt.FOREST:o>.5&&a>.4?l=Gt.SAVANNA:o<.46&&a>.44?l=Gt.TAIGA:l=Gt.PLAINS,s={h:r,temp:o,humid:a,biome:l},this.cache.set(n,s),s}height(t,e){return this.col(t,e).h}biomeAt(t,e){return this.col(t,e).biome}climateAt(t,e){const n=this.col(t,e);return[n.temp,n.humid]}isCave(t,e,n){const s=Math.abs(this.cv.perlin3(t/52,e/64,n/52));return s<.06&&Math.abs(this.cv.perlin3(t/46+90,e/57+40,n/46-70))<.08||e<24&&s<.16&&this.cv.fbm3(t/26,e/20,n/26,3)>.62}oreCellType(t,e,n){const s=this.or.perlin3(t*.26,e*1.05,n*.26);if(s<.58)return 0;const r=e*4;return r<13&&s>.855?nt.diamond:r<23&&s>.8?nt.redstone:r<31&&s>.755?nt.gold:r<57&&s>.685?nt.iron:s>.625?nt.coal:0}villageSite(t,e){const n=t+","+e;if(this._villages.has(n))return this._villages.get(n);const s=Ke(this,Ur,zh).call(this,t,e);return this._villages.size>8192&&this._villages.clear(),this._villages.set(n,s),s}villageAt(t,e){const n=Math.floor(t/(cn*3)),s=Math.floor(e/(cn*3));for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){const a=this.villageSite(n+r,s+o);if(!a)continue;const l=t-a.cx,c=e-a.cz;if(Math.abs(l)<=Lr&&Math.abs(c)<=Lr)return a}return null}villageColumn(t){const{site:e,cell:n,ci:s,cj:r,lx:o,lz:a}=t,l=e.h,c=[],h=Math.abs(o)>uc||Math.abs(a)>uc,u=n.kind==="plaza",d=(_,m)=>{_>=0&&_<Jt&&c.push([_,m])};if(h)return d(l,e.desert?nt.sandstone:nt.gravel),c;if(u){const _=Math.max(Math.abs(o),Math.abs(a));if(_<=1)d(l,nt.cobblestone),d(l+1,nt.water);else if(_===2)d(l,nt.cobblestone),d(l+1,nt.stone_bricks);else if(Math.abs(o)===9&&Math.abs(a)===9){for(let m=l+1;m<=l+3;m++)d(m,nt.log);d(l+4,nt.glowstone),d(l,nt.cobblestone)}else _<=7&&d(l,nt.stone_bricks);return c}const p=n.w>>1,g=n.l>>1;if(n.kind==="house"){const _=o+p,m=a+g,f=_>=0&&m>=0&&_<n.w&&m<n.l,x=n.tall?5:4,v=l+2+x,b=v-1;if(!f)return Math.abs(o)<=p+1&&Math.abs(a)<=g+1&&d(b,nt.planks),c;const R=_===0||m===0||_===n.w-1||m===n.l-1,w=e.desert?nt.sandstone:e.cold?nt.cobblestone:nt.planks,S=nt.log;if(R){const I=(_===0||_===n.w-1)&&(m===0||m===n.l-1),y=_===p,A=m===g,q=(s<1&&_===n.w-1||s>1&&_===0||r<1&&m===n.l-1||r>1&&m===0)&&(s!==1?A:y);for(let j=l+1;j<=l+x;j++){if(q&&(j===l+1||j===l+2)){d(j,0);continue}d(j,I||j===l+x?S:w)}!q&&(s!==1?A:y)&&(d(l+3,nt.glass),d(l+2,nt.glass)),d(l,e.desert?nt.sand:nt.cobblestone),q&&d(l+3,nt.log)}else{d(l,nt.planks);const I=_===0||m===0||_===n.w-1||m===n.l-1;for(let y=l+1;y<b;y++)d(y,0);if(d(b,nt.planks),d(v,I?nt.planks:0),_===p&&m===g&&d(v,nt.log),_===1&&m===1)for(let y=l+1;y<=v+1;y++)d(y,nt.cobblestone);_===p&&m===g&&n.tall&&d(v+1,nt.glowstone)}return c}if(n.kind==="farm"){const _=Math.abs(o)<=8&&Math.abs(a)<=6;if(Math.abs(o-9)<=1&&Math.abs(a+5)<=1)return d(l,nt.water),c;if(Math.abs(o)===10||Math.abs(a)===8)return d(l+1,nt.log),c;if(!_)return c;const f=(a+6)%2===0;return d(l,f?nt.farmland:nt.dirt),f&&d(l+1,nt.wheat),Math.abs(o+9)<=1&&Math.abs(a-6)<=1&&(d(l+1,nt.hay_block),o===-9&&a===6&&d(l+2,nt.hay_block)),c}return Math.abs(o)===4&&Math.abs(a)===4&&!(o+a&2)&&d(l+1,nt.hay_block),Math.abs(o)===7&&Math.abs(a)===1&&(d(l+1,nt.log),d(l+2,nt.log)),c}treeAt(t,e){if(P_(this,t,e))return null;const n=at(t,e,this.seed^1540483477),s=this.col(t,e),r=s.biome;if(s.h>T_)return null;const o=r===Gt.FOREST?.055:r===Gt.TAIGA?.042:r===Gt.PLAINS?.008:r===Gt.SAVANNA?.006:r===Gt.SWAMP?.03:r===Gt.SNOWY?.02:r===Gt.MOUNTAIN?.004:0;if(r===Gt.DESERT)return n>.006||s.h<=Be+1?null:{kind:"cactus",trunk:2+(at(t,e,7)*3|0),h:s.h};if(o===0||n>o)return null;const a=s.h;if(a<=Be+1||Math.max(Math.abs(a-this.col(t+1,e).h),Math.abs(a-this.col(t,e-1).h),Math.abs(a-this.col(t-1,e).h),Math.abs(a-this.col(t,e+1).h))>4)return null;const c=r===Gt.SNOWY||r===Gt.MOUNTAIN||r===Gt.TAIGA||r===Gt.SWAMP,h=c?6+(at(t,e,11)*5|0):4+(at(t,e,13)*3|0);return{kind:c?"spruce":"oak",trunk:h,h:a}}treeBlocks(t,e){const n=this.treeAt(t,e);if(!n)return null;const s=[],r=n.h;if(n.kind==="cactus"){for(let a=1;a<=n.trunk;a++)s.push([0,r+a,0,nt.cactus]);return s}if(n.kind==="spruce"){for(let l=1;l<=n.trunk;l++)s.push([0,r+l,0,nt.log]);const a=r+n.trunk;for(let l=0;l<3;l++){const c=l===0?2:l===1?1:0;for(let h=-c;h<=c;h++)for(let u=-c;u<=c;u++)Math.abs(h)+Math.abs(u)>c+1||h===0&&u===0||s.push([h,a-1-l,u,nt.leaves])}return s.push([0,a+1,0,nt.leaves]),s}for(let a=1;a<=n.trunk;a++)s.push([0,r+a,0,nt.log]);const o=r+n.trunk;for(let a=-2;a<=1;a++){const l=a<=-1?2:1;for(let c=-l;c<=l;c++)for(let h=-l;h<=l;h++){const u=Math.abs(c)+Math.abs(h);if(u>l+1||c===0&&h===0&&a<1||u===l+1&&at(t+c,e+h+a*3,this.seed+31)>.6)continue;const d=o+a;d>=Jt||s.push([c,d,h,nt.leaves])}}return s.push([0,o+1,0,nt.leaves]),s}generate(t){this.cache.clear();const{cx:e,cz:n}=t,s=t.blocks,r=new Uint8Array(it*it);(!t.biomes||t.biomes.length!==it*it)&&(t.biomes=new Uint8Array(it*it));const o=t.biomes;s.fill(0);let a=0,l=0;for(let c=0;c<it;c++)for(let h=0;h<it;h++){const u=e*it+h,d=n*it+c,p=this.col(u,d),g=p.h,_=p.biome,m=p.temp;r[c*it+h]=g,g>l&&(l=g),o[c*it+h]=_;let f=-1,x=0;const v=_===Gt.DESERT||_===Gt.BEACH,b=_===Gt.SNOWY||_===Gt.TAIGA||g>=hc&&m<.45,R=_===Gt.SWAMP;for(let S=0;S<=g;S++){let I;S===0?I=nt.bedrock:S===g?g<=Be+1?I=at(u,d,91)>.86?nt.gravel:nt.sand:R?I=g<=Be+2?nt.podzol:nt.grass:v?I=nt.sand:b?I=nt.snow:_===Gt.MOUNTAIN?I=nt.stone:_===Gt.SNOWY?I=nt.podzol:I=nt.grass:S>g-4?(I=v||g<=Be+1?nt.dirt:b||_===Gt.MOUNTAIN?nt.stone:nt.dirt,v&&S<g-1&&(I=nt.sandstone)):(I=nt.stone,S>1&&this.isCave(u,S,d)?I=0:S<g-3&&(S>>2!==f&&(f=S>>2,x=this.oreCellType(u,f,d)),x&&Hg(u,S,d,this.seed+x*17)<I_[x]&&(I=x)),S===1&&at(u*3,d*5,this.seed+5)>.55&&(I=nt.bedrock)),I&&(s[se(h,S,c)]=I,a++)}const w=R?Be+1:Be;for(let S=g+1;S<=w;S++)s[se(h,S,c)]=nt.water;w>l&&(l=w)}try{for(let c=0;c<it;c++)for(let h=0;h<it;h++){const u=e*it+h,d=n*it+c,p=Hh(this,u,d);if(!p)continue;const g=D_(p,u-p.cx,d-p.cz);if(!g)continue;const _=this.villageColumn(g),m=r[c*it+h];let f=p.h;if(!s[se(h,p.h,c)]){let x=p.h;for(;x>0&&!s[se(h,x-1,c)]&&p.h-x<10;)x--;for(let v=p.h;v>=x;v--)s[se(h,v,c)]=v===p.h?p.top:nt.dirt}if(m<p.h)for(let x=m+1;x<=p.h;x++)s[se(h,x,c)]=x===p.h?p.top:nt.dirt;else if(m>p.h){for(let x=p.h+1;x<=m;x++)s[se(h,x,c)]=0;s[se(h,p.h,c)]=p.top}for(const[x,v]of _)s[se(h,x,c)]=v,v!==0&&x>f&&(f=x),x+1>l&&(l=x+1);r[c*it+h]=Math.min(Jt-1,f)}for(let c=-3;c<it+3;c++)for(let h=-3;h<it+3;h++){const u=e*it+h,d=n*it+c,p=this.treeBlocks(u,d);if(p)for(const[g,_,m,f]of p){const x=h+g,v=c+m;if(x<0||v<0||x>=it||v>=it)continue;const b=_;if(b<0||b>=Jt)continue;const R=se(x,b,v),w=s[R];(f!==nt.leaves||w===0||w===nt.tall_grass)&&(f===nt.log?s[R]=f:w===0&&(s[R]=f,a++),b+1>l&&(l=b+1))}}}catch(c){Gh(this,c)}for(let c=0;c<it;c++)for(let h=0;h<it;h++){const u=e*it+h,d=n*it+c,p=r[c*it+h];if(p<=Be||p>=hc)continue;const g=se(h,p,c);if(s[g]!==nt.grass&&s[g]!==nt.podzol)continue;const _=at(u,d,this.seed^668265263),m=se(h,p+1,c);if(s[m]!==0)continue;const f=this.col(u,d).biome,x=f===Gt.FOREST||f===Gt.SWAMP,v=f===Gt.SAVANNA;p+1>l&&(l=p+1);const b=at(u>>2,d>>2,this.seed+23601>>>0),R=b>.72?.2:b>.46?.6:1,w=(x?.115:v?.062:.085)*R,S=w+(x?.05:.026)*R;_<w?s[m]=nt.tall_grass:_<S?s[m]=nt.fern:_>.968?s[m]=nt.flower_red:_>.95&&(s[m]=nt.flower_yellow)}return t.hmax=Math.min(Jt-1,l),a}}Ur=new WeakSet,zh=function(t,e){if(at(t*3+1,e*7+5,(this.seed^5350175)>>>0)<.72)return null;const n=Math.round((at(t+11,e-3,this.seed+91>>>0)-.5)*14),s=Math.round((at(t-7,e+17,this.seed+441>>>0)-.5)*14),r=t*cn*3+cn*1.5+n,o=e*cn*3+cn*1.5+s,a=this.col(r,o);if(!dc.includes(a.biome))return null;let l=255,c=0;for(const[g,_]of A_){const m=this.col(r+g,o+_);if(!dc.includes(m.biome))return null;m.h<l&&(l=m.h),m.h>c&&(c=m.h)}if(c-l>6||l<=Be+1)return null;const h=Math.max(Be+2,Math.round((l+c)/2)),u=a.biome===Gt.DESERT,d=a.biome===Gt.SNOWY||a.biome===Gt.TAIGA,p=[];for(let g=0;g<3;g++)for(let _=0;_<3;_++){if(_===1&&g===1){p.push({kind:"plaza"});continue}const m=at(t*97+_*13+5,e*61+g*29+7,this.seed+_*31+g*733>>>0),f=m<.56?"house":m<.78?"farm":"yard",x=at(_*7+e,g*11+t,this.seed+17>>>0);p.push({kind:f,w:9+(x>.55?3:0)+(x>.86?2:0),l:9+(x>.35&&x<=.6?3:0),tall:x>.72})}return p.some(g=>g.kind==="house")||(p[0]={...p[0],kind:"house",w:9,l:9,tall:!1}),{cx:r,cz:o,h,biome:a.biome,desert:u,cold:d,cells:p,top:u?nt.sand:d&&a.biome===Gt.SNOWY?nt.snow:nt.grass}};function Hh(i,t,e){try{return typeof i.villageAt=="function"?i.villageAt(t,e):null}catch(n){return Gh(i,n),null}}const P_=(i,t,e)=>!!Hh(i,t,e);function D_(i,t,e){const n=Math.floor((t+Lr)/cn),s=Math.floor((e+Lr)/cn);return n<0||s<0||n>2||s>2?null:{site:i,ci:n,cj:s,lx:t-(n-1)*cn,lz:e-(s-1)*cn,cell:i.cells[s*3+n]}}function Gh(i,t){i&&i._villageWarned||(i&&(i._villageWarned=!0),console.warn("застройка деревень пропущена (мир генерируется без неё):",t?.message??t))}function Vh(i,t,e){const n=i?.terrain;return typeof n?.villageAt=="function"?!!n.villageAt(Math.floor(t),Math.floor(e)):!1}const I_={[nt.coal]:.42,[nt.iron]:.34,[nt.gold]:.26,[nt.diamond]:.22,[nt.redstone]:.32},pc=2,U_=3,xo=[{dir:[1,0,0],shade:.76,verts:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],uv:[[0,1],[0,0],[1,0],[1,1]]},{dir:[-1,0,0],shade:.76,verts:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],uv:[[0,1],[0,0],[1,0],[1,1]]},{dir:[0,1,0],shade:1,verts:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]},{dir:[0,-1,0],shade:.52,verts:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{dir:[0,0,1],shade:.9,verts:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],uv:[[0,1],[0,0],[1,0],[1,1]]},{dir:[0,0,-1],shade:.9,verts:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],uv:[[0,1],[0,0],[1,0],[1,1]]}],mc=1024,N_=10,k_=8192,Xi=[];function gc(){for(let i=0;i<Xi.length;i++)if(Xi[i].cap>=mc){const t=Xi[i];return Xi.splice(i,1),t.reset(),t}return new Wh(mc)}function _c(i){i&&Xi.length<N_&&i.cap<=k_&&(i.reset(),Xi.push(i))}const qi={ao:!0,smoothLight:!0},F_=[.4,.6,.8,1],O_=.125;class Wh{constructor(t=4096){this.cap=t,this.pos=new Float32Array(t*12),this.uv=new Float32Array(t*8),this.light=new Float32Array(t*16),this.tint=new Float32Array(t*12),this.index=new Uint32Array(t*6),this.tr=1,this.tg=1,this.tb=1,this.q=0}setTint(t,e,n){this.tr=t,this.tg=e,this.tb=n}ensure(){if(this.q<this.cap)return;this.cap=Math.max(64,this.cap*2);const t=(e,n)=>{const s=new e.constructor(this.cap*n);return s.set(e),s};this.pos=t(this.pos,12),this.uv=t(this.uv,8),this.light=t(this.light,16),this.tint=t(this.tint,12),this.index=t(this.index,6)}push(t,e,n,s){this.ensure();const r=this.q*12,o=this.q*12,a=this.q*16,l=this.q*8,c=this.q*6;for(let d=0;d<4;d++){const p=t[d],g=n[d],_=r+d*3;this.pos[_]=p[0],this.pos[_+1]=p[1],this.pos[_+2]=p[2];const m=a+d*4;this.light[m]=g[0],this.light[m+1]=g[1],this.light[m+2]=g[2],this.light[m+3]=g[3]||0;const f=o+d*3;this.tint[f]=this.tr,this.tint[f+1]=this.tg,this.tint[f+2]=this.tb,this.uv[l+d*2]=e[d][0],this.uv[l+d*2+1]=e[d][1]}const h=this.q*4,u=this.index;s?(u[c]=h+1,u[c+1]=h+2,u[c+2]=h+3,u[c+3]=h+1,u[c+4]=h+3,u[c+5]=h):(u[c]=h,u[c+1]=h+1,u[c+2]=h+2,u[c+3]=h,u[c+4]=h+2,u[c+5]=h+3),this.q++}take(){return this.q===0?null:{position:this.pos.slice(0,this.q*12),uv:this.uv.slice(0,this.q*8),light:this.light.slice(0,this.q*16),tint:this.tint.slice(0,this.q*12),index:this.index.slice(0,this.q*6),quads:this.q,vertices:this.q*4}}reset(){this.q=0,this.tr=1,this.tg=1,this.tb=1}slice(){return this.q===0?null:{position:this.pos.subarray(0,this.q*12),uv:this.uv.subarray(0,this.q*8),light:this.light.subarray(0,this.q*16),tint:this.tint.subarray(0,this.q*12),index:this.index.subarray(0,this.q*6),quads:this.q,vertices:this.q*4}}}function Pr(i,t,e,n){const s=t*n,r=i%n,o=i/n|0,a=(t-e)/2;return{u0:(r*t+a)/s,v0:(o*t+a)/s,s:e/s}}const to=21,eo=to*to;let _s=null;function B_(i){const t=i*eo;return!_s||_s.length<t?_s=new Uint8Array(t):_s.fill(0,0,t),_s}class z_{constructor(t,e,n){const s=[];for(let r=0;r<9;r++)s.push(null);this.at=(r,o)=>{var a;return s[a=(r+1)*3+(o+1)]??(s[a]=t.getChunk(e+r,n+o)??void 0)},this.world=t,this.cx=e,this.cz=n}}function H_(i,t,e){const n=gc();let s=null;const r=t.cx,o=t.cz,a=t.blocks,l=t.biomes,c=new z_(i,r,o),h=it,u=(C,P,X)=>{if(P<0)return 1;if(P>=Jt)return 0;if(C>=0&&C<h&&X>=0&&X<h)return a[se(C,P,X)];const N=C<0?-1:C>=h?1:0,H=X<0?-1:X>=h?1:0,$=c.at(N,H);return $?$.blocks[se(C+(N?-N*h:0),P,X+(H?-H*h:0))]:0},d=(C,P,X)=>{if(C>=0&&C<h&&X>=0&&X<h)return _r[a[se(C,P,X)]]===1;const N=C<0?-1:C>=h?1:0,H=X<0?-1:X>=h?1:0,$=c.at(N,H);return $?_r[$.blocks[se(C+(N?-N*h:0),P,X+(H?-H*h:0))]]===1:!1},p=(C,P,X)=>{if(P>=Jt)return 1;const N=C<0?-1:C>=h?1:0,H=X<0?-1:X>=h?1:0,$=N||H?c.at(N,H):t,tt=C+(N?-N*h:0),et=X+(H?-H*h:0);let V;return $?V=$.skyH[(et&15)*h+(tt&15)]:V=i.terrain.col(r*h+C,o*h+X).h+1,V===255||P>=V?1:Math.max(.13,1-(V-P)*.055)},g=(C,P,X)=>{if(P<0||P>=Jt)return 0;const N=C<0?-1:C>=h?1:0,H=X<0?-1:X>=h?1:0,$=N||H?c.at(N,H):t;return!$||!$.light?0:$.light[se(C+(N?-N*h:0),P,X+(H?-H*h:0))]},_=[0,0,0],m=[0,0,0],f=[0,0,0],x=[0,0,0],v=[0,0],b=[0,0],R=[0,0],w=[0,0],S=[0,0,0],I=[0,0,0],y=[0,0,0],A=[0,0,0],G=t.hmax?Math.min(Jt,Math.max(t.hmax+2,Lh)):Jt,q=B_(Math.min(Jt,G+2)+1),j=(C,P,X)=>{if(P<0)return!0;if(P>=Jt)return!1;if(C<-2||C>h+1||X<-2||X>h+1||(P+1)*eo>=q.length)return d(C,P,X);const N=(P+1)*eo+(X+2)*to+(C+2),H=q[N];if(H)return H===2;const $=d(C,P,X)?2:1;return q[N]=$,$===2};for(let C=0;C<G;C++)for(let P=0;P<h;P++){const X=(C*h+P)*h;for(let N=0;N<h;N++){const H=a[X+N];if(H===0)continue;const $=ja[H],tt=dt[H];let et=1,V=1,K=1;if(Bh[H]||Ja[H]){const Mt=l?l[P*h+N]:2,ut=(Ja[H]?R_:fc)[Mt]??fc[2];et=ut[0],V=ut[1],K=ut[2]}if(n.setTint(et,V,K),s&&s.setTint(et,V,K),$===Uh||$===Ya){const Mt=Pr(e.index[tt.tiles.all],e.cell,e.tile,e.grid),ut=Ka[H]?1:g(N,C,P),qt=(Q,gt)=>[Mt.u0+Q*Mt.s,Mt.v0+gt*Mt.s];v[0]=qt(0,1)[0],v[1]=qt(0,1)[1],b[0]=qt(0,0)[0],b[1]=qt(0,0)[1],R[0]=qt(1,0)[0],R[1]=qt(1,0)[1],w[0]=qt(1,1)[0],w[1]=qt(1,1)[1],S[0]=I[0]=y[0]=A[0]=1,S[1]=I[1]=y[1]=A[1]=1,S[2]=I[2]=y[2]=A[2]=ut,S[3]=I[3]=y[3]=A[3]=0;const J=[v,b,R,w],Y=[S,I,y,A];if($===Ya)n.push([[N+.6,C,P+.6],[N+.6,C+.625,P+.6],[N+.4,C+.625,P+.6],[N+.4,C,P+.6]],J,Y),n.push([[N+.4,C,P+.4],[N+.4,C+.625,P+.4],[N+.6,C+.625,P+.4],[N+.6,C,P+.4]],J,Y),n.push([[N+.6,C,P+.4],[N+.6,C+.625,P+.4],[N+.6,C+.625,P+.6],[N+.6,C,P+.6]],J,Y),n.push([[N+.4,C,P+.6],[N+.4,C+.625,P+.6],[N+.4,C+.625,P+.4],[N+.4,C,P+.4]],J,Y),n.push([[N+.4,C+.625,P+.6],[N+.6,C+.625,P+.6],[N+.6,C+.625,P+.4],[N+.4,C+.625,P+.4]],[v,b,R,w],Y);else{const ot=Za[H]>0?Za[H]:1;n.push([[N+.146,C,P+.146],[N+.146,C+ot,P+.146],[N+.854,C+ot,P+.854],[N+.854,C,P+.854]],J,Y),n.push([[N+.854,C,P+.146],[N+.854,C+ot,P+.146],[N+.146,C+ot,P+.854],[N+.146,C,P+.854]],J,Y)}continue}if($!==Ih&&$!==gr)continue;const ht=$===gr;let yt=n;ht&&(s||(s=gc(),s.setTint(et,V,K)),yt=s);const vt=Oh[H],kt=Ka[H]===1,Ot=Fh[H],Dt=kh[H]===1,te=Nh[H]===1,F=ht&&u(N,C+1,P)!==H?O_:0,ue=tt.tiles,Rt=qi.ao&&!ht&&!kt&&!Dt;for(let Mt=0;Mt<6;Mt++){const ut=xo[Mt],qt=N+ut.dir[0],It=C+ut.dir[1],T=P+ut.dir[2],M=u(qt,It,T);if(M===H&&te||M!==0&&(_r[M]===1||ht&&ja[M]===gr))continue;const O=Mt===pc?ue.top??ue.all:Mt===U_?ue.bottom??ue.all:ue.side??ue.all,J=e.index[O]??e.index[ue.all],Y=Pr(J,e.cell,e.tile,e.grid),Q=ht&&F>0&&Mt===pc?1:0;let gt=p(qt,It,T);qi.smoothLight||(gt=gt>=1?1:.28);const ot=kt?1:Ot>0?Math.max(Ot,g(qt,It,T)):g(qt,It,T),_t=ut.shade,At=[_,m,f,x],Bt=[v,b,R,w],Z=[S,I,y,A],ee=[0,0,0,0];for(let Et=0;Et<4;Et++){const bt=ut.verts[Et];At[Et][0]=vt?N+(bt[0]?1-vt:vt):N+bt[0],At[Et][1]=C+bt[1]-(bt[1]===1?F:0),At[Et][2]=vt?P+(bt[2]?1-vt:vt):P+bt[2];let wt=_t;if(Rt){const Ft=ut.verts[Et+1&3],ne=ut.verts[Et+3&3],ce=Ft[0]-bt[0],Vt=Ft[1]-bt[1],st=Ft[2]-bt[2],L=ne[0]-bt[0],lt=ne[1]-bt[1],ct=ne[2]-bt[2],Ct=j(qt+ce,It+Vt,T+st)?1:0,Tt=j(qt+L,It+lt,T+ct)?1:0,re=Ct&&Tt?0:j(qt+ce+L,It+Vt+lt,T+st+ct)?1:0,ie=Ct&&Tt?0:3-(Ct+Tt+re);wt*=F_[ie],ee[Et]=ie}Z[Et][0]=wt,Z[Et][1]=gt,Z[Et][2]=ot,Z[Et][3]=Q;const mt=ut.uv[Et];Bt[Et][0]=Y.u0+mt[0]*Y.s,Bt[Et][1]=Y.v0+mt[1]*Y.s}yt.push(At,Bt,Z,ee[0]+ee[2]>ee[1]+ee[3])}}}const D={solid:n.take(),water:s?s.take():null};return _c(n),_c(s),D}const Nn={pig:{name:"Свинья",hp:10,w:.85,h:.9,speed:1.5,passive:!0,aggro:0,drops:()=>[{id:Pt("pork"),n:2}],parts:[{p:[0,.05,.28],s:[.75,.6,.9],tile:"mob_pig",shade:1},{p:[0,.32,-.5],s:[.42,.42,.34],tile:"mob_face",shade:.95},{p:[0,.18,-.68],s:[.28,.2,.1],tile:"mob_snout",shade:.9},{p:[-.24,-.3,.28],s:[.2,.42,.2],tile:"mob_pig",shade:.72,limb:1},{p:[.24,-.3,.28],s:[.2,.42,.2],tile:"mob_pig",shade:.72,limb:1},{p:[-.24,-.3,-.22],s:[.2,.42,.2],tile:"mob_pig",shade:.72,limb:1},{p:[.24,-.3,-.22],s:[.2,.42,.2],tile:"mob_pig",shade:.72,limb:1}]},cow:{name:"Корова",hp:14,w:1.1,h:1.25,speed:1.4,passive:!0,aggro:0,drops:()=>[{id:Pt("leather"),n:2},{id:Pt("pork"),n:1}],parts:[{p:[0,.1,.25],s:[.95,.8,1.15],tile:"mob_cow",shade:1},{p:[0,.38,-.62],s:[.55,.52,.42],tile:"mob_face",shade:.96},{p:[-.36,.62,-.55],s:[.14,.16,.14],tile:"mob_cow",shade:1.05},{p:[.36,.62,-.55],s:[.14,.16,.14],tile:"mob_cow",shade:1.05},{p:[-.3,-.35,.45],s:[.24,.5,.24],tile:"mob_cow",shade:.7,limb:1},{p:[.3,-.35,.45],s:[.24,.5,.24],tile:"mob_cow",shade:.7,limb:1},{p:[-.3,-.35,-.1],s:[.24,.5,.24],tile:"mob_cow",shade:.7,limb:1},{p:[.3,-.35,-.1],s:[.24,.5,.24],tile:"mob_cow",shade:.7,limb:1}]},sheep:{name:"Овца",hp:8,w:.9,h:1.15,speed:1.5,passive:!0,aggro:0,drops:()=>[{id:Pt("wool_white"),n:2}],parts:[{p:[0,.1,.2],s:[.8,.75,1],tile:"mob_sheep",shade:1},{p:[0,.45,-.45],s:[.45,.42,.36],tile:"mob_face",shade:.9},{p:[-.26,-.32,.3],s:[.2,.45,.2],tile:"mob_sheep",shade:.72,limb:1},{p:[.26,-.32,.3],s:[.2,.45,.2],tile:"mob_sheep",shade:.72,limb:1},{p:[-.26,-.32,-.05],s:[.2,.45,.2],tile:"mob_sheep",shade:.72,limb:1},{p:[.26,-.32,-.05],s:[.2,.45,.2],tile:"mob_sheep",shade:.72,limb:1}]},husk:{name:"Сумеречник",hp:18,w:.6,h:1.85,speed:2.5,hostile:!0,damage:3,reach:1.8,aggro:20,burnsInSun:!0,drops:()=>[{id:Pt("coal_item"),n:1}],parts:[{p:[0,.35,0],s:[.55,.7,.32],tile:"mob_husk",shade:1},{p:[0,.82,0],s:[.44,.44,.44],tile:"mob_husk",shade:1.06},{p:[-.36,.4,.16],s:[.18,.62,.18],tile:"mob_husk",shade:.8,limb:1},{p:[.36,.4,.16],s:[.18,.62,.18],tile:"mob_husk",shade:.8,limb:1},{p:[-.14,-.42,0],s:[.2,.7,.2],tile:"mob_husk",shade:.72,limb:1},{p:[.14,-.42,0],s:[.2,.7,.2],tile:"mob_husk",shade:.72,limb:1}]},villager:{name:"Житель",hp:20,w:.7,h:1.9,speed:1,passive:!0,aggro:0,villageOnly:!0,drops:()=>[{id:Pt("emerald"),n:1}],parts:[{p:[0,.05,.02],s:[.66,1.1,.46],tile:"mob_villager",shade:1},{p:[0,.62,0],s:[.52,.5,.52],tile:"mob_villager_face",shade:.98},{p:[0,.58,-.3],s:[.2,.22,.16],tile:"mob_villager_face",shade:1.12},{p:[-.4,.12,.02],s:[.16,.74,.22],tile:"mob_villager",shade:.78,limb:1},{p:[.4,.12,.02],s:[.16,.74,.22],tile:"mob_villager",shade:.78,limb:1},{p:[-.16,-.62,.02],s:[.24,.55,.26],tile:"mob_villager",shade:.64,limb:1},{p:[.16,-.62,.02],s:[.24,.55,.26],tile:"mob_villager",shade:.64,limb:1}]},crawler:{name:"Пещерник",hp:12,w:.95,h:.75,speed:3.1,hostile:!0,damage:2,reach:1.6,aggro:13,jumps:!0,darkOnly:!0,drops:()=>[{id:Pt("glowstone"),n:1}],parts:[{p:[0,.05,0],s:[.8,.5,.8],tile:"mob_crawler",shade:1},{p:[0,.2,-.42],s:[.4,.34,.34],tile:"mob_crawler",shade:1.08},{p:[-.4,-.15,.24],s:[.16,.34,.16],tile:"mob_crawler",shade:.7,limb:1},{p:[.4,-.15,.24],s:[.16,.34,.16],tile:"mob_crawler",shade:.7,limb:1},{p:[-.4,-.15,-.24],s:[.16,.34,.16],tile:"mob_crawler",shade:.7,limb:1},{p:[.4,-.15,-.24],s:[.16,.34,.16],tile:"mob_crawler",shade:.7,limb:1}]}},G_=24,V_=96,W_=16,vc=44;function Oi(i,t,e,n,s,r){const a=Math.floor(t-s/2+.001),l=Math.floor(t+s/2-.001),c=Math.floor(e+.001),h=Math.floor(e+r-.001),u=Math.floor(n-s/2+.001),d=Math.floor(n+s/2-.001);for(let p=c;p<=h;p++){if(p<0)return!0;for(let g=u;g<=d;g++)for(let _=a;_<=l;_++)if(i.isSolid(_,p,g))return!0}return!1}function X_(i,t,e){const n=new Wh(6),s=Pr(t.index[i.tile]??0,t.cell,t.tile,t.grid),r=i.shade??1,[o,a,l]=i.s,c=i.p[1]+e,h=[[0,0,0],[0,0,0],[0,0,0],[0,0,0]],u=[[0,0],[0,0],[0,0],[0,0]],d=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];for(const m of xo){for(let f=0;f<4;f++){const x=m.verts[f];h[f][0]=i.p[0]+(x[0]-.5)*o,h[f][1]=c+(x[1]-.5)*a,h[f][2]=i.p[2]+(x[2]-.5)*l;const v=m.uv[f];u[f][0]=s.u0+v[0]*s.s,u[f][1]=s.v0+v[1]*s.s,d[f][0]=r*m.shade,d[f][1]=1,d[f][2]=0,d[f][3]=0}n.push([[h[0][0],h[0][1],h[0][2]],[h[1][0],h[1][1],h[1][2]],[h[2][0],h[2][1],h[2][2]],[h[3][0],h[3][1],h[3][2]]],[[u[0][0],u[0][1]],[u[1][0],u[1][1]],[u[2][0],u[2][1]],[u[3][0],u[3][1]]],[[d[0][0],d[0][1],d[0][2],d[0][3]],[d[1][0],d[1][1],d[1][2],d[1][3]],[d[2][0],d[2][1],d[2][2],d[2][3]],[d[3][0],d[3][1],d[3][2],d[3][3]]],!1)}const p=n.slice(),g=new Le;g.setAttribute("position",new me(p.position,3)),g.setAttribute("uv",new me(p.uv,2)),g.setAttribute("light",new me(p.light,4));const _=new Float32Array(p.tint.length);return _.fill(1),g.setAttribute("tint",new me(_,3)),g.setIndex(new me(p.index,1)),g.computeBoundingSphere(),g}class q_{constructor(t,e,n,s,r){const o=Nn[t];this.type=t,this.def=o,this.id=r,this.x=e,this.y=n,this.z=s,this.vx=0,this.vy=0,this.vz=0,this.yaw=Math.random()*Math.PI*2,this.hp=o.hp,this.onGround=!1,this.think=Math.random()*2,this.walkPhase=Math.random()*6,this.hurtT=0,this.attackCd=0,this.fleeT=0,this.burnT=0,this.lightKey=-1,this.parts=[],this.group=new yn}}var Re,Xh,qh,ys,Ms,$h;class $_{constructor({world:t,scene:e,material:n,atlas:s,onPlayerHit:r,onDrop:o,particles:a,audio:l,rng:c=Math.random}){qr(this,Re);this.world=t,this.scene=e,this.material=n,this.atlas=s,this.onPlayerHit=r??(()=>{}),this.onDrop=o??(()=>{}),this.particles=a,this.audio=l,this.rng=c,this.list=[],this.cap=14,this.enabled=!0,this.spawnT=1,this.day=1,this.nextId=1,this.kills=0}get count(){return this.list.length}clear(){for(const t of this.list){this.scene.remove(t.group);for(const e of t.parts)e.geo.dispose()}this.list.length=0}dispose(){this.clear()}trySpawn(t){if(!this.enabled||this.list.length>=this.cap)return!1;const e=this.world,n=this.day<.3,s=Object.keys(Nn),r=[];for(const o of e.chunks.values()){if(!o?.blocks)continue;const a=o.cx*16+8-t.x,l=o.cz*16+8-t.z,c=Math.hypot(a,l);(c>6||c<vc)&&r.push(o)}for(let o=0;o<14&&r.length;o++){const a=r[this.rng()*r.length|0],l=this.rng()*16|0,c=this.rng()*16|0,h=a.cx*16+l,u=a.cz*16+c,d=h-t.x,p=u-t.z,g=Math.hypot(d,p);if(g<W_*.55||g>vc)continue;let _=e.terrain.col(h,u).h;for(let y=0;y<10&&e.isSolid(h,_+1,u);y++)_++;if(_<3)continue;const m=e.getBlock(h,_,u);if(!m||lc(m))continue;const f=_+1,x=e.skyAt(h,f,u),v=Math.max(x*15*(n?.22:1),e.lightAt(h,f,u)*15),b=Vh(e,h,u),R=s.filter(y=>Ke(this,Re,qh).call(this,Nn[y],n,v,f,b));if(!R.length)continue;const w=R[this.rng()*R.length|0],S=Nn[w];if(Oi(e,h+.5,f,u+.5,S.w,S.h))continue;const I=new q_(w,h+.5,f,u+.5,this.nextId++);return Ke(this,Re,Xh).call(this,I),I.lightKey=-1,Ke(this,Re,Ms).call(this,I,!0),this.list.push(I),!0}return!1}pick(t,e,n,s,r,o,a){let l=null,c=a;for(const h of this.list){const u=h.def.w/2+.14,d=h.def.h,p=[h.x-u,h.y,h.z-u],g=[h.x+u,h.y+d,h.z+u],_=[t,e,n],m=[s,r,o];let f=0,x=c,v=!0;for(let b=0;b<3;b++){if(Math.abs(m[b])<1e-6){if(_[b]<p[b]||_[b]>g[b]){v=!1;break}continue}let R=(p[b]-_[b])/m[b],w=(g[b]-_[b])/m[b];if(R>w){const S=R;R=w,w=S}if(f=Math.max(f,R),x=Math.min(x,w),f>x){v=!1;break}}v&&x>=0&&f<=c&&(c=f,l=h)}return l}hurt(t,e,n,s,r=5.5){if(!t||t.hp<=0)return!1;t.hp-=e,t.hurtT=.3,t.def.passive&&(t.fleeT=5);const o=t.x-n,a=t.z-s,l=Math.hypot(o,a)||1;return t.vx+=o/l*r,t.vz+=a/l*r,t.vy=Math.max(t.vy,4),this.particles?.burst(t.x,t.y+t.def.h*.6,t.z,8,t.def.hostile?[.5,.75,.45]:[.9,.4,.4],{speed:2.6,life:.5,spread:.5}),this.audio?.hit?.("soft",1.5),Ke(this,Re,Ms).call(this,t,!0),t.hp<=0&&(this.kills++,Ke(this,Re,ys).call(this,t,!0)),!0}update(t,e){if(!(!this.world||!e)){if(!this.enabled||this.cap<=0){this.list.length&&this.clear();return}this.spawnT-=t,this.spawnT<=0&&(this.spawnT=.8,this.trySpawn(e));for(let n=this.list.length-1;n>=0;n--){const s=this.list[n];if(Math.hypot(s.x-e.x,s.z-e.z)>V_||Math.abs(s.y-e.y)>48){Ke(this,Re,ys).call(this,s,!1);continue}Ke(this,Re,$h).call(this,s,t,e)}}}nearCount(t,e=40){let n=0;for(const s of this.list)Math.hypot(s.x-t.x,s.z-t.z)<e&&n++;return n}}Re=new WeakSet,Xh=function(t){const e=t.def.h/2;for(const n of t.def.parts){const s=X_(n,this.atlas,e),r=new xe(s,this.material);r.position.set(0,0,0),t.parts.push({mesh:r,geo:s,base:n.p,limb:!!n.limb}),t.group.add(r)}t.group.position.set(t.x,t.y,t.z),t.group.rotation.y=t.yaw,this.scene.add(t.group)},qh=function(t,e,n,s,r=!1){return t.villageOnly?r:t.hostile&&r||t.darkOnly&&n>7||s<6?!1:e||n>7},ys=function(t,e){const n=this.list.indexOf(t);n>=0&&this.list.splice(n,1),this.scene.remove(t.group);for(const s of t.parts)s.geo.dispose();if(e){this.particles?.burst(t.x,t.y+t.def.h*.5,t.z,18,[.85,.85,.85],{speed:3.4,life:.7,spread:.6});for(const s of t.def.drops?t.def.drops():[])s.id&&this.onDrop(s.id,s.n);this.audio?.breakBlock?.("wool")}},Ms=function(t,e=!1){const n=this.world,s=Math.floor(t.x),r=Math.floor(t.y+t.def.h*.7),o=Math.floor(t.z),a=n.skyAt(s,r,o),l=n.lightAt(s,r,o),c=Math.round(a*16)*32+Math.round(l*16),h=t.hurtT>0;if(!h&&!e&&c===t.lightKey)return;t.lightKey=c;const u=Math.min(1.3,.18+a*(.2+.85*this.day)+l*.95),d=h?Math.min(1.7,u+.8):u,p=h?u*.4:u,g=h?u*.35:u;for(const _ of t.parts){const m=_.geo.getAttribute("tint"),f=m.array;for(let x=0;x<f.length;x+=3)f[x]=d,f[x+1]=p,f[x+2]=g;m.needsUpdate=!0}},$h=function(t,e,n){const s=this.world,r=t.def;t.hurtT>0&&(t.hurtT-=e),t.fleeT>0&&(t.fleeT-=e),t.attackCd-=e,t.think-=e;const o=n.x-t.x,a=n.z-t.z,l=n.y-t.y,c=Math.hypot(o,a);let h=0,u=0,d=r.speed;const p=r.aggro||16;if(r.hostile&&c<p&&Math.abs(l)<5){const y=c||1;h=o/y,u=a/y,t.yaw=Math.atan2(h,u),c<r.reach&&Math.abs(l)<2.2&&t.attackCd<=0&&(t.attackCd=1.15,this.onPlayerHit(r.damage,t),r.jumps&&(t.vy=Math.max(t.vy,6.4)))}else if(t.fleeT>0){const y=c||1;h=-o/y,u=-a/y,t.yaw=Math.atan2(h,u),d*=1.7}else if(t.think<=0)if(t.think=1.8+this.rng()*4,this.rng()<.4)h=0,u=0;else{const y=this.rng()*Math.PI*2;t.yaw=y,h=Math.sin(y),u=Math.cos(y)}else t.think>.7&&(h=Math.sin(t.yaw),u=Math.cos(t.yaw));const _=h*d,m=u*d,f=Math.min(1,e*(r.hostile?9:5));if(t.vx+=(_-t.vx)*f,t.vz+=(m-t.vz)*f,t.vy-=G_*e,t.vy<-52&&(t.vy=-52),r.burnsInSun&&this.day>.5)if(s.skyAt(Math.floor(t.x),Math.floor(t.y+1),Math.floor(t.z))>=.97){if(t.burnT+=e,t.burnT>1&&(t.burnT=0,t.hp-=1.8,this.particles?.burst(t.x,t.y+r.h*.8,t.z,5,[1,.6,.2],{speed:1.4,life:.45,spread:.3}),Ke(this,Re,Ms).call(this,t,!0),t.hp<=0)){Ke(this,Re,ys).call(this,t,!0);return}}else t.burnT=0;const x=r.w,v=r.h,b=(y,A)=>{if(!A)return;const G=y==="x"?t.x+A:t.x,q=y==="z"?t.z+A:t.z;if(!Oi(s,G,t.y,q,x,v)){t.x=G,t.z=q;return}const j=!Oi(s,G,t.y+1.02,q,x,v)&&!Oi(s,t.x,t.y+1.02,t.z,x,v);if(t.onGround&&j){t.y+=1.02,t.x=G,t.z=q,t.vy=0;return}r.jumps&&t.onGround&&(t.vy=7.2),y==="x"?t.vx=0:t.vz=0};b("x",t.vx*e),b("z",t.vz*e);const R=lc(s.getBlock(Math.floor(t.x),Math.floor(t.y+.3),Math.floor(t.z)));R&&(t.vy=Math.max(t.vy,1.6));const w=t.y+t.vy*e;if(t.vy<=0?(Oi(s,t.x,w,t.z,x,v)?(t.y=Math.floor(w)+1,t.y<w&&(t.y=w),t.vy=0,t.onGround=!0):(t.y=w,t.onGround=(R||t.onGround)&&!1),R&&(t.onGround=!1)):(Oi(s,t.x,w,t.z,x,v)?t.vy=0:t.y=w,t.onGround=!1),t.y<-4){Ke(this,Re,ys).call(this,t,!1);return}const S=Math.hypot(t.vx,t.vz);t.walkPhase+=e*(3.4+S*2.2);const I=Math.sin(t.walkPhase)*Math.min(.75,S*.3);for(let y=0;y<t.parts.length;y++){const A=t.parts[y];A.limb&&(A.mesh.rotation.x=(y%2?I:-I)*.85)}t.group.position.set(t.x,t.y+Math.abs(Math.sin(t.walkPhase))*.03*Math.min(1,S),t.z),t.group.rotation.y=t.yaw,Ke(this,Re,Ms).call(this,t)};const Y_=Object.fromEntries(Object.entries(Nn).map(([i,t])=>[i,t.name]));function j_(i,t,e=()=>{}){const n=[];for(const[s,r]of Object.entries(t||{})){if(!r||Nn[s]||!/^[a-z][a-z0-9_]*$/.test(s))continue;const o=r.tile||`mob_${s}`,a=+(r.h??r.size??1)||1,l=+(r.w??r.size??.8)||.8;let c=r.parts;if(!c){e(o,{base:r.color||"#8a7f6a",grain:3,seed:s.length*31+5});const u=Math.max(.16,a*.34);c=[{p:[0,a*.26,0],s:[l*.9,a*.52,l*.95],tile:o,shade:1},{p:[0,a*.3,-l*.6],s:[l*.56,l*.56,l*.4],tile:o,shade:.96},{p:[-l*.3,-u,l*.2],s:[l*.24,u,l*.24],tile:o,shade:.7,limb:1},{p:[l*.3,-u,l*.2],s:[l*.24,u,l*.24],tile:o,shade:.7,limb:1},{p:[-l*.3,-u,-l*.22],s:[l*.24,u,l*.24],tile:o,shade:.7,limb:1},{p:[l*.3,-u,-l*.22],s:[l*.24,u,l*.24],tile:o,shade:.7,limb:1}]}const h={name:String(r.name||s),hp:+r.hp||10,w:l,h:a,speed:+r.speed||1.6,passive:r.hostile?!1:r.passive!==!1,aggro:+r.aggro||(r.hostile?14:0),hostile:!!r.hostile,damage:+r.damage||(r.hostile?2:0),reach:+r.reach||1.7,burnsInSun:!!r.burnsInSun,jumps:!!r.jumps,darkOnly:!!r.darkOnly,villageOnly:!!r.villageOnly,mod:i,parts:c,drops:()=>(r.drops||[]).map(u=>({id:Pt(typeof u=="string"?u:u.block||u.item||u.key)||0,n:Math.max(1,(u&&u.n)|0||1)})).filter(u=>u.id)};Nn[s]=h,Y_[s]=h.name,n.push(s)}return n}const Yh="litecraft:mods",gn={ids:256,tiles:256,shader:6e3,mods:64},pt={loaded:!1,list:[],tiles:[],blockIds:[],modOfKey:new Map,recipes:[],mobs:[],ore:[],uniforms:{},shader:{vert:[],frag:[],fragFinal:[],post:[],names:[]}},Bi=/^[a-z][a-z0-9_-]{1,23}$/;function K_(){const i={};let t;try{t=Object.assign({"../../mods/example-crt.js":p_,"../../mods/example-ruby.js":g_,"../../mods/example-warmdusk.js":v_})}catch{return{}}for(const[e,n]of Object.entries(t||{})){const s=String(e).split("/").pop().replace(/\.js$/,""),r=n&&(n.default??n);r&&typeof r=="object"&&!Array.isArray(r)&&(i[s]={def:r,file:s})}return i}function zr(i){try{const t=JSON.parse(i?.getItem?.(Yh)||"null");if(!t||typeof t!="object")return{disabled:[],enabled:[],user:[]};const e=n=>(Array.isArray(n)?n:[]).filter(s=>typeof s=="string");return{disabled:e(t.disabled),enabled:e(t.enabled),user:(Array.isArray(t.user)?t.user:[]).filter(n=>n&&typeof n.src=="string")}}catch{return{disabled:[],enabled:[],user:[]}}}function xc(i,t,e){const n=new Set(e.enabled),s=new Set(e.disabled);return t?.enabledByDefault===!1?!n.has(i):s.has(i)}function jh(i,t){try{return i?.setItem?.(Yh,JSON.stringify(t)),!0}catch{return!1}}function Z_({storage:i=globalThis.localStorage,force:t=!1,skipFiles:e=!1}={}){if(pt.loaded&&!t)return Ln();t&&mv(),pt.loaded=!0;const n=zr(i),s=new Set;if(!e)for(const{def:r,file:o}of Object.values(K_())){const a=Dr(r.id||o);s.has(a)||(s.add(a),no(a,r,`mods/${o}.js`,xc(a,r,n)))}for(const r of n.user){const o=Kh(r.src),a=Dr(o.def?.id||r.id||"user");if(o.error){pt.list.push({id:a,name:a,source:"настроен вручную",ok:!1,off:!1,error:o.error,applied:null});continue}if(s.has(a)){pt.list.push({id:a,name:a,source:"настроен вручную",ok:!1,off:!1,error:`id «${a}» уже занят другим модом`,applied:null});continue}s.add(a),no(a,o.def,"настроен вручную",xc(a,o.def,n))}return Ln()}const Dr=i=>String(i||"user").toLowerCase().replace(/[^a-z0-9_-]/g,"").slice(0,24)||"user";function Kh(i){let t=String(i||"").trim();if(!t)return{error:"пусто"};t=t.replace(/^(?:\s*\/\/[^\n]*\n|\s)+/,"").replace(/^export\s+default\s+/,"").replace(/^module\.exports\s*=\s*/,"").replace(/;+\s*$/,"").trim();const e=t;try{const n=new Function(`"use strict"; return (${e});`)();return!n||typeof n!="object"||Array.isArray(n)?{error:"нужен объект-описание: { id, name, blocks: […] }"}:{def:n}}catch(n){return{error:`не разобрал код — ${n.message}`}}}function no(i,t,e="код",n=!1){const s={id:Dr(i),name:String(t?.name||i),source:e,ok:!1,off:!!n,error:"",applied:null};if(n)return s.error="выключен",pt.list.push(s),s;try{if(pt.list.filter(o=>o.ok).length>=gn.mods)throw new Error(`слишком много модов (максимум ${gn.mods})`);const r=J_(s.id,t);if(r.length)throw new Error(r.join("; "));s.applied=Q_(s.id,t),s.ok=!0}catch(r){s.error=String(r?.message||r)}return pt.list.push(s),s}function J_(i,t){const e=[];if(!t||typeof t!="object")return["мод должен быть объектом с описаниями"];Bi.test(i)||e.push(`id «${i}»: 2…24 символа, строчные латинские, цифры, _ или -`),t.tiles||t.blocks||t.recipes||t.ore||t.mobs||t.shader||e.push("мод не делает ничего: нужна хотя бы одна секция — tiles, blocks, recipes, ore, mobs или shader");const n=t.tiles?Object.keys(t.tiles):[];for(const l of n){Bi.test(l)||e.push(`имя тайла «${l}»: только строчные латинские, цифры, _ или -`),ln.includes(l)&&e.push(`тайл «${l}» уже есть в атласе — придумай своё имя`);const c=t.tiles[l],h=["base","colors","speck","blobs","density","seed","grid","border","icon","grain","soft","shade","light","dark","paint"];for(const d of Object.keys(c||{}))h.includes(d)||e.push(`тайл «${l}»: не знаю поле «${d}» (есть ${h.join(", ")})`);const u=d=>typeof d=="string"&&(/^#[0-9a-fA-F]{3,8}$/.test(d.trim())||/^[a-z]+$/.test(d.trim()));for(const[d,p]of Object.entries(c||{}))["base","speck","blobs","light","dark"].includes(d)&&(u(p)||e.push(`тайл «${l}»: ${d} — цвет строкой «#rrggbb» или именем («red»), а не «${p}»`));for(const[d,p]of[].concat(c?.colors||[]).entries())u(p)||e.push(`тайл «${l}»: colors[${d}] — не цвет («${p}»)`)}ln.length+n.length>gn.tiles&&e.push(`атлас вмещает ${gn.tiles} тайлов, с этим модом будет ${ln.length+n.length}`);const s=(t.blocks||[]).map(l=>String(l?.key||"")).filter(l=>Bi.test(l)),r=new Set(s);r.size!==s.length&&e.push("в блоках два блока с одним key — второй движок пропустит молча, убери дубль");let o=0;for(const l of t.blocks||[]){const c=String(l?.key||"");if(!Bi.test(c)){e.push(`блок без корректного key: ${JSON.stringify(l?.key)}`);continue}if(ze.has(c)){l.patch||e.push(`блок «${c}» уже существует — меняй через patch: { key: '${c}', patch: { … } }`);continue}o++;const h=l.tile?[l.tile]:Object.values(l.tiles||{});!h.length&&!l.item&&!l.patch&&e.push(`у блока «${c}» нет ни tile, ни tiles`);for(const u of h)!ln.includes(u)&&!n.includes(u)&&e.push(`блок «${c}» ссылается на тайл «${u}», которого нет в атласе`);for(const[u,d]of Object.entries({drops:l.drops,bonusOf:l.bonusOf}))d!=null&&!ze.has(String(d))&&!r.has(String(d))&&e.push(`блок «${c}»: ${u} «${d}» — такого блока нет`);if(l.tool){const u=["axe","pickaxe","shovel","sword","shears"],d=String(l.tool.kind||"");u.includes(d)||e.push(`блок «${c}»: tool.kind «${d}» — движок умеет ${u.join(", ")}`),l.tool.speed!=null&&!(+l.tool.speed>0&&+l.tool.speed<=20)&&e.push(`блок «${c}»: tool.speed 0…20`),l.tool.damage!=null&&!(+l.tool.damage>=0&&+l.tool.damage<=60)&&e.push(`блок «${c}»: tool.damage 0…60`)}l.light!=null&&!(+l.light>=0&&+l.light<=1)&&e.push(`у блока «${c}» light должен быть 0…1`),l.glow!=null&&!(+l.glow>=0&&+l.glow<=1)&&e.push(`у блока «${c}» glow должен быть 0…1`),l.food!=null&&!(+l.food>0&&+l.food<=20)&&e.push(`у блока «${c}» food — пол-единицы сердца, 1…20`),l.tool&&!/^[a-z]+$/.test(String(l.tool.kind||""))&&e.push(`у блока «${c}» tool.kind — слово из строчных букв`)}dt.length+o>gn.ids&&e.push(`id блока — байт: сейчас ${dt.length}, с этим модом будет ${dt.length+o}, максимум ${gn.ids}`);for(const l of t.recipes||[]){if(!l||!l.out||!Array.isArray(l.need)||!l.need.length){e.push("рецепт = { out: key, n, need: [[key, число], …], name, table?, shape? }");continue}const c=h=>ze.has(h)||r.has(h);c(l.out)||e.push(`рецепт «${l.name||l.out}»: результат «${l.out}» неизвестен`),Number(l.n??1)>0&&Number(l.n??1)<=64||e.push(`рецепт «${l.name||l.out}»: n должно быть 1…64`);for(const h of l.need)(!Array.isArray(h)||h.length!==2||!c(h[0])||!(Number(h[1])>0))&&e.push(`рецепт «${l.name||l.out}»: ингредиент ${JSON.stringify(h)} — нужно [ключ существующего блока, число]`)}for(const l of[].concat(t.ore||[]))l&&((!l.block||!(ze.has(l.block)||r.has(l.block)))&&e.push(`руда ссылается на неизвестный блок «${l?.block}»`),l.into&&!(ze.has(l.into)||r.has(l.into))&&e.push(`руда: заменять «${l.into}» — такого блока нет`),(l.min??0)>(l.max??255)&&e.push("руда: min больше max"),l.chance!=null&&!(+l.chance>0&&+l.chance<=1)&&e.push("руда: chance — доля 0…1"));for(const[l,c]of Object.entries(t.mobs||{})){Bi.test(l)||e.push(`моб: ключ «${l}» не подходит под ${Bi}`),Nn[l]&&e.push(`моб «${l}» уже существует`),(!c||!c.color&&!c.parts)&&e.push(`моб «${l}»: нужен color (тогда части соберутся сами) или parts`);for(const h of c&&c.parts||[]){!ln.includes(h?.tile)&&!n.includes(h?.tile)&&e.push(`моб «${l}»: часть ссылается на тайл «${h?.tile}», которого нет`);for(const[u,d]of[["p",3],["s",3]])(!Array.isArray(h?.[u])||h[u].length!==d||h[u].some(p=>!Number.isFinite(+p)))&&e.push(`моб «${l}»: у части поля ${u} должны быть ${d} числа`)}for(const h of c&&c.drops||[]){const u=typeof h=="string"?h:h?.block||h?.item||h?.key;(!u||!ze.has(String(u))&&!r.has(String(u)))&&e.push(`моб «${l}»: дроп «${u}» — такого блока нет`)}c&&c.hp!=null&&!(+c.hp>0&&+c.hp<=200)&&e.push(`моб «${l}»: hp 1…200`)}if(t.shader){(!t.shader||typeof t.shader!="object"||Array.isArray(t.shader))&&e.push("shader должен быть объектом с vert/frag/fragFinal/post");const l=t.shader&&typeof t.shader=="object"?t.shader:{};["vert","frag","fragFinal","post"].some(d=>l[d]!=null)||e.push("в shader нет ни одной вставки: нужна vert, frag, fragFinal или post");const c=d=>typeof d=="function"?String(d({tileIndex:p=>ln.indexOf(String(p))})):d==null?null:String(d);for(const d of["vert","frag","fragFinal","post"]){if(l[d]==null)continue;if(typeof l[d]!="function"&&typeof l[d]!="string"){e.push(`шейдер ${d}: строка или функция`);continue}const p=c(l[d]);p.length>gn.shader&&e.push(`шейдер ${d}: ${p.length} символов, максимум ${gn.shader}`),Ir=new Set(Object.keys(l.uniforms||{}));const g=nv(p,d==="vert"?"vert":"frag");Ir=null,g&&e.push(`шейдер ${d}: ${g}`)}const h=new Set(Object.keys(l.uniforms||{}));for(const d of h)/^u[A-Z0-9][A-Za-z0-9_]*$/.test(d)||e.push(`униформу мода надо назвать uSomething, а не «${d}»`);for(const[d,p]of Object.entries(l.uniforms||{}))if(!/^u[A-Z0-9][A-Za-z0-9_]*$/.test(d))e.push(`униформу мода надо назвать uSomething, а не «${d}»`);else if(io.has(d))e.push(`униформа «${d}» уже униформа игры — своё назови, например, ${d}Mod`);else if(d in pt.uniforms)e.push(`униформа «${d}» уже занята другим модом`);else if(!(typeof p=="number"||typeof p=="boolean"||Array.isArray(p)))e.push(`униформу «${d}» задают числом или массивом [r, g, b]`);else{const g=["vert","frag","fragFinal","post"].map(_=>c(l[_])).join(`
`);g&&!g.includes(d)&&e.push(`униформа «${d}» объявлена, но не используется ни в одной вставке`)}const u=Object.keys(l).filter(d=>!["name","vert","frag","fragFinal","post","uniforms"].includes(d));for(const d of u)e.push(`в shader нет поля «${d}» (есть name, vert, frag, fragFinal, post, uniforms)`)}const a=Object.keys(t).filter(l=>!["id","name","version","author","description","enabledByDefault","tiles","blocks","recipes","ore","mobs","shader"].includes(l));for(const l of a)e.push(`не знаю секцию «${l}» (умею tiles, blocks, recipes, ore, mobs, shader, enabledByDefault)`);return e}function Q_(i,t){const e={tiles:[],blocks:[],patches:[],recipes:[],mobs:[],ore:0,shader:null,uniforms:[]};for(const[n,s]of Object.entries(t.tiles||{}))Wa(n,Mc(s,n)),pt.tiles.push(n),e.tiles.push(n);for(const n of t.blocks||[]){if(n.patch&&ze.has(n.key)){Object.assign(ze.get(n.key),yc(n.patch,n.key,ze.get(n.key))),pt.modOfKey.set(n.key,i),e.patches.push(n.key);continue}if(ze.has(n.key))continue;const s=yc(n,n.key,null);s.mod=i,dt.push(s),ze.set(n.key,s),pt.blockIds.push(s.id),pt.modOfKey.set(n.key,i),e.blocks.push(s.key)}if(t.recipes?.length){const n=x_(t.recipes,i);for(const s of n)pt.recipes.push(s);e.recipes=n.map(s=>s.clean.name||s.clean.outId)}if(t.mobs){const n=j_(i,t.mobs,(s,r)=>{Wa(s,Mc(r,s)),pt.tiles.push(s),e.tiles.push(s)});for(const s of n)pt.mobs.push(s);e.mobs=n}for(const n of[].concat(t.ore||[])){const s=ze.get(n.block)?.id??Un;s&&(pt.ore.push({mod:i,block:s,into:n.into?ze.get(n.into)?.id??Un:Un,y0:Math.max(1,Math.min(126,n.min??2)),y1:Math.max(2,Math.min(127,n.max??24)),chance:Math.max(.02,Math.min(1,n.chance??.35)),veins:Math.max(1,Math.min(48,n.veins??8)),size:Math.max(1,Math.min(12,n.size??4)),salt:(so(i)^so(String(n.block)))>>>0}),e.ore++)}if(t.shader){const n=t.shader,s=r=>String(typeof r=="function"?r({tileIndex:o=>ln.indexOf(String(o))}):r);n.vert&&pt.shader.vert.push({mod:i,code:s(n.vert)}),n.frag&&pt.shader.frag.push({mod:i,code:s(n.frag)}),n.fragFinal&&pt.shader.fragFinal.push({mod:i,code:s(n.fragFinal)}),n.post&&pt.shader.post.push({mod:i,code:s(n.post)}),pt.shader.names.push(n.name||`шейдер ${i}`);for(const[r,o]of Object.entries(n.uniforms||{}))pt.uniforms[r]={value:Zh(o)},e.uniforms.push(r);e.shader=n.name||i}return e}function yc(i,t,e){const n=e?{}:{id:dt.length,key:t,name:String(i.name??t),tiles:null,render:"cube",solid:!0,opaque:!0,breakable:!0,hardness:1,sound:"stone"},s=(r,o,a)=>{a!==void 0&&(r[o]=a)};s(n,"name",i.name!=null?String(i.name):void 0),i.tile!=null&&(n.tiles={all:String(i.tile)}),i.tiles&&(n.tiles={...n.tiles||{},...tv(i.tiles)}),s(n,"hardness",i.hardness!=null?+i.hardness:i.hard!=null?+i.hard:void 0),i.item&&(n.render="item",n.solid=!1,n.opaque=!1,n.breakable=!1),i.plant&&(n.render="cross",n.solid=!1,n.opaque=!1,n.cutout=!0,n.replaceable=!0,n.plantH=+i.plant||.5,n.hardness=.05,n.sound="grass"),i.torch&&(n.render="torch",n.solid=!1,n.opaque=!1,n.cutout=!0,n.slim=!0,n.fullBright=!0,n.hardness=.3),i.liquid&&(n.render="liquid",n.liquid=!0,n.solid=!1,n.opaque=!1,n.hideSame=!0,n.breakable=!1),i.transparent&&(n.opaque=!1,n.cutout=!0),i.glow!=null&&(n.light=+i.glow,n.fullBright=!0),s(n,"light",i.light!=null?+i.light:void 0),i.food!=null&&!i.plant&&!i.liquid&&!i.torch&&(n.render="item",n.solid=!1,n.opaque=!1,n.breakable=!1),s(n,"food",i.food!=null?+i.food:void 0),s(n,"info",i.info!=null?String(i.info):void 0),s(n,"drops",i.drops!=null?String(i.drops):void 0),i.bonusOf!=null&&(n.bonusOf=String(i.bonusOf),n.bonus=i.bonus!=null?+i.bonus:.15),i.tool&&(n.tool={kind:String(i.tool.kind),mine:i.tool.mine||[],speed:+(i.tool.speed??3),damage:+(i.tool.damage??2),uses:+(i.tool.uses??150)},n.render="item",n.solid=!1,n.opaque=!1,n.breakable=!1);for(const r of["solid","opaque","cutout","breakable","fullBright","slim","hideSame","replaceable","tinted","inset","sound","render","hardness"])i[r]!==void 0&&(n[r]=i[r]);return e||(!n.tiles&&n.render!=="none"?n.tiles={all:"stone"}:n.tiles&&(n.tiles={all:n.tiles.all??n.tiles.side??n.tiles.top,...n.tiles})),n}function tv(i){const t={};for(const[e,n]of Object.entries(i))t[["top","bottom","side","all"].includes(e)?e:"all"]=String(n);return t}function Zh(i){if(typeof i=="boolean")return i?1:0;if(Array.isArray(i)){const t=i.map(e=>{const n=Number(e);return Number.isFinite(n)?n:0});return t.length>=3?{x:t[0],y:t[1],z:t[2]??0}:t.length===2?{x:t[0],y:t[1]}:t[0]}return Number(i)||0}function Mc(i,t){const e=i&&typeof i=="object"?i:{base:String(i||"#888888")};if(typeof e.paint=="function")return e.paint;const n=so(t)^(e.seed|0)*7919,s=e.base??"#7f7f7f",r=e.colors??[s,$i(s,-.1),$i(s,.08),$i(s,-.18)];return o=>{if(e.soft===!1?o.noise(r,n,e.grain??6):o.mottle(r,n,5,1.4,3.2,e.grain??2.2),e.grid){const a=Math.max(2,e.grid|0);for(let l=0;l<16;l++)for(let c=0;c<16;c++)(c%a===0||l%a===0)&&o.set(c,l,$i(s,-(e.shade??.22)))}if(e.speck){const a=Math.max(1,Math.round((e.density??.2)*40));o.speckles(e.speck,a,n+13,8),e.density>.3&&o.blobs(e.speck,2,n+29,2.2)}return e.blobs&&o.blobs(e.blobs,4,n+41,2.8),e.icon&&ev(o,e.icon,e.base??"#e91e63",e),e.border&&o.border(e.border),o}}function ev(i,t,e,n){const s=n.light??$i(e,.25),r=n.dark??$i(e,-.3);i.clear();const o=(a,l,c,h=255)=>i.set(a,l,c,h);if(t==="gem")for(let a=0;a<16;a++){const l=Math.round(7-Math.abs(a-7.5)*1.6);if(!(l<=0))for(let c=8-l;c<8+l;c++)o(c,a,c+a<12?s:c+a>18?r:e)}else if(t==="rod"||t==="ingot"||t==="dust")for(let a=3;a<13;a++)if(t==="rod")o(a,12-a,e),o(a+1,12-a,r);else if(t==="ingot")for(let l=3;l<13;l++)for(let c=6;c<11;c++)l+c>9&&l+c<20&&o(l,c,c<8?s:e);else o(6+a%4,8+a%3,e),o(4+a%6,6+a%5,r);else if(t==="ball")for(let a=0;a<16;a++)for(let l=0;l<16;l++){const c=l-7.5,h=a-7.5,u=c*c+h*h;u<30&&o(l,a,u<12?s:e)}else for(let a=4;a<12;a++)for(let l=4;l<12;l++)o(l,a,(l+a)%4===0?r:e);return i}function $i(i,t){const e=String(i).replace("#",""),n=e.length===3?e.split("").map(l=>l+l).join(""):e.slice(0,6),s=parseInt(n.slice(0,2),16)||0,r=parseInt(n.slice(2,4),16)||0,o=parseInt(n.slice(4,6),16)||0,a=l=>Math.max(0,Math.min(255,Math.round(l+(t>0?(255-l)*t:l*t))));return`#${[a(s),a(r),a(o)].map(l=>l.toString(16).padStart(2,"0")).join("")}`}let Ir=null;function nv(i,t="frag"){const e=String(i||"");if(!e.trim())return"пустая вставка";if(e.length>gn.shader)return`слишком длинно: ${e.length} символов, длиннее лимита ${gn.shader}`;if(/#\s*(include|define|undef|if|ifdef|version|pragma)/.test(e))return"препроцессор ( #include/#define/#if/#version ) во вставке запрещён — им нечем управлять";if(/\bvoid\s+main\b/.test(e))return"свой main запрещён: вставка выполняется внутри нашего шейдера";if(/^\s*(uniform|attribute|varying|in|out)\b/m.test(e))return"объявлять uniform/varying здесь не надо — свои значения пиши в shader.uniforms, они уже объявлены";let n=0;for(const o of e)if(o==="{"||o==="("||o==="["?n++:(o==="}"||o===")"||o==="]")&&n--,n<0)return"лишняя закрывающая скобка";if(n!==0)return`скобки не сбалансированы (разница ${n})`;for(const o of e.matchAll(/\b([A-Za-z_][A-Za-z0-9_]*)\s*\(/g)){const a=o[1];if(!iv.has(a)&&!/^(if|for|while|return)$/.test(a))return`не знаю функцию «${a}» — доступны только те, что есть в GLSL и в нашем материале`}for(const o of e.matchAll(/\b(u[A-Z][A-Za-z0-9_]*)\b/g)){const a=o[1];if(!io.has(a)&&!(a in pt.uniforms)&&!(Ir&&Ir.has(a)))return`униформа «${a}» не существует; есть ${[...io].join(", ")} и свои из shader.uniforms`}const s=/\b(?:const\s+)?(float|int|bool|vec[234]|mat[234])(\s+[A-Za-z_][A-Za-z0-9_]*(?:\s*,\s*[A-Za-z_][A-Za-z0-9_]*)*)\s*(?:=|;|\))/g,r=t==="decl"?rv:av;for(const o of e.matchAll(s))for(const a of o[2].split(",")){const l=a.trim().replace(/\(.*$/,"").trim();if(r.has(l))return`имя «${l}» занято нашим шейдером (оно уже объявлено в том же scope) — переопределение не компилируется, мир исчезнет целиком; выбери другое, например «m${l}»`}for(const[o,a]of[[/\btexture\s*\(/,"texture() есть только в WebGL2, а игра собирается на GLSL ES 1.00 — пиши texture2D()/textureCube()"],[/\btextureLod\s*\(/,"textureLod() — тоже WebGL2, в ES 1.00 его нет"],[/\bgl_(FragDepth|FragCoord|PointCoord|VertexID)\b/,"системные gl_* в этом шейдере недоступны: цвет только через col"],[/\bprecision\s+(low|medium|high)p?\s+/,"precision уже задан нашим материалом — не переопределяй его"]])if(o.test(e))return a;for(const o of["gl_FragColor","discard"])if(e.includes(o))return`«${o}» во вставке не нужен: результат берётся из col (в post — из c), а discard вырезал бы грань целиком`;return t==="vert"&&/\bcol\b/.test(e)?"в вершинном шейдере нет col — цвет правь во frag":(t==="frag"||t==="fragFinal")&&/\bworld\b/.test(e)?"во фрагментном нет world — геометрию правь в vert":t==="post"&&/\bcol\b/.test(e)?"в пост-проходе нет col — правь c (цвет кадра)":""}const iv=new Set(["tileIndex","sin","cos","tan","asin","acos","atan","pow","exp","log","exp2","log2","sqrt","inversesqrt","abs","sign","floor","ceil","fract","mod","min","max","clamp","mix","step","smoothstep","length","distance","dot","cross","normalize","faceforward","reflect","refract","texture2D","textureCube","vec2","vec3","vec4","float","int","bool","mat2","mat3","mat4"]),io=new Set(["uTime","uMap","uQuality","uShadow","uRefl","uProbe","uSun","uSunColor","uSunDirW","uAmbient","uTorch","uFogColor","uFogDensity","uFogStart","uFogEnd","uExposure","uSea","uZenithC","uWave","uAlpha","uAlphaTest","uDay","uDusk","uNight"]),sv=new Set(["tex","occ","sky","blk","nrm","lit0","shade","sunTerm","skyLight","lit","col","lcAlpha","sunGate","fg","wpos","world","mv","fogD","lin","expf","worldPosition","transformedNormal","c","vUv","vWorld","vTint","vFog","vLight","position","normal","uv","light","tint","main","tileIndex","aces","waterSlope","skyLike","wave","waveAmp","PI","saturate","luminance","rand","pow2","max3","average","getShadowMask","packDepthToRGBA","unpackRGBAToDepth","getViewMatrix"].map(i=>i.trim())),rv=new Set(["main","vUv","vWorld","vTint","vFog","vLight","position","normal","uv","light","tint","tileIndex","aces","waterSlope","skyLike","wave","waveAmp","PI","saturate","luminance","rand","pow2","max3","average","getShadowMask","packDepthToRGBA","unpackRGBAToDepth","getViewMatrix"]),av=sv;function so(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function ov(i,t){if(!pt.ore.length||!t?.blocks)return!1;const e=t.blocks,n=16,s=e.length/(n*n)|0,r=i.seed>>>0||1;for(const o of pt.ore)for(let a=0;a<o.veins;a++){if(zi(o.salt+a,t.cx,t.cz,r)%1e4/1e4>o.chance)continue;let l=zi(o.salt+a*3+1,t.cx,t.cz,r)%n,c=zi(o.salt+a*5+2,t.cz,t.cx+7,r)%n,h=o.y0+zi(o.salt+a*7+3,l,c,r)%Math.max(1,o.y1-o.y0+1),u=1+zi(o.salt+a*11+4,h,l*3+c,r)%o.size;for(;u-- >0;){if(l>=0&&l<n&&c>=0&&c<n&&h>=1&&h<s){const p=(h*n+c)*n+l,g=e[p],_=o.into||0;(_?g===_:g&&dt[g]?.sound==="stone")&&(e[p]=o.block)}const d=zi(o.salt+u,l,h+c*5,r)%6;l+=d===0?1:d===1?-1:0,c+=d===2?1:d===3?-1:0,h+=d===4?1:d===5?-1:0}}return!0}function zi(i,t,e,n){let s=(i^2654435769)>>>0;return s=Math.imul(s^t+n+2246822507,3266489909)>>>0,s=Math.imul(s^e+668265263,374761393)>>>0,s^=s>>>15,s>>>0}function Ln(){return{mods:pt.list.map(i=>({id:i.id,name:i.name,source:i.source,ok:i.ok,off:!!i.off,error:i.error||"",applied:i.applied})),blockIds:pt.blockIds.slice(),tiles:pt.tiles.slice(),uniforms:Object.keys(pt.uniforms),oreCount:pt.ore.length,shaderNames:pt.shader.names.slice()}}function lv(){return!!(pt.shader.vert.length||pt.shader.frag.length||pt.shader.fragFinal.length||pt.shader.post.length)}function cv(){return pt.ore.length>0}function Ra(){return{vert:pt.shader.vert.slice(),frag:pt.shader.frag.slice(),fragFinal:pt.shader.fragFinal.slice(),post:pt.shader.post.slice(),names:pt.shader.names.slice(),uniforms:hv()||void 0}}function hv(){const i={};for(const[t,e]of Object.entries(pt.uniforms))i[t]=e.value;return Object.keys(i).length?i:null}function uv(){return pt.blockIds.slice()}function dv(i){return pt.modOfKey.get(i)??null}function Jh(i,t,e){return i in pt.uniforms?(pt.uniforms[i].value=Zh(t),e?.uniforms?.[i]&&(e.uniforms[i].value=pt.uniforms[i].value),!0):!1}function fv(i,t,e=globalThis.localStorage){const n=zr(e),s=new Set(n.disabled),r=new Set(n.enabled);return t?(s.delete(i),r.add(i)):(r.delete(i),s.add(i)),jh(e,{disabled:[...s],enabled:[...r],user:n.user})}function bc(i,t=globalThis.localStorage,e="user"){const n=zr(t),s=n.user.filter(r=>(r.id||"user")!==e);return i&&i.trim()&&s.push({id:e,src:i}),jh(t,{disabled:n.disabled,user:s})}function pv(i=globalThis.localStorage,t="user"){return zr(i).user.find(e=>(e.id||"user")===t)?.src??""}function mv(){for(const i of pt.mobs)delete Nn[i];for(const{src:i,clean:t}of pt.recipes){let e=Cr.indexOf(i);e>=0&&Cr.splice(e,1),e=Ts.indexOf(t),e>=0&&Ts.splice(e,1)}for(;pt.blockIds.length;){const i=pt.blockIds.pop(),t=dt[i];if(!t||dt.length-1!==i||!t.mod){pt.blockIds.push(i);break}ze.delete(t.key),pt.modOfKey.delete(t.key),dt.pop()}for(const i of pt.tiles)Wa(i,null);pt.mobs.length=0,pt.recipes.length=0,pt.tiles.length=0,pt.ore.length=0;for(const i of Object.keys(pt.uniforms))delete pt.uniforms[i];pt.list.length=0,pt.shader.vert.length=pt.shader.frag.length=pt.shader.fragFinal.length=pt.shader.post.length=0,pt.shader.names.length=0,pt.loaded=!1}const gv=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,_v=`
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
`;function Sc(i=1,t=.06){const e=new Wi(9137),n=128,s=new Uint8ClampedArray(n*n*4);for(let l=0;l<n;l++)for(let c=0;c<n;c++){const h=e.fbm2(c*i/26,l*i/26,4)*1.5,u=h>t?1:0,d=u?h>.28?255:232:0,p=(l*n+c)*4;s[p]=d,s[p+1]=d,s[p+2]=255,s[p+3]=u?235:0}const r=new Uint8ClampedArray(n*n*4),o=4;for(let l=0;l<n;l++)for(let c=0;c<n;c++){const h=(c/o|0)*o+(l/o|0)%2,u=(l/o|0)*o,d=(Math.min(n-1,u)*n+Math.min(n-1,h))*4,p=(l*n+c)*4;r[p]=s[d],r[p+1]=s[d+1],r[p+2]=s[d+2],r[p+3]=s[d+3]}const a=new Br(r,n,n,Ve);return a.wrapS=a.wrapT=yr,a.magFilter=pe,a.minFilter=di,a.generateMipmaps=!0,a.colorSpace=Ue,a.needsUpdate=!0,a}function Ec(i){const e=new Uint8ClampedArray(4096),n=new Wi(i==="moon"?4242:111);for(let r=0;r<32;r++)for(let o=0;o<32;o++){const a=o-16+.5,l=r-32/2+.5,c=Math.hypot(a,l),h=(r*32+o)*4;let u=255;i==="moon"?u=226-(n.perlin2(o*.35,r*.35)>.18?42:0)-(c>13.5?226:0):c>15&&(u=0);const d=c>15.5?0:255;e[h]=u,e[h+1]=i==="moon"?u:Math.min(255,u*.94),e[h+2]=i==="moon"?u*.98:u*.7,e[h+3]=d}const s=new Br(e,32,32,Ve);return s.magFilter=pe,s.minFilter=He,s.generateMipmaps=!1,s.colorSpace=Ue,s.needsUpdate=!0,s}class vv{constructor(t){this.group=new yn,t.add(this.group),this.uniforms={uZenith:{value:new Lt(.36,.62,.98)},uHorizon:{value:new Lt(.72,.85,.98)},uNight:{value:new Lt(.02,.03,.07)},uNightF:{value:0},uSunDir:{value:new U(0,1,0)},uSunTint:{value:new Lt(1,.85,.6)},uDay:{value:1},uDusk:{value:0},uUltra:{value:0}};const e=new xe(new vo(1,24,16),new un({uniforms:this.uniforms,vertexShader:gv,fragmentShader:_v,side:We,depthWrite:!1,fog:!1}));e.scale.setScalar(600),e.renderOrder=-10,this.dome=e,this.group.add(e);const n=new xn({map:Ec("sun"),transparent:!0,depthWrite:!1,color:16777215});this.sun=new xe(new li(1,1),n),this.sun.scale.setScalar(46),this.sun.renderOrder=-9,this.group.add(this.sun),this.moon=new xe(new li(1,1),new xn({map:Ec("moon"),transparent:!0,depthWrite:!1})),this.moon.scale.setScalar(30),this.moon.renderOrder=-9,this.group.add(this.moon);const s=900,r=new Float32Array(s*3);for(let c=0;c<s;c++){const h=Math.random()*Math.PI*2,u=Math.random()*.9+.05,d=Math.sqrt(Math.max(0,1-u*u));r[c*3]=Math.cos(h)*d*560,r[c*3+1]=u*560,r[c*3+2]=Math.sin(h)*d*560}const o=new Le;o.setAttribute("position",new me(r,3)),this.stars=new wh(o,new _o({color:16777215,size:2.4,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1})),this.stars.renderOrder=-9,this.group.add(this.stars);const a=Sc();a.repeat.set(9,9),this.cloudTex=a,this.clouds=new xe(new li(2400,2400),new xn({map:a,transparent:!0,opacity:.85,depthWrite:!1,side:$e,color:16777215})),this.clouds.rotation.x=-Math.PI/2,this.clouds.position.y=118,this.clouds.renderOrder=-8,this.group.add(this.clouds),this.dayLight=1,this.sunElevation=1,this.dusk=0,this.ultra=!1;const l=Sc(1.9,.55);l.repeat.set(5,5),this.cirrusTex=l,this.cirrus=new xe(new li(3200,3200),new xn({map:l,transparent:!0,opacity:.34,depthWrite:!1,side:$e,color:16777215})),this.cirrus.rotation.x=-Math.PI/2,this.cirrus.position.y=168,this.cirrus.renderOrder=-8,this.cirrus.visible=!1,this.group.add(this.cirrus)}update(t,e,n,s){const r=(t-.25)*Math.PI*2+Math.PI/2,o=new U(Math.cos(r),Math.sin(r),.34).normalize(),a=o.y,l=Ps.clamp(a*2.1+.18,0,1),c=Ps.clamp(1-Math.abs(a)*4.5,0,1),h=1-l;this.sunElevation=a,this.dayLight=l,this.uniforms.uSunDir.value.copy(o),this.uniforms.uDay.value=l,this.uniforms.uNightF.value=h,this.uniforms.uSunTint.value.setRGB(1,.62+.3*(1-c),.35+.5*(1-c)),this.uniforms.uDusk.value=c,this.dusk=c;const u=this.uniforms.uZenith.value,d=this.uniforms.uHorizon.value;u.setRGB(.19,.4,.86).lerp(new Lt(.02,.03,.08),h),d.setRGB(.72,.85,.98).lerp(new Lt(.05,.07,.14),h),c>.02&&(d.lerp(new Lt(.98,.46,.22),c*.75),u.lerp(new Lt(.42,.3,.6),c*.4)),this.ultra&&(u.lerp(new Lt(.07,.16,.46),.45),d.lerp(new Lt(1,.5,.24),c*.55)),this.dome.position.copy(n),this.stars.position.copy(n),this.clouds.position.x=n.x+t*900,this.clouds.position.z=n.z,this.cloudTex.offset.x=t*.9;const p=this.clouds.material.color,g=.3+this.dayLight*.7;this.ultra?p.setRGB(1.02*g,(.97-c*.13)*g,(.95-c*.34)*g):p.setRGB(g,g,g),this.ultra&&(this.cirrus.position.x=n.x-t*1500,this.cirrus.position.z=n.z+140,this.cirrusTex.offset.x=-t*1.7,this.cirrus.material.opacity=.08+e*.3,this.cirrus.material.color.setRGB(1.05*g,(.99-c*.1)*g,(1-c*.28)*g)),this.stars.material.opacity=Math.pow(h,1.4)*.95,this.clouds.material.opacity=.25+e*.7;const _=1;if(this.sun.position.copy(n).addScaledVector(o,480),this.sun.lookAt(n),this.sun.material.color.setRGB(1,.95-c*.16,this.ultra?.84-c*.3:.78-c*.35),this.sun.material.opacity=Ps.clamp(l*1.6,0,1),this.moon.position.copy(n).addScaledVector(o,-480),this.moon.lookAt(n),this.moon.material.opacity=Ps.clamp(h*1.4,0,1),this.ultra&&this.moon.material.color.setRGB(.9,.95,1),s){const m=.18+l*.92;s.uSun.value=m*_,s.uAmbient.value.setRGB(.3,.34,.44).multiplyScalar(.32+l*.75),s.uSunColor.value.setRGB(1,.93-c*.2,.82-c*.3),s.uFogColor.value.copy(d).lerp(u,.25),s.uZenithC&&s.uZenithC.value.copy(u),s.uSunDirW&&s.uSunDirW.value.set(o.x,Math.max(o.y,.05),o.z).normalize()}return{day:l,night:h,dusk:c,horizonColor:d.clone(),fogColor:s?s.uFogColor.value.clone():d.clone()}}setUltra(t){this.ultra=!!t,this.uniforms.uUltra.value=this.ultra?1:0,this.cirrus&&(this.cirrus.visible=this.ultra),this.sun.scale.setScalar(this.ultra?34:46),this.moon.scale.setScalar(this.ultra?23:30)}dispose(){this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose())})}}const wc=(i,t,e)=>!!i.getChunk(t+1,e)&&!!i.getChunk(t-1,e)&&!!i.getChunk(t,e+1)&&!!i.getChunk(t,e-1),xv=3.4,yv=16,Mv=1.2;function bv(i,t,e=6){const n=t>60;let s=e;return n?s=yv:i>20&&t<32?s=s*.4:i<13&&t>8&&(s=e*1.4),{pool:Math.max(xv,s),gen:n?.8:t>24?.35:.5}}class Yi{constructor(t,e,n,s){this.world=t,this.scene=e,this.materials=n,this.atlas=s,this.objects=new Map,this.renderDistance=10,this.streamBudget=6,this._frameMs=16.7,this._last=0,this._candidates=[],this.stats={gen:0,mesh:0,quads:0,pending:0,ms:0}}static key(t,e){return Ph(t,e)}setRenderDistance(t){this.renderDistance=Math.max(2,Math.min(64,t|0));const e=this.renderDistance;this.streamBudget=e<=12?6:Math.min(24,6+(e-12)*.35),this._cullEvery=e>16?40:0}cullFarChunks(t,e=3){const n=this.world;if(!n?.chunks?.size)return 0;const s=Math.floor(t.x/it),r=Math.floor(t.z/it),o=this.renderDistance+e,a=o*o;let l=0;for(const c of[...n.chunks.keys()]){const[h,u]=xs(c);if(!Number.isFinite(h)||!Number.isFinite(u))continue;const d=h-s,p=u-r;if(d*d+p*p<=a)continue;const g=this.objects.get(c);g&&(this.disposeObject(g),this.objects.delete(c)),n.removeChunk(h,u),l++}return l}streamDebug(){const t=this.world;return{gen:this.stats.gen,mesh:this.stats.mesh,pending:t.dirtyMesh.size,light:t.dirtyLight.size,genErr:this._genErrCount??0,meshErr:this._meshErrCount??0,msg:t.lastGenError??this._meshErrMsg??""}}update(t){const e=this.world,n=Math.floor(t.x/it),s=Math.floor(t.z/it),r=this.renderDistance,o=t.vx??0,a=t.vz??0,l=Math.max(-2,Math.min(2,Math.round(o*1.1/it))),c=Math.max(-2,Math.min(2,Math.round(a*1.1/it))),h=n+l,u=s+c,d=e.dirtyMesh.size,p=performance.now();if(this._last){const S=Math.min(250,p-this._last);this._frameMs+=(S-this._frameMs)*.15}this._last=p;const g=bv(this._frameMs,d,this.streamBudget),_=g.pool,m=p+_,f=p+Math.max(Mv,_*g.gen);let x=0;t:for(let S=0;S<=r+1;S++)for(let I=-S;I<=S;I++)for(let y=-S;y<=S;y++){if(Math.max(Math.abs(y),Math.abs(I))!==S)continue;const A=h+y,G=u+I,q=e.getChunk(A,G);if(q&&q.needsMesh&&wc(e,A,G)&&e.dirtyMesh.add(Yi.key(A,G)),!q){try{e.ensureChunk(A,G)}catch(j){this._genErrCount=(this._genErrCount??0)+1,this._genErr||(this._genErr=1,console.error("чанк не сгенерирован:",A,G,j));continue}if(x++,performance.now()>=f)break t}}const v=Math.min(m,performance.now()+_*.2);if(e.dirtyLight.size)for(const S of[...e.dirtyLight]){const[I,y]=xs(S),A=e.getChunk(I,y);if(A&&e.recomputeLight(A),e.dirtyLight.delete(S),performance.now()>=v)break}let b=0;const R=[];for(const S of e.dirtyMesh){const[I,y]=xs(S);if(Math.max(Math.abs(I-n),Math.abs(y-s))>r+1){e.dirtyMesh.delete(S);continue}if(!e.getChunk(I,y)){e.dirtyMesh.delete(S);continue}if(!wc(e,I,y)){e.dirtyMesh.delete(S);continue}R.push([(I-h)**2+(y-u)**2,I,y])}R.sort((S,I)=>S[0]-I[0]);for(const[,S,I]of R){try{this.remesh(S,I)}catch(y){this._meshErrCount=(this._meshErrCount??0)+1,this._meshErrMsg=String(y?.message??y),this._meshErr||(this._meshErr=1,console.error("меширование чанка не удалось:",S,I,y))}if(e.dirtyMesh.delete(Yi.key(S,I)),b++,performance.now()>=m)break}this.stats.gen=x,this.stats.mesh=b,this.stats.pending=e.dirtyMesh.size,this.stats.ms=performance.now()-p,this.stats.frameMs=this._frameMs,this._cullEvery&&(this._cullT=(this._cullT??0)+1,this._cullT>=this._cullEvery&&(this._cullT=0,this.stats.culled=this.cullFarChunks(t)));const w=r+3;for(const[S,I]of this.objects){const[y,A]=xs(S);Math.max(Math.abs(y-n),Math.abs(A-s))>w&&(this.disposeObject(I),this.objects.delete(S),e.removeChunk(y,A))}}remesh(t,e){const n=this.world,s=n.getChunk(t,e);if(!s)return;const r=Yi.key(t,e);let o=this.objects.get(r);const a=H_(n,s,this.atlas);if(!a.solid&&!a.water){o&&(this.disposeObject(o),this.objects.delete(r)),s.needsMesh=!1;return}o||(o={solid:null,water:null},this.objects.set(r,o)),o.solid=this.applyMesh(o.solid,a.solid,this.materials.solid,t,e),o.water=this.applyMesh(o.water,a.water,this.materials.water,t,e),s.needsMesh=!1,this.stats.quads=(a.solid?.quads??0)+(a.water?.quads??0)}hasMesh(t,e){return this.objects.has(Yi.key(t,e))}setMaterials(t){this.materials=t;for(const e of this.objects.values())e.solid&&(e.solid.material=t.solid),e.water&&(e.water.material=t.water);return this.objects.size}applyMesh(t,e,n,s,r){if(!e)return t&&(this.scene.remove(t),t.geometry.dispose()),null;let o=t?t.geometry:null;o||(o=new Le,o.boundingSphere=new as(new U(it/2,Jt/2,it/2),Math.sqrt((it/2)**2*2+(Jt/2)**2)),o.boundingBox=new rs(new U(0,0,0),new U(it,Jt,it)));const a=(h,u,d)=>{const p=o.getAttribute(h);if(p&&p.array.length>=u.length&&p.array.constructor===u.constructor){p.array.set(u),p.needsUpdate=!0;return}const g=new me(u,d);g.setUsage(ol),o.setAttribute(h,g)};a("position",e.position,3),a("uv",e.uv,2),a("light",e.light,4),a("tint",e.tint,3);const l=o.getIndex();if(l&&l.array.length>=e.index.length&&l.array.constructor===e.index.constructor)l.array.set(e.index),l.needsUpdate=!0;else{const h=new me(e.index,1);h.setUsage(ol),o.setIndex(h)}if(o.setDrawRange(0,e.index.length),t)return t.geometry=o,t;const c=new xe(o,n);return c.position.set(s*it,0,r*it),c.matrixAutoUpdate=!1,c.updateMatrix(),c.renderOrder=n===this.materials.water?2:0,c.frustumCulled=!0,this._shadowFlags(c,n===this.materials.water),this.scene.add(c),c}_shadowFlags(t,e){if(!t)return t;const n=!!this.shadows;return t.castShadow=n&&!e,t.receiveShadow=n,e||(t.customDepthMaterial=n?this.depthMaterial??null:null),t}setShadows(t,e=null){this.shadows=!!t,this.depthMaterial=e??this.depthMaterial??null;for(const n of this.objects.values())this._shadowFlags(n.solid,!1),this._shadowFlags(n.water,!0)}get waterMeshes(){const t=[];for(const e of this.objects.values())e.water&&t.push(e.water);return t}disposeObject(t){for(const e of[t.solid,t.water])e&&(this.scene.remove(e),e.geometry.dispose())}dispose(){for(const[t,e]of[...this.objects])this.disposeObject(e),this.objects.delete(t)}rebuildAll(){for(const t of this.world.chunks.keys())this.world.dirtyMesh.add(t)}setVisible(t){for(const e of this.objects.values())e.solid&&(e.solid.visible=t),e.water&&(e.water.visible=t)}get chunkMeshCount(){return this.objects.size}}class Sv{constructor(t,e=700){this.max=e,this.count=0,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e);const n=new Le;n.setAttribute("position",new me(this.pos,3)),n.setAttribute("color",new me(this.col,3)),n.setDrawRange(0,0),this.geo=n,this.points=new wh(n,new _o({size:.12,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!0})),this.points.frustumCulled=!1,t.add(this.points)}burst(t,e,n,s,r,o={}){const a=o.speed??3.2,l=o.life??.75,c=o.gravity??22;for(let h=0;h<s;h++){this.count>=this.max&&this.swap(0,--this.count);const u=this.count++;this.pos[u*3]=t+(Math.random()-.5)*(o.spread??.7),this.pos[u*3+1]=e+(Math.random()-.5)*(o.spread??.7),this.pos[u*3+2]=n+(Math.random()-.5)*(o.spread??.7),this.vel[u*3]=(Math.random()-.5)*a,this.vel[u*3+1]=Math.random()*a*.7+1.2,this.vel[u*3+2]=(Math.random()-.5)*a,this.col[u*3]=r[0]*(.75+Math.random()*.4),this.col[u*3+1]=r[1]*(.75+Math.random()*.4),this.col[u*3+2]=r[2]*(.75+Math.random()*.4),this.life[u]=l*(.6+Math.random()*.6),this.maxLife[u]=this.life[u],this.gravity=c}}swap(t,e){for(let n=0;n<3;n++)[this.pos[t*3+n],this.pos[e*3+n]]=[this.pos[e*3+n],this.pos[t*3+n]],[this.col[t*3+n],this.col[e*3+n]]=[this.col[e*3+n],this.col[t*3+n]],[this.vel[t*3+n],this.vel[e*3+n]]=[this.vel[e*3+n],this.vel[t*3+n]];[this.life[t],this.life[e]]=[this.life[e],this.life[t]],[this.maxLife[t],this.maxLife[e]]=[this.maxLife[e],this.maxLife[t]]}update(t){const e=this.gravity??22;let n=0;for(;n<this.count;){if(this.life[n]-=t,this.life[n]<=0){this.swap(n,--this.count);continue}this.vel[n*3+1]-=e*t;for(let s=0;s<3;s++)this.pos[n*3+s]+=this.vel[n*3+s]*t;n++}this.geo.setDrawRange(0,this.count),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}}const Ev=[.76,.76,1,.55,.9,.9],pn={fov:70,block:{fx:.4406,fy:.7372,size:.7833,depth:.62},arm:{fx:.3212,fy:.857,depth:.6}},wv=i=>Math.tan((i||pn.fov)*Math.PI/360);function Tv(i,t,e=1){const n=[],s=[],r=[],o=[],a=i.tiles??{};for(let c=0;c<6;c++){const h=xo[c],u=c===0?a.top??a.all:c===1?a.bottom??a.all:a.side??a.all,d=Pr(t.index[u]??t.index[a.all]??0,t.cell,t.tile,t.grid),p=n.length/3;for(let g=0;g<4;g++){const _=h.verts[g];n.push(_[0]*e-e/2,_[1]*e-e/2,_[2]*e-e/2);const m=h.uv[g];s.push(d.u0+m[0]*d.s,d.v0+m[1]*d.s);const f=Ev[c];r.push(f,f,f)}o.push(p,p+1,p+2,p,p+2,p+3)}const l=new Le;return l.setAttribute("position",new Ce(n,3)),l.setAttribute("uv",new Ce(s,2)),l.setAttribute("color",new Ce(r,3)),l.setIndex(o),l}class Av{constructor(t){this.atlas=t,this.group=new yn,this.blockMesh=null,this.blockId=-1,this.arm=new xe(new On(.16,.5,.14),new xn({color:14262378,depthTest:!1,depthWrite:!1}));const e=this.arm.geometry,n=new Float32Array(e.attributes.position.count/4*4*3);let s=0;for(let r=0;r<6;r++)for(let o=0;o<4;o++){const a=.62+(r===2?.38:r===3?.05:.2);n[s++]=a,n[s++]=a,n[s++]=a}e.setAttribute("color",new me(n,3)),this.arm.material.vertexColors=!0,this.arm.position.set(.24,-.36,-.6),this.arm.rotation.set(.5,0,.1),this.arm.renderOrder=999,this.group.add(this.arm),this.baseBlock=new U(.34,-.32,-.62),this.baseArm=this.arm.position.clone(),this.blockSize=.34,this.fov=pn.fov,this.aspect=16/9,this.swing=0,this.swingActive=0,this.bobPhase=0,this.dayLight=1}setBlock(t){if(t===this.blockId)return;this.blockId=t,this.blockMesh&&(this.group.remove(this.blockMesh),this.blockMesh.geometry.dispose(),this.blockMesh=null);const e=dt[t];if(!e||!e.tiles){this.arm.visible=!0;return}const n=Tv(e,this.atlas,1),s=new xn({map:this.atlas.texture,vertexColors:!0,side:$e,depthTest:!1,depthWrite:!1});this.blockMesh=new xe(n,s),this.blockMesh.position.copy(this.baseBlock),this.blockMesh.scale.setScalar(this.blockSize),this.blockMesh.rotation.set(.1,-.72,.12),this.blockMesh.renderOrder=999,this.group.add(this.blockMesh),this.arm.visible=!1}layout(t=this.fov,e=this.aspect){const n=Number.isFinite(t)&&t>1?t:pn.fov,s=Number.isFinite(e)&&e>.2?e:16/9;if(n===this.fov&&Math.abs(s-this.aspect)<1e-4)return!1;this.fov=n,this.aspect=s;const r=wv(n),o=d=>({h:r*d,w:r*d*s}),a=o(pn.block.depth),l=Math.min(pn.block.size*a.h,.62*a.w),c=l*.9;this.blockSize=l,this.baseBlock.set(Math.min(pn.block.fx*a.w,a.w-c),-Math.min(pn.block.fy*a.h,a.h+l*.55),-.62);const h=o(pn.arm.depth),u=l/.34;return this.arm.scale.setScalar(u),this.baseArm.set(Math.min(pn.arm.fx*h.w,h.w-.15*u),-Math.min(pn.arm.fy*h.h,h.h+.6*u),-.6),!0}triggerSwing(){this.swingActive=1}update(t,{moving:e=0,breaking:n=0,breakProgress:s=0,fov:r=0,aspect:o=0}={}){(r||o)&&this.layout(r||this.fov,o||this.aspect),this.blockMesh&&this.blockMesh.scale.setScalar(this.blockSize),this.bobPhase+=t*(2+e*7),this.swingActive=Math.max(0,this.swingActive-t*3.4);const a=this.swingActive,l=Math.sin((1-a)*Math.PI)*.9,c=Math.cos(this.bobPhase)*.012*e,h=Math.abs(Math.sin(this.bobPhase))*.016*e,u=n?Math.sin(performance.now()*.04)*.01*(.4+s):0;if(this.blockMesh??this.arm,this.blockMesh){const g=this.blockSize/.34;this.blockMesh.position.set(this.baseBlock.x+(c+u)*g,this.baseBlock.y-h*g,this.baseBlock.z+l*.12*g),this.blockMesh.rotation.set(.1-l*.7,-.72,.12+l*.25)}this.arm.position.set(this.baseArm.x+c+u,this.baseArm.y-h,this.baseArm.z+l*.14),this.arm.rotation.set(.5-l*.9,0,.1);const d=.46+.54*this.dayLight,p=new Lt(d,d,d*1.02);this.blockMesh&&this.blockMesh.material.color.copy(p),this.arm.material.color.copy(p)}}class Rv{constructor(t){this.atlas=t;const e=new On(1.004,1.004,1.004);this.outline=new Pg(new Ig(new On(1.002,1.002,1.002)),new Eh({color:0,transparent:!0,opacity:.5,depthWrite:!1})),this.outline.visible=!1,this.crack=new xe(e,new xn({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,side:$e})),this.crack.visible=!1,this.stage=-1,this.group=new yn,this.group.add(this.outline,this.crack)}show(t){if(!t){this.outline.visible=this.crack.visible=!1;return}this.outline.position.set(t.x+.5,t.y+.5,t.z+.5),this.crack.position.copy(this.outline.position),this.outline.visible=!0}hide(){this.show(null)}setBreakProgress(t){if(t<=0){this.crack.visible=!1,this.stage=-1;return}const e=Math.min(Xa-1,Math.floor(t*Xa));e!==this.stage&&(this.stage=e,this.crack.material.map=this.atlas.cracks[e],this.crack.material.needsUpdate=!0),this.crack.visible=!0}setDayLight(t){const e=.35+.65*t;this.crack.material.color.setRGB(e,e,e),this.outline.material.opacity=.25+.3*t}}const Wn=7;class Cv{constructor(t,e){this.cx=t,this.cz=e,this.blocks=new Uint8Array(it*it*Jt),this.skyH=new Uint8Array(it*it),this.light=null,this.emitters=[],this.generated=!1,this.needsMesh=!0,this.hmax=0}}const Lv=[[1,0],[-1,0],[0,1],[0,-1]];class Ca{constructor(t=Qa){this.seed=t>>>0,this.terrain=new L_(this.seed),this.chunks=new Map,this.edits=new Map,this._original=new Map,this.dirtyMesh=new Set,this.dirtyLight=new Set,this._cacheKey=-1,this._cacheChunk=null,this.stats={generated:0}}key(t,e){return Ph(t,e)}static decode(t){return xs(t)}getChunk(t,e){const n=this.key(t,e);if(n===this._cacheKey)return this._cacheChunk;const s=this.chunks.get(n)??null;return s?(this._cacheKey=n,this._cacheChunk=s,s):null}ensureChunk(t,e){const n=this.key(t,e);let s=this.chunks.get(n);if(s)return s;const r=this._genFail?.get(n)??0;if(r>=3)throw new Error(`чанк ${t},${e} не генерируется (3 попытки): ${this.lastGenError??"см. консоль"}`);s=new Cv(t,e);try{this.terrain.generate(s),this.modPass&&this.modPass(this,s),this.applyEdits(s),this.finalize(s)}catch(o){throw this.chunks.delete(n),this._cacheKey===n&&(this._cacheKey=-1),this._genFail=(this._genFail??new Map).set(n,r+1),this.lastGenError=String(o?.message??o),o}this._genFail?.delete(n),this.chunks.set(n,s),this._cacheKey=-1,s.generated=!0,s.needsMesh=!0,this.stats.generated++,this.dirtyLight.add(n),this.dirtyMesh.add(n);for(const[o,a]of Lv){const l=this.key(t+o,e+a),c=this.chunks.get(l);c&&(c.needsMesh=!0,this.dirtyMesh.add(l))}return s}applyEdits(t){if(this.edits.size===0)return;const e=t.cx*it,n=t.cz*it;if(this.edits.size<6e3){for(const[s,r]of this.edits){const o=s.indexOf(","),a=s.indexOf(",",o+1),l=+s.slice(0,o),c=+s.slice(o+1,a),h=+s.slice(a+1),u=l-e,d=h-n;u<0||d<0||u>=it||d>=it||c<0||c>=Jt||(t.blocks[se(u,c,d)]=r,c+1>t.hmax&&(t.hmax=c+1))}return}for(let s=0;s<it;s++)for(let r=0;r<it;r++)for(let o=0;o<Jt;o++){const a=this.edits.get($a(e+r,o,n+s));a!==void 0&&(t.blocks[se(r,o,s)]=a,o+1>t.hmax&&(t.hmax=o+1))}}finalize(t){const e=t.blocks;t.emitters.length=0;for(let n=0;n<it;n++)for(let s=0;s<it;s++){let r=255;for(let o=Jt-1;o>=0;o--){const a=e[se(s,o,n)];if(a===0)continue;const l=dt[a];if(l.light&&t.emitters.length<512&&t.emitters.push([s,o,n,l.light]),l.opaque){r=o+1;break}}t.skyH[n*it+s]=r}}getBlock(t,e,n){if(e<0||e>=Jt)return 0;const s=t>>4,r=n>>4,o=this.getChunk(s,r);return o?o.blocks[se(t-s*it,e,n-r*it)]:0}isOpaque(t,e,n){return dt[this.getBlock(t,e,n)].opaque}isSolid(t,e,n){return dt[this.getBlock(t,e,n)].solid}isReplaceable(t,e,n){const s=this.getBlock(t,e,n);return s===0||dt[s].replaceable===!0}skyAt(t,e,n){if(e>=Jt)return 1;const s=t>>4,r=n>>4,o=this.getChunk(s,r);let a;return o?a=o.skyH[(n-r*it)*it+(t-s*it)]:a=this.terrain.col(t,n).h+1,a===255||e>=a?1:Math.max(.13,1-(a-e)*.055)}lightAt(t,e,n){if(e<0||e>=Jt)return 0;const s=t>>4,r=n>>4,o=this.getChunk(s,r);return!o||!o.light?0:o.light[se(t-s*it,e,n-r*it)]}setBlock(t,e,n,s,r=!0){if(e<0||e>=Jt)return!1;const o=t>>4,a=n>>4,l=this.ensureChunk(o,a),c=t-o*it,h=n-a*it,u=se(c,e,h),d=l.blocks[u];if(d===s)return!1;if(l.blocks[u]=s,this.postEdit(l,c,e,h,d,s),r){const p=$a(t,e,n);this._original.has(p)||this._original.set(p,d),this._original.get(p)===s?this.edits.delete(p):this.edits.set(p,s)}return this.touch(l,c,h,e),!0}postEdit(t,e,n,s,r,o){if(dt[r].light){const h=t.emitters;for(let u=h.length-1;u>=0;u--){const d=h[u];d[0]===e&&d[1]===n&&d[2]===s&&h.splice(u,1)}}dt[o].light&&t.emitters.length<512&&t.emitters.push([e,n,s,dt[o].light]);const a=s*it+e,l=dt[r].opaque,c=dt[o].opaque;c&&!l?(n+1>t.skyH[a]||t.skyH[a]===255)&&(t.skyH[a]=Math.min(255,n+1)):l&&!c&&this.recomputeColumn(t,e,s)}recomputeColumn(t,e,n){let s=255;for(let r=Jt-1;r>=0;r--){const o=t.blocks[se(e,r,n)];if(o!==0&&dt[o].opaque){s=r+1;break}}t.skyH[n*it+e]=s}touch(t,e,n,s){const r=this.key(t.cx,t.cz);s!==void 0&&s+1>t.hmax&&(t.hmax=s+1),this.dirtyMesh.add(r),this.dirtyLight.add(r),e===0&&this.markNeighbor(t.cx-1,t.cz),e===it-1&&this.markNeighbor(t.cx+1,t.cz),n===0&&this.markNeighbor(t.cx,t.cz-1),n===it-1&&this.markNeighbor(t.cx,t.cz+1)}markNeighbor(t,e){const n=this.key(t,e),s=this.chunks.get(n);s&&(s.needsMesh=!0),this.dirtyMesh.add(n),this.dirtyLight.add(n)}recomputeLight(t){const e=[];for(let n=-1;n<=1;n++)for(let s=-1;s<=1;s++){const r=this.getChunk(t.cx+n,t.cz+s);if(r)for(const[o,a,l,c]of r.emitters)e.push([o+n*it,a,l+s*it,c])}if(e.length===0)return t.light&&t.light.fill(0),!1;t.light||(t.light=new Float32Array(it*it*Jt)),t.light.fill(0);for(const[n,s,r,o]of e){const a=Math.max(0,s-Wn),l=Math.min(Jt-1,s+Wn);for(let c=a;c<=l;c++){const h=(c-s)*(c-s)*1.45;for(let u=Math.max(0,r-Wn);u<=Math.min(it-1,r+Wn);u++){const d=(u-r)*(u-r);for(let p=Math.max(0,n-Wn);p<=Math.min(it-1,n+Wn);p++){const g=Math.sqrt((p-n)*(p-n)+h+d);if(g>Wn)continue;const _=o*Math.pow(1-g/Wn,1.7),m=se(p,c,u);_>t.light[m]&&(t.light[m]=_)}}}}return!0}findSpawn(){let t=null;for(let n=0;n<72;n++)for(let s=0;s<12;s++){const r=s/12*Math.PI*2+n*.31,o=Math.round(Math.cos(r)*n*5),a=Math.round(Math.sin(r)*n*5),l=this.terrain.col(o,a);if(!(l.h<=Be+1||l.h>64||Math.max(Math.abs(l.h-this.terrain.col(o+1,a).h),Math.abs(l.h-this.terrain.col(o-1,a).h),Math.abs(l.h-this.terrain.col(o,a+1).h),Math.abs(l.h-this.terrain.col(o,a-1).h))>3)&&(t||(t=[o+.5,l.h+1.05,a+.5]),!this.terrain.treeAt(o,a)))return[o+.5,l.h+1.05,a+.5]}return t||[.5,this.terrain.col(0,0).h+1.05,.5]}findOpenSpot(t,e,n=56){const s=new Set([dt.findIndex(r=>r.key==="grass"),dt.findIndex(r=>r.key==="dirt"),dt.findIndex(r=>r.key==="sand"),dt.findIndex(r=>r.key==="snow"),dt.findIndex(r=>r.key==="podzol"),dt.findIndex(r=>r.key==="gravel")]);for(let r=0;r<=n;r+=2)for(let o=0;o<12;o++){const a=o/12*Math.PI*2+r*.37,l=Math.round(t+Math.cos(a)*r),c=Math.round(e+Math.sin(a)*r),h=l>>4,u=c>>4,d=this.getChunk(h,u);if(!d)continue;const p=l-h*it,g=c-u*it;for(let _=Jt-3;_>1;_--){const m=d.blocks[se(p,_-1,g)];if(s.has(m)&&d.blocks[se(p,_,g)]===0&&d.blocks[se(p,_+1,g)]===0&&d.blocks[se(p,_+2,g)]===0)return[l+.5,_+.02,c+.5]}}return null}removeChunk(t,e){const n=this.key(t,e);this.chunks.delete(n),this._genFail?.delete(n),this.dirtyMesh.delete(n),this.dirtyLight.delete(n),this._cacheKey===n&&(this._cacheKey=-1)}serializeEdits(){const t=[];for(const[e,n]of this.edits)t.push(e+":"+n);return t}loadEdits(t){if(this.edits.clear(),this._original.clear(),!!Array.isArray(t))for(const e of t){const n=e.lastIndexOf(":");if(n<0)continue;const s=e.slice(0,n),r=+e.slice(n+1);if(!Number.isInteger(r)||r<0||r>=dt.length)continue;this.edits.set(s,r);const o=s.indexOf(",");s.indexOf(",",o+1),this._original.set(s,-1)}}get editedCount(){return this.edits.size}get chunkCount(){return this.chunks.size}}const Pv=.6,Tc=1.8,Dv=1.62,Xn=Pv/2,Iv=28,Ac=8.6,Rc=4.317,Uv=5.9,Nv=1.5,kv=11,Fv=26,Ov=7.5,Cc=4,Bv=.5,Qh=new Uint8Array(dt.length);for(let i=0;i<dt.length;i++)Qh[i]=dt[i].solid?1:0;const vr=new Uint8Array(dt.length);for(let i=0;i<dt.length;i++)vr[i]=dt[i].liquid?1:0;function Lc(i){return i>Cc?(i-Cc)*Bv:0}class zv{constructor(t){this.world=t,this.x=0,this.y=80,this.z=0,this.vx=0,this.vy=0,this.vz=0,this.yaw=0,this.pitch=0,this.onGround=!1,this.inWater=!1,this.headInWater=!1,this.flying=!1,this.sprinting=!1,this.sneaking=!1,this.walkDistance=0,this.bob=0,this.stepAcc=0,this.bumped=!1,this._airMax=null,this.fallDamage=0,this.justLanded=0,this._wasInWater=!1,this._wasHead=!1}spawn(t,e,n){this.x=t,this.y=e,this.z=n,this.vx=this.vy=this.vz=0,this._airMax=null,this.fallDamage=0,this.justLanded=0;for(let s=0;s<24&&this.collides(this.x,this.y,this.z);s++)this.y+=1;this.onGround=!1}get eyeY(){return this.y+Dv-(this.sneaking?.18:0)}eye(t={}){return t.x=this.x,t.y=this.eyeY,t.z=this.z,t}forward(t={}){const e=Math.cos(this.pitch);return t.x=-Math.sin(this.yaw)*e,t.y=Math.sin(this.pitch),t.z=-Math.cos(this.yaw)*e,t}collides(t,e,n){const s=this.world,r=Math.floor(t-Xn),o=Math.floor(t+Xn),a=Math.floor(e),l=Math.floor(e+Tc-.001),c=Math.floor(n-Xn),h=Math.floor(n+Xn);for(let u=a;u<=l;u++){if(u<0)return!0;if(!(u>=Jt)){for(let d=c;d<=h;d++)for(let p=r;p<=o;p++)if(Qh[s.getBlock(p,u,d)])return!0}}return!1}moveAxis(t,e){if(e===0)return!1;const n=e,s=this[t];if(this[t]=s+n,!this.collides(this.x,this.y,this.z))return!1;let r=!1;for(let o=0;o<24;o++){const a=n*(1-o/24),l=s+a,c={x:this.x,y:this.y,z:this.z};if(c[t]=l,!this.collides(c.x,c.y,c.z)){this.x=c.x,this.y=c.y,this.z=c.z,r=!0;break}}return r||(this[t]=s,r=!0),r&&t!=="y"&&(this.bumped=!0),r}blockAtFeet(){return this.world.getBlock(Math.floor(this.x),Math.floor(this.y-.1),Math.floor(this.z))}update(t,e){const n=this.world;t=Math.min(t,1/20);const s=n.getBlock(Math.floor(this.x),Math.floor(this.y+.2),Math.floor(this.z)),r=n.getBlock(Math.floor(this.x),Math.floor(this.y+1),Math.floor(this.z));this.inWater=vr[s]===1||vr[r]===1,this.headInWater=vr[n.getBlock(Math.floor(this.x),Math.floor(this.eyeY),Math.floor(this.z))]===1;const o=Math.sin(this.yaw),a=Math.cos(this.yaw);let l=0,c=0;e.forward&&(l-=o,c-=a),e.back&&(l+=o,c+=a),e.left&&(l-=a,c+=o),e.right&&(l+=a,c-=o);const h=Math.hypot(l,c);h>0&&(l/=h,c/=h),this.sneaking=!!e.sneak&&!this.flying,this.sprinting=!!e.sprint&&!this.sneaking&&e.forward&&!this.inWater;let u=this.flying?e.sprint?Fv:kv:this.inWater?Rc*.55:this.sneaking?Nv:this.sprinting?Uv:Rc;const d=this.flying?34:this.onGround?62:this.inWater?24:22,p=e.analog??1,g=l*u*p,_=c*u*p;if(this.vx+=(g-this.vx)*Math.min(1,d*t),this.vz+=(_-this.vz)*Math.min(1,d*t),h===0&&(this.onGround||this.inWater)){const w=(this.flying?9:this.onGround?12:3.4)*t;this.vx-=this.vx*Math.min(1,w),this.vz-=this.vz*Math.min(1,w)}if(this.flying){let w=0;e.jump&&(w+=u*.75),e.sneak&&(w-=u*.75),this.vy+=(w-this.vy)*Math.min(1,22*t)}else this.inWater?(this.vy-=Ov*t,e.jump&&(this.vy=Math.min(this.vy+26*t,3.4)),this.vy=Math.max(this.vy,-3.4),this.vy*=1-Math.min(.6,3.4*t)):(this.vy-=Iv*t,this.vy=Math.max(this.vy,-58),e.jump&&this.onGround&&(this.vy=Ac,this.onGround=!1,this._airMax=this.y));const m=this.vx,f=this.vz,x=this.onGround;if(this.onGround=!1,this.moveAxis("x",this.vx*t)&&(this.vx=0),this.moveAxis("z",this.vz*t)&&(this.vz=0),this.moveAxis("y",this.vy*t)&&(this.vy<0?(this.onGround=!0,!this.flying&&!x&&this.fallStart!==null&&(this.fallDamage=Lc(this.fallStart-this.y)),this.fallStart=this.inWater?null:this.y):this.vy>0&&(this.vy=Math.min(0,this.vy))),this.onGround){if(this.vy=0,!x&&this._airMax!==null){const w=this._airMax-this.y;this.fallDamage=this.flying||this.inWater?0:Lc(w),this.justLanded=w>.7?Math.min(2,w/7):0}this._airMax=null}else this._airMax=this._airMax===null?this.y:Math.max(this._airMax,this.y);if(this.bumped){this.bumped=!1;const w=e.forward||e.back||e.left||e.right;if(this.onGround&&!this.inWater&&!this.flying&&!this.sneaking&&w&&e.autoJump!==!1){const I=this.x+Math.sign(m)*.46,y=this.z+Math.sign(f)*.46;this.collides(I,this.y+1.12,y)||(this.vy=Ac*.94,this.onGround=!1,m!==0&&(this.vx=m),f!==0&&(this.vz=f))}}const v=Math.hypot(this.vx,this.vz);this.walkDistance+=v*t,this.onGround&&v>.6?(this.stepAcc+=v*t,this.bob+=t*(6+v*.8)):this.bob+=(Math.round(this.bob/Math.PI)*Math.PI-this.bob)*Math.min(1,t*6);const b=this.stepAcc>1.9;b&&(this.stepAcc=0);const R=this.inWater&&!this._wasInWater;return this._wasInWater=this.inWater,this.y<-8&&(this.y=Jt-4,this.vy=0),this.y>Jt+40&&(this.y=Jt+40),{stepped:b,splash:R,submerge:this.headInWater!==this._wasHead}}intersectsBlock(t,e,n){return!(t+1<=this.x-Xn||t>=this.x+Xn||e+1<=this.y||e>=this.y+Tc||n+1<=this.z-Xn||n>=this.z+Xn)}}function Hv(i,t,e,n,s,r,o,a=6,l={}){const c=l.liquids===!0;let h=Math.floor(t),u=Math.floor(e),d=Math.floor(n);const p=s>0?1:-1,g=r>0?1:-1,_=o>0?1:-1,m=s!==0?Math.abs(1/s):1/0,f=r!==0?Math.abs(1/r):1/0,x=o!==0?Math.abs(1/o):1/0;let v=s!==0?(p>0?h+1-t:t-h)*m:1/0,b=r!==0?(g>0?u+1-e:e-u)*f:1/0,R=o!==0?(_>0?d+1-n:n-d)*x:1/0,w=0,S=0,I=0,y=0;for(let A=0;A<256&&w<=a;A++){const G=u<0?1:i.getBlock(h,u,d),q=dt[G];if(G!==0&&q.replaceable!==!0&&(c||!q.liquid))return{x:h,y:u,z:d,nx:S,ny:I,nz:y,id:G,dist:w,replaceable:!1};const j=Gv(v,b,R);if(j==="a"?(h+=p,w=v,v+=m,S=-p,I=0,y=0):j==="b"?(u+=g,w=b,b+=f,S=0,I=-g,y=0):(d+=_,w=R,R+=x,S=0,I=0,y=-_),u<-1||u>Jt+1)return null}return null}const Gv=(i,t,e)=>i<=t&&i<=e?"a":t<=e?"b":"c",qn={stone:{freq:720,q:1.1,decay:.09,gain:.55},dirt:{freq:380,q:.8,decay:.1,gain:.5},grass:{freq:1500,q:.7,decay:.07,gain:.32},wood:{freq:520,q:2.2,decay:.12,gain:.5},sand:{freq:2600,q:.5,decay:.08,gain:.3},glass:{freq:3200,q:3.5,decay:.16,gain:.45},wool:{freq:260,q:.6,decay:.09,gain:.35},splash:{freq:900,q:.4,decay:.35,gain:.6},soft:{freq:1200,q:.5,decay:.06,gain:.3}};class Vv{constructor(){this.ctx=null,this.sfxVolume=.6,this.musicVolume=.28,this.musicOn=!0,this._musicTimer=null,this._noise=null,this._muted=!1}resume(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=1,this.master.connect(this.ctx.destination),this.sfx=this.ctx.createGain(),this.sfx.gain.value=this.sfxVolume,this.sfx.connect(this.master),this.music=this.ctx.createGain(),this.music.gain.value=1e-4,this.musicBus=this.ctx.createGain(),this.musicBus.connect(this.music);const e=this.ctx.createDelay(1);e.delayTime.value=.19;const n=this.ctx.createDelay(1);n.delayTime.value=.37;const s=this.ctx.createGain();s.gain.value=.34,this.musicBus.connect(e),this.musicBus.connect(n),e.connect(s),n.connect(s),s.connect(n),e.connect(this.music),n.connect(this.music);const r=this.ctx.sampleRate*1.2,o=this.ctx.createBuffer(1,r,this.ctx.sampleRate),a=o.getChannelData(0);for(let l=0;l<r;l++)a[l]=Math.random()*2-1;this._noise=o,this.musicOn&&this.startMusic()}return this.ctx.state==="suspended"&&this.ctx.resume(),!0}setVolumes(t,e){this.sfxVolume=t,this.musicVolume=e,this.sfx&&(this.sfx.gain.value=t),this.music&&(this.music.gain.cancelScheduledValues(this.ctx.currentTime),this.music.gain.linearRampToValueAtTime(e>0?e:1e-4,this.ctx.currentTime+.4))}get ready(){return!!this.ctx&&this.ctx.state==="running"}_noiseHit({freq:t=800,q:e=1,decay:n=.1,gain:s=.5,sweep:r=0,when:o=0}){const a=this.ctx,l=a.createBufferSource();l.buffer=this._noise,l.playbackRate.value=1+(Math.random()-.5)*.2;const c=a.createBiquadFilter();c.type="bandpass",c.frequency.value=t,c.Q.value=e;const h=a.createGain(),u=a.currentTime+o;h.gain.setValueAtTime(0,u),h.gain.linearRampToValueAtTime(s,u+.004),h.gain.exponentialRampToValueAtTime(8e-4,u+n),r&&c.frequency.exponentialRampToValueAtTime(Math.max(60,t*r),u+n),l.connect(c).connect(h).connect(this.sfx),l.start(u),l.stop(u+n+.05)}_tone({freq:t=440,dur:e=.12,gain:n=.2,type:s="sine",when:r=0,glide:o=0,detune:a=0}){const l=this.ctx,c=l.createOscillator();c.type=s;const h=l.currentTime+r;c.frequency.setValueAtTime(t,h),o&&c.frequency.exponentialRampToValueAtTime(Math.max(40,t*o),h+e),c.detune.value=a;const u=l.createGain();u.gain.setValueAtTime(1e-4,h),u.gain.linearRampToValueAtTime(n,h+.01),u.gain.exponentialRampToValueAtTime(5e-4,h+e),c.connect(u).connect(this.sfx),c.start(h),c.stop(h+e+.05)}hit(t,e=1){if(!this.ready)return;const n=qn[t]??qn.stone;this._noiseHit({freq:n.freq*(.9+Math.random()*.25),q:n.q,decay:n.decay*.7,gain:n.gain*.5*e})}breakBlock(t){if(!this.ready)return;const e=qn[t]??qn.stone;this._noiseHit({freq:e.freq,q:e.q,decay:e.decay*1.7,gain:e.gain,sweep:.45}),this._tone({freq:e.freq/6,dur:.1,gain:.06,type:"triangle",glide:.6})}place(t){if(!this.ready)return;const e=qn[t]??qn.stone;this._noiseHit({freq:e.freq*.7,q:1.4,decay:.07,gain:e.gain*.7}),this._tone({freq:180,dur:.07,gain:.09,type:"sine",glide:.6})}step(t){if(!this.ready)return;const e=qn[t]??qn.dirt;this._noiseHit({freq:e.freq*(.85+Math.random()*.3),q:e.q*.8,decay:e.decay*.5,gain:e.gain*.22})}jump(){this.ready&&this._tone({freq:300,dur:.07,gain:.05,type:"sine",glide:1.6})}land(t=1){this.ready&&this._noiseHit({freq:220,q:.7,decay:.1+t*.08,gain:.22*Math.min(1.6,t)})}splash(){this.ready&&this._noiseHit({freq:900,q:.4,decay:.35,gain:.5,sweep:.3})}ui(t="click"){this.ready&&(t==="hover"?this._tone({freq:900,dur:.04,gain:.03,type:"sine"}):t==="back"?this._tone({freq:320,dur:.1,gain:.08,type:"triangle",glide:.6}):this._tone({freq:640,dur:.07,gain:.09,type:"square"}))}deny(){this.ready&&this._tone({freq:180,dur:.12,gain:.08,type:"sawtooth",glide:.7})}openInv(){this.ready&&(this._tone({freq:520,dur:.09,gain:.06,type:"triangle"}),this._tone({freq:780,dur:.12,gain:.05,type:"triangle",when:.05}))}startMusic(){if(!this.ctx||this._musicTimer)return;const t=[0,2,4,7,9,12,14,16,19,21],e=[174.61,196,146.83,164.81];let n=0;const s=()=>{if(!this.ctx||this.ctx.state!=="running")return;const l=this.ctx,c=e[n%e.length];n++,l.currentTime;const h=[0,4,7].map((d,p)=>({freq:c*Math.pow(2,d/12)*(p===2?2:1),when:p*.12}));for(const d of h)this._pad(d.freq,5.2,.035,d.when);const u=1+(Math.random()*3|0);for(let d=0;d<u;d++){const p=t[Math.random()*t.length|0],g=c*2*Math.pow(2,p/12);this._bell(g,1.6+Math.random(),.055,.3+d*.75+Math.random()*.3)}Math.random()>.75&&this._bell(c*4*Math.pow(2,t[Math.random()*5|0]/12),2.4,.03,2.2)},r=(l,c,h,u)=>{const d=this.ctx;if(!d)return;const p=d.currentTime+u,g=d.createOscillator();g.type="sine",g.frequency.value=l;const _=d.createOscillator();_.type="triangle",_.frequency.value=l*1.004;const m=d.createGain();m.gain.setValueAtTime(1e-4,p),m.gain.linearRampToValueAtTime(h,p+c*.35),m.gain.linearRampToValueAtTime(1e-4,p+c),g.connect(m),_.connect(m),m.connect(this.musicBus),g.start(p),_.start(p),g.stop(p+c+.1),_.stop(p+c+.1)},o=(l,c,h,u)=>{const d=this.ctx;if(!d)return;const p=d.currentTime+u,g=d.createOscillator();g.type="sine",g.frequency.value=l;const _=d.createGain();_.gain.setValueAtTime(1e-4,p),_.gain.exponentialRampToValueAtTime(h,p+.02),_.gain.exponentialRampToValueAtTime(1e-4,p+c);const m=d.createBiquadFilter();m.type="lowpass",m.frequency.value=2400,g.connect(m).connect(_).connect(this.musicBus),g.start(p),g.stop(p+c+.1)};this._pad=r,this._bell=o;const a=()=>{try{s()}catch(l){console.warn("музыка выключена:",l?.message??l),this.stopMusic()}};a(),this._musicTimer=setInterval(a,5400)}stopMusic(){this._musicTimer&&clearInterval(this._musicTimer),this._musicTimer=null}toggleMusic(){return this.musicOn=!this.musicOn,this.musicOn?this.ctx&&this.startMusic():this.stopMusic(),this.musicOn}}const As="litecraft:";function yo(i){return`${As}world:${i}`}const tu=As+"settings",eu=2,nu=As+"lastSeed";function Wv(i,t){try{return localStorage.setItem(yo(i),JSON.stringify(t)),!0}catch(e){return console.warn("Не удалось сохранить мир:",e),!1}}function Xv(i){try{const t=localStorage.getItem(yo(i));return t?JSON.parse(t):null}catch(t){return console.warn("Чтение сохранения не удалось:",t),null}}function qv(){const i=[];try{for(let t=0;t<localStorage.length;t++){const e=localStorage.key(t);if(!e?.startsWith(As+"world:"))continue;const n=localStorage.getItem(e);if(!n)continue;const s=JSON.parse(n);i.push({key:e,seed:e.slice((As+"world:").length),size:n.length,...s})}}catch{}return i.sort((t,e)=>(e.saved??0)-(t.saved??0))}function $v(i){try{return localStorage.removeItem(yo(i)),!0}catch{return!1}}function ni(i){try{localStorage.setItem(tu,JSON.stringify({...i,v:eu}))}catch{}}function Yv(){try{const i=JSON.parse(localStorage.getItem(tu)??"{}")??{};return i.v!==eu&&(delete i.renderDistance,delete i.mobs,delete i.creative),i}catch{return{}}}function jv(i){try{localStorage.setItem(nu,String(i))}catch{}}function Kv(){try{return localStorage.getItem(nu)}catch{return null}}function Zv(i,t=1200){let e=null;const n=(...s)=>{e&&clearTimeout(e),e=setTimeout(()=>{e=null,i(...s)},t)};return n.flush=(...s)=>{e&&(clearTimeout(e),e=null,i(...s))},n.cancel=()=>{e&&(clearTimeout(e),e=null)},n}const $t=i=>document.getElementById(i),ro={renderDistance:10,fov:74,mobs:14,creative:!1,sensitivity:1,sfx:.55,music:.22,dayLength:8,freeTime:!1,clouds:.75,shaders:1,netName:"",netUrl:"",netRoom:"world",renderScale:1,fpsLimit:120,shadows:1,waterRefl:2,ao:!0,smoothLight:!0,viewBob:!0,autoJump:!0,showDebug:!0,touch:!1},Jv=[["Стройка",null],["Природа",null],["Руды и свет",null],["Растения и ферма",null],["Инструменты",null],["Предметы",null],["Прочее",null]],Qv={Стройка:["stone","cobblestone","mossy_cobblestone","stone_bricks","bricks","planks","log","glass","ice","lantern","sandstone","obsidian","crafting_table","wool_white","wool_red","wool_blue","wool_yellow","wool_lime","wool_black"],Природа:["grass","dirt","sand","gravel","leaves","snow","podzol","bedrock","cactus","water"],"Руды и свет":["coal_ore","iron_ore","gold_ore","diamond_ore","redstone_ore","glowstone"],"Растения и ферма":["tall_grass","fern","flower_red","flower_yellow","sapling","wheat","farmland","hay_block"]};function tx(i){for(const[t,e]of Object.entries(Qv))if(e.includes(i))return t;return/_pickaxe|_axe|_shovel|_sword/.test(i)||i==="shears"?"Инструменты":i==="emerald"||i.endsWith(":item")||["leather","pork","stick","coal_item","flint","apple","bread","compass","clock"].includes(i)?"Предметы":"Прочее"}const ex=[["WASD / ←↑↓→","движение"],["Мышь","осмотр"],["ЛКМ (держать)","копать блок · атака по мобу"],["ПКМ","поставить блок"],["СКМ","выбрать блок под курсором"],["Пробел","прыжок · двойной — полёт"],["Shift (в полёте)","вниз"],["Ctrl / 2×W","бег"],["1…9 · колесо","слот хотбара"],["E","инвентарь"],["Q","выбросить (сброс слота)"],["R","наверх, если застрял"],["N","промотать время"],["M","музыка вкл/выкл"],["F","полный экран"],["F1","спрятать интерфейс"],["F3","отладка"],["Esc","пауза"]];class nx{constructor(t){this.atlas=t,this.el={hud:$t("hud"),hotbar:$t("hotbar"),blockname:$t("blockname"),debug:$t("debug"),toasts:$t("toasts"),menu:$t("menu"),pause:$t("pause"),settings:$t("settings"),inventory:$t("inventory"),loading:$t("loading"),loadFill:$t("load-fill"),loadText:$t("load-text"),water:$t("water-tint"),vignette:$t("vignette"),hp:$t("hp"),crosshair:$t("crosshair"),seed:$t("seed"),worlds:$t("worlds"),touch:$t("touch-ui"),invGrid:$t("inv-grid"),invHotbar:$t("inv-hotbar"),settingsBody:$t("settings-body"),pauseStats:$t("pause-stats"),controls:$t("controls-list"),invCursor:$t("inv-cursor"),invCraft:$t("inv-craft"),invCraftTitle:$t("inv-craft-title"),invPalette:$t("inv-palette"),invPaletteTitle:$t("inv-palette-title"),invHint:$t("inv-hint"),net:$t("net"),netStatus:$t("net-status"),netPeers:$t("net-peers"),netRole:$t("net-role"),netName:$t("net-name"),netUrl:$t("net-url"),netRoom:$t("net-room"),netCode:$t("net-code"),netChat:$t("net-chat"),netChatRow:$t("net-chat-row")},this.slots=[],this.settings={...ro},this.el.controls.innerHTML=ex.map(([e,n])=>`<div><kbd>${e}</kbd><span class="muted">${n}</span></div>`).join("")}show(t){for(const e of["menu","pause","settings","inventory","loading","net"])this.el[e].classList.toggle("hidden",e!==t);this.el.hud.classList.toggle("hidden",t!==null),this.el.hud.dataset.keep==="1"&&this.el.hud.classList.remove("hidden")}setLoading(t,e){this.el.loadFill.style.width=`${Math.round(t*100)}%`,e&&(this.el.loadText.textContent=e)}netState(){return{role:this._netRole??"host",name:(this.el.netName?.value??"").trim(),url:(this.el.netUrl?.value??"").trim(),room:(this.el.netRoom?.value??"").trim()}}netPrefill(t){this.el.netName&&(this.el.netName.value=t.name??""),this.el.netUrl&&(this.el.netUrl.value=t.url??""),this.el.netRoom&&(this.el.netRoom.value=t.room??""),this.netRole(t.role??"host"),this.el.netChatRow&&this.el.netChatRow.classList.toggle("hidden",!t.connected),t.text!==void 0&&this.netStatus(t.text??"",t.kind??"")}netRole(t){this._netRole=t==="guest"?"guest":"host";for(const e of this.el.netRole?.children??[])e&&e.classList&&e.classList.toggle("on",(e.dataset?.v??"")===this._netRole)}netStatus(t,e=""){const n=this.el.netStatus;n&&(n.textContent=t,n.classList?.toggle("on",e==="on"),n.classList?.toggle("err",e==="err"))}netCode(t){this.el.netCode&&(this.el.netCode.value=t??"")}netCodeValue(){return String(this.el.netCode?.value??"")}netPeers(t){const e=this.el.netPeers;if(!e)return;const n=t.length?"в комнате: "+t.map(s=>`${s.name} (${Math.round(s.x??0)}; ${Math.round(s.z??0)})`).join(", "):"пока никого — правки и шаги видят только тебя";e.textContent!==n&&(e.textContent=n)}toast(t,e=""){const n=this.el.toasts;if(!n)return;const s=String(t);for(const o of n.children??[])if(o.__toastKey===s){this._toastArm(o);return}const r=document.createElement("div");for(r.className=`toast ${e}`,r.textContent=t,r.__toastKey=s,n.appendChild(r);(n.children?.length??0)>6;)n.removeChild(n.children[0]);this._toastArm(r)}_toastArm(t){clearTimeout(t.__t),t.style.opacity="",t.__t=setTimeout(()=>{t.style.transition="opacity .4s",t.style.opacity="0",t.__t=setTimeout(()=>t.remove(),420)},2400)}setFlyAvailable(t){const e=document.getElementById("t-fly");e?.classList&&e.classList.toggle("dim",!t)}seg(t,e){for(const n of t?.children??[])n.classList?.toggle("on",(n.dataset?.v??n.__v)===e)}buildHotbar(t,e,n,s=null){this.hotbar=t,this.sel=e,this.hotCounts=s,this.onHotbarChange=n??this.onHotbarChange;const r=(o,a,l)=>{o.innerHTML="";const c=[];return t.forEach((h,u)=>{const d=document.createElement("div");if(d.className="slot"+(u===e?" sel":""),!a){const p=document.createElement("span");p.className="num",p.textContent=String(u+1),d.appendChild(p)}if(h){const p=document.createElement("img");p.src=this.atlas.icon(h,48),p.alt=dt[h].name,d.appendChild(p);const g=s?s[u]|0:0;if(g>1){const _=document.createElement("span");_.className="cnt",_.textContent=String(g),d.appendChild(_)}}d.title=h?dt[h].name:"пусто",d.addEventListener("click",p=>{p.stopPropagation(),l==="inv"?this.onInvSlot?.("hot",u):this.onHotbarChange?.(u,"click")}),o.appendChild(d),c.push(d)}),c};this.slots=r(this.el.hotbar,!1,"hud"),this.el.invHotbar&&(this.invSlots=r(this.el.invHotbar,!0,"inv"))}markInventorySelection(t){(this.invSlots??[]).forEach((e,n)=>e.classList.toggle("sel",n===t)),(this.slots??[]).forEach((e,n)=>e.classList.toggle("sel",n===t))}renderInventory(t){const{snap:e,recipes:n,creative:s,icon:r,names:o,onSlot:a,onPick:l,onCraft:c,nearTable:h,onCreative:u}=t;this.onInvSlot=a;const d=(f,x,v,b)=>{const R=document.createElement("div");if(R.className="slot",f){const w=document.createElement("img");if(w.src=r(f,44),w.alt=o(f),R.appendChild(w),x>1){const S=document.createElement("span");S.className="cnt",S.textContent=String(x),R.appendChild(S)}}return R.title=f?`${o(f)}${x?" ×"+x:""}`:"пусто",R.onclick=()=>a(v,b),R},p=this.el.invGrid;p.innerHTML="",e.main.forEach((f,x)=>p.appendChild(d(f.id,f.n,"main",x))),this.buildHotbar(e.hot.map(f=>f.id),e.sel,this.onHotbarSelect,s?null:e.hot.map(f=>f.n)),this.el.invCursor.textContent=e.cursor.id?`В руке: ${o(e.cursor.id)}${e.cursor.n>1?" ×"+e.cursor.n:""} — кликни по клетке, чтобы положить`:s?"Творчество: клик по палитре кладёт блок в выбранный слот":"Клик по клетке — взять стек, по другой — положить/обменять";const g=this.el.invCraft;g.innerHTML="",this.el.invCraftTitle&&(this.el.invCraftTitle.textContent=h?"Крафт · верстак рядом — доступны все рецепты":"Крафт · у верстака (в 4 блоках) открываются инструменты из камня и железа"),n.forEach((f,x)=>{const v=document.createElement("div");v.className="craft-row"+(f.ok?" ok":" locked");const b=document.createElement("img");b.src=r(f.outId,32),v.appendChild(b);const R=document.createElement("span");R.className="cname",R.textContent=`${o(f.outId)}${f.n>1?" ×"+f.n:""}`,v.appendChild(R);const w=document.createElement("span");w.className="cneed",w.textContent=f.need.map(I=>`${o(I.id)} ${I.have}/${I.n}`).join(" · ")+(f.table?" · верстак":""),v.appendChild(w);const S=document.createElement("button");S.textContent=f.ok?"Скрафтить":"—",S.disabled=!f.ok,S.onclick=()=>c(x),v.appendChild(S),g.appendChild(v)});const _=this.el.invPalette,m=this.el.invPaletteTitle;if(_&&(_.innerHTML="",m&&(m.style.display=s?"":"none"),s)){if(m){m.innerHTML="";const b=document.createElement("span");b.textContent="Все блоки ("+dt.filter(S=>S&&S.id&&S.render!=="none").length+")";const R=document.createElement("input");R.type="search",R.className="pal-search",R.placeholder="Поиск: стекло, кирка, шерсть…",R.value=this.palQuery??"",R.oninput=()=>{this.palQuery=R.value,this.renderInventory(t)};const w=document.createElement("button");w.className="btn ghost mini",w.textContent="Творчество: вкл",w.title="Выключить — инвентарь снова становится обычным, а блоки начинают тратиться",w.onclick=()=>{u?.(),this.renderInventory(t)},m.append(b,R,w)}const f=(this.palQuery??"").trim().toLowerCase(),x=new Map(Jv.map(b=>[b[0],[]]));for(const b of dt)!b.id||b.render==="none"||f&&!(b.name.toLowerCase().includes(f)||b.key.includes(f))||(x.get(tx(b.key))??x.get("Прочее")).push(b);let v=0;for(const[b,R]of x){if(!R.length)continue;v+=R.length;const w=document.createElement("div");w.className="pal-cat",w.textContent=b,_.appendChild(w);for(const S of R){const I=document.createElement("div");I.className="slot";const y=document.createElement("img");y.src=r(S.id,36),y.alt=S.name,I.appendChild(y),I.title=S.name,I.onclick=()=>l(S.id),_.appendChild(I)}}if(f&&!v){const b=document.createElement("div");b.className="muted pal-empty",b.textContent=`По запросу «${f}» в палитре ничего нет — попробуй «кирка», «шерсть», «песч»`,_.appendChild(b)}}}selectSlot(t){this.sel=t,[...this.slots,...this.invSlots??[]].forEach((e,n)=>e.classList.toggle("sel",n%9===t))}setCinematic(t){const e=this.el.vignette;!e||!e.classList||e.classList.toggle("cine",!!t)}showBlockName(t,e=""){const n=this.el.blockname;n.textContent=(t?dt[t].name:"Пусто")+(e||""),n.classList.add("show"),clearTimeout(this._nameT),this._nameT=setTimeout(()=>n.classList.remove("show"),1400)}setDebug(t){this.el.debug&&(this.el.debug.textContent=t)}hideDebug(t){this.el.debug.classList.toggle("hidden",t)}hideHud(t){this.el.hud.classList.toggle("hidden",t),this.el.crosshair.style.opacity=t?"0":""}setWater(t){this.el.water.classList.toggle("on",t)}setMining(t){this.el.crosshair.classList.toggle("mine",t)}hurt(){this.el.vignette.classList.add("hurt"),setTimeout(()=>this.el.vignette.classList.remove("hurt"),550)}setHealthVisible(t){const e=this.el.hp;e&&(e.style.display=t?"":"none")}setHealth(t,e=20){const n=[];for(let s=0;s<e/2;s++){const r=Math.max(0,Math.min(1,t-s*2))/2;n.push(r>=.99?"❤️":r>=.4?"🧡":"🖤")}this.el.hp.textContent=n.join("")}renderWorlds(t,e,n){const s=this.el.worlds;if(s.innerHTML="",!t.length){s.innerHTML='<div class="muted small">Сохранённых миров пока нет.</div>';return}for(const r of t){const o=document.createElement("div");o.className="world-item",o.innerHTML=`<div class="grow">Сид <b>${r.seed}</b> · правок: ${r.edits??0}
        <div class="muted small">${r.saved?new Date(r.saved).toLocaleString("ru-RU"):""}</div></div>`;const a=document.createElement("button");a.className="btn",a.textContent="Продолжить",a.onclick=()=>e(r.seed);const l=document.createElement("button");l.className="btn ghost danger",l.textContent="Удалить",l.onclick=()=>n(r.seed),o.append(a,l),s.appendChild(o)}}settingsForm(t,e,n={}){const s=[{key:"renderDistance",label:"Дальность прорисовки",min:2,max:64,step:1,fmt:l=>`${l} чанк · ~${l*16} блоков${l>=32?" · прогреть мир займёт время":l>=24?" · нужно много памяти":""}`},{key:"fov",label:"Поле зрения",min:55,max:110,step:1,fmt:l=>`${l}°`},{key:"sensitivity",label:"Чувствительность мыши",min:.2,max:3,step:.05,fmt:l=>l.toFixed(2)},{key:"sfx",label:"Громкость эффектов",min:0,max:1,step:.05,fmt:l=>`${Math.round(l*100)}%`},{key:"music",label:"Громкость музыки",min:0,max:1,step:.05,fmt:l=>`${Math.round(l*100)}%`},{key:"clouds",label:"Облачность",min:0,max:1,step:.05,fmt:l=>`${Math.round(l*100)}%`},{key:"renderScale",label:"Разрешение рендера",min:.5,max:1,step:.05,fmt:l=>`${Math.round(l*100)}%${l>=.98?" · пиксель в пиксель":l>=.8?" · мягко":" · экономно"}`},{key:"dayLength",label:"Длина суток, мин",min:2,max:40,step:1,fmt:l=>`${l}`},{key:"mobs",label:"Мобов вокруг",min:0,max:32,step:1,fmt:l=>l?`${l}`:"выкл"}],r=[{key:"shaders",label:"Шейдеры",options:[[0,"Выкл — базовая картинка"],[1,"Мягкие — блики, дымка, живая вода"],[2,"Красивые — тонмаппинг, небо в отражениях, виньетка"],[3,"Ультра — тени от солнца, отражающая вода, закаты (нужна мощная видеокарта)"]]},{key:"shadows",label:"Тени от солнца (нужны «Красивые» или «Ультра»)",options:[[0,"выкл — быстрее всего"],[1,"рядом — зона 128 блоков"],[2,"широко — зона 192 блока"]]},{key:"waterRefl",label:"Отражения воды (только «Ультра»)",options:[[0,"нет — только блики"],[1,"небо"],[2,"небо + мир (куб-проба)"]]},{key:"fpsLimit",label:"Лимит кадров, FPS",options:[[20,"20"],[30,"30"],[45,"45"],[60,"60"],[75,"75"],[90,"90"],[120,"120 — по умолчанию"],[144,"144"],[165,"165"],[240,"240"],[0,"без лимита"]]}],o=[{key:"ao",label:"Мягкое затенение (AO)"},{key:"smoothLight",label:"Плавный свет"},{key:"viewBob",label:"Покачивание камеры"},{key:"autoJump",label:"Автопрыжок через уступы"},{key:"creative",label:"Творчество: блоки не тратятся, урон не страшен, полёт доступен"},{key:"freeTime",label:"Заморозить время"},{key:"showDebug",label:"Панель отладки (F3)"},{key:"touch",label:"Сенсорное управление"}],a=this.el.settingsBody;a.innerHTML="";for(const l of s){const c=document.createElement("div");c.className="setting";const h=document.createElement("label");h.textContent=l.label;const u=document.createElement("input");u.type="range",u.min=l.min,u.max=l.max,u.step=l.step,u.value=t[l.key];const d=document.createElement("span");d.className="val",d.textContent=l.fmt(+u.value),u.oninput=()=>{const p=+u.value;d.textContent=l.fmt(p),t[l.key]=p,e(l.key,p)},c.append(h,u,d),a.appendChild(c)}for(const l of r){const c=document.createElement("div");c.className="setting";const h=document.createElement("label");h.textContent=l.label;const u=document.createElement("select");for(const[d,p]of l.options){const g=document.createElement("option");g.value=String(d),g.textContent=p,Number(t[l.key])===d&&(g.selected=!0),u.appendChild(g)}u.onchange=()=>{const d=+u.value;t[l.key]=d,e(l.key,d)},c.append(h,u),a.appendChild(c)}for(const l of o){const c=document.createElement("div");c.className="setting";const h=document.createElement("label");h.className="check";const u=document.createElement("input");u.type="checkbox",u.checked=!!t[l.key],u.onchange=()=>{t[l.key]=u.checked,e(l.key,u.checked)},h.append(u,document.createTextNode(l.label)),c.appendChild(h),a.appendChild(c)}if(n.onRegenerate){const l=document.createElement("div");l.className="row buttons";const c=document.createElement("button");c.className="btn ghost",c.textContent="Пересобрать чанки",c.onclick=n.onRegenerate;const h=document.createElement("button");h.className="btn ghost",h.textContent="Сбросить настройки",h.onclick=n.onReset;const u=[c,h];if(n.onLowSpec){const d=document.createElement("button");d.className="btn ghost",d.textContent="Слабое железо",d.title="Меньше пикселей, без AO, реже свет и облака · дальность прорисовки не трогаем",d.onclick=n.onLowSpec,u.push(d)}l.append(...u),a.appendChild(l)}this.modsSection(a,n.mods)}modsSection(t,e){if(!e)return;const n=document.createElement("div");n.className="setting";const s=document.createElement("label");s.textContent="Моды и свои шейдеры";const r=document.createElement("div");r.style.cssText="opacity:.65;font-size:12px;line-height:1.45;margin:2px 0 6px",r.textContent="Файлы из каталога mods/ подхватываются сборкой. Ниже — свой мод одним объектом (секции tiles, blocks, recipes, ore, mobs, shader) и шейдерная вставка в материал мира. Справочник: mods/README.md.",n.append(s,r),t.appendChild(n);const o=document.createElement("div");o.className="setting";const a=typeof e.list=="function"?e.list():[];if(!a.length){const g=document.createElement("div");g.style.cssText="opacity:.6;font-size:12px",g.textContent="Модов нет: положи файл mods/<имя>.js или напиши свой ниже.",o.appendChild(g)}for(const g of a){const _=document.createElement("div");_.style.cssText="display:flex;gap:8px;align-items:baseline;margin:3px 0";const m=document.createElement("input");m.type="checkbox",m.checked=!g.off,m.onchange=()=>e.onToggle?.(g.id,m.checked);const f=document.createElement("label");f.style.cssText="font-size:13px";const x=g.ok?g.off?"выключен":g.applied?"применён":"без изменений":g.error||"ошибка";f.textContent=`${g.name} — ${g.source} — ${x}`,g.ok||(f.style.color="#f0a2a2"),_.append(m,f),o.appendChild(_)}t.appendChild(o);const l=document.createElement("textarea");l.value=typeof e.source=="function"?e.source():"",l.rows=9,l.spellcheck=!1,l.placeholder="{ id: 'moy', name: 'Мой мод', blocks: […], shader: { frag: 'col.rgb *= 1.1;' } }",l.style.cssText="width:100%;box-sizing:border-box;background:#0d1117;color:#d6e4f0;border:1px solid #2b3a4a;border-radius:6px;padding:8px;font:12px/1.5 ui-monospace,Menlo,Consolas,monospace;white-space:pre",t.appendChild(l);const c=document.createElement("div");c.className="row buttons";const h=document.createElement("button");h.className="btn ghost",h.textContent="Сохранить мод",h.onclick=()=>e.onSave?.(l.value);const u=document.createElement("button");u.className="btn ghost",u.textContent="Применить шейдеры сейчас",u.title="Работает, если мод трогает только shader: материал пересобирается на живых мешах. Блоки и текстуры требуют F5.",u.onclick=()=>e.onApplyShaders?.();const d=document.createElement("button");d.className="btn ghost",d.textContent="Сбросить поле",d.onclick=()=>{l.value=typeof e.source=="function"?e.source():""},c.append(h,u,d),t.appendChild(c);const p=typeof e.uniforms=="function"?e.uniforms():[];for(const g of p){const _=document.createElement("div");_.className="setting";const m=document.createElement("label");m.textContent=`${g} (мод)`;const f=document.createElement("input");f.type="range",f.min="0",f.max="1",f.step="0.01",f.value="0.5",f.oninput=()=>e.onSetUniform?.(g,+f.value),m.append(f,document.createTextNode(` ${f.value}`)),_.appendChild(m),t.appendChild(_)}if(typeof e.stats=="function"){const g=document.createElement("div");g.style.cssText="opacity:.6;font-size:12px;margin-top:4px",g.textContent="Активно: "+e.stats(),t.appendChild(g)}}buildInventory(t){const e=this.el.invGrid;e.innerHTML="";for(const n of dt){if(n.id===0)continue;const s=document.createElement("div");s.className="inv-cell";const r=document.createElement("img");r.src=this.atlas.icon(n.id,48);const o=document.createElement("span");o.textContent=n.name,s.append(r,o),s.onclick=()=>t(n.id),s.onmouseenter=()=>{window.__hudHover?.()},e.appendChild(s)}}}function ix(i,{input:t,api:e}){const n=i.querySelector("#stick"),s=i.querySelector("#stick-knob"),r={active:!1,id:-1,cx:0,cy:0},o=46,a=m=>{const f=n.getBoundingClientRect();r.cx=f.left+f.width/2,r.cy=f.top+f.height/2,r.active=!0,r.id=m.changedTouches?m.changedTouches[0].identifier:"m",l(m),m.preventDefault()},l=m=>{if(!r.active)return;const f=m.changedTouches?sx(m.changedTouches,r.id):m;if(!f)return;let x=f.clientX-r.cx,v=f.clientY-r.cy;const b=Math.hypot(x,v);b>o&&(x=x/b*o,v=v/b*o),s.style.transform=`translate(${x}px, ${v}px)`,t.tForward=v<-6?1:0,t.tBack=v>6?1:0,t.tLeft=x<-6?1:0,t.tRight=x>6?1:0,t.tAnalog=Math.min(1,b/o),m.preventDefault()},c=m=>{r.active=!1,s.style.transform="",t.tForward=t.tBack=t.tLeft=t.tRight=0,t.tAnalog=1};n.addEventListener("touchstart",a,{passive:!1}),n.addEventListener("touchmove",l,{passive:!1}),n.addEventListener("touchend",c),n.addEventListener("touchcancel",c);const h=(m,f,x)=>{const v=i.querySelector(m);if(!v)return;const b=R=>{v.classList.toggle("active",R),R?f():x?.()};v.addEventListener("touchstart",R=>{R.preventDefault(),b(!0)},{passive:!1}),v.addEventListener("touchend",R=>{R.preventDefault(),b(!1)},{passive:!1}),v.addEventListener("click",R=>{R.preventDefault()})};h("#t-jump",()=>{t.tJump=1},()=>{t.tJump=0}),h("#t-sneak",()=>{t.tSneak=1,t.tSprint=0},()=>{t.tSneak=0}),h("#t-mine",()=>{t.mine=1,e.onMineStart?.()},()=>{t.mine=0,e.onMineEnd?.()}),h("#t-place",()=>{e.place?.()},()=>{}),i.querySelector("#t-fly")?.addEventListener("click",()=>{e.toggleFly?.()}),i.querySelector("#t-inv")?.addEventListener("click",m=>{m.preventDefault(),e.toggleInv?.()});const u={id:-1,x:0,y:0},d=document.getElementById("gl");d.addEventListener("touchstart",m=>{const f=m.changedTouches[0];f.clientX<window.innerWidth*.32&&f.clientY>window.innerHeight*.6||f.target===d&&(u.id=f.identifier,u.x=f.clientX,u.y=f.clientY,p=!0)},{passive:!0});let p=!1;d.addEventListener("touchmove",m=>{const f=[...m.changedTouches].find(x=>x.identifier===u.id);f&&(t.lookX+=(f.clientX-u.x)*.0045,t.lookY+=(f.clientY-u.y)*.0045,u.x=f.clientX,u.y=f.clientY,m.preventDefault())},{passive:!1});const g=m=>{[...m.changedTouches].find(x=>x.identifier===u.id)&&(u.id=-1,p&&performance.now()-_<250&&e.tap?.(),p=!1)};let _=0;return d.addEventListener("touchstart",()=>{_=performance.now()},{passive:!0}),d.addEventListener("touchend",g,{passive:!0}),d.addEventListener("touchcancel",g,{passive:!0}),{uninstall(){n.replaceWith(n.cloneNode(!0))}}}function sx(i,t){for(let e=0;e<i.length;e++)if(i[e].identifier===t)return i[e];return null}const Es=64,vs=9,ur=27;class rx{constructor(){this.hot=new Array(vs).fill(0),this.hotN=new Array(vs).fill(0),this.main=new Array(ur).fill(0),this.mainN=new Array(ur).fill(0),this.sel=0,this.creative=!0,this.cursor=0,this.cursorN=0}kind(t){return t==="hot"?[this.hot,this.hotN]:[this.main,this.mainN]}id(t,e){return this.kind(t)[0][e]|0}n(t,e){return this.kind(t)[1][e]|0}set(t,e,n,s){const[r,o]=this.kind(t);r[e]=n|0,o[e]=Math.max(0,s|0)}swap(t,e,n,s){const[r,o]=this.kind(t),[a,l]=this.kind(n),c=r[e],h=o[e];r[e]=a[s],o[e]=l[s],a[s]=c,l[s]=h}selectedId(){return this.hot[this.sel]|0}selectedCount(){return this.creative?1/0:this.hotN[this.sel]|0}count(t){let e=0;if(this.creative)return this.hot.includes(t)?1/0:0;for(let n=0;n<vs;n++)this.hot[n]===t&&(e+=this.hotN[n]);for(let n=0;n<ur;n++)this.main[n]===t&&(e+=this.mainN[n]);return e}add(t,e=1){if(t|=0,!t||e<=0)return 0;if(this.creative){for(let o=0;o<vs;o++)if(this.hot[o]===t)return 0;for(let o=0;o<vs;o++)if(!this.hot[o])return this.hot[o]=t,this.hotN[o]=0,0;for(let o=0;o<ur;o++)if(!this.main[o])return this.main[o]=t,this.mainN[o]=0,0;return 0}let n=e;const s=(o,a,l)=>{for(let c=0;c<o.length&&n>0;c++){if(o[c]!==t)continue;const h=Es-a[c];if(h<=0)continue;const u=Math.min(h,n);a[c]+=u,n-=u}};s(this.hot,this.hotN),s(this.main,this.mainN);const r=(o,a)=>{for(let l=0;l<o.length&&n>0;l++){if(o[l])continue;const c=Math.min(Es,n);o[l]=t,a[l]=c,n-=c}};return r(this.hot,this.hotN),r(this.main,this.mainN),n}take(t,e=1){if(this.creative)return e;let n=e;const s=(r,o)=>{for(let a=r.length-1;a>=0&&n>0;a--){if(r[a]!==t)continue;const l=Math.min(o[a],n);o[a]-=l,n-=l,o[a]<=0&&(r[a]=0,o[a]=0)}};return s(this.main,this.mainN),s(this.hot,this.hotN),e-n}consumeSelected(t=1){if(this.creative)return!0;const e=this.sel;return this.hot[e]?(this.hotN[e]-=t,this.hotN[e]<=0&&(this.hot[e]=0,this.hotN[e]=0),!0):!1}snapshot(){return{hot:this.hot.map((t,e)=>({id:t,n:this.creative?0:this.hotN[e]})),main:this.main.map((t,e)=>({id:t,n:this.creative?0:this.mainN[e]})),sel:this.sel,cursor:{id:this.cursor,n:this.cursorN},creative:this.creative}}serialize(){return{hot:this.hot.slice(),hotN:this.hotN.slice(),main:this.main.slice(),mainN:this.mainN.slice(),sel:this.sel,creative:this.creative}}load(t){if(!t)return!1;const e=(n,s)=>{if(Array.isArray(n))for(let r=0;r<s.length&&r<n.length;r++)s[r]=n[r]|0};return e(t.hot,this.hot),e(t.hotN,this.hotN),e(t.main,this.main),e(t.mainN,this.mainN),this.sel=t.sel|0,typeof t.creative=="boolean"&&(this.creative=t.creative),!0}}const iu=1,ax=12,ox=15e3,ao=16,dr=1e7,hn=(i,t=0)=>typeof i=="number"&&Number.isFinite(i)?i:t,fr=(i,t,e)=>i<t?t:i>e?e:i;function lx(i){return JSON.stringify(i)}function cx(i){if(typeof i!="string"||i.length>64*1024)return null;let t;try{t=JSON.parse(i)}catch{return null}return!t||typeof t!="object"||t.v!==iu||typeof t.t!="string"?null:t}function La(i){return String(i??"").replace(/[\u0000-\u001f<>]/g,"").trim().slice(0,24)||"игрок"}function Pc(i){return String(i??"").toLowerCase().replace(/[^a-z0-9_-]/g,"").slice(0,32)||"world"}function Dc(i){const t=fr(hn(i?.x),-dr,dr),e=fr(hn(i?.y,64),-8,Jt+8),n=fr(hn(i?.z),-dr,dr),s=hn(i?.yaw)%(Math.PI*2),r=fr(hn(i?.pitch),-1.5708,1.5708);return{x:t,y:e,z:n,yaw:s,pitch:r}}class hx{constructor(t={}){this.id=String(t.id??"me"),this.name=La(t.name),this.seed=t.seed>>>0,this.blockCount=t.blockCount??256,this.send=typeof t.send=="function"?t.send:()=>{},this.onEdit=t.onEdit??null,this.onPeerJoin=t.onPeerJoin??null,this.onPeerLeave=t.onPeerLeave??null,this.onChat=t.onChat??null,this.onSeed=t.onSeed??null,this.log=t.log??(()=>{}),this.clock=t.clock??null,this.shareSeed=!!t.shareSeed,this.peers=new Map,this.edits=0,this.dropped=0,this.stats={in:0,out:0,bad:0},this._lastPos=0,this.closed=!1}announce(t={}){this._raw({t:"hello",n:this.name,s:this.seed,...t})}_raw(t){if(!this.closed){this.stats.out++;try{this.send(lx({v:iu,from:this.id,...t}))}catch(e){this.log("отправка не удалась: "+(e?.message??e))}}}announceSeed(){this._raw({t:"seed",s:this.seed>>>0})}broadcastEdit(t,e,n,s){this._raw({t:"e",x:t|0,y:e|0,z:n|0,id:s|0}),this.edits++}broadcastPosition(t,e=0){const n=this.now();if(n-this._lastPos<1e3/ax)return;this._lastPos=n;const s=Dc({...t});this._raw({t:"p",x:+s.x.toFixed(3),y:+s.y.toFixed(3),z:+s.z.toFixed(3),yaw:+s.yaw.toFixed(4),pitch:+s.pitch.toFixed(4),h:e|0})}broadcastChat(t){const e=String(t??"").slice(0,160);e.trim()&&this._raw({t:"c",x:e})}now(){return this.clock?this.clock():Date.now()}handle(t){if(this.closed)return;this.stats.in++;const e=cx(t);if(!e){this.stats.bad++;return}const n=String(e.from??"").slice(0,64);if(!n||n===this.id)return;const s=this.now();switch(e.t){case"hello":{const r=!this.peers.has(n),o=this._touch(n,s);if(o.name=La(e.n),typeof e.s=="number"&&Number.isFinite(e.s)&&(o.seed=e.s>>>0),r&&this.peers.size>ao){this.log("слишком много игроков, лишний отключён"),this.peers.delete(n);return}r&&(this._raw({t:"hello",n:this.name,s:this.seed}),this.shareSeed&&this._raw({t:"seed",s:this.seed}),this.onPeerJoin?.(n,o));return}case"seed":{const r=hn(e.s,NaN);Number.isFinite(r)&&this.onSeed?.(r>>>0);return}case"p":{const r=this._touch(n,s),o=Dc(e);r.tx=o.x,r.ty=o.y,r.tz=o.z,r.tyaw=o.yaw,r.tpitch=o.pitch,r.x===void 0&&(r.x=o.x,r.y=o.y,r.z=o.z,r.yaw=o.yaw,r.pitch=o.pitch),r.held=hn(e.h,0)|0,r.seen=s;return}case"e":{const r=hn(e.x,NaN),o=hn(e.y,NaN),a=hn(e.z,NaN),l=hn(e.id,NaN)|0;if(![r,o,a].every(Number.isFinite)){this.stats.bad++;return}if(o<0||o>=Jt||l<0||l>=this.blockCount){this.dropped++;return}this.onEdit?.({x:r|0,y:o|0,z:a|0,id:l,from:n}),this.edits++;return}case"c":{const r=this._touch(n,s);this.onChat?.(La(r.name??e.n),String(e.x??"").slice(0,160));return}case"bye":{this.peers.delete(n)&&this.onPeerLeave?.(n);return}default:this.stats.bad++}}_touch(t,e){let n=this.peers.get(t);return n||(n={id:t,name:"игрок",x:0,y:0,z:0,yaw:0,pitch:0,seen:e},this.peers.set(t,n)),n.seen=e,n}tick(t){const e=this.now();for(const[n,s]of this.peers){if(e-(s.seen??0)>ox){this.peers.delete(n),this.onPeerLeave?.(n);continue}const r=Math.max(0,Math.min(1,t*9));s.tx!==void 0&&(s.x+=(s.tx-s.x)*r,s.y+=(s.ty-s.y)*r,s.z+=(s.tz-s.z)*r,s.yaw+=(s.tyaw-s.yaw)*r,s.pitch+=(s.tpitch-s.pitch)*r)}}leave(){this._raw({t:"bye"}),this.closed=!0}peerList(){return[...this.peers.values()].map(t=>({id:t.id,name:t.name,x:t.x,y:t.y,z:t.z}))}}const ux=i=>typeof globalThis.btoa=="function"?globalThis.btoa(unescape(encodeURIComponent(i))):Buffer.from(i,"utf8").toString("base64"),dx=i=>typeof globalThis.atob=="function"?decodeURIComponent(escape(globalThis.atob(i))):Buffer.from(i,"base64").toString("utf8");function Ic(i){return ux(JSON.stringify(i))}function Uc(i){try{const t=JSON.parse(dx(String(i).trim().replace(/\s+/g,"")));return t&&t.type&&t.sdp?t:null}catch{return null}}function su(){const i={message:[],open:[],close:[],error:[]},t=(n,s)=>(typeof s=="function"&&i[n].push(s),e),e={onMessage:n=>t("message",n),onOpen:n=>t("open",n),onClose:n=>t("close",n),onError:n=>t("error",n),emit(n,s){for(const r of i[n])try{r(s)}catch{}}};return e}function fx(i){const t=su();let e=null,n=[],s=!1;return(()=>{if(s)return;const o=globalThis.WebSocket;if(typeof o!="function"){t.emit("error","браузер не поддерживает WebSocket");return}try{e=new o(i)}catch(a){t.emit("error",String(a?.message??a));return}e.onopen=()=>{for(const a of n)try{e.send(a)}catch{break}n=[],t.emit("open")},e.onmessage=a=>{typeof a.data=="string"&&t.emit("message",a.data)},e.onclose=()=>{e=null,t.emit("close")},e.onerror=()=>{t.emit("error","нет соединения с сервером")}})(),{...t,get ready(){return!!e&&e.readyState===1},send(o){if(e&&e.readyState===1)try{e.send(o);return}catch{}n.length<256&&n.push(o)},close(){s=!0;try{e?.close()}catch{}e=null}}}function Nc({label:i="lite",ice:t=!0}={}){const e=globalThis.RTCPeerConnection,n=su();if(!e)return n.emit("error","браузер не поддерживает WebRTC"),{...n,ready:!1,send(){},close(){}};const s=new e({iceServers:t?[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302"]}]:[]});let r=null,o=!1;const a=()=>new Promise(c=>{if(s.iceGatheringState==="complete")return c();const h=setTimeout(c,2500);s.addEventListener("icegatheringstatechange",()=>{s.iceGatheringState==="complete"&&(clearTimeout(h),c())})}),l=c=>{r=c,r.binaryType="arraybuffer",r.onmessage=h=>{typeof h.data=="string"&&n.emit("message",h.data)},r.onopen=()=>n.emit("open"),r.onclose=()=>{o||n.emit("close")}};return s.ondatachannel=c=>l(c.channel),s.onconnectionstatechange=()=>{(s.connectionState==="failed"||s.connectionState==="disconnected")&&n.emit("close")},{...n,get ready(){return!!r&&r.readyState==="open"},send(c){if(r&&r.readyState==="open")try{r.send(c)}catch{}},async hostStart(){l(s.createDataChannel(i,{ordered:!0}));const c=await s.createOffer();return await s.setLocalDescription(c),await a(),Ic(s.localDescription)},async guestAccept(c){const h=Uc(c);if(!h)throw new Error("код приглашения не читается");await s.setRemoteDescription(h);const u=await s.createAnswer();return await s.setLocalDescription(u),await a(),Ic(s.localDescription)},async guestFinish(c){const h=Uc(c);if(!h)throw new Error("ответ не читается");await s.setRemoteDescription(h)},close(){o=!0;try{r?.close()}catch{}try{s.close()}catch{}}}}function kc(i,t=8790){const e=globalThis.location,n=px(i);if(!e||!e.protocol)return`ws://127.0.0.1:${t}/${n}`;const s=e.protocol==="https:"?"wss:":"ws:",r=/^(\d+)-(.+)$/.exec(e.hostname??"");return r?`${s}//${t}-${r[2]}/${n}`:`${s}//${e.hostname}:${t}/${n}`}function px(i){return String(i??"").toLowerCase().replace(/[^a-z0-9_-]/g,"").slice(0,32)||"world"}const Fc=[5227511,16758605,8505220,12216520,15037299,5093036,15753874,16773494],Oc=13208675;function mx(i){let t=2166136261;for(let e=0;e<i.length;e++)t=(t^i.charCodeAt(e))*16777619;return t>>>0}const Hi=(i,t,e,n)=>({geo:new On(i,t,e),color:n});class gx{constructor(t){this.scene=t,this.group=new yn,this.group.name="peers",this.scene.add(this.group),this.items=new Map,this.day=1,this.parts=[Hi(.5,.5,.5,Oc),Hi(.55,.7,.3,0),Hi(.22,.75,.22,0),Hi(.22,.75,.22,0),Hi(.25,.8,.25,0),Hi(.25,.8,.25,0)],this.offs=[[0,1.45,0],[0,.85,0],[-.4,.85,0],[.4,.85,0],[-.15,.4,0],[.15,.4,0]],this.mats=[]}_label(t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n.fillStyle="rgba(12,16,20,0.68)",n.fillRect(0,0,e.width,e.height),n.font="600 34px ui-monospace, monospace",n.fillStyle="#eaf2f7",n.textAlign="center",n.textBaseline="middle",n.fillText(t.slice(0,18),e.width/2,e.height/2+2);const s=new Dg(e);s.colorSpace=Te;const r=new Cg(new bh({map:s,transparent:!0,depthTest:!0}));return r.scale.set(1.6,.4,1),r.position.set(0,2.15,0),r.renderOrder=3,r.userData.tex=s,r}ensure(t,e){let n=this.items.get(t);if(n)return n.name!==e&&(n.name=e,n.group.remove(n.label),n.label.material.map.dispose(),n.label.material.dispose(),n.label=this._label(e),n.group.add(n.label)),n;const s=Fc[mx(String(e||t))%Fc.length],r=new yn,o=[];this.parts.forEach((l,c)=>{const h=new xn({color:c===0?Oc:c===1?s:_x(s)}),u=new xe(l.geo,h),d=this.offs[c];u.position.set(d[0],d[1],d[2]),r.add(u),o.push(u)});const a=this._label(e||"игрок");return r.add(a),this.group.add(r),n={id:t,name:e||"игрок",group:r,meshes:o,label:a,t:0,px:0,pz:0,base:o.map(l=>l.material.color.clone())},this.items.set(t,n),this.day!==1&&this._apply(n),n}update(t,e){const n=new Set;for(const s of t){n.add(s.id);const r=this.ensure(s.id,s.name);r.group.position.set(s.x??0,(s.y??0)-.02,s.z??0),r.group.rotation.y=-(s.yaw??0);const o=Math.hypot((s.x??0)-r.px,(s.z??0)-r.pz);r.px=s.x??0,r.pz=s.z??0,r.t+=e*(1.5+o*9);const a=Math.sin(r.t*3.4)*Math.min(.7,o*4);r.meshes[4]&&(r.meshes[4].rotation.x=a),r.meshes[5]&&(r.meshes[5].rotation.x=-a),r.meshes[2]&&(r.meshes[2].rotation.x=-a*.7),r.meshes[3]&&(r.meshes[3].rotation.x=a*.7)}for(const s of[...this.items.keys()])n.has(s)||this.remove(s);return this.items.size}remove(t){const e=this.items.get(t);if(e){this.group.remove(e.group);for(const n of e.meshes)n.material.dispose();e.label.material.map?.dispose?.(),e.label.material.dispose(),this.items.delete(t)}}clear(){for(const t of[...this.items.keys()])this.remove(t)}setDayLight(t){const e=Math.max(.28,Math.min(1,t));if(!(Math.abs(e-this.day)<.01)){this.day=e;for(const n of this.items.values())this._apply(n)}}_apply(t){t.meshes.forEach((e,n)=>{t.base[n]&&e.material.color.copy(t.base[n]).multiplyScalar(this.day)})}}function _x(i){const t=new Lt(i);return t.multiplyScalar(.72),t.getHex()}const vx={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Hr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const xx=new mo(-1,1,1,-1,0,1);class yx extends Le{constructor(){super(),this.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ce([0,2,0,0,2,0],2))}}const Mx=new yx;class bx{constructor(t){this._mesh=new xe(Mx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,xx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ru extends Hr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof un?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=fo.clone(t.uniforms),this.material=new un({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new bx(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Bc extends Hr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Sx extends Hr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Ex{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Xt);this._width=n.width,this._height=n.height,e=new Fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:es}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ru(vx),this.copyPass.material.blending=Dn,this.clock=new Og}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Bc!==void 0&&(o instanceof Bc?n=!0:o instanceof Sx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class wx extends Hr{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Lt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const Tx=`
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
`,Ax=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;class Rx{setUniform(t,e){const n=this.grade?.uniforms?.[t];return n?(n.value=e,!0):!1}constructor(t,e,n,s={}){this.renderer=t,this.enabled=!1,this.ok=!1,this.composer=null,this.grade=null;try{const r=t.capabilities?.isWebGL2!==!1,o=t.getDrawingBufferSize(new Xt),a=new Fn(Math.max(2,o.x),Math.max(2,o.y),{type:Mn,samples:r?4:0,depthBuffer:!0,stencilBuffer:!1});this.composer=new Ex(t,a),this.composer.addPass(new wx(e,n));const l=Array.isArray(s.post)?s.post:[],c=s.uniforms&&typeof s.uniforms=="object"?s.uniforms:null,h=c?Object.entries(c).map(([p,g])=>[p,Dh(g)]).filter(([,p])=>p).map(([p,g])=>`uniform ${g} ${p};`).join(`
`):"",u=(p,g,_)=>{const m=new RegExp(`[ \\t]*/\\*${g}\\*/[ \\t]*\\n?`);return _?p.replace(m,()=>`${_.trim()}
`):p.replace(m,"")};let d=u(Tx,"MOD_DECL",h);d=u(d,"MOD_POST",l.length?l.map(p=>`{
    // ——— пост-обработка мода «${p.mod}»
${p.code}
  }`).join(`
  `):""),this.fragSource=d,this.grade=new ru({uniforms:{tDiffuse:{value:null},uTime:{value:0},uUnder:{value:0},uDusk:{value:0},uNight:{value:0},uVignette:{value:0},...c?Object.fromEntries(Object.entries(c).map(([p,g])=>[p,{value:g}])):{}},vertexShader:Ax,fragmentShader:this.fragSource}),this.grade.renderToScreen=!0,this.composer.addPass(this.grade),this.ok=!0,this.setSize()}catch(r){console.warn("постобработка недоступна:",r?.message??r),this.ok=!1,this.enabled=!1,this.composer=null}}get active(){return this.ok&&this.enabled}setEnabled(t){if(!this.ok){this.enabled=!1;return}this.enabled=!!t}setSize(){if(!this.ok||!this.composer)return;const t=this.renderer.getDrawingBufferSize(new Xt);this.composer.setSize(Math.max(2,t.x),Math.max(2,t.y))}render(t,e){if(e){const n=this.grade.uniforms;n.uTime.value=(n.uTime.value??0)+(t||0),n.uUnder.value=e.under?1:0,n.uDusk.value=Math.max(0,Math.min(1,e.dusk??0)),n.uNight.value=Math.max(0,Math.min(1,e.night??0)),n.uVignette.value=e.vignette?1:0}try{this.composer.render(t||1/60)}catch(n){console.warn("постобработка выключена из-за сбоя:",n?.message??n),this.ok=!1,this.enabled=!1,this.renderer.setRenderTarget(null)}}dispose(){try{this.grade?.dispose?.(),this.composer?.renderTarget1?.dispose(),this.composer?.renderTarget2?.dispose()}catch{}this.composer=null,this.ok=!1,this.enabled=!1}}const qe={mapSize:2048,radius:64,normalBias:.14,bias:-6e-4,height:150};class Cx{constructor(t){this.light=new Fg(16777215,1),this.light.castShadow=!0,this.light.intensity=1;const e=this.light.shadow;e.mapSize.set(qe.mapSize,qe.mapSize),e.bias=qe.bias,e.normalBias=qe.normalBias,e.camera.left=-64,e.camera.right=qe.radius,e.camera.top=qe.radius,e.camera.bottom=-64,e.camera.near=1,e.camera.far=qe.height*3,e.camera.updateProjectionMatrix(),e.autoUpdate=!1,this.light.target.position.set(0,0,0),t.add(this.light),t.add(this.light.target),this.scene=t,this.enabled=!1,this._texel=qe.radius*2/qe.mapSize,this._last={x:NaN,z:NaN,sun:NaN,t:-1,mesh:-1},this._frame=0,this._interval=2,this.stats={radius:qe.radius,updated:0,interval:0}}setEnabled(t,e=qe.radius){this.enabled=!!t,this.light.castShadow=this.enabled;const n=Math.max(24,Math.min(160,e|0));if(n!==this.stats.radius){this.stats.radius=n;const s=this.light.shadow.camera;s.left=s.bottom=-n,s.right=s.top=n,s.updateProjectionMatrix(),this._texel=n*2/qe.mapSize}this.enabled&&(this.light.shadow.needsUpdate=!0),this.light.shadow.autoUpdate=!1}update(t,e,n,s=0){if(this._frame++,!this.enabled)return this.stats.interval=0,!1;const r=Math.max(0,e.y);if(n<.04||r<.02)return this._last.t=-1,!1;const o=this._focus??(this._focus=new U);o.set(t.x,t.y+qe.height*.12,t.z),o.x=Math.round(o.x/this._texel)*this._texel,o.z=Math.round(o.z/this._texel)*this._texel,o.y=Math.round(o.y/this._texel)*this._texel;const a=qe.height*1.35;this.light.position.set(o.x+e.x*a,o.y+r*a+8,o.z+e.z*a),this.light.target.position.copy(o),this.light.target.updateMatrixWorld(),this.light.position.add(new U(0,0,0)),this.light.updateMatrixWorld(),this.light.shadow.camera.updateProjectionMatrix();const l=Math.abs(t.x-this._last.x)>.6||Math.abs(t.z-this._last.z)>.6,c=Math.abs(r-this._last.sun)>.002,h=s!==this._last.mesh,u=l||c||h;this._interval=l||h?1:n>.6?4:8;const d=this._frame%this._interval===0;let p=!1;return(this._last.t<0||u||d)&&(this.light.shadow.needsUpdate=!0,this._last={x:t.x,z:t.z,sun:r,t:this._frame,mesh:s},this.stats.updated++,p=!0),p}setSoftness(t){this.light.shadow.radius=Math.max(1,Math.min(8,t|0))}dispose(){this.light.shadow.map?.dispose(),this.light.shadow.map=null,this.scene.remove(this.light),this.scene.remove(this.light.target)}}class Lx{constructor(t,e,n={}){const s=n.size??128;this.enabled=!1,this.every=n.every??12,this.renderer=t,this.scene=e,this._frame=0,this._last={x:NaN,y:NaN,z:NaN,mesh:-1},this.ok=!1,this.rt=null,this.camera=null,this.stats={updates:0,size:s,every:this.every};try{this.rt=new dh(s,{type:Mn,generateMipmaps:!1,minFilter:He,magFilter:He}),this.camera=new hh(.6,n.far??190,this.rt),this.ok=!0}catch(r){console.warn("отражения воды недоступны:",r?.message??r),this.enabled=!1}}setEnabled(t){this.enabled=this.ok&&!!t}update(t,e=0,n=[]){if(!this.ok||!this.enabled)return!1;this._frame++;const s=Math.abs(t.x-this._last.x)>1.2||Math.abs(t.z-this._last.z)>1.2||Math.abs(t.y-this._last.y)>1.2,r=e!==this._last.mesh,o=this._frame%Math.max(1,this.every)===0;if(!(s||r||o))return!1;this._last={x:t.x,y:t.y,z:t.z,mesh:e};const a=n.map(l=>l.visible);for(const l of n)l.visible=!1;try{return this.camera.position.set(t.x,t.y,t.z),this.camera.updateMatrixWorld(),this.camera.update(this.renderer,this.scene),this.stats.updates++,!0}catch(l){return console.warn("съёмка отражения не удалась, выключаем:",l?.message??l),this.enabled=!1,!1}finally{n.forEach((l,c)=>{l.visible=a[c]})}}get texture(){return this.rt?.texture??null}dispose(){try{this.rt?.dispose()}catch{}this.rt=null,this.enabled=!1}}const Pa=["grass","dirt","stone","cobblestone","planks","log","glass","torch","glowstone"],Da=1/60;class Px{constructor(t={}){this.canvas=document.getElementById("gl"),this.renderer=t.renderer??Bg(this.canvas),t.renderer||this.applyPixelRatio(),this.scene=new Ag,this.camera=new nn(74,1,.08,1800),this.camera.rotation.order="YXZ",this.scene.add(this.camera),this.atlas=new l_;try{this.atlasAniso=this.atlas.setMaxAnisotropy(this.renderer.capabilities?.getMaxAnisotropy?.()??1)}catch{this.atlasAniso=1}this.materials=Aa(this.atlas,Ra()),this.watchVoxelProgram(),this.sky=new vv(this.scene),this.sunShadow=new Cx(this.scene),this.renderer.shadowMap&&(this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=Hc),this.particles=new Sv(this.scene),this.target=new Rv(this.atlas),this.scene.add(this.target.group),this.viewModel=new Av(this.atlas),this.camera.add(this.viewModel.group),this.settings={...ro,...Yv()},qi.ao=this.settings.ao,qi.smoothLight=this.settings.smoothLight,this.audio=new Vv,this.hud=new nx(this.atlas),this.input={forward:0,back:0,left:0,right:0,jump:0,sneak:0,sprint:0,mine:0,place:0,lookX:0,lookY:0,analog:1},this.keys=new Set,this.state={running:!1,paused:!1,loading:!1,hudHidden:!1,time:.28,seed:Qa,world:null,hotbar:Pa.map(e=>dt.find(n=>n.key===e)?.id??0),sel:0,breakProgress:0,breakTarget:null,lastHit:null,dragging:!1,hp:20,regenT:0,saveT:0,placeCd:0,stepT:0,fps:0,ms:0,acc:0,flyTapT:0,sprintTapT:0},this.blockTint=this.computeTints(),this.inv=new rx,this.state.hotbar=this.inv.hot,this.state.counts=this.inv.hotN,this.state.sel=this.inv.sel,this.attackCd=0,this.state.mobTarget=null,this.mobs=new $_({world:null,scene:this.scene,material:this.materials.solid,atlas:this.atlas,particles:this.particles,audio:this.audio,onPlayerHit:(e,n)=>this.hitByMob(e,n),onDrop:(e,n)=>this.pickup(e,n)}),this.debouncedSave=Zv(()=>this.save(),1500),this.net=null,this.netTransport=null,this.netKind=null,this.netRole="host",this.netAdopt=!1,this.netRtcWait=null,this.netPanelOpen=!1,this._netHudT=0,this.menuMode=this.settings.creative?"creative":"survival",this.avatars=new gx(this.scene),this.applySettings(null,!0),this.bindUI(),this.bindNet(),this.bindInput(),this.resize(),addEventListener("resize",()=>{this.resize(),this.post?.setSize()}),this.hud.show("menu"),this.refreshWorlds(),this.bindModeSeg(),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state.running&&this.pause()}),requestAnimationFrame(e=>this.frame(e))}computeTints(){const t=new Map;for(const e of dt){if(!e.tiles)continue;const n=e.tiles.side??e.tiles.all,s=this.atlas.canvases[n];if(!s)continue;const o=s.getContext("2d").getImageData(0,0,s.width,s.height).data;let a=0,l=0,c=0,h=0;for(let u=0;u<o.length;u+=4)o[u+3]<40||(a+=o[u],l+=o[u+1],c+=o[u+2],h++);h&&t.set(e.id,[a/h/255,l/h/255,c/h/255])}return t}bindUI(){const{el:t}=this.hud;t.seed.value=Kv()??"",document.getElementById("play").onclick=()=>this.startFromMenu(),document.getElementById("rnd-seed").onclick=()=>{t.seed.value=String(Math.random()*1e9|0),this.audio.ui("click")},t.seed.onkeydown=e=>{e.key==="Enter"&&this.startFromMenu()},document.getElementById("open-settings").onclick=()=>this.openSettings("settings"),document.getElementById("pause-settings").onclick=()=>this.openSettings("settings"),document.getElementById("settings-close").onclick=()=>{this.hud.show(this.state.running?"pause":"menu"),this.state.running&&this.resume()},document.getElementById("resume").onclick=()=>this.resume(),document.getElementById("save-now").onclick=()=>{this.save(!0)},document.getElementById("pause-quit").onclick=()=>{this.save(),this.toMenu()},this.hud.onHotbarSelect=(e,n)=>{this.inventoryOpen?(this.invTarget=e,this.hud.markInventorySelection(e)):(this.selectSlot(e),n==="click"&&this.resume())},this.hud.buildHotbar(this.inv.hot,this.inv.sel,this.hud.onHotbarSelect,null),window.__hudHover=()=>this.audio.ui("hover")}openSettings(t){this.hud.settingsForm(this.settings,(e,n)=>this.applySettings(e,n),{onRegenerate:()=>{this.state.world&&(this.state.world.rebuildAll?.(),this.chunkView?.rebuildAll())},mods:{list:()=>Ln().mods,stats:()=>{const e=Ln();return`блоков +${e.blockIds.length}, тайлов +${e.tiles.length}, руд ${e.oreCount}, шейдеров: ${e.shaderNames.join(", ")||"нет"}`},source:()=>pv(),onToggle:(e,n)=>{fv(e,n),this.hud.toast("Запомнил. Мод применится после перезагрузки страницы (F5)","warn")},onSave:e=>{const n=String(e||"");if(n.trim()){const s=Kh(n);if(s.error)return this.hud.toast("Не сохранил: "+s.error,"warn"),!1;const r={id:String(s.def.id||"user").toLowerCase().replace(/[^a-z0-9_-]/g,"")||"user"};return bc(n),this.hud.toast(`Мод «${r.id}» сохранён. Обнови страницу (F5), чтобы он применился`,"ok"),!0}return bc(""),this.hud.toast("Свой мод удалён. Обнови страницу (F5)","ok"),!0},uniforms:()=>Ln().uniforms,onApplyShaders:()=>this.applyModShaders(),onSetUniform:(e,n)=>{if(!/^u[A-Z][A-Za-z0-9_]*$/.test(String(e||"")))return!1;const s=Jh(String(e),Number(n),this.materials);return this.post?.setUniform?.(String(e),Number(n)),s&&this.hud.toast(`${e} = ${n}`,"ok"),s}},onLowSpec:()=>{this.settings={...this.settings,renderScale:.65,ao:!1,clouds:.3,mobs:8},ni(this.settings),this.applySettings(null,!0),this.chunkView?.rebuildAll(),this.hud.toast("Слабое железо: рендер 65%, без AO, мобильно 8. Дальность прорисовки как была",""),this.openSettings(t)},onReset:()=>{this.settings={...ro},ni(this.settings),this.applySettings(null,!0),this.openSettings(t)}}),this.settingsFrom=t,this.hud.show("settings")}applySettings(t,e){if(t==="creative"){this.setCreative(!!e);return}t&&e!==null&&(this.settings[t]=e,ni(this.settings));const n=this.settings;qi.ao=n.ao,qi.smoothLight=n.smoothLight,this.materials?.setQuality?.(n.shaders),this.sky?.setUltra?.(n.shaders>=3),this.post?this.post.setEnabled(n.shaders>=3):n.shaders>=3&&this.initPost(),this.applyLighting(n),this.hud?.setCinematic?.(n.shaders>=2&&!this.post?.active),this.chunkView&&this.chunkView.setRenderDistance(n.renderDistance),this.audio.ready&&this.audio.setVolumes(n.sfx,n.music),this.audio.musicVolume=n.music,this.audio.sfxVolume=n.sfx,this.camera.fov=n.fov,this.camera.updateProjectionMatrix(),this.hud.hideDebug(!n.showDebug),(t==="ao"||t==="smoothLight")&&this.chunkView?.rebuildAll(),(t==="renderScale"||t===null)&&this.applyPixelRatio(),(t==="touch"||t===null)&&this.setupTouch()}openNet(){this.netPanelOpen=!0;const t=this.settings.netUrl||kc(this.settings.netRoom||"world");this.hud.netPrefill({name:this.settings.netName||"",url:t,room:this.settings.netRoom||"world",role:this.netRole,connected:!!this.net,text:this.net?`${this.netKind==="p2p"?"прямое соединение":`комната ${Pc(this.netRoomName??"")}`}: игроков ${this.net.peers.size+1}`:void 0,kind:this.net?"on":""}),this.hud.show("net"),document.exitPointerLock?.()}closeNet(){this.netPanelOpen=!1,this.hud.show(this.state.running?"pause":"menu"),this.state.running&&this.resume()}bindNet(){const t=this.hud.el;document.getElementById("settings-net").onclick=()=>this.openNet(),document.getElementById("menu-net").onclick=()=>this.openNet(),document.getElementById("net-close").onclick=()=>this.closeNet(),document.getElementById("net-connect").onclick=()=>this.netConnectRelay(),document.getElementById("net-stop").onclick=()=>this.netLeave("сеть выключена"),document.getElementById("net-offer").onclick=()=>this.netRtcOffer(),document.getElementById("net-answer").onclick=()=>this.netRtcExchange();for(const e of t.netRole?.children??[])e.onclick=()=>{this.netRole=e.dataset?.v==="guest"?"guest":"host",this.hud.netRole(this.netRole)};t.netChat.onkeydown=e=>{e.stopPropagation?.(),e.key==="Enter"&&this.netSendChat()}}netAttach(t,{kind:e,shareSeed:n,adopt:s}){const r=(this.state.seed??Qa)>>>0;this.netKind=e,this.netAdopt=!!s;const o=new hx({id:`${e}-${Math.random().toString(36).slice(2,9)}`,name:this.hud.netState().name||"игрок",seed:r,blockCount:dt.length,shareSeed:n,send:a=>t.send(a),log:a=>this.hud.netStatus(String(a),"err"),onEdit:a=>this.netApplyEdit(a),onPeerJoin:(a,l)=>this.hud.toast(`${l.name??"игрок"} в сети`,""),onPeerLeave:a=>{this.hud.toast("игрок вышел из сети","warn"),this.avatars.remove(a)},onChat:(a,l)=>this.hud.toast(`${a}: ${l}`,""),onSeed:a=>this.netAdoptSeed(a)});return t.onMessage(a=>o.handle(a)),t.onOpen?.(()=>o.announce({role:this.netRole})),t.onClose?.(()=>{this.net===o&&(this.hud.netStatus("связь потеряна — «Выйти из сети» почистит состояние, потом можно подключиться заново","err"),this.hud.toast("сеть отвалилась","warn"))}),t.onError?.(a=>{this.net===o&&this.hud.netStatus(String(a??"ошибка соединения"),"err")}),this.netTransport=t,this.net=o,o.announce({role:this.netRole}),o}netConnectRelay(){this.net&&this.netLeave();const t=this.hud.netState(),e=Pc(t.room);this.netRoomName=e;let n=t.url||kc(e);if(!/^wss?:\/\//i.test(n)){this.hud.netStatus("адрес должен начинаться с ws:// или wss://","err");return}n=n.replace(/\/+$/,"");const s=`${n}/${e}`;this.settings.netUrl=n,this.settings.netRoom=e,this.settings.netName=t.name,ni(this.settings),this.hud.netStatus(`стучимся на ${s}…`,"");const r=fx(s);this.netAttach(r,{kind:"relay",shareSeed:t.role==="host",adopt:t.role==="guest"}),this.netEnsureWorld(),this._netPoll=setInterval(()=>{if(!this.net||this.netTransport!==r){clearInterval(this._netPoll),this._netPoll=0;return}r.ready&&(clearInterval(this._netPoll),this._netPoll=0,this.hud.netStatus(`в комнате ${e} · ждём игроков (до ${ao})`,"on"))},400),this._netWait=setTimeout(()=>{this._netWait=0,this.net&&this.netTransport===r&&!r.ready&&this.hud.netStatus("реле не отвечает: запущен ли `npm run net`? совпадают ли адрес и комната?","err")},6e3)}async netRtcOffer(){this.net&&this.netLeave();const t=Nc({});this.netAttach(t,{kind:"p2p",shareSeed:!0,adopt:!1}),this.netEnsureWorld(),this.netRtcWait="answer";try{const e=await t.hostStart();this.hud.netCode(e),this.hud.netStatus("код приглашения — в поле ниже: отправь его второму игроку, он вернёт свой код","on")}catch(e){this.hud.netStatus("не удалось создать приглашение: "+(e?.message??e),"err")}}async netRtcExchange(){const t=this.hud.netCodeValue();if(!t.trim()){this.hud.netStatus("вставьте код в поле ниже","err");return}try{if(this.netRtcWait==="answer"){await this.netTransport.guestFinish(t),this.netRtcWait=null,this.hud.netStatus("ответ принят. если второй игрок тоже закончил — вы видите друг друга","on");return}this.net?this.netAdopt=!0:this.netAttach(Nc({}),{kind:"p2p",shareSeed:!1,adopt:!0}),this.netEnsureWorld();const e=await this.netTransport.guestAccept(t);this.netRtcWait="answer",this.hud.netCode(e),this.hud.netStatus("код ответа готов — скопируй его и верни первому игроку, он нажмёт ту же кнопку","on")}catch(e){this.hud.netStatus("код не принял: "+(e?.message??e),"err")}}netEnsureWorld(){this.state.running||this.state.loading||(this.hud.netStatus("готовлю мир для комнаты…",""),Promise.resolve(this.startFromMenu()).catch(t=>this.hud.netStatus("мир не поднялся: "+(t?.message??t),"err")))}netAdoptSeed(t){this.netAdopt&&((this.state.seed??-1)===t&&this.state.running||(this.hud.netStatus(`перестраиваю мир под сида ${t}…`,""),Promise.resolve(this.start(t)).then(()=>this.net&&(this.net.seed=t)).catch(e=>this.hud.netStatus("мир хоста не построился: "+(e?.message??e),"err"))))}netApplyEdit({x:t,y:e,z:n,id:s}){const r=this.state.world;r&&r.setBlock(t,e,n,s,!0)}netSendChat(){const t=this.hud.el.netChat,e=String(t?.value??"");!e.trim()||!this.net||(this.net.broadcastChat(e),t&&(t.value=""),this.hud.toast(`ты: ${e.slice(0,160)}`,""))}netBroadcast(t,e,n,s){this.net&&this.net.broadcastEdit(t,e,n,s)}netFrame(t){const e=this.net;if(!e)return;e.tick(t),this.player&&this.state.world&&!this.state.loading&&e.broadcastPosition({x:this.player.x,y:this.player.y,z:this.player.z,yaw:this.player.yaw,pitch:this.player.pitch},this.inv.sel);const n=e.peerList();this.avatars.update(n,t),this.avatars.setDayLight(this.sky.dayLight??1);const s=this.lastFrame??0;s-this._netHudT>500&&(this._netHudT=s,this.hud.netPeers(n))}netSync(){this.net&&(this.net.seed=(this.state.seed??0)>>>0,this.netKind==="relay"&&this.netRole==="host"&&this.net.announceSeed())}netLeave(t="сеть выключена"){clearInterval(this._netPoll),this._netPoll=0,clearTimeout(this._netWait),this._netWait=0;try{this.net?.leave()}catch{}try{this.netTransport?.close()}catch{}this.net=null,this.netTransport=null,this.netKind=null,this.netAdopt=!1,this.netRtcWait=null,this.avatars.clear(),this.hud.netStatus(t,""),this.hud.netPeers([])}setupTouch(){const t=matchMedia("(pointer: coarse)").matches,e=this.settings.touch||t,n=this.hud.el.touch;n&&(n.classList.toggle("hidden",!e),e&&!this.touchApi&&(this.touchApi=ix(n,{input:this.input,api:{toggleFly:()=>this.toggleFly(),toggleInv:()=>this.toggleInventory(),place:()=>this.tryPlace(),onMineStart:()=>{this.input.mine=1},onMineEnd:()=>{this.input.mine=0},tap:()=>{this.tryPlace()}}})))}refreshWorlds(){const t=qv().map(e=>({seed:e.seed,edits:e.edits?.length??e.edits??0,saved:e.saved}));this.hud.renderWorlds(t,e=>this.start(e),e=>{confirm(`Удалить мир «${e}»? Это сотрёт все изменения.`)&&($v(e),this.refreshWorlds(),this.hud.toast("Мир удалён","warn"))})}startFromMenu(){const t=this.hud.el.seed.value.trim(),e=t===""?Math.random()*1e9|0:ac(t);this.applyMenuMode(),this.start(e)}applyMenuMode(){const t=this.menuMode==="creative";return this.settings.creative!==t&&(this.settings.creative=t,ni(this.settings)),t}bindModeSeg(){const t=document.getElementById("mode");if(!(!t||this._modeBound)){this._modeBound=!0;for(const e of t.children??[])e.onclick=()=>{this.menuMode=e.dataset?.v==="creative"?"creative":"survival",this.syncModeSeg(),this.audio.ui("click")};this.syncModeSeg()}}syncModeSeg(){this.menuMode=this.menuMode==="creative"?"creative":"survival",this.hud.seg(document.getElementById("mode"),this.menuMode);const t=document.getElementById("mode-hint");t&&(t.textContent=this.menuMode==="creative"?"Творчество: полёт (двойной Пробел), все блоки и предметы из палитры, вещи не тратятся.":"Выживание: всё добывается руками и тратится, урон работает, полёт выключен.")}async start(t){const e=(typeof t=="string"||typeof t=="number")&&!Number.isNaN(Number(t))?Number(t)>>>0:ac(String(t));jv(e);const n=new Ca(e);cv()&&(n.modPass=ov);const s=Xv(e);s?.edits&&n.loadEdits(s.edits),this.state.world=n,this.state.seed=e,this.state.time=s?.time??.28,this.player=new zv(n);const r=s?.spawn??n.findSpawn();this.player.spawn(r[0],r[1],r[2]),this.state.worldSpawn=Array.isArray(s?.worldSpawn)?[s.worldSpawn[0],s.worldSpawn[1]]:[r[0],r[2]],s?.yaw!==void 0&&(this.player.yaw=s.yaw,this.player.pitch=s.pitch),s?.hp!==void 0&&(this.state.hp=s.hp),this.mobs.world=n,this.mobs.clear(),this.chunkView?.dispose(),this.chunkView=new Yi(n,this.scene,this.materials,this.atlas),this.chunkView.setRenderDistance(this.settings.renderDistance),this.applyLighting(),this.setupInventory(s?s.creative:void 0,s?.inv??s?.hotbar),this.syncHotbar(),this.hud.setHealth(this.state.hp),this.state.running=!1,this.state.paused=!1,this.state.loading=!0,this.hud.show("loading"),await this.prepare(Math.min(this.settings.renderDistance,5)),this.state.loading=!1;const o=n.findOpenSpot(Math.floor(this.player.x),Math.floor(this.player.z));o?this.player.spawn(o[0],o[1],o[2]):this.settlePlayer(),this.inv.creative||this.hud.toast("Выживание: бей дерево ЛКМ, E — инвентарь и крафт",""),this.state.running=!0,this.state.hp=Math.max(1,this.state.hp),this.audio.resume(),this.audio.setVolumes(this.settings.sfx,this.settings.music),this.hud.show(null),this.hud.toast(`Мир ${e} готов · ${n.chunkCount} чанков`),this.net&&this.netSync(),this.lockPointer()}prepare(t){const e=this.state.world,n=Math.floor(this.player.x/it),s=Math.floor(this.player.z/it),r=[];for(let c=-t;c<=t;c++)for(let h=-t;h<=t;h++)r.push([n+h,s+c,h*h+c*c]);r.sort((c,h)=>c[2]-h[2]);const o=r.length,a=r.slice(),l=r.map(([c,h])=>[c,h]);return new Promise(c=>{const h=()=>{const d=performance.now();for(;a.length&&performance.now()-d<14;){const[p,g]=a.shift();e.ensureChunk(p,g)}this.hud.setLoading(.15+.5*(1-a.length/o),`генерация ландшафта: ${o-a.length}/${o} чанков`),a.length?requestAnimationFrame(h):requestAnimationFrame(u)},u=()=>{const d=performance.now();for(;l.length&&performance.now()-d<14;){const[p,g]=l.shift();for(const _ of[...e.dirtyLight]){const m=e.getChunk(...Ca.decode(_));m&&e.recomputeLight(m)}e.dirtyLight.clear(),this.chunkView.remesh(p,g),e.dirtyMesh.delete(this.chunkView.constructor.key(p,g))}this.hud.setLoading(.65+.35*(1-l.length/o),`построение мешей: ${o-l.length}/${o}`),l.length?requestAnimationFrame(u):c()};h()})}bindInput(){const t=this.canvas;addEventListener("keydown",e=>this.onKey(e,!0)),addEventListener("keyup",e=>this.onKey(e,!1)),addEventListener("blur",()=>{this.keys.clear(),this.input.mine=0}),t.addEventListener("mousedown",e=>{this.state.running&&(e.button===0&&(this.input.mine=1),e.button===2&&(this.input.place=1),e.button===1&&this.pickBlock(),this.state.dragging=!0,this.audio.resume())}),addEventListener("mouseup",e=>{e.button===0&&(this.input.mine=0,this.state.breakProgress=0,this.target.setBreakProgress(0)),e.button===2&&(this.input.place=0),this.state.dragging=!1}),t.addEventListener("contextmenu",e=>e.preventDefault()),addEventListener("wheel",e=>{!this.state.running||this.inventoryOpen||this.selectSlot((this.state.sel+(e.deltaY>0?1:-1)+9)%9)},{passive:!0}),addEventListener("mousemove",e=>{if(!this.state.running||this.state.paused||this.inventoryOpen)return;const n=document.pointerLockElement===t;if(!n&&!this.state.dragging)return;const s=.0022*this.settings.sensitivity*(n?1:1.25);this.input.lookX+=(e.movementX??0)*s,this.input.lookY-=(e.movementY??0)*s}),document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&this.state.running&&!this.state.paused&&!this.inventoryOpen&&this.pause()})}onKey(t,e){const n=t.code,s=t.target;if(!!s&&(s.tagName==="INPUT"||s.tagName==="TEXTAREA"||s.isContentEditable===!0)&&n!=="Escape"){e||this.keys.delete(n);return}if(t.repeat)return;const o=["Tab","F1","F3","Space","KeyE","Slash","Backquote"].includes(n);if(e&&o&&t.preventDefault(),e?this.keys.add(n):this.keys.delete(n),!e)return;const a=this.state;if(n==="Escape"){this.netPanelOpen?this.closeNet():this.inventoryOpen?this.closeInventory():a.running&&!a.paused?this.pause():a.paused&&this.resume();return}if(a.running){if(n==="KeyE"){this.toggleInventory();return}if(n==="F3"){this.settings.showDebug=!this.settings.showDebug,this.hud.hideDebug(!this.settings.showDebug),ni(this.settings);return}if(n==="F1"){a.hudHidden=!a.hudHidden,this.hud.hideHud(a.hudHidden);return}if(n==="KeyF"){this.fullscreen();return}if(n==="KeyM"){const l=this.audio.toggleMusic();this.hud.toast(l?"Музыка: вкл":"Музыка: выкл");return}if(n==="KeyN"){a.time=(a.time+.25)%1,this.hud.toast("Время перемотано");return}if(n==="KeyR"){this.unstick();return}if(n==="KeyQ"){this.inv.creative?this.inv.set("hot",this.inv.sel,Un,0):this.inv.set("hot",this.inv.sel,this.inv.id("hot",this.inv.sel),Math.max(0,this.inv.n("hot",this.inv.sel)-1)),this.syncHotbar();return}if(n.startsWith("Digit")){const l=+n.slice(5);l>=1&&l<=9&&this.selectSlot(l-1);return}if(n==="Space"){const l=performance.now();this.lastSpace&&l-this.lastSpace<280&&this.toggleFly(),this.lastSpace=l}if(n==="KeyW"){const l=performance.now();this.lastW&&l-this.lastW<280&&this.keys.add("ControlLeft"),this.lastW=l}}}readKeys(){const t=this.keys,e=this.input,n=s=>t.has(s)?1:0;e.forward=n("KeyW")||n("ArrowUp")||e.tForward,e.back=n("KeyS")||n("ArrowDown")||e.tBack,e.left=n("KeyA")||n("ArrowLeft")||e.tLeft,e.right=n("KeyD")||n("ArrowRight")||e.tRight,e.jump=n("Space")||e.tJump,e.sneak=n("ShiftLeft")||n("ShiftRight")||e.tSneak,e.sprint=n("ControlLeft")||n("ControlRight")||e.tSprint,e.analog=e.tAnalog??1,e.autoJump=this.settings.autoJump}toggleFly(){if(!this.inv.creative){this.hud.toast("Полёт доступен в творчестве — режим выбирается при создании мира","warn"),this.audio.ui("deny");return}this.player.flying=!this.player.flying,this.player.flying?this.player.vy=0:this.player.fallDamage=0,this.hud.toast(this.player.flying?"Полёт: вкл":"Полёт: выкл"),this.audio.ui("click")}selectSlot(t){const e=((t|0)%9+9)%9;this.inv.sel=e,this.state.sel=e,this.hud.selectSlot(e),this.viewModel.setBlock(this.inv.hot[e]),this.hud.showBlockName(this.inv.hot[e],this.handInfo(this.inv.hot[e])+this.modTag(this.inv.hot[e])),this.state.breakProgress=0,this.target.setBreakProgress(0)}syncHotbar(){this.state.hotbar=this.inv.hot,this.state.counts=this.inv.hotN,this.state.sel=this.inv.sel,this.hud.buildHotbar(this.inv.hot,this.inv.sel,this.hud.onHotbarChange,this.inv.creative?null:this.inv.hotN),this.hud.selectSlot(this.inv.sel),this.viewModel.setBlock(this.inv.hot[this.inv.sel]),this.inventoryOpen&&this.refreshInventoryUI()}setCreative(t){if(this.inv.creative=!!t,this.state.creative=!!t,!t&&this.player&&(this.player.flying=!1,this.player.fallDamage=0),this.menuMode=t?"creative":"survival",this.syncModeSeg(),this.hud.setFlyAvailable(this.inv.creative),this.hud.setHealthVisible(!t),this.settings.creative=!!t,ni(this.settings),t){for(let e=0;e<9;e++)this.inv.hotN[e]=0;this.inv.hot.some(e=>e)||Pa.forEach((e,n)=>{this.inv.hot[n]=Pt(e)})}this.syncHotbar()}setupInventory(t,e){const n=typeof t=="boolean"?t:!!this.settings.creative;this.inv.creative=n,this.inv.hot.fill(0),this.inv.hotN.fill(0),this.inv.main.fill(0),this.inv.mainN.fill(0),e&&Array.isArray(e.hot)?this.inv.load(typeof e.hot=="object"&&!Array.isArray(e.hot)?e:{hot:e,hotN:[],main:[],mainN:[],creative:n}):n&&Pa.forEach((s,r)=>{this.inv.hot[r]=Pt(s)}),this.inv.sel=Math.max(0,Math.min(8,this.inv.sel)),this.state.creative=n,this.hud.setFlyAvailable(n),this.hud.setHealthVisible(!n)}pickup(t,e=1){if(!t)return;if(this.inv.add(t,e)>0){this.hud.toast("Инвентарь полон","warn");return}this.syncHotbar(),this.scheduleSave()}nearCraftingTable(){const t=this.state.world;if(!t)return!1;const e=this.player,n=Pt("crafting_table"),s=Math.floor(e.x)-4,r=Math.floor(e.x)+4,o=Math.floor(e.y)-2,a=Math.floor(e.y)+3,l=Math.floor(e.z)-4,c=Math.floor(e.z)+4;for(let h=o;h<=a;h++)for(let u=l;u<=c;u++)for(let d=s;d<=r;d++)if(t.getBlock(d,h,u)===n)return!0;return!1}refreshInventoryUI(){const t=this.nearCraftingTable(),e=this.inv.snapshot(),n=Ts.map(s=>({name:s.name,outId:s.outId,n:s.n,table:s.table,ok:cc(s,this.inv,t),need:s.need.map(r=>({id:r.id,n:r.n,have:Math.min(this.inv.count(r.id),999)}))}));this.hud.renderInventory({snap:e,recipes:n,nearTable:t,creative:this.inv.creative,icon:(s,r)=>this.atlas.icon(s,r),names:s=>dt[s]?.name??"—",onSlot:(s,r)=>this.inventorySlotClick(s,r),onPick:s=>this.inventoryPick(s),onCraft:s=>this.doCraft(s),onClose:()=>this.closeInventory(),onCreative:()=>{this.setCreative(!this.inv.creative),this.hud.toast(this.inv.creative?"Творчество: все блоки в палитре, вещи не тратятся":"Творчество выключено: блоки снова расходятся, включить — в Настройках","")}})}inventorySlotClick(t,e){const n=this.inv;if(n.cursor){const s=n.id(t,e);if(s===n.cursor){const r=n.creative?Es:Es-n.n(t,e),o=Math.min(r,n.cursorN);n.set(t,e,s,n.creative?0:n.n(t,e)+o),n.creative||(n.cursorN-=o),(n.cursorN<=0||n.creative)&&(n.cursor=0,n.cursorN=0)}else{const r=s,o=n.n(t,e);n.set(t,e,n.cursor,n.creative?0:n.cursorN),n.cursor=r,n.cursorN=n.creative?1:o,n.creative&&(n.cursor=0,n.cursorN=0)}}else{const s=n.id(t,e);if(!s)return;if(n.creative){this.inventoryPick(s);return}n.cursor=s,n.cursorN=n.n(t,e),n.set(t,e,0,0)}this.syncHotbar(),this.audio.ui("click")}inventoryPick(t){const e=this.invTarget??this.inv.sel;this.inv.set("hot",e,t,this.inv.creative?0:Es),this.invTarget=e,this.syncHotbar(),this.hud.showBlockName(t),this.audio.ui("click"),this.scheduleSave()}doCraft(t){const e=Ts[t];if(!e)return;const n=this.nearCraftingTable();if(!cc(e,this.inv,n)){this.audio.deny(),this.hud.toast(e.table&&!n?"Нужен верстак рядом (поставь и подойди)":"Не хватает материалов","warn");return}y_(e,this.inv)&&(this.audio.place("wood"),this.hud.toast(`Скрафчено: ${dt[e.outId].name}`,""),this.syncHotbar(),this.scheduleSave())}toggleInventory(){if(this.inventoryOpen){this.closeInventory();return}this.inventoryOpen=!0,this.invTarget=this.inv.sel,this.hud.show("inventory"),this.hud.el.hud.dataset.keep="1",this.hud.el.hud.classList.remove("hidden"),this.keys.clear(),this.input.mine=0,this.input.place=0,document.exitPointerLock?.(),this.audio.openInv(),this.refreshInventoryUI()}closeInventory(){if(!this.inventoryOpen)return;this.inventoryOpen=!1;const t=this.inv;t.cursor&&(t.creative||t.add(t.cursor,t.cursorN),t.cursor=0,t.cursorN=0),this.invTarget=null,this.hud.el.hud.dataset.keep="0",this.hud.show(null),this.syncHotbar(),this.lockPointer(),this.audio.ui("click")}pause(){this.input.mine=0,this.input.place=0,this.keys.clear(),!(!this.state.running||this.state.paused)&&(this.state.paused=!0,document.exitPointerLock?.(),this.hud.el.pauseStats.textContent=this.statsLine(),this.hud.show("pause"),this.save())}resume(){this.state.paused=!1,this.inventoryOpen=!1,this.netPanelOpen=!1,this.hud.show(null),this.lockPointer(),this.audio.resume()}toMenu(){if(this.input.mine=0,this.input.place=0,this.keys.clear(),this.menuMode=this.inv?.creative?"creative":"survival",this.syncModeSeg(),this.netPanelOpen=!1,this.net&&this.netLeave("вы вышли из мира — комната покинута"),this.mobs.clear(),this.state.running=!1,this.state.paused=!1,this.inventoryOpen=!1,document.exitPointerLock?.(),this.chunkView)for(const[t,e]of this.chunkView.objects)this.chunkView.disposeObject(e),this.chunkView.objects.delete(t);if(this.state.world){for(const t of[...this.state.world.chunks.keys()]){const[e,n]=Ca.decode(t);this.state.world.removeChunk(e,n)}this.state.world.chunks.clear()}this.refreshWorlds(),this.hud.show("menu")}lockPointer(){if(!this.settings.touch&&!(matchMedia("(hover: none)").matches&&!this.settings.touch)&&document.pointerLockElement!==this.canvas)try{const t=this.canvas.requestPointerLock?.();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}settlePlayer(){const t=this.player;if(!t||!this.state.world||!t.collides(t.x,t.y,t.z))return!1;const e=Math.floor(t.x),n=Math.floor(t.z);for(let r=Math.floor(t.y);r<Jt;r++)if(!t.collides(e+.5,r+.02,n+.5))return t.x=e+.5,t.y=r+.02,t.z=n+.5,t.vy=0,this.hud.toast("Подняты над блоками","warn"),!0;const s=this.state.world.findSpawn();return t.spawn(s[0],s[1],s[2]),!0}unstick(){const t=this.state.world,e=Math.floor(this.player.x),n=Math.floor(this.player.z);for(let r=Jt-2;r>0;r--)if(t.isOpaque(e,r,n)){this.player.x=e+.5,this.player.z=n+.5,this.player.y=r+1.05,this.player.vy=0,this.hud.toast("Вы вынесены на поверхность");return}const s=t.findSpawn();this.player.spawn(s[0],s[1],s[2]),this.hud.toast("Спавн сброшен")}pickBlock(){const t=this.state.lastHit;if(!t)return;const e=t.id;this.inv.set("hot",this.inv.sel,e,this.inv.creative?0:Math.max(1,this.inv.n("hot",this.inv.sel))),this.hud.buildHotbar(this.state.hotbar,this.state.sel,this.hud.onHotbarChange),this.hud.selectSlot(this.state.sel),this.viewModel.setBlock(e),this.hud.showBlockName(e,this.modTag(e)),this.audio.ui("click")}dropFor(t){return i_(t.id,t.x,t.y,t.z)||n_(t.id)}eat(t){const e=this.state;if(this.inv.creative)return this.hud.toast("В творчестве есть не нужно — здоровье и так полное",""),!1;if(e.hp>=20)return this.hud.toast("Ты сыт: здоровье полное",""),!1;e.placeCd=.9;const n=this.inv.hot[this.inv.sel];return this.inv.set("hot",this.inv.sel,n,Math.max(0,this.inv.n("hot",this.inv.sel)-1)),this.syncHotbar(),e.hp=Math.min(20,e.hp+(t.food|0)),this.hud.setHealth(e.hp),this.audio.step("grass"),this.hud.toast(`Съедено ${t.name.toLowerCase()} · +${(t.food/2).toFixed(t.food%2?"1":"0")} сердца`,""),this.scheduleSave(),!0}handInfo(t){const e=dt[t];if(!e?.info)return"";if(e.info==="time"){const c=((this.state.time??.25)+.25)%1,h=Math.floor(c*24*60),u=String(Math.floor(h/60)).padStart(2,"0"),d=String(h%60).padStart(2,"0");return` · ${u}:${d} по миру`}const n=this.state.worldSpawn;if(!n)return"";const s=n[0]-this.player.x,r=n[1]-this.player.z,o=Math.hypot(s,r);if(o<1.5)return" · ты на спавне";const a=(Math.atan2(s,-r)*180/Math.PI+360)%360,l=["С","СВ","В","ЮВ","Ю","ЮЗ","З","СЗ"][Math.round(a/45)%8];return` · спавн ${o.toFixed(0)} бл, ${l} (${a.toFixed(0)}°)`}tryPlace(){const t=this.state.lastHit,e=this.state,n=dt[this.inv.hot[this.inv.sel]];if(n?.food){this.eat(n);return}if(!t)return;const s=this.inv.hot[this.inv.sel];if(!s){this.audio.deny(),this.hud.toast("Пустой слот — E открывает инвентарь","warn");return}if(e_(s)){this.audio.deny(),this.hud.toast(`${dt[s].name} — предмет, его не поставить`,"warn");return}if(!this.inv.creative&&this.inv.hotN[this.inv.sel]<=0){this.audio.deny(),this.hud.toast("Блоки кончились","warn");return}const r=e.world;let o=t.x+t.nx,a=t.y+t.ny,l=t.z+t.nz;const c=r.getBlock(t.x,t.y,t.z);if((dt[c]?.replaceable||dt[c]?.liquid)&&(o=t.x,a=t.y,l=t.z),a<0||a>=Jt)return;const u=r.getBlock(o,a,l);if(u!==0&&!dt[u].replaceable&&!dt[u].liquid)return;if(dt[s].solid&&this.player.intersectsBlock(o,a,l)){this.audio.deny(),this.hud.toast("Здесь стоит игрок","warn");return}if(!r.setBlock(o,a,l,s))return;this.netBroadcast(o,a,l,s),this.inv.creative||(this.inv.consumeSelected(1),this.syncHotbar()),this.audio.place(dt[s].sound),this.viewModel.triggerSwing();const d=this.blockTint.get(s)??[.8,.8,.8];this.particles.burst(o+.5,a+.2,l+.5,4,d,{speed:1.2,life:.35,spread:.5}),this.scheduleSave()}mineTick(t){const e=this.state,n=e.world,s=e.lastHit;if(e.mobTarget){e.breakProgress>0&&(e.breakProgress=0,this.target.setBreakProgress(0));return}if(!this.input.mine||!s){e.breakProgress>0&&(e.breakProgress=0,this.target.setBreakProgress(0)),this.hud.setMining(!1);return}const r=$a(s.x,s.y,s.z);e.breakTarget!==r&&(e.breakTarget=r,e.breakProgress=0);const o=dt[s.id];if(!o.breakable){e.breakTarget!==r&&(e.breakTarget=r,this.audio.deny(),this.hud.toast(`${o.name}: можно только обставить со всех сторон`,"warn")),e.breakProgress=0,this.target.setBreakProgress(0);return}const a=this.inv.hot[this.inv.sel],l=Math.max(.08,o.hardness/Math.max(.34,s_(o,a))),c=this.player.flying?2.6:1;if(e.breakProgress+=t/l*c,this.hud.setMining(!0),performance.now()-(this.lastHitSound??0)>210){this.lastHitSound=performance.now(),this.audio.hit(o.sound,.8);const h=this.blockTint.get(s.id)??[.7,.7,.7];this.particles.burst(s.x+.5+s.nx*.5,s.y+.5+s.ny*.5,s.z+.5+s.nz*.5,3,h,{speed:1.6,life:.3,spread:.35,gravity:16})}if(this.target.setBreakProgress(Math.min(.999,e.breakProgress)),e.breakProgress>=1){if(e.breakProgress=0,e.breakTarget=null,this.target.setBreakProgress(0),this.hud.setMining(!1),n.setBlock(s.x,s.y,s.z,Un),this.netBroadcast(s.x,s.y,s.z,Un),!this.inv.creative){const u=this.dropFor(s);u&&this.pickup(u,1)}this.audio.breakBlock(o.sound);const h=this.blockTint.get(s.id)??[.7,.7,.7];this.particles.burst(s.x+.5,s.y+.5,s.z+.5,14,h,{speed:3.4,life:.8,spread:.8}),this.viewModel.triggerSwing(),this.scheduleSave()}}scheduleSave(){this.state.saveT=2.5}save(t=!1){if(!this.state.world)return;const e=this.state.world,n={seed:this.state.seed,saved:Date.now(),spawn:[this.player.x,this.player.y,this.player.z],worldSpawn:this.state.worldSpawn??null,yaw:this.player.yaw,pitch:this.player.pitch,time:this.state.time,hotbar:this.inv.hot.slice(),inv:this.inv.serialize(),creative:this.inv.creative,hp:this.state.hp,edits:e.serializeEdits()};Wv(this.state.seed,n)&&this.hud.toast(`Сохранено · правок: ${e.editedCount}`,"")}statsLine(){const t=this.state.world;return t?`чанков в памяти: ${t.chunkCount} · правок: ${t.editedCount} · меши: ${this.chunkView?.chunkMeshCount??0}`:""}applyPixelRatio(){const t=Math.max(.5,Math.min(1,this.settings?.renderScale??1));this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,2)*t)}applyLighting(t=this.settings){const e=(t.shaders|0)>=3,n=(t.shaders|0)>=2&&(t.shadows|0)>0,s=(t.shadows|0)>=2?96:64;this.renderer.shadowMap&&(this.renderer.shadowMap.enabled=n),this.sunShadow?.setEnabled(n,s),this.materials.setShadow(n?e?.92:.8:0),this.sunShadow?.setSoftness(e?2:1),this.chunkView?.setShadows(n,n?this.shadowDepthMaterial():null),this._shadowBase=n?e?.92:.8:0,this.materials.uniforms.uShadow.value=0;const r=e&&(t.waterRefl|0)>=2;if(r&&!this.probe){try{this.probe=new Lx(this.renderer,this.scene,{size:128,far:200,every:12})}catch{this.probe=null}this.probe&&!this.probe.ok&&(this.probe=null)}return this.probe?(this.probe.setEnabled(r),this.materials.setReflection(r?this.probe.texture:null,r?.85:0)):this.materials.setReflection(null,0),this._reflOn=r&&!!this.probe,{shadowOn:n,ultra:e,refl:!!r}}shadowDepthMaterial(){return this._depthMat||(this._depthMat=new yh({depthPacking:Jc,map:this.atlas.texture,alphaTest:.5,side:kn})),this._depthMat}initPost(){if(this.post){this.post.setEnabled(this.settings.shaders>=3);return}try{const t=new Rx(this.renderer,this.scene,this.camera,Ra());if(!t.ok){this.post=null,this.hud.toast("Постобработка недоступна на этом железе — играем без теней и отражений","warn");return}t.setEnabled(this.settings.shaders>=3),t.setSize(),this.post=t}catch{this.post=null}}applyModShaders(){const t=Ln();if(t.blockIds.length||t.tiles.length)return this.hud.toast("Мод меняет блоки или текстуры — нужна перезагрузка страницы (F5)","warn"),!1;const e=Aa(this.atlas,Ra());this.materials.solid.dispose(),this.materials.water.dispose(),this.materials=e;const n=this.chunkView?.setMaterials?.(e)??0;return this.watchVoxelProgram(),this.post&&(this.post.dispose?.(),this.post=null),this.initPost(),this.hud.toast(`Шейдеры модов применены: ${n} мешей, ${t.shaderNames.length?t.shaderNames.join(", "):"без мода"}`,"ok"),!0}watchVoxelProgram(){if(this._progHook)return;this._progHook=!0;const t=console.error;console.error=(...e)=>{if(t.apply(console,e),this._progFixed)return;const n=e.map(s=>String(s?.message??s??"")).join(" ");/THREE\.WebGLProgram|Shader Error|Program Info Log/i.test(n)&&(this._progFixed=!0,this.revertModShaders())}}revertModShaders(){if(this._reverted||!this.atlas)return!1;this._reverted=!0;const t=Ln().shaderNames||[];let e;try{e=Aa(this.atlas,{}),this.materials.solid.dispose(),this.materials.water.dispose()}catch{return!1}this.materials=e,e.setQuality?.(this.settings.shaders|0),this.chunkView?.setMaterials?.(e),this.applyLighting();const n=`Шейдеры модов${t.length?` «${t.join("», «")}»`:""} не скомпилировались — включены базовые. Починь код в Настройки → Моды`;return this.hud?.toast(n,"warn"),console.warn("LiteCraft:",n),!0}registerMod(t,e=String(t?.id||"console")){const n=no(Dr(e),t,"консоль");return this.hud.toast(n.ok?`Мод «${n.name}» применён${n.applied?.blocks?.length?" — для блоков нужна перезагрузка":""}`:`Мод не принят: ${n.error}`,n.ok?"ok":"warn"),n.ok&&!n.applied?.blocks?.length&&!n.applied?.tiles?.length&&this.applyModShaders(),n}modTag(t){const e=dt[t]?.key,n=e?dv(e):null;return n?` · мод ${n}`:""}resize(){const t=innerWidth,e=innerHeight;this.renderer.setSize(t,e,!1),this.applyPixelRatio(),this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix(),this.post?.setSize()}frame(t){requestAnimationFrame(a=>this.frame(a));const e=this.settings.fpsLimit|0;if(e>0){if(this._nextDraw===void 0&&(this._nextDraw=0),t<this._nextDraw)return;this._nextDraw=t+1e3/Math.max(1,e)-1.2}else this._nextDraw=0;const n=(t-(this.lastFrame??t))/1e3,s=Number.isFinite(n)?Math.max(0,Math.min(.1,n)):1/60;this.lastFrame=t,this.state.fps=this.state.fps*.9+1/Math.max(5e-4,s)*.1;const r=performance.now(),o=this.inventoryOpen||this.netPanelOpen;this.state.running&&!this.state.paused&&!o&&!this.state.loading?this.step(s):this.state.world&&this.sky.update(this.state.time,this.settings.clouds,this.camera.position,this.materials.uniforms),this.net&&this.netFrame(s),this.probe?.enabled&&this.camera?this.probe.update(this.camera.position,this.chunkView?.chunkMeshCount??0,this.chunkView?.waterMeshes??[]):this.probe&&this._reflOn&&(this._reflOn=!1,this.materials.setReflection(null,0)),this.post?.active?this.post.render(s,{under:!!this.player?.headInWater,dusk:this.sky?.dusk??0,night:1-(this.sky?.day??1),vignette:this.settings.shaders>=2&&!this.inventoryOpen}):this.renderer.render(this.scene,this.camera),this.state.ms=this.state.ms*.9+(performance.now()-r)*.1}step(t){const e=this.state,n=e.world,s=this.input;this.readKeys(),this.player.yaw-=s.lookX,this.player.pitch=Math.max(-1.5533,Math.min(1.5533,this.player.pitch+s.lookY)),s.lookX=0,s.lookY=0,e.acc=Math.min(e.acc+t,.2);let r=0,o={stepped:!1,splash:!1};for(;e.acc>=Da&&r<5;){e.acc-=Da,r++;const v=this.player.update(Da,s);o.stepped=o.stepped||v.stepped,o.splash=o.splash||v.splash}if(o.stepped&&!this.player.flying){const v=n.getBlock(Math.floor(this.player.x),Math.floor(this.player.y-.2),Math.floor(this.player.z));this.audio.step(dt[v]?.sound??"dirt")}if(o.splash&&this.audio.splash(),this.player.fallDamage>.05){const v=Math.floor(this.player.fallDamage);this.player.fallDamage=0,v>0&&!this.player.flying&&(e.hp=Math.max(0,e.hp-v),this.hud.setHealth(e.hp),this.hud.hurt(),this.audio.land(1.6),e.hp<=0&&this.respawn())}this.player.justLanded&&(this.audio.land(this.player.justLanded),this.player.justLanded=0),e.regenT+=t,e.regenT>6&&e.hp<20&&(e.regenT=0,e.hp=Math.min(20,e.hp+1),this.hud.setHealth(e.hp));const a=this.camera,l=this.settings.viewBob?1:0,c=Math.sin(this.player.bob)*.045*l*Math.min(1,Math.hypot(this.player.vx,this.player.vz)/4);a.position.set(this.player.x,this.player.eyeY+c,this.player.z),a.rotation.set(this.player.pitch,this.player.yaw,Math.sin(this.player.bob*.5)*.006*l);const h=this.settings.fov+(this.player.sprinting?5:0)+(this.player.inWater?-6:0)+(this.player.flying?3:0);a.fov+=(h-a.fov)*Math.min(1,t*8),a.updateProjectionMatrix();const u=this.player.forward({}),d={x:a.position.x,y:a.position.y,z:a.position.z};e.lastHit=Hv(n,d.x,d.y,d.z,u.x,u.y,u.z,6.2),this.target.show(e.lastHit&&this.chunkView.hasMesh(e.lastHit.x>>4,e.lastHit.z>>4)?e.lastHit:null),e.lastHit||this.target.setBreakProgress(0),this.attackTick(t),this.mineTick(t),e.placeCd-=t,s.place&&e.placeCd<=0&&(this.tryPlace(),e.placeCd=.2),this.chunkView.update(this.player),this.particles.update(t),this.viewModel.update(t,{moving:Math.min(1,Math.hypot(this.player.vx,this.player.vz)/5),breaking:this.input.mine&&e.lastHit?1:0,breakProgress:e.breakProgress,fov:a.fov,aspect:a.aspect}),this.settings.freeTime||(e.time=(e.time+t/(this.settings.dayLength*60))%1);const p=this.sky.update(e.time,this.settings.clouds,a.position,this.materials.uniforms);this.viewModel.dayLight=p.day,this.target.setDayLight(p.day);const g=this.mobs;g.day=p.day,g.cap=this.settings.mobs|0,g.enabled=g.cap>0&&!e.paused,g.enabled?g.update(t,this.player):g.count&&g.clear();const _=this.materials.uniforms;_.uTime.value+=t,this.sunShadow?.enabled?(this.sunShadow.update(a.position,this.sky.uniforms.uSunDir.value,p.day,this.chunkView?.chunkMeshCount??0)&&(this._shadowFrames=(this._shadowFrames??0)+1),_.uShadow.value=(this._shadowBase??.9)*Math.max(0,Math.min(1,p.day*1.5-.05))):_.uShadow.value!==0&&(_.uShadow.value=0),_.uDay.value=p.day,_.uDusk.value=p.dusk??0,_.uNight.value=1-p.day;const m=this.settings.renderDistance*it,f=this.player.headInWater;if(f?(_.uFogDensity.value=.16,_.uFogStart.value=.5,_.uFogEnd.value=15):(_.uFogDensity.value=7e-4,_.uFogStart.value=m*.55,_.uFogEnd.value=m*1.02),f&&_.uFogColor.value.setRGB(.09*(.35+p.day),.26*(.35+p.day),.42*(.35+p.day)),this.renderer.setClearColor(p.fogColor,1),this.hud.setWater(!!f&&!this.post?.active),this.camera.near=f?.05:.08,this.camera.updateProjectionMatrix(),this.villageT=(this.villageT??1)-t,this.villageT<=0){this.villageT=1.2;const v=this.player,b=!!v&&Vh(this.state.world,v.x,v.z);b!==this.inVillage&&(this.inVillage=b,b&&this.hud.toast("Деревня: здесь светло, враги не спавнятся. Жители носят изумруды",""))}const x=this.chunkView?.streamDebug?.();x&&(x.genErr||x.meshErr)&&this._streamWarned!==x.msg&&(this._streamWarned=x.msg||"сбой",console.error("стриминг мира:",x),this.hud.toast(`Мир не достраивается: ген ${x.genErr}, меш ${x.meshErr}${x.msg?` · ${x.msg}`:""} — попробуй перезагрузку (Ctrl+Shift+R)`,"warn")),e.saveT>0&&(e.saveT-=t,e.saveT<=0&&this.debouncedSave()),this.dbgT=(this.dbgT??0)-t,this.dbgT<=0&&(this.dbgT=.25,this.updateDebug(p)),e.hp<=0&&this.respawn()}attackTick(t){this.attackCd-=t;const e=this.state,n=this.camera,s=this.player.forward({}),r=this.mobs.pick(n.position.x,n.position.y,n.position.z,s.x,s.y,s.z,4.4);if(e.mobTarget=r,r&&this.target.show(null),!r||!this.input.mine||this.attackCd>0||e.paused||this.inventoryOpen)return;this.attackCd=.42;const o=r_(this.inv.hot[this.inv.sel]);this.mobs.hurt(r,o,this.player.x,this.player.z,r.def.hostile?4.2:6.4),this.viewModel.triggerSwing()}hitByMob(t,e){const n=this.state;if(this.inv.creative||n.hp<=0||!n.running||n.paused)return;n.hp=Math.max(0,n.hp-t),this.hud.setHealth(n.hp),this.hud.hurt(),this.audio.land(1.3);const s=this.player.x-e.x,r=this.player.z-e.z,o=Math.hypot(s,r)||1;this.player.vx+=s/o*4.4,this.player.vz+=r/o*4.4,this.player.vy=Math.max(this.player.vy,4.6),n.hp<=0&&this.respawn()}respawn(){const t=this.state.world.findSpawn();this.player.spawn(t[0],t[1]+.2,t[2]),this.state.hp=20,this.hud.setHealth(20),this.hud.toast("Вы разбились. Воскрешение на спавне…","err")}updateDebug(t){if(!this.settings.showDebug)return;const e=this.player,n=this.state.world,s=Math.floor(e.x/it),r=Math.floor(e.z/it),o=C_[n.terrain.biomeAt(Math.floor(e.x),Math.floor(e.z))];`${String(Math.floor((e.yaw*180/Math.PI%360+360)%360/360*24)).padStart(2,"0")}`;const a=Math.floor((this.state.time*24+6)%24),l=Math.floor((this.state.time*24+6)%24%1*60),c=this.chunkView;this.hud.setDebug([`LiteCraft · ${this.state.fps.toFixed(0)} FPS${this.settings.fpsLimit>0?` (лимит ${this.settings.fpsLimit})`:" (лимит выключен)"} · ${this.state.ms.toFixed(1)} мс · шейдеры: ${["базовые","мягкие","красивые","ультра"][Math.max(0,Math.min(3,this.settings.shaders|0))]}${this.post?.active?" · грейд":""}${lv()?` · шейдеров мода: ${(Ln().shaderNames||[]).length}`:""}${this._reverted?" · шейдеры мода выключены: не собрались":""}`,`XYZ ${e.x.toFixed(2)} / ${e.y.toFixed(2)} / ${e.z.toFixed(2)}  чанк ${s},${r}  блок ${Math.floor(e.x)},${Math.floor(e.y)},${Math.floor(e.z)}`,`биом: ${o}  ·  время ${String(a).padStart(2,"0")}:${String(l).padStart(2,"0")}  ·  свет ${t.day*15|0}/15`,`чанков: ${n.chunkCount} (мешей ${c?.chunkMeshCount??0}, в очереди ${c?.stats.pending??0}) · правок: ${n.editedCount} · стриминг ${c?.stats.ms?.toFixed(1)??0} мс/кадр (${c?.stats.frameMs?.toFixed(1)??"—"} мс кадр)${(()=>{const h=c?.streamDebug?.();return h&&(h.genErr||h.meshErr||h.light>64)?` · сбой: ген ${h.genErr}, меш ${h.meshErr}, свет ${h.light}`:""})()}${this.inVillage?" · деревня":""}`,`сеть: ${this.net?`${this.netKind==="p2p"?"напрямую":"через реле"}, игроков ${this.net.peers.size+1}/${ao}, правок ${this.net.edits}`:"одиночная игра"} · режим: ${e.flying?"полёт":e.sprinting?"бег":"ходок"} · HP ${this.state.hp/2} · ${this.inv.creative?"творчество":"выживание"} · сид ${this.state.seed}`,`${(()=>{const h=this.handInfo(this.inv.hot[this.inv.sel]);return h?`в руке: ${dt[this.inv.hot[this.inv.sel]]?.name}${h}`:""})()}`,`мобов вокруг: ${this.mobs.count} (видно ${this.mobs.nearCount(e,48)}) · убито: ${this.mobs.kills} · в руке: ${dt[this.inv.hot[this.inv.sel]]?.name??"—"} ×${this.inv.creative?"∞":this.inv.hotN[this.inv.sel]}`,`${e.headInWater?"под водой":e.inWater?"в воде":"на суше"}${e.onGround?" · на земле":""} · E — инвентарь, F3 — вкл/выкл панели`].join(`
`))}}function Dx(i={}){try{Z_()}catch(e){console.warn("Моды не загрузились:",e)}const t=new Px(i);return window.game=t,t.mods={snapshot:()=>Ln(),blockIds:()=>uv(),setUniform:(e,n)=>{const s=Jh(String(e),Number(n),t.materials);return t.post?.setUniform?.(String(e),Number(n)),s},applyShaders:()=>t.applyModShaders(),register:e=>t.registerMod(e)},window.addEventListener("beforeunload",()=>{t.state?.world&&t.state.running&&t.save()}),t}if(typeof window<"u"&&!window.__LITECRAFT_TEST__&&document.getElementById("gl"))try{Dx()}catch(i){throw Ix(i),i}function Ix(i){const t=document.createElement("pre");t.style.cssText="position:fixed;inset:auto 12px 12px 12px;max-height:45vh;overflow:auto;background:#2b0e0e;color:#ffd9d3;padding:14px;font:12px/1.5 ui-monospace,monospace;border:1px solid #612;border-radius:4px;z-index:9999;white-space:pre-wrap",t.textContent=`Ошибка запуска LiteCraft:

`+(i?.stack??String(i)),document.body.appendChild(t)}
