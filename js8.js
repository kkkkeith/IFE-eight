// 左侧入
function leftIn(queue) {
    var content = document.getElementById("content").value;
    if(checkInput(content)) {
    	var span = document.createElement("span");
    	span.innerHTML = content;
	    //判断队列是否为空~
	   // if(!queue.innerHTML) {
		//	queue.appendChild(span);
		//}
	    //else {
			var spanList = queue.childNodes;
    	    queue.insertBefore(span,spanList[0]);
		//}
	}
}
// 右侧入
function rightIn(queue) {
	var content = document.getElementById("content").value;
    if(checkInput(content)) {
    	var span = document.createElement("span");
    	span.innerHTML = content;
    	queue.appendChild(span);
    }
}
// 左侧出
function leftOut(queue) {
	var child = queue.childNodes;
	alert(child[0].innerHTML);
	queue.removeChild(child[0]);
}
// 右侧出
function rightOut(queue) {
	var child = queue.childNodes;
	alert(child[child.length-1].innerHTML);
	queue.removeChild(child[child.length-1]);
}
// 输入验证,输入只能为整数且不能为空
function checkInput(content) {
	// 整数的正则表达式
	// reg = /^-?\d+$/;
	reg=/^[-+]?\d*$/; 
	if(content == "") {
		alert("输入不能为空");
		return false;
	}
	else if(!reg.test(content)) {
		alert("请输入整数");
		return false;
	}
	else return true;
}
// 绑定点击事件和删除事件
function init() {
	var queue = document.getElementById("queue");
	document.getElementById("leftIn").onclick = function() {
		leftIn(queue);
	};
	document.getElementById("rightIn").onclick = function() {
		rightIn(queue);
	};
	document.getElementById("leftOut").onclick = function() {
		leftOut(queue);
	};
	document.getElementById("rightOut").onclick = function() {
		rightOut(queue);
	}; 
	document.getElementById("queue").onclick = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;
		var tagName = target.tagName;
		// == 两表达式的类型不同,转换类型后比较
		if (tagName == 'SPAN') { 
			queue.removeChild(target);
		}
	}
}
init();