webpackJsonp([0],{1240:function(t,e,a){"use strict";e.a={props:{breadcrumbList:{required:!1,type:Array,default:[]}},computed:{},created:function(){}}},1241:function(t,e,a){"use strict";function r(t){a(1242)}var s=a(1240),i=a(1244),o=a(150),n=r,l=o(s.a,i.a,!1,n,"data-v-3800f5f9",null);e.a=l.exports},1242:function(t,e,a){var r=a(1243);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(242)("eb8923e2",r,!0,{})},1243:function(t,e,a){e=t.exports=a(105)(!1),e.push([t.i,".page_header[data-v-3800f5f9]{padding-bottom:16px}.page_header h4[data-v-3800f5f9]{margin:7px 0 0;line-height:28px}",""])},1244:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page_header"},[a("a-breadcrumb",t._l(t.breadcrumbList,function(e,r){return a("a-breadcrumb-item",{key:r},["link"==e.type?a("router-link",{attrs:{to:e.to}},[t._v("\n\t\t\t\t"+t._s(e.title)+"\n\t\t\t")]):t._e(),"name"==e.type?a("span",[t._v(t._s(e.title))]):t._e()],1)}),1)],1)},s=[],i={render:r,staticRenderFns:s};e.a=i},1266:function(t,e,a){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}var s=a(1241),i=a(243),o=a(151),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t};e.a={components:{MyBreadcrumb:s.a},data:function(){return{breadcrumbList:[{title:"用户管理",type:"link",to:"/authority/user"},{title:"用户创建",type:"name"}],type:"create",formItemLayout:{labelCol:{span:6},wrapperCol:{span:18}},form:{},submitParams:{},roleList:[],initData:{userId:"",employeeId:"",userName:"",userType:"",statusId:"",contactNumber:"",mobile:"",address:"",zipCode:"",eMail:"",roleId:""},isLessee:!1}},computed:n({},Object(o.mapGetters)(["userInfo"])),created:function(){this.init()},methods:{init:function(){var t=this,e=this.$route.params;if(this.isLessee="lessee"==e.from,this.isLessee?(this.type=e.type||"create",this.breadcrumbList=[{title:"法人管理",type:"link",to:"/lesseeManage/lesseeManage"},{title:"法人修改",type:"link",to:"/lesseeManage/lesseeEdit/edit/"+e.lesseeId}],"edit"==e.type?this.breadcrumbList.push({title:"法人管理员修改",type:"name"}):"create"==this.type?(this.initData.userType="admin",this.breadcrumbList.push({title:"法人管理员添加",type:"name"})):this.breadcrumbList.push({title:"法人管理员查看",type:"name"})):"edit"==e.type||"view"==e.type?(this.type=e.type,this.$set(this.breadcrumbList,"1",{title:"view"==this.type?"用户查看":"用户修改",type:"name"})):"resetPassword"==e.type&&(this.type=e.type,this.breadcrumbList=[{title:"密码管理",type:"link",to:"/authority/resetPassword"},{title:"密码重置",type:"name"}]),this.form=this.$form.createForm(this,{name:"user_form"}),i.a.getRole({statusId:"ENABLED"}).then(function(e){var a=e.resultObj;a&&(t.roleList=[].concat(r(a.list)))}).catch(function(e){t.$message.error(e.errorContext&&e.errorContext.errorMsg?e.errorContext.errorMsg:"接口异常")}),e.id){var a={employeeId:e.id};i.a.queryUser(a).then(function(e){var a=e.resultObj;if(a){var s=[].concat(r(a.list))[0];t.initData=n({},s)}}).catch(function(t){})}},userTypeChange:function(t){this.initData.userType=t},submit:function(){var t=this;this.form.validateFields(function(e,a){if(!e){var r=t.$route.params,s={lesseeId:t.isLessee?r.lesseeId:t.userInfo.lesseeId,employeeId:a.employeeId,userName:a.userName,userType:a.userType,statusId:a.statusId,contactNumber:a.contactNumber,mobile:a.mobile,address:a.address,zipCode:a.zipCode,eMail:a.eMail,roleId:a.roleId};t.submitParams=n({},s);var o=t,l=t.$route.params.type,u=t.$route.params.id,d=n({},s);u?"edit"==l&&(d.userId=a.userId,d.lesseeId=t.initData.lesseeId,i.a.updateUser(d).then(function(){t.$success({title:"用户修改成功，请等待复核",onOk:function(){o.cancel()}})}).catch(function(e){t.$message.error(e.errorContext&&e.errorContext.errorMsg?e.errorContext.errorMsg:"接口异常")})):i.a.addUser(d).then(function(){t.$success({title:"用户新增成功，请等待复核",onOk:function(){o.cancel()}})}).catch(function(e){t.$message.error(e.errorContext&&e.errorContext.errorMsg?e.errorContext.errorMsg:"接口异常")})}})},resetPasswordBtn:function(){var t=this,e=this,a={userId:this.initData.userId};i.a.resetPwd(a).then(function(){t.$success({title:"密码重置申请提交成功，复核通过后登录密码重置成功，初始密码为88888888",onOk:function(){e.cancel()}})}).catch(function(e){t.$message.error(e.errorContext&&e.errorContext.errorMsg?e.errorContext.errorMsg:"接口异常")})},cancel:function(){var t=this.$route.params,e="resetPassword"==this.type?"/authority/resetPassword":this.isLessee?"/lesseeManage/lesseeEdit/edit/"+t.lesseeId:"/authority/user";this.$router.push({path:e})}}}},1313:function(t,e,a){var r=a(1314);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(242)("df295bd0",r,!0,{})},1314:function(t,e,a){e=t.exports=a(105)(!1),e.push([t.i,".content .type[data-v-ac432790]{padding:10px}.content .edit-form .ant-form .ant-form-item .ant-btn[data-v-ac432790]{margin-left:10px}",""])},1315:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-view"},[a("MyBreadcrumb",{attrs:{breadcrumbList:t.breadcrumbList}}),a("div",{staticClass:"content"},[a("div",{staticClass:"edit-form"},[a("a-form",{attrs:{layout:"inline",form:t.form}},[a("a-row",["create"!=t.type?a("a-col",{attrs:{span:9}},[a("a-form-item",{attrs:{label:"用户ID","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["userId",{initialValue:t.initData.userId}],expression:"[\n\t\t\t\t\t\t\t\t\t'userId',\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tinitialValue: initData.userId,\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t]"}],attrs:{placeholder:"用户ID",disabled:""}})],1)],1):t._e(),a("a-col",{attrs:{span:9}},[a("a-form-item",{attrs:{label:"员工编号","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["employeeId",{initialValue:t.initData.employeeId,rules:[{required:!0,message:"必填项"},{max:40,message:"最大长度不超过40字符"}]}],expression:"[\n\t\t\t\t\t\t\t\t\t'employeeId',\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tinitialValue: initData.employeeId,\n\t\t\t\t\t\t\t\t\t\trules: [\n\t\t\t\t\t\t\t\t\t\t\t{ required: true, message: '必填项' },\n\t\t\t\t\t\t\t\t\t\t\t{ max: 40, message: '最大长度不超过40字符' },\n\t\t\t\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t]"}],attrs:{placeholder:"员工编号",disabled:"view"==t.type||"resetPassword"==t.type}})],1)],1),a("a-col",{attrs:{span:9}},[a("a-form-item",{attrs:{label:"用户姓名","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["userName",{initialValue:t.initData.userName,rules:[{required:!0,message:"必填项"},{max:40,message:"最大长度不超过40字符"}]}],expression:"[\n\t\t\t\t\t\t\t\t\t'userName',\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tinitialValue: initData.userName,\n\t\t\t\t\t\t\t\t\t\trules: [\n\t\t\t\t\t\t\t\t\t\t\t{ required: true, message: '必填项' },\n\t\t\t\t\t\t\t\t\t\t\t{ max: 40, message: '最大长度不超过40字符' },\n\t\t\t\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t]"}],attrs:{placeholder:"用户姓名不超过40字符",disabled:"view"==t.type||"resetPassword"==t.type}})],1)],1),a("a-col",{attrs:{span:9}},[a("a-form-item",{attrs:{label:"用户类型","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["userType",{initialValue:t.initData.userType,rules:[{required:!0,message:"必选项"}]}],expression:"[\n\t\t\t\t\t\t\t\t\t'userType',\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tinitialValue: initData.userType,\n\t\t\t\t\t\t\t\t\t\trules: [{ required: true, message: '必选项' }],\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t]"}],attrs:{placeholder:"选择用户类型",disabled:"view"==t.type||"resetPassword"==t.type||t.isLessee},on:{change:t.userTypeChange}},[a("a-select-option",{attrs:{value:"admin"}},[t._v("管理员")]),a("a-select-option",{attrs:{value:"operator"}},[t._v("操作员")])],1)],1)],1),a("a-col",{attrs:{span:9}},[a("a-form-item",{attrs:{label:"状态","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["statusId",{initialValue:t.initData.statusId,rules:[{required:!0,message:"必选项"}]}],expression:"[\n\t\t\t\t\t\t\t\t\t'statusId',\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tinitialValue: initData.statusId,\n\t\t\t\t\t\t\t\t\t\trules: [{ required: true, message: '必选项' }],\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t]"}],attrs:{placeholder:"状态",disabled:"view"==t.type||"resetPassword"==t.type}},[a("a-select-option",{attrs:{value:"0"}},[t._v("正常")]),a("a-select-option",{attrs:{value:"1"}},[t._v("锁定")]),a("a-select-option",{attrs:{value:"2"}},[t._v("销户")])],1)],1)],1),a("a-col",{attrs:{span:9}},[a("a-form-item",{attrs:{label:"联系电话","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["contactNumber",{initialValue:t.initData.contactNumber,rules:[{pattern:/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,message:"请输入正确的电话号码"}]}],expression:"[\n\t\t\t\t\t\t\t\t\t'contactNumber',\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tinitialValue: initData.contactNumber,\n\t\t\t\t\t\t\t\t\t\trules: [\n\t\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\tpattern: /^(\\(\\d{3,4}\\)|\\d{3,4}-|\\s)?\\d{7,14}$/,\n\t\t\t\t\t\t\t\t\t\t\t\tmessage: '请输入正确的电话号码',\n\t\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t]"}],attrs:{placeholder:"联系电话",disabled:"view"==t.type||"resetPassword"==t.type}})],1)],1),a("a-col",{attrs:{span:9}},[a("a-form-item",{attrs:{label:"手机号码","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{initialValue:t.initData.mobile,rules:[{required:!0,message:"必填项"},{pattern:/^1[3456789]\d{9}$/,message:"请输入正确的手机号码"}]}],expression:"[\n\t\t\t\t\t\t\t\t\t'mobile',\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tinitialValue: initData.mobile,\n\t\t\t\t\t\t\t\t\t\trules: [\n\t\t\t\t\t\t\t\t\t\t\t{ required: true, message: '必填项' },\n\t\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\tpattern: /^1[3456789]\\d{9}$/,\n\t\t\t\t\t\t\t\t\t\t\t\tmessage: '请输入正确的手机号码',\n\t\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t]"}],attrs:{placeholder:"手机号码",disabled:"view"==t.type||"resetPassword"==t.type}})],1)],1),a("a-col",{attrs:{span:9}},[a("a-form-item",{attrs:{label:"地址","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["address",{initialValue:t.initData.address,rules:[{max:40,message:"最大长度不超过40字符"}]}],expression:"[\n\t\t\t\t\t\t\t\t\t'address',\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tinitialValue: initData.address,\n\t\t\t\t\t\t\t\t\t\trules: [{ max: 40, message: '最大长度不超过40字符' }],\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t]"}],attrs:{placeholder:"地址，最大长度不超过40字符",rows:4,disabled:"view"==t.type||"resetPassword"==t.type}})],1)],1),a("a-col",{attrs:{span:9}},[a("a-form-item",{attrs:{label:"邮编","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["zipCode",{initialValue:t.initData.zipCode,rules:[{pattern:/^[1-9]{1}(\d+){5}$/,message:"请输入正确的邮编"}]}],expression:"[\n\t\t\t\t\t\t\t\t\t'zipCode',\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tinitialValue: initData.zipCode,\n\t\t\t\t\t\t\t\t\t\trules: [\n\t\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\tpattern: /^[1-9]{1}(\\d+){5}$/,\n\t\t\t\t\t\t\t\t\t\t\t\tmessage: '请输入正确的邮编',\n\t\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t]"}],attrs:{placeholder:"邮编",disabled:"view"==t.type||"resetPassword"==t.type}})],1)],1),a("a-col",{attrs:{span:9}},[a("a-form-item",{attrs:{label:"邮箱","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["eMail",{initialValue:t.initData.eMail,rules:[{type:"email",message:"请输入正确的邮箱"}]}],expression:"[\n\t\t\t\t\t\t\t\t\t'eMail',\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tinitialValue: initData.eMail,\n\t\t\t\t\t\t\t\t\t\trules: [\n\t\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\ttype: 'email',\n\t\t\t\t\t\t\t\t\t\t\t\tmessage: '请输入正确的邮箱',\n\t\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t]"}],attrs:{placeholder:"邮箱",disabled:"view"==t.type||"resetPassword"==t.type}})],1)],1),"operator"==t.initData.userType?a("a-col",{attrs:{span:9}},[a("a-form-item",{attrs:{label:"关联角色","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["roleId",{initialValue:t.initData.roleId,rules:[{required:!0,message:"必选项"}]}],expression:"[\n\t\t\t\t\t\t\t\t\t'roleId',\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tinitialValue: initData.roleId,\n\t\t\t\t\t\t\t\t\t\trules: [{ required: true, message: '必选项' }],\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t]"}],attrs:{placeholder:"请选择",disabled:"view"==t.type||"resetPassword"==t.type}},t._l(t.roleList,function(e,r){return a("a-select-option",{key:e.roleId,attrs:{value:e.roleId}},[t._v(t._s(e.roleName))])}),1)],1)],1):t._e(),a("a-col",{attrs:{span:24}},[a("a-form-item",["view"!=t.type&&"resetPassword"!=t.type?a("a-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确定")]):t._e(),"resetPassword"==t.type?a("a-button",{attrs:{type:"primary"},on:{click:t.resetPasswordBtn}},[t._v("重置密码")]):t._e(),a("a-button",{on:{click:t.cancel}},[t._v("取消")])],1)],1)],1)],1)],1)])],1)},s=[],i={render:r,staticRenderFns:s};e.a=i},64:function(t,e,a){"use strict";function r(t){a(1313)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(1266),i=a(1315),o=a(150),n=r,l=o(s.a,i.a,!1,n,"data-v-ac432790",null);e.default=l.exports}});