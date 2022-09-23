"use strict";(self.webpackChunkEpicBooks=self.webpackChunkEpicBooks||[]).push([[657],{8657:function(e,t,o){o.r(t),o.d(t,{default:function(){return g}});var n=o(885),r=o(703),i=o(7391),a=o(6151),s=o(2791),c=o(6489),l=o(4453);function u(){var e=(0,s.useState)(0),t=(0,n.Z)(e,2),o=t[0],r=t[1],i=(0,s.useState)(""),a=(0,n.Z)(i,2),u=a[0],d=a[1],m=(0,s.useState)(""),p=(0,n.Z)(m,2),b=p[0],h=p[1],f=(0,s.useContext)(c.Z),x=(0,s.useCallback)((function(e,t){var o={contentType:e.type},n=(0,l.iH)(f.storage,t+"/f"+(new Date).getTime()+e.name),i=(0,l.B0)(n,e,o);i.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),r(t),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(function(e){switch(e.code){case"storage/unauthorized":h("Permission Error - ",e.code);break;case"storage/canceled":h("Cancled By User - ",e.code);break;case"storage/unknown":h("Storage/Unknown Error - ",e.code)}f.setLoading(!1)}),(function(){(0,l.Jt)(i.snapshot.ref).then((function(e){console.log("File available at",e),d(e),f.setLoading(!1)}))})),console.log(" FILE UPLOAD OBJ EXECUTION STARTED",e,f.storage)}),[]);return{file:u,error:b,progress:o,uploadFileToFbStorage:x,setFile:d}}var d=o(2982),m=o(184);function p(e){var t=u();return(0,s.useEffect)((function(){console.log(e.file.name),t.uploadFileToFbStorage(e.file,"f_"+e.currentComp.customUid)}),[]),(0,s.useEffect)((function(){""!==t.file&&(console.log("FILE UPLOADED ",t.file),e.setPathToAssetInAlbum(t.file))}),[t.file]),(0,m.jsxs)("div",{children:[(0,m.jsxs)("h5",{children:[e.file.name,(0,m.jsx)("br",{}),t.error?(0,m.jsx)("span",{color:"red",children:t.error}):"",(0,m.jsx)("br",{}),t.file,(0,m.jsx)("br",{}),(0,m.jsx)("video",{src:t.file,alt:"inUpload",width:"40%"}),(0,m.jsx)("br",{}),"(",t.progress,"%)"]}),(0,m.jsx)("hr",{})]})}function b(e){var t=(0,s.useState)([]),o=(0,n.Z)(t,2),r=o[0],i=o[1];return(0,m.jsxs)("span",{children:[(0,m.jsxs)(a.Z,{variant:"contained",component:"label",style:{width:"90%"},children:["Upload Images For Album",(0,m.jsx)("input",{hidden:!0,accept:"image/*",type:"file",multiple:!0,onChange:function(e){for(var t=function(t){var o=e.target.files[t];i((function(e){return[].concat((0,d.Z)(e),[o])}))},o=0;o<e.target.files.length;o++)t(o)}})]}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("ol",{children:r.map((function(t){return(0,m.jsx)("li",{children:(0,m.jsx)(p,{typeOfAsset:"img",currentComp:e.currentComp,file:t,setPathToAssetInAlbum:e.setPathToImgInAlbum})},t.name+t.lastModified)}))})]})}function h(e){var t=(0,s.useState)([]),o=(0,n.Z)(t,2),r=o[0],i=o[1];return(0,m.jsxs)("span",{children:[(0,m.jsxs)(a.Z,{variant:"contained",component:"label",style:{width:"90%"},children:["Upload Videos For Album",(0,m.jsx)("input",{hidden:!0,accept:"video/*",type:"file",onChange:function(e){for(var t=function(t){var o=e.target.files[t];i((function(e){return[].concat((0,d.Z)(e),[o])}))},o=0;o<e.target.files.length;o++)t(o)}})]}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("ol",{children:r.map((function(t){return(0,m.jsx)("li",{children:(0,m.jsx)(p,{currentComp:e.currentComp,typeOfAsset:"vid",file:t,setPathToAssetInAlbum:e.setPathToVidInAlbum})},t.name+t.lastModified)}))})]})}var f=o(9174);function x(e){console.log(e.obj.url);var t=s.useState(e.obj.remove),o=(0,n.Z)(t,2),r=o[0],i=o[1];return s.useEffect((function(){e.obj.remove=r,e.setimgToRemove(e.obj)}),[r]),(0,m.jsxs)("div",{className:"".concat(r?"removeStyle":""),children:[(0,m.jsx)("hr",{}),(0,m.jsx)("hr",{}),(0,m.jsx)(f.Z,{checked:r,onChange:function(){i(!r)}}),(0,m.jsx)("br",{}),e.isVid?"":(0,m.jsx)("img",{src:e.obj.url,className:"selImgRmv"}),e.isVid?(0,m.jsxs)("video",{width:"320",height:"240",controls:!0,children:[(0,m.jsx)("source",{src:e.obj.url,type:"video/mp4"}),(0,m.jsx)("source",{src:e.obj.url,type:"video/ogg"}),"Your browser does not support the video tag."]}):""]})}function g(e){var t=(0,s.useState)(),o=(0,n.Z)(t,2),l=o[0],d=o[1],p=(0,s.useState)((new Date).getTime()),f=(0,n.Z)(p,2),g=f[0],j=f[1],v=[],C=[],Z=(0,s.useState)([]),y=(0,n.Z)(Z,2),S=y[0],k=y[1],w=(0,s.useState)([]),I=(0,n.Z)(w,2),A=I[0],E=I[1],R=[],F=(0,s.useState)("2022-01-01"),T=(0,n.Z)(F,2),N=T[0],L=T[1],B=(0,s.useState)(""),P=(0,n.Z)(B,2),D=P[0],O=P[1],U=(0,s.useState)(""),V=(0,n.Z)(U,2),z=V[0],M=V[1],H=(0,s.useState)(""),q=(0,n.Z)(H,2),_=q[0],J=q[1],W=(0,s.useState)(""),Y=(0,n.Z)(W,2),X=Y[0],G=Y[1],K=(0,s.useState)(""),Q=(0,n.Z)(K,2),$=Q[0],ee=Q[1],te=(0,s.useState)(""),oe=(0,n.Z)(te,2),ne=oe[0],re=oe[1],ie=(0,s.useState)(""),ae=(0,n.Z)(ie,2),se=ae[0],ce=ae[1],le=(0,s.useState)(""),ue=(0,n.Z)(le,2),de=ue[0],me=ue[1],pe=(0,s.useState)(""),be=(0,n.Z)(pe,2),he=be[0],fe=be[1],xe=(0,s.useState)(""),ge=(0,n.Z)(xe,2),je=ge[0],ve=ge[1],Ce=(0,s.useState)(""),Ze=(0,n.Z)(Ce,2),ye=Ze[0],Se=Ze[1],ke=(0,s.useState)(""),we=(0,n.Z)(ke,2),Ie=we[0],Ae=we[1],Ee=(0,s.useContext)(c.Z),Re=u(),Fe=u(),Te=function(){var t={customUid:g,name:D,date:N,fullDesc:_,image:z,instagram:je,instagramId:ye,owner:X,studio:$,studioDetails:ne,website:se,youtube:de,youtubeId:he,studioLogo:Ie,userphone:[X],users:[{message:"owner",phone:X}],images:[],videos:[]};console.log("Button Clicked = ",t);try{d(),t.name.trim()||d((function(e){return e+", Name is Empty, "})),t.fullDesc.trim()||d((function(e){return e+"One Liner is Empty, "})),t.image.trim()||d((function(e){return e+"Album Image is Empty, "})),t.owner.trim()||d((function(e){return e+"Owner is Empty, "})),t.studio.trim()||d((function(e){return e+"Studio Name is Empty, "})),t.studioDetails.trim()||d((function(e){return e+"Studio Details is Empty, "})),t.website.trim()||d((function(e){return e+"Website is Empty, "})),t.name.trim()&&t.fullDesc.trim()&&t.image.trim()&&t.owner.trim()&&t.studio.trim()&&t.studioDetails.trim()&&t.website.trim()?e.modify?e.currentComp&&e.modify?(Ee.setLoading(!0),t.docId=e.currentComp.docId,t.date=e.currentComp.date,t.userphone=e.currentComp.userphone,t.users=e.currentComp.users,t.images=e.currentComp.images.concat(v),t.videos=e.currentComp.videos.concat(C),Ee.saveEditedAlbum(t),e.setCurrentComp()):alert("Nothing to do..."):(console.log("Value of ERROR (no errors :) )",l),Ee.setLoading(!0),Ee.addAlbum(t)):(console.log("ERROR : ",l),Ee.setLoading(!1))}catch(o){console.log("ERROR : ",o),d("Errored : ",o),Ee.setLoading(!1)}},Ne=function(){var t={customUid:g,name:D,date:N,fullDesc:_,image:z,instagram:je,instagramId:ye,owner:X,studio:$,studioDetails:ne,website:se,youtube:de,youtubeId:he,studioLogo:Ie,userphone:[X],users:[{message:"owner",phone:X}],images:[],videos:[]};console.log("removeImages Button Clicked = ",t),e.currentComp&&e.modify?(Ee.setLoading(!0),t.docId=e.currentComp.docId,t.date=e.currentComp.date,t.userphone=e.currentComp.userphone,t.users=e.currentComp.users,t.images=e.currentComp.images.concat(v),t.videos=e.currentComp.videos.concat(C),Ee.saveEditedAlbum(t),e.setCurrentComp(),t.images=t.images.filter((function(e){return!R.includes(e)})),console.log("imgToRemove",t),Ee.saveEditedAlbum(t)):alert("Nothing to do...")};(0,s.useEffect)((function(){console.log("Album img Uploaded And Local Var is ready"),M(Re.file)}),[Re.file]),(0,s.useEffect)((function(){console.log("Studio Logo Uploaded And Local Var is ready"),Ae(Fe.file)}),[Fe.file]),(0,s.useEffect)((function(){if(e.modify){var t;console.log("MODE is MODIFY....",e),null!==(t=e.currentComp)&&void 0!==t&&t.name&&(j(e.currentComp.customUid),O(e.currentComp.name),J(e.currentComp.fullDesc),G(e.currentComp.owner),ee(e.currentComp.studio),re(e.currentComp.studioDetails),ce(e.currentComp.website),me(e.currentComp.youtube),fe(e.currentComp.youtubeId),ve(e.currentComp.instagram),Se(e.currentComp.instagramId),Ae(e.currentComp.studioLogo),Re.setFile(e.currentComp.image),Fe.setFile(e.currentComp.studioLogo));var o=e.currentComp.images.map((function(e){return{url:e,remove:!1}}));k(o);var n=e.currentComp.videos.map((function(e){return{url:e,remove:!1}}));E(n)}}),[e.currentComp]);var Le=function(e){R.includes(e.url)&&!e.remove?R=R.filter((function(t){if(t==e.url)return!1})):!R.includes(e.url)&&e.remove&&R.push(e.url)};return(0,m.jsxs)(r.Z,{elevation:0,style:{textAlign:"center",marginTop:"5%"},children:[(0,m.jsx)("h3",{children:e.modify?"Modify Album":"Add New Album"}),(0,m.jsx)(i.Z,{id:"outlined-basic",label:"Album Name",variant:"outlined",className:"width90per",value:D,onChange:function(e){O(e.target.value)}}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsxs)(a.Z,{variant:"contained",component:"label",style:{width:"90%"},children:["Upload Album Img",(0,m.jsx)("input",{hidden:!0,accept:"image/*",type:"file",onChange:function(e){Ee.setLoading(!0),Re.uploadFileToFbStorage(e.target.files[0],"f_"+g)}})]}),Re.error&&(0,m.jsx)("h5",{style:{color:"red"},children:Re.error}),Re.file&&(0,m.jsxs)("h5",{style:{color:"green"},children:[Re.file,(0,m.jsx)("img",{alt:"no img",width:"60%",src:Re.file})]}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)(i.Z,{id:"outlined-basic",label:"Album one liner",variant:"outlined",className:"width90per",value:_,onChange:function(e){J(e.target.value)}}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),!e.modify&&(0,m.jsx)(i.Z,{id:"outlined-basic",label:"Album Date",type:"date",value:N,onChange:function(e){L(e.target.value)},variant:"outlined",className:"width90per"}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)(i.Z,{id:"outlined-basic",label:"Owner Number",variant:"outlined",className:"width90per",value:X,onChange:function(e){G(e.target.value)}}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)(i.Z,{id:"outlined-basic",label:"Studio Name",variant:"outlined",className:"width90per",value:$,onChange:function(e){ee(e.target.value)}}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)(i.Z,{id:"outlined-basic",label:"Studio Address",variant:"outlined",className:"width90per",value:ne,onChange:function(e){re(e.target.value)}}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsxs)(a.Z,{variant:"contained",component:"label",style:{width:"90%"},children:["Upload Studio Logo",(0,m.jsx)("input",{hidden:!0,accept:"image/*",type:"file",onChange:function(e){Ee.setLoading(!0),Fe.uploadFileToFbStorage(e.target.files[0],"f_"+g)}})]}),Fe.error&&(0,m.jsx)("h5",{style:{color:"red"},children:Fe.error}),Fe.file&&(0,m.jsxs)("h5",{style:{color:"green"},children:[Fe.file,(0,m.jsx)("img",{alt:"no img",width:"60%",src:Fe.file})]}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)(i.Z,{id:"outlined-basic",label:"Studio Website",variant:"outlined",className:"width90per",value:se,onChange:function(e){ce(e.target.value)}}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)(i.Z,{id:"outlined-basic",label:"Studio youtube link",variant:"outlined",className:"width90per",value:de,onChange:function(e){me(e.target.value)}}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)(i.Z,{id:"outlined-basic",label:"Studio youtube id",variant:"outlined",className:"width90per",value:he,onChange:function(e){fe(e.target.value)}}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)(i.Z,{id:"outlined-basic",label:"Studio instagram link",variant:"outlined",className:"width90per",value:je,onChange:function(e){ve(e.target.value)}}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)(i.Z,{id:"outlined-basic",label:"Studio instagram id",variant:"outlined",className:"width90per",value:ye,onChange:function(e){Se(e.target.value)}}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),l&&(0,m.jsx)("h5",{style:{color:"red"},children:l}),(0,m.jsx)(a.Z,{variant:"contained",onClick:Te,children:"Submit"}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),e.modify?(0,m.jsxs)("div",{children:[(0,m.jsx)(a.Z,{variant:"contained",onClick:function(){e.setCurrentComp()},children:"Back"}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)(b,{currentComp:e.currentComp,setPathToImgInAlbum:function(e){console.log("Img to add DATA",e),v.push(e)}}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)(a.Z,{variant:"contained",onClick:Te,children:"Submit Img To Save in Album"})]}):"",(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),e.modify?(0,m.jsxs)("div",{children:[(0,m.jsx)(a.Z,{variant:"contained",onClick:function(){e.setCurrentComp()},children:"Back"}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)(h,{currentComp:e.currentComp,setPathToVidInAlbum:function(e){console.log("Vid to add DATA",e),C.push(e)}}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)(a.Z,{variant:"contained",onClick:Te,children:"Submit Vide To Save in Album"})]}):"",(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("hr",{}),(0,m.jsx)("hr",{}),(0,m.jsx)("hr",{}),(0,m.jsx)("h2",{children:"Image - Remove"}),(0,m.jsx)("hr",{}),(0,m.jsx)("hr",{}),(0,m.jsx)("hr",{}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),S.map((function(e,t){return(0,m.jsx)(x,{obj:e,setimgToRemove:Le},t)})),(0,m.jsx)("br",{}),(0,m.jsx)(a.Z,{variant:"contained",onClick:Ne,children:"Save Removed Images"}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("hr",{}),(0,m.jsx)("hr",{}),(0,m.jsx)("hr",{}),(0,m.jsx)("h2",{children:"Video - Remove"}),(0,m.jsx)("hr",{}),(0,m.jsx)("hr",{}),(0,m.jsx)("hr",{}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),A.map((function(e,t){return(0,m.jsx)(x,{obj:e,setimgToRemove:Le,isVid:!0},t)})),(0,m.jsx)("br",{}),(0,m.jsx)(a.Z,{variant:"contained",onClick:Ne,children:"Save Removed Videos"}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{})]})}},9174:function(e,t,o){o.d(t,{Z:function(){return P}});var n=o(4942),r=o(3366),i=o(7462),a=o(2791),s=o(4419),c=o(2065),l=o(885),u=o(8182),d=o(4036),m=o(6934),p=o(8278),b=o(2930),h=o(3701),f=o(1217),x=o(5878);function g(e){return(0,f.Z)("PrivateSwitchBase",e)}(0,x.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var j=o(184),v=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],C=(0,m.ZP)(h.Z)((function(e){var t=e.ownerState;return(0,i.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),Z=(0,m.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),y=a.forwardRef((function(e,t){var o=e.autoFocus,n=e.checked,a=e.checkedIcon,c=e.className,m=e.defaultChecked,h=e.disabled,f=e.disableFocusRipple,x=void 0!==f&&f,y=e.edge,S=void 0!==y&&y,k=e.icon,w=e.id,I=e.inputProps,A=e.inputRef,E=e.name,R=e.onBlur,F=e.onChange,T=e.onFocus,N=e.readOnly,L=e.required,B=e.tabIndex,P=e.type,D=e.value,O=(0,r.Z)(e,v),U=(0,p.Z)({controlled:n,default:Boolean(m),name:"SwitchBase",state:"checked"}),V=(0,l.Z)(U,2),z=V[0],M=V[1],H=(0,b.Z)(),q=h;H&&"undefined"===typeof q&&(q=H.disabled);var _="checkbox"===P||"radio"===P,J=(0,i.Z)({},e,{checked:z,disabled:q,disableFocusRipple:x,edge:S}),W=function(e){var t=e.classes,o=e.checked,n=e.disabled,r=e.edge,i={root:["root",o&&"checked",n&&"disabled",r&&"edge".concat((0,d.Z)(r))],input:["input"]};return(0,s.Z)(i,g,t)}(J);return(0,j.jsxs)(C,(0,i.Z)({component:"span",className:(0,u.Z)(W.root,c),centerRipple:!0,focusRipple:!x,disabled:q,tabIndex:null,role:void 0,onFocus:function(e){T&&T(e),H&&H.onFocus&&H.onFocus(e)},onBlur:function(e){R&&R(e),H&&H.onBlur&&H.onBlur(e)},ownerState:J,ref:t},O,{children:[(0,j.jsx)(Z,(0,i.Z)({autoFocus:o,checked:n,defaultChecked:m,className:W.input,disabled:q,id:_&&w,name:E,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;M(t),F&&F(e,t)}},readOnly:N,ref:A,required:L,ownerState:J,tabIndex:B,type:P},"checkbox"===P&&void 0===D?{}:{value:D},I)),z?a:k]}))})),S=o(9201),k=(0,S.Z)((0,j.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),w=(0,S.Z)((0,j.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),I=(0,S.Z)((0,j.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),A=o(1402);function E(e){return(0,f.Z)("MuiCheckbox",e)}var R=(0,x.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),F=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],T=(0,m.ZP)(y,{shouldForwardProp:function(e){return(0,m.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.indeterminate&&t.indeterminate,"default"!==o.color&&t["color".concat((0,d.Z)(o.color))]]}})((function(e){var t,o=e.theme,r=e.ownerState;return(0,i.Z)({color:(o.vars||o).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:o.vars?"rgba(".concat("default"===r.color?o.vars.palette.action.activeChannel:o.vars.palette.primary.mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,c.Fq)("default"===r.color?o.palette.action.active:o.palette[r.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},(0,n.Z)(t,"&.".concat(R.checked,", &.").concat(R.indeterminate),{color:(o.vars||o).palette[r.color].main}),(0,n.Z)(t,"&.".concat(R.disabled),{color:(o.vars||o).palette.action.disabled}),t))})),N=(0,j.jsx)(w,{}),L=(0,j.jsx)(k,{}),B=(0,j.jsx)(I,{}),P=a.forwardRef((function(e,t){var o,n,c=(0,A.Z)({props:e,name:"MuiCheckbox"}),l=c.checkedIcon,u=void 0===l?N:l,m=c.color,p=void 0===m?"primary":m,b=c.icon,h=void 0===b?L:b,f=c.indeterminate,x=void 0!==f&&f,g=c.indeterminateIcon,v=void 0===g?B:g,C=c.inputProps,Z=c.size,y=void 0===Z?"medium":Z,S=(0,r.Z)(c,F),k=x?v:h,w=x?v:u,I=(0,i.Z)({},c,{color:p,indeterminate:x,size:y}),R=function(e){var t=e.classes,o=e.indeterminate,n=e.color,r={root:["root",o&&"indeterminate","color".concat((0,d.Z)(n))]},a=(0,s.Z)(r,E,t);return(0,i.Z)({},t,a)}(I);return(0,j.jsx)(T,(0,i.Z)({type:"checkbox",inputProps:(0,i.Z)({"data-indeterminate":x},C),icon:a.cloneElement(k,{fontSize:null!=(o=k.props.fontSize)?o:y}),checkedIcon:a.cloneElement(w,{fontSize:null!=(n=w.props.fontSize)?n:y}),ownerState:I,ref:t},S,{classes:R}))}))}}]);
//# sourceMappingURL=657.4053c387.chunk.js.map