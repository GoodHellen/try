#SET NAMES GBK;
#CREATE DATABASE beauty CHARSET=UTF8;
#USE beauty;
CREATE TABLE t_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(25),
	upwd VARCHAR(25)
);
INSERT INTO t_user VALUES(null,'john','123');
INSERT INTO t_user VALUES(null,'mary','123');
INSERT INTO t_user VALUES(null,'jack','123');
INSERT INTO t_user VALUES(null,'sally','123');

CREATE TABLE t_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	pname VARCHAR(200),
	price DECIMAL(10,2),
	pic VARCHAR(100),
	tag int
);
#首页上面8个 商品
INSERT INTO t_product VALUES (null,'大木健美青汁','200','img/01.jpg',1);
INSERT INTO t_product VALUES (null,'贝德玛舒妍洁肤液500ml 粉水','150','img/04.jpg',1);
INSERT INTO t_product VALUES (null,'番茄派 去黑头收缩毛孔祛吸黑头 三件套装','210','img/03.jpg',1);
INSERT INTO t_product VALUES (null,'松本清海藻泥矿物面膜350g','197','img/06.jpg',1);
INSERT INTO t_product VALUES (null,'thesaem得鲜爱可按钮干爽唇膏 M06咖啡棕色 2g','59','img/02.jpg',1);
INSERT INTO t_product VALUES (null,'韩国RE:CIPE水晶防晒喷雾150ml','70','img/05.jpg',1);
INSERT INTO t_product VALUES (null,'韩后神奇裸妆BB霜40ml','70','img/42.jpg',1);
INSERT INTO t_product VALUES (null,'Coppertone确美同水宝宝纯净防晒乳SPF30+ PA+++ 237ML','99','img/43.jpg',1);

#中部主要大部分图片
INSERT INTO t_product VALUES (null,'韩国RE:CIPE水晶防晒喷雾150ml','70','img/38.jpg',2);
INSERT INTO t_product VALUES (null,'西班牙BYPHASSE蓓昂斯卸妆水500ml','65','img/41.jpg',2);
INSERT INTO t_product VALUES (null,'Paparecipe春雨蜂蜜面膜25ml*10','100','img/14.jpg',2);
INSERT INTO t_product VALUES (null,'娥佩兰薏仁水500ml','65','img/32.jpg',2);
INSERT INTO t_product VALUES (null,'innisfree悦诗风吟薄荷散粉5g 绿色','59','img/29.jpg',2);
INSERT INTO t_product VALUES (null,'MISTINE 羽翼粉饼 S1象牙色 SPF25PA++ 10','66','img/27.jpg',2);
INSERT INTO t_product VALUES (null,'Za姬芮新能真皙美白隔离霜SPF26PA++ 35g','89','img/40.jpg',2);
INSERT INTO t_product VALUES (null,'ColorSeed多情的种子心情唇膏 #H01豆沙色','55','img/33.jpg',2);
INSERT INTO t_product VALUES (null,'洗颜专科柔澈泡沫洁面乳120g','60','img/34.jpg',2);
INSERT INTO t_product VALUES (null,'思亲肤小麦清透散粉21号（自然肤色）23g','60','img/25.jpg',2);
INSERT INTO t_product VALUES (null,'思亲肤莴苣黄瓜沁颜化妆水180ml','200','img/19.jpg',2);
INSERT INTO t_product VALUES (null,'thesaem得鲜完美遮瑕液 1.5号 自然色 6.5g','55','img/26.jpg',2);
INSERT INTO t_product VALUES (null,'美迪惠尔针剂水库美白补水保湿面膜10片','200','img/12.jpg',2);
INSERT INTO t_product VALUES (null,'KanS韩束水嫩亮颜臻享套组（洗颜霜120ml+柔肤','210','img/08.jpg',2);
INSERT INTO t_product VALUES (null,'泰国Yanhee防蚊镇痛青草药膏13g','33','img/16.jpg',2);
INSERT INTO t_product VALUES (null,'泰国Beauty Buffet Q10牛奶洗面奶100ml','35','img/36.jpg',2);
INSERT INTO t_product VALUES (null,'自然乐园芦荟多功能晒后修复镇静啫喱300ml','45','img/09.jpg',2);
INSERT INTO t_product VALUES (null,'SNP斯内普海洋燕窝补水安瓶精华面膜25ml*10','89','img/01.jpg',2);
INSERT INTO t_product VALUES (null,'MissSaori沙织小姐轻柔化妆棉1000片','30','img/13.jpg',2);
INSERT INTO t_product VALUES (null,'一叶子亮颜补水水漾鲜奢套组','55','img/20.jpg',2);
INSERT INTO t_product VALUES (null,'Coppertone确美同水宝宝纯净防晒乳SPF30+','90','img/30.jpg',2);
INSERT INTO t_product VALUES (null,'松本清海藻泥矿物面膜350g','90','img/24.jpg',2);
INSERT INTO t_product VALUES (null,'韩后仙人掌补水达人面膜 22ml*5','50','img/18.jpg',2);
INSERT INTO t_product VALUES (null,'百雀羚草本8杯水保湿水嫩面膜22g*5片','99','img/28.jpg',2);
INSERT INTO t_product VALUES (null,'SKIN79无花果水乳组合（护肤水160ml+护肤乳120','154','img/35.jpg',2);
INSERT INTO t_product VALUES (null,'thesaem得鲜舒缓茶园茶树卸妆水300ml','100','img/37.jpg',2);
INSERT INTO t_product VALUES (null,'thesaem得鲜舒缓茶园绿茶洁面霜150ml','99','img/39.jpg',2);
INSERT INTO t_product VALUES (null,'thesaem得鲜爱可按钮唇膏 02完美珊瑚红色 2g','59','img/23.jpg',2);
INSERT INTO t_product VALUES (null,'澳格菲薰衣草精油舒缓嫩白身体乳400ml','56','img/31.jpg',2);
INSERT INTO t_product VALUES (null,'英国AA网海藻芦荟眼胶60ml','255','img/10.jpg',2);
INSERT INTO t_product VALUES (null,'Efolar依芙拉魔法遮瑕膏3.8g+完美遮瑕液7.2ml 2#','56','img/01.jpg',2);
INSERT INTO t_product VALUES (null,'韩妙我的留恋日记红酒补水养颜面膜10片装','166','img/17.jpg',2);
INSERT INTO t_product VALUES (null,'KanS韩束红石榴鲜活水盈全能礼盒七件套','270','img/22.jpg',2);

