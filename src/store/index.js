import Vue from 'vue'
import Vuex from 'vuex'
import actions  from './actions'
import mutations  from './mutations'
import getters  from './getters'

Vue.use(Vuex)

  export default new Vuex.Store({
    state: {
      imageCordinates: {},
      imageUrl: 'http://172.16.60.128:6789/products/Virtual/54607c1317207c5f03d63af1/579f3e8e5f7f693d030654b7/ProductMaster/main/cl02-black_3.jpg',
      defaultImprintMethod: 'multi_color',
      imprintMethodImage: 'static/images/multi_color.png',
      userUploadedImageName: null,
      isUpload: false,
      isTextAdded: false,
      text: null,
      productImage: 'product-img.png',
      productVariationImages: [],
      productsideImages: [
        {
          name: 'Back',
          image: 'back-view-white.png'
        },
        {
          name: 'Left',
          image: 'left-view-white.png'
        },
        {
          name: 'Right',
          image: 'right-view-white.png'
        },
      ],
      productImprint: [],
      isSelectedArea: null,
      virtualData: {},
      fontFamily: [],
      rotate:0,
      opacity:0,
      aPMS: ['Yellow C','Yellow 012 C','Orange 021 C','Warm Red C','Red 032 C','Rubine Red C','Rhodamine Red C','Purple C','Violet C','Blue 072 C','Reflex Blue C','Process Blue C','Green C','Black C','Yellow 0131 C','Red 0331 C','Magenta 0521 C','Violet 0631 C','Blue 0821 C','Green 0921 C','Black 0961 C','801 C','802 C','803 C','804 C','805 C','806 C','807 C','871 C','872 C','873 C','874 C','875 C','876 C','877 C','Medium Yellow C','Bright Orange C','Bright Red C','Strong Red C','Pink C','Medium Purple C','Dark Blue C','Medium Blue C','Bright Green C','Neutral Black C','100 C','101 C','102 C','103 C','104 C','105 C','7401 C','7402 C','7403 C','7404 C','7405 C','7406 C','7407 C','106 C','107 C','108 C','109 C','110 C','111 C','112 C','113 C','114 C','115 C','116 C','117 C','118 C','119 C','127 C','128 C','129 C','130 C','131 C','132 C','133 C','1205 C','1215 C','1225 C','1235 C','1245 C','1255 C','1265 C','120 C','121 C','122 C','123 C','124 C','125 C','126 C','7548 C','7549 C','7550 C','7551 C','7552 C','7553 C','7554 C','7555 C','7556 C','7557 C','7558 C','7559 C','7560 C','7561 C','134 C','135 C','136 C','137 C','138 C','139 C','140 C','1345 C','1355 C','1365 C','1375 C','1385 C','1395 C','1405 C','141 C','142 C','143 C','144 C','145 C','146 C','147 C','7408 C','7409 C','7410 C','7411 C','7412 C','7413 C','7414 C','7562 C','7563 C','7564 C','7565 C','7566 C','7567 C','7568 C','7569 C','7570 C','7571 C','7572 C','7573 C','7574 C','7575 C','712 C','713 C','714 C','715 C','716 C','717 C','718 C','148 C','149 C','150 C','151 C','152 C','153 C','154 C','155 C','156 C','157 C','158 C','159 C','160 C','161 C','1485 C','1495 C','1505 C','1525 C','1535 C','1545 C','1555 C','1565 C','1575 C','1585 C','1595 C','1605 C','1615 C','162 C','163 C','164 C','165 C','166 C','167 C','168 C','7576 C','7577 C','7578 C','7579 C','7580 C','7581 C','7582 C','1625 C','1635 C','1645 C','1655 C','1665 C','1675 C','1685 C','169 C','170 C','171 C','172 C','173 C','174 C','175 C','7583 C','7584 C','7585 C','7586 C','7587 C','7588 C','7589 C','7590 C','7591 C','7592 C','7593 C','7594 C','7595 C','7596 C','7597 C','7598 C','7599 C','7600 C','7601 C','7602 C','7603 C','7604 C','7605 C','7606 C','7607 C','7608 C','7609 C','7610 C','7611 C','7612 C','7613 C','7614 C','7615 C','7616 C','7617 C','7520 C','7521 C','7522 C','7523 C','7524 C','7525 C','7526 C','489 C','488 C','487 C','486 C','485 C','484 C','483 C','176 C','177 C','178 C','179 C','180 C','181 C','1765 C','1775 C','1785 C','1788 C','1795 C','1805 C','1815 C','1767 C','1777 C','1787 C','1797 C','1807 C','1817 C','7618 C','7619 C','7620 C','7621 C','7622 C','7623 C','7624 C','7625 C','7626 C','7627 C','7628 C','7629 C','7630 C','7631 C','7415 C','7416 C','7417 C','7418 C','7419 C','7420 C','7421 C','182 C','183 C','184 C','185 C','186 C','187 C','188 C','196 C','197 C','198 C','199 C','200 C','201 C','202 C','189 C','190 C','191 C','192 C','193 C','194 C','195 C','1895 C','1905 C','1915 C','1925 C','1935 C','1945 C','1955 C','705 C','706 C','707 C','708 C','709 C','710 C','711 C','698 C','699 C','700 C','701 C','702 C','703 C','704 C','203 C','204 C','205 C','206 C','207 C','208 C','209 C','210 C','211 C','212 C','213 C','214 C','215 C','216 C','7422 C','7423 C','7424 C','7425 C','7426 C','7427 C','7428 C','7632 C','7633 C','7634 C','7635 C','7636 C','7637 C','7638 C','217 C','218 C','219 C','220 C','221 C','222 C','7639 C','7640 C','7641 C','7642 C','7643 C','7644 C','7645 C','223 C','224 C','225 C','226 C','227 C','228 C','229 C','230 C','231 C','232 C','233 C','234 C','235 C','670 C','671 C','672 C','673 C','674 C','675 C','676 C','677 C','678 C','679 C','680 C','681 C','682 C','683 C','684 C','685 C','686 C','687 C','688 C','689 C','690 C','510 C','509 C','508 C','507 C','506 C','505 C','504 C','7429 C','7430 C','7431 C','7432 C','7433 C','7434 C','7435 C','691 C','692 C','693 C','694 C','695 C','696 C','697 C','496 C','495 C','494 C','493 C','492 C','491 C','490 C','503 C','502 C','501 C','500 C','499 C','498 C','497 C','5035 C','5025 C','5015 C','5005 C','4995 C','4985 C','4975 C','236 C','237 C','238 C','239 C','240 C','241 C','242 C','2365 C','2375 C','2385 C','2395 C','2405 C','2415 C','2425 C','243 C','244 C','245 C','246 C','247 C','248 C','249 C','7646 C','7647 C','7648 C','7649 C','7650 C','7651 C','7652 C','250 C','251 C','252 C','253 C','254 C','255 C','517 C','516 C','515 C','514 C','513 C','512 C','511 C','7436 C','7437 C','7438 C','7439 C','7440 C','7441 C','7442 C','2562 C','2572 C','2582 C','2592 C','2602 C','2612 C','2622 C','7653 C','7654 C','7655 C','7656 C','7657 C','7658 C','7659 C','524 C','523 C','522 C','521 C','520 C','519 C','518 C','5245 C','5235 C','5225 C','5215 C','5205 C','5195 C','5185 C','5175 C','5165 C','5155 C','5145 C','5135 C','5125 C','5115 C','531 C','530 C','529 C','528 C','527 C','526 C','525 C','256 C','257 C','258 C','259 C','260 C','261 C','262 C','2563 C','2573 C','2583 C','2593 C','2603 C','2613 C','2623 C','7660 C','7661 C','7662 C','7663 C','7664 C','7665 C','7666 C','2567 C','2577 C','2587 C','2597 C','2607 C','2617 C','2627 C','263 C','264 C','265 C','266 C','267 C','268 C','269 C','2635 C','2645 C','2655 C','2665 C','2685 C','2695 C','270 C','271 C','272 C','273 C','274 C','275 C','276 C','2705 C','2715 C','2725 C','2735 C','2745 C','2755 C','2765 C','7667 C','7668 C','7669 C','7670 C','7671 C','7672 C','7673 C','7443 C','7444 C','7445 C','7446 C','7447 C','7448 C','7449 C','7674 C','7675 C','7676 C','7677 C','7678 C','7679 C','7680 C','663 C','664 C','665 C','666 C','667 C','668 C','669 C','5315 C','5305 C','5295 C','5285 C','5275 C','5265 C','5255 C','538 C','537 C','536 C','535 C','534 C','533 C','532 C','7541 C','7542 C','7543 C','7544 C','7545 C','7546 C','7547 C','552 C','551 C','550 C','549 C','548 C','547 C','546 C','5455 C','5445 C','5435 C','5425 C','5415 C','5405 C','5395 C','642 C','643 C','644 C','645 C','646 C','647 C','648 C','649 C','650 C','651 C','652 C','653 C','654 C','655 C','656 C','657 C','658 C','659 C','660 C','661 C','662 C','7450 C','7451 C','7452 C','7453 C','7454 C','7455 C','7456 C','2706 C','2716 C','2726 C','2736 C','2746 C','2756 C','2766 C','2708 C','2718 C','2728 C','2738 C','2748 C','2758 C','2768 C','2707 C','2717 C','2727 C','2747 C','2757 C','2767 C','277 C','278 C','279 C','280 C','281 C','282 C','283 C','284 C','285 C','286 C','287 C','288 C','289 C','7681 C','7682 C','7683 C','7684 C','7685 C','7686 C','7687 C','545 C','544 C','543 C','542 C','541 C','540 C','539 C','290 C','291 C','292 C','293 C','294 C','295 C','296 C','2905 C','2915 C','2925 C','2935 C','2945 C','2955 C','2965 C','297 C','298 C','299 C','300 C','301 C','302 C','303 C','7688 C','7689 C','7690 C','7691 C','7692 C','7693 C','7694 C','2975 C','2985 C','2995 C','3005 C','3015 C','3025 C','3035 C','7695 C','7696 C','7697 C','7698 C','7699 C','7700 C','7701 C','7457 C','7458 C','7459 C','7460 C','7461 C','7462 C','7463 C','304 C','305 C','306 C','307 C','308 C','309 C','635 C','636 C','637 C','638 C','639 C','640 C','641 C','7702 C','7703 C','7704 C','7705 C','7706 C','7707 C','7708 C','628 C','629 C','630 C','631 C','632 C','633 C','634 C','310 C','311 C','312 C','313 C','314 C','315 C','316 C','3105 C','3115 C','3125 C','3135 C','3145 C','3155 C','3165 C','7709 C','7710 C','7711 C','7712 C','7713 C','7714 C','7715 C','317 C','318 C','319 C','320 C','321 C','322 C','323 C','7464 C','7465 C','7466 C','7467 C','7468 C','7469 C','7470 C','7471 C','7472 C','7473 C','7474 C','7475 C','7476 C','7477 C','5523 C','5513 C','5503 C','5493 C','5483 C','5473 C','5463 C','7716 C','7717 C','7718 C','7719 C','7720 C','7721 C','7722 C','324 C','325 C','326 C','327 C','328 C','329 C','330 C','3242 C','3252 C','3262 C','3272 C','3282 C','3292 C','3302 C','3245 C','3255 C','3265 C','3275 C','3285 C','3295 C','3305 C','3248 C','3258 C','3268 C','3278 C','3288 C','3298 C','3308 C','566 C','565 C','564 C','563 C','562 C','561 C','560 C','573 C','572 C','571 C','570 C','569 C','568 C','567 C','559 C','558 C','557 C','556 C','555 C','554 C','553 C','5595 C','5585 C','5575 C','5565 C','5555 C','5545 C','5535 C','5665 C','5655 C','5645 C','5635 C','5625 C','5615 C','5605 C','5527 C','5517 C','5507 C','5497 C','5487 C','5477 C','5467 C','621 C','622 C','623 C','624 C','625 C','626 C','627 C','331 C','332 C','333 C','334 C','335 C','336 C','337 C','338 C','339 C','340 C','341 C','342 C','343 C','7723 C','7724 C','7725 C','7726 C','7727 C','7728 C','7729 C','3375 C','3385 C','3395 C','3405 C','3415 C','3425 C','3435 C','344 C','345 C','346 C','347 C','348 C','349 C','350 C','351 C','352 C','353 C','354 C','355 C','356 C','357 C','7478 C','7479 C','7480 C','7481 C','7482 C','7483 C','7484 C','7730 C','7731 C','7732 C','7733 C','7734 C','7735 C','7736 C','7737 C','7738 C','7739 C','7740 C','7741 C','7742 C','7743 C','358 C','359 C','360 C','361 C','362 C','363 C','364 C','7485 C','7486 C','7487 C','7488 C','7489 C','7490 C','7491 C','365 C','366 C','367 C','368 C','369 C','370 C','371 C','372 C','373 C','374 C','375 C','376 C','377 C','378 C','580 C','579 C','578 C','577 C','576 C','575 C','574 C','5807 C','5797 C','5787 C','5777 C','5767 C','5757 C','5747 C','5875 C','5865 C','5855 C','5845 C','5835 C','5825 C','5815 C','5803 C','5793 C','5783 C','5773 C','5763 C','5753 C','5743 C','7492 C','7493 C','7494 C','7495 C','7496 C','7497 C','7498 C','7744 C','7745 C','7746 C','7747 C','7748 C','7749 C','7750 C','379 C','380 C','381 C','382 C','383 C','384 C','385 C','386 C','387 C','388 C','389 C','390 C','391 C','392 C','587 C','586 C','585 C','584 C','583 C','582 C','581 C','393 C','394 C','395 C','396 C','397 C','398 C','399 C','3935 C','3945 C','3955 C','3965 C','3975 C','3985 C','3995 C','600 C','601 C','602 C','603 C','604 C','605 C','606 C','607 C','608 C','609 C','610 C','611 C','612 C','613 C','461 C','460 C','459 C','458 C','457 C','456 C','455 C','614 C','615 C','616 C','617 C','618 C','619 C','620 C','7751 C','7752 C','7753 C','7754 C','7755 C','7756 C','7757 C','7758 C','7759 C','7760 C','7761 C','7762 C','7763 C','7764 C','7765 C','7766 C','7767 C','7768 C','7769 C','7770 C','7771 C','4545 C','4535 C','4525 C','4515 C','4505 C','4495 C','4485 C','454 C','453 C','452 C','451 C','450 C','449 C','448 C','7499 C','7500 C','7501 C','7502 C','7503 C','7504 C','7505 C','468 C','467 C','466 C','465 C','464 C','463 C','462 C','7506 C','7507 C','7508 C','7509 C','7510 C','7511 C','7512 C','719 C','720 C','721 C','722 C','723 C','724 C','725 C','475 C','474 C','473 C','472 C','471 C','470 C','469 C','726 C','727 C','728 C','729 C','730 C','731 C','732 C','4685 C','4675 C','4665 C','4655 C','4645 C','4635 C','4625 C','7513 C','7514 C','7515 C','7516 C','7517 C','7518 C','7519 C','4755 C','4745 C','4735 C','4725 C','4715 C','4705 C','4695 C','482 C','481 C','480 C','479 C','478 C','477 C','476 C','7527 C','7528 C','7529 C','7530 C','7531 C','7532 C','7533 C','7534 C','7535 C','7536 C','7537 C','7538 C','7539 C','7540 C','427 C','428 C','429 C','430 C','431 C','432 C','433 C','420 C','421 C','422 C','423 C','424 C','425 C','426 C','441 C','442 C','443 C','444 C','445 C','446 C','447 C','413 C','414 C','415 C','416 C','417 C','418 C','419 C','400 C','401 C','402 C','403 C','404 C','405 C','406 C','407 C','408 C','409 C','410 C','411 C','412 C','434 C','435 C','436 C','437 C','438 C','439 C','440 C','Warm Gray 1 C','Warm Gray 2 C','Warm Gray 3 C','Warm Gray 4 C','Warm Gray 5 C','Warm Gray 6 C','Warm Gray 7 C','Warm Gray 8 C','Warm Gray 9 C','Warm Gray 10 C','Warm Gray 11 C','Cool Gray 1 C','Cool Gray 2 C','Cool Gray 3 C','Cool Gray 4 C','Cool Gray 5 C','Cool Gray 6 C','Cool Gray 7 C','Cool Gray 8 C','Cool Gray 9 C','Cool Gray 10 C','Cool Gray 11 C','Black 2 C','Black 3 C','Black 4 C','Black 5 C','Black 6 C','Black 7 C','Black','White'],
     aRGB:['FEDD00','FFD700','FE5000','F9423A','EF3340','CE0058','E10098','BB29BB','440099','10069F','001489','0085CA','00AB84','2D2926','F2F0A1','FCAEBB','F1B2DC','BF9BDE','74D1EA','9DE7D7','9E978E','009ACE','44D62C','FFE900','FFAA4D','FF7276','FF3EB5','EA27C2','84754E','85714D','866D4B','8B6F4E','87674F','8B634B','8A8D8F','FFD900','FF5E00','F93822','CE0056','D62598','4E008E','00239C','0084CA','00B08B','222223','F6EB61','F7EA48','FCE300','C5A900','AF9800','897A27','F5E1A4','ECD898','EED484','F4DA40','F2CD00','F1C400','CBA052','F9E547','FBE122','FEDB00','FFD100','DAAA00','AA8A00','9C8412','FAE053','FBDD40','FDDA24','FFCD00','C99700','AC8400','897322','F3DD6D','F3D54E','F3D03E','F2A900','CC8A00','A07400','6C571B','F8E08E','FBD872','FFC845','FFB81C','C69214','AD841F','886B25','FBDB65','FDD757','FED141','FFC72C','EAAA00','B58500','9A7611','FFC600','FFB500','D19000','B47E00','73531D','5A4522','4B3D2A','D29F13','B78B20','9F7D23','967126','8F6A2A','7D622E','6C5D34','FDD26E','FFC658','FFBF3F','FFA300','DE7C00','AF6D04','74531C','FDD086','FFC56E','FFB549','FF9E1B','D57800','996017','6E4C1E','F2C75C','F1BE48','F1B434','ED8B00','CF7F00','A76D11','715C2A','F6BE00','F0B323','FEAD77','E6A65D','D38235','DC8633','C16C18','BD9B60','D69A2D','DB8A06','CD7925','AD6433','89532F','775135','D78825','D3832B','C67D30','B67233','A7662B','9E6A38','835D32','FCC89B','FDBE87','FDAA63','F68D2E','EA7600','D45D00','BE4D00','FECB8B','FFC27B','FFB25B','FF8200','E57200','BE6A14','9B5A1A','EFD19F','EFBE7D','ECA154','E87722','CB6015','A1561C','603D20','FFAE62','FF8F1C','FF6900','B94700','94450B','653819','FFB990','FFA06A','FF7F32','FF6A13','D86018','A65523','8B4720','FFBE9F','FF9D6E','FF7F41','FF671F','E35205','BE531C','73381D','DB864E','E07E3C','DC6B2F','DC582A','C05131','864A33','674736','FFA38B','FF8D6D','FF6A39','FC4C02','DC4405','A9431E','833921','FFB3AB','FF8674','FF5C39','FA4616','CF4520','963821','6B3529','C4622D','BA5826','AF5C37','9E5330','924C2E','7B4D35','5C4738','D4B59E','C07D59','B15533','9D432C','7C3A2D','6B3D2E','5C3D31','D14124','BD472A','B33D26','8D3F2B','83412C','7B4931','674230','E4D5D3','E1BBB4','D6938A','C26E60','A4493D','823B34','683431','DDBCB0','CA9A8E','BC8A7E','A37F74','866761','6B4C4C','583D3E','EABEB0','C09C83','B46A55','AB5C57','A45248','9A6A4F','8A391B','ECC3B2','ECBAA8','EAA794','E8927C','DA291C','9A3324','653024','FFB1BB','FF808B','FF585D','E03C31','BE3A34','81312F','FFA3B5','FF8DA1','F8485E','EE2737','D22630','AF272F','7C2529','FCAFC0','FB637E','F4364C','CB333B','A4343A','643335','C66E4E','C04C36','B7312C','AB2328','93272C','8A2A2B','802F2D','E1523D','C63527','A72B2A','9E2A2B','6D3332','633231','572D2D','E6BAA8','E56A54','E04E39','CD545B','B04A5A','9B2242','651D32','FABBCB','FC9BB3','F65275','E4002B','C8102E','A6192E','76232F','ECC7CD','E89CAE','DF4661','D50032','BA0C2F','9D2235','862633','F8A3BC','F67599','EF426F','E40046','BF0D3E','9B2743','782F40','F5B6CD','F59BBB','EF4A81','E0004D','C5003E','A6093D','8A1538','F5DADF','F7CED7','F9B5C4','F890A5','EF6079','E03E52','CB2C30','F2D4D7','F4C3CC','F2ACB9','E68699','D25B73','B83A4B','9E2A2F','ECB3CB','E782A9','E0457B','CE0037','A50034','861F41','6F263D','F99FC9','F57EB6','F04E98','E31C79','CE0F69','AC145A','7D2248','F4CDD4','E06287','E24585','B52555','A4123F','971B2F','6A2C3E','D6C9CA','C4A4A7','C16784','C63663','BC204B','912F46','7E2D40','EABEDB','E56DB1','DA1884','A50050','910048','6C1D45','936D73','934054','8E2C48','732E4A','672E45','582D40','502B3A','EF95CF','EB6FBD','DF1995','D0006F','AA0061','890C58','672146','F4A6D7','F277C6','E93CAC','C6007E','A20067','840B55','EAD3E2','E6BCD8','DFA0C9','D986BA','C6579A','AE2573','960051','E5CEDB','E3C8D8','DEBED2','C996B6','B06C96','994878','7C2855','E4C6D4','DCB6C9','D0A1BA','BE84A3','A76389','893B67','612141','EBBECB','E8B3C3','E4A9BB','D592AA','84344E','6F2C3F','572932','E2BCCB','DCA9BF','C9809E','B55C80','A73A64','9B3259','872651','E9CDD0','E4BEC3','D7A3AB','C48490','B46B7A','984856','893C47','F2C6CF','F1BDC8','E9A2B2','DC8699','8F3237','7F3035','5D2A2C','E9C4C7','E5BAC1','DAA5AD','C6858F','7A3E3A','6A3735','512F2E','DFC2C3','DBB7BB','CCA1A6','B07C83','9C6169','874B52','3F2021','F1A7DC','EC86D0','E45DBF','DB3EB1','C5299B','AF1685','80225F','EFBAE1','E277CD','D539B5','C800A1','B0008E','9E007E','830065','EAB8E4','E59BDC','DD7FD3','C724B1','BB16A3','A51890','80276C','A56E87','A83D72','991E66','8A1B61','722257','6A2A5B','5E2751','E7BAE4','DD9CDF','C964CF','AD1AAC','981D97','72246C','EBC6DF','E6BEDD','E2ACD7','D48BC8','93328E','833177','612C51','EEDAEA','CCAED0','D59ED7','B288B9','A277A6','9F5CC0','963CBD','D7A9E3','C98BDB','AC4FC6','9B26B6','87189D','772583','653165','948794','A2789C','A15A95','8E3A80','6E2B62','6A3460','5D3754','D5C2D8','C9B1D0','BA9CC5','A57FB2','642F6C','59315F','4B3048','DBCDD3','D0BEC7','C6B0BC','AF95A6','86647A','66435A','4A3041','D8C8D1','D3C0CD','BFA5B8','9B7793','7E5475','693C5E','512A44','DFC8E7','D7B9E4','CAA2DD','B580D1','8031A7','702F8A','572C5F','D6BFDD','C6A1CF','8C4799','6D2077','642667','5D285F','51284F','CBA3D8','B884CB','A05EB5','84329B','702082','671E75','5F2167','9991A4','8D6E97','7A4183','6B3077','653279','5E366E','5C4E63','C1A0DA','A77BCA','8246AF','5C068C','500778','470A68','3C1053','D7C6E6','C1A7E2','9063CD','753BBD','5F259F','582C83','512D6D','C5B4E3','AD96DC','9678D3','7D55C7','330072','2E1A47','B4B5DF','9595D2','7474C1','24135F','211551','201747','221C35','A7A4E0','8B84D7','685BC7','2E008B','280071','250E62','201547','6E7CA0','686E9F','615E9B','565294','514689','4C4184','535486','DDDAE8','B6B8DC','A7A2C3','8986CA','5D4777','4B384C','41273B','878CB4','7C7FAB','7566A0','6F5091','68478D','563D82','523178','E5E1E6','E0DBE3','C6BCD0','A192B2','7C6992','614B79','3F2A56','D8D7DF','C6C4D2','B3B0C4','8D89A5','595478','403A60','1E1A34','C5CFDA','BBC7D6','A2B2C8','8E9FBC','1B365D','1F2A44','1C1F2A','D9E1E2','A4BCC2','98A4AE','768692','425563','253746','131E29','B9D3DC','A3C7D2','8DB9CA','6BA4B8','003D4C','00313C','072B31','BFCED6','B7C9D3','A6BBC8','7A99AC','5B7F95','4F758B','081F2C','D1DDE6','C6D6E3','9BB8D3','7DA1C4','5E8AB4','236192','002E5D','DBE2E9','CED9E5','A7BCD6','7D9BC1','326295','003A70','002554','DDE5ED','C8D8EB','B1C9E8','7BA4DB','407EC9','003594','001A70','BDC5DB','89ABE3','8094DD','7BA6DE','5F8FB4','3A5DAE','606EB2','CBD3EB','9FAEE5','485CC7','1E22AA','171C8F','151F6D','141B4D','B8CCEA','5C88DA','0047BB','06038D','001871','001E62','071D49','C3D7EE','A7C6ED','307FE2','001A72','001E60','13294B','ABCAE9','8BB8E8','418FDE','012169','00205B','041E42','92C1E9','6CACE4','0072CE','0033A0','003087','002D72','0C2340','94A9CB','6787B7','426DA9','385E9D','2C5697','1D4F91','1D428A','C6DAE7','BDD6E6','A4C8E1','7BAFD4','003C71','003057','00263A','B9D9EB','9BCBEB','69B3E7','003DA5','002F6C','002855','041C2C','8DC8E8','62B5E5','009CDE','0057B8','004C97','003865','00263E','71C5E8','41B6E6','00A3E0','005EB8','004B87','003B5C','002A3A','4698CB','298FC2','0076A8','006298','005587','004976','01426A','99D6EA','5BC2E7','00A9E0','0077C8','00629B','004F71','003E51','7BA7BC','6399AE','4E87A0','41748D','34657F','165C7D','005776','BBDDE6','71B2C9','4298B5','0086BF','007DBA','00558C','002B49','9ADBE8','59CBE8','00B5E2','006BA6','00587C','003B49','A4DBE8','8BD3E6','4EC3E0','00AFD7','0095C8','0082BA','0067A0','48A9C5','009CBD','0085AD','007096','006A8E','00617F','005670','B8DDE1','9BD3DD','77C5D5','3EB1C8','0093B2','007396','005F83','6AD1E3','05C3DE','00A9CE','0092BC','007FA3','00677F','004851','68D2DF','00C1D5','00AEC7','008EAA','00778B','006272','004F59','63B1BC','00A7B5','0097A9','00859B','007D8A','007680','006269','B1E4E3','88DBDF','2DCCD3','009CA6','008C95','007377','005F61','A0D1CA','40C1AC','00B0B9','00A3AD','007398','005F86','005A70','7EDDD3','5CB8B2','279989','007681','487A7B','0D5257','244C5A','B6CFD0','ABC7CA','94B7BB','7FA9AE','4F868E','115E67','07272D','00968F','00857D','007672','006D68','00635B','005E5D','005151','9CDBD9','64CCC9','00B2A9','008675','007367','00685E','00534C','71DBD4','2AD2C9','00BFB3','00A499','008578','00594F','004C45','7CE0D3','2CD5C4','00C7B1','00B398','009681','007864','004E42','6DCDB8','49C5B1','00AB8E','009B77','008264','006A52','034638','B9DCD2','A1D6CA','86C8BC','6BBBAE','006F62','00594C','1D3C34','B5E3D8','A5DFD3','98DBCE','6BCABA','00816D','006C5B','173F35','ADCAB8','9ABEAA','85B09A','6FA287','28724F','205C40','284734','BFCEC2','A7BDB1','92ACA0','7F9C90','5C7F71','43695B','183028','BAC5B9','B0BDB0','A3B2A4','94A596','708573','5E7461','22372B','BCC9C5','B1C0BC','9DB0AC','829995','5D7975','3E5D58','18332F','D1E0D7','B7CDC2','9AB9AD','789F90','507F70','285C4D','13322B','A7E6D7','8CE2D0','3CDBC0','009775','007B5F','00664F','8FD6BD','6ECEB2','00B388','00965E','007A53','006747','115740','50A684','00966C','008755','007B4B','006F44','006845','005844','7AE1BF','47D7AC','00C389','00AF66','007749','006341','154734','A0DAB3','91D6AC','71CC98','009A44','00843D','046A38','2C5234','A2E4B8','8FE2B0','80E0A7','00B140','009639','007A33','215732','9BE3BF','26D07C','00BF6F','00B74F','009F4D','275D38','00573F','4B9560','228848','007A3E','007041','286140','36573B','395542','6BA539','48A23F','319B42','3A913F','44883E','4A773C','44693D','ADDC91','A1D884','6CC24A','43B02A','509E2F','4C8C2B','4A7729','D0DEBB','BCE194','8EDD65','78D64B','74AA50','719949','79863C','C2E189','B7DD79','A4D65E','78BE20','64A70B','658D1B','546223','D4EB8E','CDEA80','C5E86C','97D700','84BD00','7A9A01','59621D','C4D6A4','BCD19B','B7CE95','A9C47F','789D4A','67823A','4E5B31','D0D1AB','C6C89B','BABD8B','A2A569','8A8D4A','6D712E','3D441E','D2CE9E','CBC793','C0BB87','AFA96E','A09958','89813D','555025','C3C6A8','B3B995','A3AA83','899064','737B4C','5E6738','3E4827','BFCC80','BBC592','9CAF88','8F993E','76881D','7A7256','5B6236','BABC16','ABAD23','999B30','888D30','7C8034','727337','656635','E2E868','DBE442','CEDC00','C4D600','A8AD00','949300','787121','E9EC6B','E3E935','E0E721','D0DF00','B5BD00','9A9500','827A04','E3E48D','E0E27C','DBDE70','D2D755','B7BF10','8E8C13','625D20','F0EC74','EDE939','ECE81A','E1E000','BFB800','ADA400','A09200','F3EA5D','F3E500','EFDF00','EEDC00','BBA600','9A8700','685C20','F1EB9C','F0E991','F0E87B','EDE04B','EADA24','E1CD00','CFB500','EBE49A','E9E186','E6DE77','E1D555','D7C826','C4B000','B39B00','E9DF97','E4D77E','DECD63','D9C756','B89D18','A28E2A','695B24','DCD59A','D6CF8D','D0C883','C0B561','AC9F3C','9F912A','8A7B19','CAB64B','CFB023','C1A01E','A08629','897630','736635','675E33','D4C304','C4B200','91852C','747136','5D6439','585C3B','535435','BBB323','B4A91F','AA9D2E','8F7E35','716135','635939','4E4934','D5CB9F','CFC493','C5B783','B3A369','998542','8C7732','614F25','CAC7A7','BFBB98','B0AA7E','9B945F','594A25','524727','4A412A','F1E6B2','DFD1A7','D9C89E','CEB888','A89968','94795D','816040','DDCBA4','D3BC8D','C6AA76','B9975B','8B5B29','744F28','5C462B','EFDBB2','FCD299','E1B87F','D6A461','C6893F','B77729','A6631B','EDC8A3','E7B78A','DDA46F','C88242','B36924','934D11','7D3F16','F3CFB3','F1C6A7','F0BF9B','E59E6D','B86125','A45A2A','693F23','E0C09F','D9B48F','CDA077','B58150','9E652E','774212','623412','E0C6AD','DCBFA6','CDA788','BF9474','AD7C59','946037','4F2C1D','E1B7A7','D5A286','C58B68','99552B','85431E','6D4F47','5E4B3C','D7C4B7','CDB5A7','C0A392','AE8A79','956C58','7C4D3A','5B3427','DBC8B6','D3BBA8','C6A992','AA8066','703F2A','623B2A','4E3629','D6D2C4','C5B9AC','B7A99A','A39382','7A6855','63513D','473729','D1CCBD','B7B09C','A69F88','A7ACA2','949A90','8E9089','4B4F54','D0D3D4','C1C6C8','A2AAAD','7C878E','5B6770','333F48','1D252D','C7C9C7','B2B4B2','9EA2A2','898D8D','707372','54585A','25282A','BEC6C4','A2ACAB','919D9D','717C7D','505759','3F4444','373A36','BABBB1','A8A99E','919388','7E7F74','65665C','51534A','212322','C4BFB6','AFA9A0','9D968D','8C857B','776E64','696158','C4BCB7','B2A8A2','978C87','857874','746661','5E514D','382F2D','D0C4C5','C1B2B6','AB989D','7B6469','584446','453536','382E2C','D7D2CB','CBC4BC','BFB8AF','B6ADA5','ACA39A','A59C94','968C83','8C8279','83786F','796E65','6E6259','D9D9D6','D0D0CE','C8C9C7','BBBCBC','B1B3B3','A7A8AA','97999B','888B8D','75787B','63666A','53565A','332F21','212721','31261D','3E2B2E','101820','3D3935','000000','FFFFFF'],
    },
    actions,
    mutations,
    getters
  })
