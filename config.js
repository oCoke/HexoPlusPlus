var ctJson="/hpp/admin/api/get_config";function edit_config(t){swal({content:{element:"input",attributes:{placeholder:"输入"+t+"的键值"}}}).then((e=>{if(""!=e&null!=e){t_body={index:t,value:e};var n=ajaxObject();n.open("POST","/hpp/admin/api/edit_config",!0),n.setRequestHeader("Content-Type","text/plain"),n.onreadystatechange=function(){4==n.readyState&&(200==n.status?swal("已更改配置！",{icon:"success",buttons:{yes:"是"}}).then((t=>{window.location.reload()})):swal({title:"失败！",text:"配置修改失败，请检查您是否登陆",icon:"warning"}))},n.send(JSON.stringify(t_body))}else swal("配置修改已取消！","您输入了空值","success")}))}function hpp_add_config(){swal({content:{element:"input",attributes:{placeholder:"输入键名"}}}).then((t=>{swal({content:{element:"input",attributes:{placeholder:"输入键值"}}}).then((e=>{if(""!=t&null!=t&""!=e&null!=e){t_body={index:t,value:e};var n=ajaxObject();n.open("POST","/hpp/admin/api/edit_config",!0),n.setRequestHeader("Content-Type","text/plain"),n.onreadystatechange=function(){4==n.readyState&&(200==n.status?swal("已更改配置！",{icon:"success",buttons:{yes:"是"}}).then((t=>{window.location.reload()})):swal({title:"失败！",text:"配置修改失败，请检查您是否登陆",icon:"warning"}))},n.send(JSON.stringify(t_body))}else swal("配置修改已取消！","您输入了空值","success")}))}))}$.getJSON(ctJson,(function(t){document.getElementById("tbody_config").innerHTML="",$.each(t,(function(t,e){$("#tbody_config").append(`\n\t\t\t\t<tr>\n                          <td>\n                           ${t}\n                          </td>\n                          <td>\n                            ${e}\n                          </td><td><a href="javascript:edit_config('${t}')">修改</td>\n                `)})),document.getElementById("tbody_config").innerHTML+='<tr><a href="javascript:hpp_add_config()">新增一项</a> <td> </td> <td> </td><td></td>'}));