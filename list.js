const name = ["刘宁","高致远","陈博文","陈家赫","张玉","赵雨洋","谢振轩","胡博文","崔柏文","邵允哲","刘思齐","纪文慧","刘冬宇","娄宇轩","冯子芮","于雅凡","蔡亚君","陈力","刘俊淇","刘明仁","王宇翔","徐崇轩","姚朴尘","周金阳","周墨","夏梓涵","许庄子","陈灿","宁浩辰","王希","宋奥棋","史文研","赵栗","张子茉","王秋越","王如意","甄畅畅","王熙","仝礼铭","周子谦","胥雨函","魏明昕","何珍玉","刘宇祺","赵宇顺","宋唱","陈苏皖","王子博","韦墨","鲁荣凯","鲍亦轩","沈涵","赵悦岳","王迎奥","卢子涵","程晓宁","王猛","胡天宇"];
const star = [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];
const version=2;
//配置文件编辑器：
// https://kdxhub.github.io/random_name_picker/comfig-spawn.html
// 根目录下config-spawn.html
function DisableStart(Reazon){document.getElementById('main-loadedList').innerHTML=Reazon;document.getElementById('start').disabled=true;document.getElementById('startButtonTips').innerHTML="引擎故障…";document.getElementById('startGuidancePrompt').innerHTML="请联系管理员/电教委以获取支持"};console.log("name长度="+name.length);console.log("star长度="+star.length);document.getElementById('main-loadedList').innerHTML="共计"+name.length+"名幸运儿，抽取概率均等";if(star.length!=name.length){DisableStart("E04.部署错误。数组「name」与「star」长度不等。")};if(star.length<=10){DisableStart("E05.部署错误。待选项太少（"+star.length+"项）<br>至少需要11项。")};configLoaded();