#skin79初始数据
INSERT INTO t_product VALUES (null,'SKIN79 轻透水润蚕丝面膜 100ml','93.0','img/sk/s01.jpg',3);
INSERT INTO t_product VALUES (null,'SKIN79 植萃四色缤纷眼影 - 珊瑚棕色 4.5g','91.0','img/sk/s02.jpg',3);
INSERT INTO t_product VALUES (null,'SKIN79 粉红能量温和柔肤水 150ml','93.0','img/sk/s03.jpg',3);
INSERT INTO t_product VALUES (null,'SKIN79 植萃柔润唇蜜 粉色 8g','93.0','img/sk/s04.jpg',3);
INSERT INTO t_product VALUES (null,'SKIN79 SKIN79 粉红能量精华乳 100ml ','93.0','img/sk/s05.jpg',3);
INSERT INTO t_product VALUES (null,'SKIN79 柔密温和去角质啫喱 15g ','93.0','img/sk/s06.jpg',3);
INSERT INTO t_product VALUES (null,'SKIN79粉红能量眼部啫喱 15g','93.0','img/sk/s07.png',3);
INSERT INTO t_product VALUES (null,'SKIN79 氧气泡沫提亮面膜 50g','93.0','img/sk/s08.jpg',3);
INSERT INTO t_product VALUES (null,'SKIN79 粉红能量鲜活爽肤水 150ml','93.0','img/sk/s09.jpg',3);
INSERT INTO t_product VALUES (null,'SKIN79 花萃矿物可爱腮红 5g','93.0','img/sk/s10.jpg',3);
INSERT INTO t_product VALUES (null,'SKIN79精粹自然黑炭亮肌面膜','93.0','img/sk/s11.jpg',3);
INSERT INTO t_product VALUES (null,'SKIN79柔密温和洁面啫喱 100ml','93.0','img/sk/s12.jpg',3);
INSERT INTO t_product VALUES (null,'SKIN79 柔密泡沫洁面乳 100ml','93.0','img/sk/s13.jpg',3);
INSERT INTO t_product VALUES (null,'SKIN79柔密净透卸妆水 200ml','93.0','img/sk/s14.jpg',3);
INSERT INTO t_product VALUES (null,'SKIN79松芽补水清爽凝露100ml','93.0','img/sk/s15.jpg',3);
INSERT INTO t_product VALUES (null,'SKIN79松芽舒缓保湿水150ml','93.0','img/sk/s16.jpg',3);

