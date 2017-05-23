function language(type, lang) {
	var temp;
	if(type == "get") {
		if($.zui.store.enable) { //检测本地储存可用性
			//可用，读取数据
			temp = $.zui.store.get("language"); //读出 language 的值，赋值给 temp
			if(temp == null) { //temp是否为空
				//为空
				temp = "cn"; //语言默认为 cn
			}
			return temp; //返回 lang数据

		} else {
			//不可用，读取cookies
			temp = $.cookie("language");
			if(temp == null) {
				temp = "cn";
			}
			return temp;
		}
	}
	if(type == "write") {
		if($.zui.store.enable) { //检测本地储存可用性
			//可用，写入数据
			$.zui.store.set("language", lang);
		} else {
			//不可用，写入cookies
			$.cookie("language", lang, {expires: 365});
		}
	}
}