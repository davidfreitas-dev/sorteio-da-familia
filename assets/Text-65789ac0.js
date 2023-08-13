import{o as ju,a as $u,t as qu,z as zu}from"./index-3307f7cf.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ku=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},po={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;u||(m=64,o||(d=64)),r.push(n[l],n[h],n[d],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(mo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ku(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new Hu;const d=s<<2|a>>4;if(r.push(d),c!==64){const m=a<<4&240|c>>2;if(r.push(m),h!==64){const v=c<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Hu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gu=function(e){const t=mo(e);return po.encodeByteArray(t,!0)},wn=function(e){return Gu(e).replace(/\./g,"")},Wu=function(e){try{return po.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=()=>Qu().__FIREBASE_DEFAULTS__,Ju=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Yu=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Wu(e[1]);return t&&JSON.parse(t)},go=()=>{try{return Xu()||Ju()||Yu()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Zu=e=>{var t,n;return(n=(t=go())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},tc=e=>{const t=Zu(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},_o=()=>{var e;return(e=go())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[wn(JSON.stringify(n)),wn(JSON.stringify(o)),a].join(".")}function rc(){try{return typeof indexedDB=="object"}catch{return!1}}function ic(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="FirebaseError";class me extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=sc,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yo.prototype.create)}}class yo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?oc(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new me(i,a,r)}}function oc(e,t){return e.replace(ac,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const ac=/\{\$([^}]+)}/g;function Nr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(cs(s)&&cs(o)){if(!Nr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cs(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e){return e&&e._delegate?e._delegate:e}class ke{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new ec;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(lc(t))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Ft){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ft){return this.instances.has(t)}getOptions(t=Ft){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cc(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ft){return this.component?this.component.multipleInstances?t:Ft:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cc(e){return e===Ft?void 0:e}function lc(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new uc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(D||(D={}));const dc={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},fc=D.INFO,mc={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},pc=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=mc[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Eo{constructor(t){this.name=t,this._logLevel=fc,this._logHandler=pc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in D))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...t),this._logHandler(this,D.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...t),this._logHandler(this,D.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,D.INFO,...t),this._logHandler(this,D.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,D.WARN,...t),this._logHandler(this,D.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...t),this._logHandler(this,D.ERROR,...t)}}const gc=(e,t)=>t.some(n=>e instanceof n);let ls,hs;function _c(){return ls||(ls=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yc(){return hs||(hs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const To=new WeakMap,Mr=new WeakMap,vo=new WeakMap,_r=new WeakMap,li=new WeakMap;function Ec(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Ct(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&To.set(n,e)}).catch(()=>{}),li.set(t,e),t}function Tc(e){if(Mr.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Mr.set(e,t)}let xr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Mr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||vo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function vc(e){xr=e(xr)}function Ic(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(yr(this),t,...n);return vo.set(r,t.sort?t.sort():[t]),Ct(r)}:yc().includes(e)?function(...t){return e.apply(yr(this),t),Ct(To.get(this))}:function(...t){return Ct(e.apply(yr(this),t))}}function Ac(e){return typeof e=="function"?Ic(e):(e instanceof IDBTransaction&&Tc(e),gc(e,_c())?new Proxy(e,xr):e)}function Ct(e){if(e instanceof IDBRequest)return Ec(e);if(_r.has(e))return _r.get(e);const t=Ac(e);return t!==e&&(_r.set(e,t),li.set(t,e)),t}const yr=e=>li.get(e);function wc(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Ct(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ct(o.result),u.oldVersion,u.newVersion,Ct(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Rc=["get","getKey","getAll","getAllKeys","count"],Pc=["put","add","delete","clear"],Er=new Map;function ds(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Er.get(t))return Er.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Pc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Rc.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Er.set(t,s),s}vc(e=>({...e,get:(t,n,r)=>ds(t,n)||e.get(t,n,r),has:(t,n)=>!!ds(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cc(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Cc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Or="@firebase/app",fs="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new Eo("@firebase/app"),Vc="@firebase/app-compat",Dc="@firebase/analytics-compat",bc="@firebase/analytics",kc="@firebase/app-check-compat",Nc="@firebase/app-check",Mc="@firebase/auth",xc="@firebase/auth-compat",Oc="@firebase/database",Fc="@firebase/database-compat",Lc="@firebase/functions",Uc="@firebase/functions-compat",Bc="@firebase/installations",jc="@firebase/installations-compat",$c="@firebase/messaging",qc="@firebase/messaging-compat",zc="@firebase/performance",Kc="@firebase/performance-compat",Hc="@firebase/remote-config",Gc="@firebase/remote-config-compat",Wc="@firebase/storage",Qc="@firebase/storage-compat",Xc="@firebase/firestore",Jc="@firebase/firestore-compat",Yc="firebase",Zc="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]",tl={[Or]:"fire-core",[Vc]:"fire-core-compat",[bc]:"fire-analytics",[Dc]:"fire-analytics-compat",[Nc]:"fire-app-check",[kc]:"fire-app-check-compat",[Mc]:"fire-auth",[xc]:"fire-auth-compat",[Oc]:"fire-rtdb",[Fc]:"fire-rtdb-compat",[Lc]:"fire-fn",[Uc]:"fire-fn-compat",[Bc]:"fire-iid",[jc]:"fire-iid-compat",[$c]:"fire-fcm",[qc]:"fire-fcm-compat",[zc]:"fire-perf",[Kc]:"fire-perf-compat",[Hc]:"fire-rc",[Gc]:"fire-rc-compat",[Wc]:"fire-gcs",[Qc]:"fire-gcs-compat",[Xc]:"fire-fst",[Jc]:"fire-fst-compat","fire-js":"fire-js",[Yc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new Map,Lr=new Map;function el(e,t){try{e.container.addComponent(t)}catch(n){zt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Pn(e){const t=e.name;if(Lr.has(t))return zt.debug(`There were multiple attempts to register component ${t}.`),!1;Lr.set(t,e);for(const n of Rn.values())el(n,e);return!0}function nl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vt=new yo("app","Firebase",rl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ke("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=Zc;function Io(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Fr,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Vt.create("bad-app-name",{appName:String(i)});if(n||(n=_o()),!n)throw Vt.create("no-options");const s=Rn.get(i);if(s){if(Nr(n,s.options)&&Nr(r,s.config))return s;throw Vt.create("duplicate-app",{appName:i})}const o=new hc(i);for(const u of Lr.values())o.addComponent(u);const a=new il(n,r,o);return Rn.set(i,a),a}function ol(e=Fr){const t=Rn.get(e);if(!t&&e===Fr&&_o())return Io();if(!t)throw Vt.create("no-app",{appName:e});return t}function ee(e,t,n){var r;let i=(r=tl[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),zt.warn(a.join(" "));return}Pn(new ke(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="firebase-heartbeat-database",ul=1,Ne="firebase-heartbeat-store";let Tr=null;function Ao(){return Tr||(Tr=wc(al,ul,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ne)}}}).catch(e=>{throw Vt.create("idb-open",{originalErrorMessage:e.message})})),Tr}async function cl(e){try{return await(await Ao()).transaction(Ne).objectStore(Ne).get(wo(e))}catch(t){if(t instanceof me)zt.warn(t.message);else{const n=Vt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});zt.warn(n.message)}}}async function ms(e,t){try{const r=(await Ao()).transaction(Ne,"readwrite");await r.objectStore(Ne).put(t,wo(e)),await r.done}catch(n){if(n instanceof me)zt.warn(n.message);else{const r=Vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zt.warn(r.message)}}}function wo(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=1024,hl=30*24*60*60*1e3;class dl{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ml(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ps();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=hl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ps(),{heartbeatsToSend:n,unsentEntries:r}=fl(this._heartbeatsCache.heartbeats),i=wn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ps(){return new Date().toISOString().substring(0,10)}function fl(e,t=ll){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),gs(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gs(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ml{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rc()?ic().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ms(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ms(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function gs(e){return wn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(e){Pn(new ke("platform-logger",t=>new Sc(t),"PRIVATE")),Pn(new ke("heartbeat",t=>new dl(t),"PRIVATE")),ee(Or,fs,e),ee(Or,fs,"esm2017"),ee("fire-js","")}pl("");var gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,hi=hi||{},A=gl||self;function jn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Qe(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function _l(e){return Object.prototype.hasOwnProperty.call(e,vr)&&e[vr]||(e[vr]=++yl)}var vr="closure_uid_"+(1e9*Math.random()>>>0),yl=0;function El(e,t,n){return e.call.apply(e.bind,arguments)}function Tl(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function tt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tt=El:tt=Tl,tt.apply(null,arguments)}function hn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function K(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Mt(){this.s=this.s,this.o=this.o}var vl=0;Mt.prototype.s=!1;Mt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),vl!=0)&&_l(this)};Mt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ro=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function di(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function _s(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(jn(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function et(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var Il=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{A.addEventListener("test",()=>{},t),A.removeEventListener("test",()=>{},t)}catch{}return e}();function Me(e){return/^[\s\xa0]*$/.test(e)}function $n(){var e=A.navigator;return e&&(e=e.userAgent)?e:""}function ft(e){return $n().indexOf(e)!=-1}function fi(e){return fi[" "](e),e}fi[" "]=function(){};function Al(e,t){var n=ph;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var wl=ft("Opera"),oe=ft("Trident")||ft("MSIE"),Po=ft("Edge"),Ur=Po||oe,So=ft("Gecko")&&!($n().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge"))&&!(ft("Trident")||ft("MSIE"))&&!ft("Edge"),Rl=$n().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge");function Co(){var e=A.document;return e?e.documentMode:void 0}var Br;t:{var Ir="",Ar=function(){var e=$n();if(So)return/rv:([^\);]+)(\)|;)/.exec(e);if(Po)return/Edge\/([\d\.]+)/.exec(e);if(oe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Rl)return/WebKit\/(\S+)/.exec(e);if(wl)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ar&&(Ir=Ar?Ar[1]:""),oe){var wr=Co();if(wr!=null&&wr>parseFloat(Ir)){Br=String(wr);break t}}Br=Ir}var jr;if(A.document&&oe){var ys=Co();jr=ys||parseInt(Br,10)||void 0}else jr=void 0;var Pl=jr;function xe(e,t){if(et.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(So){t:{try{fi(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Sl[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&xe.$.h.call(this)}}K(xe,et);var Sl={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Xe="closure_listenable_"+(1e6*Math.random()|0),Cl=0;function Vl(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Cl,this.fa=this.ia=!1}function qn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function mi(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Dl(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Vo(e){const t={};for(const n in e)t[n]=e[n];return t}const Es="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Do(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Es.length;s++)n=Es[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function zn(e){this.src=e,this.g={},this.h=0}zn.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=qr(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Vl(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function $r(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Ro(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(qn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function qr(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var pi="closure_lm_"+(1e6*Math.random()|0),Rr={};function bo(e,t,n,r,i){if(r&&r.once)return No(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)bo(e,t[s],n,r,i);return null}return n=yi(n),e&&e[Xe]?e.O(t,n,Qe(r)?!!r.capture:!!r,i):ko(e,t,n,!1,r,i)}function ko(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Qe(i)?!!i.capture:!!i,a=_i(e);if(a||(e[pi]=a=new zn(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=bl(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Il||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(xo(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function bl(){function e(n){return t.call(e.src,e.listener,n)}const t=kl;return e}function No(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)No(e,t[s],n,r,i);return null}return n=yi(n),e&&e[Xe]?e.P(t,n,Qe(r)?!!r.capture:!!r,i):ko(e,t,n,!0,r,i)}function Mo(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Mo(e,t[s],n,r,i);else r=Qe(r)?!!r.capture:!!r,n=yi(n),e&&e[Xe]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=qr(s,n,r,i),-1<n&&(qn(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=_i(e))&&(t=e.g[t.toString()],e=-1,t&&(e=qr(t,n,r,i)),(n=-1<e?t[e]:null)&&gi(n))}function gi(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Xe])$r(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(xo(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=_i(t))?($r(n,e),n.h==0&&(n.src=null,t[pi]=null)):qn(e)}}}function xo(e){return e in Rr?Rr[e]:Rr[e]="on"+e}function kl(e,t){if(e.fa)e=!0;else{t=new xe(t,this);var n=e.listener,r=e.la||e.src;e.ia&&gi(e),e=n.call(r,t)}return e}function _i(e){return e=e[pi],e instanceof zn?e:null}var Pr="__closure_events_fn_"+(1e9*Math.random()>>>0);function yi(e){return typeof e=="function"?e:(e[Pr]||(e[Pr]=function(t){return e.handleEvent(t)}),e[Pr])}function z(){Mt.call(this),this.i=new zn(this),this.S=this,this.J=null}K(z,Mt);z.prototype[Xe]=!0;z.prototype.removeEventListener=function(e,t,n,r){Mo(this,e,t,n,r)};function Q(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new et(t,e);else if(t instanceof et)t.target=t.target||e;else{var i=t;t=new et(r,e),Do(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=dn(o,r,!0,t)&&i}if(o=t.g=e,i=dn(o,r,!0,t)&&i,i=dn(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=dn(o,r,!1,t)&&i}z.prototype.N=function(){if(z.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)qn(n[r]);delete e.g[t],e.h--}}this.J=null};z.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};z.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function dn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&$r(e.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ei=A.JSON.stringify;class Nl{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Ml(){var e=Ti;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class xl{constructor(){this.h=this.g=null}add(t,n){const r=Oo.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Oo=new Nl(()=>new Ol,e=>e.reset());class Ol{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Fl(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Ll(e){A.setTimeout(()=>{throw e},0)}let Oe,Fe=!1,Ti=new xl,Fo=()=>{const e=A.Promise.resolve(void 0);Oe=()=>{e.then(Ul)}};var Ul=()=>{for(var e;e=Ml();){try{e.h.call(e.g)}catch(n){Ll(n)}var t=Oo;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fe=!1};function Kn(e,t){z.call(this),this.h=e||1,this.g=t||A,this.j=tt(this.qb,this),this.l=Date.now()}K(Kn,z);g=Kn.prototype;g.ga=!1;g.T=null;g.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Q(this,"tick"),this.ga&&(vi(this),this.start()))}};g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function vi(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}g.N=function(){Kn.$.N.call(this),vi(this),delete this.g};function Ii(e,t,n){if(typeof e=="function")n&&(e=tt(e,n));else if(e&&typeof e.handleEvent=="function")e=tt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:A.setTimeout(e,t||0)}function Lo(e){e.g=Ii(()=>{e.g=null,e.i&&(e.i=!1,Lo(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Bl extends Mt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Lo(this)}N(){super.N(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Le(e){Mt.call(this),this.h=e,this.g={}}K(Le,Mt);var Ts=[];function Uo(e,t,n,r){Array.isArray(n)||(n&&(Ts[0]=n.toString()),n=Ts);for(var i=0;i<n.length;i++){var s=bo(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Bo(e){mi(e.g,function(t,n){this.g.hasOwnProperty(n)&&gi(t)},e),e.g={}}Le.prototype.N=function(){Le.$.N.call(this),Bo(this)};Le.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Hn(){this.g=!0}Hn.prototype.Ea=function(){this.g=!1};function jl(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function $l(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function te(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+zl(e,n)+(r?" "+r:"")})}function ql(e,t){e.info(function(){return"TIMEOUT: "+t})}Hn.prototype.info=function(){};function zl(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ei(n)}catch{return t}}var Wt={},vs=null;function Gn(){return vs=vs||new z}Wt.Ta="serverreachability";function jo(e){et.call(this,Wt.Ta,e)}K(jo,et);function Ue(e){const t=Gn();Q(t,new jo(t))}Wt.STAT_EVENT="statevent";function $o(e,t){et.call(this,Wt.STAT_EVENT,e),this.stat=t}K($o,et);function it(e){const t=Gn();Q(t,new $o(t,e))}Wt.Ua="timingevent";function qo(e,t){et.call(this,Wt.Ua,e),this.size=t}K(qo,et);function Je(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){e()},t)}var Wn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},zo={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ai(){}Ai.prototype.h=null;function Is(e){return e.h||(e.h=e.i())}function Ko(){}var Ye={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function wi(){et.call(this,"d")}K(wi,et);function Ri(){et.call(this,"c")}K(Ri,et);var zr;function Qn(){}K(Qn,Ai);Qn.prototype.g=function(){return new XMLHttpRequest};Qn.prototype.i=function(){return{}};zr=new Qn;function Ze(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Le(this),this.P=Kl,e=Ur?125:void 0,this.V=new Kn(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ho}function Ho(){this.i=null,this.g="",this.h=!1}var Kl=45e3,Kr={},Sn={};g=Ze.prototype;g.setTimeout=function(e){this.P=e};function Hr(e,t,n){e.L=1,e.v=Jn(At(t)),e.s=n,e.S=!0,Go(e,null)}function Go(e,t){e.G=Date.now(),tn(e),e.A=At(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),ea(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Ho,e.g=Ia(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Bl(tt(e.Pa,e,e.g),e.O)),Uo(e.U,e.g,"readystatechange",e.nb),t=e.I?Vo(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Ue(),jl(e.j,e.u,e.A,e.m,e.W,e.s)}g.nb=function(e){e=e.target;const t=this.M;t&&mt(e)==3?t.l():this.Pa(e)};g.Pa=function(e){try{if(e==this.g)t:{const l=mt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Ur||this.g&&(this.h.h||this.g.ja()||Ps(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?Ue(3):Ue(2)),Xn(this);var n=this.g.da();this.ca=n;e:if(Wo(this)){var r=Ps(this.g);e="";var i=r.length,s=mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lt(this),Se(this);var o="";break e}this.h.i=new A.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,$l(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Me(a)){var c=a;break e}}c=null}if(n=c)te(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gr(this,n);else{this.i=!1,this.o=3,it(12),Lt(this),Se(this);break t}}this.S?(Qo(this,l,o),Ur&&this.i&&l==3&&(Uo(this.U,this.V,"tick",this.mb),this.V.start())):(te(this.j,this.m,o,null),Gr(this,o)),l==4&&Lt(this),this.i&&!this.J&&(l==4?ya(this.l,this):(this.i=!1,tn(this)))}else dh(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),Lt(this),Se(this)}}}catch{}finally{}};function Wo(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Qo(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=Hl(e,n),i==Sn){t==4&&(e.o=4,it(14),r=!1),te(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Kr){e.o=4,it(15),te(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else te(e.j,e.m,i,null),Gr(e,i);Wo(e)&&i!=Sn&&i!=Kr&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,it(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),bi(t),t.M=!0,it(11))):(te(e.j,e.m,n,"[Invalid Chunked Response]"),Lt(e),Se(e))}g.mb=function(){if(this.g){var e=mt(this.g),t=this.g.ja();this.C<t.length&&(Xn(this),Qo(this,e,t),this.i&&e!=4&&tn(this))}};function Hl(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Sn:(n=Number(t.substring(n,r)),isNaN(n)?Kr:(r+=1,r+n>t.length?Sn:(t=t.slice(r,r+n),e.C=r+n,t)))}g.cancel=function(){this.J=!0,Lt(this)};function tn(e){e.Y=Date.now()+e.P,Xo(e,e.P)}function Xo(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Je(tt(e.lb,e),t)}function Xn(e){e.B&&(A.clearTimeout(e.B),e.B=null)}g.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(ql(this.j,this.A),this.L!=2&&(Ue(),it(17)),Lt(this),this.o=2,Se(this)):Xo(this,this.Y-e)};function Se(e){e.l.H==0||e.J||ya(e.l,e)}function Lt(e){Xn(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,vi(e.V),Bo(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Gr(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Wr(n.i,e))){if(!e.K&&Wr(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Dn(n),tr(n);else break t;Di(n),it(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Je(tt(n.ib,n),6e3));if(1>=ia(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ut(n,11)}else if((e.K||n.g==e)&&Dn(n),!Me(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const l=c[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Pi(s,s.h),s.h=null))}if(r.F){const R=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,N(r.I,r.F,R))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=va(r,r.J?r.pa:null,r.Y),o.K){sa(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(Xn(a),tn(a)),r.g=o}else ga(r);0<n.j.length&&er(n)}else c[0]!="stop"&&c[0]!="close"||Ut(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ut(n,7):Vi(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ue(4)}catch{}}function Gl(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(jn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Wl(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(jn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Jo(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(jn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Wl(e),r=Gl(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Yo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ql(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function jt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof jt){this.h=e.h,Cn(this,e.j),this.s=e.s,this.g=e.g,Vn(this,e.m),this.l=e.l;var t=e.i,n=new Be;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),As(this,n),this.o=e.o}else e&&(t=String(e).match(Yo))?(this.h=!1,Cn(this,t[1]||"",!0),this.s=Ie(t[2]||""),this.g=Ie(t[3]||"",!0),Vn(this,t[4]),this.l=Ie(t[5]||"",!0),As(this,t[6]||"",!0),this.o=Ie(t[7]||"")):(this.h=!1,this.i=new Be(null,this.h))}jt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ae(t,ws,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ae(t,ws,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ae(n,n.charAt(0)=="/"?Yl:Jl,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ae(n,th)),e.join("")};function At(e){return new jt(e)}function Cn(e,t,n){e.j=n?Ie(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Vn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function As(e,t,n){t instanceof Be?(e.i=t,eh(e.i,e.h)):(n||(t=Ae(t,Zl)),e.i=new Be(t,e.h))}function N(e,t,n){e.i.set(t,n)}function Jn(e){return N(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ie(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ae(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Xl),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Xl(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ws=/[#\/\?@]/g,Jl=/[#\?:]/g,Yl=/[#\?]/g,Zl=/[#\?@]/g,th=/#/g;function Be(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function xt(e){e.g||(e.g=new Map,e.h=0,e.i&&Ql(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=Be.prototype;g.add=function(e,t){xt(this),this.i=null,e=pe(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Zo(e,t){xt(e),t=pe(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ta(e,t){return xt(e),t=pe(e,t),e.g.has(t)}g.forEach=function(e,t){xt(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};g.ta=function(){xt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};g.Z=function(e){xt(this);let t=[];if(typeof e=="string")ta(this,e)&&(t=t.concat(this.g.get(pe(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};g.set=function(e,t){return xt(this),this.i=null,e=pe(this,e),ta(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function ea(e,t,n){Zo(e,t),0<n.length&&(e.i=null,e.g.set(pe(e,t),di(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function pe(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function eh(e,t){t&&!e.j&&(xt(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Zo(this,r),ea(this,i,n))},e)),e.j=t}var nh=class{constructor(e,t){this.g=e,this.map=t}};function na(e){this.l=e||rh,A.PerformanceNavigationTiming?(e=A.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(A.g&&A.g.Ka&&A.g.Ka()&&A.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var rh=10;function ra(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function ia(e){return e.h?1:e.g?e.g.size:0}function Wr(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Pi(e,t){e.g?e.g.add(t):e.h=t}function sa(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}na.prototype.cancel=function(){if(this.i=oa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function oa(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return di(e.i)}var ih=class{stringify(e){return A.JSON.stringify(e,void 0)}parse(e){return A.JSON.parse(e,void 0)}};function sh(){this.g=new ih}function oh(e,t,n){const r=n||"";try{Jo(e,function(i,s){let o=i;Qe(i)&&(o=Ei(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function ah(e,t){const n=new Hn;if(A.Image){const r=new Image;r.onload=hn(fn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=hn(fn,n,r,"TestLoadImage: error",!1,t),r.onabort=hn(fn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=hn(fn,n,r,"TestLoadImage: timeout",!1,t),A.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function fn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function en(e){this.l=e.fc||null,this.j=e.ob||!1}K(en,Ai);en.prototype.g=function(){return new Yn(this.l,this.j)};en.prototype.i=function(e){return function(){return e}}({});function Yn(e,t){z.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Si,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}K(Yn,z);var Si=0;g=Yn.prototype;g.open=function(e,t){if(this.readyState!=Si)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,je(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||A).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nn(this)),this.readyState=Si};g.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,je(this)),this.g&&(this.readyState=3,je(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof A.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;aa(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function aa(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}g.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?nn(this):je(this),this.readyState==3&&aa(this)}};g.Za=function(e){this.g&&(this.response=this.responseText=e,nn(this))};g.Ya=function(e){this.g&&(this.response=e,nn(this))};g.ka=function(){this.g&&nn(this)};function nn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,je(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function je(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Yn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var uh=A.JSON.parse;function F(e){z.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ua,this.L=this.M=!1}K(F,z);var ua="",ch=/^https?$/i,lh=["POST","PUT"];g=F.prototype;g.Oa=function(e){this.M=e};g.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():zr.g(),this.C=this.u?Is(this.u):Is(zr),this.g.onreadystatechange=tt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Rs(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=A.FormData&&e instanceof A.FormData,!(0<=Ro(lh,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ha(this),0<this.B&&((this.L=hh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tt(this.ua,this)):this.A=Ii(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Rs(this,s)}};function hh(e){return oe&&typeof e.timeout=="number"&&e.ontimeout!==void 0}g.ua=function(){typeof hi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Q(this,"timeout"),this.abort(8))};function Rs(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ca(e),Zn(e)}function ca(e){e.F||(e.F=!0,Q(e,"complete"),Q(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Q(this,"complete"),Q(this,"abort"),Zn(this))};g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Zn(this,!0)),F.$.N.call(this)};g.La=function(){this.s||(this.G||this.v||this.l?la(this):this.kb())};g.kb=function(){la(this)};function la(e){if(e.h&&typeof hi<"u"&&(!e.C[1]||mt(e)!=4||e.da()!=2)){if(e.v&&mt(e)==4)Ii(e.La,0,e);else if(Q(e,"readystatechange"),mt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Yo)[1]||null;!i&&A.self&&A.self.location&&(i=A.self.location.protocol.slice(0,-1)),r=!ch.test(i?i.toLowerCase():"")}n=r}if(n)Q(e,"complete"),Q(e,"success");else{e.m=6;try{var s=2<mt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",ca(e)}}finally{Zn(e)}}}}function Zn(e,t){if(e.g){ha(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Q(e,"ready");try{n.onreadystatechange=r}catch{}}}function ha(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(A.clearTimeout(e.A),e.A=null)}g.isActive=function(){return!!this.g};function mt(e){return e.g?e.g.readyState:0}g.da=function(){try{return 2<mt(this)?this.g.status:-1}catch{return-1}};g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),uh(t)}};function Ps(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case ua:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function dh(e){const t={};e=(e.g&&2<=mt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Me(e[r]))continue;var n=Fl(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Dl(t,function(r){return r.join(", ")})}g.Ia=function(){return this.m};g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function da(e){let t="";return mi(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Ci(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=da(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):N(e,t,n))}function Te(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function fa(e){this.Ga=0,this.j=[],this.l=new Hn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Te("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Te("baseRetryDelayMs",5e3,e),this.hb=Te("retryDelaySeedMs",1e4,e),this.eb=Te("forwardChannelMaxRetries",2,e),this.xa=Te("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new na(e&&e.concurrentRequestLimit),this.Ja=new sh,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}g=fa.prototype;g.ra=8;g.H=1;function Vi(e){if(ma(e),e.H==3){var t=e.W++,n=At(e.I);if(N(n,"SID",e.K),N(n,"RID",t),N(n,"TYPE","terminate"),rn(e,n),t=new Ze(e,e.l,t),t.L=2,t.v=Jn(At(n)),n=!1,A.navigator&&A.navigator.sendBeacon)try{n=A.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&A.Image&&(new Image().src=t.v,n=!0),n||(t.g=Ia(t.l,null),t.g.ha(t.v)),t.G=Date.now(),tn(t)}Ta(e)}function tr(e){e.g&&(bi(e),e.g.cancel(),e.g=null)}function ma(e){tr(e),e.u&&(A.clearTimeout(e.u),e.u=null),Dn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&A.clearTimeout(e.m),e.m=null)}function er(e){if(!ra(e.i)&&!e.m){e.m=!0;var t=e.Na;Oe||Fo(),Fe||(Oe(),Fe=!0),Ti.add(t,e),e.C=0}}function fh(e,t){return ia(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Je(tt(e.Na,e,t),Ea(e,e.C)),e.C++,!0)}g.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Ze(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Vo(s),Do(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=pa(this,i,t),n=At(this.I),N(n,"RID",e),N(n,"CVER",22),this.F&&N(n,"X-HTTP-Session-Id",this.F),rn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(da(s)))+"&"+t:this.o&&Ci(n,this.o,s)),Pi(this.i,i),this.bb&&N(n,"TYPE","init"),this.P?(N(n,"$req",t),N(n,"SID","null"),i.aa=!0,Hr(i,n,null)):Hr(i,n,t),this.H=2}}else this.H==3&&(e?Ss(this,e):this.j.length==0||ra(this.i)||Ss(this))};function Ss(e,t){var n;t?n=t.m:n=e.W++;const r=At(e.I);N(r,"SID",e.K),N(r,"RID",n),N(r,"AID",e.V),rn(e,r),e.o&&e.s&&Ci(r,e.o,e.s),n=new Ze(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=pa(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Pi(e.i,n),Hr(n,r,t)}function rn(e,t){e.na&&mi(e.na,function(n,r){N(t,r,n)}),e.h&&Jo({},function(n,r){N(t,r,n)})}function pa(e,t,n){n=Math.min(e.j.length,n);var r=e.h?tt(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let c=i[u].g;const l=i[u].map;if(c-=s,0>c)s=Math.max(0,i[u].g-100),a=!1;else try{oh(l,o,"req"+c+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function ga(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Oe||Fo(),Fe||(Oe(),Fe=!0),Ti.add(t,e),e.A=0}}function Di(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Je(tt(e.Ma,e),Ea(e,e.A)),e.A++,!0)}g.Ma=function(){if(this.u=null,_a(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Je(tt(this.jb,this),e)}};g.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,it(10),tr(this),_a(this))};function bi(e){e.B!=null&&(A.clearTimeout(e.B),e.B=null)}function _a(e){e.g=new Ze(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=At(e.wa);N(t,"RID","rpc"),N(t,"SID",e.K),N(t,"AID",e.V),N(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&N(t,"TO",e.qa),N(t,"TYPE","xmlhttp"),rn(e,t),e.o&&e.s&&Ci(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Jn(At(t)),n.s=null,n.S=!0,Go(n,e)}g.ib=function(){this.v!=null&&(this.v=null,tr(this),Di(this),it(19))};function Dn(e){e.v!=null&&(A.clearTimeout(e.v),e.v=null)}function ya(e,t){var n=null;if(e.g==t){Dn(e),bi(e),e.g=null;var r=2}else if(Wr(e.i,t))n=t.F,sa(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Gn(),Q(r,new qo(r,n)),er(e)}else ga(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&fh(e,t)||r==2&&Di(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Ut(e,5);break;case 4:Ut(e,10);break;case 3:Ut(e,6);break;default:Ut(e,2)}}}function Ea(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Ut(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=tt(e.pb,e);n||(n=new jt("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||Cn(n,"https"),Jn(n)),ah(n.toString(),r)}else it(2);e.H=0,e.h&&e.h.za(t),Ta(e),ma(e)}g.pb=function(e){e?(this.l.info("Successfully pinged google.com"),it(2)):(this.l.info("Failed to ping google.com"),it(1))};function Ta(e){if(e.H=0,e.ma=[],e.h){const t=oa(e.i);(t.length!=0||e.j.length!=0)&&(_s(e.ma,t),_s(e.ma,e.j),e.i.i.length=0,di(e.j),e.j.length=0),e.h.ya()}}function va(e,t,n){var r=n instanceof jt?At(n):new jt(n);if(r.g!="")t&&(r.g=t+"."+r.g),Vn(r,r.m);else{var i=A.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new jt(null);r&&Cn(s,r),t&&(s.g=t),i&&Vn(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&N(r,n,t),N(r,"VER",e.ra),rn(e,r),r}function Ia(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new F(new en({ob:!0})):new F(e.va),t.Oa(e.J),t}g.isActive=function(){return!!this.h&&this.h.isActive(this)};function Aa(){}g=Aa.prototype;g.Ba=function(){};g.Aa=function(){};g.za=function(){};g.ya=function(){};g.isActive=function(){return!0};g.Va=function(){};function bn(){if(oe&&!(10<=Number(Pl)))throw Error("Environmental error: no available transport.")}bn.prototype.g=function(e,t){return new lt(e,t)};function lt(e,t){z.call(this),this.g=new fa(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Me(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Me(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ge(this)}K(lt,z);lt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;it(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=va(e,null,e.Y),er(e)};lt.prototype.close=function(){Vi(this.g)};lt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ei(e),e=n);t.j.push(new nh(t.fb++,e)),t.H==3&&er(t)};lt.prototype.N=function(){this.g.h=null,delete this.j,Vi(this.g),delete this.g,lt.$.N.call(this)};function wa(e){wi.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}K(wa,wi);function Ra(){Ri.call(this),this.status=1}K(Ra,Ri);function ge(e){this.g=e}K(ge,Aa);ge.prototype.Ba=function(){Q(this.g,"a")};ge.prototype.Aa=function(e){Q(this.g,new wa(e))};ge.prototype.za=function(e){Q(this.g,new Ra)};ge.prototype.ya=function(){Q(this.g,"b")};function mh(){this.blockSize=-1}function dt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}K(dt,mh);dt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Sr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}dt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Sr(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Sr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Sr(this,r),i=0;break}}this.h=i,this.i+=t};dt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function b(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var ph={};function ki(e){return-128<=e&&128>e?Al(e,function(t){return new b([t|0],0>t?-1:0)}):new b([e|0],0>e?-1:0)}function pt(e){if(isNaN(e)||!isFinite(e))return ne;if(0>e)return W(pt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Qr;return new b(t,0)}function Pa(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return W(Pa(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=pt(Math.pow(t,8)),r=ne,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=pt(Math.pow(t,s)),r=r.R(s).add(pt(o))):(r=r.R(n),r=r.add(pt(o)))}return r}var Qr=4294967296,ne=ki(0),Xr=ki(1),Cs=ki(16777216);g=b.prototype;g.ea=function(){if(ht(this))return-W(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Qr+r)*t,t*=Qr}return e};g.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(vt(this))return"0";if(ht(this))return"-"+W(this).toString(e);for(var t=pt(Math.pow(e,6)),n=this,r="";;){var i=Nn(n,t).g;n=kn(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,vt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};g.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function vt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ht(e){return e.h==-1}g.X=function(e){return e=kn(this,e),ht(e)?-1:vt(e)?0:1};function W(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new b(n,~e.h).add(Xr)}g.abs=function(){return ht(this)?W(this):this};g.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new b(n,n[n.length-1]&-2147483648?-1:0)};function kn(e,t){return e.add(W(t))}g.R=function(e){if(vt(this)||vt(e))return ne;if(ht(this))return ht(e)?W(this).R(W(e)):W(W(this).R(e));if(ht(e))return W(this.R(W(e)));if(0>this.X(Cs)&&0>e.X(Cs))return pt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*r+2*i]+=o*u,mn(n,2*r+2*i),n[2*r+2*i+1]+=s*u,mn(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,mn(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,mn(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new b(n,0)};function mn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ve(e,t){this.g=e,this.h=t}function Nn(e,t){if(vt(t))throw Error("division by zero");if(vt(e))return new ve(ne,ne);if(ht(e))return t=Nn(W(e),t),new ve(W(t.g),W(t.h));if(ht(t))return t=Nn(e,W(t)),new ve(W(t.g),t.h);if(30<e.g.length){if(ht(e)||ht(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Xr,r=t;0>=r.X(e);)n=Vs(n),r=Vs(r);var i=Jt(n,1),s=Jt(r,1);for(r=Jt(r,2),n=Jt(n,2);!vt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Jt(r,1),n=Jt(n,1)}return t=kn(e,i.R(t)),new ve(i,t)}for(i=ne;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=pt(n),o=s.R(t);ht(o)||0<o.X(e);)n-=r,s=pt(n),o=s.R(t);vt(s)&&(s=Xr),i=i.add(s),e=kn(e,o)}return new ve(i,e)}g.gb=function(e){return Nn(this,e).h};g.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new b(n,this.h&e.h)};g.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new b(n,this.h|e.h)};g.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new b(n,this.h^e.h)};function Vs(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new b(n,e.h)}function Jt(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new b(i,e.h)}bn.prototype.createWebChannel=bn.prototype.g;lt.prototype.send=lt.prototype.u;lt.prototype.open=lt.prototype.m;lt.prototype.close=lt.prototype.close;Wn.NO_ERROR=0;Wn.TIMEOUT=8;Wn.HTTP_ERROR=6;zo.COMPLETE="complete";Ko.EventType=Ye;Ye.OPEN="a";Ye.CLOSE="b";Ye.ERROR="c";Ye.MESSAGE="d";z.prototype.listen=z.prototype.O;F.prototype.listenOnce=F.prototype.P;F.prototype.getLastError=F.prototype.Sa;F.prototype.getLastErrorCode=F.prototype.Ia;F.prototype.getStatus=F.prototype.da;F.prototype.getResponseJson=F.prototype.Wa;F.prototype.getResponseText=F.prototype.ja;F.prototype.send=F.prototype.ha;F.prototype.setWithCredentials=F.prototype.Oa;dt.prototype.digest=dt.prototype.l;dt.prototype.reset=dt.prototype.reset;dt.prototype.update=dt.prototype.j;b.prototype.add=b.prototype.add;b.prototype.multiply=b.prototype.R;b.prototype.modulo=b.prototype.gb;b.prototype.compare=b.prototype.X;b.prototype.toNumber=b.prototype.ea;b.prototype.toString=b.prototype.toString;b.prototype.getBits=b.prototype.D;b.fromNumber=pt;b.fromString=Pa;var gh=function(){return new bn},_h=function(){return Gn()},Cr=Wn,yh=zo,Eh=Wt,Ds={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Th=en,pn=Ko,vh=F,Ih=dt,re=b;const bs="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _e="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new Eo("@firebase/firestore");function ks(){return Kt.logLevel}function _(e,...t){if(Kt.logLevel<=D.DEBUG){const n=t.map(Ni);Kt.debug(`Firestore (${_e}): ${e}`,...n)}}function wt(e,...t){if(Kt.logLevel<=D.ERROR){const n=t.map(Ni);Kt.error(`Firestore (${_e}): ${e}`,...n)}}function ae(e,...t){if(Kt.logLevel<=D.WARN){const n=t.map(Ni);Kt.warn(`Firestore (${_e}): ${e}`,...n)}}function Ni(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${_e}) INTERNAL ASSERTION FAILED: `+e;throw wt(t),new Error(t)}function M(e,t){e||I()}function P(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends me{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ah{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(J.UNAUTHENTICATED))}shutdown(){}}class wh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Rh{constructor(t){this.t=t,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new $t,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new $t)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(M(typeof r.accessToken=="string"),new Sa(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return M(t===null||typeof t=="string"),new J(t)}}class Ph{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=J.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Sh{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ph(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(J.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ch{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(M(typeof n.token=="string"),this.R=n.token,new Ch(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Dh(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function V(e,t){return e<t?-1:e>t?1:0}function ue(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return $.fromMillis(Date.now())}static fromDate(t){return $.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new $(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?V(this.nanoseconds,t.nanoseconds):V(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.timestamp=t}static fromTimestamp(t){return new w(t)}static min(){return new w(new $(0,0))}static max(){return new w(new $(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,n,r){n===void 0?n=0:n>t.length&&I(),r===void 0?r=t.length-n:r>t.length-n&&I(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return $e.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof $e?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class x extends $e{construct(t,n,r){return new x(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new x(n)}static emptyPath(){return new x([])}}const bh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends $e{construct(t,n,r){return new Z(t,n,r)}static isValidIdentifier(t){return bh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Z(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new y(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new y(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Z(n)}static emptyPath(){return new Z([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(x.fromString(t))}static fromName(t){return new T(x.fromString(t).popFirst(5))}static empty(){return new T(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&x.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return x.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new x(t.slice()))}}function kh(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=w.fromTimestamp(r===1e9?new $(n+1,0):new $(n,r));return new bt(i,T.empty(),t)}function Nh(e){return new bt(e.readTime,e.key,-1)}class bt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new bt(w.min(),T.empty(),-1)}static max(){return new bt(w.max(),T.empty(),-1)}}function Mh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=T.comparator(e.documentKey,t.documentKey),n!==0?n:V(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Oh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==xh)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,r)=>{n(t)})}static reject(t){return new p((n,r)=>{r(t)})}static waitFor(t){return new p((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(t){let n=p.resolve(!1);for(const r of t)n=n.next(i=>i?p.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new p((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(t[c]).next(l=>{o[c]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(t,n){return new p((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function on(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Mi.ae=-1;function nr(e){return e==null}function Mn(e){return e===0&&1/e==-1/0}function Fh(e){return typeof e=="number"&&Number.isInteger(e)&&!Mn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Qt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Va(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,n){this.comparator=t,this.root=n||G.EMPTY}insert(t,n){return new O(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,G.BLACK,null,null))}remove(t){return new O(this.comparator,this.root.remove(t,this.comparator).copy(null,null,G.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new gn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new gn(this.root,t,this.comparator,!1)}getReverseIterator(){return new gn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new gn(this.root,t,this.comparator,!0)}}class gn{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class G{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??G.RED,this.left=i??G.EMPTY,this.right=s??G.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new G(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return G.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return G.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}G.EMPTY=null,G.RED=!0,G.BLACK=!1;G.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(t,n,r,i,s){return this}insert(t,n,r){return new G(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.comparator=t,this.data=new O(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ms(this.data.getIterator())}getIteratorFrom(t){return new Ms(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof nt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new nt(this.comparator);return n.data=t,n}}class Ms{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.fields=t,t.sort(Z.comparator)}static empty(){return new ut([])}unionWith(t){let n=new nt(Z.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ut(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ue(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Da("Invalid base64 string: "+s):s}}(t);return new rt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new rt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return V(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const Lh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kt(e){if(M(!!e),typeof e=="string"){let t=0;const n=Lh.exec(e);if(M(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:U(e.seconds),nanos:U(e.nanos)}}function U(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ht(e){return typeof e=="string"?rt.fromBase64String(e):rt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Oi(e){const t=e.mapValue.fields.__previous_value__;return xi(t)?Oi(t):t}function qe(e){const t=kt(e.mapValue.fields.__local_write_time__.timestampValue);return new $(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t,n,r,i,s,o,a,u,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ze{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ze("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ze&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?xi(e)?4:Bh(e)?9007199254740991:10:I()}function yt(e,t){if(e===t)return!0;const n=Gt(e);if(n!==Gt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return qe(e).isEqual(qe(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=kt(i.timestampValue),a=kt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Ht(i.bytesValue).isEqual(Ht(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return U(i.geoPointValue.latitude)===U(s.geoPointValue.latitude)&&U(i.geoPointValue.longitude)===U(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return U(i.integerValue)===U(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=U(i.doubleValue),a=U(s.doubleValue);return o===a?Mn(o)===Mn(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return ue(e.arrayValue.values||[],t.arrayValue.values||[],yt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Ns(o)!==Ns(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!yt(o[u],a[u])))return!1;return!0}(e,t);default:return I()}}function Ke(e,t){return(e.values||[]).find(n=>yt(n,t))!==void 0}function ce(e,t){if(e===t)return 0;const n=Gt(e),r=Gt(t);if(n!==r)return V(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return V(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=U(s.integerValue||s.doubleValue),u=U(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return xs(e.timestampValue,t.timestampValue);case 4:return xs(qe(e),qe(t));case 5:return V(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Ht(s),u=Ht(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=V(a[c],u[c]);if(l!==0)return l}return V(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=V(U(s.latitude),U(o.latitude));return a!==0?a:V(U(s.longitude),U(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const l=ce(a[c],u[c]);if(l)return l}return V(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===_n.mapValue&&o===_n.mapValue)return 0;if(s===_n.mapValue)return 1;if(o===_n.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const d=V(u[h],l[h]);if(d!==0)return d;const m=ce(a[u[h]],c[l[h]]);if(m!==0)return m}return V(u.length,l.length)}(e.mapValue,t.mapValue);default:throw I()}}function xs(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return V(e,t);const n=kt(e),r=kt(t),i=V(n.seconds,r.seconds);return i!==0?i:V(n.nanos,r.nanos)}function le(e){return Jr(e)}function Jr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=kt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Ht(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return T.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Jr(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Jr(n.fields[o])}`;return i+"}"}(e.mapValue):I()}function Yr(e){return!!e&&"integerValue"in e}function Fi(e){return!!e&&"arrayValue"in e}function Os(e){return!!e&&"nullValue"in e}function Fs(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Tn(e){return!!e&&"mapValue"in e}function Ce(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Qt(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ce(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ce(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Bh(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.value=t}static empty(){return new st({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Tn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ce(n)}setAll(t){let n=Z.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ce(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Tn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return yt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Tn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Qt(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new st(Ce(this.value))}}function ba(e){const t=[];return Qt(e.fields,(n,r)=>{const i=new Z([n]);if(Tn(r)){const s=ba(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new ut(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Y(t,0,w.min(),w.min(),w.min(),st.empty(),0)}static newFoundDocument(t,n,r,i){return new Y(t,1,n,w.min(),r,i,0)}static newNoDocument(t,n){return new Y(t,2,n,w.min(),w.min(),st.empty(),0)}static newUnknownDocument(t,n){return new Y(t,3,n,w.min(),w.min(),st.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(w.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=w.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Y&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Y(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t,n){this.position=t,this.inclusive=n}}function Ls(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=T.comparator(T.fromName(o.referenceValue),n.key):r=ce(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Us(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!yt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t,n="asc"){this.field=t,this.dir=n}}function jh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{}class j extends ka{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new qh(t,n,r):n==="array-contains"?new Hh(t,r):n==="in"?new Gh(t,r):n==="not-in"?new Wh(t,r):n==="array-contains-any"?new Qh(t,r):new j(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new zh(t,r):new Kh(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ce(n,this.value)):n!==null&&Gt(this.value)===Gt(n)&&this.matchesComparison(ce(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Et extends ka{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new Et(t,n)}matches(t){return Na(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Na(e){return e.op==="and"}function Ma(e){return $h(e)&&Na(e)}function $h(e){for(const t of e.filters)if(t instanceof Et)return!1;return!0}function Zr(e){if(e instanceof j)return e.field.canonicalString()+e.op.toString()+le(e.value);if(Ma(e))return e.filters.map(t=>Zr(t)).join(",");{const t=e.filters.map(n=>Zr(n)).join(",");return`${e.op}(${t})`}}function xa(e,t){return e instanceof j?function(r,i){return i instanceof j&&r.op===i.op&&r.field.isEqual(i.field)&&yt(r.value,i.value)}(e,t):e instanceof Et?function(r,i){return i instanceof Et&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&xa(o,i.filters[a]),!0):!1}(e,t):void I()}function Oa(e){return e instanceof j?function(n){return`${n.field.canonicalString()} ${n.op} ${le(n.value)}`}(e):e instanceof Et?function(n){return n.op.toString()+" {"+n.getFilters().map(Oa).join(" ,")+"}"}(e):"Filter"}class qh extends j{constructor(t,n,r){super(t,n,r),this.key=T.fromName(r.referenceValue)}matches(t){const n=T.comparator(t.key,this.key);return this.matchesComparison(n)}}class zh extends j{constructor(t,n){super(t,"in",n),this.keys=Fa("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Kh extends j{constructor(t,n){super(t,"not-in",n),this.keys=Fa("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Fa(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>T.fromName(r.referenceValue))}class Hh extends j{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Fi(n)&&Ke(n.arrayValue,this.value)}}class Gh extends j{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ke(this.value.arrayValue,n)}}class Wh extends j{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ke(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ke(this.value.arrayValue,n)}}class Qh extends j{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Fi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ke(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Bs(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Xh(e,t,n,r,i,s,o)}function Li(e){const t=P(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Zr(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),nr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>le(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>le(r)).join(",")),t.he=n}return t.he}function Ui(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!jh(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!xa(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Us(e.startAt,t.startAt)&&Us(e.endAt,t.endAt)}function ti(e){return T.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Jh(e,t,n,r,i,s,o,a){return new rr(e,t,n,r,i,s,o,a)}function Bi(e){return new rr(e)}function js(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Yh(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Zh(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function td(e){return e.collectionGroup!==null}function ie(e){const t=P(e);if(t.Pe===null){t.Pe=[];const n=Zh(t),r=Yh(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new Ve(n)),t.Pe.push(new Ve(Z.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Ve(Z.keyField(),s))}}}return t.Pe}function Rt(e){const t=P(e);if(!t.Ie)if(t.limitType==="F")t.Ie=Bs(t.path,t.collectionGroup,ie(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of ie(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ve(s.field,o))}const r=t.endAt?new xn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new xn(t.startAt.position,t.startAt.inclusive):null;t.Ie=Bs(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.Ie}function ei(e,t,n){return new rr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ir(e,t){return Ui(Rt(e),Rt(t))&&e.limitType===t.limitType}function La(e){return`${Li(Rt(e))}|lt:${e.limitType}`}function ni(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Oa(i)).join(", ")}]`),nr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>le(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>le(i)).join(",")),`Target(${r})`}(Rt(e))}; limitType=${e.limitType})`}function sr(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):T.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of ie(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Ls(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,ie(r),i)||r.endAt&&!function(o,a,u){const c=Ls(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,ie(r),i))}(e,t)}function ed(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ua(e){return(t,n)=>{let r=!1;for(const i of ie(e)){const s=nd(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function nd(e,t,n){const r=e.field.isKeyField()?T.comparator(t.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?ce(u,c):I()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return I()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Qt(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Va(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=new O(T.comparator);function Pt(){return rd}const Ba=new O(T.comparator);function we(...e){let t=Ba;for(const n of e)t=t.insert(n.key,n);return t}function ja(e){let t=Ba;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Bt(){return De()}function $a(){return De()}function De(){return new ye(e=>e.toString(),(e,t)=>e.isEqual(t))}const id=new O(T.comparator),sd=new nt(T.comparator);function S(...e){let t=sd;for(const n of e)t=t.add(n);return t}const od=new nt(V);function ad(){return od}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mn(t)?"-0":t}}function za(e){return{integerValue:""+e}}function ud(e,t){return Fh(t)?za(t):qa(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this._=void 0}}function cd(e,t,n){return e instanceof On?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&xi(s)&&(s=Oi(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof He?Ha(e,t):e instanceof Ge?Ga(e,t):function(i,s){const o=Ka(i,s),a=$s(o)+$s(i.Te);return Yr(o)&&Yr(i.Te)?za(a):qa(i.serializer,a)}(e,t)}function ld(e,t,n){return e instanceof He?Ha(e,t):e instanceof Ge?Ga(e,t):n}function Ka(e,t){return e instanceof Fn?function(r){return Yr(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class On extends or{}class He extends or{constructor(t){super(),this.elements=t}}function Ha(e,t){const n=Wa(t);for(const r of e.elements)n.some(i=>yt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ge extends or{constructor(t){super(),this.elements=t}}function Ga(e,t){let n=Wa(t);for(const r of e.elements)n=n.filter(i=>!yt(i,r));return{arrayValue:{values:n}}}class Fn extends or{constructor(t,n){super(),this.serializer=t,this.Te=n}}function $s(e){return U(e.integerValue||e.doubleValue)}function Wa(e){return Fi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function hd(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof He&&i instanceof He||r instanceof Ge&&i instanceof Ge?ue(r.elements,i.elements,yt):r instanceof Fn&&i instanceof Fn?yt(r.Te,i.Te):r instanceof On&&i instanceof On}(e.transform,t.transform)}class dd{constructor(t,n){this.version=t,this.transformResults=n}}class gt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new gt}static exists(t){return new gt(void 0,t)}static updateTime(t){return new gt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function vn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ar{}function Qa(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ja(e.key,gt.none()):new an(e.key,e.data,gt.none());{const n=e.data,r=st.empty();let i=new nt(Z.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ot(e.key,r,new ut(i.toArray()),gt.none())}}function fd(e,t,n){e instanceof an?function(i,s,o){const a=i.value.clone(),u=zs(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Ot?function(i,s,o){if(!vn(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=zs(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Xa(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function be(e,t,n,r){return e instanceof an?function(s,o,a,u){if(!vn(s.precondition,o))return a;const c=s.value.clone(),l=Ks(s.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof Ot?function(s,o,a,u){if(!vn(s.precondition,o))return a;const c=Ks(s.fieldTransforms,u,o),l=o.data;return l.setAll(Xa(s)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return vn(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function md(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Ka(r.transform,i||null);s!=null&&(n===null&&(n=st.empty()),n.set(r.field,s))}return n||null}function qs(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ue(r,i,(s,o)=>hd(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class an extends ar{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ot extends ar{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Xa(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function zs(e,t,n){const r=new Map;M(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,ld(o,a,n[i]))}return r}function Ks(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,cd(s,o,t))}return r}class Ja extends ar{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pd extends ar{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&fd(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=be(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=be(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=$a();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=Qa(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(w.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),S())}isEqual(t){return this.batchId===t.batchId&&ue(this.mutations,t.mutations,(n,r)=>qs(n,r))&&ue(this.baseMutations,t.baseMutations,(n,r)=>qs(n,r))}}class ji{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){M(t.mutations.length===r.length);let i=function(){return id}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ji(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L,C;function Ed(e){switch(e){default:return I();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Ya(e){if(e===void 0)return wt("GRPC error has no .code"),f.UNKNOWN;switch(e){case L.OK:return f.OK;case L.CANCELLED:return f.CANCELLED;case L.UNKNOWN:return f.UNKNOWN;case L.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case L.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case L.INTERNAL:return f.INTERNAL;case L.UNAVAILABLE:return f.UNAVAILABLE;case L.UNAUTHENTICATED:return f.UNAUTHENTICATED;case L.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case L.NOT_FOUND:return f.NOT_FOUND;case L.ALREADY_EXISTS:return f.ALREADY_EXISTS;case L.PERMISSION_DENIED:return f.PERMISSION_DENIED;case L.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case L.ABORTED:return f.ABORTED;case L.OUT_OF_RANGE:return f.OUT_OF_RANGE;case L.UNIMPLEMENTED:return f.UNIMPLEMENTED;case L.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(C=L||(L={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return yn}static getOrCreateInstance(){return yn===null&&(yn=new $i),yn}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let yn=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=new re([4294967295,4294967295],0);function Hs(e){const t=Td().encode(e),n=new Ih;return n.update(t),new Uint8Array(n.digest())}function Gs(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new re([n,r],0),new re([i,s],0)]}class qi{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Re(`Invalid padding: ${n}`);if(r<0)throw new Re(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Re(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Re(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*t.length-n,this.Ae=re.fromNumber(this.de)}Re(t,n,r){let i=t.add(n.multiply(re.fromNumber(r)));return i.compare(vd)===1&&(i=new re([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const n=Hs(t),[r,i]=Gs(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new qi(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const n=Hs(t),[r,i]=Gs(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Re extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,un.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new ur(w.min(),i,new O(V),Pt(),S())}}class un{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new un(r,n,S(),S(),S())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t,n,r,i){this.fe=t,this.removedTargetIds=n,this.key=r,this.ge=i}}class Za{constructor(t,n){this.targetId=t,this.pe=n}}class tu{constructor(t,n,r=rt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ws{constructor(){this.ye=0,this.we=Xs(),this.Se=rt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=S(),n=S(),r=S();return this.we.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:I()}}),new un(this.Se,this.be,t,n,r)}xe(){this.De=!1,this.we=Xs()}Oe(t,n){this.De=!0,this.we=this.we.insert(t,n)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class Id{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=Pt(),this.$e=Qs(),this.Ue=new O(V)}We(t){for(const n of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(n,t.ge):this.ze(n,t.key,t.ge);for(const n of t.removedTargetIds)this.ze(n,t.key,t.ge)}je(t){this.forEachTarget(t,n=>{const r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(t){var n,r;const i=t.targetId,s=t.pe.count,o=this.Xe(i);if(o){const a=o.target;if(ti(a))if(s===0){const u=new T(a.path);this.ze(i,u,Y.newNoDocument(u,w.min()))}else M(s===1);else{const u=this.et(i);if(u!==s){const c=this.tt(t,u);if(c.status!==0){this.Ye(i);const l=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,l)}(n=$i.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,m,v){var R,E,k,B,H,ot;const Tt={localCacheCount:m,existenceFilterCount:v.count},at=v.unchangedNames;return at&&(Tt.bloomFilter={applied:h===0,hashCount:(R=at==null?void 0:at.hashCount)!==null&&R!==void 0?R:0,bitmapLength:(B=(k=(E=at==null?void 0:at.bits)===null||E===void 0?void 0:E.bitmap)===null||k===void 0?void 0:k.length)!==null&&B!==void 0?B:0,padding:(ot=(H=at==null?void 0:at.bits)===null||H===void 0?void 0:H.padding)!==null&&ot!==void 0?ot:0},d&&(Tt.bloomFilter.mightContain=d)),Tt}(c.status,(r=c.nt)!==null&&r!==void 0?r:null,u,t.pe))}}}}tt(t,n){const{unchangedNames:r,count:i}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let u,c;try{u=Ht(s).toUint8Array()}catch(h){if(h instanceof Da)return ae("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new qi(u,o,a)}catch(h){return ae(h instanceof Re?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const l=h=>{const d=this.qe.rt();return c.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return c.de===0?{status:1}:{status:i===n-this.it(t.targetId,l)?0:2,nt:l}}it(t,n){const r=this.qe.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(t,s,null),i++)}),i}st(t){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&ti(a.target)){const u=new T(a.target.path);this.Ke.get(u)!==null||this.ot(o,u)||this.ze(o,u,Y.newNoDocument(u,t))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=S();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Xe(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(t));const i=new ur(t,n,this.Ue,this.Ke,r);return this.Ke=Pt(),this.$e=Qs(),this.Ue=new O(V),i}Ge(t,n){if(!this.Je(t))return;const r=this.ot(t,n.key)?2:0;this.He(t).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;const i=this.He(t);this.ot(t,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(t)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(t){this.Qe.delete(t)}et(t){const n=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let n=this.Qe.get(t);return n||(n=new Ws,this.Qe.set(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new nt(V),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||_("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.Qe.get(t);return n&&n.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new Ws),this.qe.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ot(t,n){return this.qe.getRemoteKeysForTarget(t).has(n)}}function Qs(){return new O(T.comparator)}function Xs(){return new O(T.comparator)}const Ad=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),wd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Rd=(()=>({and:"AND",or:"OR"}))();class Pd{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ri(e,t){return e.useProto3Json||nr(t)?t:{value:t}}function Ln(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function eu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Sd(e,t){return Ln(e,t.toTimestamp())}function _t(e){return M(!!e),w.fromTimestamp(function(n){const r=kt(n);return new $(r.seconds,r.nanos)}(e))}function zi(e,t){return function(r){return new x(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function nu(e){const t=x.fromString(e);return M(ou(t)),t}function ii(e,t){return zi(e.databaseId,t.path)}function Vr(e,t){const n=nu(t);if(n.get(1)!==e.databaseId.projectId)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new T(ru(n))}function si(e,t){return zi(e.databaseId,t)}function Cd(e){const t=nu(e);return t.length===4?x.emptyPath():ru(t)}function oi(e){return new x(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ru(e){return M(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Js(e,t,n){return{name:ii(e,t),fields:n.value.mapValue.fields}}function Vd(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(c,l){return c.useProto3Json?(M(l===void 0||typeof l=="string"),rt.fromBase64String(l||"")):(M(l===void 0||l instanceof Uint8Array),rt.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const l=c.code===void 0?f.UNKNOWN:Ya(c.code);return new y(l,c.message||"")}(o);n=new tu(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vr(e,r.document.name),s=_t(r.document.updateTime),o=r.document.createTime?_t(r.document.createTime):w.min(),a=new st({mapValue:{fields:r.document.fields}}),u=Y.newFoundDocument(i,s,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new In(c,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Vr(e,r.document),s=r.readTime?_t(r.readTime):w.min(),o=Y.newNoDocument(i,s),a=r.removedTargetIds||[];n=new In([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Vr(e,r.document),s=r.removedTargetIds||[];n=new In([],s,i,null)}else{if(!("filter"in t))return I();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new yd(i,s),a=r.targetId;n=new Za(a,o)}}return n}function Dd(e,t){let n;if(t instanceof an)n={update:Js(e,t.key,t.value)};else if(t instanceof Ja)n={delete:ii(e,t.key)};else if(t instanceof Ot)n={update:Js(e,t.key,t.data),updateMask:Ud(t.fieldMask)};else{if(!(t instanceof pd))return I();n={verify:ii(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof On)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof He)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ge)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Fn)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw I()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Sd(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:I()}(e,t.precondition)),n}function bd(e,t){return e&&e.length>0?(M(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?_t(i.updateTime):_t(s);return o.isEqual(w.min())&&(o=_t(s)),new dd(o,i.transformResults||[])}(n,t))):[]}function kd(e,t){return{documents:[si(e,t.path)]}}function Nd(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=si(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=si(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return su(Et.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Yt(h.field),direction:Od(h.dir)}}(c))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=ri(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Md(e){let t=Cd(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){M(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];n.where&&(s=function(h){const d=iu(h);return d instanceof Et&&Ma(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new Ve(Zt(v.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,nr(d)?null:d}(n.limit));let u=null;n.startAt&&(u=function(h){const d=!!h.before,m=h.values||[];return new xn(m,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,m=h.values||[];return new xn(m,d)}(n.endAt)),Jh(t,i,o,s,a,"F",u,c)}function xd(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return I()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function iu(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Zt(n.unaryFilter.field);return j.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Zt(n.unaryFilter.field);return j.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Zt(n.unaryFilter.field);return j.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zt(n.unaryFilter.field);return j.create(o,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(e):e.fieldFilter!==void 0?function(n){return j.create(Zt(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Et.create(n.compositeFilter.filters.map(r=>iu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return I()}}(n.compositeFilter.op))}(e):I()}function Od(e){return Ad[e]}function Fd(e){return wd[e]}function Ld(e){return Rd[e]}function Yt(e){return{fieldPath:e.canonicalString()}}function Zt(e){return Z.fromServerFormat(e.fieldPath)}function su(e){return e instanceof j?function(n){if(n.op==="=="){if(Fs(n.value))return{unaryFilter:{field:Yt(n.field),op:"IS_NAN"}};if(Os(n.value))return{unaryFilter:{field:Yt(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Fs(n.value))return{unaryFilter:{field:Yt(n.field),op:"IS_NOT_NAN"}};if(Os(n.value))return{unaryFilter:{field:Yt(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yt(n.field),op:Fd(n.op),value:n.value}}}(e):e instanceof Et?function(n){const r=n.getFilters().map(i=>su(i));return r.length===1?r[0]:{compositeFilter:{op:Ld(n.op),filters:r}}}(e):I()}function Ud(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function ou(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,n,r,i,s=w.min(),o=w.min(),a=rt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new St(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t){this.ct=t}}function jd(e){const t=Md({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ei(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(){this.sn=new qd}addToCollectionParentIndex(t,n){return this.sn.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n){return p.resolve(null)}getIndexType(t,n){return p.resolve(0)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,n){return p.resolve(bt.min())}getMinOffsetFromCollectionGroup(t,n){return p.resolve(bt.min())}updateCollectionGroup(t,n,r){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class qd{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new nt(x.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new nt(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new he(0)}static On(){return new he(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(){this.changes=new ye(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Y.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?p.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&be(r.mutation,i,ut.empty(),$.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,S()).next(()=>r))}getLocalViewOfDocuments(t,n,r=S()){const i=Bt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=we();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Bt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,S()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Pt();const o=De(),a=function(){return De()}();return n.forEach((u,c)=>{const l=r.get(c.key);i.has(c.key)&&(l===void 0||l.mutation instanceof Ot)?s=s.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),be(l.mutation,c,l.mutation.getFieldMask(),$.now())):o.set(c.key,ut.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((c,l)=>o.set(c,l)),n.forEach((c,l)=>{var h;return a.set(c,new Kd(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=De();let i=new O((o,a)=>o-a),s=S();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let l=r.get(u)||ut.empty();l=a.applyToLocalView(c,l),r.set(u,l);const h=(i.get(a.batchId)||S()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=$a();l.forEach(d=>{if(!s.has(d)){const m=Qa(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return p.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(s){return T.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):td(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):p.resolve(Bt());let a=-1,u=s;return o.next(c=>p.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?p.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{u=u.insert(l,d)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,u,c,S())).next(l=>({batchId:a,changes:ja(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new T(n)).next(r=>{let i=we();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=we();return this.indexManager.getCollectionParents(t,i).next(o=>p.forEach(o,a=>{const u=function(l,h){return new rr(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,r).next(c=>{c.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,u)=>{const c=u.getKey();s.get(c)===null&&(s=s.insert(c,Y.newInvalidDocument(c)))});let o=we();return s.forEach((a,u)=>{const c=i.get(a);c!==void 0&&be(c.mutation,u,ut.empty(),$.now()),sr(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,n){return p.resolve(this.ar.get(n))}saveBundleMetadata(t,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:_t(i.createTime)}}(n)),p.resolve()}getNamedQuery(t,n){return p.resolve(this.ur.get(n))}saveNamedQuery(t,n){return this.ur.set(n.name,function(i){return{name:i.name,query:jd(i.bundledQuery),readTime:_t(i.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(){this.overlays=new O(T.comparator),this.cr=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Bt();return p.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),p.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),p.resolve()}getOverlaysForCollection(t,n,r){const i=Bt(),s=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return p.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new O((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let l=s.get(c.largestBatchId);l===null&&(l=Bt(),s=s.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=Bt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=i)););return p.resolve(a)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _d(n,r));let s=this.cr.get(n);s===void 0&&(s=S(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.lr=new nt(q.hr),this.Pr=new nt(q.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,n){const r=new q(t,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Er(new q(t,n))}dr(t,n){t.forEach(r=>this.removeReference(r,n))}Ar(t){const n=new T(new x([])),r=new q(n,t),i=new q(n,t+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const n=new T(new x([])),r=new q(n,t),i=new q(n,t+1);let s=S();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new q(t,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class q{constructor(t,n){this.key=t,this.mr=n}static hr(t,n){return T.comparator(t.key,n.key)||V(t.mr,n.mr)}static Ir(t,n){return V(t.mr,n.mr)||T.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new nt(q.hr)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gd(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new q(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return p.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new q(n,0),i=new q(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),p.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new nt(V);return n.forEach(i=>{const s=new q(i,0),o=new q(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),p.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;T.isDocumentKey(s)||(s=s.child(""));const o=new q(new T(s),0);let a=new nt(V);return this.pr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.mr)),!0)},o),p.resolve(this.Sr(a))}Sr(t){const n=[];return t.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){M(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return p.forEach(n.mutations,i=>{const s=new q(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,n){const r=new q(n,0),i=this.pr.firstAfterOrEqual(r);return p.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}br(t,n){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const n=this.wr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t){this.Dr=t,this.docs=function(){return new O(T.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return p.resolve(r?r.document.mutableCopy():Y.newInvalidDocument(n))}getEntries(t,n){let r=Pt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Y.newInvalidDocument(i))}),p.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Pt();const o=n.path,a=new T(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Mh(Nh(l),r)<=0||(i.has(l.key)||sr(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return p.resolve(s)}getAllFromCollectionGroup(t,n,r,i){I()}vr(t,n){return p.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Jd(this)}getSize(t){return p.resolve(this.size)}}class Jd extends zd{constructor(t){super(),this.sr=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(t,i)):this.sr.removeEntry(r)}),p.waitFor(n)}getFromCache(t,n){return this.sr.getEntry(t,n)}getAllFromCache(t,n){return this.sr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t){this.persistence=t,this.Cr=new ye(n=>Li(n),Ui),this.lastRemoteSnapshotVersion=w.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Ki,this.targetCount=0,this.Or=he.xn()}forEachTarget(t,n){return this.Cr.forEach((r,i)=>n(i)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),p.resolve()}Ln(t){this.Cr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Or=new he(n),this.highestTargetId=n),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,n){return this.Ln(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.Ln(n),p.resolve()}removeTargetData(t,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),p.waitFor(s).next(()=>i)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cr.get(n)||null;return p.resolve(r)}addMatchingKeys(t,n,r){return this.Mr.Tr(n,r),p.resolve()}removeMatchingKeys(t,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),p.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Mr.Ar(n),p.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Mr.Vr(n);return p.resolve(r)}containsKey(t,n){return p.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t,n){this.Nr={},this.overlays={},this.Br=new Mi(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new Yd(this),this.indexManager=new $d,this.remoteDocumentCache=function(i){return new Xd(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new Bd(n),this.Qr=new Gd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Wd,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Nr[t.toKey()];return r||(r=new Qd(n,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,n,r){_("MemoryPersistence","Starting transaction:",t);const i=new tf(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(t,n){return p.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,n)))}}class tf extends Oh{constructor(t){super(),this.currentSequenceNumber=t}}class Hi{constructor(t){this.persistence=t,this.Wr=new Ki,this.Gr=null}static zr(t){return new Hi(t)}get jr(){if(this.Gr)return this.Gr;throw I()}addReference(t,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),p.resolve()}removeReference(t,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.jr.add(n.toString()),p.resolve()}removeTarget(t,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Kr(){this.Gr=new Set}$r(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.jr,r=>{const i=T.fromPath(r);return this.Hr(t,i).next(s=>{s||n.removeEntry(i,w.min())})}).next(()=>(this.Gr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hr(t,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(t){return 0}Hr(t,n){return p.or([()=>p.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ur(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Li=r,this.ki=i}static qi(t,n){let r=S(),i=S();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Gi(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.Qi=!1}initialize(t,n){this.Ki=t,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(t,n,r,i){return this.$i(t,n).next(s=>s||this.Ui(t,n,i,r)).next(s=>s||this.Wi(t,n))}$i(t,n){if(js(n))return p.resolve(null);let r=Rt(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ei(n,null,"F"),r=Rt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=S(...s);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Gi(n,a);return this.zi(n,c,o,u.readTime)?this.$i(t,ei(n,null,"F")):this.ji(t,c,n,u)}))})))}Ui(t,n,r,i){return js(n)||i.isEqual(w.min())?this.Wi(t,n):this.Ki.getDocuments(t,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(t,n):(ks()<=D.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ni(n)),this.ji(t,o,n,kh(i,-1)))})}Gi(t,n){let r=new nt(Ua(t));return n.forEach((i,s)=>{sr(t,s)&&(r=r.add(s))}),r}zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(t,n){return ks()<=D.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",ni(n)),this.Ki.getDocumentsMatchingQuery(t,n,bt.min())}ji(t,n,r,i){return this.Ki.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t,n,r,i){this.persistence=t,this.Hi=n,this.serializer=i,this.Ji=new O(V),this.Yi=new ye(s=>Li(s),Ui),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Hd(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function rf(e,t,n,r){return new nf(e,t,n,r)}async function au(e,t){const n=P(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=S();for(const c of i){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of s){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return n.localDocuments.getDocuments(r,u).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function sf(e,t){const n=P(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,u,c,l){const h=c.batch,d=h.keys();let m=p.resolve();return d.forEach(v=>{m=m.next(()=>l.getEntry(u,v)).next(R=>{const E=c.docVersions.get(v);M(E!==null),R.version.compareTo(E)<0&&(h.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),l.addEntry(R)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=S();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function uu(e){const t=P(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.kr.getLastRemoteSnapshotVersion(n))}function of(e,t){const n=P(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];t.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,l.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(rt.EMPTY_BYTE_STRING,w.min()).withLastLimboFreeSnapshotVersion(w.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,r)),i=i.insert(h,m),function(R,E,k){return R.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,m,l)&&a.push(n.kr.updateTargetData(s,m))});let u=Pt(),c=S();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(af(s,o,t.documentUpdates).next(l=>{u=l.ns,c=l.rs})),!r.isEqual(w.min())){const l=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return p.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ji=i,s))}function af(e,t,n){let r=S(),i=S();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Pt();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(w.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{ns:o,rs:i}})}function uf(e,t){const n=P(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function cf(e,t){const n=P(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,t).next(s=>s?(i=s,p.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new St(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(t,r.targetId)),r})}async function ai(e,t,n){const r=P(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!on(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Ys(e,t,n){const r=P(e);let i=w.min(),s=S();return r.persistence.runTransaction("Execute query","readonly",o=>function(u,c,l){const h=P(u),d=h.Yi.get(l);return d!==void 0?p.resolve(h.Ji.get(d)):h.kr.getTargetData(c,l)}(r,o,Rt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,n?i:w.min(),n?s:S())).next(a=>(lf(r,ed(t),a),{documents:a,ss:s})))}function lf(e,t,n){let r=e.Zi.get(t)||w.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Zi.set(t,r)}class Zs{constructor(){this.activeTargetIds=ad()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class hf{constructor(){this.Hs=new Zs,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,n,r){this.Js[t]=n}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Zs,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{Ys(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let En=null;function Dr(){return En===null?En=function(){return 268435456+Math.round(2147483648*Math.random())}():En++,"0x"+En.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X="WebChannelConnection";class pf extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=Dr(),u=this.mo(n,r);_("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,s,o),this.po(n,u,c,i).then(l=>(_("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw ae("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",u,"request:",i),l})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_e}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=ff[n];return`${this.To}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,n,r,i){const s=Dr();return new Promise((o,a)=>{const u=new vh;u.setWithCredentials(!0),u.listenOnce(yh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Cr.NO_ERROR:const l=u.getResponseJson();_(X,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case Cr.TIMEOUT:_(X,`RPC '${t}' ${s} timed out`),a(new y(f.DEADLINE_EXCEEDED,"Request time out"));break;case Cr.HTTP_ERROR:const h=u.getStatus();if(_(X,`RPC '${t}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const v=function(E){const k=E.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(k)>=0?k:f.UNKNOWN}(m.status);a(new y(v,m.message))}else a(new y(f.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new y(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{_(X,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);_(X,`RPC '${t}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}wo(t,n,r){const i=Dr(),s=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=gh(),a=_h(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new Th({})),this.fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const l=s.join("");_(X,`Creating RPC '${t}' stream ${i}: ${l}`,u);const h=o.createWebChannel(l,u);let d=!1,m=!1;const v=new mf({so:E=>{m?_(X,`Not sending because RPC '${t}' stream ${i} is closed:`,E):(d||(_(X,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),_(X,`RPC '${t}' stream ${i} sending:`,E),h.send(E))},oo:()=>h.close()}),R=(E,k,B)=>{E.listen(k,H=>{try{B(H)}catch(ot){setTimeout(()=>{throw ot},0)}})};return R(h,pn.EventType.OPEN,()=>{m||_(X,`RPC '${t}' stream ${i} transport opened.`)}),R(h,pn.EventType.CLOSE,()=>{m||(m=!0,_(X,`RPC '${t}' stream ${i} transport closed`),v.Po())}),R(h,pn.EventType.ERROR,E=>{m||(m=!0,ae(X,`RPC '${t}' stream ${i} transport errored:`,E),v.Po(new y(f.UNAVAILABLE,"The operation could not be completed")))}),R(h,pn.EventType.MESSAGE,E=>{var k;if(!m){const B=E.data[0];M(!!B);const H=B,ot=H.error||((k=H[0])===null||k===void 0?void 0:k.error);if(ot){_(X,`RPC '${t}' stream ${i} received error:`,ot);const Tt=ot.status;let at=function(Bu){const us=L[Bu];if(us!==void 0)return Ya(us)}(Tt),as=ot.message;at===void 0&&(at=f.INTERNAL,as="Unknown error status: "+Tt+" with message "+ot.message),m=!0,v.Po(new y(at,as)),h.close()}else _(X,`RPC '${t}' stream ${i} received:`,B),v.Io(B)}}),R(a,Eh.STAT_EVENT,E=>{E.stat===Ds.PROXY?_(X,`RPC '${t}' stream ${i} detected buffering proxy`):E.stat===Ds.NOPROXY&&_(X,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.ho()},0),v}}function br(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(e){return new Pd(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),t())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t,n,r,i,s,o,a,u){this.ii=t,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new cu(t,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,t!==4?this.Ko.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(wt(n.toString()),wt("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{t(()=>{const i=new y(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(t,n){const r=this.Xo(this.ko);this.stream=this.n_(t,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.ko===t?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gf extends lu{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Ko.reset();const n=Vd(this.serializer,t),r=function(s){if(!("targetChange"in s))return w.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?w.min():o.readTime?_t(o.readTime):w.min()}(t);return this.listener.r_(n,r)}i_(t){const n={};n.database=oi(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=ti(u)?{documents:kd(s,u)}:{query:Nd(s,u)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=eu(s,o.resumeToken);const c=ri(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(w.min())>0){a.readTime=Ln(s,o.snapshotVersion.toTimestamp());const c=ri(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=xd(this.serializer,t);r&&(n.labels=r),this.Ho(n)}s_(t){const n={};n.database=oi(this.serializer),n.removeTarget=t,this.Ho(n)}}class _f extends lu{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(M(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const n=bd(t.writeResults,t.commitTime),r=_t(t.commitTime);return this.listener.u_(r,n)}return M(!t.writeResults||t.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=oi(this.serializer),this.Ho(t)}a_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Dd(this.serializer,r))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(f.UNKNOWN,i.toString())})}yo(t,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(f.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class Ef{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(t){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,t==="Online"&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(wt(n),this.d_=!1):_("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Xt(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=P(u);c.y_.add(4),await cn(c),c.b_.set("Unknown"),c.y_.delete(4),await lr(c)}(this))})}),this.b_=new Ef(r,i)}}async function lr(e){if(Xt(e))for(const t of e.w_)await t(!0)}async function cn(e){for(const t of e.w_)await t(!1)}function hu(e,t){const n=P(e);n.p_.has(t.targetId)||(n.p_.set(t.targetId,t),Xi(n)?Qi(n):Ee(n).Uo()&&Wi(n,t))}function du(e,t){const n=P(e),r=Ee(n);n.p_.delete(t),r.Uo()&&fu(n,t),n.p_.size===0&&(r.Uo()?r.zo():Xt(n)&&n.b_.set("Unknown"))}function Wi(e,t){if(e.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(w.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ee(e).i_(t)}function fu(e,t){e.D_.Be(t),Ee(e).s_(t)}function Qi(e){e.D_=new Id({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.p_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),Ee(e).start(),e.b_.A_()}function Xi(e){return Xt(e)&&!Ee(e).$o()&&e.p_.size>0}function Xt(e){return P(e).y_.size===0}function mu(e){e.D_=void 0}async function vf(e){e.p_.forEach((t,n)=>{Wi(e,t)})}async function If(e,t){mu(e),Xi(e)?(e.b_.m_(t),Qi(e)):e.b_.set("Unknown")}async function Af(e,t,n){if(e.b_.set("Online"),t instanceof tu&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(e,t)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Un(e,r)}else if(t instanceof In?e.D_.We(t):t instanceof Za?e.D_.Ze(t):e.D_.je(t),!n.isEqual(w.min()))try{const r=await uu(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=s.p_.get(c);l&&s.p_.set(c,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const l=s.p_.get(u);if(!l)return;s.p_.set(u,l.withResumeToken(rt.EMPTY_BYTE_STRING,l.snapshotVersion)),fu(s,u);const h=new St(l.target,u,c,l.sequenceNumber);Wi(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await Un(e,r)}}async function Un(e,t,n){if(!on(t))throw t;e.y_.add(1),await cn(e),e.b_.set("Offline"),n||(n=()=>uu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),e.y_.delete(1),await lr(e)})}function pu(e,t){return t().catch(n=>Un(e,n,t))}async function hr(e){const t=P(e),n=Nt(t);let r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;wf(t);)try{const i=await uf(t.localStore,r);if(i===null){t.g_.length===0&&n.zo();break}r=i.batchId,Rf(t,i)}catch(i){await Un(t,i)}gu(t)&&_u(t)}function wf(e){return Xt(e)&&e.g_.length<10}function Rf(e,t){e.g_.push(t);const n=Nt(e);n.Uo()&&n.__&&n.a_(t.mutations)}function gu(e){return Xt(e)&&!Nt(e).$o()&&e.g_.length>0}function _u(e){Nt(e).start()}async function Pf(e){Nt(e).l_()}async function Sf(e){const t=Nt(e);for(const n of e.g_)t.a_(n.mutations)}async function Cf(e,t,n){const r=e.g_.shift(),i=ji.from(r,t,n);await pu(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await hr(e)}async function Vf(e,t){t&&Nt(e).__&&await async function(r,i){if(function(o){return Ed(o)&&o!==f.ABORTED}(i.code)){const s=r.g_.shift();Nt(r).Go(),await pu(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await hr(r)}}(e,t),gu(e)&&_u(e)}async function eo(e,t){const n=P(e);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=Xt(n);n.y_.add(3),await cn(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.y_.delete(3),await lr(n)}async function Df(e,t){const n=P(e);t?(n.y_.delete(2),await lr(n)):t||(n.y_.add(2),await cn(n),n.b_.set("Unknown"))}function Ee(e){return e.v_||(e.v_=function(n,r,i){const s=P(n);return s.P_(),new gf(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{_o:vf.bind(null,e),uo:If.bind(null,e),r_:Af.bind(null,e)}),e.w_.push(async t=>{t?(e.v_.Go(),Xi(e)?Qi(e):e.b_.set("Unknown")):(await e.v_.stop(),mu(e))})),e.v_}function Nt(e){return e.C_||(e.C_=function(n,r,i){const s=P(n);return s.P_(),new _f(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{_o:Pf.bind(null,e),uo:Vf.bind(null,e),c_:Sf.bind(null,e),u_:Cf.bind(null,e)}),e.w_.push(async t=>{t?(e.C_.Go(),await hr(e)):(await e.C_.stop(),e.g_.length>0&&(_("RemoteStore",`Stopping write stream with ${e.g_.length} pending writes`),e.g_=[]))})),e.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Ji(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yi(e,t){if(wt("AsyncQueue",`${t}: ${e}`),on(e))return new y(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t){this.comparator=t?(n,r)=>t(n,r)||T.comparator(n.key,r.key):(n,r)=>T.comparator(n.key,r.key),this.keyedMap=we(),this.sortedSet=new O(this.comparator)}static emptySet(t){return new se(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof se)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new se;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.F_=new O(T.comparator)}track(t){const n=t.doc.key,r=this.F_.get(n);r?t.type!==0&&r.type===3?this.F_=this.F_.insert(n,t):t.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.F_=this.F_.remove(n):t.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):I():this.F_=this.F_.insert(n,t)}M_(){const t=[];return this.F_.inorderTraversal((n,r)=>{t.push(r)}),t}}class de{constructor(t,n,r,i,s,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new de(t,n,se.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ir(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.x_=void 0,this.listeners=[]}}class kf{constructor(){this.queries=new ye(t=>La(t),ir),this.onlineState="Unknown",this.O_=new Set}}async function Nf(e,t){const n=P(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new bf),i)try{s.x_=await n.onListen(r)}catch(o){const a=Yi(o,`Initialization of query '${ni(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.N_(n.onlineState),s.x_&&t.B_(s.x_)&&Zi(n)}async function Mf(e,t){const n=P(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function xf(e,t){const n=P(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&Zi(n)}function Of(e,t,n){const r=P(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Zi(e){e.O_.forEach(t=>{t.next()})}class Ff{constructor(t,n,r){this.query=t,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new de(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),n=!0):this.K_(t,this.onlineState)&&(this.U_(t),n=!0),this.q_=t,n}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),n=!0),n}K_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Q_(t){if(t.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(t){t=de.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(t){this.key=t}}class Eu{constructor(t){this.key=t}}class Lf{constructor(t,n){this.query=t,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=S(),this.mutatedKeys=S(),this.na=Ua(t),this.ra=new se(this.na)}get ia(){return this.X_}sa(t,n){const r=n?n.oa:new no,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const d=i.get(l),m=sr(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),R=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;d&&m?d.data.isEqual(m.data)?v!==R&&(r.track({type:3,doc:m}),E=!0):this._a(d,m)||(r.track({type:2,doc:m}),E=!0,(u&&this.na(m,u)>0||c&&this.na(m,c)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),E=!0):d&&!m&&(r.track({type:1,doc:d}),E=!0,(u||c)&&(a=!0)),E&&(m?(o=o.add(m),s=R?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;const s=t.oa.M_();s.sort((c,l)=>function(d,m){const v=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return v(d)-v(m)}(c.type,l.type)||this.na(c.doc,l.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,u=a!==this.ea;return this.ea=a,s.length!==0||u?{snapshot:new de(this.query,t.ra,i,s,t.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new no,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=t.current)}ua(){if(!this.current)return[];const t=this.ta;this.ta=S(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return t.forEach(r=>{this.ta.has(r)||n.push(new Eu(r))}),this.ta.forEach(r=>{t.has(r)||n.push(new yu(r))}),n}ha(t){this.X_=t.ss,this.ta=S();const n=this.sa(t.documents);return this.applyChanges(n,!0)}Pa(){return de.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class Uf{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Bf{constructor(t){this.key=t,this.Ia=!1}}class jf{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new ye(a=>La(a),ir),this.da=new Map,this.Aa=new Set,this.Ra=new O(T.comparator),this.Va=new Map,this.ma=new Ki,this.fa={},this.ga=new Map,this.pa=he.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function $f(e,t){const n=Yf(e);let r,i;const s=n.Ea.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await cf(n.localStore,Rt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await qf(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&hu(n.remoteStore,o)}return i}async function qf(e,t,n,r,i){e.wa=(h,d,m)=>async function(R,E,k,B){let H=E.view.sa(k);H.zi&&(H=await Ys(R.localStore,E.query,!1).then(({documents:at})=>E.view.sa(at,H)));const ot=B&&B.targetChanges.get(E.targetId),Tt=E.view.applyChanges(H,R.isPrimaryClient,ot);return io(R,E.targetId,Tt.ca),Tt.snapshot}(e,h,d,m);const s=await Ys(e.localStore,t,!0),o=new Lf(t,s.ss),a=o.sa(s.documents),u=un.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),c=o.applyChanges(a,e.isPrimaryClient,u);io(e,n,c.ca);const l=new Uf(t,n,o);return e.Ea.set(t,l),e.da.has(n)?e.da.get(n).push(t):e.da.set(n,[t]),c.snapshot}async function zf(e,t){const n=P(e),r=n.Ea.get(t),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!ir(s,t))),void n.Ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ai(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),du(n.remoteStore,r.targetId),ui(n,r.targetId)}).catch(sn)):(ui(n,r.targetId),await ai(n.localStore,r.targetId,!0))}async function Kf(e,t,n){const r=Zf(e);try{const i=await function(o,a){const u=P(o),c=$.now(),l=a.reduce((m,v)=>m.add(v.key),S());let h,d;return u.persistence.runTransaction("Locally write mutations","readwrite",m=>{let v=Pt(),R=S();return u.Xi.getEntries(m,l).next(E=>{v=E,v.forEach((k,B)=>{B.isValidDocument()||(R=R.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(m,v)).next(E=>{h=E;const k=[];for(const B of a){const H=md(B,h.get(B.key).overlayedDocument);H!=null&&k.push(new Ot(B.key,H,ba(H.value.mapValue),gt.exists(!0)))}return u.mutationQueue.addMutationBatch(m,c,k,a)}).next(E=>{d=E;const k=E.applyToLocalDocumentSet(h,R);return u.documentOverlayCache.saveOverlays(m,E.batchId,k)})}).then(()=>({batchId:d.batchId,changes:ja(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.fa[o.currentUser.toKey()];c||(c=new O(V)),c=c.insert(a,u),o.fa[o.currentUser.toKey()]=c}(r,i.batchId,n),await ln(r,i.changes),await hr(r.remoteStore)}catch(i){const s=Yi(i,"Failed to persist write");n.reject(s)}}async function Tu(e,t){const n=P(e);try{const r=await of(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(M(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?M(o.Ia):i.removedDocuments.size>0&&(M(o.Ia),o.Ia=!1))}),await ln(n,r,t)}catch(r){await sn(r)}}function ro(e,t,n){const r=P(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=P(o);u.onlineState=a;let c=!1;u.queries.forEach((l,h)=>{for(const d of h.listeners)d.N_(a)&&(c=!0)}),c&&Zi(u)}(r.eventManager,t),i.length&&r.Ta.r_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Hf(e,t,n){const r=P(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Va.get(t),s=i&&i.key;if(s){let o=new O(T.comparator);o=o.insert(s,Y.newNoDocument(s,w.min()));const a=S().add(s),u=new ur(w.min(),new Map,new O(V),o,a);await Tu(r,u),r.Ra=r.Ra.remove(s),r.Va.delete(t),ts(r)}else await ai(r.localStore,t,!1).then(()=>ui(r,t,n)).catch(sn)}async function Gf(e,t){const n=P(e),r=t.batch.batchId;try{const i=await sf(n.localStore,t);Iu(n,r,null),vu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ln(n,i)}catch(i){await sn(i)}}async function Wf(e,t,n){const r=P(e);try{const i=await function(o,a){const u=P(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return u.mutationQueue.lookupMutationBatch(c,a).next(h=>(M(h!==null),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>u.localDocuments.getDocuments(c,l))})}(r.localStore,t);Iu(r,t,n),vu(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ln(r,i)}catch(i){await sn(i)}}function vu(e,t){(e.ga.get(t)||[]).forEach(n=>{n.resolve()}),e.ga.delete(t)}function Iu(e,t,n){const r=P(e);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.fa[r.currentUser.toKey()]=i}}function ui(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.da.get(t))e.Ea.delete(r),n&&e.Ta.Sa(r,n);e.da.delete(t),e.isPrimaryClient&&e.ma.Ar(t).forEach(r=>{e.ma.containsKey(r)||Au(e,r)})}function Au(e,t){e.Aa.delete(t.path.canonicalString());const n=e.Ra.get(t);n!==null&&(du(e.remoteStore,n),e.Ra=e.Ra.remove(t),e.Va.delete(n),ts(e))}function io(e,t,n){for(const r of n)r instanceof yu?(e.ma.addReference(r.key,t),Qf(e,r)):r instanceof Eu?(_("SyncEngine","Document no longer in limbo: "+r.key),e.ma.removeReference(r.key,t),e.ma.containsKey(r.key)||Au(e,r.key)):I()}function Qf(e,t){const n=t.key,r=n.path.canonicalString();e.Ra.get(n)||e.Aa.has(r)||(_("SyncEngine","New document in limbo: "+n),e.Aa.add(r),ts(e))}function ts(e){for(;e.Aa.size>0&&e.Ra.size<e.maxConcurrentLimboResolutions;){const t=e.Aa.values().next().value;e.Aa.delete(t);const n=new T(x.fromString(t)),r=e.pa.next();e.Va.set(r,new Bf(n)),e.Ra=e.Ra.insert(n,r),hu(e.remoteStore,new St(Rt(Bi(n.path)),r,"TargetPurposeLimboResolution",Mi.ae))}}async function ln(e,t,n){const r=P(e),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,u)=>{o.push(r.wa(u,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const l=Gi.qi(u.targetId,c);s.push(l)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(u,c){const l=P(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(c,d=>p.forEach(d.Li,m=>l.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>p.forEach(d.ki,m=>l.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!on(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const m=l.Ji.get(d),v=m.snapshotVersion,R=m.withLastLimboFreeSnapshotVersion(v);l.Ji=l.Ji.insert(d,R)}}}(r.localStore,s))}async function Xf(e,t){const n=P(e);if(!n.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=await au(n.localStore,t);n.currentUser=t,function(s,o){s.ga.forEach(a=>{a.forEach(u=>{u.reject(new y(f.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ln(n,r.ts)}}function Jf(e,t){const n=P(e),r=n.Va.get(t);if(r&&r.Ia)return S().add(r.key);{let i=S();const s=n.da.get(t);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function Yf(e){const t=P(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Tu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Hf.bind(null,t),t.Ta.r_=xf.bind(null,t.eventManager),t.Ta.Sa=Of.bind(null,t.eventManager),t}function Zf(e){const t=P(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Gf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Wf.bind(null,t),t}class so{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=cr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return rf(this.persistence,new ef,t.initialUser,this.serializer)}createPersistence(t){return new Zd(Hi.zr,this.serializer)}createSharedClientState(t){return new hf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ro(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xf.bind(null,this.syncEngine),await Df(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new kf}()}createDatastore(t){const n=cr(t.databaseInfo.databaseId),r=function(s){return new pf(s)}(t.databaseInfo);return function(s,o,a,u){return new yf(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new Tf(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>ro(this.syncEngine,n,0),function(){return to.v()?new to:new df}())}createSyncEngine(t,n){return function(i,s,o,a,u,c,l){const h=new jf(i,s,o,a,u,c);return l&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=P(n);_("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await cn(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):wt("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=J.UNAUTHENTICATED,this.clientId=Ca.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Yi(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function kr(e,t){e.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await au(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function oo(e,t){e.asyncQueue.verifyOperationInProgress();const n=await im(e);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>eo(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>eo(t.remoteStore,s)),e._onlineComponents=t}function rm(e){return e.name==="FirebaseError"?e.code===f.FAILED_PRECONDITION||e.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function im(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await kr(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!rm(n))throw n;ae("Error using user provided cache. Falling back to memory cache: "+n),await kr(e,new so)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await kr(e,new so);return e._offlineComponents}async function wu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await oo(e,e._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await oo(e,new tm))),e._onlineComponents}function sm(e){return wu(e).then(t=>t.syncEngine)}async function ao(e){const t=await wu(e),n=t.eventManager;return n.onListen=$f.bind(null,t.syncEngine),n.onUnlisten=zf.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(e,t,n){if(!n)throw new y(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function om(e,t,n,r){if(t===!0&&r===!0)throw new y(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function co(e){if(!T.isDocumentKey(e))throw new y(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function lo(e){if(T.isDocumentKey(e))throw new y(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function es(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function qt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=es(e);throw new y(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}om("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ru((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class dr{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ho({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ho(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ah;switch(r.type){case"firstParty":return new Sh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=uo.get(n);r&&(_("ComponentProvider","Removing Datastore"),uo.delete(n),r.terminate())}(this),Promise.resolve()}}function am(e,t,n,r={}){var i;const s=(e=qt(e,dr))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ae("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=J.MOCK_USER;else{a=nc(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new y(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new J(c)}e._authCredentials=new wh(new Sa(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new fr(this.firestore,t,this._query)}}class ct{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ct(this.firestore,t,this._key)}}class Dt extends fr{constructor(t,n,r){super(t,n,Bi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ct(this.firestore,null,new T(t))}withConverter(t){return new Dt(this.firestore,t,this._path)}}function Mm(e,t,...n){if(e=It(e),Pu("collection","path",t),e instanceof dr){const r=x.fromString(t,...n);return lo(r),new Dt(e,null,r)}{if(!(e instanceof ct||e instanceof Dt))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(x.fromString(t,...n));return lo(r),new Dt(e.firestore,null,r)}}function um(e,t,...n){if(e=It(e),arguments.length===1&&(t=Ca.V()),Pu("doc","path",t),e instanceof dr){const r=x.fromString(t,...n);return co(r),new ct(e,null,new T(r))}{if(!(e instanceof ct||e instanceof Dt))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(x.fromString(t,...n));return co(r),new ct(e.firestore,e instanceof Dt?e.converter:null,new T(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new cu(this,"async_queue_retry"),this.Xa=()=>{const n=br();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const t=br();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const n=br();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise(()=>{});const n=new $t;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ga.push(t),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!on(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(t){const n=this.Wa.then(()=>(this.Ja=!0,t().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw wt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(t,n,r){this.eu(),this.Za.indexOf(t)>-1&&(n=0);const i=Ji.createAndSchedule(this,t,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&I()}verifyOperationInProgress(){}async iu(){let t;do t=this.Wa,await t;while(t!==this.Wa)}su(t){for(const n of this.ja)if(n.timerId===t)return!0;return!1}ou(t){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.iu()})}_u(t){this.Za.push(t)}ru(t){const n=this.ja.indexOf(t);this.ja.splice(n,1)}}function fo(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(e,["next","error","complete"])}class We extends dr{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new cm}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cu(this),this._firestoreClient.terminate()}}function lm(e,t){const n=typeof e=="object"?e:ol(),r=typeof e=="string"?e:t||"(default)",i=nl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=tc("firestore");s&&am(i,...s)}return i}function Su(e){return e._firestoreClient||Cu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Cu(e){var t,n,r;const i=e._freezeSettings(),s=function(a,u,c,l){return new Uh(a,u,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Ru(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new nm(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new fe(rt.fromBase64String(t))}catch(n){throw new y(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new fe(rt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return V(this._lat,t._lat)||V(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=/^__.*__$/;class dm{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Ot(t,this.data,this.fieldMask,n,this.fieldTransforms):new an(t,this.data,n,this.fieldTransforms)}}class Vu{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Ot(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Du(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class is{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new is(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.Pu(t),i}Iu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return Bn(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(t.length===0)throw this.Eu("Document fields must not be empty");if(Du(this.uu)&&hm.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class fm{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||cr(t)}Ru(t,n,r,i=!1){return new is({uu:t,methodName:n,Au:r,path:Z.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bu(e){const t=e._freezeSettings(),n=cr(e._databaseId);return new fm(e._databaseId,!!t.ignoreUndefinedProperties,n)}function mm(e,t,n,r,i,s={}){const o=e.Ru(s.merge||s.mergeFields?2:0,t,n,i);ss("Data must be an object, but it was:",o,r);const a=ku(r,o);let u,c;if(s.merge)u=new ut(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=ci(t,h,n);if(!o.contains(d))throw new y(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Mu(l,d)||l.push(d)}u=new ut(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new dm(new st(a),u,c)}class pr extends ns{_toFieldTransform(t){if(t.uu!==2)throw t.uu===1?t.Eu(`${this._methodName}() can only appear at the top level of your update data`):t.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof pr}}function pm(e,t,n,r){const i=e.Ru(1,t,n);ss("Data must be an object, but it was:",i,r);const s=[],o=st.empty();Qt(r,(u,c)=>{const l=os(t,u,n);c=It(c);const h=i.Iu(l);if(c instanceof pr)s.push(l);else{const d=gr(c,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new ut(s);return new Vu(o,a,i.fieldTransforms)}function gm(e,t,n,r,i,s){const o=e.Ru(1,t,n),a=[ci(t,r,n)],u=[i];if(s.length%2!=0)throw new y(f.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(ci(t,s[d])),u.push(s[d+1]);const c=[],l=st.empty();for(let d=a.length-1;d>=0;--d)if(!Mu(c,a[d])){const m=a[d];let v=u[d];v=It(v);const R=o.Iu(m);if(v instanceof pr)c.push(m);else{const E=gr(v,R);E!=null&&(c.push(m),l.set(m,E))}}const h=new ut(c);return new Vu(l,h,o.fieldTransforms)}function gr(e,t){if(Nu(e=It(e)))return ss("Unsupported field value:",t,e),ku(e,t);if(e instanceof ns)return function(r,i){if(!Du(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.hu&&t.uu!==4)throw t.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=gr(a,i.Tu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=It(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ud(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=$.fromDate(r);return{timestampValue:Ln(i.serializer,s)}}if(r instanceof $){const s=new $(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ln(i.serializer,s)}}if(r instanceof rs)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fe)return{bytesValue:eu(i.serializer,r._byteString)};if(r instanceof ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:zi(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${es(r)}`)}(e,t)}function ku(e,t){const n={};return Va(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Qt(e,(r,i)=>{const s=gr(i,t.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Nu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof $||e instanceof rs||e instanceof fe||e instanceof ct||e instanceof ns)}function ss(e,t,n){if(!Nu(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=es(n);throw r==="an object"?t.Eu(e+" a custom object"):t.Eu(e+" "+r)}}function ci(e,t,n){if((t=It(t))instanceof mr)return t._internalPath;if(typeof t=="string")return os(e,t);throw Bn("Field path arguments must be of type string or ",e,!1,void 0,n)}const _m=new RegExp("[~\\*/\\[\\]]");function os(e,t,n){if(t.search(_m)>=0)throw Bn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new mr(...t.split("."))._internalPath}catch{throw Bn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Bn(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new y(f.INVALID_ARGUMENT,a+e+u)}function Mu(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ym(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Ou("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ym extends xu{data(){return super.data()}}function Ou(e,t){return typeof t=="string"?os(e,t):t instanceof mr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new y(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tm{convertValue(t,n="none"){switch(Gt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return U(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ht(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Qt(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new rs(U(t.latitude),U(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Oi(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qe(t));default:return null}}convertTimestamp(t){const n=kt(t);return new $(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=x.fromString(t);M(ou(r));const i=new ze(r.get(1),r.get(3)),s=new T(r.popFirst(5));return i.isEqual(n)||wt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Fu extends xu{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new An(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Ou("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class An extends Fu{data(t={}){return super.data(t)}}class Im{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Pe(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new An(this._firestore,this._userDataWriter,r.key,r,new Pe(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new An(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Pe(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new An(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Pe(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,l=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Am(a.type),doc:u,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Am(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}class Lu extends Tm{constructor(t){super(),this.firestore=t}convertBytes(t){return new fe(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function xm(e,t,n,...r){e=qt(e,ct);const i=qt(e.firestore,We),s=bu(i);let o;return o=typeof(t=It(t))=="string"||t instanceof mr?gm(s,"updateDoc",e._key,t,n,r):pm(s,"updateDoc",e._key,t),Uu(i,[o.toMutation(e._key,gt.exists(!0))])}function Om(e,t){const n=qt(e.firestore,We),r=um(e),i=vm(e.converter,t);return Uu(n,[mm(bu(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,gt.exists(!1))]).then(()=>r)}function Fm(e,...t){var n,r,i;e=It(e);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||fo(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(fo(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,c,l;if(e instanceof ct)c=qt(e.firestore,We),l=Bi(e._key.path),u={next:h=>{t[o]&&t[o](wm(c,e,h))},error:t[o+1],complete:t[o+2]};else{const h=qt(e,fr);c=qt(h.firestore,We),l=h._query;const d=new Lu(c);u={next:m=>{t[o]&&t[o](new Im(c,d,h,m))},error:t[o+1],complete:t[o+2]},Em(e._query)}return function(d,m,v,R){const E=new em(R),k=new Ff(m,E,v);return d.asyncQueue.enqueueAndForget(async()=>Nf(await ao(d),k)),()=>{E.Ca(),d.asyncQueue.enqueueAndForget(async()=>Mf(await ao(d),k))}}(Su(c),l,a,u)}function Uu(e,t){return function(r,i){const s=new $t;return r.asyncQueue.enqueueAndForget(async()=>Kf(await sm(r),i,s)),s.promise}(Su(e),t)}function wm(e,t,n){const r=n.docs.get(t._key),i=new Lu(e);return new Fu(e,i,t._key,r,new Pe(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(i){_e=i})(sl),Pn(new ke("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new We(new Rh(r.getProvider("auth-internal")),new Vh(r.getProvider("app-check-internal")),function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new y(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ze(c.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ee(bs,"4.1.0",t),ee(bs,"4.1.0","esm2017")})();var Rm="firebase",Pm="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ee(Rm,Pm,"app");const Sm={apiKey:"AIzaSyCi3WF0LBCNcExiUy-G_HaC2DhZE9bjNMs",authDomain:"sorteio-da-familia.firebaseapp.com",projectId:"sorteio-da-familia",storageBucket:"sorteio-da-familia.appspot.com",messagingSenderId:"1092070368746",appId:"1:1092070368746:web:35e90b2a74667021cebe93"},Cm=Io(Sm),Lm=lm(Cm),Um=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Bm={__name:"Text",props:{text:{type:String,default:""},size:{type:String,default:""},weight:{type:String,default:""}},setup(e){return(t,n)=>(ju(),$u("span",{class:zu([{"text-md":e.size==="md","text-xl":e.size==="lg","text-3xl":e.size==="xl","font-bold":e.weight==="bold","font-semibold":e.weight==="semibold"},"text-gray-100 font-sans w-3/4 leading-tight"])},qu(e.text),3))}};export{Um as _,Bm as a,um as b,Mm as c,Lm as d,Om as e,Fm as o,xm as u};