CREATE TABLE t_cart(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	pid INT,
	count INT,
	uid INT
);
INSERT INTO t_cart VALUES(null,1,2,1);
INSERT INTO t_cart VALUES(null,1,0,2);
INSERT INTO t_cart VALUES(null,2,1,3);

CREATE TABLE t_detail(
	did INT PRIMARY KEY AUTO_INCREMENT,
	pid INT,
	showPic VARCHAR(50),
	introPic VARCHAR(50)
);
#上面8个产品的详情信息 插图片插到想吐...
INSERT INTO t_detail VALUES(null,1,'1-1,1-2,1-3','d1-1,d1-2,d1-3');
INSERT INTO t_detail VALUES(null,2,'2-1,2-2','d2-2,d2-3');
INSERT INTO t_detail VALUES(null,3,'3-1,3-2','d3-1,d3-2,d3-3');
INSERT INTO t_detail VALUES(null,4,'4-1','d4-1,d4-2');
INSERT INTO t_detail VALUES(null,5,'5-1,5-2','d5-1,d5-2,d5-3');
INSERT INTO t_detail VALUES(null,6,'06-1,06-2','d06-1,d06-2,d06-3,d06-4,d06-5,d06-6');
INSERT INTO t_detail VALUES(null,7,'7-1,7-2,7-3','d7-1,d7-2,d7-3');
INSERT INTO t_detail VALUES(null,8,'8-1,8-2,8-3,8-4','d8-1,d8-2,d8-3');
#中部产品详情
INSERT INTO t_detail VALUES(null,9,'06-1,06-2','d06-1,d06-2,d06-3,d06-4,d06-5,d06-6');
INSERT INTO t_detail VALUES(null,10,'08-1,08-2','d08-1,d08-2,d08-3,d08-4,d08-5');
INSERT INTO t_detail VALUES(null,11,'09-1,09-2,09-3','d09-1,d06-2,d09-3,d09-4,d09-5');
INSERT INTO t_detail VALUES(null,12,'10-1,10-2','d10-1,d10-2,d10-3,d10-4,d10-5');
INSERT INTO t_detail VALUES(null,13,'11-1,11-2,11-3,11-4','d11-1,d11-2,d11-3,d1-4,d11-5');
INSERT INTO t_detail VALUES(null,14,'12-1,12-2,12-3','d12-1,d12-2,d12-3,d12-4,d12-5');
INSERT INTO t_detail VALUES(null,15,'15-1,15-2,15-3,15-4,15-5','d15,');
INSERT INTO t_detail VALUES(null,16,'16-1,16-2','d16-1');
INSERT INTO t_detail VALUES(null,17,'17-1,17-2','d17-1');
INSERT INTO t_detail VALUES(null,18,'18-1,18-2','d18-1');
INSERT INTO t_detail VALUES(null,19,'19-1,19-2','d19-1');
INSERT INTO t_detail VALUES(null,20,'20-1,20-2','d20-1');
INSERT INTO t_detail VALUES(null,21,'21-1,21-2','d21-1');
INSERT INTO t_detail VALUES(null,22,'22-1,22-2','d22-1');
INSERT INTO t_detail VALUES(null,23,'23-1,23-2','d23-1');
INSERT INTO t_detail VALUES(null,24,'24-1,24-2','d24-1');
INSERT INTO t_detail VALUES(null,25,'25-1,25-2','d25-1');
INSERT INTO t_detail VALUES(null,26,'26-1,26-2','d26-1');
INSERT INTO t_detail VALUES(null,27,'27-1,27-2','d27-1');
INSERT INTO t_detail VALUES(null,28,'28-1,28-2','d28-1');
INSERT INTO t_detail VALUES(null,29,'29-1,29-2','d29-1');
INSERT INTO t_detail VALUES(null,30,'30-1,30-2','d30-1');
