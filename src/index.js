
import {unicodeMinimize} from "./font/iconfont.woff";
import {iconfont,iconSearch,iconfont_iconMaximize} from "./font/iconfont.css";

import {fa_faStar,fa,faDesktop} from "font-awesome/css/font-awesome.css";

import {ionEdit,ionEye} from "ionicons/css/ionicons.css";

import {fas,faGlobe,faStar,fas_faBell} from "@fortawesome/fontawesome-free/css/all.css";



icon(iconfont,unicodeMinimize);
icon(iconfont+" "+iconSearch);
icon(iconfont_iconMaximize);

icon(fa_faStar);
icon(fa+" "+faDesktop);

icon(ionEdit);
icon(ionEye);

icon(fas+" "+faGlobe);//faGlobe只在fas中出现
icon(fas+" "+faStar);//只用了fas_faStar,但是也会打包far_faStar
icon(fas_faBell);//这么用就不会打包far_faBell了
//icon(far_faHeart);//不会打包fas_faHeart

function icon(className,inner){
	var i=document.createElement("I");
	i.className=className;
	if(inner){
		i.appendChild(document.createTextNode(inner))
	}
	document.body.appendChild(i);
}