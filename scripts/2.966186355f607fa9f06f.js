webpackJsonp([2],{1211:function(t,e,a){"use strict";function r(t){a(1235)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(1220),s=a(1241),i=a(148),o=r,l=i(n.a,s.a,!1,o,"data-v-0129fb6d",null);e.default=l.exports},1220:function(t,e,a){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}var n=a(1237);e.a={components:{MyBreadcrumb:n.a},data:function(){return{breadcrumbList:[{title:"角色管理",type:"link",to:"/authority/role"},{title:"角色创建",type:"name"}],formItemLayout:{labelCol:{span:6},wrapperCol:{span:18}},form:{},treeData:[],expandedKeys:[],searchValue:"",autoExpandParent:!0,dataList:[]}},created:function(){this.init()},methods:{init:function(){this.form=this.$form.createForm(this,{name:"role_form"}),this.treeData=[{title:"parent 1",key:"0-0",scopedSlots:{},children:[{title:"parent 1-0",key:"0-0-0",disabled:!0,children:[{title:"sdsd",key:"0-0-0-0",disableCheckbox:!0},{title:"leaf",key:"0-0-0-1"}]},{title:"parent 1-1",key:"0-0-1",children:[{title:"gjhg",key:"0-0-0-7"}]}]}],this.generateList(this.treeData)},submit:function(){this.form.validateFields(function(t,e){if(!t){e.name,e.status}})},onSelect:function(t,e){},onCheck:function(t,e){},treeSearch:function(t){var e=this,a=t.target.value,n=[].concat(r(this.dataList)),s=[];n.map(function(t){t.title.indexOf(a)>-1&&e.getParentKeys(t.key,n,s)}),s=new Set(s),this.expandedKeys=[].concat(r(s)),this.searchValue=a,this.autoExpandParent=!0},getParentKeys:function(t,e,a){var r=this;e.forEach(function(n){n.key===t&&n.parentKey&&(a.push(n.parentKey),r.getParentKeys(n.parentKey,e,a))})},onExpand:function(t){this.expandedKeys=t,this.autoExpandParent=!1},generateList:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=0;a<t.length;a++){var r=t[a];r.scopedSlots={title:"title"},this.dataList.push({title:r.title,key:r.key,parentKey:e}),r.children&&(this.generateList(r.children,r.key),this.expandedKeys.push(r.key))}}}}},1221:function(t,e,a){"use strict";e.a={props:{breadcrumbList:{required:!1,type:Array,default:[]}},computed:{},created:function(){}}},1235:function(t,e,a){var r=a(1236);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(241)("95c1b5ba",r,!0,{})},1236:function(t,e,a){e=t.exports=a(103)(!1),e.push([t.i,".content .type[data-v-0129fb6d]{padding:10px}.content .edit-form .ant-form .ant-form-item .ant-btn[data-v-0129fb6d]{margin-left:10px}.content .edit-form .ant-form .ant-form-item .tree-select[data-v-0129fb6d]{padding:3px 5px;border:1px solid #d9d9d9;border-radius:4px;height:230px;overflow:hidden}.content .edit-form .ant-form .ant-form-item .tree-select .tree-nodes[data-v-0129fb6d]{height:172px;overflow:auto}",""])},1237:function(t,e,a){"use strict";function r(t){a(1238)}var n=a(1221),s=a(1240),i=a(148),o=r,l=i(n.a,s.a,!1,o,"data-v-3800f5f9",null);e.a=l.exports},1238:function(t,e,a){var r=a(1239);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(241)("eb8923e2",r,!0,{})},1239:function(t,e,a){e=t.exports=a(103)(!1),e.push([t.i,".page_header[data-v-3800f5f9]{padding-bottom:16px}.page_header h4[data-v-3800f5f9]{margin:7px 0 0;line-height:28px}",""])},1240:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page_header"},[a("a-breadcrumb",t._l(t.breadcrumbList,function(e,r){return a("a-breadcrumb-item",{key:r},["link"==e.type?a("router-link",{attrs:{to:e.to}},[t._v("\n\t\t\t\t"+t._s(e.title)+"\n\t\t\t")]):t._e(),"name"==e.type?a("span",[t._v(t._s(e.title))]):t._e()],1)}),1)],1)},n=[],s={render:r,staticRenderFns:n};e.a=s},1241:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-view"},[a("MyBreadcrumb",{attrs:{breadcrumbList:t.breadcrumbList}}),a("div",{staticClass:"content"},[a("div",{staticClass:"edit-form"},[a("a-form",{attrs:{layout:"inline",form:t.form}},[a("a-row",[a("a-col",{attrs:{span:9}},[a("a-form-item",{attrs:{label:"角色名称","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:"",rules:[{required:!0,message:"必填项"},{max:40,message:"最大长度不超过40字符"},{pattern:/^[a-zA-Z0-9\u4e00-\u9fa5]+$/,message:"只能输入汉字、字母、数字或者它们的组合"}]}],expression:"[\n\t\t\t\t\t\t\t\t\t'name',\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tinitialValue: '',\n\t\t\t\t\t\t\t\t\t\trules: [\n\t\t\t\t\t\t\t\t\t\t\t{ required: true, message: '必填项' },\n\t\t\t\t\t\t\t\t\t\t\t{ max: 40, message: '最大长度不超过40字符' },\n\t\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\tpattern: /^[a-zA-Z0-9\\u4e00-\\u9fa5]+$/,\n\t\t\t\t\t\t\t\t\t\t\t\tmessage: '只能输入汉字、字母、数字或者它们的组合',\n\t\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t]"}],attrs:{placeholder:"只能输入汉字、字母、数字且不超过40字符"}})],1)],1),a("a-col",{attrs:{span:9}},[a("a-form-item",{attrs:{label:"状态","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:"1",rules:[{required:!0,message:"必选项"}]}],expression:"[\n\t\t\t\t\t\t\t\t\t'status',\n\t\t\t\t\t\t\t\t\t{ initialValue: '1', rules: [{ required: true, message: '必选项' }] },\n\t\t\t\t\t\t\t\t]"}],attrs:{placeholder:"状态"}},[a("a-select-option",{attrs:{value:"1"}},[t._v("有效")]),a("a-select-option",{attrs:{value:"2"}},[t._v("无效")])],1)],1)],1),a("a-col",{attrs:{span:9}},[a("a-form-item",{attrs:{label:"注释","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["desc",{initialValue:"",rules:[{max:40,message:"最大长度不超过40字符"}]}],expression:"[\n\t\t\t\t\t\t\t\t\t'desc',\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tinitialValue: '',\n\t\t\t\t\t\t\t\t\t\trules: [{ max: 40, message: '最大长度不超过40字符' }],\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t]"}],attrs:{placeholder:"注释，最大长度不超过40字符",rows:4}})],1)],1),a("a-col",{attrs:{span:24}}),a("a-col",{attrs:{span:9}},[a("a-form-item",{attrs:{label:"功能关联","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[a("div",{staticClass:"tree-select"},[a("a-input-search",{staticStyle:{"margin-bottom":"8px"},attrs:{placeholder:"搜索"},on:{change:t.treeSearch}}),a("div",{staticClass:"tree-nodes"},[a("a-tree",{attrs:{checkable:"",treeData:t.treeData,expandedKeys:t.expandedKeys,autoExpandParent:t.autoExpandParent},on:{expand:t.onExpand,select:this.onSelect,check:this.onCheck},scopedSlots:t._u([{key:"title",fn:function(e){var r=e.title;return[r.indexOf(t.searchValue)>-1?a("span",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(r.substr(0,r.indexOf(t.searchValue)))+"\n\t\t\t\t\t\t\t\t\t\t\t\t"),a("span",{staticStyle:{color:"#f50"}},[t._v(t._s(t.searchValue))]),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(r.substr(r.indexOf(t.searchValue)+t.searchValue.length))+"\n\t\t\t\t\t\t\t\t\t\t\t")]):a("span",[t._v(t._s(r))])]}}])})],1)],1)])],1),a("a-col",{attrs:{span:24}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)],1)],1)],1)],1)])],1)},n=[],s={render:r,staticRenderFns:n};e.a=s}});